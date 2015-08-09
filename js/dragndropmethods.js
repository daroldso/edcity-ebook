window.dragnDropInit = {
	// 'oneDropzone': dragnDrop_OneDropzone,
	'multipleDropzone': dragnDrop_MultipleDropzone,
}

window.dragnDropBehaviors = {
	'normal': dragnDropBehavior_normal,
	'hiddenOnCorrect': dragnDropBehavior_hiddenOnCorrect,
}

// function dragnDrop_OneDropzone () {
// 	drake = dragula([document.getElementById('dragzone'), document.getElementById('dropzone')], {
// 		// copy: true,
// 		// revertOnSpill: true,
// 		// accepts: function(el, target, source, sibling) {
// 			// if(source.id === 'dropzone') {
// 			// 	drake.remove(source);
// 			// 	return false;
// 			// }
// 			// return true;
// 		// }
// 	});
// 	drake
// 	.on('drop', function(el, container, source) {
// 		if(container.id === source.id) {
// 			return false;
// 		}
// 		questionView.chooseAnswer(questionView.questions[vue.currentQuestion], el.__vue__.answer);
// 	})
// 	;
// }

function dragnDrop_MultipleDropzone () {
	var containers = [];
	var question = questionView.questions[vue.currentQuestion];
	_.times(question.dragPools.length, function(i) {
		containers.push(document.getElementById('dragzone-'+i));
	});
	_.times(question.dropPools.length, function(i) {
		containers.push(document.getElementById('dropzone-'+i));
	});

	drake = dragula(containers, {
		// copy: true,
		// revertOnSpill: true,
		// accepts: function(el, target, source, sibling) {
			// if(source.id === 'dropzone') {
			// 	drake.remove(source);
			// 	return false;
			// }
			// return true;
		// }
	});
}

function dragnDropBehavior_normal () {
	var question = questionView.questions[vue.currentQuestion];
	drake
	.on('drop', function(el, container, source) {
		if(($(container).hasClass('dragzone') && $(source).hasClass('dragzone'))) {
			return false;
		}

		questionView.chooseAnswer(question, el.__vue__.answer, container, source);

	})
	;
}

function dragnDropBehavior_hiddenOnCorrect (argument) {
	var question = questionView.questions[vue.currentQuestion];
	drake
	.on('drop', function(el, container, source) {
		if(($(container).hasClass('dragzone') && $(source).hasClass('dragzone'))) {
			return false;
		}

		questionView.chooseAnswer(question, el.__vue__.answer, container, source);

	})
	;
}