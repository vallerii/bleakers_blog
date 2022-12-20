import { Flex, Link } from "@chakra-ui/react";

const linkStyles = {
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: { base: "18px", sm: "24px", lg: "18px", "2xl": "18px" },
  lineHeight: { base: "24px", sm: "20px", lg: "24px", "2xl": "24px" },
};

const HeaderLink = ({ href, children, onClick }) => {
  return (
    <Flex onClick={onClick}>
      <Link href={href} {...linkStyles}>
        {children}
      </Link>
    </Flex>
  );
};

export default HeaderLink;
