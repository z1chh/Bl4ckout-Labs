// Loading effect
document.addEventListener('DOMContentLoaded', (event) => {
  const minimumDisplay = 1500;
  const loadingScreen = document.getElementById('loading');

  setTimeout(() => {
    if (loadingScreen) {
      loadingScreen.style.opacity = '0';
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 500);
    }
  }, minimumDisplay);
});

// NavBar becomes black opaque when user scrolls
window.addEventListener('scroll', function() {
  var nav = document.querySelector('nav');
  if(window.pageYOffset > 0){
      nav.classList.add('nav-opaque');
  } else {
      nav.classList.remove('nav-opaque');
  }
});

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

  
// Elements slide down and fade in when they appear in the viewport. They also slide up and fade out. By id.
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
    // Add the ids of elements if you want them to appear and disappear when going out of the viewport
  document.addEventListener("DOMContentLoaded", function() {
    fadeInOrOutOnScroll('text1');
    fadeInOrOutOnScroll('text2');
    fadeInOrOutOnScroll('text3');
    fadeInOrOutOnScroll('text4');
    fadeInOrOutOnScroll('text5');
    fadeInOrOutOnScroll('text6');
    fadeInOrOutOnScroll('img1');
    fadeInOrOutOnScroll('img2');
    fadeInOrOutOnScroll('img3');
  });
  
// Buy Now Button appears after 110vh
  document.addEventListener('scroll', function() {
    const button = document.querySelector('.buy-now-btn');
    const triggerHeight = window.innerHeight * 0.5; // 100vh

    if (window.scrollY > triggerHeight) {
        button.style.bottom = '20px';
        button.style.opacity = '1';
    } else {
        button.style.bottom = '-100px';
        button.style.opacity = '0';
    }
});

// Elements slide down and fade in when they appear in the viewport. They also slide up and fade out. By class name.
function fadeInOrOutOnScrollByClassName(className) {
    var elements = document.getElementsByClassName(className);
    var windowHeight = window.innerHeight;
  
    function checkVisibility() {
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var elementPosition = element.getBoundingClientRect();
        var startToDisappear = 100;
  
        if (elementPosition.bottom > startToDisappear && elementPosition.top < windowHeight - startToDisappear) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        } else {
          element.style.opacity = '0';
          element.style.transform = 'translateY(20px)';
        }
      }
    }
  
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    checkVisibility();
  }
  
  // Add the class names of elements if you want them to appear and disappear when going out of the viewport
  document.addEventListener("DOMContentLoaded", function() {
    fadeInOrOutOnScrollByClassName('faq');
  });
  
  // Switch between Terms and Conditions and Warranty
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("termsBtn").addEventListener("click", function() {
      changeActiveSection("terms");
    });
  
    document.getElementById("warrantyBtn").addEventListener("click", function() {
      changeActiveSection("warranty");
    });
  
    function changeActiveSection(section) {
      document.querySelector("#buttons button.active").classList.remove("active");
      document.querySelector("#content .content.active").classList.remove("active");
      
      document.getElementById(section + "Btn").classList.add("active");
      document.getElementById(section).classList.add("active");
    }
  });

// Info toggles for FAQ.html
document.addEventListener('DOMContentLoaded', function() {
  var toggles = document.querySelectorAll('.info-toggle');

  toggles.forEach(function(toggle) {
      toggle.addEventListener('click', function() {
          var item = this.parentNode;
          var content = this.nextElementSibling;

          if (item.classList.contains('active')) {
              item.classList.remove('active');
              content.style.maxHeight = '0';
          } else {
              var allContents = document.querySelectorAll('.info-content');
              var allItems = document.querySelectorAll('.info-item');
              
              allContents.forEach(function(content) {
                  content.style.maxHeight = '0';
              });
              allItems.forEach(function(item) {
                  item.classList.remove('active');
              });

              item.classList.add('active');
              content.style.maxHeight = content.scrollHeight + 'px';
          }
      });
  });
});

$(function() {
  var $fixedBg = $('.fixed-background');

  $(window).on('scroll', function() {
    var scrolled = $(window).scrollTop();
    $fixedBg.css('background-position', 'center ' + (-scrolled) + 'px');
  });
});


  
