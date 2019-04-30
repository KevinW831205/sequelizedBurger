


$(function () {

    // initialize materialize components
    M.AutoInit();

    $.ajax("api/customers", {
        type: "GET",
    }).then(function (customerData) {


        for (var i = 0; i < customerData.length; i++) {
            var customer = $("<option>")
            customer.attr("value", customerData[i].id)
            customer.text(customerData[i].customer_name + " (id=" + customerData[i].id + ")");

            console.log(customer)
            $(".customersList").append(customer)
        }

    })

    $('.customersList').on('change', function () {
        customerId = $(this).val()
        burgerId = $(this).data("burgerid")

        $.ajax("api/burgers/" + burgerId, {
            type: "PUT",
            data: {CustomerId: customerId}
        }).then(
            function () {
                location.reload();
            }
        )
        location.reload();
    });


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
            // trims the input value and puts the value into the body of a post request and submits a post request to the api/burgers route
            var burgerName = { burger_name: $("#burger-name").val().trim() }

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


    $("#submit-customer").on("click", function (event) {

        event.preventDefault();
        // revalidate input
        $("#customer-validation").hide()

        if ($("#customer-name").val() == "") {
            // if input is empty
            $("#customer-validation").show()
        } else {
            // a customer was inputed
            // trims the input value and puts the value into the body of a post request and submits a post request to the api/customers route
            var customerName = { customer_name: $("#customer-name").val().trim() }

            $.ajax("api/customers", {
                type: "POST",
                data: customerName
            }).then(
                function () {
                    location.reload();
                }
            )

            $("#customer-name").val("")

        }
    });


})

