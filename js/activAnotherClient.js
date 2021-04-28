$(document).ready(function () {
  $(".btn-slide").click(function (e) {
    e.preventDefault();
    $("#form-another-client").slideToggle("slow");
  });
});
