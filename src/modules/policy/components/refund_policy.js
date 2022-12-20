import { Flex, Heading, Link, List, ListItem, Text } from "@chakra-ui/react";
import BoldContent from "./ui/bold_content";
import Content from "./ui/content";
import SmallHeading from "./ui/SmallHeading";

const RefundPolicy = () => {
  return (
    <Flex px={"130px"} mt={"90px"}>
      <Flex flexDir={"column"} pt={"10px"} w={"960px"}>
        <Heading
          as={"h2"}
          fontSize={"80px"}
          fontWeight={"700"}
          lineHeight={"120px"}
          mb={"80px"}
        >
          Refund policy
        </Heading>
        <SmallHeading title={"Introduction"} />
        <Content
          text={
            "All payments are secured by Stripe. The client may request a refund no longer than 7 days after the first transaction. "
          }
        />
        <Content
          text={
            "If the client requests a refund after the expiration of the 7 days period Bleakers may, at its sole discretion, choose to refund and reserves the right to not refund the commission set by Stripe (standard Stripe fee)."
          }
        />
        <BoldContent
          text={
            "Bleakers, LTD. may reject the refund request in the following cases:"
          }
          mb={"10px"}
        />
        <List fontSize={"18px"} fontWeight={"400"} lineHeight={"24px"}>
          <ListItem mb={"10px"} ms={"30px"}>
            When the client tries to hack the data or damages the company&apos;s
            services, team, assets, reputation.
          </ListItem>
          <ListItem mb={"10px"} ms={"30px"}>
            When the client receives the source files of the tasks Bleakers has
            done.
          </ListItem>
          <ListItem mb={"10px"} ms={"30px"}>
            When the client&apos;s account was used for the fraud actions
            (affiliate fee fraud, etc.).
          </ListItem>
        </List>
        <BoldContent text={"Procedure of refund"} />
        <Text
          fontSize={"18px"}
          fontWeight={"400"}
          lineHeight={"24px"}
          mt={"20px"}
        >
          The client should contact Bleakers LTD by{" "}
          <Link href=" mailto:support@bleakers.pro" color="#664EFD">
            support@bleakers.pro
          </Link>{" "}
          email about a refund.
        </Text>
        <BoldContent text={"Email message should:"} mb={"10px"} />
        <List fontSize={"18px"} fontWeight={"400"} lineHeight={"24px"}>
          <ListItem mb={"10px"} ms={"30px"}>
            be sent from the payment email;
          </ListItem>
          <ListItem mb={"10px"} ms={"30px"}>
            include the date of the transaction;
          </ListItem>
          <ListItem mb={"10px"} ms={"30px"}>
            Bleakers, LTD may take up to 7 days to review the refund request.
          </ListItem>
        </List>
      </Flex>
    </Flex>
  );
};

export default RefundPolicy;
