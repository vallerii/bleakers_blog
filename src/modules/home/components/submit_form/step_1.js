import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import UseInput from "hooks/useInput";
import { CustomInput, NextPrevBtn } from "modules/common/components";
import StepDescription from "modules/talk_to_us/components/ui/step_description";
import StepHeading from "modules/talk_to_us/components/ui/step_heading";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserContacts } from "store/talk/talk.selectors";
import { setUserContacts } from "store/talk/talk.slice";

const Step1 = () => {
  const dispatch = useDispatch();
  const userContacts = useSelector(getUserContacts());
  const [contacts, setContacts] = useState();

  const isNotEmpty = (value) => value.trim() !== "";
  const isEmail = (value) => value.includes("@");
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameHasError,
    changeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
  } = UseInput(isNotEmpty);
  const {
    value: enteredEmail,
    hasError: emailHasError,
    blurHandler: emailBlurHandler,
  } = UseInput(isNotEmpty && isEmail);

  let contactsIsValid = false;
  if (
    contacts?.email !== "" &&
    contacts?.email !== undefined &&
    contacts?.email?.includes("@") &&
    contacts?.name !== "" &&
    contacts?.name !== undefined
  ) {
    contactsIsValid = true;
  }
  const validEmail = contacts?.email?.includes("@") && contacts?.email !== "";

  const changeHandler = (event) => {
    let id = event.currentTarget.id;
    let value = event.currentTarget.value;
    setContacts((prev) => ({ ...prev, [id]: value }));
  };

  const contactsHandler = () => {
    nameBlurHandler(true);
    emailBlurHandler(true);
    dispatch(
      setUserContacts({
        name: contacts?.name,
        email: contacts?.email,
      })
    );
  };

  useEffect(() => {
    setContacts({ name: userContacts?.name, email: userContacts?.email });
  }, [userContacts?.name, userContacts?.email]);

  return (
    <Flex flexDir={"column"} p={"40px 60px 40px 80px"}>
      <StepHeading title={"You can book a free consultation right now."} />
      <StepDescription
        title={
          "We'll discuss your project, explore options, and determine if we're the right fit."
        }
      />
      <Grid
        templateColumns={{ base: "1fr", xl: "1fr 1fr" }}
        alignItems={"center"}
        gap={"20px"}
      >
        <Box pos={"relative"}>
          <CustomInput
            label={"Full name"}
            w={{ base: "100%", xl: "450px" }}
            input={{
              type: "text",
              id: "name",
              placeholder: "John Smith",
              value: contacts?.name || "",
            }}
            onChange={changeHandler}
            onBlur={nameBlurHandler}
            hasError={nameHasError && !contacts?.name}
          />
          {nameHasError && !contacts?.name && (
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

        <Box pos={"relative"}>
          <CustomInput
            label={"Business email"}
            input={{
              type: "email",
              id: "email",
              placeholder: "example@mail.com",
              value: enteredEmail ? enteredEmail || "" : contacts?.email || "",
            }}
            onChange={changeHandler}
            onBlur={emailBlurHandler}
            hasError={emailHasError && !validEmail}
          />
          {emailHasError && !validEmail && (
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
      <NextPrevBtn isValid={contactsIsValid} onClick={contactsHandler} />
    </Flex>
  );
};

export default Step1;
