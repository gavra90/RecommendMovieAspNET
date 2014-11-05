$(document).ready(function () {

    $("#btn_like").on('click', function () {

      
        $("#btn_like").removeClass(this.className);
        $("#btn_like").addClass("btn btn-default");
        //$("#btn_like").text("Liked");

        var a = $("#numLikes").text();
       // alert(a);
        a = parseInt(a) + 1;
        $("#numLikes").text(a);
        this.disabled = true;
        



    });


});