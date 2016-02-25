$(function() {
$(".button-click a").on("click", function() {
  var $button = $(this);
  var oldValue = $button.closest("ul").prev().val();

  if ($button.text() == " ") {
      var newVal = parseInt(oldValue) +13;
    }
  if ($button.text() == "  ") {
      var newVal = parseInt(oldValue) -4;
    }
  if ($button.text() == "   ") {
      var newVal = parseInt(oldValue) +34;
    }
  if ($button.text() == "    ") {
      var newVal = parseInt(oldValue) +3;
    }
  $button.closest("ul").prev().val(newVal);
})
});

// negative 4 and positive 3 have a difference of (1), so the score can effectively be adjusted to always have a solution