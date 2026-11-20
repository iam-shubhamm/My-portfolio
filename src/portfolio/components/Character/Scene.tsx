// @ts-nocheck -- imported portfolio code, written for looser TS settings
import { useEffect, useRef } from "react";
import * as THREE from "three";
import setCharacter from "./utils/character";
import setLighting from "./utils/lighting";
import handleResize from "./utils/resizeUtils";
import {
  handleMouseMove,
  handleTouchEnd,
  handleHeadRotation,
  handleTouchMove,
} from "./utils/mouseUtils";
import setAnimations from "./utils/animationUtils";
import { setAllTimeline, setCharTimeline } from "../utils/GsapScroll";
import "../styles/Landing.css";

const Scene = () => {
  const canvasDiv = useRef<HTMLDivElement | null>(null);
  const hoverDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvasHost = canvasDiv.current;
    if (!canvasHost) return;

    const rect = canvasHost.getBoundingClientRect();
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: window.devicePixelRatio < 2,
      powerPreference: "high-performance",
    });
    renderer.setSize(rect.width, rect.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    canvasHost.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(
      14.5,
      rect.width / Math.max(rect.height, 1),
      0.1,
      1000
    );
    camera.position.set(0, 13.1, 24.7);
    camera.zoom = 1.1;
    camera.updateProjectionMatrix();

    let disposed = false;
    let frameId = 0;
    let model: THREE.Object3D | null = null;
    let headBone: THREE.Object3D | null = null;
    let screenLight: any | null = null;
    let mixer: THREE.AnimationMixer | undefined;
    let removeHoverListeners: (() => void) | undefined;
    let mouse = { x: 0, y: 0 };
    let interpolation = { x: 0.42, y: 0.42 };
    let gazeLocked = window.scrollY > 20;

    const light = setLighting(scene);
    const { loadCharacter } = setCharacter(renderer, scene, camera);
    const onResize = () => {
      if (model && !disposed) {
        handleResize(renderer, camera, canvasDiv, model);
      }
    };
    const onMouseMove = (event: MouseEvent) => {
      handleMouseMove(event, (x, y) => (mouse = { x, y }));
    };
    const onTouchMove = (event: TouchEvent) => {
      handleTouchMove(event, (x, y) => (mouse = { x, y }));
    };
    const onTouchEnd = () => {
      handleTouchEnd((x, y, interpolationX, interpolationY) => {
        mouse = { x, y };
        interpolation = { x: interpolationX, y: interpolationY };
      });
    };
    const onScroll = () => {
      // Keep gaze tracking interactive on the first screen. As soon as the
      // page starts moving toward the desk scene, lock the gaze on the laptop.
      gazeLocked = window.scrollY > 20;
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("touchmove", onTouchMove, { passive: true });
    document.addEventListener("touchend", onTouchEnd);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    loadCharacter()
      .then((gltf) => {
        // React StrictMode replays effects in development. Ignore a load that
        // finishes after its renderer has been disposed, so it cannot add a
        // second character or animation loop to the live scene.
        if (disposed || !gltf) return;

        const animations = setAnimations(gltf);
        if (hoverDivRef.current) {
          removeHoverListeners = animations.hover(gltf, hoverDivRef.current);
        }
        mixer = animations.mixer;
        model = gltf.scene;
        scene.add(model);
        headBone = model.getObjectByName("spine006") || null;
        screenLight = model.getObjectByName("screenlight") || null;

        setCharTimeline(model, camera);
        setAllTimeline();
        light.turnOnLights();
      })
      .catch((error) => {
        if (!disposed) console.error("Unable to load the 3D character:", error);
      });

    // Once the "What I Do" section has been fully seen, slide the fixed
    // character up together with it, so it is gone before My Career.
    // Uses the CSS `translate` property so it never fights gsap's transform.
    let lastShift = -1;
    const syncExit = () => {
      const what = document.querySelector(".whatIDO");
      if (!what) return;
      const rect = what.getBoundingClientRect();
      const shift = Math.max(0, window.innerHeight - rect.bottom);
      // While "What I Do" is on screen, keep the character in front of its
      // big title so the heading passes behind him, not over his face/body.
      const front = rect.top < window.innerHeight * 0.6 && rect.bottom > 0;
      const z = front ? "10" : "";
      if (canvasHost.style.zIndex !== z) canvasHost.style.setProperty("z-index", z, front ? "important" : "");
      if (shift !== lastShift) {
        lastShift = shift;
        canvasHost.style.translate = `0 ${-shift}px`;
        canvasHost.style.visibility = shift > window.innerHeight ? "hidden" : "";
      }
    };

    const animate = () => {
      if (disposed) return;
      syncExit();
      frameId = requestAnimationFrame(animate);
      if (screenLight) light.setPointLight(screenLight);
      mixer?.update(clock.getDelta());
      if (headBone) {
        handleHeadRotation(
          headBone,
          mouse.x,
          mouse.y,
          interpolation.x,
          interpolation.y,
          THREE.MathUtils.lerp,
          gazeLocked
        );
      }
      renderer.render(scene, camera);
    };
    const clock = new THREE.Clock();
    frameId = requestAnimationFrame(animate);

    return () => {
      disposed = true;
      cancelAnimationFrame(frameId);
      removeHoverListeners?.();
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      scene.clear();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div className="character-container">
      <div className="character-model" ref={canvasDiv}>
        <div className="character-rim" />
        <div className="character-hover" ref={hoverDivRef} />
      </div>
    </div>
  );
};

export default Scene;
