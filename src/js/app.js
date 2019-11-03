import $ from 'jquery';

$(() => {
    const $body = $('body');
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    let currentColorScheme = prefersDarkMode ? 'light' : 'dark';

    function switchColorScheme() {
        $body.attr('data-color-scheme', currentColorScheme);

        if (currentColorScheme === 'light') {
            currentColorScheme = 'dark';
        } else {
            currentColorScheme = 'light';
        }
    }

    $('.theme-toggle-btn').click(e => {
        e.preventDefault();
        switchColorScheme();
    });
});