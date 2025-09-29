(() => {
    const modalImage = document.getElementById('modalImage');
    const modalLabel = document.getElementById('fotoModalLabel');
    const yearVal = document.getElementById('yearVal');
    const modalCaption = document.getElementById('modalCaption');

    document.querySelectorAll('[data-bs-target="#fotoModal"]').forEach(el => {
        el.addEventListener('click', () => {
            const src = el.dataset.src || el.getAttribute('src') || "";
            const title = el.dataset.title || el.getAttribute('alt') || "Foto";
            const year = el.dataset.year || "