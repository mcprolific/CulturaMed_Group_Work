import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: { color: { value: "#f0f9ff" } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: { repulse: { distance: 120 }, push: { quantity: 4 } },
        },
        particles: {
          color: { value: "#0ea5e9" },
          links: { color: "#0ea5e9", distance: 150, enable: true, opacity: 0.2, width: 1 },
          collisions: { enable: false },
          move: { enable: true, speed: 1.2, direction: "none", outModes: "bounce", random: true },
          number: { value: 50, density: { enable: true, area: 800 } },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 2, max: 5 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
