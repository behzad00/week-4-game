$(document).ready(function() {

 	var crystal1 = 0;
    var crystal2 = 0;
    var crystal3 = 0;
    var crystal4 = 0;
    var randomNumber = 0;
    var wins = 0;
    var losses = 0;
    var sum = 0;

    crystal1 = Math.floor((Math.random() * 12) + 1);
    crystal2 = Math.floor((Math.random() * 12) + 1);
    crystal3 = Math.floor((Math.random() * 12) + 1);
    crystal4 = Math.floor((Math.random() * 12) + 1);
    randomNumber = Math.floor((Math.random() * 120) + 19);

    $("#randomNumber").html(randomNumber);

	console.log("randomNumber = " + randomNumber);
    console.log("crystal1 = " + crystal1);
    console.log("crystal2 = " + crystal2);
    console.log("crystal3= " + crystal3);
    console.log("crystal4 = " + crystal4);

     $("#crystal1").on("click", function() {

        if (randomNumber >= sum) {

            sum = sum + crystal1;
            $("#score").html(sum);
            return sum;
            console.log("sum =" + sum);
        }
    });

 $("#crystal2").on("click", function() {

        if (randomNumber >= sum) {

            sum = sum + crystal2;
            $("#score").html(sum);
            return sum;
            console.log("sum =" + sum);
        }
    });

    
   
  $("#crystal3").on("click", function() {

        if (randomNumber >= sum) {

            sum = sum + crystal3;
            $("#score").html(sum);
            return sum;
            console.log("sum =" + sum);
        }
    });


    $("#crystal4").on("click", function() {

        if (randomNumber >= sum) {

            sum = sum + crystal4;
            $("#score").html(sum);
            return sum;
            console.log("sum =" + sum);
        }
    });

    if (randomNumber === sum) {
        wins++;
        $("#win-lose").html("<h2>You won!</h2>");
        $("#wins").html("<h3>" + wins + "</h3>");
        $("#score, #randomNumber").empty();
        crystal1 = 0;
        crystal2 = 0;
        crystal3 = 0;
        crystal4 = 0;
        randomNumber = 0;
        sum = 0;
    }

    if (randomNumber < sum) {
        losses++;
		$("#win-lose").html("<h2>You Lost!</h2>");
        $("#losses").html("<h3>" + losses + "</h3>");
        $("#score, #randomNumber").empty();
        crystal1 = 0;
        crystal2 = 0;
        crystal3 = 0;
        crystal4 = 0;
        randomNumber = 0;
        sum = 0;
    }

});
