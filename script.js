document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.classList.add("hover");
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("hover");
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  function animateNumber(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      element.innerText = Math.floor(
        progress * (end - start) + start
      ).toLocaleString();
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  const observerOptions = {
    root: null, // relative to the viewport
    rootMargin: "0px",
    threshold: 0.1, // element must be 10% visible in the viewport to trigger
  };

  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const endValue = parseInt(element.dataset.endValue, 10);
        animateNumber(element, 0, endValue, 2000);
        observer.unobserve(element); // Stop observing once animation starts
      }
    });
  }

  const observer = new IntersectionObserver(
    handleIntersection,
    observerOptions
  );

  const subscribersElement = document.getElementById("subscribers-number");
  const videosElement = document.getElementById("videos-number");
  const viewsElement = document.getElementById("views-number");

  subscribersElement.dataset.endValue = 225000;
  videosElement.dataset.endValue = 297;
  viewsElement.dataset.endValue = 42196006;

  observer.observe(subscribersElement);
  observer.observe(videosElement);
  observer.observe(viewsElement);
});
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.querySelector(".nav");

  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("show");
  });
});
