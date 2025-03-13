document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");
    const links = document.querySelectorAll("nav ul li a");
    const profileImg = document.querySelector(".profile-img");

    // 🎨 Hiệu ứng hover cho navigation
    links.forEach(link => {
        link.addEventListener("mouseover", function() {
            this.style.color = "#DDA15E"; // Golden Brown Hover
        });
        link.addEventListener("mouseout", function() {
            this.style.color = "";
        });
    });

    // 📸 Hiệu ứng phóng to ảnh cá nhân khi hover
    if (profileImg) {
        profileImg.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.1)";
        });

        profileImg.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";
        });
    }
});