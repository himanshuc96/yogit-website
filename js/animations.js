document.addEventListener("DOMContentLoaded", () => {
  // -------------------------------
  // Floating Spice Particles Animation (canvas2)
  // -------------------------------
  const canvas2 = document.getElementById("canvas2");
  if (canvas2) {
    const ctx2 = canvas2.getContext("2d");
    const particles = [];
    const colors = [
      "#C47C48", // Cinnamon
      "#D9A066", // Turmeric
      "#E2B97F", // Coriander
      "#F1C27D", // Ginger
      "#F4D58C", // Pepper
    ];

    const particleCount = 50;
    const maxSpeed = 0.3;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas2.width,
        y: Math.random() * canvas2.height,
        radius: Math.random() * 3 + 2,
        dx: (Math.random() - 0.5) * maxSpeed,
        dy: (Math.random() - 0.5) * maxSpeed,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.5 + 0.3,
      });
    }

    function animateParticles() {
      ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
      particles.forEach((p) => {
        ctx2.beginPath();
        ctx2.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx2.fillStyle = p.color;
        ctx2.globalAlpha = p.opacity;
        ctx2.fill();
        ctx2.globalAlpha = 1;

        p.x += p.dx;
        p.y += p.dy;

        // Wrap around edges
        if (p.x < 0) p.x = canvas2.width;
        if (p.x > canvas2.width) p.x = 0;
        if (p.y < 0) p.y = canvas2.height;
        if (p.y > canvas2.height) p.y = 0;
      });

      requestAnimationFrame(animateParticles);
    }

    animateParticles();
  }

  // -------------------------------
  // Swirling Spice Dust Animation (canvas4)
  // -------------------------------
  const canvas4 = document.getElementById("canvas4");
  if (canvas4) {
    const ctx4 = canvas4.getContext("2d");
    const dustParticles = [];
    const colors = ["#C47C48", "#D9A066", "#E2B97F", "#F1C27D", "#F4D58C"];
    const centerX = canvas4.width / 2;
    const centerY = canvas4.height / 2;

    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 60 + 20;
      dustParticles.push({
        angle: angle,
        radius: radius,
        speed: 0.005 + Math.random() * 0.015,
        size: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        offset: Math.random() * 100,
      });
    }

    function animateDust() {
      ctx4.clearRect(0, 0, canvas4.width, canvas4.height);

      dustParticles.forEach((p) => {
        p.angle += p.speed;

        const x = centerX + Math.cos(p.angle + p.offset) * p.radius;
        const y = centerY + Math.sin(p.angle + p.offset) * p.radius;

        ctx4.beginPath();
        ctx4.arc(x, y, p.size, 0, Math.PI * 2);
        ctx4.fillStyle = p.color;
        ctx4.globalAlpha = 0.6;
        ctx4.fill();
        ctx4.globalAlpha = 1;
      });

      requestAnimationFrame(animateDust);
    }

    animateDust();
  }
});
