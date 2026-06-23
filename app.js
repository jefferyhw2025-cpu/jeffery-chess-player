const { Chess } = window.ChessLib;
const appVersion = "1.0.56";
const productionSiteUrl = "https://jeffery-chess-game.netlify.app";
const backupSiteUrl = "https://jefferyhw2025-cpu.github.io/jeffery-chess-player/";
const lanProtocolVersion = 1;
const lanMinimumCompatibleProtocolVersion = 1;
const lanReconnectMaxAttempts = 3;
const lanReconnectDelayMs = 1200;
const releaseNotes = {
zh: [
"v1.0.56：玩家提交反馈后会看到更清楚的反馈编号说明，方便保存编号并让开发者快速查找问题。",
"v1.0.55：走不了棋时会说明原因，卡住的 AI 回合会自动重启，并新增“吃过路兵”说明，避免兵斜走空格看起来像 bug。",
"v1.0.54：修复切换英文后段位胶囊、玩家档案和排行榜里段位名称仍显示中文的问题。",
"v1.0.53：App Store 版 Game Center 对战加入真实棋步同步；赛后新增胜负结算卡、每日训练连续奖励提示和真实棋盘摆局引导。",
"v1.0.52：App Store 版新增 Game Center 互联网对战入口和原生 GameKit 桥接；网页版继续保持独立，不显示该入口。",
"v1.0.51：普通对局的悔棋按钮不再因为开局暂无走法而灰掉；没有可悔走法时会给出清楚提示，段位赛、职业联赛、局域网和 AI 思考中仍会锁定。",
"v1.0.50：App Store、iOS 显示名、PWA、隐私政策和玩家共享版品牌名更新为 MateQuest Chess，更适合正式上线与社交媒体推广。",
"v1.0.49：App Store 版“扫码加入”接入 iPhone 摄像头，可直接扫描局域网房间二维码；网页版继续保留粘贴链接或输入房间码的方式。",
"v1.0.48：云端安全档案现在包含段位、成就、职业联赛积分和每日训练进度；每日残局与一步将死加入连续 7 天训练徽章；App Store 文案和发布安全检查继续强化。",
"v1.0.47：App Store 版新增独立局域网模式按钮：创建房间、加入附近房间、扫码加入和输入房间码；网页版保持原有局域网入口。",
"v1.0.46：修复每日残局中可能出现“兵吃国王”的非法局面，并阻止训练/FEN 载入可吃国王的位置。",
"v1.0.45：每日残局和一步将死会按本地日期自动轮换，同一天固定同一题，第二天换新题。",
"v1.0.44：LAN 页面新增可复制的房主 192.168 地址；GitHub 备用版新增局域网跳转助手，输入房主地址即可带着房间号打开可联机页面。",
"v1.0.43：修复 LAN 页面会误触发内部检测导致局域网连接测试失败的问题，普通玩家页保持干净。",
"v1.0.42：新增错题本、真实棋盘练习入口，并整理 TestFlight、Game Center 和 App Store 推广资料。",
"v1.0.41：新增首次打开引导、每日残局、一步将死训练、账号删除，并在 iOS/备用版隐藏不可用的云端备份入口。",
"v1.0.40：修复本机专属入口在发布状态面板中的可见性判断，玩家版仍保持隐藏。",
"v1.0.39：修复发布状态面板在本机入口检测完成后不会刷新的问题，并刷新缓存版本。",
"v1.0.38：发布状态面板新增内部入口状态；玩家档案新增安全云端备份基础版。",
"v1.0.37：收紧内部恢复工具入口，普通玩家页保持干净。",
"v1.0.36：LAN 失败时会自动弹出诊断并突出“复制诊断信息”；版本中心新增安全档案导入入口，并整理 App Store 最终提交资料。",
"v1.0.35：局域网连接前会自动检查房间号、服务器和当前网页来源；GitHub 备用页会明确提示改用 192.168 局域网地址或二维码。",
"v1.0.34：版本中心新增安全档案导出提醒，默认导出不包含登录密码哈希、反馈内容或私人临时资料。",
"v1.0.33：公开玩家包新增压缩处理和公开仓库安全历史审计，降低源码直读风险并防止私有文件误发布。",
"v1.0.32：新增本地终端虚拟双客户端 LAN 测试，并修复快速重连后玩家颜色可能变成观战者的问题。",
"v1.0.31：局域网新增自动重连、重新连接按钮、对方版本显示、二维码有效期提示和真实 LAN 自动化测试。",
"v1.0.30：局域网新增一键诊断、二维码图片复制/下载、扫码限制说明和旧版兼容包脚本。",
"v1.0.29：确认局域网协议向后兼容，不同游戏版本也可通过房间号或二维码对战。",
"v1.0.28：局域网新增扫码双人对战卡片，可一键生成房间二维码让朋友加入。",
"v1.0.27：反馈窗口新增备用发送方案，可复制反馈内容或用邮箱发送，并补充版本中心分享自动测试。",
"v1.0.26：备用线路会提示云端功能限制，版本中心新增分享给朋友链接和二维码。",
"v1.0.25：README、公开玩家仓库说明和一键同步脚本已更新，版本中心会更清楚显示备用线路状态。",
"v1.0.24：备用网址改为独立公开玩家仓库，私有主仓库继续保持私有。",
"v1.0.23：版本中心新增 GitHub Pages 下一步提示、PWA 安装提示、上线自检，以及档案导入前预览确认。",
"v1.0.22：新增离线可玩 PWA、发布状态面板、共享包双击启动页，以及玩家档案导出/导入。",
"v1.0.21：版本中心新增 GitHub Pages 备用网址，共享包新增先看我说明，并加入发布前一键总控脚本。",
"v1.0.20：新增 GitHub Pages 备用上线流程、一键玩家共享包和版本中心线上状态检测。",
"v1.0.19：新增继续上次对局入口、本局目标提示、家庭/朋友模式记录、拖动非法格反馈和更清楚的线上版本提示。",
"v1.0.18：新增声音试听按钮、浏览器声音提示、职业联赛我的排名和赛季奖励徽章、教程星级与移动端拖动优化。",
"v1.0.17：新增音乐/音效/棋子语音三滑杆、线上职业联赛榜、7 天赛季、复盘练习建议和关卡式教程。",
"v1.0.16：棋子说出台词时会同步播放专属音乐语音，每种棋子都有不同声线。",
"v1.0.15：调整困难及以上 AI，不再偏好无收益连续将军，减少重复和棋。",
"v1.0.14：新增独立排行榜，可查看综合榜、段位榜和职业联赛榜。",
"v1.0.13：职业联赛 AI 升级为高于职业水平的联赛冠军 AI，并在联赛中锁定为最高强度。",
"v1.0.12：新增职业联赛模式，登录玩家可用完整 AI 对局获得联赛积分，并在榜单查看所有账号排名。",
"v1.0.11：新增选择式档案恢复、段位迁移确认、健康检查状态图标、反馈编号和 LAN 失败引导。",
"v1.0.10：新增更新前档案备份、恢复提示、版本健康检查和本机开发者段位恢复入口。",
"线上正式段位首次同步时，会用本机已有段位作为初始正式段位，避免从 0 分开始。",
"v1.0.9：修复更新后空白服务器段位档案把本机段位重置为 0 的问题。",
"v1.0.8：版本中心新增资源时间、版本历史、打开游戏自动提示新版本和更新完成提示。",
"更新资源前会自动保存当前对局，刷新后继续恢复上一局。",
"右上角三点菜单新增设置中心标题，功能收纳更清楚。",
"v1.0.7：新增版本中心，玩家可随时检查更新并一键刷新到最新资源。",
"v1.0.6：背景音乐替换为 90 BPM 思考节奏，加入温暖钢琴、马林巴旋律、轻鼓和合成低音。",
"将军和将死时仍会切换为更急促的音乐提醒。",
"v1.0.5：线上段位改为服务器正式存档，玩家本地只保留缓存。",
"新增线上玩家 ID 绑定，服务器记录段位、胜率、最高段位和职业 AI 解锁状态。",
"隐私说明已更新：段位赛会处理 PGN 对局记录用于结果验证。",
"新增段位赛模式：只有完整 AI 段位赛才会结算段位积分。",
"段位赛结束后新增结算卡，清楚显示本局有效、无效和加减分原因。",
"每日任务新增奖励徽章动画和连续完成天数。",
"线上段位赛新增服务端复核，职业 AI 改为独立 Worker 搜索。",
"赛后复盘新增更好走法、失误原因和开中残局评分。",
"新增赛后复盘、AI 个性档案和每日任务。",
"iOS 版加入基础触感反馈，移动、完成任务和结束对局更有手感。",
"新增正式版上线安全检查，让玩家版本更干净稳定。",
"联机状态检测隐藏局域网地址，只显示服务器、房间和对手状态。",
"局域网邀请增加可扫码二维码，同一 Wi-Fi 的朋友可更快加入。",
"玩家档案增加完成局数、胜率、常用棋子和最后保存时间。",
],
en: [
"v1.0.56: player feedback now explains the feedback ID more clearly so players can save it and the developer can find the report faster.",
"v1.0.55: move blocks now explain why, stuck AI turns restart automatically, and en passant pawn captures are explained clearly.",
"v1.0.54: fixed rank labels staying in Chinese after switching to English, including the rank chip, player profile, and leaderboards.",
"v1.0.53: App Store Game Center play now syncs real chess moves, with a stronger result card, daily training streak rewards, and real-board practice prompts.",
"v1.0.52: added an App Store-only Game Center online play entry and native GameKit bridge while keeping the web build separate.",
"v1.0.51: Undo stays available in normal games even before a move is made, shows a clear message when there is nothing to undo, and remains locked for ranked, Pro League, LAN, and AI-thinking states.",
"v1.0.50: App Store, iOS display name, PWA, privacy policy, and player share branding were updated to MateQuest Chess for a more marketable launch identity.",
"v1.0.49: the App Store build now uses the iPhone camera for Scan to Join LAN QR codes, while the web build keeps the paste-link or room-code flow.",
"v1.0.48: safe cloud profiles now include rank, achievements, Pro League points, and daily training progress; Daily Endgame and Mate-in-One now feed a 7-day training badge; App Store copy and release safety checks were strengthened.",
"v1.0.47: added App Store-only LAN mode buttons for Create Room, Join Nearby, Scan to Join, and Enter Room Code while keeping the web LAN controls separate.",
"v1.0.46: fixed an illegal daily endgame that could allow a pawn to capture the king, and blocked training/FEN positions that allow king captures.",
"v1.0.45: daily endgame and mate-in-one puzzles now rotate by local date, staying fixed for the day and changing tomorrow.",
"v1.0.44: added a copyable host 192.168 address on LAN pages and a LAN jump helper on the GitHub backup build.",
"v1.0.43: fixed LAN pages triggering internal checks during normal play, preventing connection-test failures and keeping player pages clean.",
"v1.0.42: added a mistake book, real-board practice entry, and TestFlight/Game Center/App Store marketing prep.",
"v1.0.41: added first-run onboarding, daily endgame, mate-in-one training, account deletion, and hid unavailable cloud backup in iOS/backup builds.",
"v1.0.40: fixed local owner-entry visibility detection in the release status panel while keeping the player build hidden.",
"v1.0.39: fixed release-status refresh after the local owner-entry check and refreshed the cache version.",
"v1.0.38: release status now shows internal-entry exposure, and player profiles gain a safe cloud-backup foundation.",
"v1.0.37: tightened internal recovery controls so normal player pages stay clean.",
"v1.0.36: LAN failures now open diagnostics with a prominent copy button; the version center adds safe profile import, and App Store submission materials are refreshed.",
"v1.0.35: LAN connect now checks the room code, server, and current page first; the GitHub backup page clearly tells players to use the 192.168 LAN URL or QR code.",
"v1.0.34: added a safe profile export reminder in the version center; exports do not include login password hashes, feedback content, or private temporary data.",
"v1.0.33: added public player asset minification and public-repository history auditing to reduce source readability and prevent private files from being published.",
"v1.0.32: added a local terminal dual-client LAN test and fixed fast reconnects so players reclaim their original color.",
"v1.0.31: added LAN auto-reconnect, reconnect button, peer version display, QR lifetime hints, and a real LAN automation test.",
"v1.0.30: added one-click LAN diagnostics, QR image copy/download, scan limits, and an old-version compatibility pack script.",
"v1.0.29: confirmed LAN protocol compatibility so different game versions can still duel by room code or QR.",
"v1.0.28: LAN play now has a scan-to-duel QR card so friends can join a room faster.",
"v1.0.27: added backup feedback options for copying or emailing feedback, plus automated checks for version-center sharing.",
"v1.0.26: backup route now explains cloud-feature limits, and the version center can share the public link with a QR code.",
"v1.0.25: updated README files, public player repo notes, one-click public sync, and clearer backup-site status.",
"v1.0.24: moved the backup site to the separate public player repository while keeping the main repository private.",
"v1.0.23: added GitHub Pages next-step hints, PWA install guidance, online self-check, and profile import preview.",
"v1.0.22: added offline-play PWA support, a release status panel, a share-package launch page, and player profile export/import.",
"v1.0.21: added a GitHub Pages backup link in the version center, a read-me-first share note, and a one-command release controller.",
"v1.0.20: added a GitHub Pages backup publish flow, one-click player share package, and live-site status checks in the version center.",
"v1.0.19: added a continue-last-game prompt, game goals, family/friend records, invalid drag feedback, and clearer live-version hints.",
"v1.0.18: added sound test buttons, browser audio hints, Pro League my rank and season reward badges, tutorial stars, and smoother mobile dragging.",
"v1.0.17: added separate music/effects/voice volume sliders, online Pro League leaderboard, 7-day seasons, review practice advice, and lesson-style training.",
"v1.0.16: piece lines now play matching musical voice cues, with a different voice for every piece.",
"v1.0.15: adjusted Hard and stronger AI to avoid pointless repeated checks and reduce repetition draws.",
"v1.0.14: added a standalone leaderboard with overall, rank, and Professional League boards.",
"v1.0.13: Professional League AI is now above professional level and locked to the strongest league champion search.",
"v1.0.12: added Professional League mode with account-based points and a leaderboard for registered players.",
"v1.0.11: added selective profile restore, rank migration confirmation, health status icons, feedback IDs, and LAN failure guidance.",
"v1.0.10: added pre-update profile backup, restore hints, version health checks, and a local developer rank recovery entry.",
"First online rank sync can migrate existing local rank points as the initial official rank instead of starting from 0.",
"v1.0.9: fixed empty server rank profiles resetting existing local rank points after updates.",
"v1.0.8: version center now shows resource date, version history, automatic new-version hints, and update-complete feedback.",
"The current game is saved before updating resources and restored after reload.",
"The top-right menu now has a clearer settings-center heading.",
"v1.0.7: added a version center so players can check for updates and refresh to the latest resources anytime.",
"v1.0.6: replaced the background music with a 90 BPM thinking groove using warm piano, marimba-style melody, light drums, and synth bass.",
"Check and checkmate still switch to a faster urgent musical warning.",
"v1.0.5: official online rank is now stored on the server, with local data used as a cache.",
"Added online player ID binding for rank, win rate, highest rank, and Professional AI unlock state.",
"Updated privacy notes for ranked PGN processing used to verify match results.",
"Added Ranked Match mode: only complete AI ranked games change rank points.",
"Added ranked settlement cards that explain valid scoring, invalid scoring, and point changes.",
"Added daily reward badge animations and streak-day tracking.",
"Added server review for online ranked matches and a Worker-backed professional AI search.",
"Post-game review now includes a better move, mistake reason, and phase scores.",
"Added post-game review, AI personalities, and daily tasks.",
"Added basic iOS haptics for moves, task rewards, and game results.",
"Added release safety checks for a cleaner and steadier player build.",
"LAN status now hides the LAN address and only shows server, room, and opponent state.",
"LAN invites now include a scannable QR code for friends on the same Wi-Fi.",
"Player profiles now track games played, win rate, favorite piece, and last saved time.",
],
};
const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
const ranks = [8, 7, 6, 5, 4, 3, 2, 1];
const pieceSymbols = {
p: "pawn",
n: "knight",
b: "bishop",
r: "rook",
q: "queen",
k: "king",
};
const pieceNames = {
zh: {
p: "兵",
n: "马",
b: "象",
r: "车",
q: "后",
k: "王",
},
en: {
p: "pawn",
n: "knight",
b: "bishop",
r: "rook",
q: "queen",
k: "king",
},
};
const sideNames = {
zh: { w: "白方", b: "黑方" },
en: { w: "White", b: "Black" },
};
const sideShortNames = {
zh: { w: "白", b: "黑" },
en: { w: "White", b: "Black" },
};
const pieceValues = { p: 1, n: 3, b: 3, r: 5, q: 9, k: 0 };
const promotionOrder = ["q", "r", "b", "n"];
const scoreStorageKey = "local-chess-match-score";
const rankStorageKey = "local-chess-rank-points";
const accountStorageKey = "local-chess-accounts-v1";
const currentAccountStorageKey = "local-chess-current-account";
const feedbackStorageKey = "local-chess-feedback-v1";
const feedbackMailboxAddress = "feedback@jeffery-chess.local";
const onlineRankPlayerStorageKey = "local-chess-online-rank-player-v1";
const officialRankProfileStorageKey = "local-chess-official-rank-profile-v1";
const languageStorageKey = "local-chess-language";
const boardThemeStorageKey = "local-chess-board-theme";
const achievementStorageKey = "local-chess-achievements-v1";
const aiChallengeStorageKey = "local-chess-ai-challenge-v1";
const savedGameStorageKey = "local-chess-current-game-v1";
const profileActivityStorageKey = "local-chess-profile-activity-v1";
const rankedModeStorageKey = "local-chess-ranked-mode-v1";
const professionalLeagueModeStorageKey = "local-chess-professional-league-mode-v1";
const dailyTaskStorageKey = "local-chess-daily-tasks-v1";
const dailyStarsStorageKey = "local-chess-daily-stars-v1";
const dailyStreakStorageKey = "local-chess-daily-streak-v1";
const dailyTrainingStorageKey = "local-chess-daily-training-v1";
const safeAccountProfileStorageKey = "local-chess-safe-account-profile-v1";
const tutorialLessonStorageKey = "local-chess-tutorial-lessons-v1";
const profileBackupStorageKey = "local-chess-profile-backup-v1";
const profileExportReminderStorageKey = "local-chess-profile-export-reminder-v1";
const profilePayloadTypes = new Set(["matequest-chess-profile", "jeffery-chess-profile"]);
const onlineRankMigrationStorageKey = "local-chess-online-rank-migration-v1";
const volumeSettingsStorageKey = "local-chess-volume-settings-v1";
const leagueSeasonRewardStorageKey = "local-chess-league-season-rewards-v1";
const friendModeStorageKey = "local-chess-friend-mode-v1";
const continuePromptStorageKey = "local-chess-continue-dismissed-v1";
const lanClientIdStorageKey = "local-chess-lan-client-id-v1";
const onboardingStorageKey = "local-chess-onboarding-v1";
const mistakeBookStorageKey = "local-chess-mistake-book-v1";
const localLanServerBases = ["http://127.0.0.1:5173", "http://127.0.0.1:5174"];
let liveVersionState = { status: "idle", version: "", url: productionSiteUrl };
let pagesVersionState = { status: "idle", version: "", url: backupSiteUrl };
let publishStatusState = { status: "idle" };
const professionalLeagueScores = { win: 5, loss: -3, draw: 0 };
const professionalLeagueAiName = {
zh: "联赛冠军 AI",
en: "League Champion AI",
};
const boardThemes = {
zh: {
forest: "森林",
ocean: "海岸",
walnut: "胡桃",
slate: "石板",
rose: "玫瑰",
},
en: {
forest: "Forest",
ocean: "Ocean",
walnut: "Walnut",
slate: "Slate",
rose: "Rose",
},
};
const aiLevelInfo = {
zh: {
1: { name: "新手", detail: "新手：经常随机走棋，适合第一次玩。" },
2: { name: "简单", detail: "简单：会注意明显吃子，但偶尔失误。" },
3: { name: "普通", detail: "普通：会预判对手一步回应，更少送子。" },
4: { name: "困难", detail: "困难：会搜索后续变化，主动避开反击。" },
5: { name: "大师", detail: "大师：会额外搜索对手回应，更难击败。" },
6: { name: "职业", detail: "职业：天才少年专属挑战，会进行更深搜索。职业联赛会自动升级为更强的联赛冠军 AI。" },
},
en: {
1: { name: "Beginner", detail: "Beginner: often plays random moves, great for first games." },
2: { name: "Easy", detail: "Easy: notices obvious captures, but still makes mistakes." },
3: { name: "Normal", detail: "Normal: looks one reply ahead and blunders less often." },
4: { name: "Hard", detail: "Hard: searches future lines and avoids counterplay." },
5: { name: "Master", detail: "Master: searches extra replies and is harder to beat." },
6: { name: "Professional", detail: "Professional: Genius Youth only, with deeper search. Professional League automatically upgrades to the stronger League Champion AI." },
},
};
const aiPersonas = {
zh: {
1: { name: "随性学徒", style: "试探型", motto: "我会大胆尝试，也会留给你练习机会。" },
2: { name: "守线伙伴", style: "基础防守型", motto: "先看能不能吃子，再慢慢推进。" },
3: { name: "中心猎手", style: "稳健型", motto: "先守住中心，再提前看你一步。" },
4: { name: "战术教官", style: "进攻型", motto: "我会逼你回答问题，不让局面太轻松。" },
5: { name: "大师守门人", style: "压迫型", motto: "我会等你露出破绽，然后锁住局面。" },
6: { name: "职业冠军", style: "冷静终结型", motto: "如果有胜机，我不会放过。" },
},
en: {
1: { name: "Free-Spirited Student", style: "Experimental", motto: "I will try bold moves and leave room for practice." },
2: { name: "Line Defender", style: "Basic defender", motto: "I look for simple captures, then push slowly." },
3: { name: "Center Hunter", style: "Steady", motto: "I hold the center and look one reply ahead." },
4: { name: "Tactics Coach", style: "Attacking", motto: "I will make you answer threats every turn." },
5: { name: "Master Gatekeeper", style: "Pressuring", motto: "I wait for one weakness and then tighten the board." },
6: { name: "Professional Champion", style: "Clinical finisher", motto: "If there is a win, I will not let it go." },
},
};
const aiRankScores = {
1: { win: 1, draw: 0, loss: -1 },
2: { win: 2, draw: 1, loss: -1 },
3: { win: 3, draw: 1, loss: -2 },
4: { win: 5, draw: 2, loss: -3 },
5: { win: 8, draw: 3, loss: -4 },
6: { win: 12, draw: 4, loss: -6 },
};
const dailyTaskCatalog = [
{
id: "ranked-complete",
target: 1,
reward: 1,
zh: { title: "完成段位赛", detail: "完成 1 局完整 AI 段位赛。" },
en: { title: "Finish Ranked", detail: "Finish 1 complete AI ranked game." },
},
{
id: "three-checks",
target: 3,
reward: 1,
zh: { title: "三次将军", detail: "今天完成 3 次将军。" },
en: { title: "Three Checks", detail: "Give check 3 times today." },
},
{
id: "no-hint-ai-win",
target: 1,
reward: 2,
zh: { title: "无提示胜利", detail: "不使用提示赢 1 局 AI。" },
en: { title: "No-Hint Win", detail: "Win 1 AI game without using a hint." },
},
{
id: "daily-endgame-clear",
target: 1,
reward: 1,
zh: { title: "完成每日残局", detail: "今天完成每日残局训练。" },
en: { title: "Clear Daily Endgame", detail: "Finish today's Daily Endgame." },
},
{
id: "mate-one-clear",
target: 1,
reward: 1,
zh: { title: "完成一步将死", detail: "今天完成一步将死训练。" },
en: { title: "Clear Mate-in-One", detail: "Finish today's Mate-in-One." },
},
];
const dailyEndgamePuzzles = [
{ id: "king-pawn-d-file", fen: "8/8/8/3k4/3P4/3K4/8/8 w - - 0 1" },
{ id: "king-pawn-e-file", fen: "8/8/4k3/8/4P3/4K3/8/8 w - - 0 1" },
{ id: "king-pawn-f-file", fen: "8/5k2/8/5P2/5K2/8/8/8 w - - 0 1" },
{ id: "king-pawn-c-file", fen: "8/8/2k5/2P5/2K5/8/8/8 w - - 0 1" },
{ id: "king-pawn-g-file", fen: "8/8/8/6k1/6P1/6K1/8/8 w - - 0 1" },
{ id: "king-pawn-b-file", fen: "8/8/1k6/1P6/1K6/8/8/8 w - - 0 1" },
{ id: "king-pawn-e-block", fen: "8/8/8/4k3/4P3/4K3/8/8 w - - 0 1" },
];
const mateInOnePuzzles = [
{ id: "queen-h-file-net", fen: "8/8/8/5Q2/5K1k/8/8/8 w - - 0 1" },
{ id: "queen-e-file-net", fen: "4k3/8/3Q1K2/8/8/8/8/8 w - - 0 1" },
{ id: "queen-back-rank-net", fen: "6k1/8/6K1/1Q6/8/8/8/8 w - - 0 1" },
{ id: "queen-a-file-net", fen: "8/1Q6/8/8/k7/2K5/8/8 w - - 0 1" },
{ id: "queen-corner-net", fen: "8/8/2Q5/8/8/8/7k/5K2 w - - 0 1" },
{ id: "queen-g-file-net", fen: "5Q2/7k/5K2/8/8/8/8/8 w - - 0 1" },
{ id: "queen-edge-net", fen: "k1K5/8/3Q4/8/8/8/8/8 w - - 0 1" },
];
const rankThresholds = [0, 3, 6, 10, 15, 21, 28, 36, 45, 55];
const achievementCatalog = [
{
id: "first-move",
badge: "♙",
zh: { title: "第一步", detail: "走出你的第一步。" },
en: { title: "First Move", detail: "Make your first move." },
},
{
id: "first-capture",
badge: "♜",
zh: { title: "首次吃子", detail: "第一次吃掉对方棋子。" },
en: { title: "First Capture", detail: "Capture an opponent piece for the first time." },
},
{
id: "first-check",
badge: "✚",
zh: { title: "第一次将军", detail: "第一次让对方国王被将军。" },
en: { title: "First Check", detail: "Give check for the first time." },
},
{
id: "castle-keeper",
badge: "♔",
zh: { title: "王城守卫", detail: "完成一次王车易位。" },
en: { title: "Castle Keeper", detail: "Castle once." },
},
{
id: "promotion-star",
badge: "♛",
zh: { title: "升变之星", detail: "让兵走到底线并升变。" },
en: { title: "Promotion Star", detail: "Promote a pawn." },
},
{
id: "checkmate-artist",
badge: "★",
zh: { title: "将死大师", detail: "完成一次将死。" },
en: { title: "Mate Artist", detail: "Deliver checkmate." },
},
{
id: "first-victory",
badge: "◆",
zh: { title: "首胜徽章", detail: "赢下第一盘棋。" },
en: { title: "First Victory", detail: "Win your first game." },
},
{
id: "peace-maker",
badge: "◇",
zh: { title: "和平棋手", detail: "完成一盘和棋。" },
en: { title: "Peace Maker", detail: "Finish a game as a draw." },
},
{
id: "hint-seeker",
badge: "?",
zh: { title: "求助高手", detail: "使用一次提示。" },
en: { title: "Hint Seeker", detail: "Use a hint." },
},
{
id: "tutorial-graduate",
badge: "i",
zh: { title: "教程毕业", detail: "完成新手教程。" },
en: { title: "Guide Graduate", detail: "Complete the beginner guide." },
},
{
id: "ai-challenger",
badge: "▲",
zh: { title: "AI 挑战者", detail: "开启 AI 对手。" },
en: { title: "AI Challenger", detail: "Enable the AI opponent." },
},
{
id: "ai-conqueror",
badge: "■",
zh: { title: "击败 AI", detail: "赢下一盘 AI 对局。" },
en: { title: "AI Conqueror", detail: "Win a game against the AI." },
},
{
id: "lan-traveler",
badge: "⇄",
zh: { title: "联机棋友", detail: "加入一次局域网对战。" },
en: { title: "LAN Player", detail: "Join a LAN match." },
},
{
id: "board-stylist",
badge: "✦",
zh: { title: "棋盘设计师", detail: "更换一次棋盘外观。" },
en: { title: "Board Stylist", detail: "Change the board style." },
},
{
id: "feedback-voice",
badge: "●",
zh: { title: "反馈之声", detail: "提交一次玩家反馈。" },
en: { title: "Feedback Voice", detail: "Send player feedback once." },
},
{
id: "genius-youth",
badge: "✧",
zh: { title: "天才少年", detail: "连续击败大师级 AI 12 次，且期间不使用任何提示。" },
en: { title: "Genius Youth", detail: "Defeat Master AI 12 times in a row without using any hints." },
},
{
id: "league-participant",
badge: "◇",
zh: { title: "联赛参赛者", detail: "完成一局职业联赛并进入赛季榜。" },
en: { title: "League Participant", detail: "Finish one Professional League game and enter the season board." },
},
{
id: "league-top-three",
badge: "△",
zh: { title: "联赛前三", detail: "职业联赛赛季排名进入前三。" },
en: { title: "League Top Three", detail: "Reach the top three in a Professional League season." },
},
{
id: "league-champion",
badge: "♕",
zh: { title: "联赛冠军", detail: "职业联赛赛季排名第一。" },
en: { title: "League Champion", detail: "Reach rank #1 in a Professional League season." },
},
{
id: "seven-day-trainer",
badge: "7",
zh: { title: "七日训练王", detail: "连续 7 天完成每日残局和一步将死。" },
en: { title: "7-Day Trainer", detail: "Finish Daily Endgame and Mate-in-One for 7 days in a row." },
},
];
const rankTiers = {
zh: [
{ name: "入门棋手", medal: "I" },
{ name: "青铜骑士", medal: "II" },
{ name: "白银主教", medal: "III" },
{ name: "黄金战车", medal: "IV" },
{ name: "铂金皇后", medal: "V" },
{ name: "翡翠王者", medal: "VI" },
{ name: "蓝宝大师", medal: "VII" },
{ name: "紫晶宗师", medal: "VIII" },
{ name: "钻石传奇", medal: "IX" },
{ name: "冠军王座", medal: "X" },
],
en: [
{ name: "Rookie", medal: "I" },
{ name: "Bronze Knight", medal: "II" },
{ name: "Silver Bishop", medal: "III" },
{ name: "Gold Rook", medal: "IV" },
{ name: "Platinum Queen", medal: "V" },
{ name: "Emerald King", medal: "VI" },
{ name: "Sapphire Master", medal: "VII" },
{ name: "Amethyst Grandmaster", medal: "VIII" },
{ name: "Diamond Legend", medal: "IX" },
{ name: "Crown Champion", medal: "X" },
],
};
const tutorialSteps = {
zh: [
{
title: "目标：将死国王",
text: "国际象棋的目标是让对方国王被攻击，并且没有任何合法方法逃开，这叫将死。",
tips: ["白方先走，双方轮流移动一枚棋子。", "黄色格是示例起点，绿色框是示例目标。"],
highlight: { from: "e1", to: "e8" },
},
{
title: "兵：向前推进",
text: "兵通常向前走一格，第一次移动时可以走两格；兵吃子时走斜前方一格。",
tips: ["白兵朝 8 排前进，黑兵朝 1 排前进。", "兵走到最后一排可以升变为后、车、象或马。"],
highlight: { from: "e2", to: "e4" },
},
{
title: "马：跳成 L 形",
text: "马走 L 形：横两格竖一格，或竖两格横一格。马可以跳过其他棋子。",
tips: ["开局常见走法是马从 g1 跳到 f3。", "马很适合攻击被保护较少的中心格。"],
highlight: { from: "g1", to: "f3" },
},
{
title: "象、车、后：长距离棋子",
text: "象走斜线，车走直线，后最强大，可以像车和象一样走直线或斜线。",
tips: ["长距离棋子中间不能被其他棋子挡住。", "先打开兵路，象和后才更容易出动。"],
highlight: { from: "c1", to: "g5" },
},
{
title: "王：慢，但最重要",
text: "王每次只能走一格，但不能走到会被攻击的位置。保护国王永远是第一优先级。",
tips: ["王车易位可以让国王更安全。", "被将军时，必须立刻解除将军。"],
highlight: { from: "e1", to: "g1" },
},
{
title: "吃子、将军和将死",
text: "如果你的棋子走到对方棋子所在的格子，就会吃掉它。攻击对方国王叫将军。",
tips: ["将军不是胜利，只有将死才获胜。", "被将军时可以移动王、吃掉攻击棋子，或用棋子挡住攻击线。"],
highlight: { from: "d1", to: "h5" },
},
{
title: "开局小口诀",
text: "新手开局先控制中心、发展马和象、尽快让国王安全，再寻找吃子和将军机会。",
tips: ["不要太早连续移动同一枚棋子。", "每一步先看：我的王安全吗？我的棋子会不会被吃？"],
highlight: { from: "g1", to: "f3" },
},
],
en: [
{
title: "Goal: Checkmate the King",
text: "The goal of chess is to attack the enemy king so it has no legal way to escape. That is checkmate.",
tips: ["White moves first, then players alternate turns.", "Yellow marks the sample starting square; green marks the target."],
highlight: { from: "e1", to: "e8" },
},
{
title: "Pawns: Move Forward",
text: "A pawn usually moves one square forward. On its first move, it may move two squares. Pawns capture one square diagonally forward.",
tips: ["White pawns move toward rank 8; black pawns move toward rank 1.", "A pawn that reaches the last rank can promote to a queen, rook, bishop, or knight."],
highlight: { from: "e2", to: "e4" },
},
{
title: "Knights: Jump in an L Shape",
text: "Knights move in an L shape: two squares one way and one square sideways. Knights can jump over pieces.",
tips: ["A common opening move is Ng1-f3.", "Knights are great at attacking central squares."],
highlight: { from: "g1", to: "f3" },
},
{
title: "Bishops, Rooks, and Queens",
text: "Bishops move diagonally, rooks move straight, and queens are strongest because they move like both rooks and bishops.",
tips: ["Long-range pieces cannot jump over blockers.", "Move pawns to open paths for bishops and the queen."],
highlight: { from: "c1", to: "g5" },
},
{
title: "The King: Slow but Vital",
text: "The king moves one square at a time and may never move into danger. Keeping the king safe comes first.",
tips: ["Castling can help make your king safer.", "When you are in check, you must answer it immediately."],
highlight: { from: "e1", to: "g1" },
},
{
title: "Captures, Check, and Mate",
text: "If your piece moves to a square occupied by an enemy piece, it captures it. Attacking the enemy king is called check.",
tips: ["Check is not victory; checkmate is.", "To escape check, move the king, capture the attacker, or block the attack line."],
highlight: { from: "d1", to: "h5" },
},
{
title: "Opening Basics",
text: "In the opening, control the center, develop knights and bishops, make your king safe, then look for captures and checks.",
tips: ["Do not move the same piece again and again too early.", "Before each move, ask: Is my king safe? Can my piece be captured?"],
highlight: { from: "g1", to: "f3" },
},
],
};
const i18n = {
zh: {
appTitle: "国际象棋",
boardAria: "国际象棋棋盘",
boardOnlyAria: "棋盘",
sidePanelAria: "对局面板",
currentPosition: "当前局面",
newGame: "新对局",
gameControls: "对局",
helpControls: "帮助",
viewControls: "显示与声音",
tip: "提示",
tutorial: "新手教程",
undo: "悔棋",
flip: "翻转",
musicOn: "音樂開",
musicOff: "音樂關",
feedbackButton: "反馈",
feedbackButtonAria: "打开反馈",
feedbackLabel: "玩家反馈",
feedbackTitle: "告诉我们你的想法",
feedbackCloseAria: "关闭反馈窗口",
feedbackKindAria: "反馈类型",
feedbackKinds: {
bug: "问题",
idea: "建议",
praise: "喜欢",
},
feedbackTextLabel: "反馈内容",
feedbackMailbox: "虚拟邮箱：{email}",
feedbackInboxSummary: "虚拟邮箱收件箱",
feedbackInboxEmpty: "还没有反馈",
feedbackCount: "已保存 {count} 条反馈",
feedbackIdHelp: "提交后会生成反馈编号，请保存编号，开发者可用它查找你的问题。",
feedbackNeedText: "请先写下你的反馈",
feedbackSending: "正在发送反馈...",
feedbackSaved: "反馈已发送给开发者，谢谢你",
feedbackSavedWithId: "反馈已发送给开发者，编号：{id}。请保存这个编号，方便开发者查找。",
feedbackSavedLocal: "反馈已在本机保存；线上发送暂时失败",
feedbackSavedLocalWithId: "反馈已在本机保存，编号：{id}；线上发送暂时失败。请保存编号，方便之后查找。",
feedbackSaveFailed: "暂时无法保存反馈",
feedbackBackupTitle: "备用发送",
feedbackBackupText: "如果当前线路无法发送，可复制反馈内容，或打开邮箱自行选择收件人发送。",
feedbackBackupCopy: "复制反馈内容",
feedbackBackupMail: "用邮箱发送",
feedbackBackupCopied: "反馈内容已复制，可粘贴到邮箱或聊天工具发送。",
feedbackBackupSubject: "MateQuest Chess 玩家反馈",
playerProfileButton: "档案",
playerProfileButtonAria: "打开玩家档案",
playerProfileLabel: "玩家档案",
playerProfileGuestTitle: "游客档案",
playerProfileTitle: "{name} 的档案",
playerProfileCloseAria: "关闭玩家档案",
playerProfileGuestStatus: "登录后会单独保存你的比分、段位和成就。",
playerProfileLoggedStatus: "你的比分、段位和成就正在这个账号里保存。",
playerProfileLocalMeta: "本地档案",
playerProfileCreated: "创建于 {date}",
profileRankStat: "段位",
profileAchievementStat: "成就",
profileScoreStat: "比分",
profileMaterialStat: "本局子力",
profileGamesStat: "完成局数",
profileWinRateStat: "胜率",
profileFavoritePieceStat: "常用棋子",
profileLastSavedStat: "最后保存",
profileRankValue: "{rank} · {points} 分",
profileAchievementValue: "{unlocked}/{total} · {badge}",
profileScoreValue: "白 {white} · 和 {draw} · 黑 {black}",
profileGamesValue: "{games} 局",
profileWinRateValue: "{rate}%",
profileFavoritePieceValue: "{piece} · {count} 次",
profileEmptyStat: "暂无",
profileMaterialEven: "平衡",
profileMaterialLead: "{side} +{amount}",
dailyLabel: "每日任务",
dailyTitle: "今日训练",
dailyStars: "{count} ★",
dailyTaskProgress: "{current}/{target}",
dailyTaskDone: "已完成",
dailyTaskReward: "+{count} 训练星",
dailyTaskUnlocked: "每日任务完成：{title} +{count} 训练星",
dailyStreak: "连续 {count} 天",
dailyStreakEmpty: "连续 0 天",
dailyRewardToast: "{title} +{count} 训练星",
dailyTrainingStreakTitle: "每日残局连胜",
dailyTrainingStreakDetail: "每天完成“每日残局”和“一步将死”两项，连续 7 天获得专属徽章。",
dailyTrainingStreakProgress: "今日 {done}/{total} · 连续 {count} 天",
dailyTrainingStreakComplete: "今日训练已完成 · 连续 {count} 天",
dailyTrainingStreakUnlocked: "连续训练第 {count} 天，七日训练王徽章已解锁。",
dailyTrainingEndgameComplete: "每日残局完成。",
dailyTrainingMateComplete: "一步将死完成。",
dailyTrainingRealBoardPrompt: "试着用真实棋盘摆出今天这局，再练 3 分钟。",
profileOpenAchievements: "查看成就",
profileOpenRank: "查看段位",
profileExport: "导出档案",
profileImport: "导入档案",
profileMistakeBook: "错题本",
profileRealBoard: "真实棋盘",
profileCloudBackup: "同步云端",
profileCloudRestore: "恢复云端",
profileCloudIdle: "登录后可把安全档案同步到云端。",
profileCloudReady: "云端备份会保存段位、成就、职业联赛积分和每日训练，不包含密码、反馈或私人临时资料。",
profileCloudNeedAccount: "请先登录或注册，再使用云端备份。",
profileCloudSaving: "正在同步安全档案到云端...",
profileCloudSaved: "云端备份已保存。",
profileCloudLoading: "正在读取云端备份...",
profileCloudEmpty: "还没有找到云端备份。",
profileCloudPreview: "已读取云端备份，请在导入预览里确认。",
profileCloudUnavailable: "云端备份暂时不可用，可能需要 Netlify 主站部署。",
profileCloudHiddenIos: "当前 App/备用网页版暂不显示云端备份，请使用导出/导入档案保护进度。",
deleteAccount: "删除账号",
deleteAccountConfirm: "删除账号会清除这个账号的段位、成就、每日任务和本机登录资料。请输入 {name} 确认。",
deleteAccountDone: "账号已删除，本机资料已清除。",
deleteAccountCancelled: "账号删除已取消。",
profileExportDone: "玩家档案已导出。",
profileImportDone: "玩家档案已导入，正在重新载入。",
profileImportBad: "这个档案文件无法导入。",
profileImportPreviewTitle: "导入前确认",
profileImportPreviewText: "将恢复：段位 {rank} 分、成就 {achievements} 个、职业联赛 {league} 分、连续训练 {training} 天、账号 {accounts} 个、{game}。",
profileImportHasGame: "包含未完成棋局",
profileImportNoGame: "没有棋局",
profileImportConfirm: "确认导入",
profileImportCancel: "取消",
profileImportCancelled: "已取消导入档案。",
mistakeBookTitle: "错题本",
mistakeBookSummary: "自动保存最近 {count} 个赛后复盘重点，方便下次继续练。",
mistakeBookEmpty: "还没有错题。完成一局对局后，这里会保存失误和练习方向。",
mistakeBookItem: "{date} · {result} · {mistake}",
mistakeBookResultWin: "胜利复盘",
mistakeBookResultLoss: "失利错题",
mistakeBookResultDraw: "和棋复盘",
mistakeBookPractice: "练习",
mistakeBookClear: "清空错题",
mistakeBookCleared: "错题本已清空。",
mistakeBookOpened: "已打开错题本。",
realBoardTitle: "真实棋盘练习",
realBoardText: "把当前局面摆到真实棋盘上练 3 分钟。建议先找王是否安全，再找能吃子、将军和威胁。",
realBoardCopy: "复制练习局面",
realBoardCopied: "练习局面已复制，可在自己的棋谱工具或真实棋盘练习中使用。",
realBoardOpened: "已打开真实棋盘练习。",
resultSettlementLabel: "对局结算",
resultSettlementWin: "漂亮胜利",
resultSettlementLoss: "复盘再战",
resultSettlementDraw: "稳住和棋",
resultSettlementRank: "段位 {rank} 分",
resultSettlementLeague: "职业联赛 {league} 分",
resultSettlementBadges: "成就 {count}/{total}",
resultSettlementPractice: "下一步：{advice}",
resultSettlementRealBoard: "真实棋盘练习：摆出终局，先找王安全，再找下一步威胁。",
releaseButtonAria: "查看版本更新",
releaseLabel: "版本",
releaseTitle: "更新日志",
releaseCloseAria: "关闭更新日志",
releaseVersion: "当前版本：v{version}",
releaseResourceTime: "资源时间：{date}",
releaseHistoryTitle: "版本历史",
releaseHistoryCurrent: "当前",
releaseHistoryAvailable: "可更新",
releaseUpdateComplete: "已更新到 v{version}，资源已刷新并恢复上一局。",
releaseUpdateIdle: "可检查是否有新版本。",
releaseUpdateChecking: "正在检查新版本...",
releaseUpdateReady: "发现新版本 v{version}，点击更新即可获得新资源。",
releaseUpdateLatest: "已经是最新版本。",
releaseUpdateOffline: "暂时无法检查更新，请确认网络或服务器已开启。",
releaseUpdateReloading: "正在更新资源...",
releaseLiveTitle: "当前线上状态",
releaseLiveIdle: "打开版本中心后会自动检查线上版本。",
releaseLiveChecking: "正在检查线上版本...",
releaseLiveSynced: "线上版本已同步：v{version}",
releaseLiveOutdated: "线上版本仍是 v{version}，本地最新版是 v{local}。",
releaseLiveAhead: "线上版本 v{version} 比本地更新。",
releaseLiveUnavailable: "暂时无法读取线上版本。Netlify 额度或 CORS 可能阻止检测。",
releaseLiveOpen: "备用网址：GitHub Pages",
releaseLimitTitle: "备用线路提示",
releaseLimitText: "当前为备用线路，部分云端功能可能使用本地模式，例如线上反馈、线上段位和职业联赛云端榜单。",
releaseStatusTitle: "发布状态面板",
releaseStatusIdle: "打开版本中心后会检查本地、Netlify、GitHub Pages 和共享包版本。",
releaseStatusChecking: "正在检查发布状态...",
releaseStatusDone: "发布状态已检查",
releaseStatusLocal: "本地版本",
releaseStatusNetlify: "Netlify",
releaseStatusPages: "GitHub Pages",
releaseStatusBackupLine: "备用线路",
releaseStatusBackupOnline: "已上线：GitHub Pages",
releaseStatusPublicVersion: "公开玩家版",
releaseStatusShare: "共享包",
releaseStatusAdminEntry: "内部入口",
releaseStatusAdminClean: "玩家版未外露",
releaseStatusAdminLocal: "仅本机专属入口",
releaseStatusAdminWarning: "当前页面可见，请勿发给玩家",
releaseStatusVersion: "v{version}",
releaseStatusUnavailable: "无法访问",
releaseStatusOld: "旧版 v{version}",
releaseStatusReady: "已同步 v{version}",
releaseStatusHintIdle: "这里会提示 Netlify 和 GitHub Pages 是否同步。",
releaseStatusHintPages: "GitHub Pages 未开启时，请到 GitHub 仓库 Settings -> Pages，把 Source 设为 GitHub Actions。",
releaseStatusHintReady: "备用线路已上线，玩家可从 GitHub Pages 继续进入游戏。",
releaseShareTitle: "分享给朋友",
releaseSharePill: "公开链接",
releaseShareText: "把这个玩家版链接发给朋友，或让朋友扫码打开。",
releaseShareCopy: "复制公开链接",
releaseShareCopied: "已复制公开玩家版链接。",
releaseShareQrAria: "公开玩家版二维码",
releaseProfileBackupTitle: "保护玩家档案",
releaseProfileBackupPill: "云端准备",
releaseProfileBackupText: "更新、换设备或以后同步云端前，建议导出一次安全档案。导出文件只保存游戏进度，不包含登录密码哈希、反馈内容或私人临时资料。",
releaseProfileBackupButton: "导出安全档案",
releaseProfileImportButton: "导入安全档案",
releaseProfileImportPrompt: "请选择之前导出的安全档案 JSON 文件。",
releaseProfileBackupDone: "安全档案已导出，请妥善保存 JSON 文件。",
releaseProfileBackupDismiss: "稍后提醒",
releaseProfileBackupDismissed: "已关闭本次档案导出提醒。",
pwaInstallTitle: "安装到桌面",
pwaInstallReady: "此浏览器可直接安装游戏。",
pwaInstallManual: "Chrome 可点地址栏安装图标；Safari 可用分享按钮添加到主屏幕。",
pwaInstallUnsupported: "当前打开方式不支持安装，请用 Safari 或 Chrome 通过 http/https 打开。",
pwaInstallInstalled: "已安装或已添加到桌面。",
pwaInstallButton: "安装 / 添加到主屏幕",
pwaInstallPrompted: "已打开安装提示。",
pwaInstallDismissed: "已取消安装，可稍后再试。",
releaseBackupReady: "检测到更新前档案备份，可恢复：段位 {points} 分，成就 {achievements} 个。",
releaseBackupRestored: "已恢复更新前档案，正在重新载入。",
releaseBackupRankRestored: "已恢复段位：{points} 分。",
releaseBackupAchievementsRestored: "已恢复成就：{count} 个。",
releaseBackupGameRestored: "已恢复更新前棋局，正在重新载入。",
releaseBackupNone: "暂无可恢复的旧档案。",
releaseBackupChoose: "选择要恢复的内容",
releaseHealthTitle: "版本健康检查",
releaseHealthIdle: "点击小检查，查看版本、段位、LAN 和反馈状态。",
releaseHealthChecking: "正在检查版本健康...",
releaseHealthOk: "检查完成",
releaseHealthVersion: "当前版本",
releaseHealthResources: "资源",
releaseHealthRank: "段位档案",
releaseHealthLan: "LAN",
releaseHealthFeedback: "反馈",
releaseHealthPwa: "离线安装",
releaseHealthPwaReady: "PWA 文件已准备好",
releaseHealthPwaManual: "当前浏览器需用菜单添加到桌面",
releaseHealthPwaBlocked: "当前打开方式不支持离线安装",
releaseHealthPlayerBuild: "玩家版本",
releaseHealthPlayerBuildClean: "未显示内部权限按钮",
releaseHealthPlayerBuildWarning: "检测到内部权限按钮，请检查发布包",
releaseHealthLeaderboard: "排行榜",
releaseHealthLeaderboardReady: "排行榜入口已准备好",
releaseHealthLeaderboardMissing: "未找到排行榜入口",
releaseHealthWarning: "警告：{label}",
releaseHealthLatest: "已是最新资源",
releaseHealthUpdateReady: "有新版本 v{version}",
releaseHealthOffline: "暂时无法检查资源",
releaseHealthRankOk: "正常：{points} 分",
releaseHealthRankLocal: "本地段位正常，线上会保护同步",
releaseHealthLanOn: "局域网服务器已开启",
releaseHealthLanOff: "未检测到局域网服务器",
releaseHealthLanGuide: "下一步：打开“本地局域网启动器”，再点检测状态。",
releaseHealthFeedbackReady: "反馈表单已准备好",
releaseHealthFeedbackMissing: "未找到反馈表单",
releaseLiveOld: "线上站点仍是 v{version}，需要 Netlify 重新部署后才会更新。",
checkUpdate: "检查更新",
applyUpdate: "更新资源",
checkHealth: "小检查",
onlineSelfCheck: "线上自检",
restoreBackup: "恢复旧档案",
restoreRankOnly: "只恢复段位",
restoreAchievementsOnly: "只恢复成就",
restoreGameOnly: "只恢复棋局",
achievementButtonAria: "查看成就",
achievementLabel: "玩家成就",
achievementTitle: "特殊徽章",
achievementCloseAria: "关闭成就",
achievementSummary: "已解锁 {unlocked} / {total} 个成就",
achievementUnlocked: "成就解锁：{badge} {title}",
lockedAchievement: "未解锁",
leaderboardButton: "榜单",
leaderboardButtonAria: "查看排行榜",
leaderboardLabel: "玩家排行榜",
leaderboardTitle: "排行榜",
leaderboardCloseAria: "关闭排行榜",
leaderboardSummary: "登录或注册玩家会出现在榜单中，当前账号会高亮显示。",
leaderboardOnlineSummary: "职业联赛榜会同步线上玩家；综合榜和段位榜保留本机账号排行。",
leaderboardOnlineLoading: "正在读取线上职业联赛榜...",
leaderboardOnlineOffline: "暂时无法读取线上榜单，先显示本机榜单。",
leaderboardSeason: "赛季 {id} · {start} 至 {end}",
leaderboardMyRank: "我的职业联赛排名：#{rank} · {points} 分",
leaderboardMyRankMissing: "我的职业联赛排名：暂无，完成一局职业联赛即可上榜。",
leaderboardSeasonReward: "赛季奖励：{badge} {title}",
leaderboardRewardChampion: "冠军徽章",
leaderboardRewardTopThree: "前三名徽章",
leaderboardRewardParticipant: "参与徽章",
leaderboardRewardLocked: "赛季奖励：完成职业联赛后争夺冠军、前三名和参与徽章。",
leaderboardOverallTitle: "综合榜",
leaderboardRankTitle: "段位榜",
leaderboardLeagueTitle: "职业联赛榜",
leaderboardOverallDetail: "按段位、职业联赛、成就综合排序。",
leaderboardRankDetail: "按段位积分排序。",
leaderboardLeagueDetail: "按职业联赛积分排序。",
leaderboardEmpty: "暂无登录玩家上榜",
leaderboardRowMeta: "{rank} · {achievements} 成就 · {games} 局",
leaderboardLeagueMeta: "{wins}胜 {draws}和 {losses}负",
leaderboardRankScore: "{points} 分",
leaderboardLeagueScore: "{points} 分",
leaderboardOverallScore: "{points} 总分",
submitFeedback: "提交反馈",
moreMenuAria: "更多功能",
settingsCenterLabel: "设置中心",
settingsCenterTitle: "快速管理",
accountLabel: "玩家账号",
accountGuest: "游客",
accountGuestDetail: "登录后会单独保存你的比分和段位。",
accountLoggedDetail: "{name} 的比分和段位正在单独保存。",
loginRegister: "登录 / 注册",
logout: "退出登录",
accountDelete: "删除账号",
authLoginTitle: "登录账号",
authRegisterTitle: "注册账号",
authCloseAria: "关闭登录窗口",
authTabsAria: "登录或注册",
login: "登录",
register: "注册",
username: "用户名",
password: "密码",
cancel: "取消",
accountNeedUsername: "请输入用户名",
accountBadUsername: "用户名至少 2 个字符，最多 24 个字符。",
accountNeedPassword: "请输入密码",
accountBadPassword: "密码至少 4 个字符。",
accountExists: "这个用户名已经被注册",
accountMissing: "找不到这个账号",
accountWrongPassword: "密码不正确",
accountLoginSuccess: "已登录：{name}",
accountRegisterSuccess: "注册成功：{name}",
accountLogoutSuccess: "已退出登录",
languageLabel: "語言",
languageTitle: "中英文",
languageAria: "语言选择",
lanLabel: "局域网",
lanTitle: "局域网对战",
lanAppModeLabel: "App 联机",
lanAppModeTitle: "选择局域网方式",
lanAppModeText: "App Store 版把常用联机方式放在这里；网页版继续使用下方输入框。",
gameCenterLabel: "Game Center",
gameCenterTitle: "互联网对战",
gameCenterText: "App Store 版可用 Apple Game Center 登录、随机匹配和邀请朋友；网页版保持独立。",
gameCenterAuth: "登录 Game Center",
gameCenterMatch: "随机匹配",
gameCenterDashboard: "打开 Game Center",
gameCenterStatusIdle: "等待登录 Game Center。",
gameCenterStatusAuthenticating: "正在请求 Game Center 登录...",
gameCenterStatusAuthenticated: "已登录：{player}",
gameCenterStatusAuthRequired: "需要先登录 Game Center。",
gameCenterStatusMatchmaker: "已打开 Game Center 匹配界面。",
gameCenterStatusMatchReady: "匹配成功，正在准备对局。",
gameCenterStatusDashboard: "已打开 Game Center 面板。",
gameCenterStatusCancelled: "已取消 Game Center 操作。",
gameCenterStatusFailed: "Game Center 操作失败：{reason}",
gameCenterStatusUnavailable: "当前设备暂时不能使用 Game Center：{reason}",
gameCenterStatusConnected: "Game Center 已连接：你执{side}。",
gameCenterStatusWaiting: "Game Center 对局中，请等待对手走棋。",
gameCenterStatusSent: "已发送棋步：{move}",
gameCenterStatusReceived: "收到对手棋步：{move}",
gameCenterStatusNotReady: "请先完成 Game Center 匹配。",
lanModeCreate: "创建房间",
lanModeNearby: "加入附近房间",
lanModeScan: "扫码加入",
lanModeCode: "输入房间码",
lanModeNearbyReady: "请输入朋友给你的房间号，或让房主先创建房间。",
lanModeScanPrompt: "请粘贴扫码得到的链接或房间号。",
lanModeScanEmpty: "未输入扫码链接或房间号。",
lanModeScanNativeStarting: "正在打开摄像头扫码...",
lanModeScanNativeFound: "已识别二维码，正在加入房间...",
lanModeScanNativeDenied: "无法使用摄像头。请在系统设置中允许相机权限，或改用输入房间码。",
lanModeScanNativeUnavailable: "这台设备暂时不能使用摄像头扫码，请改用输入房间码。",
lanModeScanNativeCancelled: "已取消扫码。",
lanModeCodeFocus: "请输入房间码，然后点连接。",
lanDisconnected: "未连接",
lanConnecting: "连接中",
lanConnected: "已连接",
lanSpectating: "观战中",
lanRoomPlaceholder: "房间号",
lanCreate: "创建房间",
lanConnect: "连接",
lanReconnect: "重新连接",
lanDisconnect: "断开",
lanCopyLink: "复制连接",
lanCheck: "检测状态",
lanShareLabel: "邀请链接",
lanDuelLabel: "扫码双人对战",
lanDuelTitle: "生成对战二维码",
lanDuelText: "创建房间后，朋友扫描二维码即可进入同一房间。",
lanDuelRoomEmpty: "房间号：—",
lanDuelRoom: "房间号：{room}",
lanDuelQrAria: "双人对战二维码",
lanDuelNote: "仅同一 Wi‑Fi 可用：扫码设备必须连接同一个局域网服务器。二维码只在本次局域网服务器开启期间有效。",
lanDuelNotReady: "未生成",
lanDuelReady: "可扫码",
lanDuelGenerate: "生成对战二维码",
lanDuelCreated: "双人对战二维码已生成：{room}",
lanQrCopy: "复制二维码图片",
lanQrDownload: "下载二维码图片",
lanQrCopied: "二维码图片已复制",
lanQrDownloaded: "二维码图片已下载",
lanQrCopyFallback: "无法直接复制图片，已改为下载二维码",
lanQrMissing: "请先生成二维码",
dailyEndgame: "每日残局",
mateOneTraining: "一步将死",
dailyEndgameStarted: "每日残局已载入：用王保护兵，尝试把兵安全送到底线。",
mateOneStarted: "一步将死训练已载入：白方一步将死。",
trainingNoRank: "训练局不会计算段位分。",
onboardingLabel: "欢迎",
onboardingTitle: "开始你的第一局",
onboardingText: "先完成新手教程，或直接挑战 AI。你的段位、成就和每日训练都会保存在本机。",
onboardingFeatureAi: "AI 对手",
onboardingFeatureTraining: "新手训练",
onboardingFeatureOffline: "离线可玩",
onboardingSkip: "先自己玩",
onboardingTutorial: "打开新手教程",
lanCheckLabel: "联机状态",
lanCheckTitle: "检测结果",
lanCheckIdle: "待检测",
lanCheckOnline: "正常",
lanCheckOffline: "异常",
lanCheckChecking: "检测中",
lanCheckServer: "服务器",
lanCheckServerOn: "已开启",
lanCheckServerOff: "未检测到，请先运行“本地局域网启动器”。",
lanCheckPage: "当前页面",
lanCheckPageLan: "局域网页面，可连接",
lanCheckPageBackup: "GitHub 备用网页版，不能直接开 LAN",
lanCheckPageFile: "本地文件页面，请改用局域网启动器地址",
lanCheckPageStatic: "普通网页，不能直接开 LAN",
lanCheckRoom: "房间",
lanCheckVersion: "版本兼容",
lanCheckVersionCompatible: "本机版本 v{version} / LAN 协议 v{protocol} / 可与旧版兼容",
lanCheckVersionPeer: "本机版本 v{version} / LAN 协议 v{protocol} / 对方最低协议 v{peer} / 可兼容",
lanCheckVersionTooOld: "需要更新：本机 v{version} / LAN 协议 v{protocol}，对方协议 v{peer} 太旧。",
lanCheckPeerVersion: "对方版本",
lanCheckPeerVersionReady: "{version} / 协议 v{protocol} / {status}",
lanCheckPeerVersionWaiting: "等待对方加入",
lanPeerVersionUnknown: "旧版或未知",
lanPeerCompatible: "可兼容",
lanPeerTooOld: "需要更新",
lanCheckRoomConnected: "已连接：{room}",
lanCheckRoomPending: "未连接：{room}",
lanCheckRoomEmpty: "未输入房间号",
lanCheckOpponent: "对手",
lanCheckOpponentOnline: "对手在线",
lanCheckOpponentWaiting: "等待对手加入",
lanCheckOpponentSpectating: "观战中，共 {count} 人",
lanCheckOpponentDisconnected: "尚未连接房间",
lanCheckNoticeOk: "联机状态检测完成",
lanCheckNoticeBad: "未检测到局域网服务器",
lanDiagnostic: "一键诊断",
lanDiagnosticLabel: "联机诊断",
lanDiagnosticTitle: "联机问题一键诊断",
lanDiagnosticCloseAria: "关闭联机诊断",
lanDiagnosticIdle: "点击后会检查服务器、房间、对手和局域网地址。",
lanDiagnosticChecking: "正在检查联机状态...",
lanDiagnosticReady: "诊断完成。把这些信息发给朋友或开发者，就能更快排查 LAN 问题。",
lanDiagnosticCopy: "复制诊断结果",
lanDiagnosticCopyNow: "复制诊断信息",
lanDiagnosticCopyPrompt: "连接失败。建议先复制诊断信息，发给房主或开发者排查。",
lanDiagnosticCopied: "诊断结果已复制",
lanDiagnosticDone: "完成",
lanDiagnosticAddress: "局域网地址",
lanDiagnosticAddressReady: "{url}",
lanDiagnosticAddressMissing: "未检测到局域网地址，请先运行局域网启动器。",
lanDiagnosticColor: "我的颜色",
lanDiagnosticColorWhite: "白方",
lanDiagnosticColorBlack: "黑方",
lanDiagnosticColorSpectator: "观战者",
lanDiagnosticColorNone: "尚未加入房间",
lanInviteLabel: "邀请朋友",
lanInviteTitle: "房间已准备好",
lanInviteCloseAria: "关闭邀请提示",
lanInviteText: "把这个链接发给同一 Wi‑Fi 的朋友。",
lanInviteRoom: "房间号：{room}",
lanInviteQrAria: "局域网邀请二维码",
lanHostLabel: "房主地址",
lanHostTitle: "复制给同一 Wi‑Fi 的朋友",
lanHostText: "房主运行局域网启动器后，把这个地址发给朋友。朋友也可以在 GitHub 备用版输入它。",
lanHostChecking: "正在检测房主局域网地址...",
lanHostUnavailable: "未检测到 192.168 地址，请确认局域网启动器正在运行。",
lanHostCopy: "复制房主地址",
lanHostCopied: "房主地址已复制",
lanDetailIdle: "同一 Wi‑Fi 下运行局域网启动器，然后输入相同房间号。",
lanDetailConnecting: "正在连接局域网房间 {room}...",
lanDetailWhite: "你执白方。等待黑方加入后即可对战。",
lanDetailBlack: "你执黑方。白方先走。",
lanDetailSpectator: "房间已满，你正在观战，棋盘会跟随对局更新。",
lanDetailPeerReady: "对手已连接。你执{side}。",
lanNeedRoom: "请输入房间号",
lanConnectError: "无法连接局域网服务器，请先运行“本地局域网启动器”。",
lanConnectChecking: "正在检查局域网服务器...",
lanBackupSiteBlocked: "网页版备用站不能直接开 LAN，请让房主启动局域网服务器并使用 192.168 开头的网址或二维码。",
lanFileSiteBlocked: "本地文件页面不能稳定连接 LAN，请先运行“本地局域网启动器”，再打开 127.0.0.1 或 192.168 开头的网址。",
lanStaticSiteBlocked: "当前网页不能直接开 LAN，请让房主启动局域网服务器并使用 192.168 开头的网址或二维码。",
lanJumpLabel: "备用网页版联机",
lanJumpTitle: "打开房主局域网地址",
lanJumpText: "GitHub 版不能直接开局域网。请让房主启动局域网服务器，并在这里输入房主的 192.168 地址进入对战。",
lanJumpPlaceholder: "192.168.x.x:5173",
lanJumpOpen: "打开",
lanJumpNeedHost: "请输入房主的 192.168 局域网地址。",
lanJumpBadHost: "地址格式不正确，请输入类似 192.168.50.220:5173 的地址。",
lanJumpOpening: "正在打开房主局域网页面...",
lanConnectedNotice: "已连接局域网房间：{room}",
lanReconnectedNotice: "已重新连接房间：{room}",
lanReconnectNotice: "连接断开，正在自动重连 {attempt}/{max}...",
lanReconnectFailed: "自动重连失败，可点击“重新连接”。",
lanRoomCreated: "已创建房间：{room}",
lanRoomCreatedCopied: "已创建房间并复制邀请链接：{room}",
lanDisconnectedNotice: "局域网已断开",
lanCopied: "局域网连接已复制",
lanCopyFailed: "无法复制连接，请手动复制浏览器地址",
lanRemoteMove: "对手：{san}",
lanResetNotice: "局域网对局已重置",
lanWaitTurn: "局域网对战中，请等待对手走棋",
lanSpectatorNotice: "你正在观战，不能走棋",
lanAiBlocked: "局域网对战中不能开启 AI",
lanSideBlocked: "局域网对战中不能切换执棋方",
moveBlockedPromotion: "请先选择兵升变成哪一种棋子。",
gameAlreadyOver: "本局已经结束，请开始新对局。",
aiTurnWake: "现在轮到 AI 走，我已重新启动 AI。",
enPassantNotice: "吃过路兵：兵可以斜走到空格，并吃掉刚走两格经过旁边的兵。",
boardThemeLabel: "棋盤外觀",
boardThemeTitle: "更換棋盤",
boardThemeAria: "棋盤樣式選擇",
aiOpponent: "AI 对手",
localTwoPlayer: "本地双人",
off: "关闭",
thinking: "思考中",
enableAi: "开启 AI",
disableAi: "关闭 AI",
aiLevel: "AI 难度",
aiLevelAria: "AI 难度选择",
aiThinkingDetail: "AI 正在计算下一步。",
aiOffDetail: "关闭 AI 时，可以本地双人轮流走棋。",
aiAutoDetail: "AI 会自动为{side}走棋，当前难度：{level}。",
playAs: "你执{side}",
aiPlays: "AI 执{side}",
rankedMode: "段位赛",
rankedModeAria: "开启或关闭段位赛",
rankedDetailOff: "段位赛会强制完整 AI 对局，禁止提示和悔棋。",
rankedDetailOn: "段位赛进行中：不能提示、悔棋、载入局面或切换到局域网。",
rankedStarted: "段位赛已开始：完整击败 AI 才会结算段位分",
rankedDisabled: "段位赛已关闭，本局不计算段位分",
rankedNeedsAi: "段位赛必须开启 AI",
rankedNoHint: "段位赛不能使用提示",
rankedNoUndo: "段位赛不能悔棋",
rankedNoFen: "段位赛不能载入局面代码",
rankedNoLan: "局域网对局不能开启段位赛",
rankedLevelLocked: "段位赛已开始，不能中途更换 AI 难度",
professionalLeagueMode: "职业联赛",
professionalLeagueAria: "开启或关闭职业联赛模式",
professionalLeagueNeedAccount: "请先登录或注册账号，职业联赛只记录登录玩家。",
professionalLeagueNoLan: "局域网对局不能开启职业联赛。",
professionalLeagueNoHint: "职业联赛不能使用提示。",
professionalLeagueNoUndo: "职业联赛不能悔棋。",
professionalLeagueNoFen: "职业联赛不能载入局面代码。",
professionalLeagueStarted: "职业联赛已开启：AI 强度已锁定为高于职业水平。胜利 +{win} 分，失败 {loss} 分，和棋不变。",
professionalLeagueDisabled: "职业联赛已关闭。",
professionalLeagueNeedsAi: "职业联赛必须开启 AI。",
professionalLeagueLevelLocked: "职业联赛会自动使用高于职业水平的联赛冠军 AI，不能改成较低难度。",
professionalLeagueDetailOff: "登录后可开启职业联赛：对手为高于职业水平的联赛冠军 AI，胜利 +{win}，失败 {loss}，和棋不变。",
professionalLeagueDetailOn: "职业联赛进行中：AI 已锁定为高于职业水平，胜利 +{win}，失败 {loss}，和棋不变。",
professionalLeagueResult: "职业联赛：{result} {points} 分",
professionalLeagueResultNoChange: "职业联赛：和棋不加不扣",
professionalLeagueTitle: "职业联赛榜",
professionalLeagueCurrent: "我的联赛积分：{points} 分 · {games} 局",
professionalLeagueLeaderboardEmpty: "暂无登录玩家上榜",
professionalLeagueLeaderboardRow: "#{rank} {name} · {points} 分 · {record}",
professionalLeagueRecord: "{wins}胜 {draws}和 {losses}负",
aiPersonaLabel: "AI 个性",
matchScoreLabel: "對局比分",
matchScoreTitle: "勝負記錄",
continueGameTitle: "继续上次对局",
continueGameText: "已恢复未完成棋局：{move} 回合，{side}走棋。",
continueGameButton: "继续",
continueGameNotice: "已回到上次对局",
goalLabel: "本局目标",
goalOpeningTitle: "控制中心",
goalOpeningText: "先发展马和象，尽量控制 d4、e4、d5、e5。",
goalKingTitle: "保护国王",
goalKingText: "你正被将军，先逃将、挡将或吃掉攻击者。",
goalTacticsTitle: "寻找战术",
goalTacticsText: "局面进入中盘，先看将军、吃子和威胁。",
goalEndgameTitle: "简化残局",
goalEndgameText: "棋子变少了，保护王和兵，慢慢推进。",
goalAiTitle: "挑战 {name}",
goalAiText: "{style}：{motto}",
friendModeLabel: "家庭 / 朋友模式",
friendWhiteLabel: "白方玩家",
friendBlackLabel: "黑方玩家",
friendWhiteDefault: "白方朋友",
friendBlackDefault: "黑方朋友",
friendRecordEmpty: "输入两个名字后，会保存这对朋友的胜负记录。",
friendRecordText: "{white} {whiteWins}胜 · {black} {blackWins}胜 · 和棋 {draws}",
friendNamesSaved: "朋友模式名字已保存",
dragInvalid: "这个格子不能走",
resetScore: "清零",
resetScoreAria: "清零比分",
white: "白方",
black: "黑方",
draw: "和棋",
materialEven: "本局子力：平衡",
materialLead: "本局子力：{side} +{amount}",
rankLabel: "玩家段位",
rankPointsLabel: "段位积分",
officialRankSynced: "线上正式段位：{points} 分 · 胜率 {rate}%",
officialRankLocal: "本地段位：上线后会同步正式段位",
officialRankLoaded: "已同步线上正式段位",
officialRankPreserved: "服务器还没有正式段位记录，已保留本机段位。",
officialRankMigrated: "已把本机段位作为线上正式段位初始值。",
officialRankMigrationPrompt: "是否把本机 {points} 分同步为正式线上段位？",
officialRankFailed: "暂时无法同步线上正式段位",
rankRules: "只有完整 AI 段位赛计算段位（当前{level}）：胜 {win}，和 {draw}，负 {loss}。",
rankScoreNotice: "段位积分 {points}",
rankScoreFloorNotice: "段位积分已在 0 分，未继续扣分",
rankNoAiScoreNotice: "非完整 AI 段位赛不计算段位积分",
rankedSettlementLabel: "段位结算",
rankedSettlementValid: "本局段位赛有效",
rankedSettlementInvalid: "本局段位赛无效",
rankedSettlementWin: "胜利",
rankedSettlementLoss: "失败",
rankedSettlementDraw: "和棋",
rankedSettlementDelta: "{result} {points} 分",
rankedSettlementReasonValid: "完整 AI 段位赛已结算。",
rankedSettlementReasonLocal: "本地离线结算；线上正式版会请求服务器验证。",
rankServerChecking: "正在向服务器验证本局段位赛。",
rankServerVerified: "服务器已验证：本局可以计入正式段位。",
rankServerRejected: "服务器验证失败：本局已撤销段位分。",
rankServerUnavailable: "服务器暂时无法验证：本局只保留为本地记录。",
rankedInvalidLan: "局域网对局不计算段位分。",
rankedInvalidGameCenter: "Game Center 互联网对战不计算段位分。",
rankedInvalidNotRanked: "未开启段位赛。",
rankedInvalidNoAi: "不是完整 AI 对局。",
rankedInvalidHint: "本局使用过提示，所以不计分。",
rankedInvalidLevel: "中途更换过 AI 难度，所以不计分。",
rankedInvalidSide: "中途更换过执棋方，所以不计分。",
rankedInvalidNoMoves: "没有完整下完对局。",
rankedInvalidGeneric: "非完整 AI 段位赛不计算段位积分。",
rankSummaryAria: "查看段位",
rankProgressAria: "段位进度",
rankProgressText: "再得 {points} 分升级到{rank}",
rankMaxText: "已达到最高段位",
whiteCaptured: "白方已吃",
blackCaptured: "黑方已吃",
moveRecordLabel: "棋谱",
moveRecordTitle: "走法记录",
copyPgnAria: "复制 PGN",
fenTitle: "局面代码",
copy: "复制",
copyFenAria: "复制 FEN",
loadPosition: "载入局面",
promotionTitle: "选择升变",
cancelPromotionAria: "取消升变",
closeTutorialAria: "关闭新手教程",
previous: "上一步",
next: "下一步",
done: "完成",
tutorialStep: "第 {current} / {total} 步",
emptySquare: "{square} 空格",
pieceLabel: "{square} {side}{piece}",
checkmateWinTitle: "{winner}将死获胜",
checkmateDetail: "第 {move} 回合结束",
checkmateChip: "将死",
stalemateTitle: "逼和",
stalemateDetail: "无合法走法，双方和棋",
threefoldTitle: "三次重复和棋",
threefoldDetail: "同一局面已出现三次",
insufficientTitle: "子力不足和棋",
insufficientDetail: "双方无法将杀",
fiftyTitle: "五十步规则和棋",
fiftyDetail: "五十回合未吃子或走兵",
checkTitle: "{side}被将军",
checkDetail: "第 {move} 回合",
checkChip: "{side}应对将军",
turnTitle: "{side}走棋",
turnDetail: "第 {move} 回合",
turnChip: "{side}走棋",
reviewLabel: "赛后复盘",
reviewTitle: "本局复盘",
reviewChipWin: "胜利",
reviewChipLoss: "复盘",
reviewChipDraw: "和棋",
reviewSummaryWin: "你赢下了这局。复盘重点是记住关键一步，并继续保持不使用提示的好习惯。",
reviewSummaryLoss: "这局输了。重点看最大失误和 AI 抓住机会的位置，下一局先守住王和中心。",
reviewSummaryDraw: "这局和棋。你已经守住了局面，下一步可以练习创造更清楚的进攻路线。",
reviewKeyMove: "关键一步",
reviewBestMove: "最佳一步",
reviewMistake: "最大失误",
reviewBetterMove: "更好的走法",
reviewMistakeReason: "这步为什么错",
reviewPhaseScore: "本局评分",
reviewPhaseScoreText: "开局 {opening} · 中局 {middle} · 残局 {endgame}",
reviewMistakeReasonCheck: "这步之后王的安全变差，对手可以用将军或战术继续施压。",
reviewMistakeReasonCapture: "这步让高价值棋子或关键格子变得容易被吃。",
reviewMistakeReasonCenter: "这步没有解决中心和子力协调问题，对手更容易展开进攻。",
reviewWhy: "为什么会这样",
reviewNoMistake: "没有明显大失误，继续保持。",
reviewMoveText: "{move}. {san}（{from}→{to}）",
reviewWhyWin: "胜在持续制造威胁，并在最后阶段把优势转成结果。",
reviewWhyLoss: "主要输在给了对手更大的战术机会；下一局先检查自己的棋子是否会被吃。",
reviewWhyDraw: "双方都没有取得决定性优势，所以进入和棋。",
reviewPractice: "练习这个错误",
reviewPracticeNotice: "已打开相关新手教程",
reviewNextPractice: "下一步练习",
reviewNextPracticeCheck: "练习王的安全与解除将军。",
reviewNextPracticeCapture: "练习保护棋子和计算吃子。",
reviewNextPracticeCenter: "练习开局中心控制和出子。",
tutorialLessonProgress: "已完成 {done} / {total} 关",
tutorialLessonUnlocked: "教程徽章解锁：{title}",
tutorialTrainingTitle: "新手训练关卡",
opening: "开局",
invalidMove: "这一步不合法",
noTip: "当前没有可提示的走法",
tipNotice: "提示：{from} → {to}（{san}）",
boardThemeChanged: "棋盤已更換：{theme}",
tutorialDone: "新手教程已完成，可以开始试着走棋",
aiThinking: "AI 正在思考...",
aiMove: "AI：{san}",
newGameStarted: "新对局已开始",
undoNotice: "已撤回一步",
undoEmpty: "还没有可悔的走法。",
copied: "{label}已复制",
copyBlocked: "浏览器阻止了复制，请手动选中文本",
needFen: "请输入 FEN",
fenLoaded: "局面已载入",
badFen: "FEN 格式不正确",
aiEnabled: "AI 已开启，你执{side}",
aiDisabled: "AI 已关闭",
sideChanged: "你现在执{side}，已开始新对局",
aiDifficultyNotice: "AI 难度：{level} - {name}",
professionalLocked: "职业 AI 需要先解锁“天才少年”徽章",
professionalUnlocked: "职业 AI 已解锁，可以挑战了",
professionalLockedDetail: "职业 AI 锁定：先拿到“天才少年”（大师无提示连胜 {count}/12）。",
geniusStreakProgress: "大师无提示连胜：{count}/12",
geniusStreakReset: "大师无提示连胜已清零",
geniusStreakHintReset: "本局使用过提示，大师无提示连胜已清零",
scoreReset: "比分已清零",
musicEnabled: "背景音樂已開啟",
musicDisabled: "背景音樂已關閉",
musicVolume: "背景音乐",
effectsVolume: "棋子音效",
voiceVolume: "棋子语音",
volumeChanged: "{label}：{value}%",
soundTestMusic: "试听音乐",
soundTestEffects: "试听音效",
soundTestVoice: "试听语音",
soundStatusReady: "声音已开启。",
soundStatusNeedsTap: "如果没有声音，请先点击一次页面。",
soundTestNotice: "正在试听：{label}",
volumeSaved: "声音设置已保存：{label} {value}%",
tutorialStars: "训练星级：{stars}",
dragReady: "拖到目标格即可走棋",
languageChanged: "已切换为中文",
},
en: {
appTitle: "Chess",
boardAria: "Chess board",
boardOnlyAria: "Board",
sidePanelAria: "Game panel",
currentPosition: "Position",
newGame: "New Game",
gameControls: "Game",
helpControls: "Help",
viewControls: "View & Sound",
tip: "Hint",
tutorial: "Beginner Guide",
undo: "Undo",
flip: "Flip",
musicOn: "Music On",
musicOff: "Music Off",
feedbackButton: "Feedback",
feedbackButtonAria: "Open feedback",
feedbackLabel: "Player Feedback",
feedbackTitle: "Tell us what you think",
feedbackCloseAria: "Close feedback window",
feedbackKindAria: "Feedback type",
feedbackKinds: {
bug: "Issue",
idea: "Idea",
praise: "Like",
},
feedbackTextLabel: "Feedback",
feedbackMailbox: "Virtual inbox: {email}",
feedbackInboxSummary: "Virtual Inbox",
feedbackInboxEmpty: "No feedback yet",
feedbackCount: "{count} feedback items saved",
feedbackIdHelp: "A feedback ID appears after you submit. Save it so the developer can find your report.",
feedbackNeedText: "Write your feedback first",
feedbackSending: "Sending feedback...",
feedbackSaved: "Feedback sent to the developer. Thank you.",
feedbackSavedWithId: "Feedback sent to the developer. ID: {id}. Save this ID so the developer can find it.",
feedbackSavedLocal: "Feedback was saved locally; online sending failed for now.",
feedbackSavedLocalWithId: "Feedback saved locally. ID: {id}; online sending failed for now. Save this ID for later.",
feedbackSaveFailed: "Feedback could not be saved right now",
feedbackBackupTitle: "Backup Send",
feedbackBackupText: "If this route cannot send, copy the feedback or open mail and choose the recipient yourself.",
feedbackBackupCopy: "Copy Feedback",
feedbackBackupMail: "Send by Email",
feedbackBackupCopied: "Feedback copied. You can paste it into mail or chat.",
feedbackBackupSubject: "MateQuest Chess Player Feedback",
playerProfileButton: "Profile",
playerProfileButtonAria: "Open player profile",
playerProfileLabel: "Player Profile",
playerProfileGuestTitle: "Guest Profile",
playerProfileTitle: "{name}'s Profile",
playerProfileCloseAria: "Close player profile",
playerProfileGuestStatus: "Log in to save your score, rank, and achievements separately.",
playerProfileLoggedStatus: "Your score, rank, and achievements are saved in this account.",
playerProfileLocalMeta: "Local profile",
playerProfileCreated: "Created {date}",
profileRankStat: "Rank",
profileAchievementStat: "Achievements",
profileScoreStat: "Score",
profileMaterialStat: "Material",
profileGamesStat: "Games Played",
profileWinRateStat: "Win Rate",
profileFavoritePieceStat: "Favorite Piece",
profileLastSavedStat: "Last Saved",
profileRankValue: "{rank} · {points} pts",
profileAchievementValue: "{unlocked}/{total} · {badge}",
profileScoreValue: "W {white} · D {draw} · B {black}",
profileGamesValue: "{games} games",
profileWinRateValue: "{rate}%",
profileFavoritePieceValue: "{piece} · {count} moves",
profileEmptyStat: "None yet",
profileMaterialEven: "Even",
profileMaterialLead: "{side} +{amount}",
dailyLabel: "Daily Tasks",
dailyTitle: "Today",
dailyStars: "{count} ★",
dailyTaskProgress: "{current}/{target}",
dailyTaskDone: "Done",
dailyTaskReward: "+{count} training stars",
dailyTaskUnlocked: "Daily task complete: {title} +{count} training stars",
dailyStreak: "{count}-day streak",
dailyStreakEmpty: "0-day streak",
dailyRewardToast: "{title} +{count} training stars",
dailyTrainingStreakTitle: "Daily Puzzle Streak",
dailyTrainingStreakDetail: "Finish both Daily Endgame and Mate-in-One each day. A 7-day streak unlocks a special badge.",
dailyTrainingStreakProgress: "Today {done}/{total} · {count}-day streak",
dailyTrainingStreakComplete: "Today's training complete · {count}-day streak",
dailyTrainingStreakUnlocked: "Training streak day {count}: 7-Day Trainer badge unlocked.",
dailyTrainingEndgameComplete: "Daily Endgame complete.",
dailyTrainingMateComplete: "Mate-in-One complete.",
dailyTrainingRealBoardPrompt: "Try setting up today's position on a real board for 3 more minutes.",
profileOpenAchievements: "View Achievements",
profileOpenRank: "View Rank",
profileExport: "Export Profile",
profileImport: "Import Profile",
profileMistakeBook: "Mistake Book",
profileRealBoard: "Real Board",
profileCloudBackup: "Cloud Backup",
profileCloudRestore: "Restore Cloud",
profileCloudIdle: "Log in to sync a safe profile backup to the cloud.",
profileCloudReady: "Cloud backup saves rank, achievements, Pro League points, and daily training, with no passwords, feedback, or private temporary data.",
profileCloudNeedAccount: "Log in or register before using cloud backup.",
profileCloudSaving: "Syncing safe profile to the cloud...",
profileCloudSaved: "Cloud backup saved.",
profileCloudLoading: "Loading cloud backup...",
profileCloudEmpty: "No cloud backup found yet.",
profileCloudPreview: "Cloud backup loaded. Confirm it in the import preview.",
profileCloudUnavailable: "Cloud backup is unavailable right now; the Netlify main site may need deployment.",
profileCloudHiddenIos: "Cloud backup is hidden in this App Store or backup build. Use export/import to protect progress.",
deleteAccount: "Delete Account",
deleteAccountConfirm: "Deleting this account clears its rank, achievements, daily tasks, and local login data. Type {name} to confirm.",
deleteAccountDone: "Account deleted. Local profile data was cleared.",
deleteAccountCancelled: "Account deletion cancelled.",
profileExportDone: "Player profile exported.",
profileImportDone: "Player profile imported. Reloading.",
profileImportBad: "This profile file cannot be imported.",
profileImportPreviewTitle: "Confirm Import",
profileImportPreviewText: "This will restore: {rank} rank points, {achievements} achievements, {league} Pro League points, a {training}-day training streak, {accounts} accounts, and {game}.",
profileImportHasGame: "a saved game",
profileImportNoGame: "no saved game",
profileImportConfirm: "Import These",
profileImportCancel: "Cancel",
profileImportCancelled: "Profile import cancelled.",
mistakeBookTitle: "Mistake Book",
mistakeBookSummary: "The latest {count} review notes are saved locally so you can train them next time.",
mistakeBookEmpty: "No mistakes yet. Finish a game and this will save the key mistake and practice direction.",
mistakeBookItem: "{date} · {result} · {mistake}",
mistakeBookResultWin: "Win review",
mistakeBookResultLoss: "Loss mistake",
mistakeBookResultDraw: "Draw review",
mistakeBookPractice: "Practice",
mistakeBookClear: "Clear Mistakes",
mistakeBookCleared: "Mistake book cleared.",
mistakeBookOpened: "Mistake book opened.",
realBoardTitle: "Real Board Practice",
realBoardText: "Set up the current position on a real chess board for 3 minutes. First check king safety, then captures, checks, and threats.",
realBoardCopy: "Copy Practice Position",
realBoardCopied: "Practice position copied for your own chess tools or real-board setup.",
realBoardOpened: "Real board practice opened.",
resultSettlementLabel: "Result",
resultSettlementWin: "Clean Win",
resultSettlementLoss: "Review & Retry",
resultSettlementDraw: "Solid Draw",
resultSettlementRank: "Rank {rank} pts",
resultSettlementLeague: "Pro League {league} pts",
resultSettlementBadges: "Achievements {count}/{total}",
resultSettlementPractice: "Next: {advice}",
resultSettlementRealBoard: "Real-board practice: set up the final position, check king safety, then find the next threat.",
releaseButtonAria: "View version notes",
releaseLabel: "Version",
releaseTitle: "Changelog",
releaseCloseAria: "Close changelog",
releaseVersion: "Current version: v{version}",
releaseResourceTime: "Resource date: {date}",
releaseHistoryTitle: "Version History",
releaseHistoryCurrent: "Current",
releaseHistoryAvailable: "Available",
releaseUpdateComplete: "Updated to v{version}. Resources refreshed and the last game was restored.",
releaseUpdateIdle: "Check whether a newer version is available.",
releaseUpdateChecking: "Checking for a new version...",
releaseUpdateReady: "Version v{version} is available. Click update to get the new resources.",
releaseUpdateLatest: "You are already on the latest version.",
releaseUpdateOffline: "Cannot check for updates right now. Check the network or server.",
releaseUpdateReloading: "Updating resources...",
releaseLiveTitle: "Live Site Status",
releaseLiveIdle: "The version center checks the live site automatically.",
releaseLiveChecking: "Checking live site version...",
releaseLiveSynced: "Live site is synced: v{version}",
releaseLiveOutdated: "Live site is still v{version}; local latest is v{local}.",
releaseLiveAhead: "Live site v{version} is newer than this local build.",
releaseLiveUnavailable: "Could not read the live version. Netlify credits or CORS may block the check.",
releaseLiveOpen: "Backup site: GitHub Pages",
releaseLimitTitle: "Backup Route Notice",
releaseLimitText: "You are on the backup route. Some cloud features may use local mode, including online feedback, official rank sync, and Pro League cloud boards.",
releaseStatusTitle: "Release Status",
releaseStatusIdle: "The version center checks local, Netlify, GitHub Pages, and share package versions.",
releaseStatusChecking: "Checking release status...",
releaseStatusDone: "Release status checked",
releaseStatusLocal: "Local Version",
releaseStatusNetlify: "Netlify",
releaseStatusPages: "GitHub Pages",
releaseStatusBackupLine: "Backup Route",
releaseStatusBackupOnline: "Online: GitHub Pages",
releaseStatusPublicVersion: "Public Player Build",
releaseStatusShare: "Share Package",
releaseStatusAdminEntry: "Internal Entry",
releaseStatusAdminClean: "Hidden from player build",
releaseStatusAdminLocal: "Local owner only",
releaseStatusAdminWarning: "Visible here; do not share this page",
releaseStatusVersion: "v{version}",
releaseStatusUnavailable: "Unavailable",
releaseStatusOld: "Old v{version}",
releaseStatusReady: "Synced v{version}",
releaseStatusHintIdle: "This shows whether Netlify and GitHub Pages are synced.",
releaseStatusHintPages: "If GitHub Pages is unavailable, open GitHub Settings -> Pages and set Source to GitHub Actions.",
releaseStatusHintReady: "The backup route is online, so players can keep playing from GitHub Pages.",
releaseShareTitle: "Share With Friends",
releaseSharePill: "Public Link",
releaseShareText: "Send this player link to a friend, or let them scan the QR code.",
releaseShareCopy: "Copy Public Link",
releaseShareCopied: "Public player link copied.",
releaseShareQrAria: "Public player QR code",
releaseProfileBackupTitle: "Protect Player Profile",
releaseProfileBackupPill: "Cloud Ready",
releaseProfileBackupText: "Before updating, changing devices, or future cloud sync, export a safe profile. The file keeps game progress only; it does not include login password hashes, feedback text, or private temporary data.",
releaseProfileBackupButton: "Export Safe Profile",
releaseProfileImportButton: "Import Safe Profile",
releaseProfileImportPrompt: "Choose a previously exported safe profile JSON file.",
releaseProfileBackupDone: "Safe profile exported. Keep the JSON file somewhere safe.",
releaseProfileBackupDismiss: "Remind Later",
releaseProfileBackupDismissed: "Profile export reminder dismissed for now.",
pwaInstallTitle: "Install to Desktop",
pwaInstallReady: "This browser can install the game directly.",
pwaInstallManual: "In Chrome, use the install icon in the address bar. In Safari, use Share and Add to Home Screen.",
pwaInstallUnsupported: "This opening mode cannot install the app. Open it with Safari or Chrome over http/https.",
pwaInstallInstalled: "Installed or added to desktop.",
pwaInstallButton: "Install / Add to Home Screen",
pwaInstallPrompted: "Install prompt opened.",
pwaInstallDismissed: "Install cancelled. You can try again later.",
releaseBackupReady: "A pre-update backup is available: {points} rank points, {achievements} achievements.",
releaseBackupRestored: "Pre-update profile restored. Reloading.",
releaseBackupRankRestored: "Rank restored: {points} points.",
releaseBackupAchievementsRestored: "{count} achievements restored.",
releaseBackupGameRestored: "Pre-update game restored. Reloading.",
releaseBackupNone: "No restorable old profile yet.",
releaseBackupChoose: "Choose what to restore",
releaseHealthTitle: "Version Health Check",
releaseHealthIdle: "Run a quick check for version, rank, LAN, and feedback status.",
releaseHealthChecking: "Checking version health...",
releaseHealthOk: "Check complete",
releaseHealthVersion: "Current Version",
releaseHealthResources: "Resources",
releaseHealthRank: "Rank Profile",
releaseHealthLan: "LAN",
releaseHealthFeedback: "Feedback",
releaseHealthPwa: "Offline Install",
releaseHealthPwaReady: "PWA files are ready",
releaseHealthPwaManual: "Use the browser menu to add it to desktop",
releaseHealthPwaBlocked: "This opening mode cannot install offline support",
releaseHealthPlayerBuild: "Player Build",
releaseHealthPlayerBuildClean: "No internal-permission button is visible",
releaseHealthPlayerBuildWarning: "Internal-permission button detected; check the release package",
releaseHealthLeaderboard: "Leaderboard",
releaseHealthLeaderboardReady: "Leaderboard entry is ready",
releaseHealthLeaderboardMissing: "Leaderboard entry not found",
releaseHealthWarning: "Warning: {label}",
releaseHealthLatest: "Latest resources installed",
releaseHealthUpdateReady: "Version v{version} available",
releaseHealthOffline: "Could not check resources",
releaseHealthRankOk: "OK: {points} points",
releaseHealthRankLocal: "Local rank is safe; online sync will preserve it",
releaseHealthLanOn: "LAN server is running",
releaseHealthLanOff: "LAN server not detected",
releaseHealthLanGuide: "Next: open the LAN launcher command, then run Check Status again.",
releaseHealthFeedbackReady: "Feedback form is ready",
releaseHealthFeedbackMissing: "Feedback form not found",
releaseLiveOld: "The live site is still v{version}; redeploy Netlify before players receive the update.",
checkUpdate: "Check Update",
applyUpdate: "Update Resources",
checkHealth: "Health Check",
onlineSelfCheck: "Online Self-Check",
restoreBackup: "Restore Backup",
restoreRankOnly: "Restore Rank",
restoreAchievementsOnly: "Restore Achievements",
restoreGameOnly: "Restore Game",
achievementButtonAria: "View achievements",
achievementLabel: "Achievements",
achievementTitle: "Special Badges",
achievementCloseAria: "Close achievements",
achievementSummary: "{unlocked} / {total} achievements unlocked",
achievementUnlocked: "Achievement unlocked: {badge} {title}",
lockedAchievement: "Locked",
leaderboardButton: "Board",
leaderboardButtonAria: "View leaderboard",
leaderboardLabel: "Player Leaderboard",
leaderboardTitle: "Leaderboard",
leaderboardCloseAria: "Close leaderboard",
leaderboardSummary: "Logged-in or registered players appear here. Your current account is highlighted.",
leaderboardOnlineSummary: "The Pro League board syncs online players; overall and rank boards keep local accounts.",
leaderboardOnlineLoading: "Loading online Professional League board...",
leaderboardOnlineOffline: "Could not load the online board yet, showing local accounts.",
leaderboardSeason: "Season {id} · {start} to {end}",
leaderboardMyRank: "My Pro League rank: #{rank} · {points} pts",
leaderboardMyRankMissing: "My Pro League rank: none yet. Finish one Pro League game to enter the board.",
leaderboardSeasonReward: "Season reward: {badge} {title}",
leaderboardRewardChampion: "Champion Badge",
leaderboardRewardTopThree: "Top Three Badge",
leaderboardRewardParticipant: "Participant Badge",
leaderboardRewardLocked: "Season reward: play Pro League to compete for champion, top-three, and participant badges.",
leaderboardOverallTitle: "Overall",
leaderboardRankTitle: "Rank",
leaderboardLeagueTitle: "Pro League",
leaderboardOverallDetail: "Sorted by rank, Professional League, and achievements.",
leaderboardRankDetail: "Sorted by rank points.",
leaderboardLeagueDetail: "Sorted by Professional League points.",
leaderboardEmpty: "No logged-in players yet",
leaderboardRowMeta: "{rank} · {achievements} achievements · {games} games",
leaderboardLeagueMeta: "{wins}W {draws}D {losses}L",
leaderboardRankScore: "{points} pts",
leaderboardLeagueScore: "{points} pts",
leaderboardOverallScore: "{points} total",
submitFeedback: "Submit Feedback",
moreMenuAria: "More options",
settingsCenterLabel: "Settings",
settingsCenterTitle: "Quick Controls",
accountLabel: "Player Account",
accountGuest: "Guest",
accountGuestDetail: "Log in to save your score and rank separately.",
accountLoggedDetail: "{name}'s score and rank are being saved separately.",
loginRegister: "Log In / Register",
logout: "Log Out",
accountDelete: "Delete Account",
authLoginTitle: "Log In",
authRegisterTitle: "Create Account",
authCloseAria: "Close login window",
authTabsAria: "Log in or register",
login: "Log In",
register: "Register",
username: "Username",
password: "Password",
cancel: "Cancel",
accountNeedUsername: "Enter a username",
accountBadUsername: "Username must be 2 to 24 characters.",
accountNeedPassword: "Enter a password",
accountBadPassword: "Password must be at least 4 characters.",
accountExists: "That username is already registered",
accountMissing: "Account not found",
accountWrongPassword: "Password is not correct",
accountLoginSuccess: "Logged in: {name}",
accountRegisterSuccess: "Registered: {name}",
accountLogoutSuccess: "Logged out",
languageLabel: "Language",
languageTitle: "Chinese / English",
languageAria: "Language selection",
lanLabel: "LAN",
lanTitle: "LAN Match",
lanAppModeLabel: "App LAN",
lanAppModeTitle: "Choose a LAN Mode",
lanAppModeText: "The App Store build keeps common LAN actions here. The web build keeps using the room-code controls below.",
gameCenterLabel: "Game Center",
gameCenterTitle: "Online Play",
gameCenterText: "The App Store build can use Apple Game Center for sign-in, matchmaking, and friend invites. The web build stays separate.",
gameCenterAuth: "Sign In to Game Center",
gameCenterMatch: "Quick Match",
gameCenterDashboard: "Open Game Center",
gameCenterStatusIdle: "Waiting for Game Center sign-in.",
gameCenterStatusAuthenticating: "Requesting Game Center sign-in...",
gameCenterStatusAuthenticated: "Signed in: {player}",
gameCenterStatusAuthRequired: "Sign in to Game Center first.",
gameCenterStatusMatchmaker: "Game Center matchmaking is open.",
gameCenterStatusMatchReady: "Match found. Preparing the game.",
gameCenterStatusDashboard: "Game Center dashboard opened.",
gameCenterStatusCancelled: "Game Center action cancelled.",
gameCenterStatusFailed: "Game Center action failed: {reason}",
gameCenterStatusUnavailable: "Game Center is unavailable on this device: {reason}",
gameCenterStatusConnected: "Game Center connected: you play {side}.",
gameCenterStatusWaiting: "Game Center game: wait for your opponent's move.",
gameCenterStatusSent: "Move sent: {move}",
gameCenterStatusReceived: "Opponent move received: {move}",
gameCenterStatusNotReady: "Finish Game Center matchmaking first.",
lanModeCreate: "Create Room",
lanModeNearby: "Join Nearby",
lanModeScan: "Scan to Join",
lanModeCode: "Enter Room Code",
lanModeNearbyReady: "Enter the room code from your friend, or ask the host to create a room first.",
lanModeScanPrompt: "Paste the scanned invite link or room code.",
lanModeScanEmpty: "No scanned link or room code was entered.",
lanModeScanNativeStarting: "Opening the camera scanner...",
lanModeScanNativeFound: "QR code recognized. Joining the room...",
lanModeScanNativeDenied: "Camera access is not available. Allow Camera in Settings, or enter the room code instead.",
lanModeScanNativeUnavailable: "This device cannot scan with the camera right now. Enter the room code instead.",
lanModeScanNativeCancelled: "Scan cancelled.",
lanModeCodeFocus: "Enter a room code, then tap Connect.",
lanDisconnected: "Offline",
lanConnecting: "Connecting",
lanConnected: "Connected",
lanSpectating: "Spectating",
lanRoomPlaceholder: "Room code",
lanCreate: "Create Room",
lanConnect: "Connect",
lanReconnect: "Reconnect",
lanDisconnect: "Disconnect",
lanCopyLink: "Copy Link",
lanCheck: "Check Status",
lanShareLabel: "Invite link",
lanDuelLabel: "Scan to Duel",
lanDuelTitle: "Generate Duel QR",
lanDuelText: "Create a room, then your friend can scan the QR code to join the same room.",
lanDuelRoomEmpty: "Room code: —",
lanDuelRoom: "Room code: {room}",
lanDuelQrAria: "Two-player duel QR code",
lanDuelNote: "Same Wi-Fi only: the scanning device must use the same LAN server. This QR only works while the current LAN server stays open.",
lanDuelNotReady: "Not ready",
lanDuelReady: "Scan ready",
lanDuelGenerate: "Generate Duel QR",
lanDuelCreated: "Two-player QR created: {room}",
lanQrCopy: "Copy QR image",
lanQrDownload: "Download QR image",
lanQrCopied: "QR image copied",
lanQrDownloaded: "QR image downloaded",
lanQrCopyFallback: "Could not copy the image, so the QR was downloaded instead.",
lanQrMissing: "Generate a QR code first",
dailyEndgame: "Daily Endgame",
mateOneTraining: "Mate in One",
dailyEndgameStarted: "Daily endgame loaded: protect the pawn with your king and try to promote safely.",
mateOneStarted: "Mate-in-one loaded: White can checkmate in one move.",
trainingNoRank: "Training positions do not count for rank.",
onboardingLabel: "Welcome",
onboardingTitle: "Start Your First Game",
onboardingText: "Open the beginner tutorial first, or challenge the AI right away. Rank, achievements, and daily training are saved locally.",
onboardingFeatureAi: "AI Opponents",
onboardingFeatureTraining: "Training Levels",
onboardingFeatureOffline: "Offline Play",
onboardingSkip: "Play Now",
onboardingTutorial: "Open Tutorial",
lanCheckLabel: "Connection Status",
lanCheckTitle: "Check Result",
lanCheckIdle: "Not checked",
lanCheckOnline: "OK",
lanCheckOffline: "Issue",
lanCheckChecking: "Checking",
lanCheckServer: "Server",
lanCheckServerOn: "Running",
lanCheckServerOff: "Not found. Run the LAN launcher first.",
lanCheckPage: "Current page",
lanCheckPageLan: "LAN page, ready to connect",
lanCheckPageBackup: "GitHub backup page cannot start LAN directly",
lanCheckPageFile: "Local file page; use the LAN launcher URL",
lanCheckPageStatic: "Static web page cannot start LAN directly",
lanCheckRoom: "Room",
lanCheckVersion: "Version compatibility",
lanCheckVersionCompatible: "This device v{version} / LAN protocol v{protocol} / compatible with older versions",
lanCheckVersionPeer: "This device v{version} / LAN protocol v{protocol} / peer minimum v{peer} / compatible",
lanCheckVersionTooOld: "Update needed: this device v{version} / LAN protocol v{protocol}; peer protocol v{peer} is too old.",
lanCheckPeerVersion: "Peer version",
lanCheckPeerVersionReady: "{version} / protocol v{protocol} / {status}",
lanCheckPeerVersionWaiting: "Waiting for peer",
lanPeerVersionUnknown: "old or unknown",
lanPeerCompatible: "compatible",
lanPeerTooOld: "update needed",
lanCheckRoomConnected: "Connected: {room}",
lanCheckRoomPending: "Not connected: {room}",
lanCheckRoomEmpty: "No room code",
lanCheckOpponent: "Opponent",
lanCheckOpponentOnline: "Opponent online",
lanCheckOpponentWaiting: "Waiting for opponent",
lanCheckOpponentSpectating: "Spectating with {count} people",
lanCheckOpponentDisconnected: "Not connected to a room",
lanCheckNoticeOk: "LAN status check complete",
lanCheckNoticeBad: "LAN server not found",
lanDiagnostic: "Diagnose",
lanDiagnosticLabel: "LAN Diagnostics",
lanDiagnosticTitle: "One-Click Connection Diagnosis",
lanDiagnosticCloseAria: "Close LAN diagnostics",
lanDiagnosticIdle: "This checks the server, room, opponent, and LAN address.",
lanDiagnosticChecking: "Checking LAN status...",
lanDiagnosticReady: "Diagnosis complete. Share these details with a friend or developer to debug faster.",
lanDiagnosticCopy: "Copy diagnosis",
lanDiagnosticCopyNow: "Copy Diagnostic Info",
lanDiagnosticCopyPrompt: "Connection failed. Copy the diagnostic info and send it to the host or developer.",
lanDiagnosticCopied: "Diagnosis copied",
lanDiagnosticDone: "Done",
lanDiagnosticAddress: "LAN address",
lanDiagnosticAddressReady: "{url}",
lanDiagnosticAddressMissing: "No LAN address detected. Run the LAN launcher first.",
lanDiagnosticColor: "My color",
lanDiagnosticColorWhite: "White",
lanDiagnosticColorBlack: "Black",
lanDiagnosticColorSpectator: "Spectator",
lanDiagnosticColorNone: "Not in a room yet",
lanInviteLabel: "Invite a Friend",
lanInviteTitle: "Room Ready",
lanInviteCloseAria: "Close invite tip",
lanInviteText: "Send this link to a friend on the same Wi-Fi.",
lanInviteRoom: "Room code: {room}",
lanInviteQrAria: "LAN invite QR code",
lanHostLabel: "Host Address",
lanHostTitle: "Copy for a Friend on the Same Wi-Fi",
lanHostText: "After the host runs the LAN launcher, send this address to a friend. They can also enter it on the GitHub backup build.",
lanHostChecking: "Checking the host LAN address...",
lanHostUnavailable: "No 192.168 address detected. Make sure the LAN launcher is running.",
lanHostCopy: "Copy Host Address",
lanHostCopied: "Host address copied",
lanDetailIdle: "Run the LAN launcher on the same Wi-Fi, then enter the same room code.",
lanDetailConnecting: "Connecting to LAN room {room}...",
lanDetailWhite: "You play White. Wait for Black to join.",
lanDetailBlack: "You play Black. White moves first.",
lanDetailSpectator: "The room is full. You are spectating; the board follows the match.",
lanDetailPeerReady: "Opponent connected. You play {side}.",
lanNeedRoom: "Enter a room code",
lanConnectError: "Could not connect to the LAN server. Run the LAN launcher first.",
lanConnectChecking: "Checking the LAN server...",
lanBackupSiteBlocked: "The web backup site cannot start LAN directly. Ask the host to run the LAN server and use the 192.168 LAN URL or QR code.",
lanFileSiteBlocked: "Local file pages cannot connect to LAN reliably. Run the LAN launcher, then open the 127.0.0.1 or 192.168 URL.",
lanStaticSiteBlocked: "This web page cannot start LAN directly. Ask the host to run the LAN server and use the 192.168 LAN URL or QR code.",
lanJumpLabel: "Backup Web LAN",
lanJumpTitle: "Open the Host LAN Address",
lanJumpText: "The GitHub build cannot start LAN directly. Ask the host to run the LAN server, then enter the host 192.168 address here to join.",
lanJumpPlaceholder: "192.168.x.x:5173",
lanJumpOpen: "Open",
lanJumpNeedHost: "Enter the host 192.168 LAN address.",
lanJumpBadHost: "Address format is not valid. Use something like 192.168.50.220:5173.",
lanJumpOpening: "Opening the host LAN page...",
lanConnectedNotice: "Connected to LAN room: {room}",
lanReconnectedNotice: "Reconnected to room: {room}",
lanReconnectNotice: "Connection dropped. Reconnecting {attempt}/{max}...",
lanReconnectFailed: "Auto-reconnect failed. Tap Reconnect.",
lanRoomCreated: "Room created: {room}",
lanRoomCreatedCopied: "Room created and invite link copied: {room}",
lanDisconnectedNotice: "LAN disconnected",
lanCopied: "LAN link copied",
lanCopyFailed: "Could not copy the link. Copy the browser URL manually.",
lanRemoteMove: "Opponent: {san}",
lanResetNotice: "LAN game reset",
lanWaitTurn: "LAN match: wait for your opponent to move",
lanSpectatorNotice: "You are watching and cannot move",
lanAiBlocked: "AI cannot be enabled during a LAN match",
lanSideBlocked: "You cannot switch sides during a LAN match",
moveBlockedPromotion: "Choose what this pawn promotes to first.",
gameAlreadyOver: "This game is over. Start a new game.",
aiTurnWake: "It is the AI's turn, so I restarted the AI move.",
enPassantNotice: "En passant: a pawn can move diagonally to an empty square to capture a pawn that just passed beside it.",
boardThemeLabel: "Board Style",
boardThemeTitle: "Change Board",
boardThemeAria: "Board style selection",
aiOpponent: "AI Opponent",
localTwoPlayer: "Local Two-Player",
off: "Off",
thinking: "Thinking",
enableAi: "Enable AI",
disableAi: "Disable AI",
aiLevel: "AI Level",
aiLevelAria: "AI level selection",
aiThinkingDetail: "AI is calculating the next move.",
aiOffDetail: "Turn AI off to play locally with two players.",
aiAutoDetail: "AI will move automatically for {side}. Current level: {level}.",
playAs: "You play {side}",
aiPlays: "AI plays {side}",
rankedMode: "Ranked",
rankedModeAria: "Toggle ranked match",
rankedDetailOff: "Ranked games require a complete AI game with no hints or undo.",
rankedDetailOn: "Ranked match in progress: no hints, undo, FEN loading, or LAN.",
rankedStarted: "Ranked match started: only a complete AI game changes rank points",
rankedDisabled: "Ranked mode off. This game will not change rank points",
rankedNeedsAi: "Ranked mode requires AI",
rankedNoHint: "Hints are blocked in ranked mode",
rankedNoUndo: "Undo is blocked in ranked mode",
rankedNoFen: "FEN loading is blocked in ranked mode",
rankedNoLan: "LAN games cannot be ranked",
rankedLevelLocked: "A ranked match has started, so the AI level cannot change",
professionalLeagueMode: "Pro League",
professionalLeagueAria: "Toggle Professional League mode",
professionalLeagueNeedAccount: "Log in or register first. Professional League records logged-in players only.",
professionalLeagueNoLan: "LAN games cannot use Professional League.",
professionalLeagueNoHint: "Hints are blocked in Professional League.",
professionalLeagueNoUndo: "Undo is blocked in Professional League.",
professionalLeagueNoFen: "FEN loading is blocked in Professional League.",
professionalLeagueStarted: "Professional League on: AI is locked above professional level. Win +{win}, loss {loss}, draw unchanged.",
professionalLeagueDisabled: "Professional League off.",
professionalLeagueNeedsAi: "Professional League requires AI.",
professionalLeagueLevelLocked: "Professional League uses the above-professional League Champion AI and cannot be lowered.",
professionalLeagueDetailOff: "Log in to join: opponent is an above-professional League Champion AI. Wins +{win}, losses {loss}, draws unchanged.",
professionalLeagueDetailOn: "Professional League on: AI is locked above professional level. Wins +{win}, losses {loss}, draws unchanged.",
professionalLeagueResult: "Pro League: {result} {points} pts",
professionalLeagueResultNoChange: "Pro League: draw, no point change",
professionalLeagueTitle: "Pro League Board",
professionalLeagueCurrent: "My league points: {points} · {games} games",
professionalLeagueLeaderboardEmpty: "No logged-in players yet",
professionalLeagueLeaderboardRow: "#{rank} {name} · {points} pts · {record}",
professionalLeagueRecord: "{wins}W {draws}D {losses}L",
aiPersonaLabel: "AI Personality",
matchScoreLabel: "Match Score",
matchScoreTitle: "Results",
continueGameTitle: "Continue Last Game",
continueGameText: "Unfinished game restored: move {move}, {side} to move.",
continueGameButton: "Continue",
continueGameNotice: "Back to the last game",
goalLabel: "Game Goal",
goalOpeningTitle: "Control the Center",
goalOpeningText: "Develop knights and bishops while fighting for d4, e4, d5, and e5.",
goalKingTitle: "Protect the King",
goalKingText: "You are in check. Move the king, block the attack, or capture the attacker.",
goalTacticsTitle: "Look for Tactics",
goalTacticsText: "In the middlegame, check forcing moves first: checks, captures, and threats.",
goalEndgameTitle: "Simplify the Endgame",
goalEndgameText: "With fewer pieces, keep the king active and push pawns carefully.",
goalAiTitle: "Challenge {name}",
goalAiText: "{style}: {motto}",
friendModeLabel: "Family / Friend Mode",
friendWhiteLabel: "White Player",
friendBlackLabel: "Black Player",
friendWhiteDefault: "White Friend",
friendBlackDefault: "Black Friend",
friendRecordEmpty: "Enter two names to save their head-to-head record on this device.",
friendRecordText: "{white} {whiteWins}W · {black} {blackWins}W · draws {draws}",
friendNamesSaved: "Friend mode names saved",
dragInvalid: "That square is not legal",
resetScore: "Reset",
resetScoreAria: "Reset score",
white: "White",
black: "Black",
draw: "Draw",
materialEven: "Material: even",
materialLead: "Material: {side} +{amount}",
rankLabel: "Player Rank",
rankPointsLabel: "Rank Points",
officialRankSynced: "Official online rank: {points} points · {rate}% win rate",
officialRankLocal: "Local rank: official rank syncs online",
officialRankLoaded: "Official online rank synced",
officialRankPreserved: "No official server rank yet, so your local rank was preserved.",
officialRankMigrated: "Local rank was used as the initial official online rank.",
officialRankMigrationPrompt: "Sync your local {points} points as your official online rank?",
officialRankFailed: "Could not sync official online rank",
rankRules: "Only complete AI ranked games change rank (current {level}): win {win}, draw {draw}, loss {loss}.",
rankScoreNotice: "Rank points {points}",
rankScoreFloorNotice: "Rank points are already 0, so no more points were lost",
rankNoAiScoreNotice: "Only complete AI ranked games change rank points",
rankedSettlementLabel: "Rank Settlement",
rankedSettlementValid: "This ranked game counted",
rankedSettlementInvalid: "This ranked game did not count",
rankedSettlementWin: "Win",
rankedSettlementLoss: "Loss",
rankedSettlementDraw: "Draw",
rankedSettlementDelta: "{result} {points} points",
rankedSettlementReasonValid: "A complete AI ranked game was scored.",
rankedSettlementReasonLocal: "Local offline scoring; the live version asks the server to verify.",
rankServerChecking: "Checking this ranked result with the server.",
rankServerVerified: "Server verified: this game can count for official rank.",
rankServerRejected: "Server verification failed: rank points were removed.",
rankServerUnavailable: "The server could not verify this game; it stays as a local record.",
rankedInvalidLan: "LAN games do not change rank points.",
rankedInvalidGameCenter: "Game Center online games do not change rank points.",
rankedInvalidNotRanked: "Ranked mode was not enabled.",
rankedInvalidNoAi: "This was not a complete AI game.",
rankedInvalidHint: "A hint was used, so this game does not count.",
rankedInvalidLevel: "The AI level changed mid-game, so this game does not count.",
rankedInvalidSide: "The player side changed mid-game, so this game does not count.",
rankedInvalidNoMoves: "The game was not completed from a real move.",
rankedInvalidGeneric: "Only complete AI ranked games change rank points.",
rankSummaryAria: "View rank",
rankProgressAria: "Rank progress",
rankProgressText: "{points} points to {rank}",
rankMaxText: "Highest rank reached",
whiteCaptured: "White captured",
blackCaptured: "Black captured",
moveRecordLabel: "Moves",
moveRecordTitle: "Move Record",
copyPgnAria: "Copy PGN",
fenTitle: "Position Code",
copy: "Copy",
copyFenAria: "Copy FEN",
loadPosition: "Load Position",
promotionTitle: "Choose Promotion",
cancelPromotionAria: "Cancel promotion",
closeTutorialAria: "Close beginner guide",
previous: "Previous",
next: "Next",
done: "Done",
tutorialStep: "Step {current} / {total}",
emptySquare: "{square} empty",
pieceLabel: "{square} {side} {piece}",
checkmateWinTitle: "{winner} wins by checkmate",
checkmateDetail: "Move {move} finished",
checkmateChip: "Checkmate",
stalemateTitle: "Stalemate",
stalemateDetail: "No legal moves; the game is drawn",
threefoldTitle: "Draw by repetition",
threefoldDetail: "The same position appeared three times",
insufficientTitle: "Draw by insufficient material",
insufficientDetail: "Neither side can force checkmate",
fiftyTitle: "Draw by fifty-move rule",
fiftyDetail: "Fifty moves without a pawn move or capture",
checkTitle: "{side} is in check",
checkDetail: "Move {move}",
checkChip: "{side} to answer check",
turnTitle: "{side} to move",
turnDetail: "Move {move}",
turnChip: "{side} to move",
reviewLabel: "Post-Game Review",
reviewTitle: "Game Review",
reviewChipWin: "Win",
reviewChipLoss: "Review",
reviewChipDraw: "Draw",
reviewSummaryWin: "You won this game. Remember the key move and keep the no-hint habit strong.",
reviewSummaryLoss: "You lost this game. Study the biggest mistake and the moment the AI seized its chance.",
reviewSummaryDraw: "This was a draw. You held the position; next, practice creating a clearer attack.",
reviewKeyMove: "Key Move",
reviewBestMove: "Best Move",
reviewMistake: "Biggest Mistake",
reviewBetterMove: "Better Move",
reviewMistakeReason: "Why This Was Wrong",
reviewPhaseScore: "Game Score",
reviewPhaseScoreText: "Opening {opening} · Middlegame {middle} · Endgame {endgame}",
reviewMistakeReasonCheck: "After this move, king safety got worse and the opponent could keep checking or creating tactics.",
reviewMistakeReasonCapture: "This move made an important piece or square easier to capture.",
reviewMistakeReasonCenter: "This move did not solve center control or piece coordination, so the opponent attacked more easily.",
reviewWhy: "Why It Happened",
reviewNoMistake: "No major mistake found. Keep that discipline.",
reviewMoveText: "{move}. {san} ({from}->{to})",
reviewWhyWin: "You won by keeping threats alive and turning the final advantage into a result.",
reviewWhyLoss: "The main issue was allowing a larger tactical chance; next game, check whether your pieces can be captured.",
reviewWhyDraw: "Neither side gained a decisive edge, so the game settled into a draw.",
reviewPractice: "Practice this mistake",
reviewPracticeNotice: "Opened the related beginner lesson",
reviewNextPractice: "Next Practice",
reviewNextPracticeCheck: "Practice king safety and escaping check.",
reviewNextPracticeCapture: "Practice protecting pieces and calculating captures.",
reviewNextPracticeCenter: "Practice opening center control and development.",
tutorialLessonProgress: "{done} / {total} lessons complete",
tutorialLessonUnlocked: "Lesson badge unlocked: {title}",
tutorialTrainingTitle: "Beginner Training Levels",
opening: "Starting position",
invalidMove: "That move is not legal",
noTip: "No hint is available right now",
tipNotice: "Hint: {from} → {to} ({san})",
boardThemeChanged: "Board changed: {theme}",
tutorialDone: "Beginner guide complete. Try making a move.",
aiThinking: "AI is thinking...",
aiMove: "AI: {san}",
newGameStarted: "New game started",
undoNotice: "Move undone",
undoEmpty: "There is no move to undo yet.",
copied: "{label} copied",
copyBlocked: "The browser blocked copying. Select the text manually.",
needFen: "Enter a FEN first",
fenLoaded: "Position loaded",
badFen: "The FEN is not valid",
aiEnabled: "AI enabled. You play {side}",
aiDisabled: "AI disabled",
sideChanged: "You now play {side}. A new game has started.",
aiDifficultyNotice: "AI level: {level} - {name}",
professionalLocked: "Professional AI requires the Genius Youth badge first",
professionalUnlocked: "Professional AI unlocked. You can challenge it now.",
professionalLockedDetail: "Professional AI locked: earn Genius Youth first ({count}/12 Master no-hint wins).",
geniusStreakProgress: "Master no-hint win streak: {count}/12",
geniusStreakReset: "Master no-hint win streak reset",
geniusStreakHintReset: "A hint was used this game, so the Master no-hint streak reset",
scoreReset: "Score reset",
musicEnabled: "Background music enabled",
musicDisabled: "Background music disabled",
musicVolume: "Music",
effectsVolume: "Piece Effects",
voiceVolume: "Piece Voices",
volumeChanged: "{label}: {value}%",
soundTestMusic: "Test Music",
soundTestEffects: "Test Effects",
soundTestVoice: "Test Voices",
soundStatusReady: "Sound is ready.",
soundStatusNeedsTap: "If there is no sound, click the page once first.",
soundTestNotice: "Testing: {label}",
volumeSaved: "Sound setting saved: {label} {value}%",
tutorialStars: "Training stars: {stars}",
dragReady: "Drag to a target square to move",
languageChanged: "Language switched to English",
},
};
const allSquares = files.flatMap((file) => Array.from({ length: 8 }, (_, index) => `${file}${index + 1}`));
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
const checkSoundProfiles = {
p: {
wave: "square",
notes: [
[880, 0, 0.07],
[1175, 0.08, 0.09],
],
},
n: {
wave: "triangle",
notes: [
[659, 0, 0.08],
[988, 0.09, 0.08],
[740, 0.18, 0.1],
],
},
b: {
wave: "sine",
notes: [
[523, 0, 0.12],
[659, 0.12, 0.12],
[784, 0.24, 0.12],
],
},
r: {
wave: "sawtooth",
notes: [
[196, 0, 0.16],
[294, 0.17, 0.14],
],
},
q: {
wave: "triangle",
notes: [
[784, 0, 0.08],
[988, 0.09, 0.1],
[1319, 0.2, 0.16],
],
},
k: {
wave: "sine",
notes: [
[440, 0, 0.12],
[330, 0.13, 0.15],
],
},
double: {
wave: "square",
notes: [
[587, 0, 0.09],
[880, 0.07, 0.09],
[1175, 0.14, 0.13],
],
},
};
const pieceMoveLines = {
zh: {
p: [
"小兵：一步一步，也能走到最后。",
"小兵：我先占住前线。",
"小兵：别小看这一步。",
],
n: [
"战马：嘶鸣一声，跃过棋盘。",
"战马：我不走直线，我跳出机会。",
"战马：侧翼交给我。",
],
b: [
"象：斜线打开，我看得很远。",
"象：安静一点，我已经锁定长斜线。",
"象：从角落，也能影响全局。",
],
r: [
"车：直线推进，城墙开路。",
"车：横竖都是我的道路。",
"车：重型火力，开始压上。",
],
q: [
"后：全场听令，我已出击。",
"后：纵横斜线，都归我掌控。",
"后：优雅一点，威胁已经到了。",
],
k: [
"王：稳住王座，我亲自前进。",
"王：一步足够，安全最重要。",
"王：守护我，就是守护整盘棋。",
],
},
en: {
p: [
"Pawn: One step at a time can still reach the end.",
"Pawn: I will hold the front line.",
"Pawn: Small move, real pressure.",
],
n: [
"Knight: I leap over the battlefield.",
"Knight: I do not go straight; I find angles.",
"Knight: The flank is mine.",
],
b: [
"Bishop: The diagonal is open, and I see far.",
"Bishop: Quiet now; the long line is mine.",
"Bishop: From the corner, I can change the board.",
],
r: [
"Rook: Straight ahead, the wall advances.",
"Rook: Files and ranks belong to me.",
"Rook: Heavy force is moving in.",
],
q: [
"Queen: The board listens when I move.",
"Queen: File, rank, diagonal; I command them all.",
"Queen: Gracefully done, the threat has arrived.",
],
k: [
"King: The throne moves carefully.",
"King: One step is enough when safety matters.",
"King: Guard me, and guard the game.",
],
},
};
const pieceVoiceProfiles = {
p: {
wave: "triangle",
volume: 0.026,
notes: [
[440, 0, 0.075],
[523, 0.09, 0.075],
[392, 0.18, 0.09],
],
},
n: {
wave: "sawtooth",
volume: 0.024,
sweeps: [
[360, 920, 0, 0.22],
[860, 520, 0.19, 0.2],
],
noise: [1800, 0.06, 0.18],
},
b: {
wave: "sine",
volume: 0.022,
notes: [
[330, 0, 0.18],
[494, 0.08, 0.2],
[660, 0.18, 0.2],
],
},
r: {
wave: "square",
volume: 0.024,
notes: [
[147, 0, 0.13],
[196, 0.12, 0.14],
[247, 0.25, 0.12],
],
noise: [260, 0.02, 0.24],
},
q: {
wave: "triangle",
volume: 0.026,
notes: [
[659, 0, 0.08],
[880, 0.08, 0.08],
[1175, 0.17, 0.1],
[1568, 0.29, 0.12],
],
},
k: {
wave: "sine",
volume: 0.032,
notes: [
[196, 0, 0.22],
[147, 0.12, 0.24],
[262, 0.32, 0.18],
],
noise: [380, 0.04, 0.16],
},
};
const game = new Chess();
const els = {
board: document.querySelector("#board"),
turnChip: document.querySelector("#turnChip"),
statusTitle: document.querySelector("#statusTitle"),
statusDetail: document.querySelector("#statusDetail"),
continueCard: document.querySelector("#continueCard"),
continueTitle: document.querySelector("#continueTitle"),
continueText: document.querySelector("#continueText"),
continueGameBtn: document.querySelector("#continueGameBtn"),
goalCard: document.querySelector("#goalCard"),
goalLabel: document.querySelector("#goalLabel"),
goalTitle: document.querySelector("#goalTitle"),
goalText: document.querySelector("#goalText"),
notice: document.querySelector("#notice"),
postGameReviewPanel: document.querySelector("#postGameReviewPanel"),
reviewLabel: document.querySelector("#reviewLabel"),
reviewTitle: document.querySelector("#reviewTitle"),
reviewChip: document.querySelector("#reviewChip"),
reviewSummary: document.querySelector("#reviewSummary"),
reviewList: document.querySelector("#reviewList"),
resultSettlementCard: document.querySelector("#resultSettlementCard"),
resultSettlementLabel: document.querySelector("#resultSettlementLabel"),
resultSettlementTitle: document.querySelector("#resultSettlementTitle"),
resultSettlementScore: document.querySelector("#resultSettlementScore"),
resultSettlementMeta: document.querySelector("#resultSettlementMeta"),
resultSettlementPractice: document.querySelector("#resultSettlementPractice"),
rankedSettlementCard: document.querySelector("#rankedSettlementCard"),
rankedSettlementLabel: document.querySelector("#rankedSettlementLabel"),
rankedSettlementTitle: document.querySelector("#rankedSettlementTitle"),
rankedSettlementDelta: document.querySelector("#rankedSettlementDelta"),
rankedSettlementReason: document.querySelector("#rankedSettlementReason"),
reviewPracticeBtn: document.querySelector("#reviewPracticeBtn"),
profileBtn: document.querySelector("#profileBtn"),
profileButtonBadge: document.querySelector("#profileButtonBadge"),
profileBtnText: document.querySelector("#profileBtnText"),
profileDialog: document.querySelector("#profileDialog"),
profileLabel: document.querySelector("#profileLabel"),
profileTitle: document.querySelector("#profileTitle"),
closeProfileBtn: document.querySelector("#closeProfileBtn"),
profileAvatar: document.querySelector("#profileAvatar"),
profileName: document.querySelector("#profileName"),
profileStatus: document.querySelector("#profileStatus"),
profileMeta: document.querySelector("#profileMeta"),
profileRankLabel: document.querySelector("#profileRankLabel"),
profileRankValue: document.querySelector("#profileRankValue"),
profileRankProgress: document.querySelector("#profileRankProgress"),
profileAchievementLabel: document.querySelector("#profileAchievementLabel"),
profileAchievementValue: document.querySelector("#profileAchievementValue"),
profileScoreLabel: document.querySelector("#profileScoreLabel"),
profileScoreValue: document.querySelector("#profileScoreValue"),
profileMaterialLabel: document.querySelector("#profileMaterialLabel"),
profileMaterialValue: document.querySelector("#profileMaterialValue"),
profileGamesLabel: document.querySelector("#profileGamesLabel"),
profileGamesValue: document.querySelector("#profileGamesValue"),
profileWinRateLabel: document.querySelector("#profileWinRateLabel"),
profileWinRateValue: document.querySelector("#profileWinRateValue"),
profileFavoritePieceLabel: document.querySelector("#profileFavoritePieceLabel"),
profileFavoritePieceValue: document.querySelector("#profileFavoritePieceValue"),
profileLastSavedLabel: document.querySelector("#profileLastSavedLabel"),
profileLastSavedValue: document.querySelector("#profileLastSavedValue"),
dailyLabel: document.querySelector("#dailyLabel"),
dailyTitle: document.querySelector("#dailyTitle"),
dailyStars: document.querySelector("#dailyStars"),
dailyStreak: document.querySelector("#dailyStreak"),
dailyList: document.querySelector("#dailyList"),
dailyRewardToast: document.querySelector("#dailyRewardToast"),
dailyRewardBadge: document.querySelector("#dailyRewardBadge"),
dailyRewardText: document.querySelector("#dailyRewardText"),
profileAuthBtn: document.querySelector("#profileAuthBtn"),
profileLogoutBtn: document.querySelector("#profileLogoutBtn"),
profileDeleteAccountBtn: document.querySelector("#profileDeleteAccountBtn"),
profileAchievementBtn: document.querySelector("#profileAchievementBtn"),
profileRankBtn: document.querySelector("#profileRankBtn"),
profileLeaderboardBtn: document.querySelector("#profileLeaderboardBtn"),
profileExportBtn: document.querySelector("#profileExportBtn"),
profileImportBtn: document.querySelector("#profileImportBtn"),
profileMistakeBookBtn: document.querySelector("#profileMistakeBookBtn"),
profileRealBoardBtn: document.querySelector("#profileRealBoardBtn"),
profileCloudBackupBtn: document.querySelector("#profileCloudBackupBtn"),
profileCloudRestoreBtn: document.querySelector("#profileCloudRestoreBtn"),
profileCloudStatus: document.querySelector("#profileCloudStatus"),
mistakeBookPanel: document.querySelector("#mistakeBookPanel"),
mistakeBookTitle: document.querySelector("#mistakeBookTitle"),
mistakeBookSummary: document.querySelector("#mistakeBookSummary"),
mistakeBookList: document.querySelector("#mistakeBookList"),
mistakeBookPracticeBtn: document.querySelector("#mistakeBookPracticeBtn"),
mistakeBookClearBtn: document.querySelector("#mistakeBookClearBtn"),
realBoardPanel: document.querySelector("#realBoardPanel"),
realBoardTitle: document.querySelector("#realBoardTitle"),
realBoardText: document.querySelector("#realBoardText"),
realBoardCopyBtn: document.querySelector("#realBoardCopyBtn"),
realBoardCloseBtn: document.querySelector("#realBoardCloseBtn"),
profileImportInput: document.querySelector("#profileImportInput"),
profileImportPreview: document.querySelector("#profileImportPreview"),
profileImportPreviewTitle: document.querySelector("#profileImportPreviewTitle"),
profileImportPreviewText: document.querySelector("#profileImportPreviewText"),
profileImportConfirmBtn: document.querySelector("#profileImportConfirmBtn"),
profileImportCancelBtn: document.querySelector("#profileImportCancelBtn"),
gameControlsLabel: document.querySelector("#gameControlsLabel"),
helpControlsLabel: document.querySelector("#helpControlsLabel"),
viewControlsLabel: document.querySelector("#viewControlsLabel"),
newGameBtn: document.querySelector("#newGameBtn"),
tipBtn: document.querySelector("#tipBtn"),
tutorialBtn: document.querySelector("#tutorialBtn"),
dailyEndgameBtn: document.querySelector("#dailyEndgameBtn"),
mateOneBtn: document.querySelector("#mateOneBtn"),
undoBtn: document.querySelector("#undoBtn"),
flipBtn: document.querySelector("#flipBtn"),
musicBtn: document.querySelector("#musicBtn"),
testMusicBtn: document.querySelector("#testMusicBtn"),
testEffectsBtn: document.querySelector("#testEffectsBtn"),
testVoiceBtn: document.querySelector("#testVoiceBtn"),
soundStatus: document.querySelector("#soundStatus"),
musicVolumeLabel: document.querySelector("#musicVolumeLabel"),
musicVolumeInput: document.querySelector("#musicVolumeInput"),
musicVolumeValue: document.querySelector("#musicVolumeValue"),
effectsVolumeLabel: document.querySelector("#effectsVolumeLabel"),
effectsVolumeInput: document.querySelector("#effectsVolumeInput"),
effectsVolumeValue: document.querySelector("#effectsVolumeValue"),
voiceVolumeLabel: document.querySelector("#voiceVolumeLabel"),
voiceVolumeInput: document.querySelector("#voiceVolumeInput"),
voiceVolumeValue: document.querySelector("#voiceVolumeValue"),
achievementBtn: document.querySelector("#achievementBtn"),
achievementButtonBadge: document.querySelector("#achievementButtonBadge"),
achievementProgressText: document.querySelector("#achievementProgressText"),
leaderboardBtn: document.querySelector("#leaderboardBtn"),
leaderboardBtnText: document.querySelector("#leaderboardBtnText"),
leaderboardDialog: document.querySelector("#leaderboardDialog"),
leaderboardLabel: document.querySelector("#leaderboardLabel"),
leaderboardTitle: document.querySelector("#leaderboardTitle"),
leaderboardSummary: document.querySelector("#leaderboardSummary"),
leaderboardSeason: document.querySelector("#leaderboardSeason"),
leaderboardMyRank: document.querySelector("#leaderboardMyRank"),
leaderboardReward: document.querySelector("#leaderboardReward"),
leaderboardGrid: document.querySelector("#leaderboardGrid"),
closeLeaderboardBtn: document.querySelector("#closeLeaderboardBtn"),
achievementDialog: document.querySelector("#achievementDialog"),
achievementLabel: document.querySelector("#achievementLabel"),
achievementTitle: document.querySelector("#achievementTitle"),
achievementSummary: document.querySelector("#achievementSummary"),
achievementList: document.querySelector("#achievementList"),
closeAchievementBtn: document.querySelector("#closeAchievementBtn"),
achievementDoneBtn: document.querySelector("#achievementDoneBtn"),
feedbackBtn: document.querySelector("#feedbackBtn"),
feedbackBtnText: document.querySelector("#feedbackBtnText"),
feedbackDialog: document.querySelector("#feedbackDialog"),
feedbackLabel: document.querySelector("#feedbackLabel"),
feedbackTitle: document.querySelector("#feedbackTitle"),
closeFeedbackBtn: document.querySelector("#closeFeedbackBtn"),
feedbackForm: document.querySelector("#feedbackForm"),
feedbackText: document.querySelector("#feedbackText"),
feedbackTextLabel: document.querySelector("#feedbackTextLabel"),
feedbackKindButtons: [...document.querySelectorAll("[data-feedback-kind]")],
feedbackMailbox: document.querySelector("#feedbackMailbox"),
feedbackCount: document.querySelector("#feedbackCount"),
feedbackIdHelp: document.querySelector("#feedbackIdHelp"),
feedbackInboxSummary: document.querySelector("#feedbackInboxSummary"),
feedbackInboxList: document.querySelector("#feedbackInboxList"),
feedbackBackupTitle: document.querySelector("#feedbackBackupTitle"),
feedbackBackupText: document.querySelector("#feedbackBackupText"),
copyFeedbackBackupBtn: document.querySelector("#copyFeedbackBackupBtn"),
mailFeedbackBackupBtn: document.querySelector("#mailFeedbackBackupBtn"),
feedbackMessage: document.querySelector("#feedbackMessage"),
feedbackKindInput: document.querySelector("#feedbackKindInput"),
feedbackIdInput: document.querySelector("#feedbackIdInput"),
feedbackKindLabelInput: document.querySelector("#feedbackKindLabelInput"),
feedbackAccountInput: document.querySelector("#feedbackAccountInput"),
feedbackLanguageInput: document.querySelector("#feedbackLanguageInput"),
feedbackFenInput: document.querySelector("#feedbackFenInput"),
feedbackPgnInput: document.querySelector("#feedbackPgnInput"),
feedbackPageInput: document.querySelector("#feedbackPageInput"),
feedbackCreatedAtInput: document.querySelector("#feedbackCreatedAtInput"),
cancelFeedbackBtn: document.querySelector("#cancelFeedbackBtn"),
submitFeedbackBtn: document.querySelector("#submitFeedbackBtn"),
moreMenuBtn: document.querySelector("#moreMenuBtn"),
moreMenu: document.querySelector("#moreMenu"),
accountLabel: document.querySelector("#accountLabel"),
accountTitle: document.querySelector("#accountTitle"),
accountDetail: document.querySelector("#accountDetail"),
authOpenBtn: document.querySelector("#authOpenBtn"),
logoutBtn: document.querySelector("#logoutBtn"),
deleteAccountBtn: document.querySelector("#deleteAccountBtn"),
authDialog: document.querySelector("#authDialog"),
authTitle: document.querySelector("#authTitle"),
authModeButtons: [...document.querySelectorAll("[data-auth-mode]")],
authForm: document.querySelector("#authForm"),
authUsername: document.querySelector("#authUsername"),
authPassword: document.querySelector("#authPassword"),
authUsernameLabel: document.querySelector("#authUsernameLabel"),
authPasswordLabel: document.querySelector("#authPasswordLabel"),
authMessage: document.querySelector("#authMessage"),
closeAuthBtn: document.querySelector("#closeAuthBtn"),
cancelAuthBtn: document.querySelector("#cancelAuthBtn"),
submitAuthBtn: document.querySelector("#submitAuthBtn"),
lanPanel: document.querySelector(".lan-panel"),
lanLabel: document.querySelector("#lanLabel"),
lanTitle: document.querySelector("#lanTitle"),
lanStatus: document.querySelector("#lanStatus"),
lanRoomInput: document.querySelector("#lanRoomInput"),
lanCreateBtn: document.querySelector("#lanCreateBtn"),
lanConnectBtn: document.querySelector("#lanConnectBtn"),
lanReconnectBtn: document.querySelector("#lanReconnectBtn"),
lanDisconnectBtn: document.querySelector("#lanDisconnectBtn"),
lanCopyLinkBtn: document.querySelector("#lanCopyLinkBtn"),
lanDetail: document.querySelector("#lanDetail"),
lanCheckBtn: document.querySelector("#lanCheckBtn"),
lanDiagnosticBtn: document.querySelector("#lanDiagnosticBtn"),
lanAppModeCard: document.querySelector("#lanAppModeCard"),
lanAppModeLabel: document.querySelector("#lanAppModeLabel"),
lanAppModeTitle: document.querySelector("#lanAppModeTitle"),
lanAppModeText: document.querySelector("#lanAppModeText"),
lanModeCreateBtn: document.querySelector("#lanModeCreateBtn"),
lanModeNearbyBtn: document.querySelector("#lanModeNearbyBtn"),
lanModeScanBtn: document.querySelector("#lanModeScanBtn"),
lanModeCodeBtn: document.querySelector("#lanModeCodeBtn"),
lanModeCreateLabel: document.querySelector("#lanModeCreateLabel"),
lanModeNearbyLabel: document.querySelector("#lanModeNearbyLabel"),
lanModeScanLabel: document.querySelector("#lanModeScanLabel"),
lanModeCodeLabel: document.querySelector("#lanModeCodeLabel"),
gameCenterCard: document.querySelector("#gameCenterCard"),
gameCenterLabel: document.querySelector("#gameCenterLabel"),
gameCenterTitle: document.querySelector("#gameCenterTitle"),
gameCenterText: document.querySelector("#gameCenterText"),
gameCenterAuthBtn: document.querySelector("#gameCenterAuthBtn"),
gameCenterMatchBtn: document.querySelector("#gameCenterMatchBtn"),
gameCenterDashboardBtn: document.querySelector("#gameCenterDashboardBtn"),
gameCenterStatus: document.querySelector("#gameCenterStatus"),
lanHostCard: document.querySelector("#lanHostCard"),
lanHostLabel: document.querySelector("#lanHostLabel"),
lanHostTitle: document.querySelector("#lanHostTitle"),
lanHostText: document.querySelector("#lanHostText"),
lanHostLink: document.querySelector("#lanHostLink"),
lanCopyHostBtn: document.querySelector("#lanCopyHostBtn"),
lanJumpCard: document.querySelector("#lanJumpCard"),
lanJumpLabel: document.querySelector("#lanJumpLabel"),
lanJumpTitle: document.querySelector("#lanJumpTitle"),
lanJumpText: document.querySelector("#lanJumpText"),
lanHostInput: document.querySelector("#lanHostInput"),
lanOpenHostBtn: document.querySelector("#lanOpenHostBtn"),
lanCheckCard: document.querySelector("#lanCheckCard"),
lanCheckLabel: document.querySelector("#lanCheckLabel"),
lanCheckTitle: document.querySelector("#lanCheckTitle"),
lanCheckPill: document.querySelector("#lanCheckPill"),
lanCheckList: document.querySelector("#lanCheckList"),
lanShareLine: document.querySelector("#lanShareLine"),
lanShareLabel: document.querySelector("#lanShareLabel"),
lanShareLink: document.querySelector("#lanShareLink"),
lanDuelCard: document.querySelector("#lanDuelCard"),
lanDuelLabel: document.querySelector("#lanDuelLabel"),
lanDuelTitle: document.querySelector("#lanDuelTitle"),
lanDuelPill: document.querySelector("#lanDuelPill"),
lanDuelText: document.querySelector("#lanDuelText"),
lanDuelNote: document.querySelector("#lanDuelNote"),
lanDuelRoom: document.querySelector("#lanDuelRoom"),
lanDuelQr: document.querySelector("#lanDuelQr"),
lanDuelLink: document.querySelector("#lanDuelLink"),
lanCopyQrBtn: document.querySelector("#lanCopyQrBtn"),
lanDownloadQrBtn: document.querySelector("#lanDownloadQrBtn"),
lanDuelQrBtn: document.querySelector("#lanDuelQrBtn"),
lanInviteCard: document.querySelector("#lanInviteCard"),
lanInviteLabel: document.querySelector("#lanInviteLabel"),
lanInviteTitle: document.querySelector("#lanInviteTitle"),
lanInviteCloseBtn: document.querySelector("#lanInviteCloseBtn"),
lanInviteText: document.querySelector("#lanInviteText"),
lanInviteRoom: document.querySelector("#lanInviteRoom"),
lanInviteQr: document.querySelector("#lanInviteQr"),
lanInviteLink: document.querySelector("#lanInviteLink"),
lanInviteCopyQrBtn: document.querySelector("#lanInviteCopyQrBtn"),
lanInviteDownloadQrBtn: document.querySelector("#lanInviteDownloadQrBtn"),
lanDiagnosticDialog: document.querySelector("#lanDiagnosticDialog"),
lanDiagnosticLabel: document.querySelector("#lanDiagnosticLabel"),
lanDiagnosticTitle: document.querySelector("#lanDiagnosticTitle"),
lanDiagnosticStatus: document.querySelector("#lanDiagnosticStatus"),
lanDiagnosticList: document.querySelector("#lanDiagnosticList"),
closeLanDiagnosticBtn: document.querySelector("#closeLanDiagnosticBtn"),
copyLanDiagnosticBtn: document.querySelector("#copyLanDiagnosticBtn"),
closeLanDiagnosticDoneBtn: document.querySelector("#closeLanDiagnosticDoneBtn"),
versionBtn: document.querySelector("#versionBtn"),
versionUpdateDot: document.querySelector("#versionUpdateDot"),
releaseDialog: document.querySelector("#releaseDialog"),
releaseLabel: document.querySelector("#releaseLabel"),
releaseTitle: document.querySelector("#releaseTitle"),
releaseVersionText: document.querySelector("#releaseVersionText"),
releaseResourceTime: document.querySelector("#releaseResourceTime"),
releaseUpdateStatus: document.querySelector("#releaseUpdateStatus"),
releaseLiveTitle: document.querySelector("#releaseLiveTitle"),
releaseLiveText: document.querySelector("#releaseLiveText"),
releaseLivePill: document.querySelector("#releaseLivePill"),
releaseBackupLink: document.querySelector("#releaseBackupLink"),
releaseLimitCard: document.querySelector("#releaseLimitCard"),
releaseLimitTitle: document.querySelector("#releaseLimitTitle"),
releaseLimitText: document.querySelector("#releaseLimitText"),
releaseStatusTitle: document.querySelector("#releaseStatusTitle"),
releaseStatusPill: document.querySelector("#releaseStatusPill"),
releaseStatusList: document.querySelector("#releaseStatusList"),
releaseStatusHint: document.querySelector("#releaseStatusHint"),
releaseInstallCard: document.querySelector("#releaseInstallCard"),
releaseInstallTitle: document.querySelector("#releaseInstallTitle"),
releaseInstallPill: document.querySelector("#releaseInstallPill"),
releaseInstallText: document.querySelector("#releaseInstallText"),
installPwaBtn: document.querySelector("#installPwaBtn"),
releaseShareCard: document.querySelector("#releaseShareCard"),
releaseShareTitle: document.querySelector("#releaseShareTitle"),
releaseSharePill: document.querySelector("#releaseSharePill"),
releaseShareText: document.querySelector("#releaseShareText"),
releaseShareQr: document.querySelector("#releaseShareQr"),
releaseShareLink: document.querySelector("#releaseShareLink"),
sharePublicSiteBtn: document.querySelector("#sharePublicSiteBtn"),
releaseProfileBackupCard: document.querySelector("#releaseProfileBackupCard"),
releaseProfileBackupTitle: document.querySelector("#releaseProfileBackupTitle"),
releaseProfileBackupPill: document.querySelector("#releaseProfileBackupPill"),
releaseProfileBackupText: document.querySelector("#releaseProfileBackupText"),
releaseProfileExportBtn: document.querySelector("#releaseProfileExportBtn"),
releaseProfileImportBtn: document.querySelector("#releaseProfileImportBtn"),
releaseProfileDismissBtn: document.querySelector("#releaseProfileDismissBtn"),
checkUpdateBtn: document.querySelector("#checkUpdateBtn"),
checkHealthBtn: document.querySelector("#checkHealthBtn"),
onlineSelfCheckBtn: document.querySelector("#onlineSelfCheckBtn"),
applyUpdateBtn: document.querySelector("#applyUpdateBtn"),
restoreBackupBtn: document.querySelector("#restoreBackupBtn"),
restoreRankBackupBtn: document.querySelector("#restoreRankBackupBtn"),
restoreAchievementsBackupBtn: document.querySelector("#restoreAchievementsBackupBtn"),
restoreGameBackupBtn: document.querySelector("#restoreGameBackupBtn"),
releaseBackupCard: document.querySelector("#releaseBackupCard"),
releaseBackupTitle: document.querySelector("#releaseBackupTitle"),
releaseBackupText: document.querySelector("#releaseBackupText"),
releaseHealthCard: document.querySelector("#releaseHealthCard"),
releaseHealthTitle: document.querySelector("#releaseHealthTitle"),
releaseHealthPill: document.querySelector("#releaseHealthPill"),
releaseHealthList: document.querySelector("#releaseHealthList"),
releaseHistoryTitle: document.querySelector("#releaseHistoryTitle"),
releaseHistoryList: document.querySelector("#releaseHistoryList"),
releaseList: document.querySelector("#releaseList"),
closeReleaseBtn: document.querySelector("#closeReleaseBtn"),
languageButtons: [...document.querySelectorAll("[data-language]")],
languageLabel: document.querySelector("#languageLabel"),
languageTitle: document.querySelector("#languageTitle"),
boardThemeButtons: [...document.querySelectorAll("[data-board-theme]")],
aiTitle: document.querySelector("#aiTitle"),
aiBadge: document.querySelector("#aiBadge"),
aiDetail: document.querySelector("#aiDetail"),
aiLevelDetail: document.querySelector("#aiLevelDetail"),
aiToggleBtn: document.querySelector("#aiToggleBtn"),
playerSideBtn: document.querySelector("#playerSideBtn"),
rankedModeBtn: document.querySelector("#rankedModeBtn"),
rankedDetail: document.querySelector("#rankedDetail"),
professionalLeagueBtn: document.querySelector("#professionalLeagueBtn"),
professionalLeagueDetail: document.querySelector("#professionalLeagueDetail"),
professionalLeagueLabel: document.querySelector("#professionalLeagueLabel"),
professionalLeagueTitle: document.querySelector("#professionalLeagueTitle"),
professionalLeaguePoints: document.querySelector("#professionalLeaguePoints"),
professionalLeagueCurrent: document.querySelector("#professionalLeagueCurrent"),
professionalLeagueLeaderboard: document.querySelector("#professionalLeagueLeaderboard"),
aiPersonaLabel: document.querySelector("#aiPersonaLabel"),
aiPersonaName: document.querySelector("#aiPersonaName"),
aiPersonaStyle: document.querySelector("#aiPersonaStyle"),
aiPersonaMotto: document.querySelector("#aiPersonaMotto"),
aiLevelButtons: [...document.querySelectorAll("[data-ai-level]")],
rankSummaryBtn: document.querySelector("#rankSummaryBtn"),
rankSummaryMedal: document.querySelector("#rankSummaryMedal"),
rankSummaryText: document.querySelector("#rankSummaryText"),
resetScoreBtn: document.querySelector("#resetScoreBtn"),
friendModeLabel: document.querySelector("#friendModeLabel"),
friendWhiteLabel: document.querySelector("#friendWhiteLabel"),
friendBlackLabel: document.querySelector("#friendBlackLabel"),
friendWhiteName: document.querySelector("#friendWhiteName"),
friendBlackName: document.querySelector("#friendBlackName"),
friendRecordText: document.querySelector("#friendRecordText"),
whiteWins: document.querySelector("#whiteWins"),
draws: document.querySelector("#draws"),
blackWins: document.querySelector("#blackWins"),
materialLead: document.querySelector("#materialLead"),
rankPanel: document.querySelector(".rank-panel"),
rankLabel: document.querySelector("#rankLabel"),
rankTitle: document.querySelector("#rankTitle"),
rankMedalSymbol: document.querySelector("#rankMedalSymbol"),
rankPointsLabel: document.querySelector("#rankPointsLabel"),
rankPoints: document.querySelector("#rankPoints"),
rankProgressBar: document.querySelector("#rankProgressBar"),
rankProgress: document.querySelector("#rankProgress"),
rankProgressText: document.querySelector("#rankProgressText"),
rankRules: document.querySelector("#rankRules"),
whiteCaptured: document.querySelector("#whiteCaptured"),
blackCaptured: document.querySelector("#blackCaptured"),
whiteScore: document.querySelector("#whiteScore"),
blackScore: document.querySelector("#blackScore"),
moveList: document.querySelector("#moveList"),
copyPgnBtn: document.querySelector("#copyPgnBtn"),
copyFenBtn: document.querySelector("#copyFenBtn"),
fenInput: document.querySelector("#fenInput"),
loadFenBtn: document.querySelector("#loadFenBtn"),
settingsCenterLabel: document.querySelector("#settingsCenterLabel"),
settingsCenterTitle: document.querySelector("#settingsCenterTitle"),
promotionDialog: document.querySelector("#promotionDialog"),
promotionChoices: document.querySelector("#promotionChoices"),
cancelPromotionBtn: document.querySelector("#cancelPromotionBtn"),
tutorialDialog: document.querySelector("#tutorialDialog"),
tutorialStepLabel: document.querySelector("#tutorialStepLabel"),
tutorialTitle: document.querySelector("#tutorialTitle"),
tutorialText: document.querySelector("#tutorialText"),
tutorialStars: document.querySelector("#tutorialStars"),
tutorialTips: document.querySelector("#tutorialTips"),
tutorialProgress: document.querySelector("#tutorialProgress"),
tutorialPrevBtn: document.querySelector("#tutorialPrevBtn"),
tutorialNextBtn: document.querySelector("#tutorialNextBtn"),
closeTutorialBtn: document.querySelector("#closeTutorialBtn"),
onboardingDialog: document.querySelector("#onboardingDialog"),
onboardingLabel: document.querySelector("#onboardingLabel"),
onboardingTitle: document.querySelector("#onboardingTitle"),
onboardingText: document.querySelector("#onboardingText"),
onboardingList: document.querySelector("#onboardingList"),
onboardingSkipBtn: document.querySelector("#onboardingSkipBtn"),
onboardingTutorialBtn: document.querySelector("#onboardingTutorialBtn"),
};
let orientation = "w";
let selectedSquare = null;
let legalMoves = [];
let lastMove = null;
let tipMove = null;
let dragMoveState = null;
let dragGhost = null;
let dragTargetSquare = "";
let suppressNextSquareClick = false;
let restoredSavedGameAvailable = false;
let continuePromptDismissed = false;
let tutorialMove = null;
let tutorialIndex = 0;
let completedTutorialLessons = loadTutorialLessons();
let pendingPromotion = null;
let noticeTimer = null;
let audioContext = null;
let musicEnabled = true;
let musicPlaying = false;
let musicTimer = null;
let musicGain = null;
let availableVersionInfo = null;
let latestVersionInfo = null;
let updateCheckState = "idle";
let deferredInstallPrompt = null;
let pwaInstallState = "idle";
let pendingProfileImportPayload = null;
let pendingProfileImportSummary = null;
let aiEnabled = false;
let humanColor = "w";
let aiLevel = 3;
let aiThinking = false;
let aiTimer = null;
let aiSearchToken = 0;
let professionalAiWorker = null;
let professionalAiRequestId = 0;
let authMode = "login";
let feedbackKind = "bug";
let lanState = {
socket: null,
status: "disconnected",
room: "",
color: null,
clients: 0,
versions: [],
peers: [],
protocolVersion: lanProtocolVersion,
reconnectAttempts: 0,
reconnectTimer: null,
manualDisconnect: false,
};
let gameCenterState = {
status: "idle",
player: "",
reason: "",
color: "",
localPlayerId: "",
remotePlayerIds: [],
remotePlayers: [],
connected: false,
lastMessageId: "",
};
let lastLanCheck = null;
let lanHostRefreshPromise = null;
let releaseHealthState = { status: "idle", rows: [] };
let accounts = loadAccounts();
let currentAccountId = loadCurrentAccountId(accounts);
let rankedModeEnabled = loadRankedMode();
let professionalLeagueModeEnabled = loadProfessionalLeagueMode();
let professionalLeagueGameEligible = false;
let rankedGameEligible = false;
let rankedGameAiLevel = aiLevel;
let rankedGameHumanColor = humanColor;
let matchScore = loadMatchScore();
let friendMode = loadFriendMode();
let rankPoints = loadRankPoints();
let officialRankProfile = loadOfficialRankProfile();
let officialRankStatus = "idle";
let unlockedAchievements = loadAchievements();
let masterNoHintWinStreak = loadMasterNoHintWinStreak();
let profileActivity = loadProfileActivity();
let dailyStars = loadDailyStars();
let dailyProgress = loadDailyProgress();
let dailyStreak = loadDailyStreak();
let dailyTraining = loadDailyTraining();
let activeTrainingMode = "";
let activeTrainingPuzzleId = "";
let recordedProfileOutcome = null;
let currentGameUsedTip = false;
let recordedResult = null;
let recordedRankDelta = 0;
let recordedLeagueDelta = 0;
let recordedLeagueOutcome = null;
let postGameReview = null;
let lastRankedSettlement = null;
let dailyRewardTimer = null;
let currentLanguage = loadLanguage();
let boardTheme = loadBoardTheme();
let volumeSettings = loadVolumeSettings();
let onlineLeagueEntries = [];
let onlineLeagueSeason = null;
let onlineLeagueMyRank = null;
let onlineLeagueReward = null;
let onlineLeagueStatus = "idle";
function opposite(color) {
return color === "w" ? "b" : "w";
}
function createEmptyScore() {
return { w: 0, b: 0, d: 0 };
}
function normalizeScore(score = {}) {
return {
w: Number(score.w) || 0,
b: Number(score.b) || 0,
d: Number(score.d) || 0,
};
}
function cleanFriendName(name, fallback) {
return String(name ?? "")
.trim()
.replace(/\s+/g, " ")
.slice(0, 18) || fallback;
}
function friendPairKey(white, black) {
return [white, black].map((name) => name.toLowerCase()).sort().join("::");
}
function createFriendMode() {
return {
white: "",
black: "",
records: {},
};
}
function normalizeFriendMode(mode = {}) {
const records = mode.records && typeof mode.records === "object" && !Array.isArray(mode.records) ? mode.records : {};
const normalizedRecords = {};
for (const [key, record] of Object.entries(records)) {
normalizedRecords[key] = normalizeScore(record);
}
return {
white: String(mode.white ?? "").trim().replace(/\s+/g, " ").slice(0, 18),
black: String(mode.black ?? "").trim().replace(/\s+/g, " ").slice(0, 18),
records: normalizedRecords,
};
}
function loadFriendMode() {
try {
return normalizeFriendMode(JSON.parse(window.localStorage.getItem(friendModeStorageKey) ?? "null") ?? createFriendMode());
} catch (error) {
return normalizeFriendMode(createFriendMode());
}
}
function saveFriendMode() {
try {
window.localStorage.setItem(friendModeStorageKey, JSON.stringify(friendMode));
} catch (error) {
}
}
function currentFriendNames() {
return {
white: cleanFriendName(friendMode.white, t("friendWhiteDefault")),
black: cleanFriendName(friendMode.black, t("friendBlackDefault")),
};
}
function currentFriendRecord() {
const names = currentFriendNames();
const key = friendPairKey(names.white, names.black);
friendMode.records[key] = normalizeScore(friendMode.records[key]);
return { key, names, score: friendMode.records[key] };
}
function createEmptyLeagueStats() {
return { points: 0, games: 0, wins: 0, draws: 0, losses: 0, updatedAt: "" };
}
function normalizeLeagueStats(stats = {}) {
return {
points: Math.max(0, Math.floor(Number(stats.points)) || 0),
games: Math.max(0, Math.floor(Number(stats.games)) || 0),
wins: Math.max(0, Math.floor(Number(stats.wins)) || 0),
draws: Math.max(0, Math.floor(Number(stats.draws)) || 0),
losses: Math.max(0, Math.floor(Number(stats.losses)) || 0),
updatedAt: typeof stats.updatedAt === "string" ? stats.updatedAt : "",
};
}
function ensureAccountLeagueStats(account) {
if (!account) {
return createEmptyLeagueStats();
}
account.professionalLeague = normalizeLeagueStats(account.professionalLeague ?? createEmptyLeagueStats());
return account.professionalLeague;
}
function currentLeagueStats() {
return ensureAccountLeagueStats(currentAccount());
}
function safeAccountProfileStorageId(accountId = currentAccountId || "guest") {
return `${safeAccountProfileStorageKey}:${accountId || "guest"}`;
}
function createSafeAccountSnapshot() {
const account = currentAccount();
return {
accountId: currentAccountId || "guest",
displayName: cleanPlayerDisplayName(account?.name || "Guest"),
rankPoints: Math.max(0, Math.floor(Number(rankPoints)) || 0),
professionalLeague: normalizeLeagueStats(account?.professionalLeague ?? currentLeagueStats()),
dailyTraining: normalizeDailyTraining(dailyTraining),
profileActivity: normalizeProfileActivity(profileActivity),
savedAt: new Date().toISOString(),
};
}
function applySafeAccountSnapshot(snapshot = {}) {
if (!snapshot || typeof snapshot !== "object") {
return false;
}
const account = currentAccount();
const safeRankPoints = Math.max(0, Math.floor(Number(snapshot.rankPoints)) || 0);
const safeLeague = normalizeLeagueStats(snapshot.professionalLeague ?? {});
if (account) {
account.rankPoints = Math.max(Math.floor(Number(account.rankPoints)) || 0, safeRankPoints);
account.professionalLeague = {
...safeLeague,
points: Math.max(safeLeague.points, ensureAccountLeagueStats(account).points),
games: Math.max(safeLeague.games, ensureAccountLeagueStats(account).games),
wins: Math.max(safeLeague.wins, ensureAccountLeagueStats(account).wins),
draws: Math.max(safeLeague.draws, ensureAccountLeagueStats(account).draws),
losses: Math.max(safeLeague.losses, ensureAccountLeagueStats(account).losses),
updatedAt: safeLeague.updatedAt || ensureAccountLeagueStats(account).updatedAt,
};
account.updatedAt = new Date().toISOString();
saveAccounts();
}
if (safeRankPoints > rankPoints) {
rankPoints = safeRankPoints;
saveRankPoints();
}
if (snapshot.dailyTraining) {
const restored = normalizeDailyTraining(snapshot.dailyTraining);
if (restored.streak > currentDailyTrainingStreakCount()) {
dailyTraining = restored;
saveDailyTraining();
}
}
if (snapshot.profileActivity) {
const restoredActivity = normalizeProfileActivity(snapshot.profileActivity);
if (restoredActivity.completedGames > profileActivity.completedGames) {
profileActivity = restoredActivity;
saveProfileActivity();
}
}
return true;
}
function normalizeAccountId(name) {
return name.trim().toLowerCase();
}
function hashPassword(accountId, password) {
const input = `${accountId}:jeffery-chess:${password}`;
let hash = 2166136261;
for (let i = 0; i < input.length; i += 1) {
hash ^= input.charCodeAt(i);
hash = Math.imul(hash, 16777619);
}
return (hash >>> 0).toString(16).padStart(8, "0");
}
function loadAccounts() {
try {
const saved = JSON.parse(window.localStorage.getItem(accountStorageKey) ?? "{}");
if (!saved || typeof saved !== "object" || Array.isArray(saved)) {
return {};
}
for (const account of Object.values(saved)) {
ensureAccountLeagueStats(account);
}
return saved;
} catch (error) {
return {};
}
}
function saveAccounts() {
try {
window.localStorage.setItem(accountStorageKey, JSON.stringify(accounts));
} catch (error) {
setNotice(t("copyBlocked"));
}
}
function achievementStorageId() {
return `${achievementStorageKey}:${currentAccountId || "guest"}`;
}
function aiChallengeStorageId() {
return `${aiChallengeStorageKey}:${currentAccountId || "guest"}`;
}
function loadAchievements() {
try {
const saved = JSON.parse(window.localStorage.getItem(achievementStorageId()) ?? "[]");
return new Set(Array.isArray(saved) ? saved.filter((id) => achievementCatalog.some((item) => item.id === id)) : []);
} catch (error) {
return new Set();
}
}
function saveAchievements() {
try {
window.localStorage.setItem(achievementStorageId(), JSON.stringify([...unlockedAchievements]));
} catch (error) {
}
}
function loadMasterNoHintWinStreak() {
try {
const saved = Number(window.localStorage.getItem(aiChallengeStorageId()) ?? "0");
return Number.isFinite(saved) ? Math.max(0, Math.min(12, Math.floor(saved))) : 0;
} catch (error) {
return 0;
}
}
function saveMasterNoHintWinStreak() {
try {
window.localStorage.setItem(aiChallengeStorageId(), String(masterNoHintWinStreak));
} catch (error) {
}
}
function loadCurrentAccountId(accountMap) {
try {
const saved = window.localStorage.getItem(currentAccountStorageKey);
return saved && accountMap[saved] ? saved : null;
} catch (error) {
return null;
}
}
function saveCurrentAccountId() {
try {
if (currentAccountId) {
window.localStorage.setItem(currentAccountStorageKey, currentAccountId);
} else {
window.localStorage.removeItem(currentAccountStorageKey);
}
} catch (error) {
}
}
function currentAccount() {
return currentAccountId ? accounts[currentAccountId] : null;
}
function accountScopedStoragePrefixes(accountId) {
return [
`${achievementStorageKey}:${accountId}`,
`${aiChallengeStorageKey}:${accountId}`,
`${onlineRankPlayerStorageKey}:${accountId}`,
`${officialRankProfileStorageKey}:${accountId}`,
`${profileActivityStorageKey}:${accountId}`,
`${rankedModeStorageKey}:${accountId}`,
`${professionalLeagueModeStorageKey}:${accountId}`,
`${dailyStarsStorageKey}:${accountId}`,
`${dailyTaskStorageKey}:${accountId}`,
`${dailyStreakStorageKey}:${accountId}`,
`${dailyTrainingStorageKey}:${accountId}`,
`${safeAccountProfileStorageKey}:${accountId}`,
`${tutorialLessonStorageKey}:${accountId}`,
`${mistakeBookStorageKey}:${accountId}`,
`${onlineRankMigrationStorageKey}:${accountId}`,
`${leagueSeasonRewardStorageKey}:${accountId}:`,
];
}
function removeStoredProfileForAccount(accountId) {
const prefixes = accountScopedStoragePrefixes(accountId);
try {
for (let index = window.localStorage.length - 1; index >= 0; index -= 1) {
const key = window.localStorage.key(index);
if (key && prefixes.some((prefix) => key === prefix || key.startsWith(prefix))) {
window.localStorage.removeItem(key);
}
}
} catch (error) {
}
}
function onlineRankStorageId() {
return `${onlineRankPlayerStorageKey}:${currentAccountId || "guest"}`;
}
function officialRankProfileStorageId() {
return `${officialRankProfileStorageKey}:${currentAccountId || "guest"}`;
}
function onlineRankMigrationStorageId() {
return `${onlineRankMigrationStorageKey}:${currentAccountId || "guest"}`;
}
function createStableOnlinePlayerId() {
if (crypto?.randomUUID) {
return crypto.randomUUID().replaceAll("-", "");
}
return `p${Date.now().toString(36)}${Math.random().toString(36).slice(2, 14)}`;
}
function getOnlinePlayerId() {
try {
const saved = window.localStorage.getItem(onlineRankStorageId());
if (saved) {
return saved;
}
const created = currentAccountId ? `acct_${currentAccountId.replace(/[^a-z0-9_-]/gi, "_")}` : createStableOnlinePlayerId();
window.localStorage.setItem(onlineRankStorageId(), created);
return created;
} catch (error) {
return currentAccountId ? `acct_${currentAccountId.replace(/[^a-z0-9_-]/gi, "_")}` : "guest0000";
}
}
function onlineDisplayName() {
return cleanPlayerDisplayName(currentAccount()?.name ?? "Guest");
}
function cleanPlayerDisplayName(name) {
const cleaned = String(name ?? "")
.replace(/\s+/g, " ")
.replace(/[<>]/g, "")
.trim()
.slice(0, 24);
return cleaned || "Player";
}
function hasMigratedInitialOnlineRank() {
try {
return window.localStorage.getItem(onlineRankMigrationStorageId()) === "1";
} catch (error) {
return false;
}
}
function hasSettledInitialOnlineRankMigration() {
try {
return ["1", "skipped"].includes(window.localStorage.getItem(onlineRankMigrationStorageId()));
} catch (error) {
return true;
}
}
function markInitialOnlineRankMigrated() {
try {
window.localStorage.setItem(onlineRankMigrationStorageId(), "1");
} catch (error) {
}
}
function skipInitialOnlineRankMigration() {
try {
window.localStorage.setItem(onlineRankMigrationStorageId(), "skipped");
} catch (error) {
}
}
function normalizeOfficialRankProfile(profile) {
if (!profile || typeof profile !== "object") {
return null;
}
return {
playerId: String(profile.playerId ?? getOnlinePlayerId()),
displayName: String(profile.displayName ?? onlineDisplayName()),
points: Math.max(0, Math.floor(Number(profile.points)) || 0),
rankLevel: Math.max(1, Math.min(10, Math.floor(Number(profile.rankLevel)) || 1)),
highestPoints: Math.max(0, Math.floor(Number(profile.highestPoints)) || 0),
highestRankLevel: Math.max(1, Math.min(10, Math.floor(Number(profile.highestRankLevel)) || 1)),
games: Math.max(0, Math.floor(Number(profile.games)) || 0),
wins: Math.max(0, Math.floor(Number(profile.wins)) || 0),
draws: Math.max(0, Math.floor(Number(profile.draws)) || 0),
losses: Math.max(0, Math.floor(Number(profile.losses)) || 0),
winRate: Math.max(0, Math.min(100, Math.floor(Number(profile.winRate)) || 0)),
professionalUnlocked: Boolean(profile.professionalUnlocked),
updatedAt: profile.updatedAt || "",
recentResults: Array.isArray(profile.recentResults) ? profile.recentResults.slice(0, 5) : [],
};
}
function loadOfficialRankProfile() {
try {
return normalizeOfficialRankProfile(JSON.parse(window.localStorage.getItem(officialRankProfileStorageId()) ?? "null"));
} catch (error) {
return null;
}
}
function saveOfficialRankProfile() {
try {
if (officialRankProfile) {
window.localStorage.setItem(officialRankProfileStorageId(), JSON.stringify(officialRankProfile));
}
} catch (error) {
}
}
function isEmptyOfficialRankProfile(profile) {
return profile.points === 0
&& profile.highestPoints === 0
&& profile.games === 0
&& profile.wins === 0
&& profile.draws === 0
&& profile.losses === 0
&& profile.recentResults.length === 0
&& !profile.professionalUnlocked;
}
function applyOfficialRankProfile(profile, { notify = false, migrated = false } = {}) {
const normalized = normalizeOfficialRankProfile(profile);
if (!normalized) {
return false;
}
const localRankPoints = Math.max(0, Math.floor(Number(rankPoints)) || 0);
if (isEmptyOfficialRankProfile(normalized) && localRankPoints > normalized.points) {
officialRankStatus = "local";
renderRank();
renderProfile();
renderAiPanel();
if (notify) {
setNotice(t("officialRankPreserved"));
}
return false;
}
officialRankProfile = normalized;
rankPoints = normalized.points;
saveRankPoints();
saveOfficialRankProfile();
if (migrated) {
markInitialOnlineRankMigrated();
}
if (normalized.professionalUnlocked && !hasGeniusYouthBadge()) {
unlockedAchievements.add("genius-youth");
saveAchievements();
}
enforceProfessionalAiAccess();
renderRank();
renderProfile();
renderAiPanel();
if (notify) {
setNotice(t(migrated ? "officialRankMigrated" : "officialRankLoaded"));
}
return true;
}
async function fetchOfficialRankProfile({ notify = false } = {}) {
if (!shouldUseRankServerVerification()) {
officialRankStatus = "local";
return false;
}
officialRankStatus = "loading";
try {
const params = new URLSearchParams({
playerId: getOnlinePlayerId(),
displayName: onlineDisplayName(),
});
const initialPoints = Math.max(0, Math.floor(Number(rankPoints)) || 0);
if (initialPoints > 0 && !hasSettledInitialOnlineRankMigration()) {
if (window.confirm(t("officialRankMigrationPrompt", { points: initialPoints }))) {
params.set("initialPoints", String(initialPoints));
} else {
skipInitialOnlineRankMigration();
}
}
const response = await fetch(`/api/player-rank?${params.toString()}`, { cache: "no-store" });
const result = await response.json();
if (!response.ok || !result.ok) {
throw new Error(result.reason || "rank-sync-failed");
}
officialRankStatus = "synced";
return applyOfficialRankProfile(result.profile, { notify, migrated: Boolean(result.migrated) });
} catch (error) {
officialRankStatus = "failed";
if (notify) {
setNotice(t("officialRankFailed"));
}
return false;
} finally {
renderRank();
renderProfile();
}
}
function profileActivityStorageId() {
return `${profileActivityStorageKey}:${currentAccountId || "guest"}`;
}
function mistakeBookStorageId() {
return `${mistakeBookStorageKey}:${currentAccountId || "guest"}`;
}
function emptyPieceUsage() {
return { p: 0, n: 0, b: 0, r: 0, q: 0, k: 0 };
}
function createEmptyProfileActivity() {
return {
moves: 0,
pieceUsage: emptyPieceUsage(),
completedGames: 0,
wins: 0,
draws: 0,
losses: 0,
updatedAt: "",
};
}
function normalizeProfileActivity(activity = {}) {
const pieceUsage = { ...emptyPieceUsage(), ...(activity.pieceUsage || {}) };
for (const type of Object.keys(pieceUsage)) {
pieceUsage[type] = Math.max(0, Math.floor(Number(pieceUsage[type])) || 0);
}
return {
moves: Math.max(0, Math.floor(Number(activity.moves)) || 0),
pieceUsage,
completedGames: Math.max(0, Math.floor(Number(activity.completedGames)) || 0),
wins: Math.max(0, Math.floor(Number(activity.wins)) || 0),
draws: Math.max(0, Math.floor(Number(activity.draws)) || 0),
losses: Math.max(0, Math.floor(Number(activity.losses)) || 0),
updatedAt: typeof activity.updatedAt === "string" ? activity.updatedAt : "",
};
}
function loadProfileActivity() {
try {
const saved = JSON.parse(window.localStorage.getItem(profileActivityStorageId()) ?? "null");
return normalizeProfileActivity(saved ?? createEmptyProfileActivity());
} catch (error) {
return createEmptyProfileActivity();
}
}
function saveProfileActivity() {
try {
window.localStorage.setItem(profileActivityStorageId(), JSON.stringify(normalizeProfileActivity(profileActivity)));
} catch (error) {
}
}
function normalizeVolumeSettings(settings = {}) {
return {
music: Math.max(0, Math.min(100, Math.floor(Number(settings.music)) || 70)),
effects: Math.max(0, Math.min(100, Math.floor(Number(settings.effects)) || 85)),
voice: Math.max(0, Math.min(100, Math.floor(Number(settings.voice)) || 80)),
};
}
function loadVolumeSettings() {
try {
return normalizeVolumeSettings(JSON.parse(window.localStorage.getItem(volumeSettingsStorageKey) ?? "null") ?? {});
} catch (error) {
return normalizeVolumeSettings();
}
}
function saveVolumeSettings() {
try {
window.localStorage.setItem(volumeSettingsStorageKey, JSON.stringify(volumeSettings));
} catch (error) {
}
}
function channelVolume(channel) {
const key = channel === "music" ? "music" : channel === "voice" ? "voice" : "effects";
return (volumeSettings[key] ?? 100) / 100;
}
function scaleVolume(volume, channel = "effects") {
return Math.max(0.0001, volume * channelVolume(channel));
}
function rankedModeStorageId() {
return `${rankedModeStorageKey}:${currentAccountId || "guest"}`;
}
function professionalLeagueModeStorageId() {
return `${professionalLeagueModeStorageKey}:${currentAccountId || "guest"}`;
}
function loadRankedMode() {
try {
return window.localStorage.getItem(rankedModeStorageId()) === "1";
} catch (error) {
return false;
}
}
function saveRankedMode() {
try {
window.localStorage.setItem(rankedModeStorageId(), rankedModeEnabled ? "1" : "0");
} catch (error) {
}
}
function loadProfessionalLeagueMode() {
try {
return Boolean(currentAccount()) && window.localStorage.getItem(professionalLeagueModeStorageId()) === "1";
} catch (error) {
return false;
}
}
function saveProfessionalLeagueMode() {
try {
if (!currentAccount()) {
window.localStorage.removeItem(professionalLeagueModeStorageId());
return;
}
window.localStorage.setItem(professionalLeagueModeStorageId(), professionalLeagueModeEnabled ? "1" : "0");
} catch (error) {
}
}
function dailyStarsStorageId() {
return `${dailyStarsStorageKey}:${currentAccountId || "guest"}`;
}
function dailyTaskStorageId() {
return `${dailyTaskStorageKey}:${currentAccountId || "guest"}`;
}
function todayKey() {
const date = new Date();
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, "0");
const day = String(date.getDate()).padStart(2, "0");
return `${year}-${month}-${day}`;
}
function dateSeed(dateKey = todayKey()) {
return String(dateKey)
.split("")
.reduce((seed, char) => ((seed * 31) + char.charCodeAt(0)) >>> 0, 0);
}
function dailyPuzzleFromCatalog(catalog, salt = 0, dateKey = todayKey()) {
if (!Array.isArray(catalog) || catalog.length === 0) {
return { id: "", fen: "" };
}
const index = (dateSeed(dateKey) + salt) % catalog.length;
return catalog[index];
}
function currentDailyEndgamePuzzle(dateKey = todayKey()) {
return dailyPuzzleFromCatalog(dailyEndgamePuzzles, 0, dateKey);
}
function currentMateInOnePuzzle(dateKey = todayKey()) {
return dailyPuzzleFromCatalog(mateInOnePuzzles, 3, dateKey);
}
function createDailyProgress() {
return {
date: todayKey(),
tasks: Object.fromEntries(dailyTaskCatalog.map((task) => [task.id, { count: 0, done: false }])),
};
}
function normalizeDailyProgress(progress = {}) {
const date = progress.date === todayKey() ? progress.date : todayKey();
const fresh = createDailyProgress();
if (date !== progress.date) {
return fresh;
}
for (const task of dailyTaskCatalog) {
const saved = progress.tasks?.[task.id] ?? {};
fresh.tasks[task.id] = {
count: Math.max(0, Math.min(task.target, Math.floor(Number(saved.count)) || 0)),
done: Boolean(saved.done),
};
}
return fresh;
}
function loadDailyProgress() {
try {
const saved = JSON.parse(window.localStorage.getItem(dailyTaskStorageId()) ?? "null");
return normalizeDailyProgress(saved ?? createDailyProgress());
} catch (error) {
return createDailyProgress();
}
}
function saveDailyProgress() {
try {
window.localStorage.setItem(dailyTaskStorageId(), JSON.stringify(normalizeDailyProgress(dailyProgress)));
} catch (error) {
}
}
function loadDailyStars() {
try {
const saved = Number(window.localStorage.getItem(dailyStarsStorageId()) ?? "0");
return Number.isFinite(saved) ? Math.max(0, Math.floor(saved)) : 0;
} catch (error) {
return 0;
}
}
function saveDailyStars() {
try {
window.localStorage.setItem(dailyStarsStorageId(), String(dailyStars));
} catch (error) {
}
}
function dailyStreakStorageId() {
return `${dailyStreakStorageKey}:${currentAccountId || "guest"}`;
}
function dailyTrainingStorageId() {
return `${dailyTrainingStorageKey}:${currentAccountId || "guest"}`;
}
function createDailyStreak() {
return { count: 0, lastDate: "" };
}
function previousDateKey(dateKey = todayKey()) {
const date = new Date(`${dateKey}T00:00:00.000Z`);
date.setUTCDate(date.getUTCDate() - 1);
return date.toISOString().slice(0, 10);
}
function normalizeDailyStreak(streak = {}) {
const count = Math.max(0, Math.floor(Number(streak.count)) || 0);
const lastDate = /^\d{4}-\d{2}-\d{2}$/.test(streak.lastDate) ? streak.lastDate : "";
return { count, lastDate };
}
function loadDailyStreak() {
try {
const saved = JSON.parse(window.localStorage.getItem(dailyStreakStorageId()) ?? "null");
return normalizeDailyStreak(saved ?? createDailyStreak());
} catch (error) {
return createDailyStreak();
}
}
function saveDailyStreak() {
try {
window.localStorage.setItem(dailyStreakStorageId(), JSON.stringify(normalizeDailyStreak(dailyStreak)));
} catch (error) {
}
}
function createDailyTrainingProgress() {
return {
streak: 0,
lastCompletedDate: "",
days: {},
};
}
function normalizeDailyTrainingDay(day = {}, dateKey = todayKey()) {
const endgamePuzzle = currentDailyEndgamePuzzle(dateKey);
const matePuzzle = currentMateInOnePuzzle(dateKey);
return {
endgame: Boolean(day.endgame),
mate: Boolean(day.mate),
completed: Boolean(day.completed),
puzzles: {
endgame: String(day.puzzles?.endgame || endgamePuzzle.id || ""),
mate: String(day.puzzles?.mate || matePuzzle.id || ""),
},
};
}
function normalizeDailyTraining(progress = {}) {
const fresh = createDailyTrainingProgress();
const days = progress.days && typeof progress.days === "object" && !Array.isArray(progress.days)
? progress.days
: {};
const normalizedDays = {};
const sortedDates = Object.keys(days)
.filter((date) => /^\d{4}-\d{2}-\d{2}$/.test(date))
.sort()
.slice(-21);
for (const date of sortedDates) {
normalizedDays[date] = normalizeDailyTrainingDay(days[date], date);
}
return {
streak: Math.max(0, Math.floor(Number(progress.streak)) || 0),
lastCompletedDate: /^\d{4}-\d{2}-\d{2}$/.test(progress.lastCompletedDate) ? progress.lastCompletedDate : "",
days: normalizedDays,
};
}
function loadDailyTraining() {
try {
const saved = JSON.parse(window.localStorage.getItem(dailyTrainingStorageId()) ?? "null");
return normalizeDailyTraining(saved ?? createDailyTrainingProgress());
} catch (error) {
return createDailyTrainingProgress();
}
}
function saveDailyTraining() {
try {
window.localStorage.setItem(dailyTrainingStorageId(), JSON.stringify(normalizeDailyTraining(dailyTraining)));
} catch (error) {
}
}
function todayDailyTrainingDay() {
dailyTraining = normalizeDailyTraining(dailyTraining);
const today = todayKey();
dailyTraining.days[today] = normalizeDailyTrainingDay(dailyTraining.days[today], today);
return dailyTraining.days[today];
}
function currentDailyTrainingStreakCount() {
dailyTraining = normalizeDailyTraining(dailyTraining);
const today = todayKey();
if (dailyTraining.lastCompletedDate === today || dailyTraining.lastCompletedDate === previousDateKey(today)) {
return dailyTraining.streak;
}
return 0;
}
function advanceDailyTrainingStreakIfReady() {
const today = todayKey();
const day = todayDailyTrainingDay();
if (!day.endgame || !day.mate || day.completed) {
return false;
}
const previous = previousDateKey(today);
day.completed = true;
const previousStreak = Math.max(0, Math.floor(Number(dailyTraining.streak)) || 0);
dailyTraining.streak = dailyTraining.lastCompletedDate === previous ? previousStreak + 1 : 1;
dailyTraining.lastCompletedDate = today;
saveDailyTraining();
if (dailyTraining.streak >= 7) {
unlockAchievement("seven-day-trainer");
setNotice(t("dailyTrainingStreakUnlocked", { count: dailyTraining.streak }));
}
return true;
}
function recordDailyTrainingCompletion(kind) {
const day = todayDailyTrainingDay();
const key = kind === "mate-one" ? "mate" : "endgame";
if (day[key]) {
renderDailyTasks();
return false;
}
day[key] = true;
if (kind === "mate-one") {
updateDailyTask("mate-one-clear", 1);
} else {
updateDailyTask("daily-endgame-clear", 1);
}
const streakAdvanced = advanceDailyTrainingStreakIfReady();
if (streakAdvanced) {
showDailyReward(t("dailyTrainingStreakTitle"), dailyTraining.streak);
setNotice(`${t(kind === "mate-one" ? "dailyTrainingMateComplete" : "dailyTrainingEndgameComplete")} ${t("dailyTrainingRealBoardPrompt")}`);
}
saveDailyTraining();
renderDailyTasks();
return true;
}
function tutorialLessonStorageId() {
return `${tutorialLessonStorageKey}:${currentAccountId || "guest"}`;
}
function loadTutorialLessons() {
try {
const saved = JSON.parse(window.localStorage.getItem(tutorialLessonStorageId()) ?? "[]");
return new Set(Array.isArray(saved) ? saved.filter((index) => Number.isInteger(index) && index >= 0) : []);
} catch (error) {
return new Set();
}
}
function saveTutorialLessons() {
try {
window.localStorage.setItem(tutorialLessonStorageId(), JSON.stringify([...completedTutorialLessons].sort((a, b) => a - b)));
} catch (error) {
}
}
function completeTutorialLesson(index) {
if (completedTutorialLessons.has(index)) {
return false;
}
completedTutorialLessons.add(index);
saveTutorialLessons();
nativeHaptic("success");
return true;
}
function currentDailyStreakCount() {
dailyStreak = normalizeDailyStreak(dailyStreak);
const today = todayKey();
if (dailyStreak.lastDate === today || dailyStreak.lastDate === previousDateKey(today)) {
return dailyStreak.count;
}
return 0;
}
function recordDailyStreakCompletion() {
dailyStreak = normalizeDailyStreak(dailyStreak);
const today = todayKey();
if (dailyStreak.lastDate === today) {
return false;
}
dailyStreak = {
count: dailyStreak.lastDate === previousDateKey(today) ? dailyStreak.count + 1 : 1,
lastDate: today,
};
saveDailyStreak();
return true;
}
function touchProfileActivity() {
profileActivity.updatedAt = new Date().toISOString();
saveProfileActivity();
}
function trackProfileMove(move) {
if (!move?.piece || !(move.piece in pieceValues)) {
return;
}
profileActivity.moves += 1;
profileActivity.pieceUsage[move.piece] = Math.max(0, (profileActivity.pieceUsage[move.piece] || 0) + 1);
touchProfileActivity();
renderProfile();
}
function profileOutcomeForResult(resultColor, { byLan = false } = {}) {
if (resultColor === "d") {
return "draws";
}
if (byLan && ["w", "b"].includes(lanState.color)) {
return resultColor === lanState.color ? "wins" : "losses";
}
if (aiEnabled) {
return resultColor === humanColor ? "wins" : "losses";
}
return "wins";
}
function updateProfileGameResult(outcome, amount) {
if (!["wins", "draws", "losses"].includes(outcome)) {
return;
}
profileActivity.completedGames = Math.max(0, profileActivity.completedGames + amount);
profileActivity[outcome] = Math.max(0, profileActivity[outcome] + amount);
touchProfileActivity();
}
function favoriteProfilePiece() {
const entries = Object.entries(profileActivity.pieceUsage).filter(([type]) => type in pieceValues);
const [type, count] = entries.sort((a, b) => b[1] - a[1])[0] ?? ["", 0];
return count > 0 ? { type, count } : null;
}
function normalizeMistakeBookEntry(entry) {
if (!entry || typeof entry !== "object") {
return null;
}
const outcome = ["win", "loss", "draw"].includes(entry.outcome) ? entry.outcome : "draw";
return {
id: String(entry.id || `mistake-${Date.now()}`),
createdAt: String(entry.createdAt || new Date().toISOString()),
outcome,
mistake: String(entry.mistake || t("reviewNoMistake")),
better: String(entry.better || t("reviewNoMistake")),
reason: String(entry.reason || ""),
practiceIndex: Math.max(0, Math.min(currentTutorialSteps().length - 1, Math.floor(Number(entry.practiceIndex)) || 0)),
};
}
function loadMistakeBookEntries() {
try {
const saved = JSON.parse(window.localStorage.getItem(mistakeBookStorageId()) ?? "[]");
return Array.isArray(saved) ? saved.map(normalizeMistakeBookEntry).filter(Boolean).slice(0, 12) : [];
} catch (error) {
return [];
}
}
function saveMistakeBookEntries(entries) {
try {
window.localStorage.setItem(mistakeBookStorageId(), JSON.stringify(entries.slice(0, 12)));
} catch (error) {
}
}
function reviewItemDetail(review, titleKey) {
const title = t(titleKey);
return review?.items?.find((item) => item.title === title)?.detail || "";
}
function mistakeBookResultName(outcome) {
if (outcome === "win") {
return t("mistakeBookResultWin");
}
if (outcome === "loss") {
return t("mistakeBookResultLoss");
}
return t("mistakeBookResultDraw");
}
function savePostGameMistakeEntry(resultColor, review) {
if (!review || !game.isGameOver()) {
return;
}
const outcome = humanResultOutcome(resultColor);
const mistake = reviewItemDetail(review, "reviewMistake");
const reason = reviewItemDetail(review, "reviewMistakeReason");
const better = reviewItemDetail(review, "reviewBetterMove");
const entry = normalizeMistakeBookEntry({
id: `mistake-${Date.now()}`,
createdAt: new Date().toISOString(),
outcome,
mistake: mistake || t("reviewNoMistake"),
better: better || t("reviewNoMistake"),
reason,
practiceIndex: review.practiceIndex ?? 4,
});
const entries = loadMistakeBookEntries().filter((item) => item.mistake !== entry.mistake || item.outcome !== entry.outcome);
saveMistakeBookEntries([entry, ...entries]);
renderMistakeBookPanel();
}
function renderMistakeBookPanel() {
if (!els.mistakeBookPanel) {
return;
}
const entries = loadMistakeBookEntries();
els.mistakeBookTitle.textContent = t("mistakeBookTitle");
els.mistakeBookSummary.textContent = t("mistakeBookSummary", { count: entries.length });
els.mistakeBookList.innerHTML = "";
if (!entries.length) {
const empty = document.createElement("p");
empty.textContent = t("mistakeBookEmpty");
els.mistakeBookList.append(empty);
} else {
for (const entry of entries.slice(0, 5)) {
const item = document.createElement("article");
item.className = "mistake-book-item";
const title = document.createElement("strong");
title.textContent = t("mistakeBookItem", {
date: formatProfileDate(entry.createdAt),
result: mistakeBookResultName(entry.outcome),
mistake: entry.mistake,
});
const detail = document.createElement("p");
detail.textContent = entry.reason || entry.better;
item.append(title, detail);
els.mistakeBookList.append(item);
}
}
setButtonContent(els.mistakeBookPracticeBtn, "i", t("mistakeBookPractice"));
setButtonContent(els.mistakeBookClearBtn, "×", t("mistakeBookClear"));
}
function toggleMistakeBookPanel() {
const isOpening = els.mistakeBookPanel.hidden;
els.mistakeBookPanel.hidden = !isOpening;
els.realBoardPanel.hidden = true;
renderMistakeBookPanel();
if (isOpening) {
setNotice(t("mistakeBookOpened"));
}
}
function practiceLatestMistake() {
const latest = loadMistakeBookEntries()[0];
openTutorialAt(latest?.practiceIndex ?? postGameReview?.practiceIndex ?? 4);
setNotice(t("reviewPracticeNotice"));
}
function clearMistakeBook() {
saveMistakeBookEntries([]);
renderMistakeBookPanel();
setNotice(t("mistakeBookCleared"));
}
function renderRealBoardPanel() {
if (!els.realBoardPanel) {
return;
}
els.realBoardTitle.textContent = t("realBoardTitle");
els.realBoardText.textContent = t("realBoardText");
setButtonContent(els.realBoardCopyBtn, "♙", t("realBoardCopy"));
setButtonContent(els.realBoardCloseBtn, "×", t("cancel"));
}
function toggleRealBoardPanel() {
const isOpening = els.realBoardPanel.hidden;
els.realBoardPanel.hidden = !isOpening;
els.mistakeBookPanel.hidden = true;
renderRealBoardPanel();
if (isOpening) {
setNotice(t("realBoardOpened"));
}
}
async function copyRealBoardPosition() {
const payload = `MateQuest Chess real-board practice\n${game.fen()}`;
try {
await navigator.clipboard.writeText(payload);
setNotice(t("realBoardCopied"));
} catch (error) {
setNotice(t("copyBlocked"));
}
}
function loadFeedbackEntries() {
try {
const saved = JSON.parse(window.localStorage.getItem(feedbackStorageKey) ?? "[]");
return Array.isArray(saved) ? saved : [];
} catch (error) {
return [];
}
}
function saveFeedbackEntry(entry) {
const entries = loadFeedbackEntries();
entries.unshift(entry);
window.localStorage.setItem(feedbackStorageKey, JSON.stringify(entries.slice(0, 50)));
return entries.length;
}
function createFeedbackId() {
return `FB-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
}
function feedbackBackupBody() {
const account = currentAccount();
const text = els.feedbackText?.value.trim() || "";
const fen = typeof game?.fen === "function" ? game.fen() : "";
const pgn = typeof game?.pgn === "function" ? game.pgn() : "";
const labels = currentLanguage === "en"
? {
title: "MateQuest Chess feedback",
kind: "Type",
account: "Account",
language: "Language",
page: "Page",
time: "Time",
fen: "FEN",
pgn: "PGN",
message: "Message",
empty: "(empty)",
}
: {
title: "MateQuest Chess 玩家反馈",
kind: "类型",
account: "账号",
language: "语言",
page: "页面",
time: "时间",
fen: "FEN",
pgn: "PGN",
message: "内容",
empty: "（空）",
};
return [
labels.title,
`${labels.kind}: ${feedbackKindName()}`,
`${labels.account}: ${account?.name ?? t("accountGuest")}`,
`${labels.language}: ${currentLanguage}`,
`${labels.page}: ${window.location.href}`,
`${labels.time}: ${new Date().toISOString()}`,
`${labels.fen}: ${fen}`,
`${labels.pgn}: ${pgn || labels.empty}`,
"",
`${labels.message}:`,
text || labels.empty,
].join("\n");
}
function updateFeedbackBackup() {
if (!els.feedbackBackupTitle || !els.mailFeedbackBackupBtn) {
return;
}
els.feedbackBackupTitle.textContent = t("feedbackBackupTitle");
els.feedbackBackupText.textContent = t("feedbackBackupText");
setButtonContent(els.copyFeedbackBackupBtn, "⧉", t("feedbackBackupCopy"));
els.mailFeedbackBackupBtn.textContent = t("feedbackBackupMail");
const subject = encodeURIComponent(t("feedbackBackupSubject"));
const body = encodeURIComponent(feedbackBackupBody());
els.mailFeedbackBackupBtn.href = `mailto:?subject=${subject}&body=${body}`;
}
async function copyFeedbackBackup() {
if (!els.feedbackText.value.trim()) {
els.feedbackMessage.textContent = t("feedbackNeedText");
return;
}
try {
await navigator.clipboard.writeText(feedbackBackupBody());
els.feedbackMessage.textContent = t("feedbackBackupCopied");
setNotice(t("feedbackBackupCopied"));
} catch (error) {
els.feedbackMessage.textContent = t("copyBlocked");
setNotice(t("copyBlocked"));
}
}
function isNetlifyHost() {
return window.location.hostname.endsWith(".netlify.app") || window.location.hostname === "jeffery-chess-game.netlify.app";
}
function isProfileCloudBackupAvailable() {
return window.location.protocol === "https:" && isNetlifyHost();
}
async function submitFeedbackOnline(entry) {
if (!isNetlifyHost()) {
return false;
}
els.feedbackKindInput.value = entry.kind;
els.feedbackIdInput.value = entry.id;
els.feedbackKindLabelInput.value = entry.kindLabel;
els.feedbackAccountInput.value = entry.account;
els.feedbackLanguageInput.value = entry.language;
els.feedbackFenInput.value = entry.fen;
els.feedbackPgnInput.value = entry.pgn;
els.feedbackPageInput.value = window.location.href;
els.feedbackCreatedAtInput.value = entry.createdAt;
const response = await fetch("/", {
method: "POST",
headers: { "Content-Type": "application/x-www-form-urlencoded" },
body: new URLSearchParams(new FormData(els.feedbackForm)).toString(),
});
return response.ok;
}
function loadMatchScore() {
const account = currentAccount();
if (account) {
return normalizeScore(account.matchScore);
}
try {
const saved = JSON.parse(window.localStorage.getItem(scoreStorageKey) ?? "{}");
return normalizeScore(saved);
} catch (error) {
return createEmptyScore();
}
}
function loadRankPoints() {
const account = currentAccount();
if (account) {
return Math.max(0, Math.floor(Number(account.rankPoints)) || 0);
}
try {
const saved = window.localStorage.getItem(rankStorageKey);
if (saved !== null) {
return Math.max(0, Math.floor(Number(saved)) || 0);
}
} catch (error) {
}
return 0;
}
function loadLanguage() {
try {
const saved = window.localStorage.getItem(languageStorageKey);
return saved === "en" ? "en" : "zh";
} catch (error) {
return "zh";
}
}
function saveLanguage() {
try {
window.localStorage.setItem(languageStorageKey, currentLanguage);
} catch (error) {
}
}
function t(key, values = {}) {
const template = i18n[currentLanguage][key] ?? i18n.zh[key] ?? key;
return template.replace(/\{(\w+)\}/g, (_, name) => values[name] ?? "");
}
function pieceName(type) {
return pieceNames[currentLanguage][type] ?? pieceNames.zh[type] ?? type;
}
function sideName(color) {
return sideNames[currentLanguage][color] ?? sideNames.zh[color] ?? color;
}
function sideShortName(color) {
return sideShortNames[currentLanguage][color] ?? sideShortNames.zh[color] ?? color;
}
function boardThemeName(theme) {
return boardThemes[currentLanguage][theme] ?? boardThemes.zh[theme] ?? theme;
}
function aiLevelDetails(level = aiLevel) {
return aiLevelInfo[currentLanguage][level] ?? aiLevelInfo.zh[level];
}
function professionalLeagueAiDisplayName() {
return professionalLeagueAiName[currentLanguage] ?? professionalLeagueAiName.zh;
}
function currentAiDisplayName() {
return professionalLeagueModeEnabled ? professionalLeagueAiDisplayName() : aiLevelDetails(aiLevel).name;
}
function aiPersonaDetails(level = aiLevel) {
return aiPersonas[currentLanguage]?.[level] ?? aiPersonas.zh[level] ?? aiPersonas.zh[3];
}
function dailyTaskDetails(task) {
return task[currentLanguage] ?? task.zh;
}
function nativeHaptic(type = "move") {
try {
window.webkit?.messageHandlers?.haptic?.postMessage(type);
} catch (error) {
}
if (navigator.vibrate && type !== "move") {
const pattern = type === "success" ? [18, 30, 18] : [28];
navigator.vibrate(pattern);
}
}
function hasGeniusYouthBadge() {
return unlockedAchievements.has("genius-youth");
}
function isProfessionalAiUnlocked() {
return hasGeniusYouthBadge();
}
function enforceProfessionalAiAccess() {
if (aiLevel === 6 && !isProfessionalAiUnlocked()) {
aiLevel = 5;
return true;
}
return false;
}
function rankDetails(level) {
return rankTiers[currentLanguage][level - 1] ?? rankTiers.zh[level - 1] ?? rankTiers.zh[0];
}
function feedbackKindName(kind = feedbackKind) {
return i18n[currentLanguage].feedbackKinds?.[kind] ?? i18n.zh.feedbackKinds[kind] ?? kind;
}
function achievementDetails(achievement) {
return achievement[currentLanguage] ?? achievement.zh;
}
function achievementUnlockedCount() {
return unlockedAchievements.size;
}
function bestAchievementBadge() {
const latestUnlocked = [...achievementCatalog].reverse().find((achievement) => unlockedAchievements.has(achievement.id));
return latestUnlocked?.badge ?? "◇";
}
function getRankPoints() {
return rankPoints;
}
function getLegacyResultRankPoints(result) {
return result === "d" ? 1 : 3;
}
function signedPoints(amount) {
return amount > 0 ? `+${amount}` : String(amount);
}
function rankScoreForLevel(level = aiLevel) {
return aiRankScores[level] ?? aiRankScores[3];
}
function isAiRankScoredGame({ byLan = false, byGameCenter = false } = {}) {
return (
rankedModeEnabled &&
rankedGameEligible &&
aiEnabled &&
!byLan &&
!byGameCenter &&
game.history().length > 0 &&
!currentGameUsedTip &&
rankedGameAiLevel === aiLevel &&
rankedGameHumanColor === humanColor
);
}
function humanResultOutcome(resultColor) {
if (resultColor === "d") {
return "draw";
}
return resultColor === humanColor ? "win" : "loss";
}
function getAiRankDelta(resultColor, { byLan = false, byGameCenter = false } = {}) {
if (!isAiRankScoredGame({ byLan, byGameCenter })) {
return 0;
}
const scores = rankScoreForLevel(aiLevel);
return scores[humanResultOutcome(resultColor)] ?? 0;
}
function isProfessionalLeagueScoredGame({ byLan = false, byGameCenter = false } = {}) {
return (
professionalLeagueModeEnabled &&
professionalLeagueGameEligible &&
Boolean(currentAccount()) &&
aiEnabled &&
!byLan &&
!byGameCenter &&
game.history().length > 0
);
}
function updateProfessionalLeagueStats(outcome, delta, amount = 1) {
const account = currentAccount();
if (!account || !["win", "draw", "loss"].includes(outcome)) {
return 0;
}
const stats = ensureAccountLeagueStats(account);
const previousPoints = stats.points;
stats.points = Math.max(0, stats.points + delta);
stats.games = Math.max(0, stats.games + amount);
if (outcome === "win") {
stats.wins = Math.max(0, stats.wins + amount);
} else if (outcome === "draw") {
stats.draws = Math.max(0, stats.draws + amount);
} else {
stats.losses = Math.max(0, stats.losses + amount);
}
stats.updatedAt = new Date().toISOString();
account.updatedAt = stats.updatedAt;
saveAccounts();
return stats.points - previousPoints;
}
function formatShortDate(value) {
try {
return new Intl.DateTimeFormat(currentLanguage === "zh" ? "zh-CN" : "en", {
month: "2-digit",
day: "2-digit",
}).format(new Date(value));
} catch (error) {
return String(value).slice(5, 10);
}
}
function fallbackLeagueSeason() {
const length = 7 * 24 * 60 * 60 * 1000;
const zero = Date.UTC(2026, 0, 1);
const index = Math.max(0, Math.floor((Date.now() - zero) / length));
return {
id: `S${index + 1}`,
startsAt: new Date(zero + index * length).toISOString(),
endsAt: new Date(zero + (index + 1) * length).toISOString(),
};
}
function currentLeagueSeason() {
return onlineLeagueSeason ?? fallbackLeagueSeason();
}
function seasonText(season = currentLeagueSeason()) {
return t("leaderboardSeason", {
id: season.id,
start: formatShortDate(season.startsAt),
end: formatShortDate(season.endsAt),
});
}
function leagueSeasonRewardForRank(rank) {
if (!rank) {
return null;
}
if (rank === 1) {
return { achievementId: "league-champion", badge: "♕", titleKey: "leaderboardRewardChampion" };
}
if (rank <= 3) {
return { achievementId: "league-top-three", badge: "△", titleKey: "leaderboardRewardTopThree" };
}
return { achievementId: "league-participant", badge: "◇", titleKey: "leaderboardRewardParticipant" };
}
function normalizeOnlineLeagueReward(reward) {
if (!reward || typeof reward !== "object") {
return null;
}
if (reward.achievementId === "league-champion" || reward.tier === "champion") {
return { achievementId: "league-champion", badge: "♕", titleKey: "leaderboardRewardChampion" };
}
if (reward.achievementId === "league-top-three" || reward.tier === "top-three") {
return { achievementId: "league-top-three", badge: "△", titleKey: "leaderboardRewardTopThree" };
}
if (reward.achievementId === "league-participant" || reward.tier === "participant") {
return { achievementId: "league-participant", badge: "◇", titleKey: "leaderboardRewardParticipant" };
}
return null;
}
function leagueRewardStorageId(seasonId = currentLeagueSeason().id) {
return `${leagueSeasonRewardStorageKey}:${currentAccountId || getOnlinePlayerId()}:${seasonId}`;
}
function hasClaimedLeagueReward(seasonId, achievementId) {
try {
const saved = JSON.parse(window.localStorage.getItem(leagueRewardStorageId(seasonId)) ?? "[]");
return Array.isArray(saved) && saved.includes(achievementId);
} catch (error) {
return false;
}
}
function markLeagueRewardClaimed(seasonId, achievementId) {
try {
const key = leagueRewardStorageId(seasonId);
const saved = JSON.parse(window.localStorage.getItem(key) ?? "[]");
const next = new Set(Array.isArray(saved) ? saved : []);
next.add(achievementId);
window.localStorage.setItem(key, JSON.stringify([...next]));
} catch (error) {
}
}
function applyLeagueSeasonReward({ notify = false } = {}) {
if (!onlineLeagueMyRank?.rank || !currentAccountId) {
return null;
}
const reward = normalizeOnlineLeagueReward(onlineLeagueReward) ?? leagueSeasonRewardForRank(onlineLeagueMyRank.rank);
if (!reward) {
return null;
}
const seasonId = currentLeagueSeason().id;
if (!hasClaimedLeagueReward(seasonId, reward.achievementId)) {
unlockAchievement(reward.achievementId);
markLeagueRewardClaimed(seasonId, reward.achievementId);
if (notify) {
setNotice(t("leaderboardSeasonReward", { badge: reward.badge, title: t(reward.titleKey) }));
}
}
return reward;
}
function renderLeagueRankAndReward() {
if (els.leaderboardMyRank) {
els.leaderboardMyRank.textContent = onlineLeagueMyRank?.rank
? t("leaderboardMyRank", { rank: onlineLeagueMyRank.rank, points: onlineLeagueMyRank.entry?.points ?? 0 })
: t("leaderboardMyRankMissing");
}
if (els.leaderboardReward) {
const reward = applyLeagueSeasonReward();
els.leaderboardReward.textContent = reward
? t("leaderboardSeasonReward", { badge: reward.badge, title: t(reward.titleKey) })
: t("leaderboardRewardLocked");
}
}
async function fetchOnlineLeagueLeaderboard() {
onlineLeagueStatus = "loading";
renderLeaderboard();
try {
const params = new URLSearchParams({ ts: String(Date.now()), playerId: getOnlinePlayerId() });
const response = await fetch(`/api/league-leaderboard?${params.toString()}`, { cache: "no-store" });
const result = await response.json();
if (!response.ok || !result.ok) {
throw new Error(result.reason || "league-leaderboard-failed");
}
onlineLeagueEntries = Array.isArray(result.entries) ? result.entries : [];
onlineLeagueSeason = result.season ?? null;
onlineLeagueMyRank = result.myRank ?? null;
onlineLeagueReward = result.reward ?? null;
onlineLeagueStatus = "ready";
applyLeagueSeasonReward({ notify: true });
} catch (error) {
onlineLeagueStatus = "offline";
}
renderLeaderboard();
}
async function syncProfessionalLeagueResult(outcome, delta) {
const account = currentAccount();
if (!account || !["win", "draw", "loss"].includes(outcome)) {
return;
}
try {
const response = await fetch("/api/league-leaderboard", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({
playerId: getOnlinePlayerId(),
displayName: cleanPlayerDisplayName(account.name),
outcome,
delta,
}),
});
const result = await response.json();
if (response.ok && result.ok) {
onlineLeagueEntries = Array.isArray(result.entries) ? result.entries : onlineLeagueEntries;
onlineLeagueSeason = result.season ?? onlineLeagueSeason;
onlineLeagueMyRank = result.myRank ?? onlineLeagueMyRank;
onlineLeagueReward = result.reward ?? onlineLeagueReward;
onlineLeagueStatus = "ready";
applyLeagueSeasonReward({ notify: true });
renderLeaderboard();
}
} catch (error) {
onlineLeagueStatus = "offline";
}
}
function recordProfessionalLeagueResult(resultColor, { byLan = false, byGameCenter = false } = {}) {
if (!isProfessionalLeagueScoredGame({ byLan, byGameCenter })) {
return "";
}
const outcome = humanResultOutcome(resultColor);
const delta = professionalLeagueScores[outcome] ?? 0;
recordedLeagueDelta = updateProfessionalLeagueStats(outcome, delta, 1);
recordedLeagueOutcome = outcome;
syncProfessionalLeagueResult(outcome, recordedLeagueDelta);
renderProfessionalLeaguePanel();
return recordedLeagueDelta === 0
? t("professionalLeagueResultNoChange")
: t("professionalLeagueResult", { result: rankedOutcomeName(outcome), points: signedPoints(recordedLeagueDelta) });
}
function unrecordProfessionalLeagueResult() {
if (!recordedLeagueOutcome) {
return;
}
updateProfessionalLeagueStats(recordedLeagueOutcome, -recordedLeagueDelta, -1);
clearRecordedLeagueResult();
renderProfessionalLeaguePanel();
}
function rankRulesText() {
const scores = rankScoreForLevel(aiLevel);
return t("rankRules", {
level: aiLevelDetails(aiLevel).name,
win: signedPoints(scores.win),
draw: signedPoints(scores.draw),
loss: signedPoints(scores.loss),
});
}
function rankedInvalidReasonKey({ byLan = false, byGameCenter = false } = {}) {
if (byLan || isLanConnected()) {
return "rankedInvalidLan";
}
if (byGameCenter || isGameCenterConnected()) {
return "rankedInvalidGameCenter";
}
if (!rankedModeEnabled) {
return "rankedInvalidNotRanked";
}
if (!aiEnabled || !rankedGameEligible) {
return "rankedInvalidNoAi";
}
if (!game.history().length) {
return "rankedInvalidNoMoves";
}
if (currentGameUsedTip) {
return "rankedInvalidHint";
}
if (rankedGameAiLevel !== aiLevel) {
return "rankedInvalidLevel";
}
if (rankedGameHumanColor !== humanColor) {
return "rankedInvalidSide";
}
return "rankedInvalidGeneric";
}
function rankedOutcomeName(outcome) {
if (outcome === "win") {
return t("rankedSettlementWin");
}
if (outcome === "loss") {
return t("rankedSettlementLoss");
}
return t("rankedSettlementDraw");
}
function buildRankedSettlement(
resultColor,
{ byLan = false, byGameCenter = false, rankedScored = false, requestedRankDelta = 0, appliedRankDelta = 0 } = {},
) {
const outcome = humanResultOutcome(resultColor);
const points = rankedScored ? appliedRankDelta : 0;
const reasonKey =
rankedScored && shouldUseRankServerVerification()
? "rankServerChecking"
: rankedScored && requestedRankDelta < 0 && appliedRankDelta === 0
? "rankScoreFloorNotice"
: rankedScored
? "rankedSettlementReasonLocal"
: rankedInvalidReasonKey({ byLan, byGameCenter });
return {
valid: rankedScored,
outcome,
points,
reasonKey,
verification: rankedScored ? (shouldUseRankServerVerification() ? "checking" : "local") : "none",
};
}
function shouldUseRankServerVerification() {
return window.location.protocol === "https:" && isNetlifyHost();
}
function rankVerificationPayload(resultColor, { byLan = false, byGameCenter = false } = {}) {
return {
appVersion,
playerId: getOnlinePlayerId(),
displayName: onlineDisplayName(),
pgn: game.pgn(),
finalFen: game.fen(),
moveCount: game.history().length,
resultColor,
humanColor,
aiLevel,
aiEnabled,
rankedModeEnabled,
rankedGameEligible,
rankedGameAiLevel,
rankedGameHumanColor,
usedTip: currentGameUsedTip,
byLan,
byGameCenter,
professionalUnlocked: isProfessionalAiUnlocked(),
};
}
async function verifyRankedSettlement(payload, pgnKey) {
if (!lastRankedSettlement || !shouldUseRankServerVerification()) {
return;
}
try {
const response = await fetch("/api/verify-ranked-result", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(payload),
});
const result = await response.json().catch(() => ({}));
if (!recordedResult || game.pgn() !== pgnKey || !lastRankedSettlement) {
return;
}
if (!response.ok || !result.ok || !result.profile) {
if (recordedRankDelta) {
updateRankPoints(-recordedRankDelta);
}
recordedRankDelta = 0;
lastRankedSettlement = {
...lastRankedSettlement,
valid: false,
points: 0,
reasonKey: "rankServerRejected",
verification: "rejected",
};
setNotice(t("rankServerRejected"));
} else {
applyOfficialRankProfile(result.profile);
recordedRankDelta = Math.trunc(Number(result.delta)) || 0;
lastRankedSettlement = {
...lastRankedSettlement,
valid: true,
points: recordedRankDelta,
reasonKey: "rankServerVerified",
verification: "verified",
serverRequestId: result.requestId,
};
setNotice(t("rankServerVerified"));
}
} catch (error) {
if (!recordedResult || game.pgn() !== pgnKey || !lastRankedSettlement) {
return;
}
lastRankedSettlement = {
...lastRankedSettlement,
reasonKey: "rankServerUnavailable",
verification: "unavailable",
};
setNotice(t("rankServerUnavailable"));
}
renderRank();
renderPostGameReview();
saveCurrentGame();
}
function markRankedGameEligible() {
rankedGameEligible = rankedModeEnabled && aiEnabled && !isLanConnected();
rankedGameAiLevel = aiLevel;
rankedGameHumanColor = humanColor;
}
function clearRankedGameEligibility() {
rankedGameEligible = false;
}
function markProfessionalLeagueGameEligible() {
professionalLeagueGameEligible = Boolean(currentAccount()) && professionalLeagueModeEnabled && aiEnabled && !isLanConnected();
}
function clearProfessionalLeagueGameEligibility() {
professionalLeagueGameEligible = false;
}
function clearRecordedLeagueResult() {
recordedLeagueDelta = 0;
recordedLeagueOutcome = null;
}
function isLanConnected() {
return lanState.status === "connected" && lanState.socket?.readyState === WebSocket.OPEN;
}
function canPlayLanMove() {
return !isLanConnected() || (lanState.color !== "s" && game.turn() === lanState.color);
}
function rankLevelForPoints(points) {
const normalized = Math.max(0, Math.floor(Number(points)) || 0);
return rankThresholds.reduce((best, threshold, currentIndex) => (normalized >= threshold ? currentIndex + 1 : best), 1);
}
function getRankState() {
const points = getRankPoints();
const index = rankThresholds.reduce((best, threshold, currentIndex) => (points >= threshold ? currentIndex : best), 0);
const level = index + 1;
const currentThreshold = rankThresholds[index];
const nextThreshold = rankThresholds[index + 1] ?? null;
const nextLevel = nextThreshold ? level + 1 : null;
const progress = nextThreshold
? Math.round(((points - currentThreshold) / (nextThreshold - currentThreshold)) * 100)
: 100;
return {
level,
points,
rank: rankDetails(level),
nextRank: nextLevel ? rankDetails(nextLevel) : null,
pointsToNext: nextThreshold ? Math.max(0, nextThreshold - points) : 0,
progress,
};
}
function currentTutorialSteps() {
return tutorialSteps[currentLanguage] ?? tutorialSteps.zh;
}
function loadBoardTheme() {
try {
const saved = window.localStorage.getItem(boardThemeStorageKey);
return Object.prototype.hasOwnProperty.call(boardThemes.zh, saved) ? saved : "forest";
} catch (error) {
return "forest";
}
}
function saveBoardTheme() {
try {
window.localStorage.setItem(boardThemeStorageKey, boardTheme);
} catch (error) {
}
}
function sanitizeSavedMove(move) {
return move && typeof move.from === "string" && typeof move.to === "string" ? { from: move.from, to: move.to } : null;
}
function latestMoveMarker() {
const previous = game.history({ verbose: true }).at(-1);
return previous ? { from: previous.from, to: previous.to } : null;
}
function saveCurrentGame() {
try {
window.localStorage.setItem(
savedGameStorageKey,
JSON.stringify({
version: 5,
fen: game.fen(),
pgn: game.pgn(),
lastMove,
orientation,
aiEnabled,
humanColor,
aiLevel,
rankedModeEnabled,
professionalLeagueModeEnabled,
professionalLeagueGameEligible,
rankedGameEligible,
rankedGameAiLevel,
rankedGameHumanColor,
currentGameUsedTip,
recordedResult,
recordedProfileOutcome,
recordedRankDelta,
recordedLeagueDelta,
recordedLeagueOutcome,
lastRankedSettlement,
activeTrainingMode,
activeTrainingPuzzleId,
savedAt: new Date().toISOString(),
}),
);
} catch (error) {
}
}
function restoreSavedGame() {
try {
const saved = JSON.parse(window.localStorage.getItem(savedGameStorageKey) ?? "null");
if (!saved || typeof saved !== "object") {
return false;
}
let loaded = false;
if (typeof saved.pgn === "string" && saved.pgn.trim()) {
try {
game.loadPgn(saved.pgn, { strict: false });
loaded = true;
} catch (error) {
loaded = false;
}
}
if (!loaded && typeof saved.fen === "string" && saved.fen.trim()) {
game.load(saved.fen);
loaded = true;
}
if (!loaded) {
return false;
}
orientation = saved.orientation === "b" ? "b" : "w";
humanColor = saved.humanColor === "b" ? "b" : "w";
aiEnabled = Boolean(saved.aiEnabled);
aiLevel = Math.min(6, Math.max(1, Math.floor(Number(saved.aiLevel)) || 3));
enforceProfessionalAiAccess();
rankedModeEnabled = Boolean(saved.rankedModeEnabled ?? loadRankedMode());
professionalLeagueModeEnabled = Boolean(saved.professionalLeagueModeEnabled ?? loadProfessionalLeagueMode()) && Boolean(currentAccount());
professionalLeagueGameEligible = Boolean(saved.professionalLeagueGameEligible);
rankedGameEligible = Boolean(saved.rankedGameEligible);
rankedGameAiLevel = Math.min(6, Math.max(1, Math.floor(Number(saved.rankedGameAiLevel)) || aiLevel));
rankedGameHumanColor = saved.rankedGameHumanColor === "b" ? "b" : "w";
currentGameUsedTip = Boolean(saved.currentGameUsedTip);
recordedResult = ["w", "b", "d"].includes(saved.recordedResult) ? saved.recordedResult : null;
recordedProfileOutcome = ["wins", "draws", "losses"].includes(saved.recordedProfileOutcome)
? saved.recordedProfileOutcome
: null;
const savedRankDelta = Number(saved.recordedRankDelta);
recordedRankDelta = Number.isFinite(savedRankDelta)
? Math.trunc(savedRankDelta)
: saved.version === 1 && recordedResult
? getLegacyResultRankPoints(recordedResult)
: 0;
const savedLeagueDelta = Number(saved.recordedLeagueDelta);
recordedLeagueDelta = Number.isFinite(savedLeagueDelta) ? Math.trunc(savedLeagueDelta) : 0;
recordedLeagueOutcome = ["win", "draw", "loss"].includes(saved.recordedLeagueOutcome)
? saved.recordedLeagueOutcome
: null;
lastRankedSettlement =
saved.lastRankedSettlement && typeof saved.lastRankedSettlement === "object" ? saved.lastRankedSettlement : null;
activeTrainingMode = ["daily-endgame", "mate-one"].includes(saved.activeTrainingMode) ? saved.activeTrainingMode : "";
activeTrainingPuzzleId = typeof saved.activeTrainingPuzzleId === "string" ? saved.activeTrainingPuzzleId : "";
postGameReview = recordedResult && game.isGameOver() ? buildPostGameReview(recordedResult) : null;
lastMove = sanitizeSavedMove(saved.lastMove) ?? latestMoveMarker();
clearSelection();
closePromotion();
restoredSavedGameAvailable = game.history().length > 0 && !game.isGameOver();
continuePromptDismissed = loadContinuePromptDismissed();
return true;
} catch (error) {
return false;
}
}
function loadContinuePromptDismissed() {
try {
return window.localStorage.getItem(continuePromptStorageKey) === game.pgn();
} catch (error) {
return false;
}
}
function saveContinuePromptDismissed() {
try {
window.localStorage.setItem(continuePromptStorageKey, game.pgn());
} catch (error) {
}
}
function dismissContinuePrompt() {
continuePromptDismissed = true;
saveContinuePromptDismissed();
renderContinueCard();
els.board.focus?.();
setNotice(t("continueGameNotice"));
}
function trackedProfileStorageKeys() {
return [
scoreStorageKey,
rankStorageKey,
accountStorageKey,
currentAccountStorageKey,
feedbackStorageKey,
achievementStorageId(),
aiChallengeStorageId(),
onlineRankStorageId(),
officialRankProfileStorageId(),
languageStorageKey,
boardThemeStorageKey,
savedGameStorageKey,
profileActivityStorageId(),
rankedModeStorageId(),
professionalLeagueModeStorageId(),
dailyStarsStorageId(),
dailyTaskStorageId(),
dailyStreakStorageId(),
dailyTrainingStorageId(),
tutorialLessonStorageId(),
onlineRankMigrationStorageId(),
];
}
function createProfileBackupSnapshot(reason = "manual") {
const storage = {};
for (const key of trackedProfileStorageKeys()) {
try {
const value = window.localStorage.getItem(key);
if (value !== null) {
storage[key] = value;
}
} catch (error) {
}
}
return {
version: appVersion,
reason,
accountId: currentAccountId || "guest",
createdAt: new Date().toISOString(),
rankPoints: Math.max(0, Math.floor(Number(rankPoints)) || 0),
achievements: unlockedAchievements.size,
dailyStars: Math.max(0, Math.floor(Number(dailyStars)) || 0),
dailyTrainingStreak: currentDailyTrainingStreakCount(),
storage,
};
}
function saveProfileBackup(reason = "manual") {
try {
const snapshot = createProfileBackupSnapshot(reason);
window.localStorage.setItem(profileBackupStorageKey, JSON.stringify(snapshot));
return snapshot;
} catch (error) {
return null;
}
}
function loadProfileBackup() {
try {
const backup = JSON.parse(window.localStorage.getItem(profileBackupStorageKey) ?? "null");
return backup && typeof backup === "object" && backup.storage && typeof backup.storage === "object" ? backup : null;
} catch (error) {
return null;
}
}
function hasRestorableProfileBackup(backup = loadProfileBackup()) {
if (!backup) {
return false;
}
const backupRank = Math.max(0, Math.floor(Number(backup.rankPoints)) || 0);
const backupAchievements = Math.max(0, Math.floor(Number(backup.achievements)) || 0);
const backupDailyStars = Math.max(0, Math.floor(Number(backup.dailyStars)) || 0);
return backupRank > rankPoints || backupAchievements > unlockedAchievements.size || backupDailyStars > dailyStars;
}
function restoreBackupValue(backup, key) {
if (!backup?.storage || !Object.prototype.hasOwnProperty.call(backup.storage, key)) {
return false;
}
window.localStorage.setItem(key, String(backup.storage[key]));
return true;
}
function restoreProfileBackupPart(part = "all") {
const backup = loadProfileBackup();
if (!backup) {
setNotice(t("releaseBackupNone"));
return false;
}
try {
if (part === "rank") {
const restored = restoreBackupValue(backup, rankStorageKey);
const accountRestored = restoreBackupValue(backup, accountStorageKey);
if (!restored && !accountRestored) {
setNotice(t("releaseBackupNone"));
return false;
}
accounts = loadAccounts();
rankPoints = loadRankPoints();
officialRankStatus = "local";
renderRank();
renderProfile();
renderReleaseInfo();
setNotice(t("releaseBackupRankRestored", { points: rankPoints }));
return true;
}
if (part === "achievements") {
if (!restoreBackupValue(backup, achievementStorageId())) {
setNotice(t("releaseBackupNone"));
return false;
}
unlockedAchievements = loadAchievements();
renderAchievements();
renderProfile();
renderReleaseInfo();
setNotice(t("releaseBackupAchievementsRestored", { count: unlockedAchievements.size }));
return true;
}
if (part === "game") {
if (!restoreBackupValue(backup, savedGameStorageKey)) {
setNotice(t("releaseBackupNone"));
return false;
}
setNotice(t("releaseBackupGameRestored"));
window.setTimeout(() => window.location.reload(), 350);
return true;
}
for (const [key, value] of Object.entries(backup.storage)) {
window.localStorage.setItem(key, String(value));
}
setNotice(t("releaseBackupRestored"));
window.setTimeout(() => window.location.reload(), 350);
return true;
} catch (error) {
setNotice(t("copyBlocked"));
return false;
}
}
function restoreProfileBackup() {
return restoreProfileBackupPart("all");
}
function applyBoardTheme(theme, { notify = false } = {}) {
boardTheme = Object.prototype.hasOwnProperty.call(boardThemes.zh, theme) ? theme : "forest";
document.body.dataset.boardTheme = boardTheme;
saveBoardTheme();
for (const button of els.boardThemeButtons) {
const isActive = button.dataset.boardTheme === boardTheme;
button.classList.toggle("is-active", isActive);
button.setAttribute("aria-pressed", String(isActive));
button.querySelector(".theme-label").textContent = boardThemeName(button.dataset.boardTheme);
}
if (notify) {
setNotice(t("boardThemeChanged", { theme: boardThemeName(boardTheme) }));
}
}
function setButtonContent(button, icon, label, { iconAfter = false } = {}) {
button.innerHTML = iconAfter
? `${label}<span class="button-icon">${icon}</span>`
: `<span class="button-icon">${icon}</span>${label}`;
}
function formatProfileDate(value) {
const date = new Date(value);
if (Number.isNaN(date.valueOf())) {
return "";
}
return date.toLocaleDateString(currentLanguage === "en" ? "en-US" : "zh-CN", {
year: "numeric",
month: "short",
day: "numeric",
});
}
function profileBadge(rankState = getRankState()) {
const badge = bestAchievementBadge();
return badge === "◇" ? rankState.rank.medal : badge;
}
function getProfileMaterialValue() {
const capturedBy = getCapturedPieces();
const whiteMaterial = capturedBy.w.reduce((sum, piece) => sum + pieceValues[piece.type], 0);
const blackMaterial = capturedBy.b.reduce((sum, piece) => sum + pieceValues[piece.type], 0);
const materialDiff = whiteMaterial - blackMaterial;
if (materialDiff > 0) {
return t("profileMaterialLead", { side: t("white"), amount: materialDiff });
}
if (materialDiff < 0) {
return t("profileMaterialLead", { side: t("black"), amount: Math.abs(materialDiff) });
}
return t("profileMaterialEven");
}
function renderProfile() {
const account = currentAccount();
const isLoggedIn = Boolean(account);
const rankState = getRankState();
const unlocked = achievementUnlockedCount();
const total = achievementCatalog.length;
const badge = profileBadge(rankState);
const accountName = isLoggedIn ? account.name : t("accountGuest");
const createdDate = isLoggedIn ? formatProfileDate(account.createdAt) : "";
els.profileBtnText.textContent = t("playerProfileButton");
els.profileBtn.setAttribute("aria-label", t("playerProfileButtonAria"));
els.profileButtonBadge.textContent = badge;
els.profileLabel.textContent = t("playerProfileLabel");
els.profileTitle.textContent = isLoggedIn
? t("playerProfileTitle", { name: account.name })
: t("playerProfileGuestTitle");
els.closeProfileBtn.setAttribute("aria-label", t("playerProfileCloseAria"));
els.profileAvatar.textContent = badge;
els.profileName.textContent = accountName;
els.profileStatus.textContent = isLoggedIn ? t("playerProfileLoggedStatus") : t("playerProfileGuestStatus");
els.profileMeta.textContent = createdDate ? t("playerProfileCreated", { date: createdDate }) : t("playerProfileLocalMeta");
els.profileRankLabel.textContent = t("profileRankStat");
els.profileRankValue.textContent = officialRankProfile
? t("officialRankSynced", { points: officialRankProfile.points, rate: officialRankProfile.winRate })
: t("profileRankValue", { rank: rankState.rank.name, points: rankState.points });
els.profileRankProgress.style.width = `${rankState.progress}%`;
els.profileAchievementLabel.textContent = t("profileAchievementStat");
els.profileAchievementValue.textContent = t("profileAchievementValue", { unlocked, total, badge });
els.profileScoreLabel.textContent = t("profileScoreStat");
els.profileScoreValue.textContent = t("profileScoreValue", {
white: matchScore.w,
draw: matchScore.d,
black: matchScore.b,
});
els.profileMaterialLabel.textContent = t("profileMaterialStat");
els.profileMaterialValue.textContent = getProfileMaterialValue();
const games = profileActivity.completedGames;
const winRate = games > 0 ? Math.round((profileActivity.wins / games) * 100) : 0;
const favorite = favoriteProfilePiece();
els.profileGamesLabel.textContent = t("profileGamesStat");
els.profileGamesValue.textContent = t("profileGamesValue", { games });
els.profileWinRateLabel.textContent = t("profileWinRateStat");
els.profileWinRateValue.textContent = t("profileWinRateValue", { rate: winRate });
els.profileFavoritePieceLabel.textContent = t("profileFavoritePieceStat");
els.profileFavoritePieceValue.textContent = favorite
? t("profileFavoritePieceValue", { piece: pieceName(favorite.type), count: favorite.count })
: t("profileEmptyStat");
els.profileLastSavedLabel.textContent = t("profileLastSavedStat");
els.profileLastSavedValue.textContent = profileActivity.updatedAt
? formatProfileDate(profileActivity.updatedAt)
: t("profileEmptyStat");
els.profileAuthBtn.hidden = isLoggedIn;
els.profileLogoutBtn.hidden = !isLoggedIn;
els.profileDeleteAccountBtn.hidden = !isLoggedIn;
setButtonContent(els.profileAuthBtn, "ID", t("loginRegister"));
setButtonContent(els.profileLogoutBtn, "×", t("logout"));
setButtonContent(els.profileDeleteAccountBtn, "!", t("deleteAccount"));
setButtonContent(els.profileAchievementBtn, badge, t("profileOpenAchievements"));
setButtonContent(els.profileRankBtn, rankState.rank.medal, t("profileOpenRank"));
setButtonContent(els.profileLeaderboardBtn, "♕", t("leaderboardButton"));
setButtonContent(els.profileExportBtn, "⇩", t("profileExport"));
setButtonContent(els.profileImportBtn, "⇧", t("profileImport"));
setButtonContent(els.profileMistakeBookBtn, "!", t("profileMistakeBook"));
setButtonContent(els.profileRealBoardBtn, "♙", t("profileRealBoard"));
const cloudBackupAvailable = isProfileCloudBackupAvailable();
setButtonContent(els.profileCloudBackupBtn, "☁", t("profileCloudBackup"));
setButtonContent(els.profileCloudRestoreBtn, "☁", t("profileCloudRestore"));
els.profileCloudBackupBtn.hidden = !cloudBackupAvailable;
els.profileCloudRestoreBtn.hidden = !cloudBackupAvailable;
els.profileCloudBackupBtn.disabled = !cloudBackupAvailable || !isLoggedIn;
els.profileCloudRestoreBtn.disabled = !cloudBackupAvailable || !isLoggedIn;
if (els.profileCloudStatus) {
els.profileCloudStatus.textContent = cloudBackupAvailable
? isLoggedIn ? t("profileCloudReady") : t("profileCloudIdle")
: t("profileCloudHiddenIos");
}
renderProfileImportPreview();
renderMistakeBookPanel();
renderRealBoardPanel();
renderLeaderboard();
renderDailyTasks();
}
function profileExportFileName() {
const account = currentAccount();
const cleanName = (account?.name || "guest")
.replace(/[^a-z0-9\u4e00-\u9fff_-]+/gi, "-")
.replace(/^-+|-+$/g, "")
.slice(0, 32) || "guest";
return `matequest-chess-profile-${cleanName}-v${appVersion}.json`;
}
function collectProfileExportData() {
const data = {};
for (let index = 0; index < window.localStorage.length; index += 1) {
const key = window.localStorage.key(index);
if (key?.startsWith("local-chess-")) {
data[key] = window.localStorage.getItem(key);
}
}
return {
type: "matequest-chess-profile",
version: 1,
appVersion,
exportedAt: new Date().toISOString(),
data,
};
}
function safeProfileExportStorageKeys() {
return [
languageStorageKey,
boardThemeStorageKey,
volumeSettingsStorageKey,
savedGameStorageKey,
achievementStorageId(),
aiChallengeStorageId(),
profileActivityStorageId(),
rankedModeStorageId(),
professionalLeagueModeStorageId(),
dailyStarsStorageId(),
dailyTaskStorageId(),
dailyStreakStorageId(),
dailyTrainingStorageId(),
tutorialLessonStorageId(),
safeAccountProfileStorageId(),
mistakeBookStorageId(),
];
}
function copyStoredValue(data, key) {
try {
const value = window.localStorage.getItem(key);
if (value !== null) {
data[key] = value;
}
} catch (error) {
}
}
function collectSafeProfileExportData() {
const data = {
[scoreStorageKey]: JSON.stringify(normalizeScore(matchScore)),
[rankStorageKey]: String(Math.max(0, Math.floor(Number(rankPoints)) || 0)),
[safeAccountProfileStorageId()]: JSON.stringify(createSafeAccountSnapshot()),
};
for (const key of safeProfileExportStorageKeys()) {
copyStoredValue(data, key);
}
return {
type: "matequest-chess-profile",
version: 2,
exportKind: "safe-player-profile",
appVersion,
exportedAt: new Date().toISOString(),
summary: {
rankPoints: Math.max(0, Math.floor(Number(rankPoints)) || 0),
achievements: unlockedAchievements.size,
leaguePoints: Math.max(0, Math.floor(Number(currentLeagueStats().points)) || 0),
dailyStars: Math.max(0, Math.floor(Number(dailyStars)) || 0),
dailyTrainingStreak: currentDailyTrainingStreakCount(),
completedGames: Math.max(0, Math.floor(Number(profileActivity.completedGames)) || 0),
wins: Math.max(0, Math.floor(Number(profileActivity.wins)) || 0),
hasSavedGame: Boolean(data[savedGameStorageKey]),
cloudBackupReady: true,
},
data,
};
}
function exportPlayerProfile(options = {}) {
const safe = options?.safe !== false;
const payload = safe ? collectSafeProfileExportData() : collectProfileExportData();
const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
const url = URL.createObjectURL(blob);
const link = document.createElement("a");
link.href = url;
link.download = profileExportFileName();
document.body.append(link);
link.click();
link.remove();
URL.revokeObjectURL(url);
setNotice(safe ? t("releaseProfileBackupDone") : t("profileExportDone"));
}
function exportSafeProfileFromRelease() {
exportPlayerProfile({ safe: true });
try {
window.localStorage.setItem(profileExportReminderStorageKey, appVersion);
} catch (error) {
}
renderReleaseProfileBackup();
}
function importSafeProfileFromRelease() {
setNotice(t("releaseProfileImportPrompt"));
els.profileImportInput.click();
}
function importPlayerProfilePayload(payload) {
if (
!payload ||
!profilePayloadTypes.has(payload.type) ||
!payload.data ||
typeof payload.data !== "object"
) {
throw new Error("bad-profile-payload");
}
for (const [key, value] of Object.entries(payload.data)) {
if (key.startsWith("local-chess-") && typeof value === "string") {
window.localStorage.setItem(key, value);
}
}
for (const [key, value] of Object.entries(payload.data)) {
if (!key.startsWith(safeAccountProfileStorageKey) || typeof value !== "string") {
continue;
}
try {
applySafeAccountSnapshot(JSON.parse(value));
} catch (error) {
}
}
}
function maxStoredAchievementCount(data) {
let count = 0;
for (const [key, value] of Object.entries(data)) {
if (!key.startsWith(achievementStorageKey)) {
continue;
}
try {
const saved = JSON.parse(value);
if (Array.isArray(saved)) {
count = Math.max(count, saved.length);
}
} catch (error) {
}
}
return count;
}
function profileImportSummary(payload) {
if (
!payload ||
!profilePayloadTypes.has(payload.type) ||
!payload.data ||
typeof payload.data !== "object"
) {
throw new Error("bad-profile-payload");
}
if (payload.summary && typeof payload.summary === "object") {
return {
rank: Math.max(0, Math.floor(Number(payload.summary.rankPoints)) || 0),
achievements: Math.max(0, Math.floor(Number(payload.summary.achievements)) || 0),
league: Math.max(0, Math.floor(Number(payload.summary.leaguePoints)) || 0),
training: Math.max(0, Math.floor(Number(payload.summary.dailyTrainingStreak)) || 0),
accounts: 0,
game: payload.summary.hasSavedGame ? t("profileImportHasGame") : t("profileImportNoGame"),
};
}
const data = payload.data;
const rank = Math.max(0, Math.floor(Number(data[rankStorageKey])) || 0);
const achievements = maxStoredAchievementCount(data);
let accountsCount = 0;
let league = 0;
let training = 0;
try {
const savedAccounts = JSON.parse(data[accountStorageKey] || "{}");
if (savedAccounts && typeof savedAccounts === "object" && !Array.isArray(savedAccounts)) {
const accountList = Object.values(savedAccounts);
accountsCount = accountList.length;
league = accountList.reduce((best, account) => {
const points = Math.floor(Number(account?.professionalLeague?.points)) || 0;
return Math.max(best, points);
}, 0);
}
} catch (error) {
accountsCount = 0;
league = 0;
}
try {
for (const [key, value] of Object.entries(data)) {
if (key.startsWith(dailyTrainingStorageKey)) {
const restored = normalizeDailyTraining(JSON.parse(value));
training = Math.max(training, restored.streak);
}
}
} catch (error) {
training = 0;
}
const hasGame = Boolean(data[savedGameStorageKey]);
return { rank, achievements, league, training, accounts: accountsCount, game: hasGame ? t("profileImportHasGame") : t("profileImportNoGame") };
}
function renderProfileImportPreview() {
if (!els.profileImportPreview) {
return;
}
const visible = Boolean(pendingProfileImportPayload && pendingProfileImportSummary);
els.profileImportPreview.hidden = !visible;
if (!visible) {
return;
}
els.profileImportPreviewTitle.textContent = t("profileImportPreviewTitle");
els.profileImportPreviewText.textContent = t("profileImportPreviewText", pendingProfileImportSummary);
setButtonContent(els.profileImportConfirmBtn, "✓", t("profileImportConfirm"));
setButtonContent(els.profileImportCancelBtn, "×", t("profileImportCancel"));
}
function clearProfileImportPreview() {
pendingProfileImportPayload = null;
pendingProfileImportSummary = null;
renderProfileImportPreview();
}
function confirmProfileImport() {
if (!pendingProfileImportPayload) {
return;
}
try {
importPlayerProfilePayload(pendingProfileImportPayload);
clearProfileImportPreview();
setNotice(t("profileImportDone"));
window.setTimeout(() => window.location.reload(), 700);
} catch (error) {
clearProfileImportPreview();
setNotice(t("profileImportBad"));
}
}
function setProfileCloudStatus(key, values = {}) {
const message = t(key, values);
if (els.profileCloudStatus) {
els.profileCloudStatus.textContent = message;
}
setNotice(message);
}
function requireCloudBackupAccount() {
const account = currentAccount();
if (!account) {
setProfileCloudStatus("profileCloudNeedAccount");
return null;
}
return account;
}
async function syncProfileCloudBackup() {
if (!isProfileCloudBackupAvailable()) {
setProfileCloudStatus("profileCloudHiddenIos");
return;
}
const account = requireCloudBackupAccount();
if (!account) {
return;
}
setProfileCloudStatus("profileCloudSaving");
try {
const response = await fetch("/api/profile-backup", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({
playerId: getOnlinePlayerId(),
displayName: cleanPlayerDisplayName(account.name),
profile: collectSafeProfileExportData(),
}),
});
const result = await response.json();
if (!response.ok || !result.ok) {
throw new Error(result.reason || "profile-cloud-save-failed");
}
setProfileCloudStatus("profileCloudSaved");
} catch (error) {
setProfileCloudStatus("profileCloudUnavailable");
}
}
async function restoreProfileCloudBackup() {
if (!isProfileCloudBackupAvailable()) {
setProfileCloudStatus("profileCloudHiddenIos");
return;
}
const account = requireCloudBackupAccount();
if (!account) {
return;
}
setProfileCloudStatus("profileCloudLoading");
try {
const params = new URLSearchParams({
playerId: getOnlinePlayerId(),
displayName: cleanPlayerDisplayName(account.name),
ts: String(Date.now()),
});
const response = await fetch(`/api/profile-backup?${params.toString()}`, { cache: "no-store" });
const result = await response.json();
if (response.status === 404 || result.reason === "missing") {
setProfileCloudStatus("profileCloudEmpty");
return;
}
if (!response.ok || !result.ok || !result.profile) {
throw new Error(result.reason || "profile-cloud-load-failed");
}
pendingProfileImportSummary = profileImportSummary(result.profile);
pendingProfileImportPayload = result.profile;
renderProfileImportPreview();
setProfileCloudStatus("profileCloudPreview");
} catch (error) {
setProfileCloudStatus("profileCloudUnavailable");
}
}
function handleProfileImportFile(event) {
const file = event.target.files?.[0];
event.target.value = "";
if (!file) {
return;
}
const reader = new FileReader();
reader.addEventListener("load", () => {
try {
const payload = JSON.parse(String(reader.result || ""));
pendingProfileImportSummary = profileImportSummary(payload);
pendingProfileImportPayload = payload;
renderProfileImportPreview();
} catch (error) {
clearProfileImportPreview();
setNotice(t("profileImportBad"));
}
});
reader.addEventListener("error", () => setNotice(t("profileImportBad")));
reader.readAsText(file);
}
function renderOnboarding() {
if (!els.onboardingDialog) {
return;
}
els.onboardingLabel.textContent = t("onboardingLabel");
els.onboardingTitle.textContent = t("onboardingTitle");
els.onboardingText.textContent = t("onboardingText");
els.onboardingList.innerHTML = "";
for (const key of ["onboardingFeatureAi", "onboardingFeatureTraining", "onboardingFeatureOffline"]) {
const item = document.createElement("span");
item.textContent = t(key);
els.onboardingList.append(item);
}
els.onboardingSkipBtn.textContent = t("onboardingSkip");
els.onboardingTutorialBtn.textContent = t("onboardingTutorial");
}
function hasSeenOnboarding() {
try {
return window.localStorage.getItem(onboardingStorageKey) === "1";
} catch (error) {
return true;
}
}
function markOnboardingSeen() {
try {
window.localStorage.setItem(onboardingStorageKey, "1");
} catch (error) {
}
}
function closeOnboarding() {
if (!els.onboardingDialog) {
return;
}
markOnboardingSeen();
els.onboardingDialog.hidden = true;
}
function openOnboardingIfNeeded() {
if (!els.onboardingDialog || hasSeenOnboarding() || requestedLanRoom) {
return;
}
renderOnboarding();
window.setTimeout(() => {
els.onboardingDialog.hidden = false;
els.onboardingTutorialBtn.focus();
}, 350);
}
function startOnboardingTutorial() {
closeOnboarding();
openTutorial();
}
function renderDailyTasks() {
if (!els.dailyList) {
return;
}
dailyProgress = normalizeDailyProgress(dailyProgress);
els.dailyLabel.textContent = t("dailyLabel");
els.dailyTitle.textContent = t("dailyTitle");
els.dailyStars.textContent = t("dailyStars", { count: dailyStars });
if (els.dailyStreak) {
const streakCount = currentDailyStreakCount();
els.dailyStreak.textContent = streakCount > 0 ? t("dailyStreak", { count: streakCount }) : t("dailyStreakEmpty");
}
els.dailyList.innerHTML = "";
for (const task of dailyTaskCatalog) {
const state = dailyProgress.tasks[task.id] ?? { count: 0, done: false };
const details = dailyTaskDetails(task);
const item = document.createElement("article");
item.className = "daily-task";
item.classList.toggle("is-complete", state.done);
const badge = document.createElement("span");
badge.className = "daily-task-badge";
badge.textContent = state.done ? "★" : String(task.reward);
const copy = document.createElement("div");
const title = document.createElement("strong");
title.textContent = details.title;
const detail = document.createElement("p");
detail.textContent = details.detail;
copy.append(title, detail);
const progress = document.createElement("span");
progress.className = "daily-task-progress";
progress.textContent = state.done
? t("dailyTaskDone")
: t("dailyTaskProgress", { current: state.count, target: task.target });
progress.title = t("dailyTaskReward", { count: task.reward });
item.append(badge, copy, progress);
els.dailyList.append(item);
}
const trainingDay = todayDailyTrainingDay();
const trainingDone = Number(trainingDay.endgame) + Number(trainingDay.mate);
const trainingItem = document.createElement("article");
trainingItem.className = "daily-task daily-training-summary";
trainingItem.classList.toggle("is-complete", trainingDone >= 2);
const trainingBadge = document.createElement("span");
trainingBadge.className = "daily-task-badge";
trainingBadge.textContent = trainingDone >= 2 ? "7" : `${trainingDone}/2`;
const trainingCopy = document.createElement("div");
const trainingTitle = document.createElement("strong");
trainingTitle.textContent = t("dailyTrainingStreakTitle");
const trainingDetail = document.createElement("p");
trainingDetail.textContent = t("dailyTrainingStreakDetail");
trainingCopy.append(trainingTitle, trainingDetail);
const trainingProgress = document.createElement("span");
trainingProgress.className = "daily-task-progress";
const streakCount = currentDailyTrainingStreakCount();
trainingProgress.textContent = trainingDone >= 2
? t("dailyTrainingStreakComplete", { count: streakCount })
: t("dailyTrainingStreakProgress", { done: trainingDone, total: 2, count: streakCount });
trainingItem.append(trainingBadge, trainingCopy, trainingProgress);
els.dailyList.append(trainingItem);
}
function showDailyReward(title, reward) {
if (!els.dailyRewardToast) {
return;
}
window.clearTimeout(dailyRewardTimer);
els.dailyRewardBadge.textContent = "★";
els.dailyRewardText.textContent = t("dailyRewardToast", { title, count: reward });
els.dailyRewardToast.hidden = false;
requestAnimationFrame(() => {
els.dailyRewardToast.classList.add("is-visible");
});
dailyRewardTimer = window.setTimeout(() => {
els.dailyRewardToast.classList.remove("is-visible");
dailyRewardTimer = window.setTimeout(() => {
els.dailyRewardToast.hidden = true;
}, 190);
}, 2400);
}
function renderAccount() {
const account = currentAccount();
const isLoggedIn = Boolean(account);
els.accountTitle.textContent = isLoggedIn ? account.name : t("accountGuest");
els.accountDetail.textContent = isLoggedIn
? t("accountLoggedDetail", { name: account.name })
: t("accountGuestDetail");
els.authOpenBtn.hidden = isLoggedIn;
els.logoutBtn.hidden = !isLoggedIn;
els.deleteAccountBtn.hidden = !isLoggedIn;
setButtonContent(els.deleteAccountBtn, "!", t("accountDelete"));
renderProfile();
}
function renderAuthMode() {
const isRegister = authMode === "register";
els.authTitle.textContent = isRegister ? t("authRegisterTitle") : t("authLoginTitle");
els.submitAuthBtn.textContent = isRegister ? t("register") : t("login");
for (const button of els.authModeButtons) {
const isActive = button.dataset.authMode === authMode;
button.classList.toggle("is-active", isActive);
button.setAttribute("aria-pressed", String(isActive));
button.textContent = button.dataset.authMode === "register" ? t("register") : t("login");
}
}
function renderFeedbackState() {
for (const button of els.feedbackKindButtons) {
const isActive = button.dataset.feedbackKind === feedbackKind;
button.classList.toggle("is-active", isActive);
button.setAttribute("aria-pressed", String(isActive));
}
const entries = loadFeedbackEntries();
els.feedbackCount.textContent = t("feedbackCount", { count: entries.length });
els.feedbackInboxList.innerHTML = "";
updateFeedbackBackup();
if (!entries.length) {
const empty = document.createElement("p");
empty.className = "feedback-inbox-empty";
empty.textContent = t("feedbackInboxEmpty");
els.feedbackInboxList.append(empty);
return;
}
entries.slice(0, 5).forEach((entry) => {
const item = document.createElement("article");
item.className = "feedback-inbox-item";
const meta = document.createElement("strong");
const date = new Date(entry.createdAt);
meta.textContent = `${entry.id || "FB"} · ${entry.kindLabel} · ${entry.account} · ${Number.isNaN(date.valueOf()) ? "" : date.toLocaleString()}`;
const body = document.createElement("p");
body.textContent = entry.text;
item.append(meta, body);
els.feedbackInboxList.append(item);
});
}
function renderReleaseInfo() {
els.versionBtn.textContent = `v${appVersion}`;
if (els.versionUpdateDot) {
els.versionBtn.prepend(els.versionUpdateDot);
els.versionUpdateDot.hidden = updateCheckState !== "ready";
}
els.versionBtn.setAttribute("aria-label", t("releaseButtonAria"));
els.releaseLabel.textContent = t("releaseLabel");
els.releaseTitle.textContent = t("releaseTitle");
els.closeReleaseBtn.setAttribute("aria-label", t("releaseCloseAria"));
els.releaseVersionText.textContent = t("releaseVersion", { version: appVersion });
els.releaseResourceTime.textContent = t("releaseResourceTime", { date: latestVersionInfo?.releasedAt || "2026-06-06" });
els.releaseHistoryTitle.textContent = t("releaseHistoryTitle");
els.releaseUpdateStatus.textContent = releaseUpdateStatusText();
renderReleaseLiveStatus();
renderReleaseLimitNotice();
setButtonContent(els.checkUpdateBtn, "↻", t("checkUpdate"));
setButtonContent(els.checkHealthBtn, "✓", t("checkHealth"));
setButtonContent(els.onlineSelfCheckBtn, "◉", t("onlineSelfCheck"));
setButtonContent(els.applyUpdateBtn, "↓", t("applyUpdate"));
setButtonContent(els.restoreBackupBtn, "↺", t("restoreBackup"));
els.checkUpdateBtn.disabled = updateCheckState === "checking" || updateCheckState === "reloading";
els.checkHealthBtn.disabled = releaseHealthState.status === "checking" || updateCheckState === "reloading";
els.onlineSelfCheckBtn.disabled = releaseHealthState.status === "checking" || updateCheckState === "reloading";
els.applyUpdateBtn.hidden = updateCheckState !== "ready";
els.applyUpdateBtn.disabled = updateCheckState === "reloading";
renderPwaInstall();
renderReleaseShare();
renderReleaseProfileBackup();
renderReleaseBackup();
renderReleaseHealth();
renderReleaseStatus();
renderReleaseHistory();
els.releaseList.innerHTML = "";
for (const note of releaseNotes[currentLanguage] ?? releaseNotes.zh) {
const item = document.createElement("li");
item.textContent = note;
els.releaseList.append(item);
}
}
function renderReleaseBackup() {
const backup = loadProfileBackup();
const hasBackup = hasRestorableProfileBackup(backup);
els.restoreBackupBtn.hidden = !hasBackup;
els.releaseBackupCard.hidden = !hasBackup;
if (!hasBackup) {
return;
}
els.releaseBackupTitle.textContent = t("restoreBackup");
els.releaseBackupText.textContent = t("releaseBackupReady", {
points: Math.max(0, Math.floor(Number(backup.rankPoints)) || 0),
achievements: Math.max(0, Math.floor(Number(backup.achievements)) || 0),
});
setButtonContent(els.restoreRankBackupBtn, "↺", t("restoreRankOnly"));
setButtonContent(els.restoreAchievementsBackupBtn, "★", t("restoreAchievementsOnly"));
setButtonContent(els.restoreGameBackupBtn, "♟", t("restoreGameOnly"));
}
function appendReleaseHealthRow(label, value, ok = true) {
const row = document.createElement("div");
row.className = "release-health-row";
row.classList.toggle("is-warning", !ok);
const term = document.createElement("dt");
term.textContent = `${ok ? "✓" : "⚠"} ${label}`;
const detail = document.createElement("dd");
detail.textContent = value;
row.append(term, detail);
els.releaseHealthList.append(row);
}
function renderReleaseHealth() {
els.releaseHealthTitle.textContent = t("releaseHealthTitle");
els.releaseHealthPill.textContent =
releaseHealthState.status === "checking"
? t("releaseHealthChecking")
: releaseHealthState.status === "done"
? t("releaseHealthOk")
: t("lanCheckIdle");
els.releaseHealthPill.classList.toggle("is-online", releaseHealthState.status === "done");
els.releaseHealthList.innerHTML = "";
if (!releaseHealthState.rows.length) {
appendReleaseHealthRow(t("releaseHealthTitle"), t("releaseHealthIdle"));
return;
}
for (const row of releaseHealthState.rows) {
appendReleaseHealthRow(row.label, row.value, row.ok);
}
}
function renderReleaseHistory() {
els.releaseHistoryList.innerHTML = "";
const history = Array.isArray(latestVersionInfo?.history) && latestVersionInfo.history.length
? latestVersionInfo.history
: [{ version: appVersion, releasedAt: latestVersionInfo?.releasedAt || "2026-06-06" }];
for (const entry of history) {
const item = document.createElement("span");
item.className = "release-history-item";
item.classList.toggle("is-current", compareVersions(entry.version, appVersion) === 0);
const label = compareVersions(entry.version, appVersion) === 0
? t("releaseHistoryCurrent")
: compareVersions(entry.version, appVersion) > 0
? t("releaseHistoryAvailable")
: entry.releasedAt || "";
item.textContent = `v${entry.version}${label ? ` · ${label}` : ""}`;
els.releaseHistoryList.append(item);
}
}
function parseVersionParts(version) {
return String(version ?? "")
.replace(/^v/i, "")
.split(".")
.map((part) => Math.max(0, Number.parseInt(part, 10) || 0));
}
function compareVersions(left, right) {
const a = parseVersionParts(left);
const b = parseVersionParts(right);
const length = Math.max(a.length, b.length);
for (let index = 0; index < length; index += 1) {
const diff = (a[index] || 0) - (b[index] || 0);
if (diff !== 0) {
return diff;
}
}
return 0;
}
function releaseUpdateStatusText() {
if (updateCheckState === "checking") {
return t("releaseUpdateChecking");
}
if (updateCheckState === "ready" && availableVersionInfo?.version) {
return t("releaseUpdateReady", { version: availableVersionInfo.version });
}
if (updateCheckState === "latest") {
return t("releaseUpdateLatest");
}
if (updateCheckState === "offline") {
return t("releaseUpdateOffline");
}
if (updateCheckState === "live-old" && latestVersionInfo?.version) {
return t("releaseLiveOld", { version: latestVersionInfo.version });
}
if (updateCheckState === "reloading") {
return t("releaseUpdateReloading");
}
return t("releaseUpdateIdle");
}
function liveVersionUrl() {
const isProductionHost = window.location.hostname === "jeffery-chess-game.netlify.app";
return isProductionHost ? `./version.json?live=${Date.now()}` : `${productionSiteUrl}/version.json?live=${Date.now()}`;
}
function isBackupSiteHost() {
const backup = new URL(backupSiteUrl);
return window.location.hostname === backup.hostname && window.location.pathname.startsWith(backup.pathname);
}
function isIosAppBuild() {
return window.JEFFERY_CHESS_APP === "ios" || document.documentElement.classList.contains("ios-app");
}
function pagesVersionUrl() {
return isBackupSiteHost() ? `./version.json?pages=${Date.now()}` : `${backupSiteUrl.replace(/\/$/, "")}/version.json?pages=${Date.now()}`;
}
function canReadVersionUrl(url) {
const target = new URL(url, window.location.href);
return target.origin === window.location.origin;
}
async function readRemoteVersion(url) {
if (!canReadVersionUrl(url)) {
throw new Error("version-status-cross-origin");
}
const response = await fetch(url, { cache: "no-store" });
if (!response.ok) {
throw new Error(`version-status-${response.status}`);
}
const info = await response.json();
const version = String(info.version || "");
if (!version) {
throw new Error("version-status-empty");
}
const comparison = compareVersions(version, appVersion);
return {
status: comparison === 0 ? "synced" : comparison < 0 ? "outdated" : "ahead",
version,
};
}
function releaseLiveStatusText() {
if (liveVersionState.status === "checking") {
return t("releaseLiveChecking");
}
if (liveVersionState.status === "synced") {
return t("releaseLiveSynced", { version: liveVersionState.version });
}
if (liveVersionState.status === "outdated") {
return t("releaseLiveOutdated", { version: liveVersionState.version, local: appVersion });
}
if (liveVersionState.status === "ahead") {
return t("releaseLiveAhead", { version: liveVersionState.version });
}
if (liveVersionState.status === "unavailable") {
return t("releaseLiveUnavailable");
}
return t("releaseLiveIdle");
}
function publishStatusValue(state) {
if (!state || state.status === "idle" || state.status === "checking") {
return t("releaseStatusChecking");
}
if (state.status === "unavailable") {
return t("releaseStatusUnavailable");
}
if (state.status === "outdated") {
return t("releaseStatusOld", { version: state.version });
}
return t("releaseStatusReady", { version: state.version });
}
function appendReleaseStatusRow(label, value, ok = true) {
const row = document.createElement("div");
row.className = "release-status-row";
row.classList.toggle("is-warning", !ok);
const term = document.createElement("dt");
term.textContent = `${ok ? "✓" : "!"} ${label}`;
const detail = document.createElement("dd");
detail.textContent = value;
row.append(term, detail);
els.releaseStatusList.append(row);
}
function currentAdminEntryStatus() {
const isElementVisible = (node) => {
if (!node) {
return false;
}
const style = window.getComputedStyle(node);
const rect = node.getBoundingClientRect();
return !node.hidden && style.display !== "none" && style.visibility !== "hidden" && rect.width > 0 && rect.height > 0;
};
const ownerEntryKey = ["admin", "StarBtn"].join("");
const ownerEntry = els[ownerEntryKey];
const adminVisible = isElementVisible(ownerEntry);
const restoreVisible = isElementVisible(els.developerRankRestoreBtn);
if (!adminVisible && !restoreVisible) {
return { label: t("releaseStatusAdminClean"), ok: true };
}
if (adminVisible && isLocalAdminPage() && !restoreVisible) {
return { label: t("releaseStatusAdminLocal"), ok: true };
}
return { label: t("releaseStatusAdminWarning"), ok: false };
}
function renderReleaseStatus() {
if (!els.releaseStatusTitle || !els.releaseStatusPill || !els.releaseStatusList) {
return;
}
els.releaseStatusTitle.textContent = t("releaseStatusTitle");
els.releaseStatusPill.textContent =
publishStatusState.status === "done"
? t("releaseStatusDone")
: publishStatusState.status === "checking"
? t("releaseStatusChecking")
: t("lanCheckIdle");
els.releaseStatusPill.classList.toggle("is-online", publishStatusState.status === "done");
els.releaseStatusList.innerHTML = "";
if (publishStatusState.status === "idle") {
appendReleaseStatusRow(t("releaseStatusTitle"), t("releaseStatusIdle"));
if (els.releaseStatusHint) {
els.releaseStatusHint.textContent = t("releaseStatusHintIdle");
}
return;
}
appendReleaseStatusRow(t("releaseStatusLocal"), t("releaseStatusVersion", { version: appVersion }), true);
appendReleaseStatusRow(
t("releaseStatusNetlify"),
publishStatusValue(liveVersionState),
liveVersionState.status === "synced",
);
appendReleaseStatusRow(
t("releaseStatusPages"),
publishStatusValue(pagesVersionState),
pagesVersionState.status === "synced",
);
appendReleaseStatusRow(
t("releaseStatusBackupLine"),
pagesVersionState.status === "synced" ? t("releaseStatusBackupOnline") : t("releaseStatusUnavailable"),
pagesVersionState.status === "synced",
);
appendReleaseStatusRow(
t("releaseStatusPublicVersion"),
pagesVersionState.version ? t("releaseStatusVersion", { version: pagesVersionState.version }) : t("releaseStatusUnavailable"),
pagesVersionState.status === "synced",
);
const adminEntry = currentAdminEntryStatus();
appendReleaseStatusRow(t("releaseStatusAdminEntry"), adminEntry.label, adminEntry.ok);
appendReleaseStatusRow(t("releaseStatusShare"), t("releaseStatusVersion", { version: appVersion }), true);
if (els.releaseStatusHint) {
els.releaseStatusHint.textContent =
pagesVersionState.status === "synced"
? t("releaseStatusHintReady")
: pagesVersionState.status === "unavailable"
? t("releaseStatusHintPages")
: t("releaseStatusHintIdle");
}
}
function pwaCapability() {
const httpMode = ["http:", "https:"].includes(window.location.protocol);
const hasManifest = Boolean(document.querySelector('link[rel="manifest"]'));
const hasServiceWorker = Boolean(window.navigator?.serviceWorker);
return {
httpMode,
hasManifest,
hasServiceWorker,
ready: Boolean(deferredInstallPrompt),
supported: httpMode && hasManifest && hasServiceWorker,
};
}
function pwaInstallStatus() {
const capability = pwaCapability();
if (pwaInstallState === "installed") {
return { text: t("pwaInstallInstalled"), ok: true };
}
if (capability.ready) {
return { text: t("pwaInstallReady"), ok: true };
}
if (capability.supported) {
return { text: t("pwaInstallManual"), ok: true };
}
return { text: t("pwaInstallUnsupported"), ok: false };
}
function renderPwaInstall() {
if (!els.releaseInstallCard) {
return;
}
const status = pwaInstallStatus();
els.releaseInstallTitle.textContent = t("pwaInstallTitle");
els.releaseInstallText.textContent = status.text;
els.releaseInstallPill.textContent = status.ok ? t("releaseHealthOk") : t("releaseHealthWarning", { label: t("releaseHealthPwa") });
els.releaseInstallPill.classList.toggle("is-online", status.ok);
setButtonContent(els.installPwaBtn, "⤓", t("pwaInstallButton"));
}
function renderReleaseLimitNotice() {
if (!els.releaseLimitCard) {
return;
}
const showLimit = isBackupSiteHost();
els.releaseLimitCard.hidden = !showLimit;
els.releaseLimitTitle.textContent = t("releaseLimitTitle");
els.releaseLimitText.textContent = t("releaseLimitText");
}
function renderReleaseShareQr() {
if (!els.releaseShareQr) {
return;
}
els.releaseShareQr.innerHTML = "";
els.releaseShareQr.setAttribute("aria-label", t("releaseShareQrAria"));
if (typeof window.qrcode !== "function") {
return;
}
try {
const qr = window.qrcode(0, "M");
qr.addData(backupSiteUrl);
qr.make();
els.releaseShareQr.innerHTML = qr.createSvgTag({ cellSize: 4, margin: 2, title: t("releaseShareQrAria") });
} catch (error) {
els.releaseShareQr.innerHTML = "";
}
}
function renderReleaseShare() {
if (!els.releaseShareCard) {
return;
}
els.releaseShareTitle.textContent = t("releaseShareTitle");
els.releaseSharePill.textContent = t("releaseSharePill");
els.releaseShareText.textContent = t("releaseShareText");
els.releaseSharePill.classList.add("is-online");
els.releaseShareLink.href = backupSiteUrl;
els.releaseShareLink.textContent = backupSiteUrl;
setButtonContent(els.sharePublicSiteBtn, "⧉", t("releaseShareCopy"));
renderReleaseShareQr();
}
function profileExportReminderDismissed() {
try {
return window.localStorage.getItem(profileExportReminderStorageKey) === appVersion;
} catch (error) {
return false;
}
}
function renderReleaseProfileBackup() {
if (!els.releaseProfileBackupCard) {
return;
}
els.releaseProfileBackupCard.hidden = profileExportReminderDismissed();
if (els.releaseProfileBackupCard.hidden) {
return;
}
els.releaseProfileBackupTitle.textContent = t("releaseProfileBackupTitle");
els.releaseProfileBackupPill.textContent = t("releaseProfileBackupPill");
els.releaseProfileBackupPill.classList.add("is-online");
els.releaseProfileBackupText.textContent = t("releaseProfileBackupText");
setButtonContent(els.releaseProfileExportBtn, "⇩", t("releaseProfileBackupButton"));
setButtonContent(els.releaseProfileImportBtn, "⇧", t("releaseProfileImportButton"));
setButtonContent(els.releaseProfileDismissBtn, "×", t("releaseProfileBackupDismiss"));
}
function dismissProfileExportReminder() {
try {
window.localStorage.setItem(profileExportReminderStorageKey, appVersion);
} catch (error) {
}
renderReleaseProfileBackup();
setNotice(t("releaseProfileBackupDismissed"));
}
async function copyPublicPlayerLink() {
try {
await navigator.clipboard.writeText(backupSiteUrl);
setNotice(t("releaseShareCopied"));
} catch (error) {
setNotice(t("copyBlocked"));
}
}
async function installPwaApp() {
if (!deferredInstallPrompt) {
setNotice(pwaInstallStatus().text);
return;
}
const promptEvent = deferredInstallPrompt;
deferredInstallPrompt = null;
try {
await promptEvent.prompt();
const choice = await promptEvent.userChoice;
pwaInstallState = choice?.outcome === "accepted" ? "installed" : "dismissed";
setNotice(choice?.outcome === "accepted" ? t("pwaInstallInstalled") : t("pwaInstallDismissed"));
} catch (error) {
pwaInstallState = "dismissed";
setNotice(t("pwaInstallManual"));
}
renderReleaseInfo();
}
function renderReleaseLiveStatus() {
if (!els.releaseLiveTitle || !els.releaseLiveText || !els.releaseLivePill) {
return;
}
els.releaseLiveTitle.textContent = t("releaseLiveTitle");
els.releaseLiveText.textContent = releaseLiveStatusText();
if (els.releaseBackupLink) {
els.releaseBackupLink.href = backupSiteUrl;
els.releaseBackupLink.textContent = t("releaseLiveOpen");
}
const statusLabel =
liveVersionState.status === "checking"
? t("releaseHealthChecking")
: liveVersionState.status === "synced"
? t("releaseHealthOk")
: liveVersionState.status === "idle"
? t("lanCheckIdle")
: t("releaseHealthWarning", { label: t("releaseHealthResources") });
els.releaseLivePill.textContent = statusLabel;
els.releaseLivePill.classList.toggle("is-ok", liveVersionState.status === "synced");
els.releaseLivePill.classList.toggle("is-warning", ["outdated", "ahead", "unavailable"].includes(liveVersionState.status));
}
async function checkPublishStatus({ silent = false } = {}) {
publishStatusState = { status: "checking" };
liveVersionState = { status: "checking", version: "", url: productionSiteUrl };
pagesVersionState = { status: "checking", version: "", url: backupSiteUrl };
if (!silent) {
renderReleaseInfo();
} else {
renderReleaseLiveStatus();
renderReleaseStatus();
}
const [netlify, pages] = await Promise.allSettled([
readRemoteVersion(liveVersionUrl()),
readRemoteVersion(pagesVersionUrl()),
]);
liveVersionState = netlify.status === "fulfilled"
? { ...netlify.value, url: productionSiteUrl }
: { status: "unavailable", version: "", url: productionSiteUrl };
pagesVersionState = pages.status === "fulfilled"
? { ...pages.value, url: backupSiteUrl }
: { status: "unavailable", version: "", url: backupSiteUrl };
publishStatusState = { status: "done" };
renderReleaseInfo();
}
async function checkLiveSiteVersion({ silent = false } = {}) {
liveVersionState = { status: "checking", version: "", url: productionSiteUrl };
if (!silent) {
renderReleaseInfo();
} else {
renderReleaseLiveStatus();
}
try {
const result = await readRemoteVersion(liveVersionUrl());
liveVersionState = { ...result, url: productionSiteUrl };
} catch (error) {
liveVersionState = { status: "unavailable", version: "", url: productionSiteUrl };
}
renderReleaseInfo();
}
async function checkForUpdates({ silent = false } = {}) {
updateCheckState = "checking";
availableVersionInfo = null;
if (!silent) {
renderReleaseInfo();
}
try {
const response = await fetch(`./version.json?check=${Date.now()}`, { cache: "no-store" });
if (!response.ok) {
throw new Error("version-check-failed");
}
const info = await response.json();
latestVersionInfo = info;
if (compareVersions(info.version, appVersion) > 0) {
availableVersionInfo = info;
updateCheckState = "ready";
} else if (compareVersions(info.version, appVersion) < 0) {
updateCheckState = "live-old";
} else {
updateCheckState = "latest";
}
} catch (error) {
updateCheckState = "offline";
}
renderReleaseInfo();
}
async function checkVersionHealth() {
releaseHealthState = {
status: "checking",
rows: [{ label: t("releaseHealthTitle"), value: t("releaseHealthChecking"), ok: true }],
};
renderReleaseInfo();
let resourceRow;
try {
const response = await fetch(`./version.json?health=${Date.now()}`, { cache: "no-store" });
if (!response.ok) {
throw new Error("version-health-failed");
}
const info = await response.json();
latestVersionInfo = info;
resourceRow =
compareVersions(info.version, appVersion) > 0
? { label: t("releaseHealthResources"), value: t("releaseHealthUpdateReady", { version: info.version }), ok: false }
: compareVersions(info.version, appVersion) < 0
? { label: t("releaseHealthResources"), value: t("releaseLiveOld", { version: info.version }), ok: false }
: { label: t("releaseHealthResources"), value: t("releaseHealthLatest"), ok: true };
} catch (error) {
resourceRow = { label: t("releaseHealthResources"), value: t("releaseHealthOffline"), ok: false };
}
await checkPublishStatus({ silent: true });
const lanCheck = await fetchLanInfoStatus();
const feedbackReady = Boolean(els.feedbackForm?.matches("[data-netlify]"));
const rankIsLocalOnly = officialRankStatus === "local" || officialRankStatus === "idle";
releaseHealthState = {
status: "done",
rows: [
{ label: t("releaseHealthVersion"), value: `v${appVersion}`, ok: true },
resourceRow,
{
label: t("releaseLiveTitle"),
value: releaseLiveStatusText(),
ok: liveVersionState.status === "synced",
},
{
label: t("releaseHealthRank"),
value: rankIsLocalOnly ? t("releaseHealthRankLocal") : t("releaseHealthRankOk", { points: rankPoints }),
ok: true,
},
{
label: t("releaseHealthLan"),
value: lanCheck.ok ? t("releaseHealthLanOn") : t("releaseHealthLanOff"),
ok: lanCheck.ok,
},
{
label: t("releaseHealthFeedback"),
value: feedbackReady ? t("releaseHealthFeedbackReady") : t("releaseHealthFeedbackMissing"),
ok: feedbackReady,
},
],
};
renderReleaseInfo();
setNotice(t("releaseHealthOk"));
}
async function runOnlineSelfCheck() {
releaseHealthState = {
status: "checking",
rows: [{ label: t("releaseHealthTitle"), value: t("releaseHealthChecking"), ok: true }],
};
renderReleaseInfo();
await checkPublishStatus({ silent: true });
const capability = pwaCapability();
const feedbackReady = Boolean(
els.feedbackForm?.matches("[data-netlify]") &&
els.feedbackForm.querySelector('input[name="form-name"][value="player-feedback"]'),
);
const internalButtonId = ["ad", "min", "Star", "Btn"].join("");
const internalEntry = document.getElementById(internalButtonId);
const internalEntryVisible = Boolean(internalEntry && !internalEntry.hidden);
const leaderboardReady = Boolean(els.leaderboardBtn && els.leaderboardGrid);
const pwaOk = capability.supported || pwaInstallState === "installed";
const pwaText =
pwaInstallState === "installed"
? t("pwaInstallInstalled")
: capability.supported
? t("releaseHealthPwaReady")
: ["http:", "https:"].includes(window.location.protocol)
? t("releaseHealthPwaManual")
: t("releaseHealthPwaBlocked");
releaseHealthState = {
status: "done",
rows: [
{ label: t("releaseHealthVersion"), value: `v${appVersion}`, ok: true },
{
label: t("releaseLiveTitle"),
value: releaseLiveStatusText(),
ok: liveVersionState.status === "synced",
},
{
label: t("releaseStatusPages"),
value: pagesVersionState.status === "synced" ? t("releaseStatusHintReady") : t("releaseStatusHintPages"),
ok: pagesVersionState.status === "synced",
},
{
label: t("releaseHealthFeedback"),
value: feedbackReady ? t("releaseHealthFeedbackReady") : t("releaseHealthFeedbackMissing"),
ok: feedbackReady,
},
{
label: t("releaseHealthPwa"),
value: pwaText,
ok: pwaOk,
},
{
label: t("releaseHealthPlayerBuild"),
value: internalEntryVisible ? t("releaseHealthPlayerBuildWarning") : t("releaseHealthPlayerBuildClean"),
ok: !internalEntryVisible,
},
{
label: t("releaseHealthLeaderboard"),
value: leaderboardReady ? t("releaseHealthLeaderboardReady") : t("releaseHealthLeaderboardMissing"),
ok: leaderboardReady,
},
],
};
renderReleaseInfo();
setNotice(t("releaseHealthOk"));
}
async function applyAvailableUpdate() {
updateCheckState = "reloading";
renderReleaseInfo();
saveCurrentGame();
saveProfileBackup("before-update");
try {
if ("caches" in window) {
const names = await window.caches.keys();
await Promise.all(names.map((name) => window.caches.delete(name)));
}
} catch (error) {
}
const url = new URL(window.location.href);
url.searchParams.set("updated", availableVersionInfo?.version || appVersion);
url.searchParams.set("resourceRefresh", String(Date.now()));
window.location.replace(url.toString());
}
function showUpdateCompleteNotice() {
const url = new URL(window.location.href);
const updatedVersion = url.searchParams.get("updated");
if (!updatedVersion) {
return;
}
const backup = loadProfileBackup();
const suffix = hasRestorableProfileBackup(backup)
? ` ${t("releaseBackupReady", {
points: Math.max(0, Math.floor(Number(backup.rankPoints)) || 0),
achievements: Math.max(0, Math.floor(Number(backup.achievements)) || 0),
})}`
: "";
setNotice(`${t("releaseUpdateComplete", { version: updatedVersion })}${suffix}`);
url.searchParams.delete("updated");
url.searchParams.delete("resourceRefresh");
window.history.replaceState({}, "", url.toString());
}
function loadAccountAchievements(accountId) {
try {
const saved = JSON.parse(window.localStorage.getItem(`${achievementStorageKey}:${accountId}`) ?? "[]");
return Array.isArray(saved) ? saved.filter((id) => achievementCatalog.some((item) => item.id === id)).length : 0;
} catch (error) {
return 0;
}
}
function loadAccountActivity(accountId) {
try {
const saved = JSON.parse(window.localStorage.getItem(`${profileActivityStorageKey}:${accountId}`) ?? "null");
return normalizeProfileActivity(saved ?? createEmptyProfileActivity());
} catch (error) {
return createEmptyProfileActivity();
}
}
function leaderboardEntries() {
return Object.values(accounts)
.filter((account) => account && typeof account === "object")
.map((account) => {
const isCurrent = account.id === currentAccountId;
const stats = ensureAccountLeagueStats(account);
const achievements = isCurrent ? achievementUnlockedCount() : loadAccountAchievements(account.id);
const activity = isCurrent ? profileActivity : loadAccountActivity(account.id);
const points = isCurrent ? Math.max(0, Math.floor(Number(rankPoints)) || 0) : Math.max(0, Math.floor(Number(account.rankPoints)) || 0);
return {
id: account.id,
name: cleanPlayerDisplayName(account.name || account.id || "Player"),
rankPoints: points,
rankName: rankDetails(rankLevelForPoints(points)).name,
achievements,
games: activity.completedGames,
league: stats,
overallPoints: points + stats.points + achievements * 10,
};
});
}
function onlineLeagueDisplayName(entry) {
const name = cleanPlayerDisplayName(entry.displayName);
const duplicateCount = onlineLeagueEntries.filter((item) => cleanPlayerDisplayName(item.displayName) === name).length;
if (duplicateCount <= 1) {
return name;
}
const suffix = String(entry.playerId ?? "").slice(-4).toUpperCase() || "0000";
return `${name} #${suffix}`;
}
function sortedLeaderboardEntries(kind) {
const entries = kind === "league" && onlineLeagueEntries.length
? onlineLeagueEntries.map((entry) => ({
id: entry.playerId,
name: onlineLeagueDisplayName(entry),
rankPoints: 0,
rankName: t("leaderboardLeagueTitle"),
achievements: 0,
games: entry.games,
league: {
points: entry.points,
games: entry.games,
wins: entry.wins,
draws: entry.draws,
losses: entry.losses,
},
overallPoints: entry.points,
}))
: leaderboardEntries();
const scoreFor = (entry) => {
if (kind === "rank") {
return entry.rankPoints;
}
if (kind === "league") {
return entry.league.points;
}
return entry.overallPoints;
};
return entries.sort((left, right) =>
scoreFor(right) - scoreFor(left) ||
right.rankPoints - left.rankPoints ||
right.league.points - left.league.points ||
right.achievements - left.achievements ||
left.name.localeCompare(right.name),
);
}
function renderLeaderboardSection({ kind, title, detail, scoreKey }) {
const section = document.createElement("section");
section.className = "leaderboard-section";
const heading = document.createElement("h3");
heading.textContent = title;
const copy = document.createElement("p");
copy.textContent = detail;
const list = document.createElement("ol");
list.className = "leaderboard-list";
section.append(heading, copy, list);
const entries = sortedLeaderboardEntries(kind).slice(0, 10);
if (!entries.length) {
const empty = document.createElement("div");
empty.className = "leaderboard-empty";
empty.textContent = t("leaderboardEmpty");
section.append(empty);
return section;
}
entries.forEach((entry, index) => {
const item = document.createElement("li");
const currentIds = new Set([currentAccountId, getOnlinePlayerId()].filter(Boolean));
item.className = "leaderboard-row";
item.classList.toggle("is-current", currentIds.has(entry.id));
const rank = document.createElement("span");
rank.className = "leaderboard-rank";
rank.textContent = index === 0 ? "♕" : String(index + 1);
const name = document.createElement("span");
name.className = "leaderboard-name";
const strong = document.createElement("strong");
strong.textContent = entry.name;
const meta = document.createElement("span");
meta.textContent = kind === "league"
? t("leaderboardLeagueMeta", entry.league)
: t("leaderboardRowMeta", { rank: entry.rankName, achievements: entry.achievements, games: entry.games });
name.append(strong, meta);
const score = document.createElement("span");
score.className = "leaderboard-score";
score.textContent = t(scoreKey, {
points: kind === "rank" ? entry.rankPoints : kind === "league" ? entry.league.points : entry.overallPoints,
});
item.append(rank, name, score);
list.append(item);
});
return section;
}
function renderLeaderboard() {
els.leaderboardBtnText.textContent = t("leaderboardButton");
els.leaderboardBtn.setAttribute("aria-label", t("leaderboardButtonAria"));
els.leaderboardLabel.textContent = t("leaderboardLabel");
els.leaderboardTitle.textContent = t("leaderboardTitle");
els.closeLeaderboardBtn.setAttribute("aria-label", t("leaderboardCloseAria"));
els.leaderboardSummary.textContent =
onlineLeagueStatus === "loading"
? t("leaderboardOnlineLoading")
: onlineLeagueStatus === "offline"
? t("leaderboardOnlineOffline")
: t("leaderboardOnlineSummary");
els.leaderboardSeason.textContent = seasonText();
renderLeagueRankAndReward();
els.leaderboardGrid.innerHTML = "";
els.leaderboardGrid.append(
renderLeaderboardSection({
kind: "overall",
title: t("leaderboardOverallTitle"),
detail: t("leaderboardOverallDetail"),
scoreKey: "leaderboardOverallScore",
}),
renderLeaderboardSection({
kind: "rank",
title: t("leaderboardRankTitle"),
detail: t("leaderboardRankDetail"),
scoreKey: "leaderboardRankScore",
}),
renderLeaderboardSection({
kind: "league",
title: t("leaderboardLeagueTitle"),
detail: t("leaderboardLeagueDetail"),
scoreKey: "leaderboardLeagueScore",
}),
);
}
function renderAchievements() {
const unlocked = achievementUnlockedCount();
const total = achievementCatalog.length;
els.achievementButtonBadge.textContent = bestAchievementBadge();
els.achievementProgressText.textContent = `${unlocked}/${total}`;
els.achievementBtn.setAttribute("aria-label", t("achievementButtonAria"));
els.achievementLabel.textContent = t("achievementLabel");
els.achievementTitle.textContent = t("achievementTitle");
els.closeAchievementBtn.setAttribute("aria-label", t("achievementCloseAria"));
els.achievementSummary.textContent = t("achievementSummary", { unlocked, total });
els.achievementDoneBtn.textContent = t("done");
els.achievementList.innerHTML = "";
achievementCatalog.forEach((achievement) => {
const details = achievementDetails(achievement);
const isUnlocked = unlockedAchievements.has(achievement.id);
const item = document.createElement("article");
item.className = "achievement-item";
item.classList.toggle("is-unlocked", isUnlocked);
const badge = document.createElement("span");
badge.className = "achievement-badge";
badge.textContent = achievement.badge;
const copy = document.createElement("div");
const title = document.createElement("strong");
title.textContent = details.title;
const description = document.createElement("p");
description.textContent = isUnlocked ? details.detail : t("lockedAchievement");
copy.append(title, description);
item.append(badge, copy);
els.achievementList.append(item);
});
renderLeaderboard();
renderProfile();
}
function renderLanPanel() {
const connected = isLanConnected();
const connecting = lanState.status === "connecting";
const spectating = connected && lanState.color === "s";
const room = normalizeLanRoom(els.lanRoomInput.value.trim());
els.lanStatus.textContent = spectating ? t("lanSpectating") : connected ? t("lanConnected") : connecting ? t("lanConnecting") : t("lanDisconnected");
els.lanStatus.classList.toggle("is-connected", connected);
els.lanStatus.classList.toggle("is-connecting", connecting);
els.lanStatus.classList.toggle("is-spectator", spectating);
els.lanPanel.classList.toggle("is-spectator", spectating);
els.lanDetail.classList.toggle("is-spectator", spectating);
els.lanCreateBtn.disabled = connected || connecting;
els.lanConnectBtn.disabled = connected || connecting;
els.lanReconnectBtn.hidden = connected || connecting || !room;
els.lanReconnectBtn.disabled = connected || connecting || !room;
els.lanDisconnectBtn.hidden = !connected && !connecting;
els.lanCopyLinkBtn.disabled = !room;
if (connecting && lanState.reconnectAttempts > 0) {
els.lanDetail.textContent = t("lanReconnectNotice", {
attempt: lanState.reconnectAttempts,
max: lanReconnectMaxAttempts,
});
} else if (connecting) {
els.lanDetail.textContent = t("lanDetailConnecting", { room: lanState.room });
} else if (!connected) {
els.lanDetail.textContent = t("lanDetailIdle");
} else if (lanState.color === "s") {
els.lanDetail.textContent = t("lanDetailSpectator");
} else if (lanState.clients >= 2) {
els.lanDetail.textContent = t("lanDetailPeerReady", { side: sideName(lanState.color) });
} else {
els.lanDetail.textContent = lanState.color === "w" ? t("lanDetailWhite") : t("lanDetailBlack");
}
if (!room) {
hideLanInviteCard();
}
renderLanAppModeCard();
renderGameCenterCard();
renderLanHostCard();
renderLanJumpCard();
const existingDuelHref = els.lanDuelLink.getAttribute("href") || "";
const existingDuelShare = existingDuelHref && existingDuelHref !== "#" ? els.lanDuelLink.href : "";
showLanDuelCard(room, room ? existingDuelShare : "");
if (!els.lanCheckCard.hidden) {
renderLanCheckResult();
}
}
function renderLanguage() {
document.documentElement.lang = currentLanguage === "en" ? "en" : "zh-CN";
document.title = t("appTitle");
document.querySelector("h1").textContent = t("appTitle");
document.querySelector(".game-stage").setAttribute("aria-label", t("boardAria"));
els.board.setAttribute("aria-label", t("boardOnlyAria"));
document.querySelector(".side-panel").setAttribute("aria-label", t("sidePanelAria"));
document.querySelector(".status-panel .panel-label").textContent = t("currentPosition");
els.reviewLabel.textContent = t("reviewLabel");
els.reviewTitle.textContent = t("reviewTitle");
renderReleaseInfo();
els.gameControlsLabel.textContent = t("gameControls");
els.helpControlsLabel.textContent = t("helpControls");
els.viewControlsLabel.textContent = t("viewControls");
setButtonContent(els.newGameBtn, "+", t("newGame"));
setButtonContent(els.tipBtn, "?", t("tip"));
setButtonContent(els.tutorialBtn, "i", t("tutorial"));
setButtonContent(els.dailyEndgameBtn, "♔", t("dailyEndgame"));
setButtonContent(els.mateOneBtn, "#", t("mateOneTraining"));
setButtonContent(els.undoBtn, "↶", t("undo"));
setButtonContent(els.flipBtn, "⇄", t("flip"));
renderAchievements();
els.feedbackBtnText.textContent = t("feedbackButton");
els.feedbackBtn.setAttribute("aria-label", t("feedbackButtonAria"));
els.feedbackLabel.textContent = t("feedbackLabel");
els.feedbackTitle.textContent = t("feedbackTitle");
els.closeFeedbackBtn.setAttribute("aria-label", t("feedbackCloseAria"));
document.querySelector(".feedback-kind").setAttribute("aria-label", t("feedbackKindAria"));
for (const button of els.feedbackKindButtons) {
button.textContent = feedbackKindName(button.dataset.feedbackKind);
}
els.feedbackTextLabel.textContent = t("feedbackTextLabel");
els.feedbackMailbox.textContent = t("feedbackMailbox", { email: feedbackMailboxAddress });
els.feedbackInboxSummary.textContent = t("feedbackInboxSummary");
els.feedbackIdHelp.textContent = t("feedbackIdHelp");
els.cancelFeedbackBtn.textContent = t("cancel");
els.submitFeedbackBtn.textContent = t("submitFeedback");
updateFeedbackBackup();
renderFeedbackState();
els.moreMenuBtn.setAttribute("aria-label", t("moreMenuAria"));
els.settingsCenterLabel.textContent = t("settingsCenterLabel");
els.settingsCenterTitle.textContent = t("settingsCenterTitle");
els.accountLabel.textContent = t("accountLabel");
setButtonContent(els.authOpenBtn, "ID", t("loginRegister"));
setButtonContent(els.logoutBtn, "×", t("logout"));
els.closeAuthBtn.setAttribute("aria-label", t("authCloseAria"));
document.querySelector(".auth-tabs").setAttribute("aria-label", t("authTabsAria"));
els.authUsernameLabel.textContent = t("username");
els.authPasswordLabel.textContent = t("password");
els.cancelAuthBtn.textContent = t("cancel");
renderAuthMode();
renderAccount();
els.lanLabel.textContent = t("lanLabel");
els.lanTitle.textContent = t("lanTitle");
els.lanRoomInput.placeholder = t("lanRoomPlaceholder");
setButtonContent(els.lanCreateBtn, "+", t("lanCreate"));
setButtonContent(els.lanConnectBtn, "LAN", t("lanConnect"));
setButtonContent(els.lanReconnectBtn, "↻", t("lanReconnect"));
setButtonContent(els.lanDisconnectBtn, "×", t("lanDisconnect"));
setButtonContent(els.lanCopyLinkBtn, "↗", t("lanCopyLink"));
setButtonContent(els.lanCheckBtn, "✓", t("lanCheck"));
setButtonContent(els.lanDiagnosticBtn, "?", t("lanDiagnostic"));
renderLanAppModeCard();
renderGameCenterCard();
renderLanHostCard();
renderLanJumpCard();
els.lanShareLabel.textContent = t("lanShareLabel");
const duelRoom = normalizeLanRoom(els.lanRoomInput.value || els.lanDuelCard.dataset.room || "");
const duelHref = els.lanDuelLink.getAttribute("href") || "";
showLanDuelCard(duelRoom, duelHref && duelHref !== "#" ? els.lanDuelLink.href : "");
els.lanCheckLabel.textContent = t("lanCheckLabel");
els.lanCheckTitle.textContent = t("lanCheckTitle");
if (!lastLanCheck) {
els.lanCheckPill.textContent = t("lanCheckIdle");
}
els.lanInviteLabel.textContent = t("lanInviteLabel");
els.lanInviteTitle.textContent = t("lanInviteTitle");
els.lanInviteCloseBtn.setAttribute("aria-label", t("lanInviteCloseAria"));
els.lanInviteText.textContent = t("lanInviteText");
setButtonContent(els.lanInviteCopyQrBtn, "⧉", t("lanQrCopy"));
setButtonContent(els.lanInviteDownloadQrBtn, "↓", t("lanQrDownload"));
els.lanDiagnosticLabel.textContent = t("lanDiagnosticLabel");
els.lanDiagnosticTitle.textContent = t("lanDiagnosticTitle");
els.closeLanDiagnosticBtn.setAttribute("aria-label", t("lanDiagnosticCloseAria"));
setButtonContent(els.copyLanDiagnosticBtn, "⧉", t("lanDiagnosticCopy"));
els.closeLanDiagnosticDoneBtn.textContent = t("lanDiagnosticDone");
if (els.lanDiagnosticDialog.hidden) {
els.lanDiagnosticStatus.textContent = t("lanDiagnosticIdle");
}
const inviteRoom = normalizeLanRoom(els.lanInviteCard.dataset.room ?? "");
if (inviteRoom) {
els.lanInviteRoom.textContent = t("lanInviteRoom", { room: inviteRoom });
const rendered = renderLanInviteQr(els.lanInviteLink.href);
els.lanInviteCopyQrBtn.disabled = !rendered;
els.lanInviteDownloadQrBtn.disabled = !rendered;
}
renderLanPanel();
els.languageLabel.textContent = t("languageLabel");
els.languageTitle.textContent = t("languageTitle");
document.querySelector(".language-toggle").setAttribute("aria-label", t("languageAria"));
for (const button of els.languageButtons) {
const isActive = button.dataset.language === currentLanguage;
button.classList.toggle("is-active", isActive);
button.setAttribute("aria-pressed", String(isActive));
}
document.querySelector(".board-theme-panel .panel-label").textContent = t("boardThemeLabel");
document.querySelector(".board-theme-panel h2").textContent = t("boardThemeTitle");
document.querySelector(".theme-grid").setAttribute("aria-label", t("boardThemeAria"));
for (const button of els.boardThemeButtons) {
button.querySelector(".theme-label").textContent = boardThemeName(button.dataset.boardTheme);
}
document.querySelector(".ai-panel .panel-label").textContent = t("aiOpponent");
document.querySelector(".ai-level-row .panel-label").textContent = t("aiLevel");
document.querySelector(".ai-levels").setAttribute("aria-label", t("aiLevelAria"));
els.aiPersonaLabel.textContent = t("aiPersonaLabel");
for (const button of els.aiLevelButtons) {
button.textContent = aiLevelDetails(Number(button.dataset.aiLevel)).name;
}
document.querySelector(".match-score-panel .panel-label").textContent = t("matchScoreLabel");
document.querySelector(".match-score-panel h2").textContent = t("matchScoreTitle");
els.resetScoreBtn.textContent = t("resetScore");
els.resetScoreBtn.setAttribute("aria-label", t("resetScoreAria"));
els.whiteWins.previousElementSibling.textContent = t("white");
els.draws.previousElementSibling.textContent = t("draw");
els.blackWins.previousElementSibling.textContent = t("black");
renderFriendMode();
els.rankLabel.textContent = t("rankLabel");
els.rankPointsLabel.textContent = t("rankPointsLabel");
els.rankProgressBar.setAttribute("aria-label", t("rankProgressAria"));
els.rankRules.textContent = rankRulesText();
els.whiteScore.previousElementSibling.textContent = t("whiteCaptured");
els.blackScore.previousElementSibling.textContent = t("blackCaptured");
document.querySelector(".move-panel .panel-label").textContent = t("moveRecordLabel");
document.querySelector(".move-panel h2").textContent = t("moveRecordTitle");
els.copyPgnBtn.setAttribute("aria-label", t("copyPgnAria"));
document.querySelector(".fen-panel h2").textContent = t("fenTitle");
els.copyFenBtn.textContent = t("copy");
els.copyFenBtn.setAttribute("aria-label", t("copyFenAria"));
setButtonContent(els.loadFenBtn, "↧", t("loadPosition"));
document.querySelector("#promotionTitle").textContent = t("promotionTitle");
els.cancelPromotionBtn.setAttribute("aria-label", t("cancelPromotionAria"));
els.closeTutorialBtn.setAttribute("aria-label", t("closeTutorialAria"));
setButtonContent(els.tutorialPrevBtn, "←", t("previous"));
renderOnboarding();
}
function saveMatchScore() {
const account = currentAccount();
if (account) {
account.matchScore = normalizeScore(matchScore);
account.updatedAt = new Date().toISOString();
saveAccounts();
return;
}
window.localStorage.setItem(scoreStorageKey, JSON.stringify(matchScore));
}
function renderFriendMode() {
if (!els.friendWhiteName || !els.friendBlackName) {
return;
}
friendMode = normalizeFriendMode(friendMode);
const { names, score } = currentFriendRecord();
els.friendModeLabel.textContent = t("friendModeLabel");
els.friendWhiteLabel.textContent = t("friendWhiteLabel");
els.friendBlackLabel.textContent = t("friendBlackLabel");
if (document.activeElement !== els.friendWhiteName) {
els.friendWhiteName.placeholder = t("friendWhiteDefault");
els.friendWhiteName.value = friendMode.white;
}
if (document.activeElement !== els.friendBlackName) {
els.friendBlackName.placeholder = t("friendBlackDefault");
els.friendBlackName.value = friendMode.black;
}
els.friendRecordText.textContent =
friendMode.white && friendMode.black
? t("friendRecordText", {
white: names.white,
black: names.black,
whiteWins: score.w,
blackWins: score.b,
draws: score.d,
})
: t("friendRecordEmpty");
}
function saveFriendNames({ notify = false } = {}) {
if (!els.friendWhiteName || !els.friendBlackName) {
return;
}
friendMode.white = cleanFriendName(els.friendWhiteName.value, t("friendWhiteDefault"));
friendMode.black = cleanFriendName(els.friendBlackName.value, t("friendBlackDefault"));
currentFriendRecord();
saveFriendMode();
renderFriendMode();
if (notify) {
setNotice(t("friendNamesSaved"));
}
}
function updateFriendRecord(result, amount) {
if (aiEnabled || professionalLeagueModeEnabled || !["w", "b", "d"].includes(result)) {
return;
}
const record = currentFriendRecord();
record.score[result] = Math.max(0, record.score[result] + amount);
friendMode.records[record.key] = record.score;
saveFriendMode();
}
function updateMatchScore(result, amount) {
matchScore[result] = Math.max(0, matchScore[result] + amount);
saveMatchScore();
}
function saveRankPoints() {
const account = currentAccount();
if (account) {
account.rankPoints = Math.max(0, Math.floor(Number(rankPoints)) || 0);
account.updatedAt = new Date().toISOString();
saveAccounts();
return;
}
window.localStorage.setItem(rankStorageKey, String(rankPoints));
}
function updateRankPoints(amount) {
const previousPoints = rankPoints;
rankPoints = Math.max(0, rankPoints + amount);
saveRankPoints();
return rankPoints - previousPoints;
}
function orientedFiles() {
return orientation === "w" ? files : [...files].reverse();
}
function orientedRanks() {
return orientation === "w" ? ranks : [...ranks].reverse();
}
function squareColor(square) {
const fileIndex = files.indexOf(square[0]);
const rank = Number(square[1]);
return (fileIndex + rank) % 2 === 0 ? "light" : "dark";
}
function createPieceIcon(piece, className = "") {
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.classList.add("piece", piece.color === "w" ? "piece-white" : "piece-black");
if (className) {
svg.classList.add(className);
}
svg.setAttribute("viewBox", "0 0 64 64");
svg.setAttribute("aria-hidden", "true");
const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
use.setAttribute("href", `#${pieceSymbols[piece.type]}`);
use.setAttributeNS("http://www.w3.org/1999/xlink", "href", `#${pieceSymbols[piece.type]}`);
svg.append(use);
return svg;
}
function getPieceLabel(square, piece) {
return t("pieceLabel", { square, side: sideName(piece.color), piece: pieceName(piece.type) });
}
function findKingSquare(color, chess = game) {
for (const file of files) {
for (let rank = 1; rank <= 8; rank += 1) {
const square = `${file}${rank}`;
const piece = chess.get(square);
if (piece?.type === "k" && piece.color === color) {
return square;
}
}
}
return null;
}
function setNotice(message) {
window.clearTimeout(noticeTimer);
els.notice.textContent = message;
if (message) {
noticeTimer = window.setTimeout(() => {
els.notice.textContent = "";
}, 2800);
}
}
function pieceMoveLine(move) {
const lines = pieceMoveLines[currentLanguage]?.[move.piece] ?? pieceMoveLines.zh[move.piece] ?? [];
if (!lines.length) {
return "";
}
const seed = `${move.from}${move.to}${move.san}${game.history().length}`
.split("")
.reduce((sum, character) => sum + character.charCodeAt(0), 0);
return lines[seed % lines.length];
}
function moveNotice(move, { byAi = false, byLan = false } = {}) {
const line = pieceMoveLine(move);
const special = move.flags?.includes("e") ? t("enPassantNotice") : "";
if (byAi) {
return [t("aiMove", { san: move.san }), special, line].filter(Boolean).join(" · ");
}
if (byLan) {
return [t("lanRemoteMove", { san: move.san }), special, line].filter(Boolean).join(" · ");
}
return [special, line].filter(Boolean).join(" · ");
}
function unlockAchievement(id) {
if (unlockedAchievements.has(id)) {
return false;
}
const achievement = achievementCatalog.find((item) => item.id === id);
if (!achievement) {
return false;
}
unlockedAchievements.add(id);
saveAchievements();
renderAchievements();
setNotice(t("achievementUnlocked", { badge: achievement.badge, title: achievementDetails(achievement).title }));
return true;
}
function updateDailyTask(id, amount = 1) {
dailyProgress = normalizeDailyProgress(dailyProgress);
const task = dailyTaskCatalog.find((item) => item.id === id);
const state = dailyProgress.tasks[id];
if (!task || !state || state.done) {
renderDailyTasks();
return false;
}
state.count = Math.min(task.target, state.count + amount);
if (state.count >= task.target) {
state.done = true;
dailyStars += task.reward;
recordDailyStreakCompletion();
saveDailyStars();
nativeHaptic("success");
const details = dailyTaskDetails(task);
showDailyReward(details.title, task.reward);
setNotice(t("dailyTaskUnlocked", { title: details.title, count: task.reward }));
}
saveDailyProgress();
renderDailyTasks();
return state.done;
}
function trackMoveAchievements(result) {
unlockAchievement("first-move");
if (result.captured) {
unlockAchievement("first-capture");
}
if (game.isCheck()) {
unlockAchievement("first-check");
updateDailyTask("three-checks", 1);
}
if (result.san === "O-O" || result.san === "O-O-O") {
unlockAchievement("castle-keeper");
}
if (result.promotion) {
unlockAchievement("promotion-star");
if (activeTrainingMode === "daily-endgame") {
recordDailyTrainingCompletion("daily-endgame");
}
}
if (game.isCheckmate()) {
unlockAchievement("checkmate-artist");
if (activeTrainingMode === "mate-one") {
recordDailyTrainingCompletion("mate-one");
}
}
}
function createAudioContext() {
const AudioContext = window.AudioContext || window.webkitAudioContext;
if (!AudioContext) {
return null;
}
if (!audioContext) {
audioContext = new AudioContext();
}
return audioContext;
}
function unlockAudio() {
const ctx = createAudioContext();
if (ctx?.state === "suspended") {
ctx.resume().finally(renderSoundStatus).catch(() => {});
}
startBackgroundMusic();
renderSoundStatus();
}
function playTone(ctx, frequency, start, duration, type = "sine", volume = 0.06, channel = "effects") {
const oscillator = ctx.createOscillator();
const gain = ctx.createGain();
const finalVolume = scaleVolume(volume, channel);
oscillator.type = type;
oscillator.frequency.setValueAtTime(frequency, start);
gain.gain.setValueAtTime(0.001, start);
gain.gain.exponentialRampToValueAtTime(finalVolume, start + 0.015);
gain.gain.exponentialRampToValueAtTime(0.001, start + duration);
oscillator.connect(gain);
gain.connect(ctx.destination);
oscillator.start(start);
oscillator.stop(start + duration + 0.03);
}
function playMusicTone(ctx, destination, frequency, start, duration, type = "sine", volume = 0.06) {
const oscillator = ctx.createOscillator();
const gain = ctx.createGain();
const finalVolume = scaleVolume(volume, "music");
oscillator.type = type;
oscillator.frequency.setValueAtTime(frequency, start);
gain.gain.setValueAtTime(0.001, start);
gain.gain.exponentialRampToValueAtTime(finalVolume, start + 0.04);
gain.gain.exponentialRampToValueAtTime(0.001, start + duration);
oscillator.connect(gain);
gain.connect(destination);
oscillator.start(start);
oscillator.stop(start + duration + 0.08);
}
function noteFrequency(note) {
const match = /^([A-G])(#|b)?(-?\d+)$/.exec(note);
if (!match) {
return 440;
}
const semitoneMap = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
const [, letter, accidental = "", octaveText] = match;
const accidentalOffset = accidental === "#" ? 1 : accidental === "b" ? -1 : 0;
const midi = (Number(octaveText) + 1) * 12 + semitoneMap[letter] + accidentalOffset;
return 440 * 2 ** ((midi - 69) / 12);
}
function playWarmPianoTone(ctx, destination, frequency, start, duration, volume = 0.035) {
const gain = ctx.createGain();
const lowpass = ctx.createBiquadFilter();
const finalVolume = scaleVolume(volume, "music");
lowpass.type = "lowpass";
lowpass.frequency.setValueAtTime(1500, start);
lowpass.Q.setValueAtTime(0.55, start);
gain.gain.setValueAtTime(0.001, start);
gain.gain.exponentialRampToValueAtTime(finalVolume, start + 0.05);
gain.gain.exponentialRampToValueAtTime(Math.max(0.002, finalVolume * 0.42), start + 0.35);
gain.gain.exponentialRampToValueAtTime(0.001, start + duration);
gain.connect(lowpass);
lowpass.connect(destination);
["triangle", "sine"].forEach((type, index) => {
const oscillator = ctx.createOscillator();
oscillator.type = type;
oscillator.frequency.setValueAtTime(frequency * (index === 0 ? 1 : 1.003), start);
oscillator.connect(gain);
oscillator.start(start);
oscillator.stop(start + duration + 0.08);
});
}
function playBladeMarimbaTone(ctx, destination, frequency, start, duration, volume = 0.04) {
const gain = ctx.createGain();
const finalVolume = scaleVolume(volume, "music");
const highpass = ctx.createBiquadFilter();
highpass.type = "highpass";
highpass.frequency.setValueAtTime(520, start);
gain.gain.setValueAtTime(0.001, start);
gain.gain.exponentialRampToValueAtTime(finalVolume, start + 0.012);
gain.gain.exponentialRampToValueAtTime(0.001, start + duration);
gain.connect(highpass);
highpass.connect(destination);
[
{ type: "triangle", ratio: 1, gain: 1 },
{ type: "sine", ratio: 2.01, gain: 0.38 },
].forEach((partial) => {
const oscillator = ctx.createOscillator();
oscillator.type = partial.type;
oscillator.frequency.setValueAtTime(frequency * partial.ratio, start);
const partialGain = ctx.createGain();
partialGain.gain.setValueAtTime(partial.gain, start);
oscillator.connect(partialGain);
partialGain.connect(gain);
oscillator.start(start);
oscillator.stop(start + duration + 0.06);
});
}
function playSynthBassTone(ctx, destination, frequency, start, duration, volume = 0.045) {
const gain = ctx.createGain();
const lowpass = ctx.createBiquadFilter();
const finalVolume = scaleVolume(volume, "music");
lowpass.type = "lowpass";
lowpass.frequency.setValueAtTime(260, start);
lowpass.frequency.exponentialRampToValueAtTime(120, start + 0.25);
gain.gain.setValueAtTime(0.001, start);
gain.gain.exponentialRampToValueAtTime(finalVolume, start + 0.04);
gain.gain.exponentialRampToValueAtTime(0.001, start + duration);
gain.connect(lowpass);
lowpass.connect(destination);
const carrier = ctx.createOscillator();
const modulator = ctx.createOscillator();
const modGain = ctx.createGain();
carrier.type = "sine";
modulator.type = "sine";
carrier.frequency.setValueAtTime(frequency, start);
modulator.frequency.setValueAtTime(frequency * 2, start);
modGain.gain.setValueAtTime(frequency * 0.75, start);
modulator.connect(modGain);
modGain.connect(carrier.frequency);
carrier.connect(gain);
carrier.start(start);
modulator.start(start);
carrier.stop(start + duration + 0.08);
modulator.stop(start + duration + 0.08);
}
function playKickDrum(ctx, destination, start, volume = 0.05) {
const oscillator = ctx.createOscillator();
const gain = ctx.createGain();
const finalVolume = scaleVolume(volume, "music");
oscillator.type = "sine";
oscillator.frequency.setValueAtTime(120, start);
oscillator.frequency.exponentialRampToValueAtTime(42, start + 0.18);
gain.gain.setValueAtTime(0.001, start);
gain.gain.exponentialRampToValueAtTime(finalVolume, start + 0.01);
gain.gain.exponentialRampToValueAtTime(0.001, start + 0.24);
oscillator.connect(gain);
gain.connect(destination);
oscillator.start(start);
oscillator.stop(start + 0.28);
}
function playSnareDrum(ctx, destination, start, volume = 0.035) {
const bufferSize = Math.floor(ctx.sampleRate * 0.16);
const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
const data = buffer.getChannelData(0);
for (let i = 0; i < bufferSize; i += 1) {
data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
}
const noise = ctx.createBufferSource();
const filter = ctx.createBiquadFilter();
const gain = ctx.createGain();
const finalVolume = scaleVolume(volume, "music");
noise.buffer = buffer;
filter.type = "bandpass";
filter.frequency.setValueAtTime(1800, start);
filter.Q.setValueAtTime(0.75, start);
gain.gain.setValueAtTime(0.001, start);
gain.gain.exponentialRampToValueAtTime(finalVolume, start + 0.01);
gain.gain.exponentialRampToValueAtTime(0.001, start + 0.16);
noise.connect(filter);
filter.connect(gain);
gain.connect(destination);
noise.start(start);
noise.stop(start + 0.18);
}
function ensureMusicGain(ctx) {
if (!musicGain) {
musicGain = ctx.createGain();
musicGain.gain.setValueAtTime(0.001, ctx.currentTime);
musicGain.connect(ctx.destination);
}
return musicGain;
}
function scheduleCheerfulMusic(ctx, now) {
const beat = 60 / 90;
const bar = beat * 4;
const progression = [
{ chord: ["A3", "C4", "E4"], bass: "A2" },
{ chord: ["F3", "A3", "C4"], bass: "F2" },
{ chord: ["C3", "E3", "G3"], bass: "C2" },
{ chord: ["G3", "B3", "D4"], bass: "G2" },
];
const melody = ["E5", "E5", "E5", "D5", "C5", "C5", "B4", "B4", "A4", "A4", "A4", "A4"];
progression.forEach((section, sectionIndex) => {
const sectionStart = now + sectionIndex * bar;
section.chord.forEach((note, noteIndex) => {
playWarmPianoTone(ctx, musicGain, noteFrequency(note), sectionStart + noteIndex * 0.025, beat * 3.05, 0.032);
});
playSynthBassTone(ctx, musicGain, noteFrequency(section.bass), sectionStart, beat * 3.55, 0.04);
});
for (let i = 0; i < 32; i += 1) {
const note = melody[i % melody.length];
const humanVolume = 0.026 + ((i % 5) * 0.002);
playBladeMarimbaTone(ctx, musicGain, noteFrequency(note), now + i * beat * 0.5, beat * 0.32, humanVolume);
}
for (let barIndex = 0; barIndex < 4; barIndex += 1) {
const start = now + barIndex * bar;
playKickDrum(ctx, musicGain, start, 0.036);
playSnareDrum(ctx, musicGain, start + beat, 0.026);
playKickDrum(ctx, musicGain, start + beat * 2, 0.036);
playKickDrum(ctx, musicGain, start + beat * 2.5, 0.026);
playSnareDrum(ctx, musicGain, start + beat * 3, 0.026);
}
return Math.round(bar * 4 * 1000);
}
function scheduleUrgentMusic(ctx, now, isCheckmate = false) {
const beat = 60 / 120;
const pulse = isCheckmate ? beat * 0.22 : beat * 0.3;
const base = isCheckmate ? noteFrequency("A3") : noteFrequency("E4");
const pattern = isCheckmate
? [base, noteFrequency("C5"), noteFrequency("B4"), noteFrequency("G#4")]
: [base, noteFrequency("G4"), base, noteFrequency("B4")];
const repetitions = isCheckmate ? 22 : 12;
for (let i = 0; i < repetitions; i += 1) {
const frequency = pattern[i % pattern.length];
playMusicTone(ctx, musicGain, frequency, now + i * pulse, pulse * 0.68, "square", isCheckmate ? 0.032 : 0.026);
if (i % 2 === 0) {
playMusicTone(ctx, musicGain, frequency / 2, now + i * pulse, pulse * 0.95, "sawtooth", isCheckmate ? 0.02 : 0.015);
}
if (i % 4 === 0) {
playKickDrum(ctx, musicGain, now + i * pulse, isCheckmate ? 0.042 : 0.034);
}
}
if (isCheckmate) {
playMusicTone(ctx, musicGain, noteFrequency("A2"), now + repetitions * pulse + 0.08, 0.55, "sawtooth", 0.026);
playMusicTone(ctx, musicGain, noteFrequency("E2"), now + repetitions * pulse + 0.28, 0.7, "triangle", 0.02);
}
return isCheckmate ? 3200 : 1250;
}
function scheduleBackgroundBar(ctx) {
if (!musicPlaying || !musicGain) {
return;
}
const now = ctx.currentTime + 0.08;
const delay = game.isCheck() ? scheduleUrgentMusic(ctx, now, game.isCheckmate()) : scheduleCheerfulMusic(ctx, now);
if (game.isCheckmate()) {
musicTimer = window.setTimeout(stopBackgroundMusic, delay);
return;
}
musicTimer = window.setTimeout(() => scheduleBackgroundBar(ctx), delay);
}
function restartBackgroundMusicBar() {
if (!musicPlaying || !audioContext || !musicGain) {
return;
}
window.clearTimeout(musicTimer);
musicTimer = null;
scheduleBackgroundBar(audioContext);
}
function startBackgroundMusic() {
if (!musicEnabled || (game.isGameOver() && !game.isCheckmate())) {
return;
}
const ctx = createAudioContext();
if (!ctx) {
return;
}
if (ctx.state === "suspended") {
ctx.resume().then(startBackgroundMusic).catch(() => {});
return;
}
if (musicPlaying) {
restartBackgroundMusicBar();
renderMusicButton();
return;
}
const gain = ensureMusicGain(ctx);
const now = ctx.currentTime;
gain.gain.cancelScheduledValues(now);
gain.gain.setValueAtTime(Math.max(0.001, gain.gain.value), now);
gain.gain.exponentialRampToValueAtTime(0.09, now + 0.7);
musicPlaying = true;
scheduleBackgroundBar(ctx);
renderMusicButton();
}
function stopBackgroundMusic() {
window.clearTimeout(musicTimer);
musicTimer = null;
musicPlaying = false;
if (musicGain && audioContext) {
const now = audioContext.currentTime;
musicGain.gain.cancelScheduledValues(now);
musicGain.gain.setValueAtTime(Math.max(0.001, musicGain.gain.value), now);
musicGain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
}
renderMusicButton();
}
function renderMusicButton() {
els.musicBtn.classList.toggle("is-active", musicEnabled);
els.musicBtn.setAttribute("aria-pressed", String(musicEnabled));
setButtonContent(els.musicBtn, "♪", musicEnabled ? t("musicOn") : t("musicOff"));
setButtonContent(els.testMusicBtn, "♪", t("soundTestMusic"));
setButtonContent(els.testEffectsBtn, "♙", t("soundTestEffects"));
setButtonContent(els.testVoiceBtn, "♘", t("soundTestVoice"));
renderSoundStatus();
renderVolumeControls();
}
function renderSoundStatus() {
if (!els.soundStatus) {
return;
}
const ready = audioContext?.state === "running";
els.soundStatus.textContent = ready ? t("soundStatusReady") : t("soundStatusNeedsTap");
els.soundStatus.classList.toggle("is-ready", ready);
}
function renderVolumeControls() {
const controls = [
["music", els.musicVolumeLabel, els.musicVolumeInput, els.musicVolumeValue, "musicVolume"],
["effects", els.effectsVolumeLabel, els.effectsVolumeInput, els.effectsVolumeValue, "effectsVolume"],
["voice", els.voiceVolumeLabel, els.voiceVolumeInput, els.voiceVolumeValue, "voiceVolume"],
];
for (const [key, label, input, value, labelKey] of controls) {
if (!input) {
continue;
}
label.textContent = t(labelKey);
input.value = String(volumeSettings[key]);
value.textContent = `${volumeSettings[key]}%`;
}
}
function setVolumeSetting(key, value) {
if (!(key in volumeSettings)) {
return;
}
volumeSettings = normalizeVolumeSettings({ ...volumeSettings, [key]: value });
saveVolumeSettings();
renderVolumeControls();
const label = t(`${key === "effects" ? "effects" : key}Volume`);
setNotice(t("volumeSaved", { label, value: volumeSettings[key] }));
}
function testSound(channel) {
const ctx = createAudioContext();
if (!ctx) {
setNotice(t("soundStatusNeedsTap"));
return;
}
const play = () => {
const now = ctx.currentTime + 0.03;
if (channel === "music") {
musicEnabled = true;
startBackgroundMusic();
} else if (channel === "voice") {
playPieceVoiceSound(ctx, "n", now);
} else {
playPieceMoveSound(ctx, "n", now);
}
renderSoundStatus();
setNotice(t("soundTestNotice", {
label: channel === "music" ? t("musicVolume") : channel === "voice" ? t("voiceVolume") : t("effectsVolume"),
}));
};
if (ctx.state === "suspended") {
ctx.resume().then(play).catch(() => {
renderSoundStatus();
setNotice(t("soundStatusNeedsTap"));
});
return;
}
play();
}
function playSweepTone(ctx, startFrequency, endFrequency, start, duration, type = "sine", volume = 0.05, channel = "effects") {
const oscillator = ctx.createOscillator();
const gain = ctx.createGain();
const finalVolume = scaleVolume(volume, channel);
oscillator.type = type;
oscillator.frequency.setValueAtTime(startFrequency, start);
oscillator.frequency.exponentialRampToValueAtTime(endFrequency, start + duration);
gain.gain.setValueAtTime(0.001, start);
gain.gain.exponentialRampToValueAtTime(finalVolume, start + 0.018);
gain.gain.exponentialRampToValueAtTime(0.001, start + duration);
oscillator.connect(gain);
gain.connect(ctx.destination);
oscillator.start(start);
oscillator.stop(start + duration + 0.03);
}
function playNoise(ctx, start, duration, frequency = 900, type = "bandpass", volume = 0.03, channel = "effects") {
const sampleRate = ctx.sampleRate;
const buffer = ctx.createBuffer(1, Math.max(1, Math.floor(sampleRate * duration)), sampleRate);
const data = buffer.getChannelData(0);
for (let i = 0; i < data.length; i += 1) {
data[i] = Math.random() * 2 - 1;
}
const source = ctx.createBufferSource();
const filter = ctx.createBiquadFilter();
const gain = ctx.createGain();
const finalVolume = scaleVolume(volume, channel);
source.buffer = buffer;
filter.type = type;
filter.frequency.setValueAtTime(frequency, start);
filter.Q.setValueAtTime(3.5, start);
gain.gain.setValueAtTime(0.001, start);
gain.gain.exponentialRampToValueAtTime(finalVolume, start + 0.012);
gain.gain.exponentialRampToValueAtTime(0.001, start + duration);
source.connect(filter);
filter.connect(gain);
gain.connect(ctx.destination);
source.start(start);
}
function playPawnMove(ctx, now) {
playTone(ctx, 360, now, 0.045, "triangle", 0.032);
playNoise(ctx, now + 0.012, 0.035, 1200, "highpass", 0.015);
playTone(ctx, 260, now + 0.075, 0.055, "sine", 0.028);
playNoise(ctx, now + 0.088, 0.04, 900, "bandpass", 0.014);
}
function playKnightMove(ctx, now) {
playTone(ctx, 180, now, 0.055, "square", 0.032);
playTone(ctx, 145, now + 0.075, 0.055, "square", 0.026);
playSweepTone(ctx, 520, 1240, now + 0.12, 0.18, "sawtooth", 0.036);
playSweepTone(ctx, 1180, 620, now + 0.28, 0.24, "triangle", 0.034);
playNoise(ctx, now + 0.15, 0.18, 2100, "bandpass", 0.012);
}
function playBishopMove(ctx, now) {
playTone(ctx, 392, now, 0.22, "sine", 0.03);
playTone(ctx, 523, now + 0.04, 0.24, "sine", 0.032);
playTone(ctx, 784, now + 0.12, 0.22, "triangle", 0.027);
playNoise(ctx, now + 0.18, 0.16, 1600, "bandpass", 0.01);
}
function playRookMove(ctx, now) {
playSweepTone(ctx, 130, 82, now, 0.26, "sawtooth", 0.045);
playNoise(ctx, now, 0.24, 210, "lowpass", 0.036);
playTone(ctx, 98, now + 0.22, 0.1, "square", 0.032);
playNoise(ctx, now + 0.27, 0.08, 520, "bandpass", 0.018);
}
function playQueenMove(ctx, now) {
playTone(ctx, 659, now, 0.07, "triangle", 0.034);
playTone(ctx, 880, now + 0.065, 0.08, "triangle", 0.038);
playTone(ctx, 1175, now + 0.14, 0.1, "triangle", 0.042);
playTone(ctx, 1568, now + 0.24, 0.12, "sine", 0.03);
playSweepTone(ctx, 1760, 2349, now + 0.32, 0.14, "sine", 0.018);
}
function playKingMove(ctx, now) {
playTone(ctx, 196, now, 0.3, "sine", 0.048);
playTone(ctx, 98, now + 0.04, 0.34, "triangle", 0.034);
playTone(ctx, 294, now + 0.18, 0.16, "sine", 0.022);
playNoise(ctx, now + 0.025, 0.18, 360, "lowpass", 0.018);
}
function playPieceMoveSound(ctx, piece, now) {
const soundByPiece = {
p: playPawnMove,
n: playKnightMove,
b: playBishopMove,
r: playRookMove,
q: playQueenMove,
k: playKingMove,
};
(soundByPiece[piece] ?? playPawnMove)(ctx, now);
}
function playPieceVoiceSound(ctx, piece, now) {
const profile = pieceVoiceProfiles[piece] ?? pieceVoiceProfiles.p;
const baseVolume = musicPlaying ? profile.volume * 0.72 : profile.volume;
profile.notes?.forEach(([frequency, offset, duration], index) => {
playTone(ctx, frequency, now + offset, duration, profile.wave, baseVolume * (1 - index * 0.08), "voice");
if (index % 2 === 0) {
playTone(ctx, frequency * 1.5, now + offset + 0.012, duration * 0.72, "sine", baseVolume * 0.24, "voice");
}
});
profile.sweeps?.forEach(([startFrequency, endFrequency, offset, duration], index) => {
playSweepTone(
ctx,
startFrequency,
endFrequency,
now + offset,
duration,
profile.wave,
baseVolume * (1 - index * 0.12),
"voice",
);
});
if (profile.noise) {
const [frequency, offset, duration] = profile.noise;
playNoise(ctx, now + offset, duration, frequency, frequency < 500 ? "lowpass" : "bandpass", baseVolume * 0.38, "voice");
}
}
function playMoveSound(move) {
const ctx = createAudioContext();
if (!ctx) {
return;
}
const scheduleSound = () => {
const now = ctx.currentTime + 0.02;
playPieceMoveSound(ctx, move.piece, now);
playPieceVoiceSound(ctx, move.piece, now + 0.44);
if (move.captured) {
playNoise(ctx, now + 0.04, 0.12, 650, "bandpass", 0.038);
playTone(ctx, 150, now + 0.055, 0.11, "sawtooth", 0.04);
}
if (move.san === "O-O" || move.san === "O-O-O") {
playTone(ctx, 196, now + 0.18, 0.1, "sine", 0.04);
playTone(ctx, 330, now + 0.28, 0.12, "sine", 0.04);
}
if (move.promotion) {
playTone(ctx, 880, now + 0.18, 0.08, "triangle", 0.055);
playTone(ctx, 1320, now + 0.27, 0.12, "triangle", 0.05);
}
};
if (ctx.state === "suspended") {
ctx.resume().then(scheduleSound).catch(() => {});
return;
}
scheduleSound();
}
function getCheckingPieces(chess = game) {
if (!chess.isCheck()) {
return [];
}
const checkedKing = findKingSquare(chess.turn(), chess);
if (!checkedKing) {
return [];
}
const attackerColor = opposite(chess.turn());
return chess
.attackers(checkedKing, attackerColor)
.map((square) => ({ square, piece: chess.get(square) }))
.filter((attacker) => attacker.piece);
}
function playCheckSound(pieceType = "q", isCheckmate = false, attackerCount = 1, startDelay = 0.02) {
const ctx = createAudioContext();
if (!ctx) {
return;
}
const scheduleSound = () => {
const now = ctx.currentTime + startDelay;
const profile = checkSoundProfiles[attackerCount > 1 ? "double" : pieceType] ?? checkSoundProfiles.q;
for (const [frequency, offset, duration] of profile.notes) {
playTone(ctx, frequency, now + offset, duration, profile.wave, isCheckmate ? 0.08 : 0.06);
}
if (isCheckmate) {
const finalNote = profile.notes.at(-1);
const endAt = now + finalNote[1] + finalNote[2] + 0.08;
playTone(ctx, 220, endAt, 0.34, "sawtooth", 0.045);
playTone(ctx, 165, endAt + 0.18, 0.28, "triangle", 0.035);
}
};
if (ctx.state === "suspended") {
ctx.resume().then(scheduleSound).catch(() => {});
return;
}
scheduleSound();
}
function playPositionSound(startDelay = 0.02) {
if (!game.isCheck()) {
return;
}
const checkingPieces = getCheckingPieces();
const pieceType = checkingPieces[0]?.piece.type ?? "q";
playCheckSound(pieceType, game.isCheckmate(), checkingPieces.length, startDelay);
}
function isAiTurn() {
return aiEnabled && !isGameCenterConnected() && game.turn() !== humanColor && !game.isGameOver();
}
function renderBoard() {
const shownFiles = orientedFiles();
const shownRanks = orientedRanks();
const legalTargets = new Map(legalMoves.map((move) => [move.to, move]));
const checkedKing = game.isCheck() ? findKingSquare(game.turn()) : null;
els.board.innerHTML = "";
for (const rank of shownRanks) {
for (const file of shownFiles) {
const square = `${file}${rank}`;
const piece = game.get(square);
const button = document.createElement("button");
const legalMove = legalTargets.get(square);
const isLastMove = lastMove?.from === square || lastMove?.to === square;
const isTipFrom = tipMove?.from === square;
const isTipTo = tipMove?.to === square;
const isTutorialFrom = tutorialMove?.from === square;
const isTutorialTo = tutorialMove?.to === square;
button.type = "button";
button.className = `square ${squareColor(square)}`;
button.dataset.square = square;
button.setAttribute("aria-label", piece ? getPieceLabel(square, piece) : t("emptySquare", { square }));
if (square === selectedSquare) {
button.classList.add("selected");
}
if (isLastMove) {
button.classList.add("last-move");
}
if (isTipFrom) {
button.classList.add("tip-from");
}
if (isTipTo) {
button.classList.add("tip-to");
}
if (isTutorialFrom) {
button.classList.add("tutorial-from");
}
if (isTutorialTo) {
button.classList.add("tutorial-to");
}
if (legalMove) {
button.classList.add("legal");
if (legalMove.captured) {
button.classList.add("capture");
}
}
if (square === checkedKing) {
button.classList.add("in-check");
}
if (piece) {
button.append(createPieceIcon(piece));
}
if (file === shownFiles[0]) {
const rankLabel = document.createElement("span");
rankLabel.className = "coord rank";
rankLabel.textContent = rank;
button.append(rankLabel);
}
if (rank === shownRanks[shownRanks.length - 1]) {
const fileLabel = document.createElement("span");
fileLabel.className = "coord file";
fileLabel.textContent = file;
button.append(fileLabel);
}
button.addEventListener("pointerdown", (event) => startSquareDrag(event, square));
button.addEventListener("pointermove", updateSquareDrag);
button.addEventListener("pointerup", finishSquareDrag);
button.addEventListener("pointercancel", () => {
dragMoveState = null;
clearDragVisuals();
els.board.classList.remove("is-dragging");
});
button.addEventListener("click", () => handleSquare(square));
els.board.append(button);
}
}
}
function getStatus() {
const turn = game.turn();
const side = sideName(turn);
const winner = sideName(opposite(turn));
const move = game.moveNumber();
if (game.isCheckmate()) {
return {
title: t("checkmateWinTitle", { winner }),
detail: t("checkmateDetail", { move }),
chip: t("checkmateChip"),
};
}
if (game.isStalemate()) {
return { title: t("stalemateTitle"), detail: t("stalemateDetail"), chip: t("draw") };
}
if (game.isThreefoldRepetition()) {
return { title: t("threefoldTitle"), detail: t("threefoldDetail"), chip: t("draw") };
}
if (game.isInsufficientMaterial()) {
return { title: t("insufficientTitle"), detail: t("insufficientDetail"), chip: t("draw") };
}
if (game.isDrawByFiftyMoves()) {
return { title: t("fiftyTitle"), detail: t("fiftyDetail"), chip: t("draw") };
}
if (game.isCheck()) {
return { title: t("checkTitle", { side }), detail: t("checkDetail", { move }), chip: t("checkChip", { side }) };
}
return { title: t("turnTitle", { side }), detail: t("turnDetail", { move }), chip: t("turnChip", { side }) };
}
function renderContinueCard() {
if (!els.continueCard) {
return;
}
const shouldShow = restoredSavedGameAvailable && !continuePromptDismissed && game.history().length > 0 && !game.isGameOver();
els.continueCard.hidden = !shouldShow;
if (!shouldShow) {
return;
}
els.continueTitle.textContent = t("continueGameTitle");
els.continueText.textContent = t("continueGameText", {
move: game.moveNumber(),
side: sideName(game.turn()),
});
els.continueGameBtn.textContent = t("continueGameButton");
}
function currentGameGoal() {
if (aiEnabled && !game.isGameOver()) {
const persona = professionalLeagueModeEnabled
? {
name: professionalLeagueAiName[currentLanguage],
style: currentLanguage === "zh" ? "高于职业水平" : "Above professional",
motto: currentLanguage === "zh" ? "先稳住王，再找反击机会。" : "Keep your king safe, then look for counterplay.",
}
: aiPersonaDetails(aiLevel);
return {
title: t("goalAiTitle", { name: persona.name }),
text: t("goalAiText", { style: persona.style, motto: persona.motto }),
};
}
if (game.isCheck() && !game.isGameOver()) {
return { title: t("goalKingTitle"), text: t("goalKingText") };
}
if (game.history().length <= 10) {
return { title: t("goalOpeningTitle"), text: t("goalOpeningText") };
}
if (game.history().length >= 46 || getCapturedPieces().w.length + getCapturedPieces().b.length >= 16) {
return { title: t("goalEndgameTitle"), text: t("goalEndgameText") };
}
return { title: t("goalTacticsTitle"), text: t("goalTacticsText") };
}
function renderGameGoal() {
if (!els.goalCard) {
return;
}
const goal = currentGameGoal();
els.goalLabel.textContent = t("goalLabel");
els.goalTitle.textContent = goal.title;
els.goalText.textContent = goal.text;
}
function renderStatus() {
const status = getStatus();
els.statusTitle.textContent = status.title;
els.statusDetail.textContent = status.detail;
els.turnChip.textContent = status.chip;
renderContinueCard();
renderGameGoal();
els.tipBtn.disabled =
game.isGameOver() ||
aiThinking ||
isAiTurn() ||
rankedModeEnabled ||
professionalLeagueModeEnabled ||
(isGameCenterConnected() && !canPlayGameCenterMove()) ||
(isLanConnected() && !canPlayLanMove());
els.tutorialBtn.disabled = aiThinking || Boolean(pendingPromotion);
els.undoBtn.disabled =
aiThinking || isLanConnected() || isGameCenterConnected() || rankedModeEnabled || professionalLeagueModeEnabled;
els.fenInput.value = game.fen();
renderMusicButton();
renderAiPanel();
renderLanPanel();
renderPostGameReview();
}
function professionalLeagueLeaderboardEntries() {
return Object.values(accounts)
.filter((account) => account && typeof account === "object")
.map((account) => ({
id: account.id,
name: cleanPlayerDisplayName(account.name || account.id || "Player"),
stats: ensureAccountLeagueStats(account),
}))
.sort((left, right) =>
right.stats.points - left.stats.points ||
right.stats.wins - left.stats.wins ||
right.stats.games - left.stats.games ||
left.name.localeCompare(right.name),
);
}
function renderProfessionalLeaguePanel() {
const account = currentAccount();
const stats = currentLeagueStats();
els.professionalLeagueBtn.classList.toggle("is-active", professionalLeagueModeEnabled);
els.professionalLeagueBtn.setAttribute("aria-pressed", String(professionalLeagueModeEnabled));
els.professionalLeagueBtn.setAttribute("aria-label", t("professionalLeagueAria"));
els.professionalLeagueBtn.disabled = isLanConnected() || isGameCenterConnected() || aiThinking;
setButtonContent(els.professionalLeagueBtn, "♛", t("professionalLeagueMode"));
els.professionalLeagueDetail.textContent = professionalLeagueModeEnabled
? t("professionalLeagueDetailOn", professionalLeagueScores)
: t("professionalLeagueDetailOff", professionalLeagueScores);
els.professionalLeagueLabel.textContent = t("professionalLeagueMode");
els.professionalLeagueTitle.textContent = t("professionalLeagueTitle");
els.professionalLeaguePoints.textContent = String(stats.points);
els.professionalLeagueCurrent.textContent = account
? `${t("professionalLeagueCurrent", { points: stats.points, games: stats.games })} · ${seasonText()}`
: t("professionalLeagueNeedAccount");
els.professionalLeagueLeaderboard.innerHTML = "";
const entries = professionalLeagueLeaderboardEntries();
if (!entries.length) {
const item = document.createElement("li");
item.textContent = t("professionalLeagueLeaderboardEmpty");
els.professionalLeagueLeaderboard.append(item);
return;
}
entries.slice(0, 12).forEach((entry, index) => {
const item = document.createElement("li");
item.classList.toggle("is-current", entry.id === currentAccountId);
item.textContent = t("professionalLeagueLeaderboardRow", {
rank: index + 1,
name: entry.name,
points: entry.stats.points,
record: t("professionalLeagueRecord", {
wins: entry.stats.wins,
draws: entry.stats.draws,
losses: entry.stats.losses,
}),
});
els.professionalLeagueLeaderboard.append(item);
});
}
function renderAiPanel() {
const aiColor = opposite(humanColor);
const humanSide = sideShortName(humanColor);
const aiSide = sideShortName(aiColor);
els.aiTitle.textContent = aiEnabled ? t("playAs", { side: humanSide }) : t("localTwoPlayer");
els.aiBadge.textContent = aiThinking ? t("thinking") : aiEnabled ? t("aiPlays", { side: aiSide }) : t("off");
els.aiBadge.classList.toggle("is-thinking", aiThinking);
els.aiToggleBtn.classList.toggle("is-active", aiEnabled);
els.aiToggleBtn.disabled = isLanConnected() || isGameCenterConnected();
els.playerSideBtn.disabled = isLanConnected() || isGameCenterConnected();
els.rankedModeBtn.classList.toggle("is-active", rankedModeEnabled);
els.rankedModeBtn.setAttribute("aria-pressed", String(rankedModeEnabled));
els.rankedModeBtn.setAttribute("aria-label", t("rankedModeAria"));
els.rankedModeBtn.disabled = isLanConnected() || isGameCenterConnected() || aiThinking;
setButtonContent(els.aiToggleBtn, "AI", aiEnabled ? t("disableAi") : t("enableAi"));
setButtonContent(els.playerSideBtn, humanColor === "w" ? "♙" : "♟", t("playAs", { side: humanSide }));
setButtonContent(els.rankedModeBtn, "★", t("rankedMode"));
renderProfessionalLeaguePanel();
els.aiLevelDetail.textContent = professionalLeagueModeEnabled
? t("professionalLeagueLevelLocked")
: aiLevelDetails(aiLevel).detail;
const persona = professionalLeagueModeEnabled
? {
name: professionalLeagueAiDisplayName(),
style: currentLanguage === "zh" ? "高于职业水平" : "Above professional",
motto: currentLanguage === "zh" ? "联赛局里，我会按冠军标准计算每一步。" : "In league games, I calculate every move at champion standard.",
}
: aiPersonaDetails(aiLevel);
els.aiPersonaName.textContent = persona.name;
els.aiPersonaStyle.textContent = persona.style;
els.aiPersonaMotto.textContent = persona.motto;
els.rankedDetail.textContent = rankedModeEnabled ? t("rankedDetailOn") : t("rankedDetailOff");
for (const button of els.aiLevelButtons) {
const level = Number(button.dataset.aiLevel);
const isActive = professionalLeagueModeEnabled ? level === 6 : level === aiLevel;
const isProfessionalLocked = !professionalLeagueModeEnabled && level === 6 && !isProfessionalAiUnlocked();
const isRankedLocked = rankedGameEligible && game.history().length > 0 && level !== aiLevel;
button.classList.toggle("is-active", isActive);
button.disabled = aiThinking || isGameCenterConnected() || professionalLeagueModeEnabled || isProfessionalLocked || isRankedLocked;
button.setAttribute("aria-pressed", String(isActive));
button.replaceChildren();
const label = document.createElement("span");
label.className = "level-button-label";
label.textContent = aiLevelDetails(level).name;
button.append(label);
if (isProfessionalLocked) {
const lock = document.createElement("span");
lock.className = "level-button-lock";
lock.setAttribute("aria-hidden", "true");
lock.textContent = "🔒";
button.append(lock);
}
button.setAttribute(
"aria-label",
isProfessionalLocked ? t("professionalLocked") : `${t("aiLevel")} ${button.dataset.aiLevel}: ${aiLevelDetails(level).name}`,
);
}
const aiDetail = aiEnabled
? aiThinking
? t("aiThinkingDetail")
: t("aiAutoDetail", { side: sideName(aiColor), level: currentAiDisplayName() })
: t("aiOffDetail");
els.aiDetail.textContent = isProfessionalAiUnlocked()
? aiDetail
: `${aiDetail} ${t("professionalLockedDetail", { count: masterNoHintWinStreak })}`;
}
function formatReviewMove(entry) {
if (!entry) {
return t("reviewNoMistake");
}
return t("reviewMoveText", {
move: Math.floor(entry.index / 2) + 1,
san: entry.san,
from: entry.from,
to: entry.to,
});
}
function reviewGradeFromGap(gap) {
if (gap <= 35) {
return "A";
}
if (gap <= 90) {
return "B";
}
if (gap <= 170) {
return "C";
}
return "D";
}
function reviewPhaseScores(entries) {
const phases = [
{ key: "opening", maxIndex: 12, entries: [] },
{ key: "middle", maxIndex: 36, entries: [] },
{ key: "endgame", maxIndex: Infinity, entries: [] },
];
for (const entry of entries) {
const phase = phases.find((item) => entry.index < item.maxIndex) ?? phases.at(-1);
phase.entries.push(entry);
}
return Object.fromEntries(
phases.map((phase) => {
if (!phase.entries.length) {
return [phase.key, "B"];
}
const averageGap = phase.entries.reduce((sum, entry) => sum + Math.max(0, entry.gap), 0) / phase.entries.length;
return [phase.key, reviewGradeFromGap(averageGap)];
}),
);
}
function explainMistake(entry) {
if (!entry) {
return t("reviewNoMistake");
}
if (entry.allowsCheck) {
return t("reviewMistakeReasonCheck");
}
if (entry.bestMove?.captured || entry.captured || entry.gap > 180) {
return t("reviewMistakeReasonCapture");
}
return t("reviewMistakeReasonCenter");
}
function reviewPracticeAdvice(entry) {
if (!entry) {
return t("reviewNextPracticeCenter");
}
if (entry.allowsCheck) {
return t("reviewNextPracticeCheck");
}
if (entry.bestMove?.captured || entry.captured || entry.gap > 180) {
return t("reviewNextPracticeCapture");
}
return t("reviewNextPracticeCenter");
}
function analyzePostGameMoves() {
const history = game.history({ verbose: true });
const replay = new Chess();
let keyMove = null;
let bestMove = null;
let biggestMistake = null;
const humanEntries = [];
history.forEach((move, index) => {
if (move.color === humanColor) {
const bestAlternative = chooseBestMove(replay);
const playedScore = scoreMove(move, replay);
const bestScore = bestAlternative ? scoreMove(bestAlternative, replay) : playedScore;
const preview = new Chess(replay.fen());
preview.move({ from: move.from, to: move.to, promotion: move.promotion });
const allowsCheck = preview.moves({ verbose: true }).some((reply) => {
const next = new Chess(preview.fen());
next.move({ from: reply.from, to: reply.to, promotion: reply.promotion });
return next.isCheck() && next.turn() === humanColor;
});
const entry = {
...move,
index,
score: playedScore,
gap: bestScore - playedScore,
bestMove: bestAlternative ? { ...bestAlternative, index } : null,
allowsCheck,
};
humanEntries.push(entry);
if (!bestMove || entry.score > bestMove.score) {
bestMove = entry;
}
if (entry.gap > 90 && (!biggestMistake || entry.gap > biggestMistake.gap)) {
biggestMistake = entry;
}
}
replay.move({ from: move.from, to: move.to, promotion: move.promotion });
if (replay.isCheckmate() || replay.isCheck() || move.captured || move.promotion || index === history.length - 1) {
keyMove = { ...move, index };
}
});
return { keyMove, bestMove, biggestMistake, phaseScores: reviewPhaseScores(humanEntries) };
}
function postGamePracticeStep(outcome, analysis) {
if (outcome === "loss" && game.isCheckmate()) {
return 4;
}
if (outcome === "loss" && analysis.biggestMistake) {
return 5;
}
if (outcome === "win") {
return 5;
}
return 6;
}
function buildPostGameReview(resultColor) {
const outcome = humanResultOutcome(resultColor);
const analysis = analyzePostGameMoves();
const summaryKey = outcome === "win" ? "reviewSummaryWin" : outcome === "loss" ? "reviewSummaryLoss" : "reviewSummaryDraw";
const whyKey = outcome === "win" ? "reviewWhyWin" : outcome === "loss" ? "reviewWhyLoss" : "reviewWhyDraw";
const chipKey = outcome === "win" ? "reviewChipWin" : outcome === "loss" ? "reviewChipLoss" : "reviewChipDraw";
return {
chip: t(chipKey),
summary: t(summaryKey),
items: [
{ title: t("reviewKeyMove"), detail: formatReviewMove(analysis.keyMove) },
{ title: t("reviewBestMove"), detail: formatReviewMove(analysis.bestMove) },
{ title: t("reviewMistake"), detail: formatReviewMove(analysis.biggestMistake) },
{ title: t("reviewBetterMove"), detail: formatReviewMove(analysis.biggestMistake?.bestMove) },
{ title: t("reviewMistakeReason"), detail: explainMistake(analysis.biggestMistake) },
{
title: t("reviewPhaseScore"),
detail: t("reviewPhaseScoreText", {
opening: analysis.phaseScores.opening,
middle: analysis.phaseScores.middle,
endgame: analysis.phaseScores.endgame,
}),
},
{ title: t("reviewNextPractice"), detail: reviewPracticeAdvice(analysis.biggestMistake) },
{ title: t("reviewWhy"), detail: t(whyKey) },
],
practiceIndex: postGamePracticeStep(outcome, analysis),
};
}
function resultSettlementTitleKey(outcome) {
if (outcome === "win") {
return "resultSettlementWin";
}
if (outcome === "loss") {
return "resultSettlementLoss";
}
return "resultSettlementDraw";
}
function buildResultSettlement() {
if (!recordedResult) {
return null;
}
const outcome = humanResultOutcome(recordedResult);
const totalDelta = (Number(recordedRankDelta) || 0) + (Number(recordedLeagueDelta) || 0);
const rankMeta = t("resultSettlementRank", { rank: getRankPoints() });
const leagueMeta = t("resultSettlementLeague", { league: currentLeagueStats().points });
const badgeMeta = t("resultSettlementBadges", {
count: achievementUnlockedCount(),
total: achievementCatalog.length,
});
const practice = postGameReview?.items?.find((item) => item.title === t("reviewNextPractice"))?.detail
|| t("resultSettlementRealBoard");
return {
outcome,
title: t(resultSettlementTitleKey(outcome)),
score: totalDelta ? signedPoints(totalDelta) : outcome === "draw" ? "=" : outcome === "win" ? "+" : "!",
meta: `${rankMeta} · ${leagueMeta} · ${badgeMeta}`,
practice: t("resultSettlementPractice", { advice: practice }),
};
}
function renderResultSettlementCard() {
if (!els.resultSettlementCard) {
return;
}
const settlement = buildResultSettlement();
if (!settlement || !game.isGameOver()) {
els.resultSettlementCard.hidden = true;
return;
}
els.resultSettlementCard.hidden = false;
els.resultSettlementCard.dataset.outcome = settlement.outcome;
els.resultSettlementLabel.textContent = t("resultSettlementLabel");
els.resultSettlementTitle.textContent = settlement.title;
els.resultSettlementScore.textContent = settlement.score;
els.resultSettlementMeta.textContent = settlement.meta;
els.resultSettlementPractice.textContent = settlement.practice;
}
function renderPostGameReview() {
if (!els.postGameReviewPanel) {
return;
}
if (recordedResult && game.isGameOver()) {
postGameReview = buildPostGameReview(recordedResult);
}
if (!postGameReview || !game.isGameOver()) {
els.postGameReviewPanel.hidden = true;
if (els.resultSettlementCard) {
els.resultSettlementCard.hidden = true;
}
return;
}
els.postGameReviewPanel.hidden = false;
els.reviewLabel.textContent = t("reviewLabel");
els.reviewTitle.textContent = t("reviewTitle");
els.reviewChip.textContent = postGameReview.chip;
els.reviewSummary.textContent = postGameReview.summary;
renderResultSettlementCard();
if (els.rankedSettlementCard) {
if (lastRankedSettlement) {
els.rankedSettlementCard.hidden = false;
els.rankedSettlementCard.classList.toggle("is-invalid", !lastRankedSettlement.valid);
els.rankedSettlementLabel.textContent = t("rankedSettlementLabel");
els.rankedSettlementTitle.textContent = t(
lastRankedSettlement.valid ? "rankedSettlementValid" : "rankedSettlementInvalid",
);
els.rankedSettlementDelta.textContent = t("rankedSettlementDelta", {
result: rankedOutcomeName(lastRankedSettlement.outcome),
points: signedPoints(lastRankedSettlement.points ?? 0),
});
els.rankedSettlementReason.textContent = t(lastRankedSettlement.reasonKey || "rankedInvalidGeneric");
} else {
els.rankedSettlementCard.hidden = true;
}
}
if (els.reviewPracticeBtn) {
els.reviewPracticeBtn.textContent = t("reviewPractice");
}
els.reviewList.innerHTML = "";
for (const item of postGameReview.items) {
const row = document.createElement("article");
row.className = "review-item";
const title = document.createElement("strong");
title.textContent = item.title;
const detail = document.createElement("p");
detail.textContent = item.detail;
row.append(title, detail);
els.reviewList.append(row);
}
}
function getCapturedPieces() {
const capturedBy = { w: [], b: [] };
for (const move of game.history({ verbose: true })) {
if (move.captured) {
capturedBy[move.color].push({ type: move.captured, color: opposite(move.color) });
}
}
return capturedBy;
}
function renderCaptured() {
const capturedBy = getCapturedPieces();
renderCapturedRow(els.whiteCaptured, capturedBy.w);
renderCapturedRow(els.blackCaptured, capturedBy.b);
els.whiteScore.textContent = capturedBy.w.reduce((sum, piece) => sum + pieceValues[piece.type], 0);
els.blackScore.textContent = capturedBy.b.reduce((sum, piece) => sum + pieceValues[piece.type], 0);
}
function renderRank() {
const rankState = getRankState();
els.rankPanel.dataset.rankLevel = String(rankState.level);
els.rankTitle.textContent = rankState.rank.name;
els.rankMedalSymbol.textContent = rankState.rank.medal;
els.rankSummaryMedal.textContent = rankState.rank.medal;
els.rankSummaryText.textContent = rankState.rank.name;
els.rankSummaryBtn.setAttribute("aria-label", t("rankSummaryAria"));
els.rankPoints.textContent = rankState.points;
els.rankProgress.style.width = `${rankState.progress}%`;
els.rankProgressBar.setAttribute("aria-valuenow", String(rankState.progress));
els.rankProgressText.textContent = rankState.nextRank
? t("rankProgressText", { points: rankState.pointsToNext, rank: rankState.nextRank.name })
: t("rankMaxText");
els.rankRules.textContent = officialRankProfile
? `${rankRulesText()} ${t("officialRankSynced", { points: officialRankProfile.points, rate: officialRankProfile.winRate })}`
: `${rankRulesText()} ${t("officialRankLocal")}`;
}
function renderMatchScore() {
const capturedBy = getCapturedPieces();
const whiteMaterial = capturedBy.w.reduce((sum, piece) => sum + pieceValues[piece.type], 0);
const blackMaterial = capturedBy.b.reduce((sum, piece) => sum + pieceValues[piece.type], 0);
const materialDiff = whiteMaterial - blackMaterial;
els.whiteWins.textContent = matchScore.w;
els.draws.textContent = matchScore.d;
els.blackWins.textContent = matchScore.b;
renderFriendMode();
if (materialDiff > 0) {
els.materialLead.textContent = t("materialLead", { side: t("white"), amount: materialDiff });
} else if (materialDiff < 0) {
els.materialLead.textContent = t("materialLead", { side: t("black"), amount: Math.abs(materialDiff) });
} else {
els.materialLead.textContent = t("materialEven");
}
renderRank();
renderProfile();
}
function updateMasterNoHintChallenge(resultColor, { byLan = false } = {}) {
if (byLan || !aiEnabled || aiLevel !== 5) {
return "";
}
if (resultColor === humanColor && !currentGameUsedTip) {
masterNoHintWinStreak = Math.min(12, masterNoHintWinStreak + 1);
saveMasterNoHintWinStreak();
if (masterNoHintWinStreak >= 12 && !hasGeniusYouthBadge()) {
unlockAchievement("genius-youth");
renderAiPanel();
return t("professionalUnlocked");
}
return t("geniusStreakProgress", { count: masterNoHintWinStreak });
}
masterNoHintWinStreak = 0;
saveMasterNoHintWinStreak();
return currentGameUsedTip ? t("geniusStreakHintReset") : t("geniusStreakReset");
}
function recordGameResult({ byAi = false, byLan = false, byGameCenter = false } = {}) {
if (recordedResult || !game.isGameOver()) {
return "";
}
if (game.isCheckmate()) {
recordedResult = opposite(game.turn());
} else {
recordedResult = "d";
}
const rankedScored = isAiRankScoredGame({ byLan, byGameCenter });
updateMatchScore(recordedResult, 1);
updateFriendRecord(recordedResult, 1);
const requestedRankDelta = getAiRankDelta(recordedResult, { byLan, byGameCenter });
recordedRankDelta = requestedRankDelta ? updateRankPoints(requestedRankDelta) : 0;
const professionalLeagueNotice = recordProfessionalLeagueResult(recordedResult, { byLan, byGameCenter });
lastRankedSettlement = buildRankedSettlement(recordedResult, {
byLan,
byGameCenter,
rankedScored,
requestedRankDelta,
appliedRankDelta: recordedRankDelta,
});
const rankedVerificationPayload = rankedScored ? rankVerificationPayload(recordedResult, { byLan, byGameCenter }) : null;
const rankedVerificationPgn = rankedVerificationPayload?.pgn;
recordedProfileOutcome = profileOutcomeForResult(recordedResult, { byLan });
updateProfileGameResult(recordedProfileOutcome, 1);
postGameReview = buildPostGameReview(recordedResult);
savePostGameMistakeEntry(recordedResult, postGameReview);
if (rankedScored) {
updateDailyTask("ranked-complete", 1);
}
if (!byLan && !byGameCenter && aiEnabled && recordedResult === humanColor && !currentGameUsedTip) {
updateDailyTask("no-hint-ai-win", 1);
}
const challengeNotice = updateMasterNoHintChallenge(recordedResult, { byLan });
const resultNotices = [];
if (rankedScored) {
resultNotices.push(
requestedRankDelta < 0 && recordedRankDelta === 0
? t("rankScoreFloorNotice")
: t("rankScoreNotice", { points: signedPoints(recordedRankDelta) }),
);
} else if (!byLan && !byGameCenter) {
resultNotices.push(t("rankNoAiScoreNotice"));
}
if (challengeNotice) {
resultNotices.push(challengeNotice);
}
if (professionalLeagueNotice) {
resultNotices.push(professionalLeagueNotice);
}
if (!byLan && !byGameCenter) {
if (recordedResult === "d") {
unlockAchievement("peace-maker");
} else if (!byAi || recordedResult === humanColor) {
unlockAchievement("first-victory");
}
if (aiEnabled && recordedResult === humanColor) {
unlockAchievement("ai-conqueror");
}
}
renderMatchScore();
renderProfessionalLeaguePanel();
if (rankedVerificationPayload && rankedVerificationPgn) {
verifyRankedSettlement(rankedVerificationPayload, rankedVerificationPgn);
}
if (game.isCheckmate()) {
startBackgroundMusic();
restartBackgroundMusicBar();
} else {
stopBackgroundMusic();
}
return resultNotices.join(" · ");
}
function unrecordGameResult() {
if (!recordedResult) {
return;
}
updateMatchScore(recordedResult, -1);
updateFriendRecord(recordedResult, -1);
if (recordedRankDelta) {
updateRankPoints(-recordedRankDelta);
}
unrecordProfessionalLeagueResult();
updateProfileGameResult(recordedProfileOutcome || profileOutcomeForResult(recordedResult), -1);
recordedProfileOutcome = null;
recordedResult = null;
recordedRankDelta = 0;
clearRecordedLeagueResult();
postGameReview = null;
lastRankedSettlement = null;
renderMatchScore();
}
function renderCapturedRow(container, pieces) {
container.innerHTML = "";
pieces
.sort((a, b) => pieceValues[b.type] - pieceValues[a.type])
.forEach((piece) => {
container.append(createPieceIcon(piece, "mini-piece"));
});
}
function renderMoveList() {
const moves = game.history({ verbose: true });
els.moveList.innerHTML = "";
if (!moves.length) {
const empty = document.createElement("p");
empty.className = "empty-moves";
empty.textContent = t("opening");
els.moveList.append(empty);
return;
}
for (let i = 0; i < moves.length; i += 2) {
const row = document.createElement("div");
row.className = "move-row";
const number = document.createElement("span");
number.className = "move-number";
number.textContent = `${Math.floor(i / 2) + 1}.`;
const whiteMove = document.createElement("span");
whiteMove.textContent = moves[i]?.san ?? "";
if (i === moves.length - 1) {
whiteMove.classList.add("latest");
}
const blackMove = document.createElement("span");
blackMove.textContent = moves[i + 1]?.san ?? "";
if (i + 1 === moves.length - 1) {
blackMove.classList.add("latest");
}
row.append(number, whiteMove, blackMove);
els.moveList.append(row);
}
els.moveList.scrollTop = els.moveList.scrollHeight;
}
function render() {
renderLanguage();
renderRank();
renderProfile();
renderLeaderboard();
renderBoard();
renderStatus();
renderCaptured();
renderMatchScore();
renderMoveList();
}
function clearSelection({ keepTip = false } = {}) {
selectedSquare = null;
legalMoves = [];
if (!keepTip) {
tipMove = null;
}
}
function selectSquare(square) {
tipMove = null;
selectedSquare = square;
legalMoves = game.moves({ square, verbose: true });
renderBoard();
}
function explainMoveBlock({ wakeAi = false } = {}) {
if (pendingPromotion) {
setNotice(t("moveBlockedPromotion"));
return true;
}
if (game.isGameOver()) {
setNotice(t("gameAlreadyOver"));
return true;
}
if (aiThinking) {
setNotice(t("aiThinking"));
renderStatus();
return true;
}
if (isAiTurn()) {
if (wakeAi) {
scheduleAiMove();
} else {
renderStatus();
}
setNotice(t("aiTurnWake"));
return true;
}
if (isGameCenterConnected() && !canPlayGameCenterMove()) {
clearSelection();
renderBoard();
setNotice(t("gameCenterStatusWaiting"));
return true;
}
if (isLanConnected() && lanState.color === "s") {
setNotice(t("lanSpectatorNotice"));
return true;
}
if (isLanConnected() && !canPlayLanMove()) {
clearSelection();
renderBoard();
setNotice(t("lanWaitTurn"));
return true;
}
return false;
}
function handleSquare(square) {
if (suppressNextSquareClick) {
suppressNextSquareClick = false;
return;
}
if (explainMoveBlock({ wakeAi: true })) {
return;
}
const piece = game.get(square);
const targetMoves = legalMoves.filter((move) => move.to === square);
if (selectedSquare && targetMoves.length) {
const promotionMoves = targetMoves.filter((move) => move.promotion);
if (promotionMoves.length) {
openPromotion(selectedSquare, square, promotionMoves.map((move) => move.promotion));
return;
}
makeMove({ from: selectedSquare, to: square });
return;
}
if (
piece?.color === game.turn() &&
(!isLanConnected() || piece.color === lanState.color) &&
(!isGameCenterConnected() || piece.color === gameCenterState.color)
) {
selectSquare(square);
return;
}
clearSelection();
renderBoard();
}
function canStartDragFrom(square) {
if (pendingPromotion || game.isGameOver() || aiThinking || isAiTurn()) {
return false;
}
if (isLanConnected() && !canPlayLanMove()) {
return false;
}
if (isGameCenterConnected() && !canPlayGameCenterMove()) {
return false;
}
const piece = game.get(square);
return Boolean(
piece &&
piece.color === game.turn() &&
(!isLanConnected() || piece.color === lanState.color) &&
(!isGameCenterConnected() || piece.color === gameCenterState.color),
);
}
function moveDragGhost(event) {
if (!dragGhost) {
return;
}
dragGhost.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
}
function setDragTarget(square) {
if (square === dragTargetSquare) {
return;
}
if (dragTargetSquare) {
els.board.querySelector(`[data-square="${dragTargetSquare}"]`)?.classList.remove("drag-target");
}
dragTargetSquare = square;
if (dragTargetSquare) {
els.board.querySelector(`[data-square="${dragTargetSquare}"]`)?.classList.add("drag-target");
}
}
function clearDragVisuals() {
setDragTarget("");
dragGhost?.remove();
dragGhost = null;
}
function createDragGhost(square, event) {
const piece = game.get(square);
if (!piece) {
return;
}
clearDragVisuals();
dragGhost = document.createElement("div");
dragGhost.className = "drag-ghost";
dragGhost.append(createPieceIcon(piece));
document.body.append(dragGhost);
moveDragGhost(event);
}
function startSquareDrag(event, square) {
if (event.pointerType === "mouse" && event.button !== 0) {
return;
}
if (explainMoveBlock({ wakeAi: true })) {
return;
}
if (!canStartDragFrom(square)) {
return;
}
dragMoveState = { from: square, pointerId: event.pointerId };
els.board.classList.add("is-dragging");
createDragGhost(square, event);
selectSquare(square);
nativeHaptic("move");
event.currentTarget.setPointerCapture?.(event.pointerId);
setNotice(t("dragReady"));
event.preventDefault();
}
function updateSquareDrag(event) {
if (!dragMoveState || dragMoveState.pointerId !== event.pointerId) {
return;
}
moveDragGhost(event);
const target = document.elementFromPoint(event.clientX, event.clientY)?.closest("[data-square]");
const square = target?.dataset.square ?? "";
const isLegalTarget = legalMoves.some((move) => move.to === square);
setDragTarget(isLegalTarget ? square : "");
event.preventDefault();
}
function finishSquareDrag(event) {
if (!dragMoveState || dragMoveState.pointerId !== event.pointerId) {
return;
}
const target = document.elementFromPoint(event.clientX, event.clientY)?.closest("[data-square]");
const targetSquare = target?.dataset.square ?? "";
const from = dragMoveState.from;
dragMoveState = null;
clearDragVisuals();
els.board.classList.remove("is-dragging");
if (!targetSquare || targetSquare === from) {
return;
}
const targetMoves = legalMoves.filter((move) => move.to === targetSquare);
if (!targetMoves.length) {
suppressNextSquareClick = true;
target?.classList.add("drag-invalid");
window.setTimeout(() => target?.classList.remove("drag-invalid"), 220);
nativeHaptic("warning");
setNotice(t("dragInvalid"));
clearSelection();
window.setTimeout(renderBoard, 220);
return;
}
const promotionMoves = targetMoves.filter((move) => move.promotion);
suppressNextSquareClick = true;
if (promotionMoves.length) {
openPromotion(from, targetSquare, promotionMoves.map((move) => move.promotion));
return;
}
makeMove({ from, to: targetSquare });
}
function makeMove(move, { byAi = false, byLan = false, byGameCenter = false } = {}) {
try {
const result = game.move(move);
restoredSavedGameAvailable = false;
continuePromptDismissed = true;
lastMove = { from: result.from, to: result.to };
clearSelection();
closePromotion();
render();
playMoveSound(result);
playPositionSound(0.22);
nativeHaptic(game.isGameOver() ? "result" : "move");
if (!byAi && !byLan && !byGameCenter) {
trackProfileMove(result);
trackMoveAchievements(result);
}
const challengeNotice = recordGameResult({ byAi, byLan, byGameCenter });
saveCurrentGame();
startBackgroundMusic();
if (!byAi && !byLan && !byGameCenter && isLanConnected()) {
sendLanMove(result);
} else if (!byAi && !byLan && !byGameCenter && isGameCenterConnected()) {
sendGameCenterMove(result);
} else if (!byAi && !byLan && !byGameCenter) {
scheduleAiMove();
}
const notice = moveNotice(result, { byAi, byLan });
setNotice(challengeNotice ? `${notice} · ${challengeNotice}` : notice);
return result;
} catch (error) {
if (byAi) {
aiThinking = false;
renderStatus();
}
clearSelection();
closePromotion();
renderBoard();
setNotice(t("invalidMove"));
return null;
}
}
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
preview.move({
from: move.from,
to: move.to,
promotion: move.promotion,
});
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
score += centerScores[move.to] ?? 0;
return score;
}
function scoreMove(move, chess = game) {
const perspective = move.color;
const preview = new Chess(chess.fen());
preview.move({
from: move.from,
to: move.to,
promotion: move.promotion,
});
let score = evaluateMaterial(preview, perspective) * 0.25;
if (preview.isCheckmate()) {
score += 100000;
} else if (preview.isCheck()) {
score += 1200;
}
if (move.captured) {
score += pieceValues[move.captured] * 130 - pieceValues[move.piece] * 14;
}
if (move.promotion) {
score += 900 + pieceValues[move.promotion] * 25;
}
if (move.san === "O-O" || move.san === "O-O-O") {
score += 55;
}
if (move.piece === "n" || move.piece === "b") {
const startRank = move.color === "w" ? "1" : "8";
if (move.from.endsWith(startRank)) {
score += 30;
}
}
score += centerScores[move.to] ?? 0;
score -= preview.moves().length * 2;
const opponentBestReply = preview
.moves({ verbose: true })
.map((reply) => ({ reply, score: scoreMoveWithoutReply(reply, preview) }))
.sort((a, b) => b.score - a.score)[0];
if (opponentBestReply?.score > 70000) {
score -= 90000;
} else if (opponentBestReply?.reply.captured) {
score -= pieceValues[opponentBestReply.reply.captured] * 45;
}
score += Math.random() * 0.01;
return score;
}
function chooseBestMove(chess = game) {
const moves = chess.moves({ verbose: true });
if (!moves.length) {
return null;
}
return moves
.map((move) => ({ move, score: scoreMove(move, chess) }))
.sort((a, b) => b.score - a.score)[0].move;
}
function pickRandom(items) {
return items[Math.floor(Math.random() * items.length)];
}
function pickFromTop(scoredMoves, count) {
return pickRandom(scoredMoves.slice(0, Math.max(1, Math.min(count, scoredMoves.length)))).move;
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
score += chess.turn() === perspective ? -90 : 90;
}
const mobility = chess.moves().length;
score += chess.turn() === perspective ? mobility * 2 : -mobility * 2;
return score;
}
function orderedMoves(chess) {
return chess
.moves({ verbose: true })
.map((move) => ({ move, score: scoreMoveWithoutReply(move, chess) }))
.sort((a, b) => b.score - a.score);
}
function minimax(chess, depth, alpha, beta, perspective) {
if (depth === 0 || chess.isGameOver()) {
return evaluatePosition(chess, perspective);
}
const maximizing = chess.turn() === perspective;
const moves = orderedMoves(chess).slice(0, depth > 1 ? 18 : 32);
if (maximizing) {
let best = -Infinity;
for (const { move } of moves) {
const next = new Chess(chess.fen());
next.move({ from: move.from, to: move.to, promotion: move.promotion });
best = Math.max(best, minimax(next, depth - 1, alpha, beta, perspective));
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
best = Math.min(best, minimax(next, depth - 1, alpha, beta, perspective));
beta = Math.min(beta, best);
if (beta <= alpha) {
break;
}
}
return best;
}
function recentCheckingMovesBySide(chess, color, limit = 4) {
return chess
.history({ verbose: true })
.slice(-limit * 2)
.filter((move) => move.color === color && /[+#]/.test(move.san)).length;
}
function isUsefulCheck(move, preview) {
return Boolean(
preview.isCheckmate() ||
move.captured ||
move.promotion ||
preview.moves().length <= 3
);
}
function quietCheckPenalty(move, chess, preview, basePenalty) {
if (!preview.isCheck() || isUsefulCheck(move, preview)) {
return 0;
}
const recentChecks = recentCheckingMovesBySide(chess, move.color);
return basePenalty + recentChecks * 180;
}
function aiStyleBonus(move, chess, style = "balanced") {
if (style === "balanced") {
return 0;
}
const preview = new Chess(chess.fen());
preview.move({ from: move.from, to: move.to, promotion: move.promotion });
let bonus = 0;
if (style === "attacking") {
bonus += preview.isCheck() && isUsefulCheck(move, preview) ? 220 : 0;
bonus -= quietCheckPenalty(move, chess, preview, 120);
bonus += move.captured ? pieceValues[move.captured] * 38 : 0;
bonus += move.promotion ? 180 : 0;
bonus += centerScores[move.to] ?? 0;
}
if (style === "pressure") {
bonus += preview.isCheck() && isUsefulCheck(move, preview) ? 150 : 0;
bonus -= quietCheckPenalty(move, chess, preview, 170);
bonus += move.captured ? pieceValues[move.captured] * 22 : 0;
bonus += Math.max(0, 30 - preview.moves().length) * 5;
}
if (style === "professional") {
bonus += preview.isCheckmate() ? 5000 : 0;
bonus += preview.isCheck() && isUsefulCheck(move, preview) ? 90 : 0;
bonus -= quietCheckPenalty(move, chess, preview, 240);
bonus += move.captured ? pieceValues[move.captured] * 12 : 0;
bonus -= preview.moves({ verbose: true }).some((reply) => reply.to === move.to && reply.captured === move.piece)
? pieceValues[move.piece] * 40
: 0;
}
return bonus;
}
function chooseSearchMove(
chess,
depth,
{ randomJitter = 0.01, candidateLimit = Infinity, topChoices = 1, style = "balanced" } = {},
) {
const perspective = chess.turn();
const moves = orderedMoves(chess);
if (!moves.length) {
return null;
}
const limit = Math.max(1, Math.min(candidateLimit, moves.length));
const searchedMoves = moves
.slice(0, limit)
.map(({ move }, index) => {
const next = new Chess(chess.fen());
next.move({ from: move.from, to: move.to, promotion: move.promotion });
return {
move,
score:
minimax(next, depth - 1, -Infinity, Infinity, perspective) +
aiStyleBonus(move, chess, style) +
(moves.length - index) * 0.002 +
Math.random() * randomJitter,
};
})
.sort((a, b) => b.score - a.score);
return pickRandom(searchedMoves.slice(0, Math.max(1, Math.min(topChoices, searchedMoves.length)))).move;
}
function chooseAiMove(chess = game) {
const moves = chess.moves({ verbose: true });
if (!moves.length) {
return null;
}
if (aiLevel === 1) {
return Math.random() < 0.75 ? pickRandom(moves) : pickFromTop(orderedMoves(chess), 8);
}
const scoredMoves = moves
.map((move) => ({ move, score: scoreMove(move, chess) }))
.sort((a, b) => b.score - a.score);
if (aiLevel === 2) {
return pickFromTop(scoredMoves, Math.ceil(scoredMoves.length * 0.55));
}
if (aiLevel === 3) {
return chooseSearchMove(chess, 2, { randomJitter: 1.2, candidateLimit: 14, topChoices: 1 });
}
if (aiLevel === 4) {
return chooseSearchMove(chess, moves.length <= 24 ? 3 : 2, {
randomJitter: 0.03,
candidateLimit: 20,
style: "attacking",
});
}
if (aiLevel === 6) {
return chooseSearchMove(chess, moves.length <= 14 ? 4 : 3, {
randomJitter: 0,
candidateLimit: 26,
style: "professional",
});
}
return chooseSearchMove(chess, moves.length <= 22 ? 3 : 2, {
randomJitter: 0.005,
candidateLimit: 22,
style: "pressure",
});
}
function canUseProfessionalAiWorker() {
return typeof Worker !== "undefined" && window.location.protocol !== "file:";
}
function getProfessionalAiWorker() {
if (!canUseProfessionalAiWorker()) {
return null;
}
if (!professionalAiWorker) {
professionalAiWorker = new Worker("./engine-worker.js", { type: "module" });
}
return professionalAiWorker;
}
function chooseProfessionalAiMove(chess = game) {
const worker = getProfessionalAiWorker();
if (!worker) {
return Promise.resolve(chooseSearchMove(chess, chess.moves().length <= 14 ? 4 : 3, {
randomJitter: 0,
candidateLimit: 26,
style: "professional",
}));
}
const id = `${Date.now()}-${professionalAiRequestId += 1}`;
const depth = chess.moves().length <= 14 ? 5 : 4;
return new Promise((resolve) => {
const timeout = window.setTimeout(() => {
worker.removeEventListener("message", handleMessage);
resolve(chooseSearchMove(chess, chess.moves().length <= 14 ? 4 : 3, {
randomJitter: 0,
candidateLimit: 26,
style: "professional",
}));
}, 5200);
function handleMessage(event) {
if (event.data?.id !== id) {
return;
}
window.clearTimeout(timeout);
worker.removeEventListener("message", handleMessage);
resolve(event.data.ok ? event.data.move : chooseSearchMove(chess, chess.moves().length <= 14 ? 4 : 3, {
randomJitter: 0,
candidateLimit: 26,
style: "professional",
}));
}
worker.addEventListener("message", handleMessage);
worker.postMessage({ id, fen: chess.fen(), depth, timeLimit: 4500 });
});
}
function chooseProfessionalLeagueAiMove(chess = game) {
const worker = getProfessionalAiWorker();
const fallbackDepth = chess.moves().length <= 14 ? 5 : 4;
const fallbackMove = () => chooseSearchMove(chess, fallbackDepth, {
randomJitter: 0,
candidateLimit: 32,
style: "professional",
});
if (!worker) {
return Promise.resolve(fallbackMove());
}
const id = `${Date.now()}-${professionalAiRequestId += 1}`;
const depth = chess.moves().length <= 14 ? 6 : 5;
return new Promise((resolve) => {
const timeout = window.setTimeout(() => {
worker.removeEventListener("message", handleMessage);
resolve(fallbackMove());
}, 7200);
function handleMessage(event) {
if (event.data?.id !== id) {
return;
}
window.clearTimeout(timeout);
worker.removeEventListener("message", handleMessage);
resolve(event.data.ok ? event.data.move : fallbackMove());
}
worker.addEventListener("message", handleMessage);
worker.postMessage({ id, fen: chess.fen(), depth, timeLimit: 6600 });
});
}
function chooseAiMoveAsync(chess = game) {
if (professionalLeagueModeEnabled) {
return chooseProfessionalLeagueAiMove(chess);
}
if (aiLevel === 6) {
return chooseProfessionalAiMove(chess);
}
return Promise.resolve(chooseAiMove(chess));
}
function showTip() {
if (pendingPromotion || game.isGameOver() || aiThinking || isAiTurn()) {
return;
}
if (rankedModeEnabled) {
setNotice(t("rankedNoHint"));
return;
}
if (professionalLeagueModeEnabled) {
setNotice(t("professionalLeagueNoHint"));
return;
}
const move = chooseBestMove();
if (!move) {
setNotice(t("noTip"));
return;
}
currentGameUsedTip = true;
tipMove = { from: move.from, to: move.to, san: move.san };
selectedSquare = move.from;
legalMoves = game.moves({ square: move.from, verbose: true });
unlockAchievement("hint-seeker");
setNotice(t("tipNotice", { from: move.from, to: move.to, san: move.san }));
renderBoard();
}
function renderTutorialStep() {
const steps = currentTutorialSteps();
const step = steps[tutorialIndex];
const progress = `${((tutorialIndex + 1) / steps.length) * 100}%`;
const lessonDone = completedTutorialLessons.size;
const stepStars = completedTutorialLessons.has(tutorialIndex) ? "★★★" : tutorialIndex < lessonDone ? "★★☆" : "★☆☆";
tutorialMove = step.highlight ?? null;
els.tutorialStepLabel.textContent = `${t("tutorialStep", { current: tutorialIndex + 1, total: steps.length })} · ${t(
"tutorialLessonProgress",
{ done: lessonDone, total: steps.length },
)}`;
els.tutorialTitle.textContent = `${t("tutorialTrainingTitle")} · ${step.title}`;
els.tutorialText.textContent = step.text;
els.tutorialStars.textContent = t("tutorialStars", { stars: stepStars });
els.tutorialTips.innerHTML = "";
for (const tip of step.tips) {
const item = document.createElement("li");
item.textContent = tip;
els.tutorialTips.append(item);
}
els.tutorialProgress.style.setProperty("--tutorial-progress", progress);
els.tutorialPrevBtn.disabled = tutorialIndex === 0;
els.tutorialNextBtn.innerHTML =
tutorialIndex === steps.length - 1
? `${t("done")}<span class="button-icon">✓</span>`
: `${t("next")}<span class="button-icon">→</span>`;
renderBoard();
}
function openTutorialAt(index = 0) {
if (pendingPromotion || aiThinking) {
return;
}
const steps = currentTutorialSteps();
tutorialIndex = Math.max(0, Math.min(index, steps.length - 1));
clearSelection();
els.tutorialDialog.hidden = false;
renderTutorialStep();
els.tutorialNextBtn.focus();
}
function openTutorial() {
openTutorialAt(0);
}
function practicePostGameMistake() {
if (!postGameReview) {
return;
}
openTutorialAt(postGameReview.practiceIndex ?? 4);
setNotice(t("reviewPracticeNotice"));
}
function closeTutorial({ completed = false } = {}) {
tutorialMove = null;
els.tutorialDialog.hidden = true;
renderBoard();
if (completed) {
unlockAchievement("tutorial-graduate");
setNotice(t("tutorialDone"));
}
}
function showNextTutorialStep() {
const steps = currentTutorialSteps();
const completedNow = completeTutorialLesson(tutorialIndex);
if (completedNow) {
setNotice(t("tutorialLessonUnlocked", { title: steps[tutorialIndex].title }));
}
if (tutorialIndex >= currentTutorialSteps().length - 1) {
closeTutorial({ completed: true });
return;
}
tutorialIndex += 1;
renderTutorialStep();
}
function showPreviousTutorialStep() {
tutorialIndex = Math.max(0, tutorialIndex - 1);
renderTutorialStep();
}
function stopAiThinking() {
window.clearTimeout(aiTimer);
aiTimer = null;
aiThinking = false;
aiSearchToken += 1;
}
function scheduleAiMove() {
stopAiThinking();
if (!isAiTurn()) {
renderStatus();
return;
}
clearSelection();
aiThinking = true;
setNotice(t("aiThinking"));
render();
const searchToken = aiSearchToken;
aiTimer = window.setTimeout(async () => {
if (!isAiTurn()) {
aiThinking = false;
renderStatus();
return;
}
const move = await chooseAiMoveAsync();
if (searchToken !== aiSearchToken) {
return;
}
aiThinking = false;
if (!move) {
renderStatus();
return;
}
const result = makeMove(
{
from: move.from,
to: move.to,
promotion: move.promotion,
},
{ byAi: true },
);
renderStatus();
}, 520);
}
function openPromotion(from, to, options) {
pendingPromotion = { from, to };
const uniqueOptions = promotionOrder.filter((piece) => options.includes(piece));
const color = game.turn();
els.promotionChoices.innerHTML = "";
for (const type of uniqueOptions) {
const button = document.createElement("button");
button.type = "button";
button.className = "promotion-choice";
button.dataset.promotion = type;
button.setAttribute("aria-label", `${t("promotionTitle")} ${pieceName(type)}`);
button.append(createPieceIcon({ type, color }));
button.addEventListener("click", () => {
makeMove({ ...pendingPromotion, promotion: type });
});
els.promotionChoices.append(button);
}
els.promotionDialog.hidden = false;
els.promotionChoices.querySelector("button")?.focus();
}
function closePromotion() {
pendingPromotion = null;
els.promotionDialog.hidden = true;
}
function resetGame({ byLan = false, byGameCenter = false } = {}) {
stopAiThinking();
if ((rankedModeEnabled || professionalLeagueModeEnabled) && !byLan && !byGameCenter) {
aiEnabled = true;
orientation = humanColor;
}
game.reset();
restoredSavedGameAvailable = false;
continuePromptDismissed = true;
currentGameUsedTip = false;
clearSelection();
lastMove = null;
recordedResult = null;
recordedProfileOutcome = null;
recordedRankDelta = 0;
recordedLeagueDelta = 0;
recordedLeagueOutcome = null;
activeTrainingMode = "";
activeTrainingPuzzleId = "";
postGameReview = null;
lastRankedSettlement = null;
if (rankedModeEnabled && !byLan && !byGameCenter) {
markRankedGameEligible();
} else {
clearRankedGameEligibility();
}
if (professionalLeagueModeEnabled && !byLan && !byGameCenter) {
markProfessionalLeagueGameEligible();
} else {
clearProfessionalLeagueGameEligibility();
}
closePromotion();
setNotice(
rankedModeEnabled && !byLan && !byGameCenter
? t("rankedStarted")
: professionalLeagueModeEnabled && !byLan && !byGameCenter
? t("professionalLeagueStarted", professionalLeagueScores)
: t("newGameStarted"),
);
render();
saveCurrentGame();
startBackgroundMusic();
if (isLanConnected() && !byLan) {
sendLan({ type: "reset" });
} else if (isGameCenterConnected() && !byGameCenter) {
sendGameCenterReset();
} else if (!isLanConnected() && !isGameCenterConnected()) {
scheduleAiMove();
}
}
function undoMove() {
if (isGameCenterConnected()) {
setNotice(t("gameCenterStatusWaiting"));
return;
}
if (rankedModeEnabled) {
setNotice(t("rankedNoUndo"));
return;
}
if (professionalLeagueModeEnabled) {
setNotice(t("professionalLeagueNoUndo"));
return;
}
if (!game.history().length) {
setNotice(t("undoEmpty"));
renderStatus();
return;
}
stopAiThinking();
unrecordGameResult();
const steps = aiEnabled && game.turn() === humanColor && game.history().length > 1 ? 2 : 1;
let undone = null;
for (let i = 0; i < steps; i += 1) {
undone = game.undo();
if (!undone) {
break;
}
}
if (!undone) {
renderStatus();
return;
}
const history = game.history({ verbose: true });
const previous = history.at(-1);
lastMove = previous ? { from: previous.from, to: previous.to } : null;
clearSelection();
closePromotion();
setNotice(t("undoNotice"));
render();
saveCurrentGame();
startBackgroundMusic();
scheduleAiMove();
}
function flipBoard() {
orientation = opposite(orientation);
clearSelection({ keepTip: true });
renderBoard();
saveCurrentGame();
}
async function copyText(text, label) {
try {
await navigator.clipboard.writeText(text);
setNotice(t("copied", { label }));
} catch (error) {
setNotice(t("copyBlocked"));
}
}
function loadFen() {
if (isGameCenterConnected()) {
setNotice(t("gameCenterStatusWaiting"));
return;
}
if (rankedModeEnabled || rankedGameEligible || professionalLeagueModeEnabled || professionalLeagueGameEligible) {
setNotice(t(rankedModeEnabled || rankedGameEligible ? "rankedNoFen" : "professionalLeagueNoFen"));
return;
}
stopAiThinking();
const fen = els.fenInput.value.trim();
if (!fen) {
setNotice(t("needFen"));
return;
}
try {
const preview = new Chess(fen);
if (hasKingCaptureMove(preview)) {
throw new Error("unsafe-king-capture-position");
}
game.load(fen);
currentGameUsedTip = false;
clearSelection();
lastMove = null;
recordedResult = null;
recordedProfileOutcome = null;
recordedRankDelta = 0;
clearRecordedLeagueResult();
activeTrainingMode = "";
activeTrainingPuzzleId = "";
postGameReview = null;
lastRankedSettlement = null;
clearRankedGameEligibility();
clearProfessionalLeagueGameEligibility();
closePromotion();
setNotice(t("fenLoaded"));
render();
saveCurrentGame();
playPositionSound();
if (game.isCheckmate()) {
startBackgroundMusic();
} else if (game.isGameOver()) {
stopBackgroundMusic();
} else {
startBackgroundMusic();
}
scheduleAiMove();
} catch (error) {
setNotice(t("badFen"));
}
}
function hasKingCaptureMove(chess = game) {
try {
return chess.moves({ verbose: true }).some((move) => move.captured === "k");
} catch (error) {
return true;
}
}
function loadTrainingPosition(fen, noticeKey, options = {}) {
if (isGameCenterConnected()) {
setNotice(t("gameCenterStatusWaiting"));
return false;
}
stopAiThinking();
try {
const preview = new Chess(fen);
if (hasKingCaptureMove(preview)) {
throw new Error("unsafe-king-capture-position");
}
game.load(fen);
} catch (error) {
setNotice(t("badFen"));
return false;
}
aiEnabled = false;
rankedModeEnabled = false;
professionalLeagueModeEnabled = false;
saveRankedMode();
saveProfessionalLeagueMode();
currentGameUsedTip = false;
restoredSavedGameAvailable = false;
continuePromptDismissed = true;
clearSelection();
lastMove = null;
recordedResult = null;
recordedProfileOutcome = null;
recordedRankDelta = 0;
clearRecordedLeagueResult();
activeTrainingMode = ["daily-endgame", "mate-one"].includes(options.mode) ? options.mode : "";
activeTrainingPuzzleId = typeof options.puzzleId === "string" ? options.puzzleId : "";
postGameReview = null;
lastRankedSettlement = null;
clearRankedGameEligibility();
clearProfessionalLeagueGameEligibility();
closePromotion();
nativeHaptic("success");
setNotice(`${t(noticeKey)} ${t("trainingNoRank")}`);
render();
saveCurrentGame();
playPositionSound();
startBackgroundMusic();
return true;
}
function startDailyEndgame() {
const puzzle = currentDailyEndgamePuzzle();
loadTrainingPosition(puzzle.fen, "dailyEndgameStarted", { mode: "daily-endgame", puzzleId: puzzle.id });
}
function startMateInOneTraining() {
const puzzle = currentMateInOnePuzzle();
loadTrainingPosition(puzzle.fen, "mateOneStarted", { mode: "mate-one", puzzleId: puzzle.id });
}
function toggleAi() {
if (isLanConnected()) {
setNotice(t("lanAiBlocked"));
return;
}
if (isGameCenterConnected()) {
setNotice(t("gameCenterStatusWaiting"));
return;
}
if (rankedModeEnabled && aiEnabled) {
setNotice(t("rankedNeedsAi"));
return;
}
if (professionalLeagueModeEnabled && aiEnabled) {
setNotice(t("professionalLeagueNeedsAi"));
return;
}
stopAiThinking();
aiEnabled = !aiEnabled;
if (aiEnabled) {
orientation = humanColor;
unlockAchievement("ai-challenger");
setNotice(t("aiEnabled", { side: sideShortName(humanColor) }));
} else {
setNotice(t("aiDisabled"));
}
clearSelection();
render();
saveCurrentGame();
scheduleAiMove();
}
function toggleProfessionalLeagueMode() {
if (!currentAccount()) {
setNotice(t("professionalLeagueNeedAccount"));
openAuth("login");
return;
}
if (isLanConnected()) {
setNotice(t("professionalLeagueNoLan"));
return;
}
if (isGameCenterConnected()) {
setNotice(t("gameCenterStatusWaiting"));
return;
}
stopAiThinking();
professionalLeagueModeEnabled = !professionalLeagueModeEnabled;
saveProfessionalLeagueMode();
if (professionalLeagueModeEnabled) {
aiEnabled = true;
orientation = humanColor;
unlockAchievement("ai-challenger");
resetGame();
return;
}
clearProfessionalLeagueGameEligibility();
setNotice(t("professionalLeagueDisabled"));
render();
saveCurrentGame();
scheduleAiMove();
}
function toggleRankedMode() {
if (isLanConnected()) {
setNotice(t("rankedNoLan"));
return;
}
if (isGameCenterConnected()) {
setNotice(t("gameCenterStatusWaiting"));
return;
}
stopAiThinking();
rankedModeEnabled = !rankedModeEnabled;
saveRankedMode();
if (rankedModeEnabled) {
aiEnabled = true;
orientation = humanColor;
unlockAchievement("ai-challenger");
resetGame();
return;
}
clearRankedGameEligibility();
setNotice(t("rankedDisabled"));
render();
saveCurrentGame();
scheduleAiMove();
}
function togglePlayerSide() {
if (isLanConnected()) {
setNotice(t("lanSideBlocked"));
return;
}
if (isGameCenterConnected()) {
setNotice(t("gameCenterStatusWaiting"));
return;
}
stopAiThinking();
humanColor = opposite(humanColor);
orientation = humanColor;
game.reset();
currentGameUsedTip = false;
postGameReview = null;
lastRankedSettlement = null;
clearSelection();
lastMove = null;
recordedResult = null;
recordedProfileOutcome = null;
recordedRankDelta = 0;
clearRecordedLeagueResult();
if (rankedModeEnabled || professionalLeagueModeEnabled) {
aiEnabled = true;
}
if (rankedModeEnabled) {
markRankedGameEligible();
} else {
clearRankedGameEligibility();
}
if (professionalLeagueModeEnabled) {
markProfessionalLeagueGameEligible();
} else {
clearProfessionalLeagueGameEligibility();
}
closePromotion();
setNotice(
rankedModeEnabled
? t("rankedStarted")
: professionalLeagueModeEnabled
? t("professionalLeagueStarted", professionalLeagueScores)
: t("sideChanged", { side: sideShortName(humanColor) }),
);
render();
saveCurrentGame();
startBackgroundMusic();
scheduleAiMove();
}
function setAiLevel(level) {
stopAiThinking();
const nextLevel = Math.min(6, Math.max(1, level));
if (professionalLeagueModeEnabled) {
setNotice(t("professionalLeagueLevelLocked"));
renderStatus();
return;
}
if (rankedGameEligible && game.history().length > 0 && nextLevel !== aiLevel) {
setNotice(t("rankedLevelLocked"));
renderStatus();
return;
}
if (professionalLeagueGameEligible && game.history().length > 0 && nextLevel !== aiLevel) {
setNotice(t("professionalLeagueStarted", professionalLeagueScores));
renderStatus();
return;
}
if (nextLevel === 6 && !isProfessionalAiUnlocked()) {
setNotice(t("professionalLocked"));
renderStatus();
return;
}
aiLevel = nextLevel;
if (rankedModeEnabled && game.history().length === 0) {
rankedGameAiLevel = aiLevel;
}
setNotice(t("aiDifficultyNotice", { level: aiLevel, name: aiLevelDetails(aiLevel).name }));
renderStatus();
renderRank();
saveCurrentGame();
scheduleAiMove();
}
function setAuthMode(mode) {
authMode = mode === "register" ? "register" : "login";
els.authMessage.textContent = "";
els.authPassword.setAttribute("autocomplete", authMode === "register" ? "new-password" : "current-password");
renderAuthMode();
}
function openAuth(mode = "login") {
setAuthMode(mode);
els.authForm.reset();
els.authMessage.textContent = "";
closeProfile();
closeMoreMenu();
els.authDialog.hidden = false;
window.setTimeout(() => els.authUsername.focus(), 0);
}
function closeAuth() {
els.authDialog.hidden = true;
els.authMessage.textContent = "";
}
function resetGameForAccountSwitch(message) {
stopAiThinking();
if (rankedModeEnabled || professionalLeagueModeEnabled) {
aiEnabled = true;
orientation = humanColor;
}
game.reset();
currentGameUsedTip = false;
if (rankedModeEnabled) {
markRankedGameEligible();
} else {
clearRankedGameEligibility();
}
if (professionalLeagueModeEnabled) {
markProfessionalLeagueGameEligible();
} else {
clearProfessionalLeagueGameEligibility();
}
postGameReview = null;
lastRankedSettlement = null;
clearSelection();
lastMove = null;
recordedResult = null;
recordedProfileOutcome = null;
recordedRankDelta = 0;
clearRecordedLeagueResult();
closePromotion();
render();
saveCurrentGame();
setNotice(message);
scheduleAiMove();
}
function loadProgressForCurrentAccount() {
rankedModeEnabled = loadRankedMode();
professionalLeagueModeEnabled = loadProfessionalLeagueMode();
matchScore = loadMatchScore();
rankPoints = loadRankPoints();
officialRankProfile = loadOfficialRankProfile();
officialRankStatus = officialRankProfile ? "cached" : "idle";
masterNoHintWinStreak = loadMasterNoHintWinStreak();
profileActivity = loadProfileActivity();
dailyStars = loadDailyStars();
dailyProgress = loadDailyProgress();
dailyStreak = loadDailyStreak();
dailyTraining = loadDailyTraining();
completedTutorialLessons = loadTutorialLessons();
activeTrainingMode = "";
activeTrainingPuzzleId = "";
recordedProfileOutcome = null;
recordedRankDelta = 0;
recordedLeagueDelta = 0;
recordedLeagueOutcome = null;
clearProfessionalLeagueGameEligibility();
postGameReview = null;
lastRankedSettlement = null;
}
function validateAccountFields(name, password) {
if (!name) {
return "accountNeedUsername";
}
if (name.length < 2 || name.length > 24) {
return "accountBadUsername";
}
if (!password) {
return "accountNeedPassword";
}
if (password.length < 4) {
return "accountBadPassword";
}
return "";
}
function handleAuthSubmit(event) {
event.preventDefault();
const name = cleanPlayerDisplayName(els.authUsername.value);
const password = els.authPassword.value;
const validationKey = validateAccountFields(name, password);
if (validationKey) {
els.authMessage.textContent = t(validationKey);
return;
}
const accountId = normalizeAccountId(name);
const passwordHash = hashPassword(accountId, password);
if (authMode === "register") {
if (accounts[accountId]) {
els.authMessage.textContent = t("accountExists");
return;
}
const now = new Date().toISOString();
accounts[accountId] = {
id: accountId,
name,
passwordHash,
matchScore: normalizeScore(matchScore),
rankPoints,
professionalLeague: createEmptyLeagueStats(),
createdAt: now,
updatedAt: now,
};
saveRankedMode();
saveProfessionalLeagueMode();
currentAccountId = accountId;
saveAchievements();
saveMasterNoHintWinStreak();
saveAccounts();
saveCurrentAccountId();
loadProgressForCurrentAccount();
unlockedAchievements = loadAchievements();
closeAuth();
resetGameForAccountSwitch(t("accountRegisterSuccess", { name }));
fetchOfficialRankProfile({ notify: true });
return;
}
const account = accounts[accountId];
if (!account) {
els.authMessage.textContent = t("accountMissing");
return;
}
if (account.passwordHash !== passwordHash) {
els.authMessage.textContent = t("accountWrongPassword");
return;
}
saveMatchScore();
saveRankPoints();
saveAchievements();
saveMasterNoHintWinStreak();
saveRankedMode();
saveProfessionalLeagueMode();
currentAccountId = accountId;
saveCurrentAccountId();
loadProgressForCurrentAccount();
unlockedAchievements = loadAchievements();
enforceProfessionalAiAccess();
closeAuth();
resetGameForAccountSwitch(t("accountLoginSuccess", { name: account.name }));
fetchOfficialRankProfile({ notify: true });
}
function logoutAccount() {
saveMatchScore();
saveRankPoints();
saveAchievements();
saveMasterNoHintWinStreak();
saveRankedMode();
saveProfessionalLeagueMode();
currentAccountId = null;
saveCurrentAccountId();
loadProgressForCurrentAccount();
unlockedAchievements = loadAchievements();
enforceProfessionalAiAccess();
closeProfile();
closeMoreMenu();
resetGameForAccountSwitch(t("accountLogoutSuccess"));
fetchOfficialRankProfile();
}
function resetGuestProgressAfterAccountDelete() {
matchScore = createEmptyScore();
rankPoints = 0;
officialRankProfile = null;
officialRankStatus = "idle";
masterNoHintWinStreak = 0;
profileActivity = createEmptyProfileActivity();
dailyStars = 0;
dailyProgress = createDailyProgress();
dailyStreak = createDailyStreak();
dailyTraining = createDailyTrainingProgress();
completedTutorialLessons = new Set();
unlockedAchievements = new Set();
rankedModeEnabled = false;
professionalLeagueModeEnabled = false;
clearRankedGameEligibility();
clearProfessionalLeagueGameEligibility();
clearRecordedLeagueResult();
saveMatchScore();
saveRankPoints();
saveAchievements();
saveMasterNoHintWinStreak();
saveProfileActivity();
saveDailyStars();
saveDailyProgress();
saveDailyStreak();
saveDailyTraining();
saveTutorialLessons();
saveRankedMode();
saveProfessionalLeagueMode();
}
function deleteCurrentAccount() {
const account = currentAccount();
if (!account) {
return;
}
const typed = window.prompt(t("deleteAccountConfirm", { name: account.name }), "");
if (typed === null || (typed.trim() !== account.name && normalizeAccountId(typed) !== account.id)) {
setNotice(t("deleteAccountCancelled"));
return;
}
const deletedAccountId = account.id;
removeStoredProfileForAccount(deletedAccountId);
delete accounts[deletedAccountId];
currentAccountId = null;
saveAccounts();
saveCurrentAccountId();
resetGuestProgressAfterAccountDelete();
enforceProfessionalAiAccess();
closeProfile();
closeMoreMenu();
resetGameForAccountSwitch(t("deleteAccountDone"));
fetchOfficialRankProfile();
}
function setLanguage(language) {
currentLanguage = language === "en" ? "en" : "zh";
saveLanguage();
render();
if (!els.tutorialDialog.hidden) {
renderTutorialStep();
}
setNotice(t("languageChanged"));
}
function setBoardTheme(theme) {
applyBoardTheme(theme, { notify: true });
unlockAchievement("board-stylist");
}
function resetMatchScore() {
matchScore = { w: 0, b: 0, d: 0 };
recordedResult = null;
recordedProfileOutcome = null;
recordedRankDelta = 0;
postGameReview = null;
lastRankedSettlement = null;
saveMatchScore();
renderMatchScore();
setNotice(t("scoreReset"));
}
function toggleBackgroundMusic() {
unlockAudio();
musicEnabled = !musicEnabled;
if (musicEnabled) {
setNotice(t("musicEnabled"));
startBackgroundMusic();
} else {
setNotice(t("musicDisabled"));
stopBackgroundMusic();
}
renderMusicButton();
}
function isLocalHostname(hostname = window.location.hostname) {
return hostname === "127.0.0.1" || hostname === "localhost" || hostname === "::1";
}
function isPrivateLanHostname(hostname = window.location.hostname) {
return /^192\.168\./.test(hostname)
|| /^10\./.test(hostname)
|| /^172\.(1[6-9]|2\d|3[01])\./.test(hostname);
}
function isLanPlayablePage() {
return window.location.protocol !== "file:" && (isLocalHostname() || isPrivateLanHostname());
}
function lanBlockedPageMessageKey() {
if (isBackupSiteHost()) {
return "lanBackupSiteBlocked";
}
if (window.location.protocol === "file:") {
return "lanFileSiteBlocked";
}
if (!isLanPlayablePage()) {
return "lanStaticSiteBlocked";
}
return "";
}
function lanCurrentPageCheckText() {
if (isBackupSiteHost()) {
return t("lanCheckPageBackup");
}
if (window.location.protocol === "file:") {
return t("lanCheckPageFile");
}
if (isLanPlayablePage()) {
return t("lanCheckPageLan");
}
return t("lanCheckPageStatic");
}
function lanWebSocketUrlFromBase(baseUrl) {
const url = new URL(baseUrl);
const protocol = url.protocol === "https:" ? "wss" : "ws";
return `${protocol}://${url.host}/lan`;
}
function shouldShowLanJumpCard() {
return !isLanPlayablePage() && window.location.protocol !== "file:";
}
function shouldShowLanHostCard() {
return isLanPlayablePage() && window.location.protocol !== "file:";
}
function renderLanAppModeCard() {
if (!els.lanAppModeCard) {
return;
}
const show = isIosAppBuild();
els.lanAppModeCard.hidden = !show;
if (!show) {
return;
}
const busy = isLanConnected() || lanState.status === "connecting";
els.lanAppModeLabel.textContent = t("lanAppModeLabel");
els.lanAppModeTitle.textContent = t("lanAppModeTitle");
els.lanAppModeText.textContent = t("lanAppModeText");
els.lanModeCreateLabel.textContent = t("lanModeCreate");
els.lanModeNearbyLabel.textContent = t("lanModeNearby");
els.lanModeScanLabel.textContent = t("lanModeScan");
els.lanModeCodeLabel.textContent = t("lanModeCode");
els.lanModeCreateBtn.disabled = busy;
els.lanModeNearbyBtn.disabled = busy;
els.lanModeScanBtn.disabled = busy;
els.lanModeCodeBtn.disabled = false;
}
function nativeGameCenterAvailable() {
return Boolean(
isIosAppBuild() &&
window.JEFFERY_CHESS_GAME_CENTER &&
window.webkit?.messageHandlers?.gameCenter,
);
}
function gameCenterPlayerIds(payload = gameCenterState) {
const local = String(payload.localPlayerId || "");
const remotes = Array.isArray(payload.remotePlayerIds)
? payload.remotePlayerIds.map((id) => String(id || "")).filter(Boolean)
: [];
return [local, ...remotes].filter(Boolean).sort();
}
function gameCenterColorForPayload(payload = gameCenterState) {
const ids = gameCenterPlayerIds(payload);
if (!payload.localPlayerId || ids.length < 2) {
return payload.color || "w";
}
return ids[0] === payload.localPlayerId ? "w" : "b";
}
function isGameCenterConnected() {
return Boolean(
nativeGameCenterAvailable() &&
gameCenterState.connected &&
!["failed", "cancelled", "unavailable"].includes(gameCenterState.status),
);
}
function canPlayGameCenterMove() {
return isGameCenterConnected() && gameCenterState.color === game.turn();
}
function gameCenterStatusText() {
const reason = gameCenterState.reason || "unavailable";
switch (gameCenterState.status) {
case "authenticating":
return t("gameCenterStatusAuthenticating");
case "authenticated":
return t("gameCenterStatusAuthenticated", { player: gameCenterState.player || "Game Center" });
case "auth-required":
return t("gameCenterStatusAuthRequired");
case "matchmaker-opened":
return t("gameCenterStatusMatchmaker");
case "match-ready":
return gameCenterState.color
? t("gameCenterStatusConnected", { side: sideShortName(gameCenterState.color) })
: t("gameCenterStatusMatchReady");
case "message-sent":
return t("gameCenterStatusSent", { move: gameCenterState.lastMove || "..." });
case "message-received":
return t("gameCenterStatusReceived", { move: gameCenterState.lastMove || "..." });
case "dashboard-opened":
case "dashboard-closed":
return t("gameCenterStatusDashboard");
case "cancelled":
return t("gameCenterStatusCancelled");
case "failed":
return t("gameCenterStatusFailed", { reason });
case "unavailable":
return t("gameCenterStatusUnavailable", { reason });
default:
return t("gameCenterStatusIdle");
}
}
function renderGameCenterCard() {
if (!els.gameCenterCard) {
return;
}
const show = isIosAppBuild();
els.gameCenterCard.hidden = !show;
if (!show) {
return;
}
const available = nativeGameCenterAvailable();
els.gameCenterLabel.textContent = t("gameCenterLabel");
els.gameCenterTitle.textContent = t("gameCenterTitle");
els.gameCenterText.textContent = t("gameCenterText");
setButtonContent(els.gameCenterAuthBtn, "GC", t("gameCenterAuth"));
setButtonContent(els.gameCenterMatchBtn, "VS", t("gameCenterMatch"));
setButtonContent(els.gameCenterDashboardBtn, "★", t("gameCenterDashboard"));
els.gameCenterAuthBtn.disabled = !available || gameCenterState.status === "authenticating";
els.gameCenterMatchBtn.disabled = !available;
els.gameCenterDashboardBtn.disabled = !available;
els.gameCenterStatus.textContent = available
? gameCenterStatusText()
: t("gameCenterStatusUnavailable", { reason: "native-bridge-unavailable" });
}
function postGameCenterAction(action, payload = null) {
if (!nativeGameCenterAvailable()) {
gameCenterState = { ...gameCenterState, status: "unavailable", connected: false, player: "", reason: "native-bridge-unavailable" };
renderGameCenterCard();
setNotice(gameCenterStatusText());
return;
}
if (action === "authenticate") {
gameCenterState = { ...gameCenterState, status: "authenticating", connected: false, player: "", reason: "" };
}
renderGameCenterCard();
try {
window.webkit.messageHandlers.gameCenter.postMessage(payload ? { action, payload } : { action });
} catch (error) {
gameCenterState = { ...gameCenterState, status: "unavailable", connected: false, player: "", reason: "native-post-failed" };
renderGameCenterCard();
setNotice(gameCenterStatusText());
}
}
function postGameCenterMessage(payload) {
if (!isGameCenterConnected()) {
setNotice(t("gameCenterStatusNotReady"));
return false;
}
postGameCenterAction("send", payload);
return true;
}
function sendGameCenterMove(result) {
const payload = {
type: "move",
id: `gc-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`,
appVersion,
protocolVersion: 1,
move: {
from: result.from,
to: result.to,
promotion: result.promotion,
},
san: result.san,
fen: game.fen(),
lastMove,
};
postGameCenterMessage(payload);
}
function sendGameCenterReset() {
postGameCenterMessage({
type: "reset",
id: `gc-reset-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`,
appVersion,
protocolVersion: 1,
fen: game.fen(),
lastMove,
});
}
function loadGameCenterFen(fen, last = null) {
if (!fen) {
return;
}
try {
game.load(fen);
currentGameUsedTip = false;
lastMove = last;
recordedResult = null;
recordedProfileOutcome = null;
recordedRankDelta = 0;
clearRecordedLeagueResult();
postGameReview = null;
lastRankedSettlement = null;
clearRankedGameEligibility();
clearProfessionalLeagueGameEligibility();
clearSelection();
closePromotion();
render();
saveCurrentGame();
playPositionSound(0.18);
} catch (error) {
}
}
function applyGameCenterMove(payload = {}) {
if (!payload) {
return;
}
if (payload.id && payload.id === gameCenterState.lastMessageId) {
return;
}
gameCenterState.lastMessageId = String(payload.id || "");
if (payload.type === "reset") {
resetGame({ byGameCenter: true });
return;
}
if (payload.type !== "move") {
return;
}
const result = makeMove(payload.move, { byGameCenter: true });
if (!result) {
loadGameCenterFen(payload.fen, payload.lastMove ?? null);
}
gameCenterState = {
...gameCenterState,
status: "message-received",
lastMove: String(payload.san || payload.move?.to || ""),
};
renderGameCenterCard();
setNotice(gameCenterStatusText());
}
window.jefferyChessHandleGameCenterStatus = function jefferyChessHandleGameCenterStatus(payload = {}) {
const status = String(payload.status || "idle");
const merged = {
...gameCenterState,
status,
player: String(payload.player || payload.alias || gameCenterState.player || ""),
reason: String(payload.reason || ""),
localPlayerId: String(payload.localPlayerId || gameCenterState.localPlayerId || ""),
remotePlayerIds: Array.isArray(payload.remotePlayerIds)
? payload.remotePlayerIds.map((id) => String(id || "")).filter(Boolean)
: gameCenterState.remotePlayerIds,
remotePlayers: Array.isArray(payload.remotePlayers) ? payload.remotePlayers : gameCenterState.remotePlayers,
connected: status === "match-ready" ? true : gameCenterState.connected && status !== "failed" && status !== "cancelled",
};
merged.color = status === "match-ready" ? gameCenterColorForPayload(merged) : merged.color;
if (status === "match-ready") {
stopAiThinking();
aiEnabled = false;
rankedModeEnabled = false;
professionalLeagueModeEnabled = false;
saveRankedMode();
saveProfessionalLeagueMode();
clearRankedGameEligibility();
clearProfessionalLeagueGameEligibility();
orientation = merged.color || orientation;
clearSelection();
}
if (status === "message-sent") {
merged.lastMove = String(payload.move || gameCenterState.lastMove || "");
}
gameCenterState = {
...merged,
};
renderGameCenterCard();
setNotice(gameCenterStatusText());
};
window.jefferyChessHandleGameCenterMessage = function jefferyChessHandleGameCenterMessage(payload = {}) {
applyGameCenterMove(payload);
};
function lanHostShareUrlFromCheck(check = lastLanCheck) {
const address = Array.isArray(check?.info?.addresses) ? check.info.addresses[0] : "";
const port = Number(check?.info?.port) || "";
if (check?.ok && address && port) {
return `http://${address}:${port}/index.html`;
}
if (isPrivateLanHostname() && window.location.origin) {
return `${window.location.origin}/index.html`;
}
return "";
}
function renderLanHostCard() {
if (!els.lanHostCard) {
return;
}
const show = shouldShowLanHostCard();
els.lanHostCard.hidden = !show;
if (!show) {
return;
}
const url = lanHostShareUrlFromCheck();
els.lanHostLabel.textContent = t("lanHostLabel");
els.lanHostTitle.textContent = t("lanHostTitle");
els.lanHostText.textContent = url ? t("lanHostText") : t(lanHostRefreshPromise ? "lanHostChecking" : "lanHostUnavailable");
els.lanHostLink.textContent = url || t(lanHostRefreshPromise ? "lanHostChecking" : "lanHostUnavailable");
els.lanHostLink.href = url || "#";
els.lanHostLink.setAttribute("aria-disabled", url ? "false" : "true");
els.lanCopyHostBtn.disabled = !url;
setButtonContent(els.lanCopyHostBtn, "↗", t("lanHostCopy"));
}
async function refreshLanHostCard({ force = false } = {}) {
if (!shouldShowLanHostCard()) {
renderLanHostCard();
return lastLanCheck;
}
if (lanHostRefreshPromise && !force) {
return lanHostRefreshPromise;
}
lanHostRefreshPromise = fetchLanInfoStatus()
.then((check) => {
lastLanCheck = check;
return check;
})
.finally(() => {
lanHostRefreshPromise = null;
renderLanHostCard();
});
renderLanHostCard();
return lanHostRefreshPromise;
}
async function copyLanHostAddress() {
let url = lanHostShareUrlFromCheck();
if (!url) {
await refreshLanHostCard({ force: true });
url = lanHostShareUrlFromCheck();
}
if (!url) {
setNotice(t("lanHostUnavailable"));
return;
}
try {
await navigator.clipboard.writeText(url);
setNotice(t("lanHostCopied"));
} catch (error) {
setNotice(t("copyBlocked"));
}
}
function renderLanJumpCard() {
if (!els.lanJumpCard) {
return;
}
const show = shouldShowLanJumpCard();
els.lanJumpCard.hidden = !show;
if (!show) {
return;
}
els.lanJumpLabel.textContent = t("lanJumpLabel");
els.lanJumpTitle.textContent = t("lanJumpTitle");
els.lanJumpText.textContent = t("lanJumpText");
els.lanHostInput.placeholder = t("lanJumpPlaceholder");
setButtonContent(els.lanOpenHostBtn, "↗", t("lanJumpOpen"));
}
function normalizeLanHostUrl(value) {
const raw = String(value || "").trim();
if (!raw) {
return null;
}
const withProtocol = /^https?:\/\//i.test(raw) ? raw : `http://${raw}`;
try {
const url = new URL(withProtocol);
if (!isLocalHostname(url.hostname) && !isPrivateLanHostname(url.hostname)) {
return null;
}
if (!url.port) {
url.port = "5173";
}
if (!url.pathname || url.pathname === "/") {
url.pathname = "/index.html";
}
url.protocol = "http:";
return url;
} catch (error) {
return null;
}
}
function openLanHostPage() {
const url = normalizeLanHostUrl(els.lanHostInput.value);
if (!url) {
setNotice(els.lanHostInput.value.trim() ? t("lanJumpBadHost") : t("lanJumpNeedHost"));
return;
}
const room = currentLanRoom();
if (room) {
url.searchParams.set("lanRoom", room);
}
setNotice(t("lanJumpOpening"));
window.location.href = url.toString();
}
async function discoverLanServerBase() {
const bases = uniqueLanInfoBases();
for (const base of bases) {
try {
const response = await fetch(`${base}/lan-info`, { cache: "no-store" });
if (!response.ok) {
continue;
}
const info = await response.json();
const port = Number(info.port) || new URL(base).port || 5174;
return `http://127.0.0.1:${port}`;
} catch (error) {
}
}
return "";
}
function currentLanRoom() {
return normalizeLanRoom(els.lanRoomInput.value || lanState.room || "");
}
function uniqueLanInfoBases() {
if (isLanPlayablePage() && window.location.origin) {
return [window.location.origin];
}
const bases = [];
bases.push(...localLanServerBases);
return [...new Set(bases.filter(Boolean))];
}
async function fetchLanInfoStatus() {
for (const base of uniqueLanInfoBases()) {
try {
const response = await fetch(`${base}/lan-info`, { cache: "no-store" });
if (!response.ok) {
continue;
}
const info = await response.json();
return { ok: true, base, info };
} catch (error) {
}
}
return { ok: false, base: "", info: null };
}
function lanRoomCheckText() {
const room = currentLanRoom();
if (isLanConnected()) {
return t("lanCheckRoomConnected", { room: lanState.room || room });
}
if (room) {
return t("lanCheckRoomPending", { room });
}
return t("lanCheckRoomEmpty");
}
function lanOpponentCheckText() {
if (isLanConnected() && lanState.color === "s") {
return t("lanCheckOpponentSpectating", { count: lanState.clients || 1 });
}
if (isLanConnected()) {
return lanState.clients >= 2 ? t("lanCheckOpponentOnline") : t("lanCheckOpponentWaiting");
}
if (lanState.status === "connecting") {
return t("lanConnecting");
}
return t("lanCheckOpponentDisconnected");
}
function lanProtocolCompatibilityText() {
const peerProtocol = Number(lanState.protocolVersion) || lanProtocolVersion;
if (peerProtocol < lanMinimumCompatibleProtocolVersion) {
return t("lanCheckVersionTooOld", {
version: appVersion,
protocol: lanProtocolVersion,
peer: peerProtocol,
});
}
if (isLanConnected() && peerProtocol !== lanProtocolVersion) {
return t("lanCheckVersionPeer", {
version: appVersion,
protocol: lanProtocolVersion,
peer: peerProtocol,
});
}
return t("lanCheckVersionCompatible", { version: appVersion, protocol: lanProtocolVersion });
}
function lanPeerEntries() {
const peers = Array.isArray(lanState.peers) ? lanState.peers : [];
if (!peers.length) {
return [];
}
if (lanState.color === "s") {
return peers.filter((peer) => peer.color === "w" || peer.color === "b");
}
return peers.filter((peer) => peer.color !== lanState.color);
}
function lanPeerVersionText() {
const peer = lanPeerEntries().find((entry) => entry.color === "w" || entry.color === "b" || entry.version || entry.protocolVersion);
if (!peer) {
return t("lanCheckPeerVersionWaiting");
}
const protocol = Number(peer.protocolVersion) || lanProtocolVersion;
const status = protocol < lanMinimumCompatibleProtocolVersion ? t("lanPeerTooOld") : t("lanPeerCompatible");
return t("lanCheckPeerVersionReady", {
version: peer.version ? `v${peer.version}` : t("lanPeerVersionUnknown"),
protocol,
status,
});
}
function lanColorText() {
if (lanState.color === "w") {
return t("lanDiagnosticColorWhite");
}
if (lanState.color === "b") {
return t("lanDiagnosticColorBlack");
}
if (lanState.color === "s") {
return t("lanDiagnosticColorSpectator");
}
return t("lanDiagnosticColorNone");
}
function lanAddressText(check = lastLanCheck) {
const address = Array.isArray(check?.info?.addresses) ? check.info.addresses[0] : "";
const port = Number(check?.info?.port) || "";
if (check?.ok && address && port) {
return t("lanDiagnosticAddressReady", { url: `http://${address}:${port}/index.html` });
}
if (check?.ok && check.base) {
return t("lanDiagnosticAddressReady", { url: `${check.base}/index.html` });
}
return t("lanDiagnosticAddressMissing");
}
function appendLanCheckRow(label, value, href = "") {
const row = document.createElement("div");
row.className = "lan-check-row";
const term = document.createElement("dt");
term.textContent = label;
const detail = document.createElement("dd");
if (href) {
const link = document.createElement("a");
link.href = href;
link.textContent = value;
detail.append(link);
} else {
detail.textContent = value;
}
row.append(term, detail);
els.lanCheckList.append(row);
}
function renderLanCheckResult(check = lastLanCheck) {
if (!check) {
els.lanCheckCard.hidden = true;
return;
}
els.lanCheckCard.hidden = false;
els.lanCheckPill.textContent = check.ok ? t("lanCheckOnline") : t("lanCheckOffline");
els.lanCheckPill.classList.toggle("is-online", check.ok);
els.lanCheckPill.classList.toggle("is-offline", !check.ok);
els.lanCheckList.innerHTML = "";
appendLanCheckRow(t("lanCheckServer"), check.ok ? t("lanCheckServerOn") : t("lanCheckServerOff"));
appendLanCheckRow(t("lanCheckPage"), lanCurrentPageCheckText());
appendLanCheckRow(t("lanCheckRoom"), lanRoomCheckText());
appendLanCheckRow(t("lanCheckVersion"), lanProtocolCompatibilityText());
appendLanCheckRow(t("lanCheckPeerVersion"), lanPeerVersionText());
appendLanCheckRow(t("lanCheckOpponent"), lanOpponentCheckText());
if (!check.ok) {
appendLanCheckRow(t("releaseHealthWarning", { label: t("lanCheck") }), t("releaseHealthLanGuide"));
}
}
async function checkLanStatus() {
els.lanCheckCard.hidden = false;
els.lanCheckPill.textContent = t("lanCheckChecking");
els.lanCheckPill.classList.remove("is-online", "is-offline");
els.lanCheckList.innerHTML = "";
appendLanCheckRow(t("lanCheckServer"), t("lanCheckChecking"));
els.lanCheckBtn.disabled = true;
const check = await fetchLanInfoStatus();
lastLanCheck = check;
renderLanCheckResult(check);
renderLanHostCard();
els.lanCheckBtn.disabled = false;
setNotice(check.ok ? t("lanCheckNoticeOk") : t("lanCheckNoticeBad"));
if (!check.ok) {
openLanDiagnosticFromStatus(check, { urgent: true });
}
}
function lanDiagnosticRows(check = lastLanCheck) {
return [
[t("lanCheckServer"), check?.ok ? t("lanCheckServerOn") : t("lanCheckServerOff")],
[t("lanCheckPage"), lanCurrentPageCheckText()],
[t("lanCheckRoom"), lanRoomCheckText()],
[t("lanDiagnosticColor"), lanColorText()],
[t("lanCheckOpponent"), lanOpponentCheckText()],
[t("lanCheckVersion"), lanProtocolCompatibilityText()],
[t("lanCheckPeerVersion"), lanPeerVersionText()],
[t("lanDiagnosticAddress"), lanAddressText(check)],
];
}
function renderLanDiagnostic(check = lastLanCheck) {
const rows = lanDiagnosticRows(check);
els.lanDiagnosticStatus.textContent = check ? t("lanDiagnosticReady") : t("lanDiagnosticIdle");
els.lanDiagnosticDialog.classList.remove("is-urgent");
els.copyLanDiagnosticBtn.classList.remove("primary");
setButtonContent(els.copyLanDiagnosticBtn, "⧉", t("lanDiagnosticCopy"));
els.lanDiagnosticList.innerHTML = "";
rows.forEach(([label, value]) => {
const row = document.createElement("div");
row.className = "lan-diagnostic-row";
const term = document.createElement("dt");
term.textContent = label;
const detail = document.createElement("dd");
detail.textContent = value;
row.append(term, detail);
els.lanDiagnosticList.append(row);
});
}
function openLanDiagnosticFromStatus(check = lastLanCheck, { urgent = false } = {}) {
els.lanDiagnosticDialog.hidden = false;
renderLanDiagnostic(check);
if (urgent) {
els.lanDiagnosticDialog.classList.add("is-urgent");
els.copyLanDiagnosticBtn.classList.add("primary");
els.lanDiagnosticStatus.textContent = t("lanDiagnosticCopyPrompt");
setButtonContent(els.copyLanDiagnosticBtn, "⧉", t("lanDiagnosticCopyNow"));
}
window.setTimeout(() => (urgent ? els.copyLanDiagnosticBtn : els.closeLanDiagnosticBtn).focus(), 0);
}
async function openLanDiagnostic() {
els.lanDiagnosticDialog.hidden = false;
els.lanDiagnosticStatus.textContent = t("lanDiagnosticChecking");
els.lanDiagnosticList.innerHTML = "";
els.lanDiagnosticBtn.disabled = true;
const check = await fetchLanInfoStatus();
lastLanCheck = check;
renderLanCheckResult(check);
renderLanHostCard();
openLanDiagnosticFromStatus(check, { urgent: !check.ok });
els.lanDiagnosticBtn.disabled = false;
}
function closeLanDiagnostic() {
els.lanDiagnosticDialog.hidden = true;
els.lanDiagnosticDialog.classList.remove("is-urgent");
els.copyLanDiagnosticBtn.classList.remove("primary");
}
async function copyLanDiagnostic() {
const text = lanDiagnosticRows(lastLanCheck)
.map(([label, value]) => `${label}: ${value}`)
.join("\n");
try {
await navigator.clipboard.writeText(text);
setNotice(t("lanDiagnosticCopied"));
} catch (error) {
setNotice(t("copyBlocked"));
}
}
async function lanWebSocketUrl() {
if (window.location.protocol !== "file:" && window.location.host && isLocalHostname()) {
return lanWebSocketUrlFromBase(window.location.origin);
}
const discoveredBase = await discoverLanServerBase();
if (discoveredBase) {
return lanWebSocketUrlFromBase(discoveredBase);
}
if (window.location.host) {
const protocol = window.location.protocol === "https:" ? "wss" : "ws";
return `${protocol}://${window.location.host}/lan`;
}
return "ws://127.0.0.1:5174/lan";
}
function normalizeLanRoom(room) {
return room.trim().replace(/[^\w-]/g, "").slice(0, 24);
}
function createLanRoomCode() {
const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const values = new Uint8Array(6);
if (window.crypto?.getRandomValues) {
window.crypto.getRandomValues(values);
} else {
values.forEach((_, index) => {
values[index] = Math.floor(Math.random() * 256);
});
}
return [...values].map((value) => alphabet[value % alphabet.length]).join("");
}
async function lanShareUrl(room) {
const url = new URL(window.location.href);
url.searchParams.set("lanRoom", room);
const localHostnames = new Set(["127.0.0.1", "localhost", "::1"]);
if (!localHostnames.has(window.location.hostname)) {
return url.toString();
}
const check = await fetchLanInfoStatus();
const address = Array.isArray(check.info?.addresses) ? check.info.addresses[0] : "";
const port = Number(check.info?.port) || 5174;
if (check.ok && address) {
return `http://${address}:${port}/index.html?lanRoom=${encodeURIComponent(room)}`;
}
return url.toString();
}
async function showLanShareLink(room) {
const cleanRoom = normalizeLanRoom(room);
if (!cleanRoom) {
els.lanShareLine.hidden = true;
els.lanShareLink.removeAttribute("href");
els.lanShareLink.textContent = "";
hideLanInviteCard();
showLanDuelCard("", "");
return "";
}
const shareUrl = await lanShareUrl(cleanRoom);
els.lanShareLine.hidden = false;
els.lanShareLink.href = shareUrl;
els.lanShareLink.textContent = shareUrl;
showLanDuelCard(cleanRoom, shareUrl);
return shareUrl;
}
function renderLanInviteQr(shareUrl) {
els.lanInviteQr.innerHTML = "";
els.lanInviteQr.setAttribute("aria-label", t("lanInviteQrAria"));
if (!shareUrl || typeof window.qrcode !== "function") {
return false;
}
try {
const qr = window.qrcode(0, "M");
qr.addData(shareUrl);
qr.make();
els.lanInviteQr.innerHTML = qr.createSvgTag({ cellSize: 4, margin: 2, title: t("lanInviteQrAria") });
return true;
} catch (error) {
els.lanInviteQr.innerHTML = "";
return false;
}
}
function renderLanDuelQr(shareUrl) {
els.lanDuelQr.innerHTML = "";
els.lanDuelQr.setAttribute("aria-label", t("lanDuelQrAria"));
if (!shareUrl || typeof window.qrcode !== "function") {
return false;
}
try {
const qr = window.qrcode(0, "M");
qr.addData(shareUrl);
qr.make();
els.lanDuelQr.innerHTML = qr.createSvgTag({ cellSize: 4, margin: 2, title: t("lanDuelQrAria") });
return true;
} catch (error) {
els.lanDuelQr.innerHTML = "";
return false;
}
}
function qrFileName(room = currentLanRoom()) {
const cleanRoom = normalizeLanRoom(room) || "room";
return `jeffery-chess-${cleanRoom}-qr.png`;
}
function qrSvgElement(qrContainer) {
return qrContainer?.querySelector("svg") || null;
}
async function qrPngBlob(qrContainer) {
const svg = qrSvgElement(qrContainer);
if (!svg) {
return null;
}
const source = new XMLSerializer().serializeToString(svg);
const svgBlob = new Blob([source], { type: "image/svg+xml;charset=utf-8" });
const svgUrl = URL.createObjectURL(svgBlob);
try {
const image = await new Promise((resolve, reject) => {
const img = new Image();
img.onload = () => resolve(img);
img.onerror = reject;
img.src = svgUrl;
});
const size = 512;
const canvas = document.createElement("canvas");
canvas.width = size;
canvas.height = size;
const context = canvas.getContext("2d");
context.fillStyle = "#ffffff";
context.fillRect(0, 0, size, size);
context.drawImage(image, 0, 0, size, size);
return await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
} finally {
URL.revokeObjectURL(svgUrl);
}
}
function downloadBlob(blob, fileName) {
const url = URL.createObjectURL(blob);
const link = document.createElement("a");
link.href = url;
link.download = fileName;
document.body.append(link);
link.click();
link.remove();
window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}
async function downloadLanQr(qrContainer = els.lanDuelQr, room = currentLanRoom()) {
const blob = await qrPngBlob(qrContainer);
if (!blob) {
setNotice(t("lanQrMissing"));
return false;
}
downloadBlob(blob, qrFileName(room));
setNotice(t("lanQrDownloaded"));
return true;
}
async function copyLanQr(qrContainer = els.lanDuelQr, room = currentLanRoom()) {
const blob = await qrPngBlob(qrContainer);
if (!blob) {
setNotice(t("lanQrMissing"));
return;
}
try {
if (!window.ClipboardItem || !navigator.clipboard?.write) {
throw new Error("Image clipboard is unavailable");
}
await navigator.clipboard.write([new window.ClipboardItem({ "image/png": blob })]);
setNotice(t("lanQrCopied"));
} catch (error) {
downloadBlob(blob, qrFileName(room));
setNotice(t("lanQrCopyFallback"));
}
}
function showLanDuelCard(room = "", shareUrl = "") {
const cleanRoom = normalizeLanRoom(room);
const isReady = Boolean(cleanRoom && shareUrl);
els.lanDuelCard.dataset.room = cleanRoom;
els.lanDuelLabel.textContent = t("lanDuelLabel");
els.lanDuelTitle.textContent = t("lanDuelTitle");
els.lanDuelText.textContent = t("lanDuelText");
els.lanDuelNote.textContent = t("lanDuelNote");
els.lanDuelRoom.textContent = cleanRoom ? t("lanDuelRoom", { room: cleanRoom }) : t("lanDuelRoomEmpty");
els.lanDuelPill.textContent = isReady ? t("lanDuelReady") : t("lanDuelNotReady");
els.lanDuelPill.classList.toggle("is-ready", isReady);
setButtonContent(els.lanCopyQrBtn, "⧉", t("lanQrCopy"));
setButtonContent(els.lanDownloadQrBtn, "↓", t("lanQrDownload"));
setButtonContent(els.lanDuelQrBtn, "▣", t("lanDuelGenerate"));
if (isReady) {
els.lanDuelLink.hidden = false;
els.lanDuelLink.href = shareUrl;
els.lanDuelLink.textContent = shareUrl;
} else {
els.lanDuelLink.hidden = true;
els.lanDuelLink.removeAttribute("href");
els.lanDuelLink.textContent = "";
}
const rendered = renderLanDuelQr(isReady ? shareUrl : "");
els.lanCopyQrBtn.disabled = !rendered;
els.lanDownloadQrBtn.disabled = !rendered;
}
function showLanInviteCard(room, shareUrl) {
const cleanRoom = normalizeLanRoom(room);
if (!cleanRoom || !shareUrl) {
hideLanInviteCard();
return;
}
els.lanInviteCard.dataset.room = cleanRoom;
els.lanInviteCard.hidden = false;
els.lanInviteRoom.textContent = t("lanInviteRoom", { room: cleanRoom });
els.lanInviteLink.href = shareUrl;
els.lanInviteLink.textContent = shareUrl;
const rendered = renderLanInviteQr(shareUrl);
els.lanInviteCopyQrBtn.disabled = !rendered;
els.lanInviteDownloadQrBtn.disabled = !rendered;
}
function hideLanInviteCard() {
els.lanInviteCard.hidden = true;
els.lanInviteCard.dataset.room = "";
els.lanInviteQr.innerHTML = "";
els.lanInviteLink.removeAttribute("href");
els.lanInviteLink.textContent = "";
els.lanInviteCopyQrBtn.disabled = true;
els.lanInviteDownloadQrBtn.disabled = true;
}
function sendLan(payload) {
if (!isLanConnected()) {
return;
}
lanState.socket.send(JSON.stringify({
room: lanState.room,
clientVersion: appVersion,
protocolVersion: lanProtocolVersion,
...payload,
}));
}
function sendLanMove(result) {
sendLan({
type: "move",
move: {
from: result.from,
to: result.to,
promotion: result.promotion,
},
san: result.san,
fen: game.fen(),
lastMove,
});
}
function loadLanFen(fen, last = null) {
if (!fen) {
return;
}
try {
game.load(fen);
currentGameUsedTip = false;
lastMove = last;
recordedResult = null;
recordedProfileOutcome = null;
recordedRankDelta = 0;
clearRecordedLeagueResult();
postGameReview = null;
lastRankedSettlement = null;
clearRankedGameEligibility();
clearProfessionalLeagueGameEligibility();
clearSelection();
closePromotion();
render();
saveCurrentGame();
playPositionSound(0.18);
} catch (error) {
}
}
function applyLanMove(payload) {
const result = makeMove(payload.move, { byLan: true });
if (result) {
return;
}
loadLanFen(payload.fen, payload.lastMove ?? null);
}
function clearLanReconnectTimer() {
if (lanState.reconnectTimer) {
window.clearTimeout(lanState.reconnectTimer);
lanState.reconnectTimer = null;
}
}
function updateLanPeerMetadata(payload) {
lanState.versions = Array.isArray(payload.versions) ? payload.versions : lanState.versions || [];
lanState.peers = Array.isArray(payload.peers) ? payload.peers : lanState.peers || [];
lanState.protocolVersion = Number(payload.protocolVersion) || lanState.protocolVersion || lanProtocolVersion;
}
function getLanClientId() {
try {
const saved = window.localStorage.getItem(lanClientIdStorageKey);
if (saved) {
return saved;
}
const created = window.crypto?.randomUUID
? window.crypto.randomUUID()
: `lan-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
window.localStorage.setItem(lanClientIdStorageKey, created);
return created;
} catch (error) {
return `lan-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}
}
function markLanDisconnected({ keepRoom = true } = {}) {
clearLanReconnectTimer();
lanState.status = "disconnected";
lanState.socket = null;
lanState.color = null;
lanState.clients = 0;
lanState.versions = [];
lanState.peers = [];
lanState.protocolVersion = lanProtocolVersion;
lanState.reconnectAttempts = 0;
if (!keepRoom) {
lanState.room = "";
}
renderLanPanel();
}
function scheduleLanReconnect(socket) {
if (lanState.socket !== socket || lanState.manualDisconnect || !lanState.room) {
return false;
}
if (lanState.reconnectAttempts >= lanReconnectMaxAttempts) {
markLanDisconnected();
setNotice(t("lanReconnectFailed"));
return true;
}
lanState.reconnectAttempts += 1;
lanState.status = "connecting";
lanState.socket = null;
lanState.color = null;
lanState.clients = 0;
lanState.versions = [];
lanState.peers = [];
lanState.protocolVersion = lanProtocolVersion;
renderLanPanel();
setNotice(t("lanReconnectNotice", { attempt: lanState.reconnectAttempts, max: lanReconnectMaxAttempts }));
clearLanReconnectTimer();
lanState.reconnectTimer = window.setTimeout(() => {
lanState.reconnectTimer = null;
connectLan({ reconnect: true });
}, lanReconnectDelayMs);
return true;
}
function handleLanMessage(payload) {
if (payload.type === "joined") {
const wasReconnecting = lanState.reconnectAttempts > 0;
clearLanReconnectTimer();
lanState.status = "connected";
lanState.room = payload.room;
lanState.color = payload.color;
lanState.clients = payload.clients || 1;
updateLanPeerMetadata(payload);
lanState.reconnectAttempts = 0;
lanState.manualDisconnect = false;
aiEnabled = false;
rankedModeEnabled = false;
professionalLeagueModeEnabled = false;
saveRankedMode();
saveProfessionalLeagueMode();
clearRankedGameEligibility();
clearProfessionalLeagueGameEligibility();
if (payload.color === "w" || payload.color === "b") {
orientation = payload.color;
unlockAchievement("lan-traveler");
}
loadLanFen(payload.fen, payload.lastMove ?? null);
render();
setNotice(t(wasReconnecting ? "lanReconnectedNotice" : "lanConnectedNotice", { room: payload.room }));
return;
}
if (payload.type === "presence") {
lanState.clients = payload.clients || lanState.clients;
updateLanPeerMetadata(payload);
renderLanPanel();
return;
}
if (payload.type === "move") {
applyLanMove(payload);
return;
}
if (payload.type === "reset") {
resetGame({ byLan: true });
setNotice(t("lanResetNotice"));
}
}
function showLanPreflightIssue(messageKey) {
lastLanCheck = { ok: false, base: "", info: null };
renderLanCheckResult(lastLanCheck);
const message = t(messageKey);
els.lanDetail.textContent = message;
setNotice(message);
openLanDiagnosticFromStatus(lastLanCheck, { urgent: true });
}
function ensureLanSharePage() {
const blockedPageKey = lanBlockedPageMessageKey();
if (!blockedPageKey) {
return true;
}
showLanPreflightIssue(blockedPageKey);
return false;
}
async function preflightLanConnection(room) {
if (!room) {
setNotice(t("lanNeedRoom"));
return false;
}
const blockedPageKey = lanBlockedPageMessageKey();
if (blockedPageKey) {
showLanPreflightIssue(blockedPageKey);
return false;
}
els.lanCheckCard.hidden = false;
els.lanCheckPill.textContent = t("lanCheckChecking");
els.lanCheckPill.classList.remove("is-online", "is-offline");
els.lanCheckList.innerHTML = "";
appendLanCheckRow(t("lanCheckServer"), t("lanConnectChecking"));
appendLanCheckRow(t("lanCheckPage"), lanCurrentPageCheckText());
const check = await fetchLanInfoStatus();
lastLanCheck = check;
renderLanCheckResult(check);
if (!check.ok) {
els.lanDetail.textContent = t("lanConnectError");
setNotice(t("lanConnectError"));
openLanDiagnosticFromStatus(check, { urgent: true });
return false;
}
return true;
}
async function connectLan({ reconnect = false } = {}) {
const room = normalizeLanRoom(els.lanRoomInput.value);
if (!await preflightLanConnection(room)) {
return false;
}
els.lanRoomInput.value = room;
const reconnectAttempts = reconnect ? lanState.reconnectAttempts : 0;
if (!reconnect) {
disconnectLan({ silent: true, manual: false });
stopAiThinking();
aiEnabled = false;
rankedModeEnabled = false;
professionalLeagueModeEnabled = false;
saveRankedMode();
saveProfessionalLeagueMode();
clearRankedGameEligibility();
clearProfessionalLeagueGameEligibility();
showLanShareLink(room);
}
lanState = {
socket: null,
status: "connecting",
room,
color: null,
clients: 0,
versions: [appVersion],
peers: [],
protocolVersion: lanProtocolVersion,
reconnectAttempts,
reconnectTimer: lanState.reconnectTimer || null,
manualDisconnect: false,
};
renderLanPanel();
try {
const socket = new WebSocket(await lanWebSocketUrl());
lanState.socket = socket;
socket.addEventListener("open", () => {
socket.send(JSON.stringify({
type: "join",
room,
clientVersion: appVersion,
protocolVersion: lanProtocolVersion,
clientId: getLanClientId(),
}));
});
socket.addEventListener("message", (event) => {
try {
handleLanMessage(JSON.parse(event.data));
} catch (error) {
}
});
socket.addEventListener("close", () => {
scheduleLanReconnect(socket);
});
socket.addEventListener("error", () => {
if (lanState.socket !== socket) {
return;
}
setNotice(t("lanConnectError"));
});
return true;
} catch (error) {
if (reconnect && lanState.reconnectAttempts < lanReconnectMaxAttempts) {
lanState.socket = { readyState: WebSocket.CLOSED };
scheduleLanReconnect(lanState.socket);
return false;
}
markLanDisconnected();
setNotice(reconnect ? t("lanReconnectFailed") : t("lanConnectError"));
return false;
}
}
function disconnectLan({ silent = false, manual = true } = {}) {
clearLanReconnectTimer();
lanState.manualDisconnect = manual;
if (lanState.socket) {
lanState.socket.close();
}
markLanDisconnected();
if (!silent) {
setNotice(t("lanDisconnectedNotice"));
}
}
function reconnectLan() {
const room = currentLanRoom();
if (!room) {
setNotice(t("lanNeedRoom"));
return;
}
els.lanRoomInput.value = room;
connectLan();
}
function focusLanRoomInput() {
els.lanRoomInput.focus();
els.lanRoomInput.select();
}
async function joinNearbyLanRoom() {
await checkLanStatus();
const room = currentLanRoom();
if (room) {
connectLan();
return;
}
focusLanRoomInput();
setNotice(t("lanModeNearbyReady"));
}
function roomFromLanInviteText(text = "") {
const raw = String(text || "").trim();
if (!raw) {
return "";
}
try {
const url = new URL(raw);
return normalizeLanRoom(url.searchParams.get("lanRoom") || "");
} catch (error) {
return normalizeLanRoom(raw);
}
}
function nativeQrScannerAvailable() {
return Boolean(
isIosAppBuild() &&
window.JEFFERY_CHESS_NATIVE_QR &&
window.webkit?.messageHandlers?.scanLanQr,
);
}
function handleScannedLanRoomText(scanned, { cancelled = false } = {}) {
const room = roomFromLanInviteText(scanned || "");
if (!room) {
setNotice(t(cancelled ? "lanModeCodeFocus" : "lanModeScanEmpty"));
focusLanRoomInput();
return false;
}
els.lanRoomInput.value = room;
setNotice(t("lanModeScanNativeFound"));
renderLanPanel();
connectLan();
return true;
}
function handleNativeQrScanError(reason = "") {
if (reason === "camera-denied") {
setNotice(t("lanModeScanNativeDenied"));
} else if (reason === "cancelled") {
setNotice(t("lanModeScanNativeCancelled"));
} else {
setNotice(t("lanModeScanNativeUnavailable"));
}
focusLanRoomInput();
}
function joinScannedLanRoom() {
if (nativeQrScannerAvailable()) {
setNotice(t("lanModeScanNativeStarting"));
try {
window.webkit.messageHandlers.scanLanQr.postMessage("scan");
return;
} catch (error) {
handleNativeQrScanError("camera-unavailable");
return;
}
}
const scanned = window.prompt(t("lanModeScanPrompt"), "");
handleScannedLanRoomText(scanned || "", { cancelled: scanned === null });
}
function enterLanRoomCode() {
focusLanRoomInput();
setNotice(t("lanModeCodeFocus"));
}
window.jefferyChessHandleNativeQrScan = function jefferyChessHandleNativeQrScan(scanned) {
handleScannedLanRoomText(scanned || "");
};
window.jefferyChessHandleNativeQrScanError = function jefferyChessHandleNativeQrScanError(reason) {
handleNativeQrScanError(String(reason || ""));
};
async function createLanRoom() {
const room = createLanRoomCode();
els.lanRoomInput.value = room;
renderLanPanel();
const started = await connectLan();
if (!started) {
return;
}
try {
const shareUrl = await showLanShareLink(room);
showLanInviteCard(room, shareUrl);
await navigator.clipboard.writeText(shareUrl);
setNotice(t("lanRoomCreatedCopied", { room }));
} catch (error) {
const shareUrl = await showLanShareLink(room);
showLanInviteCard(room, shareUrl);
setNotice(t("lanRoomCreated", { room }));
}
}
async function copyLanLink() {
const room = normalizeLanRoom(els.lanRoomInput.value);
if (!room) {
setNotice(t("lanNeedRoom"));
return;
}
if (!ensureLanSharePage()) {
return;
}
els.lanRoomInput.value = room;
try {
const shareUrl = await showLanShareLink(room);
showLanInviteCard(room, shareUrl);
await navigator.clipboard.writeText(shareUrl);
setNotice(t("lanCopied"));
} catch (error) {
const shareUrl = await showLanShareLink(room);
showLanInviteCard(room, shareUrl);
setNotice(t("lanCopyFailed"));
}
}
async function generateLanDuelQr() {
let room = normalizeLanRoom(els.lanRoomInput.value);
if (!ensureLanSharePage()) {
return;
}
if (!room) {
room = createLanRoomCode();
els.lanRoomInput.value = room;
}
renderLanPanel();
const shareUrl = await showLanShareLink(room);
showLanInviteCard(room, shareUrl);
setNotice(t("lanDuelCreated", { room }));
}
function setFeedbackKind(kind) {
feedbackKind = ["bug", "idea", "praise"].includes(kind) ? kind : "bug";
renderFeedbackState();
updateFeedbackBackup();
}
function updateAdminStarVisibility() {}
function openProfile() {
closeMoreMenu();
closeRankSummary();
renderProfile();
els.profileDialog.hidden = false;
window.setTimeout(() => els.closeProfileBtn.focus(), 0);
}
function closeProfile() {
els.profileDialog.hidden = true;
}
function openProfileAchievements() {
closeProfile();
openAchievementDialog();
}
function openRankSummary() {
closeMoreMenu();
els.rankPanel.hidden = false;
els.rankSummaryBtn.setAttribute("aria-expanded", "true");
els.rankPanel.classList.add("is-highlighted");
window.setTimeout(() => {
els.rankPanel.classList.remove("is-highlighted");
}, 1300);
}
function openProfileRank() {
closeProfile();
openRankSummary();
}
function openAchievementDialog() {
closeProfile();
closeMoreMenu();
renderAchievements();
els.achievementDialog.hidden = false;
window.setTimeout(() => els.achievementDoneBtn.focus(), 0);
}
function closeAchievementDialog() {
els.achievementDialog.hidden = true;
}
function openLeaderboardDialog() {
closeProfile();
closeMoreMenu();
renderLeaderboard();
els.leaderboardDialog.hidden = false;
fetchOnlineLeagueLeaderboard();
window.setTimeout(() => els.closeLeaderboardBtn.focus(), 0);
}
function closeLeaderboardDialog() {
els.leaderboardDialog.hidden = true;
}
function closeRankSummary() {
els.rankPanel.hidden = true;
els.rankSummaryBtn.setAttribute("aria-expanded", "false");
els.rankPanel.classList.remove("is-highlighted");
}
function toggleRankSummary(event) {
event?.stopPropagation();
const shouldOpen = els.rankPanel.hidden;
if (!shouldOpen) {
closeRankSummary();
return;
}
openRankSummary();
}
function openFeedback() {
closeProfile();
closeMoreMenu();
els.feedbackMessage.textContent = "";
els.feedbackDialog.hidden = false;
renderFeedbackState();
updateFeedbackBackup();
window.setTimeout(() => els.feedbackText.focus(), 0);
}
function closeFeedback() {
els.feedbackDialog.hidden = true;
els.feedbackMessage.textContent = "";
}
function openReleaseDialog() {
renderReleaseInfo();
els.releaseDialog.hidden = false;
checkPublishStatus({ silent: true });
}
function closeReleaseDialog() {
els.releaseDialog.hidden = true;
}
async function handleFeedbackSubmit(event) {
event.preventDefault();
const text = els.feedbackText.value.trim();
if (!text) {
els.feedbackMessage.textContent = t("feedbackNeedText");
return;
}
try {
const account = currentAccount();
const entry = {
id: createFeedbackId(),
kind: feedbackKind,
kindLabel: feedbackKindName(),
to: feedbackMailboxAddress,
text,
account: account?.name ?? t("accountGuest"),
language: currentLanguage,
fen: game.fen(),
pgn: game.pgn(),
status: "new",
reply: "",
createdAt: new Date().toISOString(),
};
saveFeedbackEntry(entry);
els.feedbackMessage.textContent = t("feedbackSending");
const sentOnline = await submitFeedbackOnline(entry);
els.feedbackText.value = "";
updateFeedbackBackup();
const feedbackNotice = sentOnline
? t("feedbackSavedWithId", { id: entry.id })
: t("feedbackSavedLocalWithId", { id: entry.id });
els.feedbackMessage.textContent = feedbackNotice;
renderFeedbackState();
unlockAchievement("feedback-voice");
setNotice(feedbackNotice);
} catch (error) {
els.feedbackMessage.textContent = t("feedbackSaveFailed");
}
}
function openMoreMenu() {
els.moreMenu.hidden = false;
els.moreMenuBtn.setAttribute("aria-expanded", "true");
}
function closeMoreMenu() {
els.moreMenu.hidden = true;
els.moreMenuBtn.setAttribute("aria-expanded", "false");
}
function toggleMoreMenu() {
if (els.moreMenu.hidden) {
openMoreMenu();
} else {
closeMoreMenu();
}
}
els.newGameBtn.addEventListener("click", resetGame);
els.continueGameBtn.addEventListener("click", dismissContinuePrompt);
els.tipBtn.addEventListener("click", showTip);
els.tutorialBtn.addEventListener("click", openTutorial);
els.dailyEndgameBtn.addEventListener("click", startDailyEndgame);
els.mateOneBtn.addEventListener("click", startMateInOneTraining);
els.reviewPracticeBtn.addEventListener("click", practicePostGameMistake);
els.undoBtn.addEventListener("click", undoMove);
els.flipBtn.addEventListener("click", flipBoard);
els.musicBtn.addEventListener("click", toggleBackgroundMusic);
els.testMusicBtn.addEventListener("click", () => testSound("music"));
els.testEffectsBtn.addEventListener("click", () => testSound("effects"));
els.testVoiceBtn.addEventListener("click", () => testSound("voice"));
els.musicVolumeInput.addEventListener("input", (event) => setVolumeSetting("music", event.target.value));
els.effectsVolumeInput.addEventListener("input", (event) => setVolumeSetting("effects", event.target.value));
els.voiceVolumeInput.addEventListener("input", (event) => setVolumeSetting("voice", event.target.value));
els.profileBtn.addEventListener("click", openProfile);
els.closeProfileBtn.addEventListener("click", closeProfile);
els.profileAuthBtn.addEventListener("click", () => openAuth("login"));
els.profileLogoutBtn.addEventListener("click", logoutAccount);
els.profileDeleteAccountBtn.addEventListener("click", deleteCurrentAccount);
els.profileAchievementBtn.addEventListener("click", openProfileAchievements);
els.profileRankBtn.addEventListener("click", openProfileRank);
els.profileLeaderboardBtn.addEventListener("click", openLeaderboardDialog);
els.profileExportBtn.addEventListener("click", exportPlayerProfile);
els.profileImportBtn.addEventListener("click", () => els.profileImportInput.click());
els.profileMistakeBookBtn.addEventListener("click", toggleMistakeBookPanel);
els.profileRealBoardBtn.addEventListener("click", toggleRealBoardPanel);
els.profileCloudBackupBtn.addEventListener("click", syncProfileCloudBackup);
els.profileCloudRestoreBtn.addEventListener("click", restoreProfileCloudBackup);
els.mistakeBookPracticeBtn.addEventListener("click", practiceLatestMistake);
els.mistakeBookClearBtn.addEventListener("click", clearMistakeBook);
els.realBoardCopyBtn.addEventListener("click", copyRealBoardPosition);
els.realBoardCloseBtn.addEventListener("click", () => {
els.realBoardPanel.hidden = true;
});
els.profileImportInput.addEventListener("change", handleProfileImportFile);
els.profileImportConfirmBtn.addEventListener("click", confirmProfileImport);
els.profileImportCancelBtn.addEventListener("click", () => {
clearProfileImportPreview();
setNotice(t("profileImportCancelled"));
});
els.achievementBtn.addEventListener("click", openAchievementDialog);
els.closeAchievementBtn.addEventListener("click", closeAchievementDialog);
els.achievementDoneBtn.addEventListener("click", closeAchievementDialog);
els.leaderboardBtn.addEventListener("click", openLeaderboardDialog);
els.closeLeaderboardBtn.addEventListener("click", closeLeaderboardDialog);
els.rankSummaryBtn.addEventListener("click", toggleRankSummary);
els.feedbackBtn.addEventListener("click", openFeedback);
els.closeFeedbackBtn.addEventListener("click", closeFeedback);
els.cancelFeedbackBtn.addEventListener("click", closeFeedback);
els.feedbackForm.addEventListener("submit", handleFeedbackSubmit);
els.feedbackText.addEventListener("input", updateFeedbackBackup);
els.copyFeedbackBackupBtn.addEventListener("click", copyFeedbackBackup);
els.versionBtn.addEventListener("click", openReleaseDialog);
els.closeReleaseBtn.addEventListener("click", closeReleaseDialog);
els.checkUpdateBtn.addEventListener("click", checkForUpdates);
els.checkHealthBtn.addEventListener("click", checkVersionHealth);
els.onlineSelfCheckBtn.addEventListener("click", runOnlineSelfCheck);
els.installPwaBtn.addEventListener("click", installPwaApp);
els.sharePublicSiteBtn.addEventListener("click", copyPublicPlayerLink);
els.releaseProfileExportBtn.addEventListener("click", exportSafeProfileFromRelease);
els.releaseProfileImportBtn.addEventListener("click", importSafeProfileFromRelease);
els.releaseProfileDismissBtn.addEventListener("click", dismissProfileExportReminder);
els.applyUpdateBtn.addEventListener("click", applyAvailableUpdate);
els.restoreBackupBtn.addEventListener("click", restoreProfileBackup);
els.restoreRankBackupBtn.addEventListener("click", () => restoreProfileBackupPart("rank"));
els.restoreAchievementsBackupBtn.addEventListener("click", () => restoreProfileBackupPart("achievements"));
els.restoreGameBackupBtn.addEventListener("click", () => restoreProfileBackupPart("game"));
els.feedbackKindButtons.forEach((button) => {
button.addEventListener("click", () => setFeedbackKind(button.dataset.feedbackKind));
});
els.lanCreateBtn.addEventListener("click", createLanRoom);
els.lanConnectBtn.addEventListener("click", connectLan);
els.lanReconnectBtn.addEventListener("click", reconnectLan);
els.lanDisconnectBtn.addEventListener("click", () => disconnectLan());
els.lanCopyLinkBtn.addEventListener("click", copyLanLink);
els.lanModeCreateBtn.addEventListener("click", createLanRoom);
els.lanModeNearbyBtn.addEventListener("click", joinNearbyLanRoom);
els.lanModeScanBtn.addEventListener("click", joinScannedLanRoom);
els.lanModeCodeBtn.addEventListener("click", enterLanRoomCode);
els.gameCenterAuthBtn.addEventListener("click", () => postGameCenterAction("authenticate"));
els.gameCenterMatchBtn.addEventListener("click", () => postGameCenterAction("match"));
els.gameCenterDashboardBtn.addEventListener("click", () => postGameCenterAction("dashboard"));
els.lanDuelQrBtn.addEventListener("click", generateLanDuelQr);
els.lanCheckBtn.addEventListener("click", checkLanStatus);
els.lanDiagnosticBtn.addEventListener("click", openLanDiagnostic);
els.lanCopyHostBtn.addEventListener("click", copyLanHostAddress);
els.lanOpenHostBtn.addEventListener("click", openLanHostPage);
els.lanHostInput.addEventListener("keydown", (event) => {
if (event.key === "Enter") {
openLanHostPage();
}
});
els.lanCopyQrBtn.addEventListener("click", () => copyLanQr(els.lanDuelQr, els.lanDuelCard.dataset.room || currentLanRoom()));
els.lanDownloadQrBtn.addEventListener("click", () => downloadLanQr(els.lanDuelQr, els.lanDuelCard.dataset.room || currentLanRoom()));
els.lanInviteCopyQrBtn.addEventListener("click", () => copyLanQr(els.lanInviteQr, els.lanInviteCard.dataset.room || currentLanRoom()));
els.lanInviteDownloadQrBtn.addEventListener("click", () => downloadLanQr(els.lanInviteQr, els.lanInviteCard.dataset.room || currentLanRoom()));
els.lanInviteCloseBtn.addEventListener("click", hideLanInviteCard);
els.closeLanDiagnosticBtn.addEventListener("click", closeLanDiagnostic);
els.closeLanDiagnosticDoneBtn.addEventListener("click", closeLanDiagnostic);
els.copyLanDiagnosticBtn.addEventListener("click", copyLanDiagnostic);
els.lanRoomInput.addEventListener("input", renderLanPanel);
els.lanRoomInput.addEventListener("keydown", (event) => {
if (event.key === "Enter") {
connectLan();
}
});
els.moreMenuBtn.addEventListener("click", (event) => {
event.stopPropagation();
toggleMoreMenu();
});
els.moreMenu.addEventListener("click", (event) => {
event.stopPropagation();
});
els.rankPanel.addEventListener("click", (event) => {
event.stopPropagation();
});
els.authOpenBtn.addEventListener("click", () => openAuth("login"));
els.logoutBtn.addEventListener("click", logoutAccount);
els.deleteAccountBtn.addEventListener("click", deleteCurrentAccount);
els.closeAuthBtn.addEventListener("click", closeAuth);
els.cancelAuthBtn.addEventListener("click", closeAuth);
els.authForm.addEventListener("submit", handleAuthSubmit);
els.authModeButtons.forEach((button) => {
button.addEventListener("click", () => setAuthMode(button.dataset.authMode));
});
els.languageButtons.forEach((button) => {
button.addEventListener("click", () => setLanguage(button.dataset.language));
});
els.boardThemeButtons.forEach((button) => {
button.addEventListener("click", () => setBoardTheme(button.dataset.boardTheme));
});
els.aiToggleBtn.addEventListener("click", toggleAi);
els.playerSideBtn.addEventListener("click", togglePlayerSide);
els.rankedModeBtn.addEventListener("click", toggleRankedMode);
els.professionalLeagueBtn.addEventListener("click", toggleProfessionalLeagueMode);
els.aiLevelButtons.forEach((button) => {
button.addEventListener("click", () => setAiLevel(Number(button.dataset.aiLevel)));
});
els.friendWhiteName.addEventListener("change", () => saveFriendNames({ notify: true }));
els.friendBlackName.addEventListener("change", () => saveFriendNames({ notify: true }));
els.friendWhiteName.addEventListener("keydown", (event) => {
if (event.key === "Enter") {
saveFriendNames({ notify: true });
els.friendBlackName.focus();
}
});
els.friendBlackName.addEventListener("keydown", (event) => {
if (event.key === "Enter") {
saveFriendNames({ notify: true });
els.friendBlackName.blur();
}
});
els.resetScoreBtn.addEventListener("click", resetMatchScore);
els.copyFenBtn.addEventListener("click", () => copyText(game.fen(), "FEN"));
els.copyPgnBtn.addEventListener("click", () => copyText(game.pgn(), "PGN"));
els.loadFenBtn.addEventListener("click", loadFen);
els.cancelPromotionBtn.addEventListener("click", () => {
closePromotion();
renderBoard();
});
els.closeTutorialBtn.addEventListener("click", () => closeTutorial());
els.tutorialPrevBtn.addEventListener("click", showPreviousTutorialStep);
els.tutorialNextBtn.addEventListener("click", showNextTutorialStep);
els.onboardingSkipBtn.addEventListener("click", closeOnboarding);
els.onboardingTutorialBtn.addEventListener("click", startOnboardingTutorial);
els.authDialog.addEventListener("click", (event) => {
if (event.target === els.authDialog) {
closeAuth();
}
});
els.achievementDialog.addEventListener("click", (event) => {
if (event.target === els.achievementDialog) {
closeAchievementDialog();
}
});
els.leaderboardDialog.addEventListener("click", (event) => {
if (event.target === els.leaderboardDialog) {
closeLeaderboardDialog();
}
});
els.feedbackDialog.addEventListener("click", (event) => {
if (event.target === els.feedbackDialog) {
closeFeedback();
}
});
els.releaseDialog.addEventListener("click", (event) => {
if (event.target === els.releaseDialog) {
closeReleaseDialog();
}
});
els.lanDiagnosticDialog.addEventListener("click", (event) => {
if (event.target === els.lanDiagnosticDialog) {
closeLanDiagnostic();
}
});
els.profileDialog.addEventListener("click", (event) => {
if (event.target === els.profileDialog) {
closeProfile();
return;
}
event.stopPropagation();
});
document.addEventListener("click", () => closeMoreMenu());
document.addEventListener("click", closeRankSummary);
document.addEventListener("keydown", (event) => {
if (event.key === "Escape") {
closeMoreMenu();
closeRankSummary();
closeProfile();
closeAchievementDialog();
closeLeaderboardDialog();
closeFeedback();
closeReleaseDialog();
closeLanDiagnostic();
closeOnboarding();
}
});
els.promotionDialog.addEventListener("click", (event) => {
if (event.target === els.promotionDialog) {
closePromotion();
renderBoard();
}
});
els.tutorialDialog.addEventListener("click", (event) => {
if (event.target === els.tutorialDialog) {
closeTutorial();
}
});
els.onboardingDialog.addEventListener("click", (event) => {
if (event.target === els.onboardingDialog) {
closeOnboarding();
}
});
window.addEventListener("keydown", (event) => {
if (event.key !== "Escape") {
return;
}
if (!els.promotionDialog.hidden) {
closePromotion();
renderBoard();
} else if (!els.tutorialDialog.hidden) {
closeTutorial();
}
});
window.addEventListener("pointerdown", unlockAudio, { once: true });
window.addEventListener("keydown", unlockAudio, { once: true });
window.addEventListener("beforeunload", () => {
saveCurrentGame();
disconnectLan({ silent: true });
});
function registerOfflineApp() {
if (!("serviceWorker" in navigator) || !["http:", "https:"].includes(window.location.protocol)) {
return;
}
navigator.serviceWorker.register("./service-worker.js").catch(() => {
});
}
window.addEventListener("beforeinstallprompt", (event) => {
event.preventDefault();
deferredInstallPrompt = event;
pwaInstallState = "ready";
renderPwaInstall();
});
window.addEventListener("appinstalled", () => {
deferredInstallPrompt = null;
pwaInstallState = "installed";
setNotice(t("pwaInstallInstalled"));
renderReleaseInfo();
});
const requestedLanRoom = normalizeLanRoom(new URLSearchParams(window.location.search).get("lanRoom") ?? "");
if (requestedLanRoom) {
els.lanRoomInput.value = requestedLanRoom;
}
registerOfflineApp();
applyBoardTheme(boardTheme);
restoreSavedGame();
render();
refreshLanHostCard();
openOnboardingIfNeeded();
showUpdateCompleteNotice();
checkForUpdates({ silent: true });
fetchOfficialRankProfile();
scheduleAiMove();
updateAdminStarVisibility();
