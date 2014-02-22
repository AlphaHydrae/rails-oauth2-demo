
$(function() {

  $('.logout').on('click', function() {

    var data = {};
    data[$('meta[name="csrf-param"]').attr('content')] = $('meta[name="csrf-token"]').attr('content');

    $.ajax({
      url: '/users/sign_out',
      type: 'DELETE',
      data: data
    }).done(function() {
      window.location = '/users/sign_in';
    });
  });
});
