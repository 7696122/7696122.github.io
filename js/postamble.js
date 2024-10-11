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
    );

    // contentEl.classList.add(
    //     "m-5",
    // );

    postambleEl.classList.add(
    );
})();
