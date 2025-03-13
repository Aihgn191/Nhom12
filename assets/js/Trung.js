function showSection(sectionId) {
    // Ẩn tất cả các phần
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('visible');
        section.classList.add('hidden');
    });

    // Hiện phần được chọn
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.remove('hidden');
    selectedSection.classList.add('visible');
}
