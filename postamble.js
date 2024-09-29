(function () {
    let bodyEl = document.body
    // let contentEl = document.getElementById('content');
    let preambleEl = document.getElementById('preamble');
    let postambleEl = document.getElementById('postamble');
    let preambleRect = preambleEl.getBoundingClientRect();

    bodyEl.classList.add(
        `pt-[${preambleRect.height}px]`,
    );

    preambleEl.classList.add(
        "w-[100vw]",
        "nav-down",
        "transition",
        "duration-[200ms]",
        "ease-in-out",
        "fixed",
        // "sticky",
        "top-0",
        "z-50",
        // "p-4",
        // "h-[40px]",
    );

    // contentEl.classList.add(
    //     "m-5",
    // );

    postambleEl.classList.add(
        // "w-[100vw]",

        // "fixed",
        // "bottom-0",

        // "top-[100vh]",
        "z-50",
        // "p-4",
        // "m-4",
    );
})();

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}
