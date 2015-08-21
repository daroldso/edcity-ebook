(function() {

window.Book = {
	/**
	 * Chapter 1
	 */
	'ch1': {
		exercises: {
			'ex1': {
				clientref: 1,
				layout: 1,
				name: "練習講多謝",
				instruction: "在以下的情況下，我們要說什麼？",
				type: "chooseSingleCheckImmediate",
				questions:  [
					{
						index: 0,
						correct: false,
						wrong: false,
						isCorrect: false,
						questionText: "收到禮物時要講：",
						answers: [
							{correct: false, selected: false, text: "我唔鍾意呢個。"},
							{correct: true, selected: false, text: "多謝你！"}
						]
					},
					{
						index: 1,
						correct: false,
						wrong: false,
						isCorrect: false,
						questionText: "校長讚我表現好時，要講：",
						answers: [
							{correct: true, selected: false, text: "多謝！"},
							{correct: false, selected: false, text: "我鍾意呀！"}
						]
					},
					{
						index: 2,
						correct: false,
						wrong: false,
						isCorrect: false,
						questionText: "人地讚我時，要講：",
						answers: [
							{correct: false, selected: false, text: "差不多時候啦！"},
							{correct: true, selected: false, text: "多謝！"}
						]
					},
					{
						index: 3,
						correct: false,
						wrong: false,
						isCorrect: false,
						questionText: "朋友邀請我參加活動時，要講：",
						answers: [
							{correct: false, selected: false, text: "我想去廁所呀。"},
							{correct: true, selected: false, text: "好呀。多謝你！"}
						]
					},
					{
						index: 4,
						correct: false,
						wrong: false,
						isCorrect: false,
						questionText: "朋友請我吃東西，我要講：",
						answers: [
							{correct: false, selected: false, text: "我想食多D！"},
							{correct: true, selected: false, text: "多謝你，好好味呀！"}
						]
					},
				]
			},
			// 配對 句字放在一個方格
			'ex2': {
				clientref: 9,
				layout: 8,
				name: "說多謝的不同方式",
				instruction: "別人送禮物給你，除了說「多謝」以外，還可以有很多不同方式表達謝意。請看看下面的句子，將不適當的句子放進垃圾箱內。",
				type: "dragnDrop_OneDropzone",
				dragndropType: "multipleDropzone",
				dragndropBehavior: "normal",
				questions:  [
					{
						index: 0,
						correct: false,
						wrong: false,
						isCorrect: false,
						questionText: "句子：",
						dragPools: [
							{type: 0, text: ""}
						],
						dropPools: [
							{type: 1, text: ""}
						],
						answers: [
							{ index: 0, correct: false, selected: false, text: "嘩！我好鍾意！"},
							{ index: 1, correct: true, selected: false, text: "都唔靚嘅！"},
							{ index: 2, correct: false, selected: false, text: "嘩！我想即刻試吓！"},
							{ index: 3, correct: false, selected: false, text: "嘩！好靚呀！"},
							{ index: 4, correct: false, selected: false, text: "我鍾意呢個顏色！"},
							{ index: 5, correct: true, selected: false, text: "我覺得無乜用喎！"},
							{ index: 6, correct: false, selected: false, text: "嘩！好嘢！"},
							{ index: 7, correct: false, selected: false, text: "我搵咗呢個款好耐啦！"},
							{ index: 8, correct: false, selected: false, text: "我啱啱想買…"},
							{ index: 9, correct: true, selected: false, text: "呢個麻麻地啦…"},
							{ index: 10, correct: false, selected: false, text: "啱晒，我無呢個。"},
						],
						numOfCorrectAnswers: 3,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
				]
			},
			'ex3': {
				clientref: 2,
				layout: 2,
				name: "如何說多謝",
				instruction: '請在適當的 ☐ 內加上「✔」。',
				type: "chooseMultipleAnswer",
				questions:  [
					{
						index: 0,
						correct: false,
						wrong: false,
						questionText: "當別人送禮物給我們時，我們要說：",
						questionText2: "",
						answers: [
							{correct: false, selected: false, text: "呀！我不想要這個！"},
							{correct: true, selected: false, text: "多謝！"}
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 1,
						correct: false,
						wrong: false,
						questionText: "有沒有其他方法說「多謝」？",
						questionText2: "（可選擇多於一個答案）",
						answers: [
							{correct: true, selected: false, text: "哈，多謝！"},
							{correct: true, selected: false, text: "噢，嘩！多謝！"},
							{correct: false, selected: false, text: "噢，呀！"},
							{correct: true, selected: false, text: "多謝！我很喜歡這個。"},
							{correct: true, selected: false, text: "多謝！太好啦！"}
						],
						numOfCorrectAnswers: 4,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					}
				]
			},
			// 配對 句字放在一個方格
			'ex4': {
				clientref: 10,
				layout: 9,
				name: "何時說「唔該」",
				instruction: "請分辨下列的情景是說「多謝」還是說「唔該」，然後將它們放到適當的方格內。",
				type: "dragnDrop_MultipleDropzone",
				dragndropType: "multipleDropzone",
				dragndropBehavior: "normal",
				questions:  [
					{
						index: 0,
						correct: false,
						wrong: false,
						isCorrect: false,
						questionText: "",
						dragPools: [
							{type: 0, text: ""}
						],
						dropPools: [
							{type: 1, text: "說多謝"},
							{type: 2, text: "說唔該"}
						],
						answers: [
							{ index: 0, type: 2, correct: false, selected: false, text: "圖書館職員替你完成借書手續"},
							{ index: 1, type: 1, correct: false, selected: false, text: "別人送禮物給你"},
							{ index: 2, type: 1, correct: false, selected: false, text: "別人稱讚你"},
							{ index: 3, type: 2, correct: false, selected: false, text: "別人替你取東西"},
							{ index: 4, type: 2, correct: false, selected: false, text: "別人替你理髮"},
							{ index: 5, type: 1, correct: false, selected: false, text: "別人出席你的生日會"},
						],
						// numOfCorrectAnswers: 3,
						correctAnswerCount: 0,
						// wrongAnswerCount: 0
					},
				]
			},
			'ex5': {
				clientref: 1,
				layout: 1,
				name: "多謝唔該考考你",
				instruction: "在以下的情況下，我們要說什麼？",
				type: "chooseSingleCheckImmediate",
				questions:  [
					{
						index: 0,
						correct: false,
						wrong: false,
						isCorrect: false,
						questionText: "朋友邀請我參加派對，我應該說？",
						answers: [
							{correct: true, selected: false, text: "多謝你的邀請"},
							{correct: false, selected: false, text: "唔該"}
						]
					},
					{
						index: 1,
						correct: false,
						wrong: false,
						isCorrect: false,
						questionText: "朋友載（送）我一程，我應該說？",
						answers: [
							{correct: true, selected: false, text: "多謝你送我一程"},
							{correct: false, selected: false, text: "唔該哂"}
						]
					},
					{
						index: 2,
						correct: false,
						wrong: false,
						isCorrect: false,
						questionText: "朋友請我吃飯，我應該說？",
						answers: [
							{correct: true, selected: false, text: "多謝你請我吃飯"},
							{correct: false, selected: false, text: "唔該"}
						]
					},
					{
						index: 3,
						correct: false,
						wrong: false,
						isCorrect: false,
						questionText: "朋友讚我做的食物好吃時，我應該說？",
						answers: [
							{correct: true, selected: false, text: "多謝"},
							{correct: false, selected: false, text: "唔該"}
						]
					},
					{
						index: 4,
						correct: false,
						wrong: false,
						isCorrect: false,
						questionText: "當朋友想起我，寫信給我時，我應該說？",
						answers: [
							{correct: true, selected: false, text: "多謝你"},
							{correct: false, selected: false, text: "唔該"}
						]
					},
				]
			},
		}
	},
	/**
	 * Chapter 2
	 */
	'ch2': {
		exercises: {
			'ex1': {
				clientref: 3,
				layout: 3,
				name: "何時要說唔好意思",
				instruction: "看過基本故事「亞偉講：唔好意思！」之後，你還記得何時要說「唔好意思！」嗎？請在適當情境圖的 ☐ 加上 ✔ 號。",
				type: "chooseMultipleAnswer",
				questions:  [
					{
						index: 0,
						correct: false,
						wrong: false,
						// questionText: "收到禮物時要講：",
						answers: [
							{correct: true, selected: false, text: "放了屁"},
							{correct: true, selected: false, text: "不小心碰到人"},
							{correct: true, selected: false, text: "被別人阻路了"},
							{correct: false, selected: false, text: "想坐下"},
							{correct: true, selected: false, text: "想取得別人注意"}
						],
						numOfCorrectAnswers: 4,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
				]
			},
			'ex2': {
				clientref: 4,
				layout: 4,
				name: "阿偉練習講 “唔好意思”",
				instruction: "你認為阿偉要說唔好意思嗎？請按下正確的答案。",
				type: "chooseSingleAnswer",
				questions:  [
					{
						index: 0,
						correct: false,
						wrong: false,
						questionContent: [
							"亞偉正在去戲院看電影。",
							"他在行人路上撞倒別人。",
							"亞偉向人說：「唔好意思，對唔住！」"
						],
						answers: [
							{correct: true, selected: false},
							{correct: false, selected: false}
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 1,
						correct: false,
						wrong: false,
						questionContent: [
							"亞偉忘記了怎樣去戲院，不知怎麼辦。",
							"他看到一個警察，於是請警察指導他怎樣去戲院。",
							"亞偉說：「唔好意思！請問點樣去戲院呢？」"
						],
						answers: [
							{correct: true, selected: false},
							{correct: false, selected: false}
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 2,
						correct: false,
						wrong: false,
						questionContent: [
							"亞偉多謝警察的幫忙，一會兒，他便來到戲院了！",
							"亞偉想知道下一場電影的開場時間，於是他問戲院工作人員。",
							"亞偉說：「唔好意思！請問下場戲嘅開場時間喺幾點？"
						],
						answers: [
							{correct: true, selected: false},
							{correct: false, selected: false}
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 3,
						correct: false,
						wrong: false,
						questionContent: [
							"亞偉感謝工作人員的幫忙，購了戲票之後，他便進入戲院看電影。",
							"電影就快開始了，亞偉要找個座位坐下來。",
							"唉！亞偉打噴嚏。亞偉說：「唔好意思！」"
						],
						answers: [
							{correct: true, selected: false},
							{correct: false, selected: false}
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 4,
						correct: false,
						wrong: false,
						questionContent: [
							"進入了戲院，亞偉要找個座位。",
							"亞偉問一位觀眾：「唔好意思，呢個位有冇人坐呀？」"
						],
						answers: [
							{correct: true, selected: false},
							{correct: false, selected: false}
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 5,
						correct: false,
						wrong: false,
						questionContent: [
							"那個觀眾說：「冇呀。」",
							"亞偉自言自語說：「我今日學咗幾時講『唔好意思』。」",
							"那個觀眾再說：「唔好意思！你可唔可以靜一靜，我聽唔到對白。」"
						],
						answers: [
							{correct: true, selected: false},
							{correct: false, selected: false}
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
				]
			},
			'ex3': {
				clientref: 4,
				layout: 4,
				name: "打招呼時會說甚麼呢？",
				instruction: "以下哪些是正確的打招呼用語呢？把它們找出來吧！",
				type: "chooseSingleAnswer",
				questions:  [
					{
						index: 0,
						correct: false,
						wrong: false,
						questionText: "情境一﹕身體不適，向救護人員求助。",
						questionContent: [
							"唔好意思！"
						],
						answers: [
							{correct: true, selected: false},
							{correct: false, selected: false},
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 1,
						correct: false,
						wrong: false,
						questionText: "情境二﹕遇到意外要求救。",
						questionContent: [
							"唔好意思！"
						],
						answers: [
							{correct: false, selected: false},
							{correct: true, selected: false},
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 2,
						correct: false,
						wrong: false,
						questionText: "情境三：被人搶劫要求救。",
						questionContent: [
							"唔好意思！"
						],
						answers: [
							{correct: false, selected: false},
							{correct: true, selected: false},
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 3,
						correct: false,
						wrong: false,
						questionText: "情境四：遺失重要物品要和上司報告，而上司正在工作。",
						questionContent: [
							"唔好意思！"
						],
						answers: [
							{correct: true, selected: false},
							{correct: false, selected: false},
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 4,
						correct: false,
						wrong: false,
						questionText: "情境五﹕遇到意外要求救。",
						questionContent: [
							"唔好意思！"
						],
						answers: [
							{correct: false, selected: false},
							{correct: true, selected: false},
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 5,
						correct: false,
						wrong: false,
						questionText: "情境六﹕主角想與人閒談，而那個人正在做家務。",
						questionContent: [
							"唔好意思！"
						],
						answers: [
							{correct: true, selected: false},
							{correct: false, selected: false},
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 6,
						correct: false,
						wrong: false,
						questionText: "情境七﹕廚房的水煲滾了，而媽媽正在接聽電話。",
						questionContent: [
							"唔好意思！"
						],
						answers: [
							{correct: false, selected: false},
							{correct: true, selected: false},
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 7,
						correct: false,
						wrong: false,
						questionText: "情境八﹕有重要事情要向對方說，而他正在看圖書。",
						questionContent: [
							"唔好意思！"
						],
						answers: [
							{correct: true, selected: false},
							{correct: false, selected: false},
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 8,
						correct: false,
						wrong: false,
						questionText: "情境九﹕想與人閒談，而那個人正在聽歌。",
						questionContent: [
							"唔好意思！"
						],
						answers: [
							{correct: true, selected: false},
							{correct: false, selected: false},
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
				]
			},
			'ex4': {
				clientref: 8,
				layout: 7,
				name: "何時要說唔好意思",
				instruction: "哪一種做法是正確的，哪一種是不對的？",
				type: "chooseSingleAnswer",
				questions:  [
					{
						index: 0,
						correct: false,
						wrong: false,
						text: "做了令人不舒服的事情",
						videos: [
							"http://apps.hkedcity.net/media/play/playVideo_responsive.php?vFileID=23311&vLang=chi&vAutoStart=false&vStartTime=0&videoUrl=c3e200b83c69032ae5a760ecd8be52a266524c8b6f697e580829243dfe6ebe6c4e0ea003044b5204a7a1d7f025f05c88524c4db83c071af64923a9d99026b4a8", // right
							"http://apps.hkedcity.net/media/play/playVideo_responsive.php?vFileID=23313&vLang=chi&vAutoStart=false&vStartTime=0&videoUrl=c3e200b83c69032ae5a760ecd8be52a266524c8b6f697e580829243dfe6ebe6c1fc3528049c305c3ac29bc6fe44e28ec35b3ae44affda7fccf7702988a7e4fce" // wrong
						],
						answers: [
							{correct: true, selected: false},
							{correct: false, selected: false}
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 1,
						correct: false,
						wrong: false,
						text: "做了令人不舒服的事情",
						videos: [
							"http://apps.hkedcity.net/media/play/playVideo_responsive.php?vFileID=23317&vLang=chi&vAutoStart=false&vStartTime=0&videoUrl=c3e200b83c69032ae5a760ecd8be52a266524c8b6f697e580829243dfe6ebe6c0431ed62d074fa47c092b35c4ab691bc5574c43b1dff580a6200a9d0b037b1c1", // wrong
							"http://apps.hkedcity.net/media/play/playVideo_responsive.php?vFileID=23315&vLang=chi&vAutoStart=false&vStartTime=0&videoUrl=c3e200b83c69032ae5a760ecd8be52a266524c8b6f697e580829243dfe6ebe6c7ef4ddd88de896726023e6a126d7fa1dfad6a6a72fd9cfbcb1ce108e0cd57f0e" // right
						],
						answers: [
							{correct: false, selected: false},
							{correct: true, selected: false}
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 2,
						correct: false,
						wrong: false,
						text: "做了令人不舒服的事情",
						videos: [
							"http://apps.hkedcity.net/media/play/playVideo_responsive.php?vFileID=23319&vLang=chi&vAutoStart=false&vStartTime=0&videoUrl=c3e200b83c69032ae5a760ecd8be52a266524c8b6f697e580829243dfe6ebe6c45ead5f69d7612074fbba926da39a24111af652114cdd1c73a96359b36696200", // wrong
							"http://apps.hkedcity.net/media/play/playVideo_responsive.php?vFileID=23321&vLang=chi&vAutoStart=false&vStartTime=0&videoUrl=c3e200b83c69032ae5a760ecd8be52a266524c8b6f697e580829243dfe6ebe6c716ecee0aa4aa096f12151882257d447a730e657e05d1c8d6014ea49aab9357f" // right
						],
						answers: [
							{correct: false, selected: false},
							{correct: true, selected: false}
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 3,
						correct: false,
						wrong: false,
						text: "想得到別人的注意",
						videos: [
							"http://apps.hkedcity.net/media/play/playVideo_responsive.php?vFileID=23323&vLang=chi&vAutoStart=false&vStartTime=0&videoUrl=c3e200b83c69032ae5a760ecd8be52a266524c8b6f697e580829243dfe6ebe6c3935af085f7a20a5c6f333c1c5fca6e115fba80349fff0449bf48f2869d1b198", // right
							"http://apps.hkedcity.net/media/play/playVideo_responsive.php?vFileID=23325&vLang=chi&vAutoStart=false&vStartTime=0&videoUrl=c3e200b83c69032ae5a760ecd8be52a266524c8b6f697e580829243dfe6ebe6c4058f2118b2e62fc5b5816089824ab7b2f33d98055688a86d50d82f281144ba1" // wrong
						],
						answers: [
							{correct: true, selected: false},
							{correct: false, selected: false}
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 4,
						correct: false,
						wrong: false,
						text: "想得到別人的注意",
						videos: [
							"http://apps.hkedcity.net/media/play/playVideo_responsive.php?vFileID=23327&vLang=chi&vAutoStart=false&vStartTime=0&videoUrl=c3e200b83c69032ae5a760ecd8be52a266524c8b6f697e580829243dfe6ebe6ccd82d54449c84d3e9cbe873e7b92c356b2bcb049cff0f13424e8632362a9ed00", // right
							"http://apps.hkedcity.net/media/play/playVideo_responsive.php?vFileID=23329&vLang=chi&vAutoStart=false&vStartTime=0&videoUrl=c3e200b83c69032ae5a760ecd8be52a266524c8b6f697e580829243dfe6ebe6ce5d770c8a753651beefab480e6bddaaaae8db251536faa291e8565d9b853511f" // wrong
						],
						answers: [
							{correct: true, selected: false},
							{correct: false, selected: false}
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 5,
						correct: false,
						wrong: false,
						text: "危急的情況",
						videos: [
							"http://apps.hkedcity.net/media/play/playVideo_responsive.php?vFileID=23331&vLang=chi&vAutoStart=false&vStartTime=0&videoUrl=c3e200b83c69032ae5a760ecd8be52a266524c8b6f697e580829243dfe6ebe6cb14964ed8469ce52d11f17712dc113735cefbdd93a3cbb2c6cad31b7f4a158af", // right
							"http://apps.hkedcity.net/media/play/playVideo_responsive.php?vFileID=23333&vLang=chi&vAutoStart=false&vStartTime=0&videoUrl=c3e200b83c69032ae5a760ecd8be52a266524c8b6f697e580829243dfe6ebe6ca30cf05b089e4ea4da7db05db476f5bb236e03bcb3405ce82211263a849eecc6" // wrong
						],
						answers: [
							{correct: true, selected: false},
							{correct: false, selected: false}
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 6,
						correct: false,
						wrong: false,
						text: "危急的情況",
						videos: [
							"http://apps.hkedcity.net/media/play/playVideo_responsive.php?vFileID=23337&vLang=chi&vAutoStart=false&vStartTime=0&videoUrl=c3e200b83c69032ae5a760ecd8be52a266524c8b6f697e580829243dfe6ebe6c085249829ef7cecd756d13f43a0eef35998d0fe42cc8725615c9192753e2d726", // wrong
							"http://apps.hkedcity.net/media/play/playVideo_responsive.php?vFileID=23335&vLang=chi&vAutoStart=false&vStartTime=0&videoUrl=c3e200b83c69032ae5a760ecd8be52a266524c8b6f697e580829243dfe6ebe6cb1d91856315a62247ba9f552b1ed32ae7d17cbfd4505eb6f12124e44af4942bd" // right
						],
						answers: [
							{correct: false, selected: false},
							{correct: true, selected: false}
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
				]
			},
		}
	},
	/**
	 * Chapter 3
	 */
	'ch3': {
		exercises: {
			'ex1': {
				clientref: 3,
				layout: 4,
				name: "打招呼時會說甚麼呢？",
				instruction: "以下哪些是正確的打招呼用語呢？把它們找出來吧！",
				type: "chooseSingleAnswer",
				questions:  [
					{
						index: 0,
						correct: false,
						wrong: false,
						questionContent: [
							""
						],
						answers: [
							{correct: true, selected: false},
							{correct: false, selected: false}
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 1,
						correct: false,
						wrong: false,
						questionContent: [
							""
						],
						answers: [
							{correct: true, selected: false},
							{correct: false, selected: false}
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 2,
						correct: false,
						wrong: false,
						questionContent: [
							""
						],
						answers: [
							{correct: true, selected: false},
							{correct: false, selected: false}
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 3,
						correct: false,
						wrong: false,
						questionContent: [
							""
						],
						answers: [
							{correct: true, selected: false},
							{correct: false, selected: false}
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 4,
						correct: false,
						wrong: false,
						questionContent: [
							""
						],
						answers: [
							{correct: true, selected: false},
							{correct: false, selected: false}
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 5,
						correct: false,
						wrong: false,
						questionContent: [
							""
						],
						answers: [
							{correct: true, selected: false},
							{correct: false, selected: false}
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
				]
			},
			// 配對 三圖片排序分到三格
			'ex2': {
				clientref: 11,
				layout: 10,
				name: "打招呼程序",
				instruction: "你知道打招呼的程序嗎？把下面的圖片按次序排列於下面的方格內。",
				type: "dragnDrop_MultipleDropzone",
				dragndropType: "multipleDropzone",
				dragndropBehavior: "normal",
				questions:  [
					{
						index: 0,
						correct: false,
						wrong: false,
						isCorrect: false,
						questionText: "",
						dragPools: [
							{type: 0, text: ""}
						],
						dropPools: [
							{type: 1, text: "1", answer: "走近佢"},
							{type: 2, text: "2", answer: "望住對方"},
							{type: 3, text: "3", answer: "同對方打招呼"}
						],
						answers: [
							{ index: 0, type: 3, correct: false, selected: false, text: "同對方打招呼"},
							{ index: 1, type: 1, correct: false, selected: false, text: "走近佢"},
							{ index: 2, type: 2, correct: false, selected: false, text: "望住對方"},
						],
						// numOfCorrectAnswers: 3,
						correctAnswerCount: 0,
						// wrongAnswerCount: 0
					},
				]
			},
			// 配對 一堆字格分到三個地方
			'ex3': {
				clientref: 12,
				layout: 11,
				name: "打招呼的方法",
				instruction: "你們懂得打招呼的方法嗎？請把不同的打招呼方法拉放在○內。",
				type: "dragnDrop_MultipleDropzone",
				dragndropType: "multipleDropzone",
				dragndropBehavior: "normal",
				questions:  [
					{
						index: 0,
						correct: false,
						wrong: false,
						isCorrect: false,
						questionText: "",
						dragPools: [
							{type: 0, text: ""}
						],
						dropPools: [
							{type: 1, text: "有時間性"},
							{type: 2, text: "沒有時間性"},
							{type: 3, text: "非語言"}
						],
						answers: [
							{ index: 0, type: 3, correct: false, selected: false, text: "點頭"},
							{ index: 1, type: 1, correct: false, selected: false, text: "早晨"},
							{ index: 2, type: 2, correct: false, selected: false, text: "咁啱呀"},
							{ index: 3, type: 2, correct: false, selected: false, text: "Hi"},
							{ index: 4, type: 2, correct: false, selected: false, text: "你好"},
							{ index: 5, type: 1, correct: false, selected: false, text: "午安"},
							{ index: 6, type: 2, correct: false, selected: false, text: "Hello"},
							{ index: 7, type: 3, correct: false, selected: false, text: "揮手"},
						],
						correctAnswerCount: 0,
					},
				]
			},
			'ex4': {
				clientref: 3,
				layout: 3,
				name: "何處買禮物？",
				instruction: '我可以到哪裡購買禮物呢？請在正確地方的圖片加上「✔」號。',
				type: "chooseMultipleAnswer",
				questions:  [
					{
						index: 0,
						correct: false,
						wrong: false,
						questionText: "",
						questionText2: "",
						answers: [
							{correct: false, selected: false, text: ""},
							{correct: true, selected: false, text: "你好"},
							{correct: false, selected: false, text: ""},
							{correct: false, selected: false, text: ""},
							{correct: false, selected: false, text: ""},
							{correct: true, selected: false, text: "午安"},
						],
						numOfCorrectAnswers: 2,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					}
				]
			},
		}
	},
	/**
	 * Chapter 4
	 */
	'ch4': {
		exercises: {
			'ex3': {
				clientref: 5,
				layout: 5,
				name: "怎樣才是正確的表達方式？",
				instruction: "當我們感到別人不明白我們的想法或不滿時，怎樣才是恰當的表達方式？請「✔」出正確的答案。",
				type: "chooseSingleAnswer",
				questions:  [
					{
						index: 0,
						correct: false,
						wrong: false,
						answers: [
							{correct: false, selected: false, text: "大聲叫"},
							{correct: true, selected: false, text: "說：『我想多看一會電視』"},
							{correct: false, selected: false, text: "拍打媽媽"}
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 1,
						correct: false,
						wrong: false,
						answers: [
							{correct: false, selected: false, text: "用腳踢對方"},
							{correct: false, selected: false, text: "說：『呀！』"},
							{correct: true, selected: false, text: "說：『不是我』"}
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 2,
						correct: false,
						wrong: false,
						answers: [
							{correct: true, selected: false, text: "說：『我害怕動物』"},
							{correct: false, selected: false, text: "保持安靜"},
							{correct: false, selected: false, text: "躺在地上大聲哭叫"}
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
				]
			},
			'ex4': {
				clientref: 5,
				layout: 5,
				name: "怎樣才是正確的表達方式？",
				instruction: "當我們感到別人不明白我們的想法或不滿時，怎樣才是恰當的表達方式？請「✔」出正確的答案。",
				type: "chooseSingleAnswer",
				questions:  [
					{
						index: 0,
						correct: false,
						wrong: false,
						answers: [
							{correct: false, selected: false, text: "打自己"},
							{correct: true, selected: false, text: "說：『我想吃壽司』"},
							{correct: false, selected: false, text: "保持安靜"},
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 1,
						correct: false,
						wrong: false,
						answers: [
							{correct: false, selected: false, text: "躺在地上大聲叫"},
							{correct: true, selected: false, text: "說：『我想看卡通片』"},
							{correct: false, selected: false, text: "拍打媽媽"},
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 2,
						correct: false,
						wrong: false,
						answers: [
							{correct: false, selected: false, text: "推開對方"},
							{correct: false, selected: false, text: "說：『早晨!』"},
							{correct: true, selected: false, text: "說：『演唱會好嘈！』"},
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
				]
			},
			'ex5': {
				clientref: 5,
				layout: 5,
				name: "怎樣才是正確的表達方式？",
				instruction: "當我們感到別人不明白我們的想法或不滿時，怎樣才是恰當的表達方式？請「✔」出正確的答案。",
				type: "chooseSingleAnswer",
				questions:  [
					{
						index: 0,
						correct: false,
						wrong: false,
						answers: [
							{correct: false, selected: false, text: "推開媽媽"},
							{correct: true, selected: false, text: "說：『我想要一件新衣』"},
							{correct: false, selected: false, text: "自己走開"},
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 1,
						correct: false,
						wrong: false,
						answers: [
							{correct: true, selected: false, text: "說：『我打破了』"},
							{correct: false, selected: false, text: "躺在地上大聲叫"},
							{correct: false, selected: false, text: "打自己"},
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 2,
						correct: false,
						wrong: false,
						answers: [
							{correct: false, selected: false, text: "大哭"},
							{correct: false, selected: false, text: "大笑"},
							{correct: true, selected: false, text: "說：『同學踢我』"},
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
				]
			},
		}
	},
	/**
	 * Chapter 5
	 */
	'ch5': {
		exercises: {
			'ex1': {
				clientref: 2,
				layout: 2,
				name: "何時送禮物？",
				instruction: '何時是送禮物給別人的好時機呢？請在適當的方格內加上「✔」吧。',
				type: "chooseMultipleAnswer",
				questions:  [
					{
						index: 0,
						correct: false,
						wrong: false,
						questionText: "時機",
						questionText2: "我的判斷",
						answers: [
							{correct: true, selected: false, text: "別人的生日"},
							{correct: false, selected: false, text: "乘車時"},
							{correct: false, selected: false, text: "探病時"},
							{correct: true, selected: false, text: "聖誕節"},
							{correct: false, selected: false, text: "清明節"},
							{correct: false, selected: false, text: "上課日"},
							{correct: true, selected: false, text: "母親節"},
							{correct: true, selected: false, text: "畢業禮"},
							{correct: false, selected: false, text: "睡覺時"},
							{correct: true, selected: false, text: "父親節"},
							{correct: true, selected: false, text: "參加婚禮"},
							{correct: true, selected: false, text: "中秋節"}
						],
						numOfCorrectAnswers: 7,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					}
				]
			},
			'ex2': {
				clientref: 2,
				layout: 3,
				name: "何處買禮物？",
				instruction: '我可以到哪裡購買禮物呢？請在正確地方的圖片加上「✔」號。',
				type: "chooseMultipleAnswer",
				questions:  [
					{
						index: 0,
						correct: false,
						wrong: false,
						questionText: "",
						questionText2: "",
						answers: [
							{correct: false, selected: false, text: "旅行社"},
							{correct: true, selected: false, text: "商場"},
							{correct: false, selected: false, text: "圖書館"},
							{correct: true, selected: false, text: "超級市場"},
							{correct: false, selected: false, text: "學校"},
							{correct: false, selected: false, text: "快餐店"},
						],
						numOfCorrectAnswers: 2,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					}
				]
			},
			'ex3': {
				clientref: 4,
				layout: 4,
				name: "送禮物時，可以講乜嘢？",
				instruction: "以下哪些是送禮物時可以說的說話呢？請按「✔」或「×」顯示對錯吧！",
				type: "chooseSingleAnswer",
				questions:  [
					{
						index: 0,
						correct: false,
						wrong: false,
						questionContent: [
							"送俾你，祝你生日快樂，希望你鍾意啦！"
						],
						answers: [
							{correct: true, selected: false},
							{correct: false, selected: false},
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 1,
						correct: false,
						wrong: false,
						questionContent: [
							"送俾你，係我唔要嘅！"
						],
						answers: [
							{correct: false, selected: false},
							{correct: true, selected: false},
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 2,
						correct: false,
						wrong: false,
						questionContent: [
							"送俾你，係你鍾意嘅車仔！"
						],
						answers: [
							{correct: false, selected: false},
							{correct: true, selected: false},
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 3,
						correct: false,
						wrong: false,
						questionContent: [
							"送俾你，祝你聖誕快樂，希望你鍾意啦！"
						],
						answers: [
							{correct: true, selected: false},
							{correct: false, selected: false},
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 4,
						correct: false,
						wrong: false,
						questionContent: [
							"送俾你，你病咗好耐啦！有無好返ｄ呀？"
						],
						answers: [
							{correct: true, selected: false},
							{correct: false, selected: false},
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 5,
						correct: false,
						wrong: false,
						questionContent: [
							"你無錢買，所以我送俾你嫁。"
						],
						answers: [
							{correct: false, selected: false},
							{correct: true, selected: false},
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 6,
						correct: false,
						wrong: false,
						questionContent: [
							"送俾你，你終於都畢業啦！祝你前程似錦！"
						],
						answers: [
							{correct: true, selected: false},
							{correct: false, selected: false},
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 7,
						correct: false,
						wrong: false,
						questionContent: [
							"送俾你！你係唔係雙失青年呀？"
						],
						answers: [
							{correct: false, selected: false},
							{correct: true, selected: false},
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
				]
			},
		}
	},
	/**
	 * Chapter 6
	 */
	'ch6': {
		exercises: {
			// 連線 加對錯
			'ex1': {
				clientref: 15,
				layout: 14,
				name: "騷擾人的阿傑",
				instruction: "看完基本故事後，請把相關的人和事連起來，然後再判斷阿傑應否和他們談話。",
				type: "dragnDrop_MultipleDropzone_TrueOrFalse",
				dragndropType: "multipleDropzone",
				dragndropBehavior: "drawLines_vertical",
				questions:  [
					{
						index: 0,
						baseScore: 10,
						correct: false,
						wrong: false,
						isCorrect: false,
						questionText: "",
						lines: [],
						dragPools: [
							{type: 0, text: ""}
						],
						dropPools: [
							{type: 1, text: "傾電話"},
							{type: 2, text: "同人傾緊偈"},
							{type: 3, text: "返緊工"},
							{type: 4, text: "閒坐公園"},
							{type: 5, text: "做緊嘢"}
						],
						answers: {
							'dnd': [
								{ index: 0, type: 5, correct: false, selected: false, text: "小美", atype: "dnd" },
								{ index: 1, type: 2, correct: false, selected: false, text: "陳老師", atype: "dnd" },
								{ index: 2, type: 1, correct: false, selected: false, text: "鍾仔", atype: "dnd" },
								{ index: 3, type: 3, correct: false, selected: false, text: "阿強", atype: "dnd" },
								{ index: 4, type: 4, correct: false, selected: false, text: "嘉兒", atype: "dnd" }
							],
							'tof': [
								{
									correctAnswerCount: 0,
									wrongAnswerCount: 0,								
									answers:[
										{ correct: false, selected: false, text: "可以談話", atype: "tof" },
										{ correct: true, selected: false, text: "不應談話", atype: "tof" },
									]
								},
								{
									correctAnswerCount: 0,
									wrongAnswerCount: 0,										
									answers:[
										{ correct: false, selected: false, text: "可以談話", atype: "tof" },
										{ correct: true, selected: false, text: "不應談話", atype: "tof" },
									]
								},
								{
									correctAnswerCount: 0,
									wrongAnswerCount: 0,										
									answers:[
										{ correct: false, selected: false, text: "可以談話", atype: "tof" },
										{ correct: true, selected: false, text: "不應談話", atype: "tof" },
									]
								},
								{
									correctAnswerCount: 0,
									wrongAnswerCount: 0,										
									answers:[
										{ correct: true, selected: false, text: "可以談話", atype: "tof" },
										{ correct: false, selected: false, text: "不應談話", atype: "tof" },
									]
								},
								{
									correctAnswerCount: 0,
									wrongAnswerCount: 0,										
									answers:[
										{ correct: false, selected: false, text: "可以談話", atype: "tof" },
										{ correct: true, selected: false, text: "不應談話", atype: "tof" },
									]	
								}
							],
						},
						numOfCorrectAnswers: 10,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
				]
			},
			'ex2': {
				clientref: 6,
				layout: 5,
				name: "分辨忙碌不忙碌？",
				instruction: "哪些人正忙碌，不宜打擾？哪些人不忙碌，可以跟他談話？請按下適當的答案。",
				type: "chooseSingleAnswer",
				questions:  [
					{
						index: 0,
						correct: false,
						wrong: false,
						answers: [
							{correct: true, selected: false, text: "正忙碌，不宜打擾"},
							{correct: false, selected: false, text: "不忙碌，可以談話"}
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 1,
						correct: false,
						wrong: false,
						answers: [
							{correct: false, selected: false, text: "正忙碌，不宜打擾"},
							{correct: true, selected: false, text: "不忙碌，可以談話"}
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 2,
						correct: false,
						wrong: false,
						answers: [
							{correct: false, selected: false, text: "正忙碌，不宜打擾"},
							{correct: true, selected: false, text: "不忙碌，可以談話"}
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 3,
						correct: false,
						wrong: false,
						answers: [
							{correct: true, selected: false, text: "正忙碌，不宜打擾"},
							{correct: false, selected: false, text: "不忙碌，可以談話"}
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 4,
						correct: false,
						wrong: false,
						answers: [
							{correct: true, selected: false, text: "正忙碌，不宜打擾"},
							{correct: false, selected: false, text: "不忙碌，可以談話"}
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 5,
						correct: false,
						wrong: false,
						answers: [
							{correct: false, selected: false, text: "正忙碌，不宜打擾"},
							{correct: true, selected: false, text: "不忙碌，可以談話"}
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
				]
			},
			'ex3': {
				clientref: 6,
				layout: 5,
				name: "適宜和哪些人談話？",
				instruction: "我們適宜和以下哪些人談話呢？請按下適當的答案。",
				type: "chooseSingleAnswer",
				questions:  [
					{
						index: 0,
						correct: false,
						wrong: false,
						answers: [
							{correct: true, selected: false, text: "適宜談話"},
							{correct: false, selected: false, text: "不適宜談話"}
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 1,
						correct: false,
						wrong: false,
						answers: [
							{correct: true, selected: false, text: "適宜談話"},
							{correct: false, selected: false, text: "不適宜談話"}
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 2,
						correct: false,
						wrong: false,
						answers: [
							{correct: true, selected: false, text: "適宜談話"},
							{correct: false, selected: false, text: "不適宜談話"}
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 3,
						correct: false,
						wrong: false,
						answers: [
							{correct: false, selected: false, text: "適宜談話"},
							{correct: true, selected: false, text: "不適宜談話"}
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 4,
						correct: false,
						wrong: false,
						answers: [
							{correct: true, selected: false, text: "適宜談話"},
							{correct: false, selected: false, text: "不適宜談話"}
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 5,
						correct: false,
						wrong: false,
						answers: [
							{correct: false, selected: false, text: "適宜談話"},
							{correct: true, selected: false, text: "不適宜談話"}
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 6,
						correct: false,
						wrong: false,
						answers: [
							{correct: false, selected: false, text: "適宜談話"},
							{correct: true, selected: false, text: "不適宜談話"}
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 7,
						correct: false,
						wrong: false,
						answers: [
							{correct: false, selected: false, text: "適宜談話"},
							{correct: true, selected: false, text: "不適宜談話"}
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 8,
						correct: false,
						wrong: false,
						answers: [
							{correct: false, selected: false, text: "適宜談話"},
							{correct: true, selected: false, text: "不適宜談話"}
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 9,
						correct: false,
						wrong: false,
						answers: [
							{correct: true, selected: false, text: "適宜談話"},
							{correct: false, selected: false, text: "不適宜談話"}
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
				]
			},
		}
	},
	/**
	 * Chapter 7
	 */
	'ch7': {
		exercises: {
			// 連線 句字
			'ex1': {
				clientref: 14,
				layout: 13,
				name: "距離的變化",
				instruction: "和下列的人相處，我們應保持多遠的距離呢？請把適當的距離與對象連起來。",
				type: "dragnDrop_MultipleDropzone",
				dragndropType: "multipleDropzone",
				dragndropBehavior: "drawLines",
				questions:  [
					{
						index: 0,
						correct: false,
						wrong: false,
						isCorrect: false,
						questionText: "",
						lines: [],
						dragPools: [
							{type: 0, text: ""}
						],
						dropPools: [
							{ type: 1, text: "半隻手" },
							{ type: 2, text: "身體接觸" },
							{ type: 3, text: "一隻手" },
							{ type: 4, text: "盡量遠" }
						],
						answers: [
							{ index: 0, type: 2, correct: false, selected: false, text: "家人"},
							{ index: 1, type: 4, correct: false, selected: false, text: "陌生人"},
							{ index: 2, type: 1, correct: false, selected: false, text: "熟朋友"},
							{ index: 3, type: 3, correct: false, selected: false, text: "一般朋友"}
						],
						correctAnswerCount: 0,
					},
				]
			},
			// 配對 一堆字咭分到四方格
			'ex2': {
				clientref: 13,
				layout: 12,
				name: "距離的變化",
				instruction: "細心觀察字卡上的關係，想一想在這種關係中最近的接觸距離會是怎樣？請把字卡拉放在適當的籃子裡。",
				type: "dragnDrop_MultipleDropzone_HiddenOnCorrect",
				dragndropType: "multipleDropzone",
				dragndropBehavior: "revertAndWarningOnWrong",
				questions:  [
					{
						index: 0,
						correct: false,
						wrong: false,
						isCorrect: false,
						questionText: "",
						dragPools: [
							{type: 0, text: ""}
						],
						dropPools: [
							{type: 1, text: "身體接觸", correctCount: 0},
							{type: 2, text: "半隻手", correctCount: 0},
							{type: 3, text: "一隻手", correctCount: 0},
							{type: 4, text: "盡量遠", correctCount: 0}
						],
						answers: [
							{ index: 0, type: 2, correct: false, selected: false, text: "相熟同學"},
							{ index: 1, type: 3, correct: false, selected: false, text: "上司"},
							{ index: 2, type: 1, correct: false, selected: false, text: "姐姐"},
							{ index: 3, type: 1, correct: false, selected: false, text: "爺爺"},
							{ index: 4, type: 2, correct: false, selected: false, text: "姐夫"},
							{ index: 5, type: 3, correct: false, selected: false, text: "工人"},
							{ index: 6, type: 3, correct: false, selected: false, text: "店務員"},
							{ index: 7, type: 2, correct: false, selected: false, text: "姨丈"},
							{ index: 8, type: 1, correct: false, selected: false, text: "情侶"},
							{ index: 9, type: 1, correct: false, selected: false, text: "丈夫"},
							{ index: 10, type: 2, correct: false, selected: false, text: "表兄弟"},
							{ index: 11, type: 3, correct: false, selected: false, text: "老師"},
							{ index: 12, type: 3, correct: false, selected: false, text: "鄰居"},
							{ index: 13, type: 1, correct: false, selected: false, text: "婆婆"},
							{ index: 14, type: 2, correct: false, selected: false, text: "姑母"},
							{ index: 15, type: 2, correct: false, selected: false, text: "舅父"},
							{ index: 16, type: 4, correct: false, selected: false, text: "陌生人"},
							{ index: 17, type: 2, correct: false, selected: false, text: "叔伯"},
							{ index: 18, type: 1, correct: false, selected: false, text: "公公"},
							{ index: 19, type: 2, correct: false, selected: false, text: "知己"},
							{ index: 20, type: 1, correct: false, selected: false, text: "爸爸"},
							{ index: 21, type: 2, correct: false, selected: false, text: "相熟朋友"},
							{ index: 22, type: 3, correct: false, selected: false, text: "同學"},
							{ index: 23, type: 3, correct: false, selected: false, text: "同事"}
						],
						correctAnswerCount: 0,
					},
				]
			},
		}
	},
	/**
	 * Chapter 8
	 */
	'ch8': {
		exercises: {
			'ex1': {
				clientref: 7,
				layout: 6,
				name: "被人取笑考考你",
				instruction: "以下人物被取笑時，他做得對嗎？請圈出對或錯，並按下適當的回應。",
				type: "chooseSingleAndMultipleAnswers",
				questions:  [
					{
						index: 0,
						correct: false,
						wrong: false,
						text: "適當的回應是甚麼？請按下正確的答案：",
						answers: [
							{correct: false, selected: false, text: "", type: "tof"},
							{correct: true, selected: false, text: "", type: "tof"},
							{correct: false, selected: false, text: "“你先係排骨仔呀。”", type: "mc"},
							{correct: false, selected: false, text: "“作死呀。”", type: "mc"},
							{correct: true, selected: false, text: "“你咁樣好無禮貌。”", type: "mc"},
						],
						numOfCorrectAnswers: 2,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 1,
						correct: false,
						wrong: false,
						text: "適當的回應是甚麼？請按下正確的答案：",
						answers: [
							{correct: false, selected: false, text: "", type: "tof"},
							{correct: true, selected: false, text: "", type: "tof"},
							{correct: false, selected: false, text: "“你好叻咩！”", type: "mc"},
							{correct: false, selected: false, text: "把紙張撕破。", type: "mc"},
							{correct: true, selected: false, text: "不理會她，繼續摺飛機。", type: "mc"},
						],
						numOfCorrectAnswers: 2,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 2,
						correct: false,
						wrong: false,
						text: "適當的回應是甚麼？請按下正確的答案：",
						answers: [
							{correct: false, selected: false, text: "", type: "tof"},
							{correct: true, selected: false, text: "", type: "tof"},
							{correct: false, selected: false, text: "“你唔抵得呀。”", type: "mc"},
							{correct: false, selected: false, text: "請老師幫忙。", type: "mc"},
							{correct: true, selected: false, text: "“你好乞人憎呀。”", type: "mc"},
						],
						numOfCorrectAnswers: 2,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 3,
						correct: false,
						wrong: false,
						text: "還有其他適當的回應嗎？請按下正確的答案：",
						answers: [
							{correct: false, selected: false, text: "", type: "tof"},
							{correct: true, selected: false, text: "", type: "tof"},
							{correct: false, selected: false, text: "“關你咩事！”", type: "mc"},
							{correct: false, selected: false, text: "哭起來。", type: "mc"},
							{correct: true, selected: false, text: "冷靜下來，繼續抹枱。", type: "mc"},
						],
						numOfCorrectAnswers: 2,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 4,
						correct: false,
						wrong: false,
						text: "適當的回應是甚麼？請按下正確的答案：",
						answers: [
							{correct: false, selected: false, text: "", type: "tof"},
							{correct: true, selected: false, text: "", type: "tof"},
							{correct: true, selected: false, text: "不理他，轉身走開。", type: "mc"},
							{correct: false, selected: false, text: "用粉擦擲向同學。", type: "mc"},
							{correct: false, selected: false, text: "大叫。", type: "mc"},
							
						],
						numOfCorrectAnswers: 2,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 5,
						correct: false,
						wrong: false,
						text: "還有其他適當的回應嗎？請按下正確的答案：",
						answers: [
							{correct: false, selected: false, text: "", type: "tof"},
							{correct: true, selected: false, text: "", type: "tof"},
							{correct: false, selected: false, text: "大力推他。", type: "mc"},
							{correct: false, selected: false, text: "繼續行樓梯，保持冷靜。", type: "mc"},
							{correct: true, selected: false, text: "用腳踢同學。", type: "mc"},
						],
						numOfCorrectAnswers: 2,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
				]
			},
			'ex2': {
				clientref: 4,
				layout: 4,
				name: "可以不可以？",
				instruction: "以下哪些是正確的做法？請按「✔」或「×」顯示對錯吧！",
				type: "chooseSingleAnswer",
				questions:  [
					{
						index: 0,
						correct: false,
						wrong: false,
						questionContent: [
							""
						],
						answers: [
							{correct: true, selected: false},
							{correct: false, selected: false},
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 1,
						correct: false,
						wrong: false,
						questionContent: [
							""
						],
						answers: [
							{correct: true, selected: false},
							{correct: false, selected: false},
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 2,
						correct: false,
						wrong: false,
						questionContent: [
							""
						],
						answers: [
							{correct: false, selected: false},
							{correct: true, selected: false},
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 3,
						correct: false,
						wrong: false,
						questionContent: [
							""
						],
						answers: [
							{correct: true, selected: false},
							{correct: false, selected: false},
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 4,
						correct: false,
						wrong: false,
						questionContent: [
							""
						],
						answers: [
							{correct: false, selected: false},
							{correct: true, selected: false},
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 5,
						correct: false,
						wrong: false,
						questionContent: [
							""
						],
						answers: [
							{correct: true, selected: false},
							{correct: false, selected: false},
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 6,
						correct: false,
						wrong: false,
						questionContent: [
							""
						],
						answers: [
							{correct: false, selected: false},
							{correct: true, selected: false},
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
				]
			},
			'ex3': {
				clientref: 5,
				layout: 5,
				name: "被取笑時，怎麼辦？",
				instruction: "被人取笑時，你會怎麼辦呢？請按下適當的答案。",
				type: "chooseSingleAnswer",
				questions:  [
					{
						index: 0,
						correct: false,
						wrong: false,
						questionText: "在街上，有人笑我…",
						answers: [
							{correct: false, selected: false, text: "會打那人"},
							{correct: false, selected: false, text: "“ 你先係傻仔！”"},
							{correct: true, selected: false, text: "深呼吸，不理會。"},
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 1,
						correct: false,
						wrong: false,
						questionText: "在巴士站，有人笑我…",
						answers: [
							{correct: false, selected: false, text: "立即哭起來。"},
							{correct: true, selected: false, text: "冷靜下來繼續上車，不理會他。"},
							{correct: false, selected: false, text: "向司機投訴。"},
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 2,
						correct: false,
						wrong: false,
						questionText: "在快餐店，有職員笑我…",
						answers: [
							{correct: true, selected: false, text: "“你好無禮貌，我向經理投訴。”"},
							{correct: false, selected: false, text: "“我想買一杯可樂。”"},
							{correct: false, selected: false, text: "大力拍枱。"},
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 3,
						correct: false,
						wrong: false,
						questionText: "在家被哥哥笑",
						answers: [
							{correct: false, selected: false, text: "打哥哥。"},
							{correct: true, selected: false, text: "不理他，不發脾氣，繼續做功課。"},
							{correct: false, selected: false, text: "“豬頭炳，你好叻咩!”"},
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 4,
						correct: false,
						wrong: false,
						questionText: "在學校操場，有同學笑我",
						answers: [
							{correct: true, selected: false, text: "站起來找老師幫忙。"},
							{correct: false, selected: false, text: "向同學吐口水。"},
							{correct: false, selected: false, text: "坐在地上大哭。"},
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 5,
						correct: false,
						wrong: false,
						questionText: "在課室，有同學笑我",
						answers: [
							{correct: false, selected: false, text: "撕爛默書簿。"},
							{correct: true, selected: false, text: "轉身行開，收起默書簿。"},
							{correct: false, selected: false, text: "搶別人的默書簿。"},
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 6,
						correct: false,
						wrong: false,
						questionText: "在廁所，有同學笑我",
						answers: [
							{correct: false, selected: false, text: "用水潑同學。"},
							{correct: false, selected: false, text: "“關你鬼事咩!”"},
							{correct: true, selected: false, text: "“你咁講係無禮貌。”"},
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 7,
						correct: false,
						wrong: false,
						questionText: "在走廊，有同學笑我",
						answers: [
							{correct: true, selected: false, text: "深呼吸，轉身行開。"},
							{correct: false, selected: false, text: "用腳踢同學。"},
							{correct: false, selected: false, text: "打自己心口。"},
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 8,
						correct: false,
						wrong: false,
						questionText: "上體育堂時，有同學笑我",
						answers: [
							{correct: false, selected: false, text: "用腳踢同學。"},
							{correct: true, selected: false, text: "繼續打波，保持冷靜。"},
							{correct: false, selected: false, text: "向老師投訴。"},
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 9,
						correct: false,
						wrong: false,
						questionText: "吃午餐時，有同學笑我",
						answers: [
							{correct: true, selected: false, text: "收起飯盒不吃飯。"},
							{correct: false, selected: false, text: "告訴老師或家人。"},
							{correct: false, selected: false, text: "推倒同學的飯盒。"},
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
				]
			},
		}
	},
	/**
	 * Chapter 9
	 */
	'ch9': {
		exercises: {
			
		}
	},
	/**
	 * Chapter 10
	 */
	'ch10': {
		exercises: {
			'ex1': {
				clientref: 2,
				layout: 2,
				name: "故事理解1",
				instruction: '聽完「講錯話的亞南」故事後，請回答下列問題。',
				type: "chooseMultipleAnswer",
				questions:  [
					{
						index: 0,
						correct: false,
						wrong: false,
						questionText: "請選出故事的主角，按下方格選出合適的答案。",
						questionText2: "",
						answers: [
							{correct: false, selected: false, text: "亞明"},
							{correct: true, selected: false, text: "亞南"},
							{correct: false, selected: false, text: "亞輝"},
						],
						numOfCorrectAnswers: 1,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
					{
						index: 1,
						correct: false,
						wrong: false,
						questionText: "下面哪些是令人不開心的話題，請按下方格選出合適的答案。",
						questionText2: "",
						answers: [
							{correct: false, selected: false, text: "讚美對方"},
							{correct: true, selected: false, text: "批評對方的外表、衣著和身材等"},
							{correct: false, selected: false, text: "一些好玩的活動"},
							{correct: true, selected: false, text: "有關死亡、重病"},
							{correct: true, selected: false, text: "內衣褲"},
							{correct: false, selected: false, text: "好看的電視節目"},
							{correct: false, selected: false, text: "大減價貨品"},
							{correct: true, selected: false, text: "說出對方有體味"},
						],
						numOfCorrectAnswers: 4,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					}
				]
			},
		}
	}
}

})();