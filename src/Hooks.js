import { useState } from "react";

function useFlip() {
  const [isFacingUp, setIsFacingUp] = useState(true);
  const toggleFlip = () => {
    setIsFacingUp((isUp) => !isUp);
  };

  return [isFacingUp, toggleFlip];
}

export { useFlip };
