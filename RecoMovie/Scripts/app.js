$(document).ready(function () {

    $("#pretraga").on('click', function () {

        alert($("#movies").val());

    });

    $('#chc_horor').prettyCheckable({
        label:'Horror'
    });
    $('#chc_triler').prettyCheckable({
        label: 'Thriller'
    });
    $('#chc_commedy').prettyCheckable({
        label: 'Comedy'
    });

  
    $("#movies").autocomplete({
        minLength: 2,

        source: function (request, response) {
            $.ajax({
                url: "/Home/PretragaFilmova",
                dataType: "JSON",
                data: {
                    query: request.term
                },
                success: function (data) {
                 //   alert("asd");
                    response($.map(data.movies, function (item) {
                        return {
                            label: item.title,
                            value: item.title,
                            id:item.id
                        }
                    }));
                },
                error: function () {
                    alert("GRESKAA!");
                }
            });
        },
        select: function (event, ui) {
            //  alert(ui.item.id);
            window.location.href = "/Home/MovieDetails?i=" + ui.item.id;
        }
       
    });





});//end doc ready