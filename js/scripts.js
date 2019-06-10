$(document).ready(function () {
  var lists = [];

  $('#addbtn').click(function () {
    var item = ($('.add').val()).toUpperCase();
    $('.add').val('');
    lists.push(item);
    // lists.sort();
    console.log(lists);
  });

  // var abcList = lists.map(function (lists) {
  //   return lists.sort();
  // });

  $('#submit').click(function () {
    lists.forEach(function (list) {
      lists.sort();
        console.log(list);
        $('ul#outputlist').append('<li>' + list + '</li>');
      });
  });
});
