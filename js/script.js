$( document ).ready(function() {
//Tabs
    $( "#tabs" ).tabs();
  

//Smooth scrolling button
    $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('action'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });


//Smooth scrolling menu
    $('.go_to_section').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });



//Humburger

 if ($(window).width() > 1023) {
        $( ".cross" ).hide();
        $( ".hamburger" ).hide();
    }
    else {
        $( ".cross" ).hide();
        $( ".menu" ).hide();
        $( ".hamburger" ).show();

        $( ".hamburger" ).click(function() {
            $( ".menu" ).slideToggle( "slow", function() {
                $( ".hamburger" ).hide();
                $( ".cross" ).show();
             });
        });
        $( ".cross" ).click(function() {
            $( ".menu" ).slideToggle( "slow", function() {
            $( ".cross" ).hide();
            $( ".hamburger" ).show();
            });
        });
    }
});