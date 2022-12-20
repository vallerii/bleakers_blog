import { CustomModal } from "modules/common/components";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentStep } from "store/talk/talk.selectors";
import { resetStep } from "store/talk/talk.slice";
import GetConsultation from "./get_сonsultation";
import Step1 from "./step_1";
import Step2 from "./step_2";

const BookingCall = ({ openBookingCall, setOpenBookingCall }) => {
  const dispatch = useDispatch();
  const currentStep = useSelector(getCurrentStep());

  return (
    <CustomModal
      isOpen={openBookingCall}
      isCentered
      onClose={() => {
        setOpenBookingCall(false);
        dispatch(resetStep());
      }}
    >
      {currentStep === 1 && <GetConsultation />}
      {currentStep === 2 && <Step1 />}
      {currentStep === 3 && <Step2 />}
    </CustomModal>
  );
};

export default BookingCall;
