// Open Modal
document.getElementById("loginBtn").onclick = function () {
    document.getElementById("loginModal").style.display = "flex";
};

// Close Modal
document.querySelector(".close").onclick = function () {
    document.getElementById("loginModal").style.display = "none";
};

// Close when clicking outside
window.onclick = function (event) {
    if (event.target == document.getElementById("loginModal")) {
        document.getElementById("loginModal").style.display = "none";
    }
};
