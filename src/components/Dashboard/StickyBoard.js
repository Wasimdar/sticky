import React, { useRef, useState } from "react";
import './StickyBoard.css';

const StickyBoard = () => {
  const [allowMove, setAllowMove] = useState(false);
  const stickyNoteRef = useRef();
  const [dx, setDx] = useState(0);
  const [dy, setDy] = useState(0);

  const handleMouseUp = () => {
    setAllowMove(false);
  };

  const handleMouseMove = (e) => {
    if (allowMove) {
      const x = e.clientX - dx;
      const y = e.clientY - dy;

      stickyNoteRef.current.style.left = x + "px";
      stickyNoteRef.current.style.top = y + "px";
    }
  };

  const handleMouseDown = (e) => {
    setAllowMove(true);
    const dimensions = stickyNoteRef.current.getBoundingClientRect();
    setDx(e.clientX - dimensions.left);
    setDy(e.clientY - dimensions.top);
  };

  return (
    <div className="sticky-note" ref={stickyNoteRef} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
      <div className="sticky-note-header" onMouseDown={handleMouseDown}>
        <div>Sticky Note</div>
        <div className="close" onClick={() => console.log("Close clicked")}>
          &times;
        </div>
      </div>
      <textarea cols="30" rows="10" />
    </div>
  );
};

export default StickyBoard;
