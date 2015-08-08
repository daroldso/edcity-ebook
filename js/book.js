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
				type: "chooseMultipleAnswer",
				dragndropType: "oneToOne",
				questions:  [
					{
						index: 0,
						correct: false,
						wrong: false,
						isCorrect: false,
						questionText: "句子：",
						answers: [
							{ index: 0,correct: false, selected: false, text: "嘩！我好鍾意！"},
							{ index: 1,correct: true, selected: false, text: "都唔靚嘅！"},
							{ index: 2,correct: false, selected: false, text: "嘩！我想即刻試吓！"},
							{ index: 3,correct: false, selected: false, text: "嘩！好靚呀！"},
							{ index: 4,correct: false, selected: false, text: "我鍾意呢個顏色！"},
							{ index: 5,correct: true, selected: false, text: "我覺得無乜用喎！"},
							{ index: 6,correct: false, selected: false, text: "嘩！好嘢！"},
							{ index: 7,correct: false, selected: false, text: "我搵咗呢個款好耐啦！"},
							{ index: 8,correct: false, selected: false, text: "我啱啱想買…"},
							{ index: 9,correct: true, selected: false, text: "呢個麻麻地啦…"},
							{ index: 10,correct: false, selected: false, text: "啱晒，我無呢個。"},
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
				type: "dragnDrop_OneToMultiple",
				dragndropType: "oneToMultiple",
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
						text: "想得到別人的注意",
						answers: [
							{correct: false, selected: false},
							{correct: true, selected: false}
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
		}
	},
	/**
	 * Chapter 6
	 */
	'ch6': {
		exercises: {
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
		}
	}
}

})();