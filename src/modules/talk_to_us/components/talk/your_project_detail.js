import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  SelectField,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import CustomTextarea from "modules/common/components/inputs/customTextarea";
import CustomModal from "modules/common/components/modal/custom_modal";
import Logo from "./logo";
import LinkIcon from "assets/talk-to-us/svg/link-icon.svg";
import { useEffect, useState } from "react";
import StepHeading from "../ui/step_heading";
import StepDescription from "../ui/step_description";
import InfoIcon from "assets/talk-to-us/svg/info-icon.svg";
import { NextPrevBtn } from "modules/common/components";
import UseInput from "hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { setUserIdeaData } from "store/talk/talk.slice";
import { getUserIdeaData } from "store/talk/talk.selectors";

const YourProjectDetail = ({}) => {
  const dispatch = useDispatch();
  const ideaData = useSelector(getUserIdeaData());
  const [detail, setDetail] = useState(ideaData?.projectDetail);
  const [file, setFile] = useState(null);
  const isNotEmpty = (value) => value.trim() !== "";
  const {
    value: enteredDetail,
    hasError: detailHasError,
    isValid: detailIsValid,
    changeHandler: detailChangeHandler,
    blurHandler: detailBlurHandler,
  } = UseInput(isNotEmpty);

  const editDetailChangeHandler = (event) => {
    let value = event.currentTarget.value;
    setDetail(value);
  };

  const addDetailHandler = () => {
    dispatch(
      setUserIdeaData({
        projectDetail: detail,
        documentationFile: file ? file : ideaData?.documentationFile,
      })
    );
  };

  useEffect(() => {
    setDetail(ideaData?.projectDetail);
  }, [ideaData?.projectDetail]);

  return (
    <CustomModal isOpen={true} mt={"115px"} bg={"#D5DFFF"}>
      <Flex flexDir={"column"} p={"40px 80px"} pos={"relative"}>
        <Logo />
        <StepHeading title={"Share your project details"} />
        <Flex alignItems={"center"} mt={"10px"} mb={"40px"} gap={"10px"}>
          <StepDescription
            title={"Fill in the fields and attach the file"}
            mt={"0"}
            mb={"0"}
          />

          <Tooltip
            hasArrow
            p={"10px"}
            borderRadius={"10px"}
            bg={"rgba(14, 14, 16, 0.7)"}
            label="No worries about your product ideas, this consultation is protected by simple NDA clause in our T&C"
            placement="right"
            color={"#fff"}
            fontSize={"16px"}
            fontWeight={"400"}
            lineHeight={"22px"}
          >
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              cursor={"help"}
            >
              <InfoIcon />
            </Flex>
          </Tooltip>
        </Flex>
        <Box w={"100%"}>
          <CustomTextarea
            w={"940px"}
            label={"How would you describe your product?"}
            textarea={{
              type: "text",
              id: "projectDetail",
              placeholder: "Describe what you would like to create",
              value: enteredDetail ? enteredDetail || "" : detail || "",
            }}
            onChange={editDetailChangeHandler}
            onBlur={detailBlurHandler}
            hasError={detailHasError && !detail}
          />
          {detailHasError && !detail && (
            <Text color={"red"} ms={"18px"} mt={"8px"} fontSize={"16px"}>
              Please enter your project details!
            </Text>
          )}
        </Box>
        <Flex alignItems={"center"} gap={"40px"} mt={"20px"}>
          <Flex
            borderRadius={"20px"}
            bg={"#D9FF81"}
            py={"13px"}
            justifyContent={"center"}
            minW={"300px"}
            alignItems={"center"}
            pos={"relative"}
          >
            <Flex alignItems={"center"} gap={"10px"}>
              <Text fontSize={"18px"} fontWeight={"500"} lineHeight={"24px"}>
                Add documentation
              </Text>
              <Flex alignItems={"center"} justifyContent={"center"}>
                <LinkIcon />
              </Flex>
            </Flex>
            <Input
              cursor={"pointer"}
              opacity={"0"}
              type="file"
              pos={"absolute"}
              onChange={(e) => {
                e.preventDefault();
                setFile(e.target.files[0]);
              }}
            />
          </Flex>
          <Text
            color={"#575757"}
            fontSize={"18px"}
            fontWeight={"400"}
            lineHeight={"24px"}
          >
            {file?.name ? file?.name : ideaData?.documentationFile?.name}
          </Text>
        </Flex>
        <NextPrevBtn
          isValid={detail ? !!detail : detailIsValid}
          onClick={addDetailHandler}
        />
      </Flex>
    </CustomModal>
  );
};

export default YourProjectDetail;
