const numStars = 200;
        const body = document.body;

        for (let i = 0; i < numStars; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            const size = Math.random() * 3 + 1;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.top = `${Math.random() * window.innerHeight}px`;
            star.style.left = `${Math.random() * window.innerWidth}px`;
            star.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
            body.appendChild(star);
        }

        function irAPagina() {
            window.location.href = "index4.html"; // Redirige a la página index4.html
        }