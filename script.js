function runApp () {
    loadPage('contatos');
    $(document).on('click', 'a', routerLink);
}
function routerLink() {
    var href = $(this).attr('href');

    if (
        href.substr(0, 7) == 'http://' ||

        href.substr(0, 8) == 'https://' ||

        href.substr(0, 1) == '#'
    ) {

        return true;
    }

    loadPage(href);

    return false;
}

function loadPage(href) {

    var page = {
        "html": `/${href}/index.html`,
        "css": `/${href}/style.css`,
        "js": `/${href}/script.js`
    }

    $.get(page.html, function (content) {

        $('#pageCSS').attr('href', page.css);

        $('#content').html(content);

        $.getScript(page.js);

    });

}

function getTitle(title = '') {

    if (title == '') {

        $('title').html(`Arcade.Bit`);

    } else {

        $('title').html(`Arcade.Bit - ${title}`);

    }
}

$(document).ready(runApp);
