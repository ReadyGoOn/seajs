define(function(require,exports,module){
    function dragBig(obj1,obj2){
        var disX = 0 ;
        var disY = 0 ;
        var disH = 0 ;
        var disW = 0 ;
        obj2.onmousedown = function(e){
            var e = e || window.event;
            disX = e.clientX;
            disY = e.clientY;
            disW = obj1.offsetWidth;
            disH = obj1.offsetHeight;
            document.onmousemove = function(e){
                var e = e || window.event ;
                obj1.style.width = e.clientX - disX + disW + 'px';
                obj1.style.height = e.clientY - disY + disH +'px';
            }

            document.onmouseup = function(){
                document.onmousemove = null ;
                document.onmouseup = null ;
            }
        }

       
    }

    exports.dragBig = dragBig ;
});