const parallax = document.querySelectorAll('.parallax');

window.addEventListener('scroll', () => {
  let scrollValue = window.pageYOffset;

  parallax.forEach(image => {
    let speed = image.dataset.speed;
    image.style.transform = `translateY(${scrollValue * speed}px)`;

    console.log(scrollValue * speed);
  });
});