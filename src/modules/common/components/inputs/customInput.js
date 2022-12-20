import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";

const CustomInput = (props) => {
  return (
    <Box w={props.w ? props.w : "100%"} mt={props.mt}>
      <FormLabel
        htmlFor={props.input.id}
        mb={"5px"}
        color={"##181717"}
        fontSize={"18px"}
        fontWeight={"400"}
        lineHeight={"24px"}
        ms={"18px"}
      >
        {props.label}
      </FormLabel>
      <FormControl
        display={"flex"}
        gap={"10px"}
        alignItems={"center"}
        fontStyle={"normal"}
        fontSize={"18px"}
        fontWeight={"400"}
        lineHeight={"24px"}
        color={"#0E0E10"}
        bg={"#fff"}
        border={props.hasError ? "1px solid red" : "1px solid #DCDCDC"}
        _hover={{ borderColor: "#575757" }}
        _active={{ borderColor: "#0E0E10" }}
        borderRadius={"100px"}
        px={"20px"}
        h={"50px"}
      >
        <Input
          fontSize={"18px"}
          fontWeight={"400"}
          lineHeight={"24px"}
          type={props.type}
          autoComplete={"off"}
          variant="unstyled"
          {...props.input}
          onChange={props.onChange}
          onBlur={props.onBlur}
          _placeholder={{ color: "#DCDCDC", fontSize: "inherit" }}
          _focus={{
            backgroundColor: "#FFFFFF",
          }}
        />
      </FormControl>
    </Box>
  );
};

export default CustomInput;
