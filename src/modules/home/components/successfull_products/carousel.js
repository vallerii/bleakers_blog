import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from "assets/home/slider1.png";
import PrevIcon from "assets/home/svg/shevron-left-icon.svg";
import NextIcon from "assets/home/svg/shevron-right-icon.svg";
import { useRef, useState } from "react";

const sliderData = [
  {
    id: 1,
    title: "MiraSEO",
    content:
      "Our own application that allows you to conduct a full SEO site audit in one click.It was created absolutely from scratch, from design to development.",
    imageUrl: Slider1.src,
  },
  {
    id: 2,
    title: "MiraSEO",
    content:
      "Our own application that allows you to conduct a full SEO site audit in one click.It was created absolutely from scratch, from design to development.",
    imageUrl: Slider1.src,
  },
  {
    id: 3,
    title: "MiraSEO",
    content:
      "Our own application that allows you to conduct a full SEO site audit in one click.It was created absolutely from scratch, from design to development.",
    imageUrl: Slider1.src,
  },
  {
    id: 4,
    title: "MiraSEO",
    content:
      "Our own application that allows you to conduct a full SEO site audit in one click.It was created absolutely from scratch, from design to development.",
    imageUrl: Slider1.src,
  },
  {
    id: 5,
    title: "MiraSEO",
    content:
      "Our own application that allows you to conduct a full SEO site audit in one click.It was created absolutely from scratch, from design to development.",
    imageUrl: Slider1.src,
  },
];

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const sliderRef = useRef();
  const settings = {
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidetoScroll: 1,
    beforeChange: (current, next) => setSlideIndex(next),
  };

  return (
    <Flex
      justifyContent={"center"}
      w={"100%"}
      h={"740px"}
      mb={"110px"}
      overflow={"hidden"}
    >
      <Box w={"3500px"} position={"relative"}>
        <Slider ref={sliderRef} {...settings}>
          {sliderData.map((item, index) => (
            <Flex
              flexDir={"column"}
              key={item.id}
              w={"100%"}
              opacity={slideIndex === index ? "1" : "0.5"}
              transform={slideIndex === index ? "scale(1)" : "scale(0.95)"}
              transition={"all 0.7s"}
              filter={slideIndex === index ? "blur(0)" : "blur(1.5px)"}
            >
              <Image src={item.imageUrl} alt={"Slider image"} />
              {slideIndex === index && (
                <Box ms={"20px"}>
                  <Text
                    color={"#fff"}
                    fontSize={"24px"}
                    fontWeight={"700"}
                    lineHeight={"32px"}
                    mb={"10px"}
                  >
                    {item.title}
                  </Text>
                  <Text
                    color={"#fff"}
                    fontSize={"18px"}
                    fontWeight={"400"}
                    lineHeight={"24px"}
                  >
                    {item.content}
                  </Text>
                </Box>
              )}
            </Flex>
          ))}
        </Slider>
        <Flex
          w={"80px"}
          h={"80px"}
          bg={"#482DF8"}
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={"full"}
          onClick={() => sliderRef.current?.slickPrev()}
          pos={"absolute"}
          top={"45%"}
          left={"calc(50% - 620px)"}
          transform={"translate(-50%,-50%)"}
          zIndex={"2"}
          cursor={"pointer"}
        >
          <Flex me={"5px"}>
            <PrevIcon />
          </Flex>
        </Flex>
        <Flex
          w={"80px"}
          h={"80px"}
          bg={"#482DF8"}
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={"full"}
          onClick={() => sliderRef.current?.slickNext()}
          pos={"absolute"}
          top={"45%"}
          right={"calc(50% - 700px)"}
          transform={"translate(-50%,-50%)"}
          zIndex={"2"}
          cursor={"pointer"}
        >
          <Flex ms={"5px"}>
            <NextIcon />
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Carousel;
