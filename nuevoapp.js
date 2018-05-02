$( document).ready(function() {

    $("#miboton1").on("click", function (){
        $("#miboton3").removeClass().addClass("btn btn-success");
        $("#miboton3").text("Activado");
        $("#miboton3").on("click", function (){
            $("img").hide();
        });   
    });

    $("#miboton2").on("click", function() {
        $("#miboton3").off("click");
    });
});









/*para mover y quitar la imagen cuando click
    $( "img" ).on("mousedown",function() {
        $(this).height(200);
       
    });

    $( "img" ).on("mouseup mousemove",function() {
        $(this).height(350);

    });


});
*/
