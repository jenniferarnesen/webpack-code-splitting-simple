function leftAction () {
    require.ensure([], function(require) {
        const leftMod = require('./left.js');
        console.log(leftMod);
    });
}

function rightAction () {
    require.ensure([], function(require) {
        const rightMod = require('./right.js');
        console.log(rightMod);
    });
}

document.addEventListener('DOMContentLoaded', function() {
   document.getElementById("left").onclick = leftAction;
   document.getElementById("right").onclick = rightAction;
});

