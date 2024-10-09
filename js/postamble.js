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
