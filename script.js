document.addEventListener("DOMContentLoaded", () => {
  const dot = document.getElementById("cursor-dot");
  const outline = document.getElementById("cursor-outline");

  if (!dot || !outline) return;

  window.addEventListener("mousemove", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    dot.style.opacity = "1";
    outline.style.opacity = "1";

    outline.animate(
      {
        transform: `translate(${posX - 20}px, ${posY - 20}px)`,
      },
      { duration: 500, fill: "forwards" },
    );
  });
});
