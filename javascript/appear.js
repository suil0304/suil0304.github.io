// made by ChatGPT
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".appear");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    }, { threshold: 0.45 });

    items.forEach((item) => {
        observer.observe(item);
    });
});