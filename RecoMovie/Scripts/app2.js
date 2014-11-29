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

    if ($("#hdn_IDzanra").val() == 3) {//triler
        $("#list_triler").addClass("active");

        $("#list_horror").removeClass("active");
        $("#list_commedy").removeClass("active");
    }
    else if ($("#hdn_IDzanra").val() == 2) {//drama
        $("#list_horror").addClass("active");

        $("#list_triler").removeClass("active");
        $("#list_commedy").removeClass("active");
    }
    else if ($("#hdn_IDzanra").val() == 1) {//komedija
        $("#list_commedy").addClass("active");

        $("#list_triler").removeClass("active");
        $("#list_horror").removeClass("active");
    }
   

    $("#list_horror").on('click', function () {
        $("#list_horror").addClass("active");

        $("#list_triler").removeClass("active");
        $("#list_commedy").removeClass("active");

       
        $.ajax({
            url: '/Home/GetMovies',
            type: 'POST',
            data: {
                ID_Zanra: 2
            },
            success: function (data) {
                var html="<div>";
                $.each(data.lista, function (index, element) {
                    //$('#modal_body').append($('<div>', {
                    //    text: element.title
                    //}));
                    html += "<span class=\"badge\" id=\"numLikes\">" + element.likes + '</span>  <a href=/Home/MovieDetails?i=' + element.id + '>' + element.title + '</a><br>';

                });
                html += "</div>";
              //  alert(html);
                $("#modal_body").html(html);
                //alert(obj.length);
                //alert(data.lista);
             // $("#modal_body").html("Probaaaaa");
              $('#myModal').modal('show');
            },
            error: function () {
                alert("GRESKA");
            }

        }); // kraj ajax



        
    });

    $("#list_triler").on('click', function () {
        $("#list_triler").addClass("active");

        $("#list_horror").removeClass("active");
        $("#list_commedy").removeClass("active");

        $.ajax({
            url: '/Home/GetMovies',
            type: 'POST',
            data: {
                ID_Zanra: 3
            },
            success: function (data) {
                //var i = 0;
                var html = "<div>";
                $.each(data.lista, function (index, element) {
                    //$('#modal_body').append($('<div>', {
                    //    text: element.title
                    //}));
                    html += "<span class=\"badge\" id=\"numLikes\">"+ element.likes + '</span>  <a href=/Home/MovieDetails?i=' + element.id + '>' + element.title + '</a><br>';
                   // i++;
                });
                html += "</div>";
                //  alert(html);
                $("#modal_body").html(html);
                //alert(obj.length);
                //alert(data.lista);
                // $("#modal_body").html("Probaaaaa");
                $('#myModal').modal('show');
            },
            error: function () {
                alert("GRESKA");
            }

        }); // kraj ajax
    });

    $("#list_commedy").on('click', function () {
        $("#list_commedy").addClass("active");

        $("#list_triler").removeClass("active");
        $("#list_horror").removeClass("active");

        $.ajax({
            url: '/Home/GetMovies',
            type: 'POST',
            data: {
                ID_Zanra: 1
            },
            success: function (data) {
                var html = "<div>";
                $.each(data.lista, function (index, element) {
                    //$('#modal_body').append($('<div>', {
                    //    text: element.title
                    //}));
                    html += "<span class=\"badge\" id=\"numLikes\">" + element.likes + '</span>  <a href=/Home/MovieDetails?i=' + element.id + '>' + element.title + '</a><br>';

                });
                html += "</div>";
                //  alert(html);
                $("#modal_body").html(html);
                //alert(obj.length);
                //alert(data.lista);
                // $("#modal_body").html("Probaaaaa");
                $('#myModal').modal('show');
            },
            error: function () {
                alert("GRESKA");
            }

        }); // kraj ajax
    });


});