import { useState } from "react";

import Modal from "./Modal";
import SeatSelection from "./User_Reservation/SeatSelection";

const Management = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleInviteUser = () => {
    setModalOpen(true);
  };

  return (
    <>
      <button className="invite-button" onClick={handleInviteUser}>
        하이
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <SeatSelection />
      </Modal>
    </>
  );
};

export default Management;
