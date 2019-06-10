$(document).ready(function () {
  var lists = [];

  $('#addbtn').click(function () {
    var item = ($('.add').val()).toUpperCase();
    $('.add').val('');
    lists.push(item);
    console.log(lists);
  }); $('#submit').click(function () {
    lists.forEach(function (list) {
        lists.sort();
        console.log(list);
        $('ul#outputlist').append('<li>' + list + '</li>');
      });
      
    $('#clear').click(function () {
          lists = [];
          $('ul#outputlist').empty();
        });
  });
});
