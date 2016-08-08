function windowResize() {
    var size = document.documentElement.clientWidth
    var fontSizes
    if (size < 640) {
        fontSize = size / 3.2
    } else {
        fontSize = 640/3.2
    }
    document.documentElement.style.fontSize = fontSize
}

windowResize()

window.onresize = function() {
    windowResize()
}
