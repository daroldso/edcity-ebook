(function() {

window.Book = {
	/**
	 * Chapter 1
	 */
	'ch1': {
		exercises: {
			'ex1': {
				name: "練習講多謝",
				description: "在以下的情況下，我們要說什麼？",
				template: 'layout-1',
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
			// 'ex5': {
			// 	template: 'layout-1',
			// },
			'ex3': {
				name: "如何說多謝",
				description: '請在適當的 ☐ 內加上「✔」。',
				template: 'layout-2',
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
				description: "看過基本故事「亞偉講：唔好意思！」之後，你還記得何時要說「唔好意思！」嗎？請在適當情境圖的 ☐ 加上 ✔ 號。",
				template: 'layout-3',
				questions:  [
					{
						index: 0,
						correct: false,
						wrong: false,
						questionText: "收到禮物時要講：",
						answers: [
							{correct: true, selected: false, text: "放了屁", image: "2-1-1.jpg"},
							{correct: true, selected: false, text: "不小心碰到人", image: "2-1-2.jpg"},
							{correct: true, selected: false, text: "被別人阻路了", image: "2-1-3.jpg"},
							{correct: false, selected: false, text: "想坐下", image: "2-1-4.jpg"},
							{correct: true, selected: false, text: "想取得別人注意", image: "2-1-5.jpg"}
						],
						numOfCorrectAnswers: 4,
						correctAnswerCount: 0,
						wrongAnswerCount: 0
					},
				]
			},
		}
	}
}

})();