
define(function(require,exports,module){
    /**
     * 1.require,exports,module三个参数是固定的，写法不能变，不能随便修改，在函数体内也不行。
     * 2.exports暴露的对外接口
     * 3.require:依赖的接口
     * 
     * 
     * 
    */

    // 1.当引用的地址对应的是一个js文件时，可直接引入，一如后可直接使用，如下：a可以直接引用
    require('test.js');//以sea.js为根目录
    // require('./test.js');//以相对目录./表示当前目录

    // 2.当引用的地址对应的是一个js模块时，返回值为对应模块中的exports对象，如下：
    var data = require('test1.js');//以sea.js为根目录
    // require('./test.js');//以相对目录./表示当前目录

    // 3.异步加载,回调参数为对应暴露模块的exports对象，如下：
     require.async('test1.js',function(data){

    });
    // var data = require.async('./test.js');


    function tab(){
        // alert(123);
        alert(data.a);
    }

    exports.tab = tab ;
});