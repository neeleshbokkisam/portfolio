import React, { useEffect, useState } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    // Show cursor after initial load
    const timeoutId = setTimeout(() => {
      setHidden(false);
    }, 2000);
    
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      
      handleLinkHoverEvents();
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
    };

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const handleLinkHoverEvents = () => {
      document.querySelectorAll("a, button, [role='button']").forEach((el) => {
        el.addEventListener("mouseover", () => setLinkHovered(true));
        el.addEventListener("mouseout", () => setLinkHovered(false));
      });
    };

    addEventListeners();
    return () => {
      removeEventListeners();
      clearTimeout(timeoutId);
    };
  }, []);

  const cursorClasses = `
    fixed pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2
    transition-transform duration-200 ease-out
    ${hidden ? 'opacity-0' : 'opacity-100'}
    ${clicked ? 'scale-75' : ''}
    ${linkHovered ? 'scale-150' : ''}
  `;

  const innerCursorClasses = `
    absolute bg-gray-500 rounded-full w-4 h-4
    left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
    transition-all duration-200 ease-out
    ${clicked ? 'opacity-30' : 'opacity-50'}
    ${linkHovered ? 'opacity-75' : ''}
  `;




  // Only show custom cursor on devices that support hover
  const shouldShowCustomCursor = typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches;

  if (!shouldShowCustomCursor) return null;

  return (
    <div
      className={cursorClasses}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div className={innerCursorClasses}></div>
    </div>
  );
};

export default Cursor;