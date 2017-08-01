$('.logo')
    .mouseenter(function () {
        $(this).addClass('enter').removeClass('leave');
    })
    .mouseleave(function () {
        $(this).addClass('leave').removeClass('enter');
    });