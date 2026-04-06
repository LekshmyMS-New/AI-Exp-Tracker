import { useRef } from "react";

const SwipeWrapper = ({ children, onSwipeLeft, onSwipeRight }) => {
  const touchStart = useRef(0);

  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const delta = e.changedTouches[0].clientX - touchStart.current;

    if (delta > 80 && onSwipeRight) onSwipeRight();
    if (delta < -80 && onSwipeLeft) onSwipeLeft();
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ width: "100%" }}
    >
      {children}
    </div>
  );
};

export default SwipeWrapper;