import { Box, Flex, Text } from "@chakra-ui/react";
import { sizeCompany, typeCompany } from "modules/talk_to_us/data/company_data";
import { industryData } from "modules/talk_to_us/data/industry_db";
import { useEffect, useState } from "react";
import StepDescription from "../ui/step_description";
import StepHeading from "../ui/step_heading";
import StepSelect from "../ui/step_select";
import Logo from "./logo";
import {
  CustomInput,
  CustomModal,
  NextPrevBtn,
} from "modules/common/components";
import UseInput from "hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { setUserIdeaData } from "store/talk/talk.slice";
import { getUserIdeaData } from "store/talk/talk.selectors";

const About = () => {
  const dispatch = useDispatch();
  const ideaData = useSelector(getUserIdeaData());
  const industry = industryData.map((item) => item.title);
  const [selectedCompanySize, setSelectedCompanySize] = useState(
    ideaData?.companySize ? ideaData?.companySize : "1-10"
  );
  const [selectedCompanyType, setSelectedCompanyType] = useState(
    ideaData?.companyType ? ideaData?.companyType : "Startup"
  );
  const [selectedIndustry, setSelectedIndustry] = useState(
    ideaData?.industry ? ideaData?.industry : "Supply Chain"
  );
  const [about, setAbout] = useState();

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
    isValid: emailIsValid,
    hasError: emailHasError,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
  } = UseInput(isNotEmpty && isEmail);

  let aboutIsValid = false;
  if (
    about?.email !== "" &&
    about?.email !== undefined &&
    about?.email?.includes("@") &&
    about?.name !== "" &&
    about?.name !== undefined
  ) {
    aboutIsValid = true;
  }
  const validEmail = about?.email?.includes("@") && about?.email !== "";

  const editChangeHandler = (event) => {
    let id = event.currentTarget.id;
    let value = event.currentTarget.value;
    setAbout((prev) => ({ ...prev, [id]: value }));
  };

  const aboutHandler = () => {
    nameBlurHandler(true);
    emailBlurHandler(true);
    dispatch(
      setUserIdeaData({
        name: about?.name,
        email: about?.email,
        companySize: selectedCompanySize,
        companyType: selectedCompanyType,
        industry: selectedIndustry,
      })
    );
  };

  useEffect(() => {
    setAbout({ name: ideaData?.name, email: ideaData?.email });
  }, [ideaData?.name, ideaData?.email]);

  return (
    <CustomModal isOpen={true} mt={"115px"} bg={"#D5DFFF"}>
      <Flex flexDir={"column"} p={"40px 80px 40px 70px"} pos={"relative"}>
        <Logo />
        <StepHeading title={"Tell about yourself"} />
        <StepDescription title={"Fill in the fields "} />
        <Flex flexDir={"column"} minW={"950px"} gap={"20px"}>
          <Box w={"100%"} pos={"relative"}>
            <CustomInput
              label={"Full name"}
              input={{
                type: "text",
                id: "name",
                placeholder: "John Smith",
                value: enteredName ? enteredName || "" : about?.name || "",
              }}
              onChange={editChangeHandler}
              onBlur={nameBlurHandler}
              hasError={nameHasError && !about?.name}
            />
            {nameHasError && !about?.name && (
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
              label={"Business email"}
              input={{
                type: "email",
                id: "email",
                placeholder: "example@mail.com",
                value: enteredEmail ? enteredEmail || "" : about?.email || "",
              }}
              onChange={editChangeHandler}
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

          <StepSelect
            label={"Size of your company"}
            data={sizeCompany}
            selected={selectedCompanySize}
            onClick={(item) => setSelectedCompanySize(item)}
          />
          <StepSelect
            label={"Type of your company"}
            data={typeCompany}
            selected={selectedCompanyType}
            onClick={(item) => setSelectedCompanyType(item)}
          />
          <StepSelect
            label={"Industry"}
            data={industry}
            selected={selectedIndustry}
            onClick={(item) => setSelectedIndustry(item)}
          />
        </Flex>
        <NextPrevBtn isValid={aboutIsValid} onClick={aboutHandler} />
      </Flex>
    </CustomModal>
  );
};

export default About;
