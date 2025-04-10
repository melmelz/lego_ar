AFRAME.registerComponent("draggable", {
    init: function () {
      let el = this.el;
      let dragging = false;
      
      // Mouse down event to start dragging
      el.addEventListener("mousedown", () => dragging = true);
      el.addEventListener("mouseup", () => dragging = false);
  
      // Mouse move event to update position of the LEGO piece
      el.addEventListener("mousemove", (e) => {
        if (!dragging) return;
        let newPos = el.getAttribute("position");
        el.setAttribute("position", {
          x: newPos.x + e.movementX * 0.01,
          y: newPos.y,
          z: newPos.z + e.movementY * 0.01,
        });
      });
    }
  });
  
  // Snapping component for LEGO pieces to align to grid
  AFRAME.registerComponent("snappable", {
    tick: function () {
      let el = this.el;
      let pos = el.getAttribute("position");
      el.setAttribute("position", {
        x: Math.round(pos.x * 2) / 2,
        y: Math.round(pos.y * 2) / 2,
        z: Math.round(pos.z * 2) / 2,
      });
    }
  });
  

  document.getElementById("lego-menu").addEventListener("change", (event) => {
    let selectedModel = event.target.value;
    // Update the current LEGO piece with the selected model
    document.getElementById("lego-piece").setAttribute("gltf-model", "#" + selectedModel);
  });
  