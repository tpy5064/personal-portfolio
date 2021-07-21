import React from "react";
import { BsArrowsExpand } from "react-icons/bs";

const SkewDrag = () => {

  var deltaX = 0;
  var isDragging = false;
  var styles = {
    left: 0
  };

  const dragStart = (e) => {
    deltaX = e.screenX - e.currentTarget.getBoundingClientRect().left;
    isDragging = true;
  }

  const dragging = (e) => {
    if(isDragging) {
      var left = e.screenX - deltaX;
    }

    styles.left = left;
  }

  const dragEnd = () => {
    isDragging = false;
  }

  return (
    <div className="hero-drag" style={styles} onMouseDown={dragStart} onMouseMove={dragging} onMouseUp={dragEnd}>
      <BsArrowsExpand className="hero-drag-icon" />
    </div>
  );
};

export default SkewDrag;
