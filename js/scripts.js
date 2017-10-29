$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nebula = 0;
    var xerus = 0;
    var faln = 0;

    var atmosInput = $("input:radio[name=atmos]:checked").val();
    var tempInput = $("input:radio[name=temp]:checked").val();
    var colorInput = $("input:radio[name=color]:checked").val();

    if (atmosInput==="water") {
      faln +=1;
    } else if (atmosInput==="oxygen" || atmosInput==="hydrogen") {
      xerus +=1;
    } else if (atmosInput==="none") {
      nebula +=1;
    }

    alert("Faln:" + faln);
    alert("Xerus:" + xerus);
    alert("Nebula:" + nebula);

    event.preventDefault();
  });
});
