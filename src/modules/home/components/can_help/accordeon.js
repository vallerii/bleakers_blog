import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Text,
} from "@chakra-ui/react";
import { canHelpData } from "modules/home/data/can_help_db";
import Close from "assets/home/svg/close.svg";
import Plus from "assets/home/svg/plus.svg";
import { DefaultBtn } from "modules/common/components";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { resetStep, setInTouch } from "store/talk/talk.slice";

const CanHelpAccordeon = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <Accordion defaultIndex={[0]}>
      {canHelpData.map((item) => (
        <AccordionItem key={item.id} border={"none"}>
          {({ isExpanded }) => (
            <>
              <AccordionButton
                border={"none"}
                py={"13px"}
                display={"flex"}
                justifyContent={"space-between"}
                h={"50px"}
              >
                <Text fontSize={"18px"} fontWeight={"500"} lineHeight={"24px"}>
                  {item.title}
                </Text>
                {isExpanded ? (
                  <Close fontSize="12px" />
                ) : (
                  <Plus fontSize="12px" />
                )}
              </AccordionButton>
              <AccordionPanel p={"10px 20px"}>
                <Text
                  fontSize={"18px"}
                  fontWeight={"400"}
                  lineHeight={"24px"}
                  mb={"10px"}
                >
                  {item.description}
                </Text>
                <DefaultBtn
                  label={"Join the party"}
                  customStyles={{ w: { base: "100%", lg: "260px" }, h: "50px" }}
                  handleClick={() => {
                    router.push("/talk_to_us");
                    dispatch(setInTouch(false));
                    dispatch(resetStep());
                  }}
                />
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CanHelpAccordeon;
