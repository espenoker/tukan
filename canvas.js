const canvas = document.querySelector("canvas")
const sandbox = new GlslCanvas(canvas)

const calcSize = function(){
    let ww = window.innerWidth
    let wh = window.innerHeight
    let dpi = window.devicePixelRatio
  
    let s = Math.max(wh, ww)
  
    canvas.width = s * dpi
    canvas.height = s * dpi
  
    canvas.style.width = s + "px"
    canvas.style.height = s + "px"
  
  }
  calcSize()
  window.addEventListener("resize", function(){
    calcSize()
  })

sandbox.load(frag)
sandbox.setUniform("disp2", "displacement4.png")