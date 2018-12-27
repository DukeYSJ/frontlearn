var i = 0;

function timedCount() {
    i = i + 1;
    //postMessage是官方支持的函数;
    postMessage(i);
    setTimeout("timedCount()", 500);
}

timedCount();