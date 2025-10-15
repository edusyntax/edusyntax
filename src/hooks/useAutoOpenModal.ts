import { useState, useEffect } from "react";

/**
 * Auto-opens a modal after a delay or at repeated intervals.
 * 
 * @param delay - time in milliseconds before first open (default 1000)
 * @param repeat - whether to reopen periodically (default false)
 * @param interval - interval time in milliseconds (used only if repeat=true)
 */
export const useAutoOpenModal = (
  delay: number = 1000,
  repeat: boolean = false,
  interval: number = 30000
) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);

      if (repeat) {
        const intervalTimer = setInterval(() => {
          setIsOpen(true);
        }, interval);

        return () => clearInterval(intervalTimer);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, repeat, interval]);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return { isOpen, openModal, closeModal };
};
