import React, { useEffect, useRef, useState } from "react";

const AsteroidGame = () => {
  const canvasRef = useRef(null);
  const shipRef = useRef({
    x: 400,
    y: 300,
    size: 20,
    angle: 0,
    speed: 0,
    maxSpeed: 5,
    acceleration: 0.05,
    rotationSpeed: 0.03,
    color: "white",
  });
  const asteroidsRef = useRef([]);
  const bulletsRef = useRef([]);
  const [score, setScore] = useState(0);

  const keysPressed = useRef({
    ArrowUp: false,
    ArrowLeft: false,
    ArrowRight: false,
    ArrowDown: false,
    Space: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const handleKeyDown = (e) => {
      keysPressed.current[e.key] = true;
    };

    const handleKeyUp = (e) => {
      keysPressed.current[e.key] = false;
      if (e.key === " ") {
        keysPressed.current["Space"] = true; // This ensures that the space bar can be pressed again after releasing
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    const updateGame = () => {
      updateShip();
      updateAsteroids();
      updateBullets();
      checkCollisions();
    };

    const updateShip = () => {
      if (keysPressed.current["ArrowUp"]) {
        shipRef.current.speed = shipRef.current.maxSpeed;
      } else if (keysPressed.current["ArrowDown"]) {
        // Allow ship to stop and back up
        shipRef.current.speed = -shipRef.current.maxSpeed;
      } else {
        shipRef.current.speed = 0;
      }

      if (keysPressed.current["ArrowLeft"]) {
        shipRef.current.angle -= shipRef.current.rotationSpeed;
      }
      if (keysPressed.current["ArrowRight"]) {
        shipRef.current.angle += shipRef.current.rotationSpeed;
      }
      if (keysPressed.current["Space"]) {
        bulletsRef.current.push({ x: shipRef.current.x, y: shipRef.current.y, angle: shipRef.current.angle });
        keysPressed.current["Space"] = false;
      }

      // Update ship position
      shipRef.current.x += Math.cos(shipRef.current.angle) * shipRef.current.speed;
      shipRef.current.y += Math.sin(shipRef.current.angle) * shipRef.current.speed;

      // Wrap around when going out of the canvas
      if (shipRef.current.x > canvas.width) {
        shipRef.current.x = 0;
      } else if (shipRef.current.x < 0) {
        shipRef.current.x = canvas.width;
      }
      if (shipRef.current.y > canvas.height) {
        shipRef.current.y = 0;
      } else if (shipRef.current.y < 0) {
        shipRef.current.y = canvas.height;
      }
    };

    const updateAsteroids = () => {
      if (Math.random() < 0.02 && asteroidsRef.current.length < 5) {
        // Limit the number of asteroids on the screen
        asteroidsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 30 + 20,
          speed: Math.random() * 1 + 0.5,
          angle: Math.random() * Math.PI * 2,
          rotationSpeed: Math.random() * 0.1 - 0.05,
        });
      }

      // Update existing asteroids
      asteroidsRef.current.forEach((asteroid) => {
        asteroid.x += Math.cos(asteroid.angle) * asteroid.speed;
        asteroid.y += Math.sin(asteroid.angle) * asteroid.speed;

        // Wrap around when going out of the canvas
        if (asteroid.x > canvas.width) {
          asteroid.x = 0;
        } else if (asteroid.x < 0) {
          asteroid.x = canvas.width;
        }
        if (asteroid.y > canvas.height) {
          asteroid.y = 0;
        } else if (asteroid.y < 0) {
          asteroid.y = canvas.height;
        }

        asteroid.angle += asteroid.rotationSpeed;
      });
    };

    const updateBullets = () => {
      bulletsRef.current.forEach((bullet) => {
        bullet.x += Math.cos(bullet.angle) * 8;
        bullet.y += Math.sin(bullet.angle) * 8;
      });
    };

    const checkCollisions = () => {
      bulletsRef.current.forEach((bullet) => {
        asteroidsRef.current.forEach((asteroid, index) => {
          const distance = Math.sqrt((bullet.x - asteroid.x) ** 2 + (bullet.y - asteroid.y) ** 2);

          if (distance < asteroid.size) {
            // Collision detected
            setScore((prevScore) => prevScore + 1);
            bulletsRef.current.splice(bulletsRef.current.indexOf(bullet), 1);
            asteroidsRef.current.splice(index, 1);
          }
        });
      });
    };

    const drawShip = () => {
      context.save();
      context.translate(shipRef.current.x, shipRef.current.y);
      context.rotate(shipRef.current.angle);
      context.fillStyle = shipRef.current.color;
      context.beginPath();
      context.moveTo(-shipRef.current.size / 2, -shipRef.current.size / 2);
      context.lineTo(shipRef.current.size / 2, 0);
      context.lineTo(-shipRef.current.size / 2, shipRef.current.size / 2);
      context.closePath();
      context.fill();
      context.restore();
    };

    const drawAsteroids = () => {
      asteroidsRef.current.forEach((asteroid) => {
        context.strokeStyle = "green";
        context.lineWidth = 2;
        context.beginPath();
        context.moveTo(
          asteroid.x + asteroid.size * Math.cos(0),
          asteroid.y + asteroid.size * Math.sin(0)
        );
        for (let i = 1; i <= 6; i++) {
          const angle = (i * 2 * Math.PI) / 6;
          const x = asteroid.x + asteroid.size * Math.cos(angle);
          const y = asteroid.y + asteroid.size * Math.sin(angle);
          context.lineTo(x, y);
        }
        context.closePath();
        context.stroke();
      });
    };

    const drawBullets = () => {
      bulletsRef.current.forEach((bullet) => {
        context.fillStyle = "red";
        context.fillRect(bullet.x - 2.5, bullet.y - 2.5, 5, 5);
      });
    };

    const drawScore = () => {
      context.fillStyle = "white";
      context.font = "20px Arial";
      context.fillText(`Score: ${score}`, 10, 30);
    };

    const drawGame = () => {
      // Clear the canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

      drawAsteroids();
      drawShip();
      drawBullets();
      drawScore();
    };

    const gameLoop = () => {
      updateGame();
      drawGame();
      requestAnimationFrame(gameLoop);
    };

    gameLoop();

    // Cleanup event listener
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [score]);

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={1680}
        height={700}
        style={{ background: "rgba(128, 128, 128, 0.2)", border: "1px solid white" }}
      />
      <p style={{ color: "white", textAlign: "center" }}>
        Use arrow keys to accelerate, left and right arrows to rotate, spacebar to shoot (if you found this page, awesome! Im working on bugs right now..)
      </p>
    </div>
  );
};

export default AsteroidGame;
