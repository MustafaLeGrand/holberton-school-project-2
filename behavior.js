document.addEventListener("DOMContentLoaded", () => {
    const thumbnail = document.getElementById('smart_thumbnail');

    thumbnail.onclick = () => {
        thumbnail.classList.toggle('small');
    }
});