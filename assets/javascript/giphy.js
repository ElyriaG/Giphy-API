// create an array to be searched
// loop through the array and create buttons for them
// create a div to display gifs
// function
// link buttons to ajax
// search by:
// var movie = $(this).attr("data-name");
// on click start and stop
// when new button is clicked, replace old gifs
// (give them rating labels? or any label?)
// search function to add new animal, append to array

function renderButtons() {
    var buttons = ""
    // $("#buttons-view").empty();
    var movies = ["Interstellar", "The Dark Knight", "Inception", "Pirates of the Carribean", "Anchorman", "Kill Bill", "Star Wars", "Lord of the Rings", "Harry Potter", "The Blues Brothers", "The Matrix", "Ace Ventura", "Dirty Dancing", "Spongebob the Movie", "Mad Max", "Venom", "The Avengers"];
    for (var i = 0; i < movies.length; i++) {
       var buttons = $("<button>").attr("id", "moviesButton").text(movies[i])
        buttons.appendTo("#buttonsDiv");
        // console.log(buttons)
        $(buttons).on("click", function (event) {
            // event.preventdefault();
            var movie = $(this).val().trim();
            console.log($(movie).val());
        });

        var movie = ""
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + movie + "&api_key=FHh9mWC90FyTtVYHXSy5uFhHubUvyLWb&limit=1";
        // $.ajax({
        //     url: queryURL,
        //     method: "GET"
        // }).then(function (response) {
        //     $("#gifsDiv").append('<img class="gif" src="' + response.data[0].embed_url +'">');
        // });
        // console.log("hello");
        // $("#moviesButton").on("click", function (event) {
        //     // event.preventdefault();
        //     var movie = $(this).val();
        //     console.log("moviesButton");
        // });
    }
};

renderButtons();


// function displayGifs() {


    // var movie = $(this).attr("BUTTON ID");
    // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + movie + "?&api_key=FHh9mWC90FyTtVYHXSy5uFhHubUvyLWb&limit=1";

    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    //   }).then(function(response) {
    //     for (var i=0; i<movies.length; i++) {
    //     console.log(response);
    //   }})
    // };

    // displayGifs();

