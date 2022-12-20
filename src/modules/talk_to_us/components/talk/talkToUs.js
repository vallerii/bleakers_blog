import { useSelector } from "react-redux";
import {
  getCurrentStep,
  getInTouch,
  getUserIdeaData,
} from "store/talk/talk.selectors";
import About from "./about";
import BookACall from "./book_a_call/book_a_call";
import Budget from "./budget/budget";
import InTouch from "./in-touch/in_touch";
import ProjectType from "./project_type";
import YourIdea from "./your_idea";
import YourProjectDetail from "./your_project_detail";

const TalkToUs = () => {
  const currentStep = useSelector(getCurrentStep());
  const emailUs = useSelector(getInTouch());
  const ideaData = useSelector(getUserIdeaData());
  console.log(ideaData);

  return (
    <>
      {emailUs && <InTouch />}
      {!emailUs && (
        <>
          {currentStep === 1 && <YourIdea />}
          {currentStep === 2 && <ProjectType />}
          {currentStep === 3 && <YourProjectDetail />}
          {currentStep === 4 && <About />}
          {currentStep === 5 && <Budget />}
          {currentStep === 6 && <BookACall />}
        </>
      )}
    </>
  );
};

export default TalkToUs;
