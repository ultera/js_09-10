'use strict';

$(function() {

  var $checkBox = $('.js-cbox');
  var $switch = $('#css-toggle');


  /* DROP-DOWN MENU */
  $('a').on('click', function(e) {
    e.preventDefault();
  });

  $('.holder').hover(function () {
    var $ul = $('ul', this);
	  $ul.attr('backgroundColor', 'rgba(56,56,56,0.9)');
    clearTimeout($.data(this,'timer'));
    ($ul)
      .stop(true, true).slideDown(200)
      .animate({ 'backgroundColor': 'rgba(21,159,227,0.8)' }, 'slow');
  }, function () {
      var $ul = $('ul', this);
      $.data(this,'timer', setTimeout($.proxy(function() {
        $ul.stop(true, true).slideUp(2);
      }, this), 1));
  	  $ul.animate({'backgroundColor': 'rgba(56,56,56,0.9)'}, 1);
  });

  /* CHECK-BOXES */
  $checkBox.on('click', function() {
    changeCheck($(this));
  });

  $switch.on('click', function() {
    $checkBox.each( function() {
      changeCheck($(this));
    });
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
