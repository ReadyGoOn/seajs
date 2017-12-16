//a
define(function(require,exports,module){
    var odiv1 = document.getElementById('div1');
    var odiv2 = document.getElementById('div2');
    var odiv3 = document.getElementById('div3');
    var obtn = document.getElementById('btn');


    require('./drag.js').drag(odiv3);
    obtn.onclick = function(){
        // console.log(odiv1.style.display)
        // if(odiv1.style.display == 'none'){
            odiv1.style.display = 'block';
            require('./dragBig.js').dragBig(odiv1,odiv2);
        // }else{
            // odiv1.style.display == 'none';
        // }
        // document.
    }
});