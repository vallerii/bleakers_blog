import { Box, FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import React from "react";

const CustomTextarea = (props) => {
  return (
    <Box w={props.w ? props.w : "100%"}>
      <FormLabel
        htmlFor={props.textarea.id}
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
        borderRadius={"20px"}
        ps={"20px"}
      >
        <Textarea
          autoComplete={"new-password"}
          variant="unstyled"
          {...props.textarea}
          onChange={props.onChange}
          onBlur={props.onBlur}
          _placeholder={{ color: "#D9D9D9" }}
          minH={"120px"}
          maxLength="350"
        />
      </FormControl>
    </Box>
  );
};

export default CustomTextarea;
