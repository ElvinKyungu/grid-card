document.querySelectorAll('.img').forEach(img => {
  img.addEventListener('click', function() {
    const grid = img.parentElement;
    const gridRect = grid.getBoundingClientRect();
    document.querySelectorAll('.img').forEach(otherImg => {
      if (otherImg !== img) {
        gsap.to(otherImg, 
          { 
            opacity: 0, 
            duration: 0.5, 
            onComplete: () => otherImg.classList.add('hidden') 
          }
        );
      }
    });

    img.classList.add('expanded');
    gsap.to(img, {
      top: 0, 
      left: 0,
      width: gridRect.width,
      height: gridRect.height,
      duration: 5,
      ease: "power4.inOut"
    });
  });
});