import { useEffect } from "react";

export const useDetectOutsideClick = (ref, handler) => {
  const listener = event => {
    if (!ref.current || ref.current.contains(event.target)) {
      return;
    }

    handler(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  });
};
