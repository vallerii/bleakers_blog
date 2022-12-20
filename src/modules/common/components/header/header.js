import { Image, Flex, useMediaQuery, Text } from "@chakra-ui/react";
import HeaderLogo from "assets/home/header-logo.png";
import DefaultBtn from "modules/common/components/buttons/defaultBtn";
import HeaderLink from "./headerLink";
import Link from "next/link";
import { useRouter } from "next/router";
import HeaderBg from "assets/home/intro-background.png";
import { useDispatch } from "react-redux";
import { resetStep, setInTouch } from "store/talk/talk.slice";
import MobileMenu from "./mobile_menu";

const Header = () => {
  const [isSmallLaptop] = useMediaQuery("(max-width: 1096px)");
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <>
      {!isSmallLaptop && (
        <Flex
          zIndex={10}
          w="100%"
          pos="fixed"
          right="0"
          left="0"
          justifyContent="center"
          bg={"#F3F1FE"}
          bgImage={`url('${HeaderBg.src}')`}
        >
          <Flex
            w="100%"
            maxW="1920px"
            justifyContent={"space-between"}
            py="20px"
            px="130px"
            pos={"relative"}
          >
            <Link href="/">
              <Image src={HeaderLogo.src} w="50px" h="50px" alt="Logo" />
            </Link>

            <>
              <Flex
                alignItems={"center"}
                justifyContent={"center"}
                gap={{ base: "40px", "2xl": "80px" }}
                position={"absolute"}
                top={"50%"}
                left={{ base: "40%", "2xl": "50%" }}
                transform={"translate(-50%,-50%)"}
              >
                <HeaderLink href="/#services">Services</HeaderLink>
                <HeaderLink href="/#showcase">Showcase</HeaderLink>
                <HeaderLink onClick={() => router.push("/blog")}>
                  Blog
                </HeaderLink>
                <HeaderLink href="/#contact-us">Contact Us</HeaderLink>
                <HeaderLink href="/#about-us">About us</HeaderLink>
              </Flex>
              <DefaultBtn
                label="Join the party"
                handleClick={() => {
                  router.push("/talk_to_us");
                  dispatch(setInTouch(false));
                  dispatch(resetStep());
                }}
                customStyles={{ w: "260px", h: "50px" }}
              />
            </>
          </Flex>
        </Flex>
      )}

      {isSmallLaptop && <MobileMenu />}
    </>
  );
};

export default Header;
