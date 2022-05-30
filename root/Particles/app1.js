/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js1',

{
  "particles": {
    "number": {
      "value": 22,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#000"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 3
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.45,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1.0557003759917487,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 0,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 208.44356791251798,
      "color": "#ffffff",
      "opacity": 0.5451601006942778,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 350,
        "line_linked": {
          "opacity": 0.35
        }
      },
      "bubble": {
        "distance": 400,
        "size": 4.060386061506726,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 73.08694910712106,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 5
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

);