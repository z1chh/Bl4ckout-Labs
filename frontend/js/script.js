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

    // Essayez de jouer la vidéo au chargement
    function playVideoOnLoad() {
        video.play().catch(error => {
            // La lecture automatique n'a pas fonctionné
            console.log("La lecture automatique a échoué", error);
        });
    }

    // Fonction pour vérifier si la vidéo est dans le viewport
    function checkIfVideoInView() {
        var videoPosition = video.getBoundingClientRect();
        if (videoPosition.top >= 0 && videoPosition.bottom <= window.innerHeight && !video.played.length) {
            video.play().catch(error => console.log("Lecture automatique bloquée", error));
        }
    }

    // Interaction manuelle pour jouer/pauser la vidéo
    video.addEventListener('click', function() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });

    playVideoOnLoad(); // Essayez de jouer la vidéo au chargement
    window.addEventListener('scroll', checkIfVideoInView);
    window.addEventListener('resize', checkIfVideoInView);
});

// Mute button
document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('videoFullScreen');
    var muteButton = document.getElementById('muteButton');
    var volumeOffIcon = document.getElementById('volumeOffIcon'); // Volume Off SVG
    var volumeOnIcon = document.getElementById('volumeOnIcon'); // Volume On SVG

    // Set the initial state based on video's default muted state
    updateIcon();

    muteButton.addEventListener('click', function() {
        video.muted = !video.muted; // Toggle the video's muted state
        updateIcon(); // Update the icon based on the new muted state
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


