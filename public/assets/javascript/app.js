// add validation


$(function () {

    $(".devour-burger").on("click", function () {
        //clicking the devoured button grabs the data-id attribute and passes it into a put request
        var ID = $(this).data("id")

        $.ajax("api/burgers/" + ID, {
            type: "PUT",
        }).then(
            function () {
                location.reload();
            }
        )
    });

    $(".remove-burger").on("click", function () {
        //clicking the devoured button grabs the data-id attribute and passes it into a put request
        var ID = $(this).data("id")

        $.ajax("api/burgers/" + ID, {
            type: "DELETE",
        }).then(
            function () {
                location.reload();
            }
        )
    });

    $("#submit-burger").on("click", function (event) {

        event.preventDefault();
        // revalidate input
        $("#burger-validation").hide()

        if ($("#burger-name").val() == "") {
            // if input is empty
            $("#burger-validation").show()
        } else {
            // a burger was inputed
            // trims the input value and puts the value into the body of a post request and submits a post request to the api/burger route
            var burgerName = { name: $("#burger-name").val().trim() }

            $.ajax("api/burgers", {
                type: "POST",
                data: burgerName
            }).then(
                function () {
                    location.reload();
                }
            )

            $("#burger-name").val("")

        }


    });

})

// $('.devour-burger').hover(
//     function () { $(this).addClass('') },
//     function () { $(this).removeClass('hover') }
// )