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

document.querySelectorAll('.tool_tip').forEach(tip => {
    t = document.getElementById("tool_tip");
    tip.addEventListener('mouseenter',(e)=>{
        t.classList.add('active');

        t.innerHTML = tip.dataset.tip;
        t.style.top = e.clientY+'px';
        t.style.left = e.clientX+'px';
    })

    tip.addEventListener('mouseleave',(e)=>{
        console.log(e)
        t.classList.remove('active')
        setTimeout(function(){
            t.innerHTML = "";
        }, 200)
        
    })
    
})