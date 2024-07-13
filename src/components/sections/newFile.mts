document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('default-carousel');
    const wrapper = carousel?.querySelector('.carousel-wrapper');
    const items = carousel?.querySelectorAll('.carousel-item');
    const indicators = carousel?.querySelectorAll('[data-carousel-slide-to]');
    const prevButton = carousel?.querySelector('[data-carousel-prev]');
    const nextButton = carousel?.querySelector('[data-carousel-next]');
    let currentIndex = 0;
    let intervalId: number | undefined;

    function showSlide(index: number) {
        if (wrapper) {
            (wrapper as HTMLElement).style.transform = `translateX(-${index * 100}%)`;
        }
        indicators?.forEach((indicator, i) => {
            indicator.setAttribute('aria-current', i === index ? 'true' : 'false');
            indicator.classList.toggle('bg-white', i === index);
            indicator.classList.toggle('bg-gray-400', i !== index);
        });
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % (items?.length || 0);
        showSlide(currentIndex);
    }

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + (items?.length || 0)) % (items?.length || 0);
        showSlide(currentIndex);
    }

    function startAutoSlide() {
        intervalId = setInterval(showNextSlide, 20000);
    }

    function stopAutoSlide() {
        clearInterval(intervalId);
    }

    nextButton?.addEventListener('click', () => {
        showNextSlide();
        stopAutoSlide();
        startAutoSlide();
    });

    prevButton?.addEventListener('click', () => {
        showPrevSlide();
        stopAutoSlide();
        startAutoSlide();
    });

    indicators?.forEach((indicator, i) => {
        indicator.addEventListener('click', () => {
            currentIndex = i;
            showSlide(currentIndex);
            stopAutoSlide();
            startAutoSlide();
        });
    });

    carousel?.addEventListener('mouseenter', stopAutoSlide);
    carousel?.addEventListener('mouseleave', startAutoSlide);

    showSlide(currentIndex);
    startAutoSlide();
});
