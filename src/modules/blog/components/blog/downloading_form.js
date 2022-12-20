import { Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import {
  CustomInput,
  CustomModal,
  DefaultBtn,
} from "modules/common/components";
import DownloadBook from "assets/blog/download-image.png";
import ThankDownloadImg from "assets/blog/thanks-download-image.png";
import { useState } from "react";

const DownloadingForm = ({ showDownloading, setShowDownloading }) => {
  const [showThank, setShowThank] = useState(false);
  const onCloseHandler = () => {
    setShowDownloading(false);
    setShowThank(false);
  };
  return (
    <CustomModal isOpen={showDownloading} onClose={onCloseHandler} isCentered>
      <Grid
        templateColumns={!showThank ? "1fr 1.5fr " : "1fr 1.2fr"}
        columnGap={showThank ? "40px" : "120px"}
        p={"60px 80px"}
        alignItems={"center"}
      >
        {!showThank && (
          <>
            <Image src={DownloadBook.src} w={"100%"} alt={"Woman and book"} />
            <Flex flexDir={"column"} maxW={"500px"} gap={"40px"}>
              <Heading as={"h3"} ps={"20px"}>
                Enter your email for free download & get a bonus
              </Heading>
              <Flex flexDir={"column"} gap={"10px"}>
                <CustomInput
                  label={"Name"}
                  input={{
                    type: "text",
                    id: "name",
                    placeholder: "John Smith",
                  }}
                />
                <CustomInput
                  label={"Email"}
                  input={{
                    type: "email",
                    id: "email",
                    placeholder: "Email",
                  }}
                />
              </Flex>
              <DefaultBtn
                label={"Download"}
                customStyles={{ h: "50px" }}
                handleClick={() => setShowThank(true)}
              />
            </Flex>
          </>
        )}

        {showThank && (
          <>
            <Image src={ThankDownloadImg.src} alt={"Girls and computer"} />
            <Flex flexDir={"column"} maxW={"500px"} gap={"40px"}>
              <Heading as={"h3"}>Thanks for downloading</Heading>
              <Text fontSize={"24px"} lineHeight={"32px"} fontWeight={"500"}>
                If you are interested in custom development, you can get a free
                consultation
              </Text>
              <DefaultBtn
                label={"Get Consultation"}
                customStyles={{ h: "50px" }}
                handleClick={() => {
                  setShowDownloading(false);
                  setShowThank(false);
                }}
              />
            </Flex>
          </>
        )}
      </Grid>
    </CustomModal>
  );
};

export default DownloadingForm;
