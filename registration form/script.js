document
  .getElementById("registration-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var usn = document.getElementById("usn").value;
    var branch = document.getElementById("branch").value;
    var phone = document.getElementById("phone").value;
    var image = document.getElementById("image").files[0];
    var gender = document.getElementById("gender").value;

    var reader = new FileReader();
    reader.onload = function (e) {
      var displayedData =
        "<p><strong>Name:</strong> " +
        name +
        "</p>" +
        "<p><strong>Email:</strong> " +
        email +
        "</p>" +
        "<p><strong>USN:</strong> " +
        usn +
        "</p>" +
        "<p><strong>Branch:</strong> " +
        branch +
        "</p>" +
        "<p><strong>Phone Number:</strong> " +
        phone +
        "</p>";

      document.getElementById("displayed-image").innerHTML =
        '<img src="' +
        e.target.result +
        '" alt="Uploaded Image" class="uploaded-image">';
      document.getElementById("displayed-data").innerHTML = displayedData;
    };
    reader.readAsDataURL(image);
  });
