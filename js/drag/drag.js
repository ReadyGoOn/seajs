//b
define(function(require,exports,module){
    function drag(obj){
        var disX = 0 ;
        var disY = 0 ;
        obj.onmousedown = function(e){
            var e = e || window.event;
            disX = e.clientX - obj.offsetLeft;
            disY = e.clientY - obj.offsetTop;
            document.onmousemove = function(e){
                var e = e || window.event ;
                obj.style.left = e.clientX - disX + 'px';
                obj.style.top = e.clientY - disY + 'px';
            }
        }

        document.onmouseup = function(){
            document.onmousemove = null ;
            document.onmouseup = null ;
        }
    }

    exports.drag = drag ;
});