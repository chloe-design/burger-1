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

        var newBurger = {
          name: $("#br").val().trim(),
        };

        //send the POST
        $.ajax("/api/burgers/", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("Created new burger");
            //reload the page to get the updated list
            location.reload();
          }
        );
      });

      //based on code from beginning
      $(".delete-burger").on("click", function(event) {
        var id = $(this).data("id");
        
        //send the DELETE request like POST
        $.ajax("/api/burgers/" + id, {
          type: "DELETE",
        }).then(
          function() {
            console.log("Deleted burger", id);
            //reload the page to get the updated list
            location.reload();
          }
        );
      });
    });