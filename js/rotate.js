const rotations = [-1.2, -0.7 -0.5, -0.2, 0.2, 0.5, 0.7, 1.2];
// about 0.7

document.querySelectorAll(".rotate").forEach((image) => {
  image.addEventListener("pointerenter", () => {
    const angle = rotations[Math.floor(Math.random() * rotations.length)];
    image.style.transform = `rotate(${angle}deg)`;
  });

  image.addEventListener("pointerleave", () => {
    // Reset rotation
    image.style.transform = "rotate(0deg)";
  });
});
