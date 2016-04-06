$(document).ready(function(){


  imageUrl = "images/bg" + String(Math.floor((Math.random() * 7) + 1)) + ".jpg";
  $("#main").css('background-image', 'url("' + imageUrl + '"")');

  x = String(Math.floor((Math.random() * 9) + 1)*10)
  y = String(Math.floor((Math.random() * 9) + 1)*10)
  $("#main").css('background-position', x+ "% "+y+"%");

});