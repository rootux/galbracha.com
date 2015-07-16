(function() {
    var state = document.readyState;
    if(state === 'interactive' || state === 'complete') {
    	var progress = document.getElementById("progress");
        progress.parentNode.removeChild(progress);
    }
    else setTimeout(arguments.callee, 1500);
})();