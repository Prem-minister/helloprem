$(document).ready(function () {
  var letters = $('.rubber1').text();
  var nHTML = '';
  var extra = 0;

  for (var letter of letters) {
    nHTML += "<span class='gomu'  style='left: " + extra + "vw;'>" + letter + "</span>";
    extra += 2;
  }
  $('rubber1').html(nHTML);
})


$(document).ready(function () {
  var letters = $('.rubber2').text();
  var nHTML = '';
  var extra = 0;

  for (var letter of letters) {
    nHTML += "<span class='gomu'  style='left: " + extra + "vw;'>" + letter + "</span>";
    extra += 2;
  }
  $('.rubber2').html(nHTML);
})