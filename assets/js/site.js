jQuery(document).ready(function($) {
  jQuery('.dropdown').dropdown();
  $('.logoo').popup();
  $('.special.cards .image').dimmer({on: 'hover'});
  $('.ui.embed').embed();

  $('#moobmen').on('click', function() {
    $('.ui.sidebar')
    .sidebar('setting', 'transition', 'uncover')
    .sidebar('toggle');
  });

  var pathname = window.location.pathname;
  $("#menu > a.item").each(function(index) {
    if (pathname.toUpperCase().indexOf($(this).attr('href').toUpperCase()) != -1)
    $(this).addClass("active");
  });

  $('.right.menu.open').on("click",function(e){
    e.preventDefault();
    $('.ui.vertical.menu').toggle();
  });
  $('.ui.dropdown').dropdown();

});

jQuery(window).load(function() {
  $('.obsa').each(function() {
    var $this = $(this);
    $this.attr('href', $this.attr('href').replace(/x/g,''));
    $this.html($this.html().replace(/x/g,''));
  });
  // applyDayNightClass();
  var colWidth = $('.work').width();
  var $grid = $('.portfolio').isotope({
    itemSelector: '.work',
    masonry: {
      columnWidth: colWidth,
      fitWidth: true,
      gutter: 35
    }
  });
  $('#filters').on( 'click', 'a', function() {
    $("#filters a").removeClass('black');
    $( this ).addClass('black');
    var filterValue = $( this ).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
});

if(jQuery().lightbox) {
  lightbox.option({
    'disableScrolling': true,
  });
}

function applyDayNightClass() {
  var d = new Date();
  var n = d.getHours();
  if (n > 19)
    $('body').addClass("night");
  else
    $('body').addClass("day");
}
