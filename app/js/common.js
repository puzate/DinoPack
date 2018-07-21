$(document).ready(function() {
	$('.home_services_content_list > .__list > li').click(function() {
		$('.home_services_content_list > .__list > li').removeClass('active')
		$($(this)).addClass('active');
	});
	if ($('.home_services_content_list .__list > li .__sub-list > li').hasClass('active')) {
		$($(this)).removeClass('active')
	};
	$('#js_carousel_cases').owlCarousel({
		items: 1,
		dots: false,
		nav: true,
		loop: true,
		navText: ['<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="47px" height="18px"><text kerning="auto" font-family="Myriad Pro" fill="rgb(0, 0, 0)" transform="matrix( -1, 0, 0, 1,46.5, 23)" font-size="50px"><tspan font-size="50px" font-family="Times New Roman" fill="#FFFFFF">&#8594;</tspan></text></svg>' , '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="47px" height="18px"><text kerning="auto" font-family="Myriad Pro" fill="rgb(0, 0, 0)" font-size="50px" x="0px" y="24px"><tspan font-size="50px" font-family="Times New Roman" fill="#FFFFFF">&#8594;</tspan></text></svg>']
	});
	$('.header_scroll .__text').on('click', function() {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
      $('html').animate({ scrollTop: destination }, 1100);
        return false; 
	});
	$(".home_faq_content_list .__list").on("click", "li:not(.active)", function() {
		$(this)
			.addClass("active")
			.siblings()
			.removeClass("active")
			.closest(".home_faq_content")
			.find(".home_faq_content_tabs .home_faq_content_tabs_position")
			.removeClass("active")
			.eq($(this).index())
			.addClass("active");
	});
});
$('.home_steps_content_img_counter .__prev').on('click', function() {
	$('.home_steps_content_list .__list').find('li.active').removeClass('active').prev().addClass('active');
	$('.home_steps_content_img_counter .__counter .active > span').empty().append(+$('.home_steps_content_list .__list li.active .__number').html())
});
$('.home_steps_content_list .__list li').click(function() {
	$('.home_steps_content_list .__list li').removeClass('active')
	$($(this)).addClass('active');
	$('.home_steps_content_img_counter .__counter .active > span').empty().append(+$('.home_steps_content_list .__list li.active .__number').html())
});
$(".home_steps_content_img_counter .__next").on('click', function () {
  var nextItem  = $('.home_steps_content_list .__list').find('li.active').removeClass('active').next();

    if (!nextItem.length) {
        nextItem = $('.home_steps_content_list .__list li').first();
        $('.home_steps_content_list .__list li').last().addClass('last');
    }
    nextItem.addClass('active');
    $('.home_steps_content_img_counter .__counter .active > span').empty().append(+$('.home_steps_content_list .__list li.active .__number').html())
    $('.home_steps_content_list .__list li').removeClass('last');
    var last = $('.home_steps_content_list .__list li').last();
    if(nextItem.is(last)) {
        nextItem.addClass('last');
    }
});
$(".home_steps_content_img_counter .__prev").on('click', function () {
  var prevItem  = $('.home_steps_content_list .__list').find('li.active').removeClass('active').prev();

    if (!prevItem.length) {
        prevItem = $('.home_steps_content_list .__list li').first();
        $('.home_steps_content_list .__list li').first().addClass('last');
    }
    prevItem.addClass('active');
    $('.home_steps_content_img_counter .__counter .active > span').empty().append(+$('.home_steps_content_list .__list li.active .__number').html())
    $('.home_steps_content_list .__list li').removeClass('last');
    var last = $('.home_steps_content_list .__list li').last();
    if(prevItem.is(last)) {
        prevItem.addClass('last').removeClass('active');
    }
});