$( document).ready(function() {

    $( "button" ).click(function() {
    
        
        // $( "#mitexto" ).text("Has pinchado en el boton");
        // $( "#mitexto" ).css("color","red");
        //$("img").height("200px");
        //$("img").toggle();

        //$('img').fadeOut(1600, function() {
        //});

        //$("mitexto").toggleClass("mieestilo");
        //function completado() {

    

    //$('img').fadeOut(1600, completado)
     
        $("#micapa").css(
            {
                "font-size" : "10px",
                "background-color" : "green",
                "color" : "white"
            }
        );
        $("button").removeClass("btn-primary").addClass("btn-info");

    });

    $("#miboton1").mouseover(function() {
        $("#micapa").append ("<p>Este es el nuevo texto</p>");
    });

    $("#miboton2").mouseover(function() {
        $("#micapa > p:last-child").remove ();
    });

    $("#miboton3").click(function() {
        console.log ( $("#micapa > p:first-child").text() );
        if ($("#micapa > p:first-child").text() == "HOY") {
            $("#micapa > p:first-child").text(" ");
        }
    });
});
    