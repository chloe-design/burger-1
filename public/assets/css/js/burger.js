$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newDevoured = $(this).data("newdevoured");
      var newDevouredState = {
        devoured: newDevoured
      };
      //send the PUT request.
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log(newDevoured);
          //reload the page to get the updated list
          location.reload();
        }
      );
    });

    $(".create-form").on("submit", function(event) {
        //make sure to preventDefault on a submit event.
        event.preventDefault();
        console.log("Trying to create a burger.")
        var newBurger = {
          burger_name: $("#burger").val(),
          devoured: 0
        };

        //send the POST
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("Creat new burger");
            //reload the page to get the updated list
            location.reload();
          }
        );
      });
      });
