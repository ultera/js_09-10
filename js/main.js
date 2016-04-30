'use strict';

$(function() {

  var $checkBox = $('.js-cbox');
  var $switch = $('#css-toggle');

  var $links = $('.holder');

  /* DROP-DOWN MENU */
  $('a').on('click', function(e){
    e.preventDefault();
  });

  $links.hover(function () {
	$('ul', this).css({  'backgroundColor': 'rgba(56,56,56,0.9)'});
    clearTimeout($.data(this,'timer'));
    $('ul', this).stop(true, true).slideDown(200);
    $('ul', this).animate({ 'backgroundColor': 'rgba(21,159,227,0.8)' }, 'slow');
  }, function () {
    $.data(this,'timer', setTimeout($.proxy(function() {
      $('ul', this).stop(true, true).slideUp(2);
    }, this), 1));
	  $('ul', this).animate({  'backgroundColor': 'rgba(56,56,56,0.9)'}, 1);
  });

  /* CHECK-BOXES */
  $checkBox.mousedown(function() {
    changeCheck($(this));
  });

  $switch.on('click', function() {
    $checkBox.each( function() {
      changeCheck($(this));
    });
  });

  $checkBox.each(
    function() {
      changeCheck($(this));
  });

});

/*
    функция смены вида и значения чекбокса
    el - span контейнер дял обычного чекбокса
    input - чекбокс
*/
function changeCheck(el) {
  var input = el.find("input").eq(0);

  if(!input.attr("checked")) {
    el.css("background-position", "0 0");
    input.attr("checked", true)
  } else {
    el.css("background-position", "0 -18px");
    input.attr("checked", false)
  }
  return true;
}
