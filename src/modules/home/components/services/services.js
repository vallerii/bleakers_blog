import {
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import ServicesItem from "./servicesItem";
import Dollar from "assets/home/dollar2.png";
import Bitcoin from "assets/home/bitcoin2.png";
import Euro from "assets/home/euro2.png";
import { servicesTypeData } from "modules/home/data/services_type_db";

const Services = () => {
  return (
    <Grid
      id="services"
      templateColumns={"1fr"}
      mt={"150px"}
      bg={"#0E0E10"}
      pb={"150px"}
      px={{ base: "20px", xl: "130px" }}
      pos={"relative"}
    >
      <Heading
        as={"h2"}
        color={"#fff"}
        fontSize={{ base: "40px", md: "80px" }}
        fontWeight={"700"}
        lineHeight={{ base: "58px", md: "120px" }}
        textAlign={"center"}
        textTransform={"uppercase"}
        mb={"20px"}
        mt={"100px"}
      >
        Services
      </Heading>
      <Text
        color={"#fff"}
        fontSize={"18px"}
        fontWeight={"500"}
        lineHeight={"24px"}
        textAlign={"center"}
        mb={"16px"}
      >
        We took the best offers on the market and made them better
      </Text>
      <Flex
        alignItems={"center"}
        mb={"20px"}
        w={"fit-content"}
        justifySelf={"end"}
        gap={"10px"}
      >
        <Image src={Dollar.src} alt={"Dollar"} />
        <Image src={Bitcoin.src} alt={"Bitcoin"} />
        <Image src={Euro.src} alt={"Euro"} />
      </Flex>
      <Grid
        templateColumns={{ base: "1 fr", xl: "repeat(3, 1fr)" }}
        columnGap={{ base: "10px", "2xl": "20px" }}
        rowGap={{ base: "40px", xl: "0" }}
      >
        {servicesTypeData.map((item) => (
          <ServicesItem key={item.id} item={item} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Services;
