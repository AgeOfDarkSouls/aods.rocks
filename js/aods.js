let body = document.body,
    html = document.documentElement,
    footer = document.getElementsByTagName("footer")[0];

function parallaxScrolling() {  
    const innerHeight = window.innerHeight,
        maxOriginalScroll = body.scrollHeight - innerHeight,
        maxDesiredScroll = window.innerWidth - innerHeight + footer.offsetHeight;
    let desiredScroll;
    if (maxDesiredScroll <= 0) {
        desiredScroll = 0;
    } else {
        desiredScroll = document.scrollingElement.scrollTop / maxOriginalScroll * -maxDesiredScroll;
    }
    body.style.backgroundPosition = "center " + desiredScroll + "px";
}

body.onscroll = parallaxScrolling;
window.onresize = parallaxScrolling;

parallaxScrolling();