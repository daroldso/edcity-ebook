window.dragnDropMethods = {
	'multipleToOne': dragnDrop_MultipleToOne,
	'multipleToMultiple': ""
}

function dragnDrop_MultipleToOne () {
	drake = dragula([document.getElementById('dragzone'), document.getElementById('dropzone')], {
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
	drake
	.on('drop', function(el, container, source) {
		if(container.id === source.id) {
			return false;
		}
		// if(container.id === 'dropzone'){
			questionView.chooseAnswer(questionView.questions[vue.currentQuestion], el.__vue__.answer);
		// }
		// console.dir(el);
		// console.dir(container);
		// console.dir(source);
	})
	;
}