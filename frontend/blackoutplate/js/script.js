// Video playing depending on scroll
document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('scroll-video');
    let lastKnownScrollPosition = 0;
    let ticking = false;
    const maxScroll = document.body.scrollHeight - window.innerHeight;

    function updateVideoPosition(scrollPos) {
        const scrollFraction = scrollPos / maxScroll;
        const videoTime = scrollFraction * video.duration;
        video.currentTime = videoTime;
    }

    window.addEventListener('scroll', function(e) {
        lastKnownScrollPosition = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(function() {
                updateVideoPosition(lastKnownScrollPosition);
                ticking = false;
            });

            ticking = true;
        }
    });
});

// Show/Hide sidebar
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
    setTimeout(() => {
        sidebar.classList.add('sidebar-visible');
    }, 10);
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('sidebar-visible');
    sidebar.addEventListener('transitionend', function handler() {
        sidebar.style.display = 'none';
        sidebar.removeEventListener('transitionend', handler);
    });
}



// Fade in when page just loaded
window.addEventListener('load', function() {
    setTimeout(function() {
        document.querySelector('.fade-in-image').style.opacity = '1';
    }, 100);

    setTimeout(function() {
        document.querySelector('.text-overlay h1').style.opacity = '1';
    }, 1000);

    setTimeout(function() {
        document.querySelector('.text-overlay h5').style.opacity = '1';
    }, 1200);
});

// Video plays as soon as page is in view port for Main Video in index.html
document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById('videoFullScreen');

    function playVideoOnLoad() {
        video.play().catch(error => {
            console.log("La lecture automatique a échoué", error);
        });
    }

    function checkIfVideoInView() {
        var videoPosition = video.getBoundingClientRect();
        if (videoPosition.top >= 0 && videoPosition.bottom <= window.innerHeight && !video.played.length) {
            video.play().catch(error => console.log("Lecture automatique bloquée", error));
        }
    }



    playVideoOnLoad();
    window.addEventListener('scroll', checkIfVideoInView);
    window.addEventListener('resize', checkIfVideoInView);
});

// Mute button
document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('videoFullScreen');
    var muteButton = document.getElementById('muteButton');
    var volumeOffIcon = document.getElementById('volumeOffIcon');
    var volumeOnIcon = document.getElementById('volumeOnIcon');

    updateIcon();

    muteButton.addEventListener('click', function() {
        video.muted = !video.muted;
        updateIcon(); 
    });

    function updateIcon() {
        if (video.muted) {
            volumeOffIcon.style.display = "block";
            volumeOnIcon.style.display = "none";
        } else {
            volumeOnIcon.style.display = "block";
            volumeOffIcon.style.display = "none";
        }
    }
});


// Video starts playing when in viewport
document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById('videoElement');
  
    var checkVideoVisibility = function() {
      var videoPosition = video.getBoundingClientRect();

      var videoPartiallyVisible = videoPosition.bottom > 0 && videoPosition.top < window.innerHeight;
  
      if (videoPartiallyVisible) {
        video.play();
      } else {
        video.pause();
      }
    };
  
    window.addEventListener('scroll', checkVideoVisibility);
    window.addEventListener('resize', checkVideoVisibility);
  
    checkVideoVisibility();
  });

  
// Elements slide down and fade in when they appear in the viewport. They also slide up and fade out.
function fadeInOrOutOnScroll(elementId) {
    var element = document.getElementById(elementId);
    var windowHeight = window.innerHeight;
  
    function checkVisibility() {
      var elementPosition = element.getBoundingClientRect();
      var startToDisappear = 125;
  
      if (elementPosition.bottom > startToDisappear && elementPosition.top < windowHeight - startToDisappear) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      } else {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
      }
    }
  
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    checkVisibility();
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    fadeInOrOutOnScroll('text1');
    fadeInOrOutOnScroll('text2');
    fadeInOrOutOnScroll('text3');
    fadeInOrOutOnScroll('text4');
    fadeInOrOutOnScroll('text5');
    fadeInOrOutOnScroll('text6');
    fadeInOrOutOnScroll('text7');
  });
  
// Buy Now Button appears after 110vh
  document.addEventListener('scroll', function() {
    const button = document.querySelector('.buy-now-btn');
    const triggerHeight = window.innerHeight * 1; // 100vh

    if (window.scrollY > triggerHeight) {
        button.style.bottom = '20px';
        button.style.opacity = '1';
    } else {
        button.style.bottom = '-100px';
        button.style.opacity = '0';
    }
});


const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    
    // Handle scrollbar thumb drag
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
        
        // Update thumb position on mouse move
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;

            // Ensure the scrollbar thumb stays within bounds
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
            
            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }

        // Remove event listeners on mouse up
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        // Add event listeners for drag interaction
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    // Slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

     // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }

    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    // Call these two functions when image list scrolls
    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
    });
}

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);