import { Flex, Link, Text } from "@chakra-ui/react";

const FooterLink = ({ href, children, onClick }) => {
  return (
    <Flex onClick={onClick} justifyContent={{ base: "end" }}>
      <Link href={href}>
        <Text
          w={{ base: "120px", xl: "fit-content" }}
          fontWeight={"500"}
          fontSize={{ base: "18px" }}
          lineHeight={{ base: "24px" }}
          textAlign={"start"}
        >
          {children}
        </Text>
      </Link>
    </Flex>
  );
};

export default FooterLink;
