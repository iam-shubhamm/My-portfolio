// @ts-nocheck -- imported portfolio code, written for looser TS settings
import * as THREE from "three";

export const handleMouseMove = (
  event: MouseEvent,
  setMousePosition: (x: number, y: number) => void
) => {
  const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  setMousePosition(mouseX, mouseY);
};

export const handleTouchMove = (
  event: TouchEvent,
  setMousePosition: (x: number, y: number) => void
) => {
  const mouseX = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
  const mouseY = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
  setMousePosition(mouseX, mouseY);
};

export const handleTouchEnd = (
  setMousePosition: (
    x: number,
    y: number,
    interpolationX: number,
    interpolationY: number
  ) => void
) => {
  setTimeout(() => {
    setMousePosition(0, 0, 0.03, 0.03);
    setTimeout(() => {
      setMousePosition(0, 0, 0.1, 0.2);
    }, 1000);
  }, 2000);
};

export const handleHeadRotation = (
  headBone: THREE.Object3D,
  mouseX: number,
  mouseY: number,
  interpolationX: number,
  interpolationY: number,
  lerp: (x: number, y: number, t: number) => number,
  gazeLocked = false
) => {
  if (!headBone) return;
  // Keep head movement restrained; the model's eyes still follow naturally
  // because their gaze is part of the same facial rig.
  if (gazeLocked) {
    // In the typing pose, lower the gaze just enough to meet the monitor.
    headBone.rotation.x = -0.02;
    headBone.rotation.y = 0;
    return;
  }
  const lookSideToSideLimit = 0.68;
  const targetYaw = mouseX * lookSideToSideLimit;
  // Keep the idle gaze at the description height, then let the cursor move it
  // slightly up or down without letting the chin dip toward the floor.
  const targetPitch = THREE.MathUtils.clamp(-0.38 - mouseY * 0.32, -0.74, -0.02);

  headBone.rotation.y = lerp(headBone.rotation.y, targetYaw, interpolationY);
  headBone.rotation.x = lerp(headBone.rotation.x, targetPitch, interpolationX);
};
