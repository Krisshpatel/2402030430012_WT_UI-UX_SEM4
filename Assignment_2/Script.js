document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Simulate authentication (Replace with backend validation)
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "Yoga@example.com" && password === "Yoga789") {
        window.location.href = "vr.html"; // Redirect to Home Page
    } else {
        alert("Invalid credentials! Please try again.");
    }
});