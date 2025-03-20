

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

  $(function() {
    var documentEl = $(document),
        fadeElem = $('.fade-scroll'),
        // Increase threshold for better mobile visibility
        threshold = $(window).height() * 0.75, // 75% of viewport height
        maxBlur = 10;    // maximum blur in pixels

    documentEl.on('scroll', function() {
        var currScrollPos = documentEl.scrollTop(),
            windowHeight = $(window).height();

        fadeElem.each(function() {
            var $this = $(this),
                elemOffsetTop = $this.offset().top,
                elemHeight = $this.outerHeight(),
                elementMiddle = elemOffsetTop + (elemHeight / 2),
                viewportMiddle = currScrollPos + (windowHeight / 2);

            // Calculate distance from element's middle to viewport's middle
            var distance = Math.abs(viewportMiddle - elementMiddle);
            
            // Make elements become fully visible sooner
            var opacity = 1 - (distance / threshold);
            // Add extra buffer to ensure full visibility
            opacity = Math.max(0, Math.min(1, opacity * 1.2)); 

            // Calculate blur with reduced effect
            var blurVal = (1 - opacity) * maxBlur;

            $this.css({
                opacity: opacity,
                filter: 'blur(' + blurVal + 'px)'
            });
        });
    });

    // Trigger scroll event on page load
    $(document).trigger('scroll');
});