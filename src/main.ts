import "./style.scss";

const gradBoxes = document.querySelectorAll(".grad-box");

gradBoxes.forEach((gradBox: Element) => {
  const gradBoxDiv = gradBox as HTMLDivElement;
  gradBoxDiv.addEventListener("mousemove", (e: MouseEvent) => {
    const x = e.pageX - gradBoxDiv.offsetLeft;
    const y = e.pageY - gradBoxDiv.offsetTop;

    gradBoxDiv.style.setProperty("--x", `${x}px`);
    gradBoxDiv.style.setProperty("--y", `${y}px`);
  });
});
