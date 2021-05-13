function imgbig() {
  var imgsrc = $('#imgsrc').attr('src');
  $("#bigimg").css("display","flex");
  $("#bigimg").html("<img src="+imgsrc+" />");
}
 
function closeimg() {
  $("#bigimg").css("display","none");
}