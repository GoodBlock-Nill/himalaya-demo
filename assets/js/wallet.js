// wallet card resize event
new ResizeSensor($('#resize-target'), () => { 
  // $('.resize-wrapper').each(function () {
  //   $(this).width($('#resize-target').width());
  // });

  $('.resize-wrapper').width($('#resize-target').width());
});

// wallet card button click evnet
$('.tab-pane .pane-top-btn, .tab-pane .card .card-btn').on('click', function (e) {
  e.preventDefault();

  $(this).toggleClass('active');

  if ($(this).hasClass('active')) {
    $('.tab-pane .pane-top-btn.active, .tab-pane .card .card-btn.active').not($(this)).removeClass('active');

    $($(this).attr('data-target')).show();
    $('.data-target-wrapper, .resize-wrapper').not($(this).attr('data-target')).hide();
  } else {
    $($(this).attr('data-target')).hide();
  }
});

// wallet custom dropdown click event
$('.tab-pane .filter-dropdown .dropdown-menu .dropdown-item').on('click', function () {
  if (!$(this).hasClass('active')) {
    $('.tab-pane .filter-dropdown button span').text($(this).text());
    $(this).addClass('active');
    $('.tab-pane .filter-dropdown .dropdown-menu .dropdown-item').not($(this)).removeClass('active');
  }
});

// wallet table icon click event
$('.tab-pane .table .table-icon').on('click', function () {
  $(this).toggleClass('active');

  if ($(this).hasClass('active')) {
    $('.tab-pane .table .table-icon').not($(this)).removeClass('active');

    $($(this).attr('data-target')).show();
    $('.data-target-wrapper-2').not($(this).attr('data-target')).hide();
  } else {
    $($(this).attr('data-target')).hide();
  }
});
