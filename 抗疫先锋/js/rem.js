(function(doc, win) {
    var docEl = doc.documentElement,	
        //判断是手机还是电脑 如果是手机则执行窗口重定向事件 反之执行pc端窗口事件
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 20 * (clientWidth / 375) + 'px';
        };
    if (!doc.addEventListener) return;
//窗口发生变化时触发事件
    win.addEventListener(resizeEvt, recalc, false);
//DOM文件加载完成后触发事件
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);