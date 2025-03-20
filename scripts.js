

document.addEventListener("DOMContentLoaded", function () {
    let arrow = document.getElementById("scroll-arrow");

    window.addEventListener("scroll", function () {
        let scrollPosition = window.innerHeight + window.scrollY;
        let documentHeight = document.documentElement.scrollHeight;
        
        if (scrollPosition >= documentHeight - 10) {
            arrow.classList.add("hidden"); // Hide when at the bottom
        } else {
            arrow.classList.remove("hidden"); // Show when scrolling up
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.intersectionRatio > 0.5) { // Start fading in when 50% is visible
                  entry.target.classList.add("visible");
                  entry.target.classList.remove("exiting", "hidden");
              } else if (entry.intersectionRatio < 0.5) { // Start fade-out earlier
                  entry.target.classList.add("exiting");
                  entry.target.classList.remove("visible");
                  
                  // Delay applying "hidden" so fade-out animation plays
                  setTimeout(() => {
                      if (!entry.target.classList.contains("visible")) {
                          entry.target.classList.add("hidden");
                      }
                  }, 800); // Adjust based on fade-out duration
              }
          });
      },
      {
          threshold: [0.5], // Start fade-out when less than 50% is visible
      }
  );

  elements.forEach((el) => observer.observe(el));
});

document.addEventListener('DOMContentLoaded', function() {
    const img = new Image();
    img.src = 'resources/bg3.jpg';
    img.onload = function() {
        document.body.classList.add('loaded');
    };
});

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('contactBtn');
    const section = document.getElementById('Contact');

    button.addEventListener('click', function() {
      section.scrollIntoView({ behavior: 'smooth' });
    });
  });