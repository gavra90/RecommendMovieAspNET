$(document).ready(function () {

    $("#btn_like").on('click', function () {
        $.ajax({
            url: '/Home/LikeMovie',
            type: 'POST',
            data: {
                ID_Movie: $("#hdn_IDMovie").val()
                
            },
            success: function (data) {
               // alert(data.poruka);
                $("#btn_like").removeClass("btn btn-primary");
                $("#btn_like").addClass("btn btn-default");                
                var a = $("#numLikes").text();                
                a = parseInt(a) + 1;
                $("#numLikes").text(a);
                $("#btn_like").attr('disabled',true);

            },
            error: function () {
                alert("GRESKA");
            }

        }); // kraj ajax

    });


});