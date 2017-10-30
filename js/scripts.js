$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nebula = 0;
    var xerus = 0;
    var faln = 0;

    var atmosInput = $("input:radio[name=atmos]:checked").val();
    var tempInput = $("input:radio[name=temp]:checked").val();
    var colorInput = $("input:radio[name=color]:checked").val();
    var foodInput = $("input:radio[name=food]:checked").val();
    var timeInput = $("input:radio[name=time]:checked").val();


    if (atmosInput==="water") {
      faln +=1;
    } else if (atmosInput==="oxygen" || atmosInput==="hydrogen") {
      xerus +=1;
    } else if (atmosInput==="none") {
      nebula +=1;
    }

    if (tempInput==="cold" || tempInput=="hot") {
      nebula +=1;
    } else if (tempInput==="human") {
      faln +=1;
      xerus +=1;
    }

    if (colorInput==="blue") {
      faln +=1;
    } else if (colorInput ==="red") {
      xerus +=1;
    } else if (colorInput ==="green" || colorInput ==="infared") {
      nebula +=1;
    }

    if (timeInput==="short") {
      xerus +=1;
    } else if (timeInput ==="long") {
      faln +=1;
    } else if (timeInput ==="infinite") {
      nebula +=1;
    }

    if (faln === xerus || faln === nebula || nebula === faln) {
      if (foodInput === "pasta") {
        xerus +=1;
      } else if (foodInput === "nori") {
        faln +=1;
      } else if (foodInput === "solar") {
        nebula +=1;
      }
    }


    if (faln > xerus && faln > nebula) {
      $("#faln").show();
    }

    if (xerus > faln  && xerus > nebula) {
      $("#xerus").show();
    }

    if (nebula > xerus && nebula > faln) {
      $("#nebula").show();
    }

    event.preventDefault();
  });
});
