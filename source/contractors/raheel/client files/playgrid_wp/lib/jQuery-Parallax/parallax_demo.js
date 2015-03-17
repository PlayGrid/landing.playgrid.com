/**
 * Created with JetBrains PhpStorm.
 * User: ikis1520
 * Date: 18/05/13
 * Time: 17:39
 * To change this template use File | Settings | File Templates.
 */

$(window).load(function () {
    var top, bottom, y, page, page_bottom, page_next, section_next;
    var ToFixed = jQuery('.tofix');

    var left = $('.tofix').offset().left;

    $(window).scroll(function (event) {

        // what the y position of the scroll is
        controlArticlePositions();

        // whether that's below the form

        //console.log('y: '+y);
        //console.log('page_next '+ page_next);
        //console.log('section_next '+ top);
        //console.log('bottom '+ bottom);
        //if (y >= top && y<=bottom && y > page) {
        if (y <= section_next && y >= page_next && page_next > 0) {
            //console.log('in');
            ToFixed.addClass('fixed');

        } else {
            //console.log('on');
            ToFixed.removeClass('fixed');
        }
    });

    $(window).resize(function () {
        // tofixwidth();
    });

    function controlArticlePositions() {
        page = $('.section_slider').position().top;
        page_next = $('.title_main').position().top;
        section_next = $('.newsletter').position().top;
        page_bottom = $('.section_slider').position().top + $('.section_slider').height();
        pageb = $('.tofix').height();

        top = $('.tofix').offset().top;

        bottom = page + $('.section_slider').height() - pageb;

        y = $(window).scrollTop();
        x = $(window).scrollLeft();
    }

});

