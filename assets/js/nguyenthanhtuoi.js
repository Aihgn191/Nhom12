document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");
    const profileImg = document.querySelector(".profile-img");

    // 🎯 Hiệu ứng cuộn header
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // 📸 Hiệu ứng ảnh cá nhân khi hover
    if (profileImg) {
        profileImg.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.1)";
        });

        profileImg.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";
        });
    }
});
