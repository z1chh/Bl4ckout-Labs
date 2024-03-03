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
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
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

    video.addEventListener('click', function() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });

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
  });
  