import React from "react";
import ModalOne from "./modal-by-id/ModalOne";
import ModalTwo from "./modal-by-id/ModalTwo";
import ModalThree from "./modal-by-id/ModalThree";
import ModalFour from "./modal-by-id/ModalFour";
import ModalFive from "./modal-by-id/ModalFive";
import ModalSix from "./modal-by-id/ModalSix";
import ModalSeven from "./modal-by-id/ModalSeven";
import ModalEight from "./modal-by-id/ModalEight";
import ModalNine from "./modal-by-id/ModalNine";
import ModalTen from "./modal-by-id/ModalTen";

const ModalMain = ({ modalId, setGetModal }) => {
  const modalComponents = [
    ModalOne,
    ModalTwo,
    ModalThree,
    ModalFour,
    ModalFive,
    ModalSix,
    ModalSeven,
    ModalEight,
    ModalNine,
    ModalTen,
  ];

  const ModalComponent = modalComponents[modalId - 1];

  return <ModalComponent modalId={modalId} setGetModal={setGetModal} />;
};

export default ModalMain;
