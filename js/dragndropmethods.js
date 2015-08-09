var dragulaContainers = [];

window.dragnDropInit = {
	// 'oneDropzone': dragnDrop_OneDropzone,
	'multipleDropzone': dragnDrop_MultipleDropzone,
}

window.dragnDropBehaviors = {
	'normal': dragnDropBehavior_normal,
	'revertAndWarningOnWrong': dragnDropBehavior_revertAndWarningOnWrong,
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
	var question = questionView.questions[vue.currentQuestion];
	_.times(question.dragPools.length, function(i) {
		dragulaContainers.push(document.getElementById('dragzone-'+i));
	});
	_.times(question.dropPools.length, function(i) {
		dragulaContainers.push(document.getElementById('dropzone-'+i));
	});

	drake = dragula(dragulaContainers, {
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

function dragnDropBehavior_revertAndWarningOnWrong () {
	var question = questionView.questions[vue.currentQuestion];
	drake
	.on('drop', function(el, container, source) {
		if(($(container).hasClass('dragzone') && $(source).hasClass('dragzone'))) {
			return false;
		}
		if(container.__vue__.dropPool.type !== el.__vue__.answer.type) {
			this.cancel(true);
			$(container).addClass('warning');
			setTimeout( function() { $(container).removeClass('warning') }, 1000);
			return false;
		} else {
			$(container).addClass('correct');
			setTimeout( function() { $(container).removeClass('correct') }, 1000)
		}

		questionView.chooseAnswer(question, el.__vue__.answer, container, source);

	})
	.on('over', function (el, container) {
		$(container).addClass('over');
	})
	.on('out', function (el, container) {
		$(container).removeClass('over');
	})
	;
}