function stopScroll() {
    $('body').addClass('stop-scrolling'); // adds stop scrolling class to body tag
    $('body').bind('touchmove', function (e) {
        e.preventDefault(); // prevents scrolling in body when loaded
    });
    $('body').unbind('touchmove'); // allows body scrolling with touch move
}
