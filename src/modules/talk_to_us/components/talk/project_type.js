import { Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { projectTypes } from "modules/talk_to_us/data/project_types";
import StepDescription from "../ui/step_description";
import StepHeading from "../ui/step_heading";
import Logo from "./logo";
import { useEffect, useState } from "react";
import { CustomModal, NextPrevBtn } from "modules/common/components";
import { useDispatch, useSelector } from "react-redux";
import { setUserIdeaData } from "store/talk/talk.slice";
import { getUserIdeaData } from "store/talk/talk.selectors";

const ProjectType = () => {
  const dispatch = useDispatch();
  const ideaData = useSelector(getUserIdeaData());
  const [selected, setSelected] = useState(ideaData && ideaData?.projectType);

  const selectedTypeHandler = (item) => {
    setSelected(item);
    dispatch(setUserIdeaData({ projectType: item }));
  };

  useEffect(() => {
    setSelected(ideaData?.projectType);
  }, [ideaData?.projectType]);

  return (
    <CustomModal isOpen={true} mt={"115px"} bg={"#D5DFFF"}>
      <Flex flexDir={"column"} p={"40px 80px"} pos={"relative"}>
        <Logo />
        <StepHeading title={"How do you want your product developed?"} />
        <StepDescription title={"Choose one of the project types below"} />
        <Grid
          templateColumns={"repeat(2,1fr)"}
          columnGap={"20px"}
          rowGap={"10px"}
          maxW={"1100px"}
        >
          {projectTypes.map((item) => (
            <Flex
              key={item.id}
              border={" 1px solid #D5DFFF"}
              borderRadius={"10px"}
              gap={"30px"}
              py={"20px"}
              ps={"20px"}
              pe={"30px"}
              minH={"182px"}
              _hover={{ bg: "#F3F1FE" }}
              bg={selected?.id === item.id && "#F3F1FE"}
              cursor={"pointer"}
              onClick={() => selectedTypeHandler(item)}
            >
              <Image
                src={item.imageUrl}
                w={"100px"}
                h={"100px"}
                alt={"Project type image"}
              />
              <Flex flexDir={"column"} gap={"10px"}>
                <Text
                  fontSize={"24px"}
                  fontWeight={"500"}
                  lineHeight={"32px"}
                  color={selected?.id === item.id && "#664EFD"}
                >
                  {item.title}
                </Text>
                <Text
                  fontSize={"16px"}
                  fontWeight={"400"}
                  lineHeight={"22px"}
                  maxW={"280px"}
                >
                  {item.content}
                </Text>
              </Flex>
            </Flex>
          ))}
        </Grid>
        <NextPrevBtn />
      </Flex>
    </CustomModal>
  );
};

export default ProjectType;
