$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nebula = 0;
    var xerus = 0;
    var faln = 0;

    var atmosInput = $("input:radio[name=atmos]:checked").val();
    var tempInput = $("input:radio[name=temp]:checked").val();
    var colorInput = $("input:radio[name=color]:checked").val();

    if (atmosInput==="water") {
      
    }

    $("#story").show();

    event.preventDefault();
  });
});
