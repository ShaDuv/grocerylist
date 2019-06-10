$(document).ready(function () {
  var lists = [];
  $('#addbtn').click(function () {
    var item = ($('.add').val()).toUpperCase();
    $('.add').val('');
    lists.push(item);
    console.log(lists);
  });
  $('#submit').click(function () {
    lists.forEach(function (list) {
        console.log(list);
        $('ul#outputlist').prepend('<li>' + list + '</li>');
      });
  });
});
