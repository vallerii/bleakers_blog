import { CustomModal } from "modules/common/components";
import { useState } from "react";
import QuestionsForm from "./questions_form";
import ThankModal from "./thank_modal";

const InTouch = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  return (
    <CustomModal isOpen={true} mt={"230px"} bg={"#D5DFFF"}>
      {!isSubmit && <QuestionsForm setIsSubmit={setIsSubmit} />}
      {isSubmit && <ThankModal />}
    </CustomModal>
  );
};

export default InTouch;
