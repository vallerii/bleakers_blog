import { Button } from "@chakra-ui/react";

const DefaultBtn = ({ label, type, handleClick, customStyles }) => {
  return (
    <Button
      bg="#d9ff81"
      border="1px solid #dcdcdc"
      borderRadius="100px"
      fontStyle="normal"
      fontWeight="500"
      fontSize="18px"
      lineHeight="24px"
      color="#0E0E10"
      _hover={{}}
      _active={{}}
      {...customStyles}
      type={type || "button"}
      onClick={handleClick}
    >
      {label}
    </Button>
  );
};

export default DefaultBtn;
