import { Chess } from "./vendor/chess.js";

const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
const allSquares = files.flatMap((file) => Array.from({ length: 8 }, (_, index) => `${file}${index + 1}`));
const pieceValues = { p: 1, n: 3, b: 3, r: 5, q: 9, k: 0 };
const centerScores = {
  d4: 18,
  e4: 18,
  d5: 18,
  e5: 18,
  c3: 9,
  d3: 9,
  e3: 9,
  f3: 9,
  c6: 9,
  d6: 9,
  e6: 9,
  f6: 9,
};

function evaluateMaterial(chess, perspective) {
  return allSquares.reduce((score, square) => {
    const piece = chess.get(square);
    if (!piece) {
      return score;
    }
    const value = pieceValues[piece.type] * 100;
    return score + (piece.color === perspective ? value : -value);
  }, 0);
}

function scoreMoveWithoutReply(move, chess) {
  const preview = new Chess(chess.fen());
  preview.move({ from: move.from, to: move.to, promotion: move.promotion });
  let score = 0;
  if (preview.isCheckmate()) {
    score += 100000;
  } else if (preview.isCheck()) {
    score += 900;
  }
  if (move.captured) {
    score += pieceValues[move.captured] * 120;
  }
  if (move.promotion) {
    score += 850 + pieceValues[move.promotion] * 20;
  }
  return score + (centerScores[move.to] ?? 0);
}

function orderedMoves(chess) {
  return chess
    .moves({ verbose: true })
    .map((move) => ({ move, score: scoreMoveWithoutReply(move, chess) }))
    .sort((a, b) => b.score - a.score);
}

function evaluatePosition(chess, perspective) {
  if (chess.isCheckmate()) {
    return chess.turn() === perspective ? -100000 : 100000;
  }
  if (chess.isDraw()) {
    return 0;
  }

  let score = evaluateMaterial(chess, perspective);
  for (const square of allSquares) {
    const piece = chess.get(square);
    if (!piece) {
      continue;
    }
    const squareScore = centerScores[square] ?? 0;
    score += piece.color === perspective ? squareScore : -squareScore;
  }
  if (chess.isCheck()) {
    score += chess.turn() === perspective ? -120 : 120;
  }
  const mobility = chess.moves().length;
  score += chess.turn() === perspective ? mobility * 2 : -mobility * 2;
  return score;
}

function minimax(chess, depth, alpha, beta, perspective, deadline) {
  if (Date.now() > deadline || depth === 0 || chess.isGameOver()) {
    return evaluatePosition(chess, perspective);
  }

  const maximizing = chess.turn() === perspective;
  const moves = orderedMoves(chess).slice(0, depth > 1 ? 22 : 36);
  if (maximizing) {
    let best = -Infinity;
    for (const { move } of moves) {
      const next = new Chess(chess.fen());
      next.move({ from: move.from, to: move.to, promotion: move.promotion });
      best = Math.max(best, minimax(next, depth - 1, alpha, beta, perspective, deadline));
      alpha = Math.max(alpha, best);
      if (beta <= alpha) {
        break;
      }
    }
    return best;
  }

  let best = Infinity;
  for (const { move } of moves) {
    const next = new Chess(chess.fen());
    next.move({ from: move.from, to: move.to, promotion: move.promotion });
    best = Math.min(best, minimax(next, depth - 1, alpha, beta, perspective, deadline));
    beta = Math.min(beta, best);
    if (beta <= alpha) {
      break;
    }
  }
  return best;
}

function professionalBonus(move, chess) {
  const preview = new Chess(chess.fen());
  preview.move({ from: move.from, to: move.to, promotion: move.promotion });
  let bonus = preview.isCheckmate() ? 8000 : 0;
  const usefulCheck = preview.isCheckmate() || move.captured || move.promotion || preview.moves().length <= 3;
  bonus += preview.isCheck() && usefulCheck ? 120 : 0;
  bonus -= preview.isCheck() && !usefulCheck ? 220 : 0;
  bonus += move.captured ? pieceValues[move.captured] * 18 : 0;
  bonus -= preview.moves({ verbose: true }).some((reply) => reply.to === move.to && reply.captured === move.piece)
    ? pieceValues[move.piece] * 55
    : 0;
  return bonus;
}

function chooseBestMove(fen, { depth = 4, timeLimit = 4200 } = {}) {
  const chess = new Chess(fen);
  const perspective = chess.turn();
  const deadline = Date.now() + timeLimit;
  const moves = orderedMoves(chess).slice(0, 28);
  if (!moves.length) {
    return null;
  }

  let best = null;
  for (const { move } of moves) {
    const next = new Chess(chess.fen());
    next.move({ from: move.from, to: move.to, promotion: move.promotion });
    const score = minimax(next, depth - 1, -Infinity, Infinity, perspective, deadline) + professionalBonus(move, chess);
    if (!best || score > best.score) {
      best = { move, score };
    }
    if (Date.now() > deadline) {
      break;
    }
  }
  return best?.move ?? moves[0].move;
}

self.onmessage = (event) => {
  const { id, fen, depth, timeLimit } = event.data ?? {};
  try {
    const move = chooseBestMove(fen, { depth, timeLimit });
    self.postMessage({ id, ok: Boolean(move), move });
  } catch (error) {
    self.postMessage({ id, ok: false, reason: error.message });
  }
};
