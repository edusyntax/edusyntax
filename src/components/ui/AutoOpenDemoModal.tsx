'use client';

import DemoBookingModal from "@/components/ui/DemoBookingModal";
import { useAutoOpenModal } from "@/hooks/useAutoOpenModal";
import { useState } from "react";

const AutoOpenDemoModal = () => {
  // Opens first after 1 second, then repeats every 30 seconds
  const { isOpen, closeModal } = useAutoOpenModal(3000, true, 60000);

  const [trackName] = useState("Fullstack");
  const [mode] = useState<"Demo" | "Brochure">("Demo");
  const [brochureUrl] = useState("/brochures/fullstack.pdf");

  return (
    <DemoBookingModal
      isOpen={isOpen}
      onClose={closeModal}
      trackName={trackName}
      mode={mode}
      brochureUrl={brochureUrl}
       autoOpen={true}
    />
  );
};

export default AutoOpenDemoModal;
