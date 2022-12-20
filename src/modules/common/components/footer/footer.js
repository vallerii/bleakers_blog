import { Flex, Grid, Image, Text } from "@chakra-ui/react";
import FooterLogo from "assets/home/header-logo.png";
import Link from "next/link";
import { useRouter } from "next/router";
import FooterLink from "./footerLink";

const footerLink = [
  { id: 1, name: "Services", path: "/#services" },
  { id: 2, name: "Showcase", path: "/#showcase" },
  { id: 3, name: "About us", path: "/#about-us" },
  { id: 4, name: "Contact Us", path: "/#contact-us" },
  { id: 5, name: "Blog", path: "" },
];

const policyLink = [
  { id: 1, name: "Term of use", path: "/terms" },
  { id: 2, name: "Privacy policy", path: "/privacy_policy" },
  { id: 3, name: "Refund policy", path: "/refund_policy" },
];

const LinkItem = ({ item }) => {
  const router = useRouter();
  return (
    <Text
      color={"#575757"}
      fontSize={"18px"}
      fontWeight={"400"}
      lineHeight={"24px"}
      onClick={() => router.push(item.path)}
      cursor={"pointer"}
      w={{ base: "120px", xl: "fit-content" }}
    >
      {item.name}
    </Text>
  );
};

const Footer = () => {
  const router = useRouter();
  const currentYear = new Date().getFullYear();
  return (
    <Flex flexDir={"column"}>
      <Grid
        templateColumns={"1fr 7fr"}
        alignItems={{ base: "start", xl: "center" }}
        px={{ base: "20px", xl: "130px" }}
        marginTop={"auto"}
        py={"80px"}
      >
        <Flex
          alignItems={{ base: "start", xl: "center" }}
          gap={"12px"}
          cursor={"pointer"}
        >
          <Link href="/">
            <Image src={FooterLogo.src} w="50px" h="50px" alt="Logo" />
          </Link>
        </Flex>

        <Grid
          templateColumns={{ base: "1fr", xl: "repeat(5,1fr)" }}
          alignItems={"center"}
          rowGap={{ base: "20px", xl: "0" }}
        >
          <FooterLink href="/#services" alignSelf={"end"}>
            Services
          </FooterLink>
          <FooterLink href="/#showcase">Showcase</FooterLink>
          <FooterLink href="/#about-us">About us</FooterLink>
          <FooterLink href="/#contact-us">Contact Us</FooterLink>
          <FooterLink onClick={() => router.push("/blog")}>Blog</FooterLink>
        </Grid>
      </Grid>
      <Flex
        alignItems={{ base: "start", xl: "center" }}
        justifyContent={"space-between"}
        p={{ base: "20px 20px", xl: "20px 130px" }}
        borderTop={"1px solid #DCDCDC"}
      >
        <Text>&copy; Bleakers {currentYear}</Text>
        <Flex
          flexDir={{ base: "column", xl: "row" }}
          alignItems={{ base: "start", xl: "center" }}
          gap={{ base: "20px", xl: "130px" }}
        >
          {policyLink.map((item) => (
            <LinkItem key={item.id} item={item} />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
