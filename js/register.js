
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    showSuccessMessage();
});

function showSuccessMessage() {
    document.getElementById("successMessage").style.display = "block";
    document.getElementById("successIcon").style.display = "block";
    document.getElementById("successMessage").style.animation = "fadeIn 1s ease";
    document.getElementById("successIcon").style.animation = "fadeIn 1s ease";
}
