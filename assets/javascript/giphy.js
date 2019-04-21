
var topics = ["Interstellar", "The Dark Knight", "Inception", "Pirates of the Carribean", "Anchorman", "Kill Bill", "Star Wars", "Lord of the Rings", "Harry Potter", "Jurassic Park", "The Matrix", "Ace Ventura", "Dirty Dancing", "Forrest Gump", "Mad Max", "Venom", "The Avengers"];


function displayMovieInfo() {
    $(".movie").on("click", function () {
        var movieToBeSearched = $(this).text().trim();
        var movie = movieToBeSearched.split(" ").join("");

        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + movie + "&api_key=FHh9mWC90FyTtVYHXSy5uFhHubUvyLWb&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var results = response.data;
            for (var i = 0; i < results.length; i++) {
                var rating = results[i].rating;
                var movieDiv = $("<div>");

                var p = $("<p>");
                p.text("Rating: " + rating);

                var movieGif = $("<img>").addClass("gif");
                movieGif.attr("src", results[i].images.fixed_height.url);

                console.log(response);

                $('body').on('click', '.gif', function () {
                    var src = $(this).attr("src");
                    if ($(this).hasClass('playing')) {
                        $(this).attr('src', src.replace(/\.gif/i, "_s.gif"))
                        $(this).removeClass('playing');
                    } else {
                        $(this).addClass('playing');
                        $(this).attr('src', src.replace(/\_s.gif/i, ".gif"))
                    }
                });


                movieDiv.prepend(movieGif);
                movieDiv.prepend(p);
                movieDiv.prepend(movieToBeSearched + ":");


                console.log(response)
                $("#gifsDiv").prepend(movieDiv);
            };
        });
    });
};

function renderButtons() {

    $("#buttonsDiv").empty();
    for (var i = 0; i < topics.length; i++) {
        a = $("<button>");
        a.addClass("movie");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#buttonsDiv").append(a);
    };
};


$(".btn").on("click", function (event) {

    event.preventDefault();
    var searchedMovie = $("#searchForm").val();
    var movie2 = searchedMovie.split(" ").join("");
    topics.push(movie2);
    renderButtons();
});

$(document).on("click", ".movie", displayMovieInfo);
renderButtons();





