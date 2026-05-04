import { useEffect, useRef } from "react";

export function GeoScene3D() {
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return undefined;

    let disposed = false;
    let cleanupScene: (() => void) | undefined;

    const setupScene = async () => {
      const THREE = await import("three");
      if (disposed) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
      camera.position.set(0.3, 1.2, 6.2);

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        preserveDrawingBuffer: true,
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
      renderer.setClearColor(0x000000, 0);
      host.appendChild(renderer.domElement);

      const group = new THREE.Group();
      group.position.set(1.8, -0.25, 0);
      group.rotation.set(-0.25, -0.48, 0.12);
      scene.add(group);

      const layerColors = [0x123e34, 0x0b1c18, 0xc7974a, 0x1f5f50, 0x24302b];
      layerColors.forEach((color, index) => {
        const geometry = new THREE.BoxGeometry(3.4 - index * 0.08, 0.18, 1.75);
        const material = new THREE.MeshStandardMaterial({
          color,
          roughness: 0.78,
          metalness: color === 0xc7974a ? 0.42 : 0.08,
          transparent: true,
          opacity: color === 0xc7974a ? 0.72 : 0.62,
        });
        const layer = new THREE.Mesh(geometry, material);
        layer.position.y = (index - 2) * 0.22;
        layer.position.x = Math.sin(index * 1.6) * 0.11;
        group.add(layer);
      });

      const edges = new THREE.LineSegments(
        new THREE.EdgesGeometry(new THREE.BoxGeometry(3.55, 1.18, 1.9)),
        new THREE.LineBasicMaterial({ color: 0xe1b76d, transparent: true, opacity: 0.24 }),
      );
      group.add(edges);

      const drill = new THREE.Mesh(
        new THREE.CylinderGeometry(0.018, 0.018, 2.3, 18),
        new THREE.MeshBasicMaterial({ color: 0xf3f7f4, transparent: true, opacity: 0.48 }),
      );
      drill.position.set(0.72, 0.18, 0.05);
      drill.rotation.z = 0.04;
      group.add(drill);

      const marker = new THREE.Mesh(
        new THREE.SphereGeometry(0.085, 24, 24),
        new THREE.MeshStandardMaterial({ color: 0xe1b76d, roughness: 0.35, metalness: 0.45 }),
      );
      marker.position.set(0.72, -0.18, 0.05);
      group.add(marker);

      const contourMaterial = new THREE.LineBasicMaterial({
        color: 0xf3f7f4,
        transparent: true,
        opacity: 0.13,
      });
      for (let i = 0; i < 6; i += 1) {
        const points = [];
        const radiusX = 1.65 + i * 0.24;
        const radiusZ = 0.82 + i * 0.12;
        for (let step = 0; step <= 96; step += 1) {
          const angle = (step / 96) * Math.PI * 2;
          points.push(
            new THREE.Vector3(
              Math.cos(angle) * radiusX,
              -0.82 + i * 0.03,
              Math.sin(angle) * radiusZ,
            ),
          );
        }
        const curve = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(curve, contourMaterial);
        line.rotation.x = Math.PI / 2.8;
        line.position.x = -0.15;
        group.add(line);
      }

      scene.add(new THREE.AmbientLight(0xe6f1ec, 0.52));
      const keyLight = new THREE.DirectionalLight(0xe1b76d, 1.45);
      keyLight.position.set(2.8, 3.5, 4.2);
      scene.add(keyLight);
      const fillLight = new THREE.DirectionalLight(0x2b6f7a, 0.65);
      fillLight.position.set(-3, 1.5, 3);
      scene.add(fillLight);

      let frameId = 0;

      const resize = () => {
        const { width, height } = host.getBoundingClientRect();
        renderer.setSize(width, height, false);
        camera.aspect = width / Math.max(height, 1);
        camera.updateProjectionMatrix();
      };

      const animate = () => {
        group.rotation.y += 0.002;
        group.rotation.x = -0.25 + Math.sin(performance.now() * 0.0008) * 0.025;
        marker.position.y = -0.18 + Math.sin(performance.now() * 0.002) * 0.05;
        renderer.render(scene, camera);
        frameId = requestAnimationFrame(animate);
      };

      resize();
      animate();
      window.addEventListener("resize", resize);

      cleanupScene = () => {
        window.removeEventListener("resize", resize);
        cancelAnimationFrame(frameId);
        renderer.dispose();
        scene.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            object.geometry.dispose();
            if (Array.isArray(object.material)) {
              object.material.forEach((material) => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        });
        if (renderer.domElement.parentElement === host) {
          host.removeChild(renderer.domElement);
        }
      };
    };

    void setupScene();

    return () => {
      disposed = true;
      cleanupScene?.();
    };
  }, []);

  return (
    <div
      ref={hostRef}
      className="geo-scene-3d pointer-events-none absolute inset-0 hidden opacity-75 sm:block"
      aria-hidden="true"
    />
  );
}
