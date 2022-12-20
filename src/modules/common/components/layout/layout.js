import { Box, Flex } from "@chakra-ui/react";
import Footer from "../footer/footer";
import Header from "../header/header";

const Layout = ({ children }) => {
  return (
    <Flex flexDir={"column"} m={"0 auto"} maxWidth={"1920px"}>
      <Header />
      <Flex flexDir={"column"} mt={"90px"} minH={"calc(100vh - 90px - 275px)"}>
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Layout;
