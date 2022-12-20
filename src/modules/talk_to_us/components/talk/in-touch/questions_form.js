import { Flex, Text } from "@chakra-ui/react";
import UseInput from "hooks/useInput";
import {
  CustomInput,
  CustomTextarea,
  DefaultBtn,
} from "modules/common/components";
import { useDispatch } from "react-redux";
import { sendContacts } from "store/talk/talk.actions";
import { setUserEmail } from "store/talk/talk.slice";
import StepDescription from "../../ui/step_description";
import StepHeading from "../../ui/step_heading";
import Logo from "../logo";

const QuestionsForm = ({ setIsSubmit }) => {
  const dispatch = useDispatch();
  const isNotEmpty = (value) => value.trim() !== "";
  const isEmail = (value) => value.includes("@");
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameHasError,
    changeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
    resetInput: nameResetInput,
  } = UseInput(isNotEmpty);
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    resetInput: emailResetInput,
  } = UseInput(isNotEmpty && isEmail);
  const {
    value: enteredMessage,
    isValid: messageIsValid,
    hasError: messageHasError,
    changeHandler: messageChangeHandler,
    blurHandler: messageBlurHandler,
    resetInput: messageResetInput,
  } = UseInput(isNotEmpty);

  let formIsValid = false;
  if (nameIsValid && emailIsValid && messageIsValid) {
    formIsValid = true;
  }
  const resetInput = () => {
    nameResetInput();
    emailResetInput();
    messageResetInput();
  };

  const formIsNotValidHandler = () => {
    nameBlurHandler(true);
    emailBlurHandler(true);
    messageBlurHandler(true);
  };

  const submitHandler = () => {
    dispatch(
      sendContacts({
        name: enteredName,
        email: enteredEmail,
        message: enteredMessage,
      })
    );
    dispatch(setUserEmail(enteredEmail));
    setIsSubmit(true);
    resetInput();
  };

  return (
    <Flex flexDir={"column"} p={"40px 140px"} pos={"relative"}>
      <Logo />
      <StepHeading title={"Get in touch"} />
      <StepDescription
        title={
          "Have questions? Fill out the form below and we will contact you."
        }
      />
      <Flex flexDir={"column"} gap={"20px"}>
        <CustomInput
          label={"Name"}
          input={{
            type: "text",
            id: "name",
            placeholder: "John Smith",
            value: enteredName,
          }}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          hasError={nameHasError}
        />
        {nameHasError && (
          <Text color={"red"} ms={"18px"} mt={"-12px"} fontSize={"14px"}>
            Please enter your full name!
          </Text>
        )}
        <CustomInput
          label={"Email"}
          input={{
            type: "email",
            id: "email",
            placeholder: "Email",
            value: enteredEmail,
          }}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          hasError={emailHasError}
        />
        {emailHasError && (
          <Text color={"red"} ms={"18px"} mt={"-12px"} fontSize={"14px"}>
            Please enter valid email!
          </Text>
        )}

        <CustomTextarea
          label={"Message"}
          textarea={{
            type: "message",
            id: "text",
            placeholder: "Leave us message",
            value: enteredMessage,
          }}
          onChange={messageChangeHandler}
          onBlur={messageBlurHandler}
          hasError={messageHasError}
        />
        {messageHasError && (
          <Text color={"red"} ms={"18px"} mt={"-12px"} fontSize={"14px"}>
            Please enter your message!
          </Text>
        )}
        <Flex alignItems={"center"} justifyContent={"end"}>
          <DefaultBtn
            label={"Submit"}
            customStyles={{ w: "200px", h: "50px" }}
            handleClick={() => {
              if (formIsValid) {
                submitHandler();
              } else {
                nameBlurHandler(true);
                emailBlurHandler(true);
                messageBlurHandler(true);
              }
            }}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default QuestionsForm;
