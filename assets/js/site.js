jQuery(document).ready(function($) {
  jQuery('.dropdown').dropdown();
  $('.logoo').popup();
  $('.special.cards .image').dimmer({on: 'hover'});
  $('.ui.embed').embed();

  var pathname = window.location.pathname;
  $("#menu > a.item").each(function(index) {
    if (pathname.toUpperCase().indexOf($(this).attr('href').toUpperCase()) != -1)
      $(this).addClass("active");
  });
});

jQuery(window).load(function() {
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
