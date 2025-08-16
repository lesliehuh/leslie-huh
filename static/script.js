// Home Page "Tell me more!" button functionality
$(function() {
    var $more = $("#more");
    var $bioText = $("#more-info");

    $more.on("click", function() {
        if ($bioText.is(":visible")) {
            $bioText.hide();
            $more.text("Tell me more!");
        } else {
            $bioText.show();
            $more.text("Read less...");
        }
    });
});

// Contact Page form validation
function formVal () {
    console.log("crashing out");
    // getting field inputs
    const name = document.getElementById("name");
    const comment = document.getElementById("comment");
    const email = document.getElementById("email");
    
    if (!name.checkValidity()) {
        document.getElementById("nameErr").innerHTML = "Please enter a valid name";
    }
    if (!email.checkValidity()) {
        document.getElementById("emailErr").innerHTML = "Please enter a valid email"
    }
    if (!comment.checkValidity()) {
        document.getElementById("commErr").innerHTML = "Please enter a valid comment.";
    }
}