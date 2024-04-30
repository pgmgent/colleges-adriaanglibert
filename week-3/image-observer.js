const loadImage = ($image) => {
    const src = $image.dataset.src;
    $image.setAttribute('src', src);
}

const lazyLoadImages = () => {
    const $images = document.querySelectorAll("img[data-src]");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadImage(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '800px 0px 0px 0px'
    });

    $images.forEach($image => {
        observer.observe($image);
    });
}

lazyLoadImages();