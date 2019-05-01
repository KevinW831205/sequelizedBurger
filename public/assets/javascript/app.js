


$(function () {

    // initialize materialize components
    M.AutoInit();

    // grabing customers data
    $.ajax("api/customers", {
        type: "GET",
    }).then(function (customerData) {
        // Create dropdown select customers
        for (var i = 0; i < customerData.length; i++) {
            var customer = $("<option>")
            customer.attr("value", customerData[i].id)
            customer.text(customerData[i].customer_name + " (id=" + customerData[i].id + ")");

            $(".customersList").append(customer)
        }

        //making customerName appear
        $(".customerName").each(function () {
            for (var i = 0; i < customerData.length; i++) {
                if (customerData[i].id === $(this).data("customerid")) {
                    $(this).text(customerData[i].customer_name + "(id=" + customerData[i].id + ") ")
                }
            }
        });
    })

    $.ajax("api/burgers", {
        type: "GET",
    }).then(function (burgerData) {

        console.log(burgerData)

        $(".customer-orders").each(function () {
            for (var i = 0; i < burgerData.length; i++) {
                if (burgerData[i].CustomerId == $(this).data("customerid")) {
                    var burger = $("<li>");
                    burger.text(burgerData[i].burger_name)
                    $(this).append(burger);
                }
            }
        })

    })


    $('.customersList').on('change', function () {

        // Once a customer is selected update database and reload

        customerId = $(this).val()
        burgerId = $(this).data("burgerid")

        $.ajax("api/burgers/" + burgerId, {
            type: "PUT",
            data: { CustomerId: customerId }
        }).then(
            function () {
                location.reload();
            }
        )
        location.reload();
    });

    $(".edit-customer").on("click", function () {

        // Once a customer is to be edited update database to not associate burger with customer and reload

        burgerId = $(this).data("burgerid")

        $.ajax("api/burgers/" + burgerId, {
            type: "PUT",
            data: { CustomerId: null }
        }).then(
            function () {
                location.reload();
            }
        )
    })


    $(".devour-burger").on("click", function () {
        //clicking the devoured button grabs the data-id attribute and passes it into a put request
        var ID = $(this).data("id")

        $.ajax("api/burgers/" + ID, {
            type: "PUT",
            data: { devoured: true }
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

