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
            console.log("Creat new burger");
            location.reload();
          }
        );
      });
      });
;