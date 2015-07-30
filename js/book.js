(function() {

window.Book = {
	/**
	 * Chapter 1
	 */
	'ch1': {
		exercises: {
			'ex1': {
				name: "練習講多謝",
				instruction: "在以下的情況下，我們要說什麼？",
				template: 1,
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
						questionText: "朋友請我吃東西,我要講：",
						answers: [
							{correct: false, selected: false, text: "我想食多D！"},
							{correct: true, selected: false, text: "多謝你,好好味呀！"}
						]
					},
				]
			},
			'ex3': {
				name: "如何說多謝",
				instruction: '請在適當的 ☐ 內加上「✔」。',
				template: 2,
				questions:  [
					{
						index: 0,
						correct: false,
						wrong: false,
						questionText: "當別人送禮物給我們時，我們要說：",
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
		}
	},
	/**
	 * Chapter 2
	 */
	'ch2': {
		exercises: {
			'ex1': {
				name: "何時要說唔好意思",
				instruction: "看過基本故事「亞偉講：唔好意思！」之後，你還記得何時要說「唔好意思！」嗎？請在適當情境圖的 ☐ 加上 ✔ 號。",
				template: 3,
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
				name: "阿偉練習講 “唔好意思”",
				instruction: "你認為阿偉要說唔好意思嗎？請按下正確的答案。",
				template: 4,
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
		}
	},
	/**
	 * Chapter 4
	 */
	'ch4': {
		exercises: {
			'ex3': {
				name: "怎樣才是正確的表達方式？",
				instruction: "當我們感到別人不明白我們的想法或不滿時，怎樣才是恰當的表達方式？請「✔」出正確的答案。",
				template: 5,
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
	}
}

})();