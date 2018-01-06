function initBackgroundAnimation(id) {
  window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 20);
      };
  })();

  // Canvas variables
  var canvas, ctx;

  /**
   * Variable storing mouse position
   *
   * mousePos.x - mouse position in x axis
   * mousePos.y - mouse position in y axis
   */
  var mousePos = {};

  /**
   * Array of particles to show on the screen
   *
   * particle: {
   *   // Starting coordinates are added so particles won't "wander off" too much
   *   startX - particle starting x coordinate
   *   startY - particle starting y coordinate
   *   currentX - particle current x coordinate
   *   currentY - particle current y coordinate
   *   // Target coordinates allow particles to randomly move
   *   targetX - particle target x coordinate
   *   targetY - particle target x coordinate
   *   startClock - when particle should change its target coordinates
   *   clock - constantly ticking down on every animation frame, resets to startClock
   * }
   */
  var particles = [];

  var particlesDensity = 80;
  var maxParticles = particlesDensity * particlesDensity;

  /**
   * Array of connections between particles
   *
   * connection: {
   *   firstParticleIndex,
   *   secondParticleIndex
   * }
   */
  var connections = [];

  var connectionsAmount = 10;

  var particleImage;

  loadParticleImage(function () {
      window.addEventListener('mousemove', function (e) {
        _.throttle(setMousePos(e), 50);
      });

      initCanvas();
      generateParticles();
      //generateConnections();
  });

  function loadParticleImage(callback) {
    particleImage = new Image();
    particleImage.src = './src/assets/particle.png';
    particleImage.onload = function () {
      callback();
    };
  }

  function setMousePos(evt) {
    var rect = canvas.getBoundingClientRect();
    mousePos = {
      x: (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width,
      y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
    };
  }

  function initCanvas() {
    canvas = document.getElementById(id);
    console.log(canvas);
    ctx = canvas.getContext("2d");
    canvas.width = canvas.parentNode.clientWidth;
    canvas.height = canvas.parentNode.clientHeight;
  }

  function generateParticles() {
    for (var i = 0; i < maxParticles; i++) {
      var startX = /* Math.random() **/ 0.5 * ( canvas.width / particlesDensity ) + ( i % particlesDensity * canvas.width / particlesDensity );
      var startY = /*Math.random() **/ 0.5 * ( canvas.height / particlesDensity ) + ( Math.floor(i / particlesDensity) ) * canvas.height / particlesDensity;
      var startClock = Math.floor(Math.random() * 50 + 40);
      particles.push({
        startX: startX,
        startY: startY,
        currentX: startX,
        currentY: startY,
        targetX: startX,
        targetY: startY,
        startClock: startClock,
        clock: startClock,
        scareDistance: Math.floor(Math.random() * 50 + 50)
      });
    }
  }

  function generateConnections() {
    for (var i = 0; i < connectionsAmount; i++) {
      connections.push({
        firstParticleIndex: Math.floor(Math.random() * maxParticles),
        secondParticleIndex: Math.floor(Math.random() * maxParticles),
      })
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw particles
    particles.forEach(function (particle) {
      var width = particleImage.width * 1.5;
      var height = particleImage.height * 1.5;
      ctx.drawImage(particleImage, particle.currentX - width / 2, particle.currentY - height / 2, width, height);
      /*ctx.beginPath();
       ctx.arc(particle.currentX, particle.currentY, 1, 0, 2 * Math.PI, false);
       ctx.fill();
       ctx.stroke();*/
    });

    /*connections.forEach(function (connection) {
     var firstParticle = particles[connection.firstParticleIndex];
     var secondParticle = particles[connection.secondParticleIndex];
     ctx.beginPath();
     ctx.moveTo(firstParticle.currentX, firstParticle.currentY);
     ctx.lineTo(secondParticle.currentX, secondParticle.currentY);
     ctx.stroke();
     });*/

    update();
  }

  function update() {
    for (var i = 0; i < maxParticles; i++) {
      var particle = particles[i];
      --particle.clock;
      if (particle.clock <= 0) {
        particle.targetX = particle.startX + (Math.random() - 0.5) * 10;
        particle.targetY = particle.startY + (Math.random() - 0.5) * 10;
        particle.clock = particle.startClock;
      }

      particle.currentX += (particle.targetX - particle.currentX) / 50;
      particle.currentY += (particle.targetY - particle.currentY) / 50;

      particles[i] = runFromMouse(particle);
    }
  }

  function runFromMouse(particle) {
    var posRelativeToMouse = {
      x: particle.currentX - mousePos.x,
      y: particle.currentY - mousePos.y
    };

    var distance = Math.sqrt(
      Math.pow(posRelativeToMouse.x, 2) +
      Math.pow(posRelativeToMouse.y, 2)
    );
    if (distance < particle.scareDistance) {
      var velocityFactor = 100 / distance;
      particle.targetX = particle.currentX + Math.pow(velocityFactor, 2) * posRelativeToMouse.x;
      particle.targetY = particle.currentY + Math.pow(velocityFactor, 2) * posRelativeToMouse.y;
    } else {
      particle.targetX = particle.startX;
      particle.targetY = particle.startY;
    }

    return particle;
  }

  //animation loop
  (function animloop() {
    requestAnimFrame(animloop);
    draw();
  })();
}