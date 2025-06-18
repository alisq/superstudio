const colHeights = [];

document.querySelectorAll(".column").forEach(column => {
  const interior = column.querySelector(".column_interior");
  if (interior) {
    colHeights.push(interior.offsetHeight);
  }
});

const largest = Math.max(...colHeights);

document.body.style.height = `${largest}px`;

document.addEventListener("scroll", () => {
  const scrollRatio = document.documentElement.scrollTop / (document.body.offsetHeight - window.innerHeight);

  document.querySelectorAll(".column").forEach(column => {
    const interior = column.querySelector(".column_interior");
    if (interior) {
      const targetScroll = (interior.offsetHeight + window.innerHeight) * scrollRatio;
      column.scrollTop = targetScroll;
    }
  });
});