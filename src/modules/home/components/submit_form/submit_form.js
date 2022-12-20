import {
  Box,
  chakra,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import {
  CustomInput,
  CustomTextarea,
  DefaultBtn,
} from "modules/common/components";
import Estimation from "assets/home/questions-image.png";
import Letter from "assets/home/letter.png";
import { useState } from "react";
import BookingCall from "./booking_call";
import { useDispatch, useSelector } from "react-redux";
import { resetStep, setUserEmail } from "store/talk/talk.slice";
import UseInput from "hooks/useInput";
import { sendContacts } from "store/talk/talk.actions";
import { getUserEmail } from "store/talk/talk.selectors";

const Span = chakra("span", {});

const SubmitForm = () => {
  const dispatch = useDispatch();
  const [submit, setSubmit] = useState(false);
  const [openBookingCall, setOpenBookingCall] = useState(false);
  const userEmail = useSelector(getUserEmail());
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

  const submitHandler = () => {
    dispatch(
      sendContacts({
        name: enteredName,
        email: enteredEmail,
        message: enteredMessage,
      })
    );
    dispatch(setUserEmail(enteredEmail));
    setSubmit(true);
    setTimeout(() => {
      setSubmit(false);
    }, 5000);
    resetInput();
  };

  return (
    <>
      {openBookingCall && (
        <BookingCall
          openBookingCall={openBookingCall}
          setOpenBookingCall={setOpenBookingCall}
        />
      )}
      <Grid
        templateColumns={{ base: "1fr", "2xl": "1.5fr 1fr" }}
        rowGap={{ base: "20px", "2xl": "0" }}
        px={{ base: "20px", xl: "130px" }}
        mt={{ base: "120px", xl: "250px" }}
        mb={{ base: "40px", xl: "140px" }}
        columnGap={"20px"}
        id={"contact-us"}
      >
        {!submit && (
          <Flex
            flexDir={"column"}
            p={{ base: "20px", xl: "40px" }}
            borderRadius={"20px"}
            bg={"#fff"}
          >
            <Heading
              as={"h3"}
              fontSize={{ base: "40px", xl: "80px" }}
              fontWeight={"700"}
              lineHeight={{ base: "58px", xl: "120px" }}
            >
              Have questions?
            </Heading>
            <Text
              fontSize={"18px"}
              fontWeight={"500"}
              lineHeight={"24px"}
              color={"#575757"}
              mb={{ base: "20px", xl: "40px" }}
            >
              Leave your mail or{" "}
              <Span
                color={"#482DF8"}
                cursor={"pointer"}
                onClick={() => {
                  dispatch(resetStep());
                  setOpenBookingCall(true);
                }}
              >
                book a call
              </Span>{" "}
              and we will contact you
            </Text>
            <Grid
              templateColumns={{ base: "1fr", xl: "1fr 1fr" }}
              alignItems={"center"}
              gap={"20px"}
            >
              <Box w={"100%"} pos={"relative"}>
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
                  <Text
                    pos={"absolute"}
                    top={"67px"}
                    color={"red"}
                    ms={"18px"}
                    mt={"12px"}
                    fontSize={"14px"}
                  >
                    Please enter your full name!
                  </Text>
                )}
              </Box>
              <Box w={"100%"} pos={"relative"}>
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
                  <Text
                    pos={"absolute"}
                    top={"67px"}
                    color={"red"}
                    ms={"18px"}
                    mt={"12px"}
                    fontSize={"14px"}
                  >
                    Please enter valid email!
                  </Text>
                )}
              </Box>
            </Grid>
            <Box my={"20px"} pos={"relative"}>
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
                <Text
                  pos={"absolute"}
                  top={"138px"}
                  color={"red"}
                  ms={"18px"}
                  mt={"12px"}
                  fontSize={"14px"}
                >
                  Please enter your message!
                </Text>
              )}
            </Box>
            <Flex justifyContent={"end"}>
              <DefaultBtn
                label={"Submit"}
                customStyles={{
                  w: { base: "100%", lg: "200px" },
                  h: "50px",
                  color: "#fff",
                  bg: "#0E0E10",
                }}
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
        )}
        {submit && (
          <Flex
            flexDir={"column"}
            alignItems={"center"}
            p={"100px 160px 150px 160px"}
            bg={"#fff"}
            borderRadius={"20px"}
          >
            <Heading
              as={"h3"}
              fontSize={"32px"}
              fontWeight={"700"}
              lineHeight={"40px"}
              textAlign={"center"}
            >
              Thank you for writing
            </Heading>
            <Text
              fontSize={"18px"}
              fontWeight={"400"}
              lineHeight={"24px"}
              textAlign={"center"}
              mt={"20px"}
              mb={"90px"}
            >
              We will answer you by mail{" "}
              <Span color={"#482DF8"}>{userEmail}</Span> as soon as we can.
            </Text>
            <Image w={"100%"} src={Letter.src} alt="letter" />
          </Flex>
        )}
        <Flex
          flexDir={"column"}
          p={{ base: "20px", xl: "40px" }}
          borderRadius={"20px"}
          bg={"#D9FF81"}
          justifyContent={"space-between"}
        >
          <Image src={Estimation.src} h="auto" alt="hand and pensil" />
          <Text
            fontSize={"18px"}
            fontWeight={"500"}
            lineHeight={"24px"}
            mt={"20px"}
            mb={{ base: "20px", "2xl": "0" }}
          >
            Or you can take a survey and we will tell you the approximate cost
            and time for the implementation of your idea.
          </Text>
          <DefaultBtn
            label={"Get estimation"}
            customStyles={{
              w: { base: "100%", lg: "150px" },
              h: "50px",
              color: "#0E0E10",
              bg: "#fff",
              border: "1px solid #DCDCDC",
            }}
          />
        </Flex>
      </Grid>
    </>
  );
};

export default SubmitForm;
