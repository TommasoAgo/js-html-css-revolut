$(document).ready(function() {

    // Comportamento al mouse enter sull'elemento a
    $('.right-menu .dropdown-element > a').mouseenter(function() {
        $(this).parent().children('.dropdown-menu').fadeIn();
    })

    // Comportamento al mouse leave sull'elemento li
    $('.right-menu .dropdown-element').mouseleave(function() {
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
        $('.fas').removeClass('fa-chevron-up');
        $('.fas').addClass('fa-chevron-down');
    })

    $('.language-element').mouseleave(function() {
        $('.fas').removeClass('fa-chevron-down');
        $('.fas').addClass('fa-chevron-up');
    })
})