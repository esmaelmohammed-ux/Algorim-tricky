var el = $("#max");
el.hide();
$("#wal").on("click", man);
function man() {
  var el = $("#max").slideToggle();
}
