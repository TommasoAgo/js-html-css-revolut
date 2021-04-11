$(document).ready(function() {

    // Comportamento al mouse enter sull'elemento a
    $('.dropdown-element > a').mouseenter(function() {
        $(this).parent().children('.dropdown-menu').fadeIn();
    })

    // Comportamento al mouse leave sull'elemento li
    $('.dropdown-element').mouseleave(function() {
        $(this).children('.dropdown-menu').fadeOut();
    })

    // Language Menu
    $('.right-menu .language-element > a').click(function() {
        $('.language-menu').slideToggle();
    })

    $('.language-menu').mouseleave(function() {
        $('.language-menu').fadeOut();
    })

    $('.language-element').mouseenter(function() {
        $('.arrow').removeClass('fa-chevron-up');
        $('.arrow').addClass('fa-chevron-down');
    })

    $('.language-element').mouseleave(function() {
        $('.arrow').removeClass('fa-chevron-down');
        $('.arrow').addClass('fa-chevron-up');
    })

    // Aggiungo l'evento per il burger menu
    $('.burger-menu').click(function() {
        $('.hidden-menu').fadeToggle();
    })
})