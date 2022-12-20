import {
  Box,
  Flex,
  Heading,
  Link,
  List,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import BoldContent from "./ui/bold_content";
import Content from "./ui/content";
import CustomHeading from "./ui/heading";
import CustomOrderedList from "./ui/ordered_list";
import SmallHeading from "./ui/SmallHeading";
import CustomUnorderedList from "./ui/unordered_list";
import VerySmallHeading from "./ui/VerySmallHeading";

const PrivacyPolicy = () => {
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
          Privacy Policy
        </Heading>
        <Text
          color={"#575757"}
          fontSize={"18px"}
          fontWeight={"400"}
          lineHeight={"24px"}
          mb={"20px"}
        >
          Last Updated: June 17, 2022
        </Text>
        <Content
          text={
            " We at Bleakers LTD (“Bleakers,” “Company”, “we,” “us,” “our”) know you care about how your personal information is used and shared, and wetake your privacy seriously. Please read the following to learn moreabout our Privacy Policy. By using or accessing Bleakers’s site or services (collectively “Services”) in any manner, you acknowledge that you accept the practices and policies outlined in this Privacy Policy, and you hereby acknowledge and agree that we will collect, use, and share your information in the ways described in this Privacy Policy."
          }
        />
        <CustomHeading title={"Table of contents"} />
        <OrderedList
          ps={"30px"}
          color={"#664EFD"}
          fontSize={"18px"}
          fontWeight={"400"}
          lineHeight={"24px"}
        >
          <ListItem cursor={"pointer"}>
            <a href="#policy_cover">What does this privacy policy cover?</a>
          </ListItem>
          <ListItem cursor={"pointer"}>
            <a href="#personal_data">Sources of personal data</a>
          </ListItem>
          <ListItem cursor={"pointer"}>
            <a href="#data_we_collect">
              Categories of personal data we collect
            </a>
          </ListItem>
          <ListItem cursor={"pointer"}>
            <a href="#use_your_data">How we use your personal data</a>
          </ListItem>
          <ListItem cursor={"pointer"}>
            <a href="#share_your_data">How we share your personal data</a>
          </ListItem>
          <ListItem cursor={"pointer"}>
            <a href="#change_policy">
              Will Bleakers ever change this privacy policy?
            </a>
          </ListItem>
          <ListItem cursor={"pointer"}>
            <a href="#questions">What if I have questions about this policy?</a>
          </ListItem>
        </OrderedList>
        <Box id={"policy_cover"}></Box>
        <CustomHeading title={"What does this privacy policy cover?"} />
        <Content
          text={
            "This Privacy Policy covers how we treat Personal Data that we gather when you access or use our Services. “Personal Data” means any information that identifies or relates to a particular individual and also includes information referred to as “personally identifiable information” or “personal information” under applicable data privacy laws, rules, or regulations. This Privacy Policy does not cover the practices of companies we don’t own or control or people we don’t manage."
          }
        />
        <Box id={"personal_data"}></Box>
        <CustomHeading title={"Sources of personal data"} />
        <Content
          text={"We collect Personal Data about you from:"}
          mb={"20px"}
        />
        <BoldContent text={"You"} />
        <CustomUnorderedList
          data={[
            "when you provide such information directly to us, and",
            "when Personal Data about you is collected in connection with your use of our Services",
          ]}
        />
        <BoldContent
          mt={"20px"}
          mb={"10px"}
          text={
            "Third parties, when they provide us with Personal Data about you or from whom we obtain Personal Data about you (“Third Parties”). These Third Parties include:"
          }
        />
        <CustomUnorderedList
          data={[
            "Service providers. For example, we may use analytics service providers to analyze how you interact and engage with the Services.",
            "Third party websites. For example, we may use your information that is generally available on social media or networking websites for our outreach purposes (always in accordance with applicable law).",
          ]}
        />
        <Box id={"data_we_collect"}></Box>
        <CustomHeading title={"Categories of personal data we collect"} />
        <Content
          text={
            "Where you are a prospective user of our Services but not yet a user, we may collect your contact information and use this for marketing purposes. We will only ever do this in accordance with applicable law. "
          }
          mb={"20px"}
        />
        <BoldContent
          text={
            "Where you are a user of our Services, we will process the Personal Data which you (or your users) provide to us through your use of the Services or which we collect arising from your use of our Services. This Personal Data will fall into one of the following three categories: "
          }
          mb={"20px"}
        />
        <CustomOrderedList
          listStyleType={"upper-roman"}
          data={[
            "Contact information and other customer account information that we will use for administering our relationship with you (or your users). This will include details such as your (or your users) name, business telephone number, business e-mail address, position, function, location and account information (e.g. name and log-in credentials) (together, “Contact Information”).",
            "Personal Data in the content you transmit through our services. This means Personal Data in information submitted by you or on your behalf or (if applicable) your clients or users while using our Services, including but not limited to Personal Data about your clients and your business (together, “Customer Content”). We are not in control of the Customer Content that you (or your users) choose to use or transmit when using our Services. You are responsible for ensuring that suitable safeguards and consents are in place prior to transmitting any Customer Content to us, or prior to permitting your users to transmit any Customer Content via our Services. You are also responsible for ensuring that your users only use our Services in accordance with the applicable terms of use (which include restrictions on the types of information which can be submitted to our Services and how our Services may be used).",
            "Personal Data arising from usage information relating to the use of our Services (such as action logs) and information or data derived from our monitoring or oversight of the Services such as statistical and performance information and data on how the Bleakers platform is utilized by users, including data which is collected automatically (together, “Account Data”). Note that we may aggregate and anonymise Account Data so that it is no longer Personal Data. Such aggregated and anonymised data is not subject to the terms of this Privacy Policy.",
          ]}
        />
        <Content
          text={
            "We will never actively collect special categories of Personal Data about you or your users. Special categories of Personal Data includes information which reveals an individual’s race or ethnic origin, political opinions or religious or philosophical beliefs, membership of a trade union, physical or mental health, the processing of genetic or biometric information for the purposes of uniquely identifying an individual, and information about sexual life or sexual orientation or criminal convictions and offences. Where you (or your users) choose to include such special categories of Personal Data in Customer Content you are responsible for ensuring that all applicable legal requirements and safeguards have been complied with.  "
          }
        />
        <Content
          text={
            "The following section provides additional information about how we collect your Personal Data."
          }
        />
        <BoldContent mt={"40px"} text={"Information collected automatically"} />
        <Content
          text={
            "The Services use cookies and similar technologies such as pixel tags, web beacons, clear GIFs, and JavaScript (collectively, “Cookies”) to enable our servers to recognize your web browser and tell us how and when you visit and use our Services, to analyze trends, learn about our user base and operate and improve our Services. Cookies are small pieces of data– usually text files – placed on your computer, tablet, phone, or similar device when you use that device to visit our Services. We may also supplement the information we collect from you with information received from third parties, including third parties that have placed their own Cookies on your device(s). Please note that because of our use of Cookies, the Services do not support “Do Not Track” requests sent from a browser at this time."
          }
        />
        <BoldContent
          mt={"40px"}
          mb={"20px"}
          text={"We use the following types of Cookies:"}
        />

        <UnorderedList fontSize={"18px"} fontWeight={"400"} lineHeight={"24px"}>
          <ListItem mb={"5px"} ms={"30px"}>
            <Text>
              Essential cookies. Essential cookies are required for providing
              you with features or services that you have requested. For
              example, certain Cookies enable you to log into secure areas of
              our Services. Disabling these Cookies may make certain features
              and services unavailable.
            </Text>
          </ListItem>
          <ListItem mb={"5px"} ms={"30px"}>
            <Text>
              Functional cookies. Functional cookies are used to record your
              choices and settings regarding our Services, maintain your
              preferences over time and recognize you when you return to our
              Services. These Cookies help us to personalize our content for
              you, greet you by name, and remember your preferences (for
              example, your choice of language or region).
            </Text>
          </ListItem>
          <ListItem mb={"5px"} ms={"30px"}>
            <Text>
              Performance/Analytical cookies. Performance/Analytical cookies
              allow us to understand how visitors use our Services such as by
              collecting information about the number of visitors to the
              Services, what pages visitors view on our Services and how long
              visitors are viewing pages on the Services. For example, Google,
              Inc. (“Google”) uses cookies in connection with its Google
              Analytics services. Google’s ability to use and share information
              collected by Google Analytics about your visits to the Services is
              subject to the Google Analytics Terms of Use and the Google
              Privacy Policy. You have the option to opt-out of Google’s use of
              cookies by visiting the Google advertising opt-out page at
              www.google.pro/privacy_ads.html or the Google Analytics Opt-out
              Browser Add-on at{" "}
              <Link
                href="https://tools.google.pro/dlpage/gaoptout/"
                color="#664EFD"
              >
                https://tools.google.pro/dlpage/gaoptout/.
              </Link>
            </Text>
          </ListItem>
        </UnorderedList>
        <Content
          text={
            "You can decide whether or not to accept Cookies through your internet browser’s settings. Most browsers have an option for turning off the Cookie feature, which will prevent your browser from accepting new Cookies, as well as (depending on the sophistication of your browser software) allow you to decide on acceptance of each new Cookie in a variety of ways. You can also delete all Cookies that are already on your computer. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some of the Services and functionalities may not work."
          }
        />
        <Content
          text={
            "To explore what Cookie settings are available to you, look in the “preferences” or “options” section of your browser’s menu. "
          }
        />
        <Text
          fontSize={"18px"}
          fontWeight={"400"}
          lineHeight={"24px"}
          mt={"20px"}
        >
          To find out more information about Cookies, including information
          about how to manage and delete Cookies, please visit{" "}
          <Link
            href=" https://ico.org.uk/for-the-public/online/cookies/"
            color="#664EFD"
          >
            https://ico.org.uk/for-the-public/online/cookies/
          </Link>{" "}
          or{" "}
          <Link href="http://www.allaboutcookies.org/" color="#664EFD">
            http://www.allaboutcookies.org/
          </Link>
          .
        </Text>

        <Box id={"use_your_data"}></Box>
        <CustomHeading title={"How we use your personal data"} />
        <BoldContent text={"We only use your Customer Content: "} />
        <Content
          text={"-To the extent necessary to provide our Service to you. "}
        />
        <Content
          text={
            "-To comply with our legal or contractual obligations, resolve disputes, and enforce our terms of use and any related documents. "
          }
        />
        <Content
          text={
            "-To protect against or deter fraudulent, illegal or harmful actions and maintain the safety, security and integrity of our Services."
          }
        />
        <Content
          text={
            "-If required by applicable law, to respond to law enforcement requests, court order, or governmental regulations."
          }
        />
        <Content
          text={
            "You may use your own Customer Content (including sharing it with third parties) at your discretion through our Services (subject to relevant agreements you have with us, such as our terms of use). Your own use of your own Customer Content is your responsibility.  "
          }
          mt={"40px"}
        />
        <BoldContent
          text={
            "We process Account Data and Contact Information to operate, improve, understand and personalize our Services. We use such Personal Data for the following purposes:"
          }
          mb={"10px"}
        />
        <CustomUnorderedList
          data={[
            "To meet or fulfill the reason you provided the information to us.",
            "To communicate with you about the Services, including Service announcements, updates or offers.",
            "To provide support and assistance for the Services.",
            "To create and manage your Account or other user profiles.",
            "To personalize website content and communications based on your preferences.",
            "To process orders or other transactions.",
            "To respond to user inquiries and fulfill user requests.",
            "To improve and develop the Services, including testing, research, analysis and product development.",
            "To protect against or deter fraudulent, illegal or harmful actions and maintain the safety, security and integrity of our Services.",
            "To comply with our legal or contractual obligations, resolve disputes, and enforce our terms of use.",
            "To respond to law enforcement requests and as required by applicable law, court order, or governmental regulations.",
            "To aggregate and anonymise it so that it is no longer Personal Data.",
            "For any other business purpose stated when collecting your Personal Data or as otherwise set forth in applicable data privacy laws, such as the California Consumer Privacy Act (the “CCPA”).",
          ]}
        />
        <Content
          text={
            "We will not collect additional categories of Personal Data or use the Personal Data we collected for materially different, unrelated, or incompatible purposes without providing you notice."
          }
        />
        <Text
          fontSize={"18px"}
          fontWeight={"400"}
          lineHeight={"24px"}
          mt={"20px"}
        >
          As noted in the list above, we may communicate with you if you’ve
          provided us the means to do so. For example, if you’ve given us your
          email address, we may send you promotional email offers or email you
          about your use of the Services. Also, we may receive a confirmation
          when you open an email from us, which helps us improve our Services.
          If you do not want to receive communications from us, please indicate
          your preference by emailing us at{" "}
          <Link href="mailto:support@bleakers.pro" color="#664EFD">
            support@bleakers.pro
          </Link>
          .
        </Text>
        <Box id={"share_your_data"}></Box>
        <CustomHeading title={"How we share your personal data"} />
        <BoldContent
          text={
            "We will only disclose Customer Content to service providers and other parties for the following business purposes:"
          }
          mb={"10px"}
        />
        <CustomUnorderedList
          data={[
            "Where you ask us to, or you choose to through the use of our Services.",
            "To third party service providers if necessary to provide or protect our Services or to enforce our terms of use.",
            "If we are required to in order to respond to law enforcement requests, court order, or governmental regulations (in all cases, in accordance with applicable law).",
            "If necessary where we undergo a merger, acquisition, bankruptcy or other transaction in which that third party assumes control of our business (in whole or in part).",
          ]}
        />
        <BoldContent
          text={
            "We may disclose your Account Data and Contact Information to service providers and other parties for the following business purposes:"
          }
          mb={"10px"}
        />
        <CustomUnorderedList
          data={[
            "Auditing related to a current interaction and concurrent transactions, including, but not limited to, auditing compliance with this specification and other standards.",
            "Detecting security incidents, protecting against malicious, deceptive, fraudulent, or illegal activity, and prosecuting those responsible for that activity.",
            "Debugging to identify and repair errors that impair existing intended functionality.",
            "Short-term, transient use of Personal Data that is not used by another party to build a consumer profile or otherwise alter your consumer experience outside the current interaction.",
            "Performing services on our behalf, including processing payments, providing analytic services, providing marketing services, or providing similar services on behalf of the business or service provider.",
            "Undertaking internal research for technological development and demonstration.",
            "Undertaking activities to verify or maintain the quality or safety of a service or device that we own, manufacture, was manufactured for us, or control.",
          ]}
        />
        <BoldContent
          text={
            "We disclose your Personal Data to the following categories of service providers and other parties:"
          }
        />
        <OrderedList fontSize={"18px"} fontWeight={"400"} lineHeight={"24px"}>
          <ListItem mb={"5px"} ms={"30px"}>
            <Content text={"Service Providers, including:"} />
            <Content text={"-Payment processors."} />
            <Content text={"-Security and fraud prevention consultants."} />
            <Content
              text={
                "-Hosting and other technology and communications providers."
              }
            />
            <Content text={"-Analytics providers."} />
            <Content text={"-Staff augmentation and contract personnel."} />
          </ListItem>
          <ListItem mb={"5px"} ms={"30px"}>
            <Content
              text={
                "Parties who acquire your Personal Data through an acquisition or other change of control."
              }
            />
            <Content
              text={
                "-Personal Data may be transferred to a third party if we undergo a merger, acquisition, bankruptcy or other transaction in which that third party assumes control of our business (in whole or in part)."
              }
            />
          </ListItem>
          <ListItem mb={"5px"} ms={"30px"}>
            <Content text={"Other parties at your direction."} />
            <Content
              text={
                "-Third-party business partners who you access through the Services."
              }
            />
            <Content text={"-Other parties authorized by you."} />
          </ListItem>
        </OrderedList>
        <SmallHeading title={"Data security and retention"} />
        <Content
          text={
            "We seek to protect your Personal Data from unauthorized access, use and disclosure using appropriate physical, technical, organizational and administrative security measures based on the type of Personal Data and how we are processing that data. These measures are set out in the security terms and/or security practices data sheet which are applicable to the Services provided to you as published on Bleakers’s website from time to time. "
          }
        />
        <Content
          text={
            "It is important to note that you have responsibilities in relation to the protection of your Personal Data also. These will be included in your (or your company’s) agreement with Bleakers. At a minimum these will include that you should  help protect your data by appropriately selecting and protecting your password and/or other sign-on mechanism; limiting access to your computer or device and browser; and signing off after you have finished accessing your account."
          }
        />
        <Content
          text={
            "We retain Personal Data about you for as long as you have an open account with us or as otherwise necessary to provide you with our Services. In some cases we retain Personal Data for longer, if doing so is necessary to comply with our legal obligations, resolve disputes or collect fees owed, or is otherwise permitted or required by applicable law, rule or regulation. We may further retain information in an anonymous or aggregated form where that information would not identify you personally and therefore ceases to be Personal Data."
          }
        />
        <SmallHeading title={"Personal data of children"} />
        <Text
          fontSize={"18px"}
          fontWeight={"400"}
          lineHeight={"24px"}
          mt={"20px"}
        >
          We do not knowingly collect or solicit Personal Data from children
          under 16; if you are a child under 16, please do not attempt to
          register for or otherwise use the Services or send us any Personal
          Data. If we learn we have collected Personal Data from a child under
          16, we will delete that information as quickly as possible. If you
          believe that a child under 16 may have provided us Personal Data,
          please contact us at{" "}
          <Link href="mailto:security@Bleakers.pro" color="#664EFD">
            security@Bleakers.pro.
          </Link>
          .
        </Text>
        <SmallHeading title={"California resident rights"} />
        <Content
          text={
            "If you are a California resident, you have the rights outlined in this section. Please see the “Exercising your rights” section below for instructions on exercising these rights."
          }
        />
        <Text
          fontSize={"18px"}
          fontWeight={"400"}
          lineHeight={"24px"}
          mt={"20px"}
        >
          If there are any conflicts between this section and any other
          provision of this Privacy Policy and you are a California resident,
          the portion that is more protective of Personal Data shall control to
          the extent of such conflict. If you have any questions about this
          section or whether any of the following applies to you, please contact
          us at{" "}
          <Link href="mailto:support@bleakers.pro" color="#664EFD">
            support@bleakers.pro
          </Link>
          .
        </Text>
        <VerySmallHeading text={"Sales of personal data"} />
        <BoldContent
          text={
            "You have the right to request certain information about the Personal Data we may have collected from you and how we used that Personal Data over the past 12 months. We will provide you with the following information:"
          }
          mb={"10px"}
        />
        <CustomUnorderedList
          data={[
            "The categories of Personal Data that we collected about you.",
            "The categories of sources from which we collected that Personal Data.",
            "The business or commercial purpose for collecting or selling your Personal Data.",
            "The categories of third parties with whom we have shared your Personal Data.",
            "The specific pieces of Personal Data that we have collected about you.",
          ]}
        />
        <Content
          text={
            "If we have disclosed your Personal Data for a business purpose over the past 12 months, we will identify the categories of Personal Data shared with each category of third-party recipient."
          }
        />
        <VerySmallHeading text={"Deletion"} />
        <Content
          text={
            "You have the right to request that we delete the Personal Data that we collected from you. Under the CCPA, this right is subject to certain exceptions: for example, we may need to retain your Personal Data to provide you with the Services or complete a transaction or other action you have requested. If your deletion request is subject to one of these exceptions, we may deny your deletion request."
          }
        />
        <VerySmallHeading text={"Exercising your rights"} />
        <Content
          text={
            "To exercise the rights described above, you must send us a request that (1) provides sufficient information to allow us to verify that you are the person about whom we collected Personal Data, and (2) describes your request in sufficient detail to allow us to understand, evaluate, and respond to it. "
          }
        />
        <Content
          text={
            "Each request that meets both of these criteria will be considered a “Valid Request.” We may not respond to requests that do not meet these criteria. We will only use Personal Data provided in a Valid Request to verify you and complete your request. You do not need an account to submit a Valid Request."
          }
        />
        <Content
          text={
            "If your request addresses Personal Data contained in unencrypted Customer Content submitted to our Services by another user, then we may redirect your Valid Request to that user. Notwithstanding the foregoing, we are incapable of responding to requests addressing Personal Data contained in encrypted Customer Content as such encryption is implemented and controlled by the applicable user."
          }
        />
        <Content
          text={
            "We will work to respond to your Valid Request within 45 days of receipt. We will not charge you a fee for making a Valid Request unless your Valid Request(s) is excessive, repetitive, or manifestly unfounded. If we determine that your Valid Request warrants a fee, we will notify you of the fee and explain that decision before completing your request. You may submit a Valid Request using the following methods:"
          }
        />
        <Text
          fontSize={"18px"}
          fontWeight={"400"}
          lineHeight={"24px"}
          mt={"20px"}
        >
          Call us at:{" "}
          <Link href="tel:16282684589" color="#664EFD">
            +1 (628) 268-4589
          </Link>
        </Text>
        <Text
          fontSize={"18px"}
          fontWeight={"400"}
          lineHeight={"24px"}
          mt={"20px"}
        >
          Emailing us at:{" "}
          <Link href="mailto:support@bleakers.pro" color="#664EFD">
            support@bleakers.pro
          </Link>
        </Text>
        <Content
          text={
            "We will not discriminate against you for exercising your rights under the CCPA"
          }
        />
        <Content
          text={
            "We will not discriminate against you for exercising your rights under the CCPA. We will not deny you our goods or services, charge you different prices or rates, or provide you a lower quality of goods and services if you exercise your rights under the CCPA. However, we may offer different tiers of our Services as allowed by applicable data privacy laws (including the CCPA) with varying prices, rates, or levels of quality of the goods or services you receive related to the value of Personal Data that we receive from you."
          }
        />
        <SmallHeading title={"Other state law privacy rights"} />
        <VerySmallHeading text={"California resident rights"} />
        <Content
          text={
            "Under California Civil Code Sections 1798.83-1798.84, California residents are entitled to contact us to prevent disclosure of Personal Data to third parties for such third parties’ direct marketing purposes; in order to submit such a request, please contact us at support@bleakers.pro."
          }
        />
        <VerySmallHeading text={"Nevada resident rights"} />
        <Content
          text={
            "If you are a resident of Nevada, you have the right to opt-out of the sale of certain Personal Data to third parties who intend to license or sell that Personal Data. You can exercise this right by contacting us at info@Bleakers.pro with the subject line “Nevada Do Not Sell Request” and providing us with your name. Please note that we do not currently sell your Personal Data as sales are defined in Nevada Revised Statutes Chapter 603A."
          }
        />
        <SmallHeading title={"European data subject rights"} />
        <VerySmallHeading text={"European Residents"} />
        <Content
          text={
            "If you are a resident of the European Union (“EU”), United Kingdom, Lichtenstein, Norway, or Iceland, you may have additional rights under the EU General Data Protection Regulation (the “GDPR”), or similar legislation in the non-EU jurisdictions mentioned, with respect to your Personal Data, as outlined below."
          }
        />
        <Content
          text={
            "For this section, we use the terms “Personal Data” and “processing” as they are defined in the GDPR, but “Personal Data” generally means information that can be used to individually identify a person, and “processing” generally covers actions that can be performed in connection with data such as collection, use, storage and disclosure. "
          }
        />
        <Content
          text={
            "Bleakers will be the controller of your Personal Data processed in connection with the Services provided that  that we may also process Personal Data of our customers’ end users or employees in connection with our provision of certain services to customers, in which case we are the processor of Personal Data. If we are the processor of your Personal Data (i.e., not the controller), please contact the controller party in the first instance to address your rights with respect to such data."
          }
        />
        <Content
          text={
            "If there are any conflicts between this section and any other provision of this Privacy Policy, the policy or portion that is more protective of Personal Data shall control to the extent of such conflict. If you have any questions about this section or whether any of the following applies to you, please contact us at info@Bleakers.pro. "
          }
        />
        <VerySmallHeading text={"Personal data we collect"} />
        <Content
          text={
            "The “Categories of personal data we collect” section above details the Personal Data that we collect from you."
          }
        />
        <VerySmallHeading text={"Personal data use and processing grounds"} />
        <Content
          text={
            "The “How we use your personal data” section above explains how we use your Personal Data."
          }
        />
        <Content
          text={
            "We will only process your Personal Data if we have a lawful basis for doing so. Lawful bases for processing include consent, contractual necessity and our “legitimate interests” or the legitimate interest of others, as further described below."
          }
          mb={"20px"}
        />
        <OrderedList fontSize={"18px"} fontWeight={"400"} lineHeight={"24px"}>
          <ListItem mb={"5px"} ms={"30px"}>
            <Content
              text={
                "Contractual necessity.We process Customer Content and Contact Information as a matter of “contractual necessity”, meaning that we need to process the data to perform and deliver the Services that you (or your company) has contractually requested that we provide.  The processing of Customer Content and Contact Information is necessary in order to provide you with the Services. When we process data due to contractual necessity, failure to provide such Personal Data will result in your inability to use some or all portions of the Services that require such data."
              }
            />
          </ListItem>
          <ListItem mb={"5px"} ms={"30px"}>
            <Content
              text={
                "Legitimate interest.We process Account Data and certain elements of Contact Information when we believe it furthers the legitimate interest of us or third parties."
              }
            />
            <BoldContent
              text={"Examples of these legitimate interests include:"}
              mb={"10px"}
            />
            <CustomUnorderedList
              data={[
                "Operation and improvement of our business, products and Services",
                "Marketing of our products and Services (where all such marketing is done in accordance with applicable law)",
                "Provision of customer support",
                "Protection from fraud or security threats",
                "Compliance with legal obligations",
                "Completion of corporate transactions",
              ]}
            />
          </ListItem>
          <ListItem mb={"5px"} ms={"30px"}>
            <Content
              text={
                "Consent.Where required by applicable law we may get your consent to provide marketing material to you. Where this applies we will process the relevant Personal Data based on such consent that you expressly grant to us at the time we collect such data. When we process Personal Data based on your consent, it will be expressly indicated to you at the point and time of collection."
              }
            />
          </ListItem>
          <ListItem mb={"5px"} ms={"30px"}>
            <Content
              text={
                "Other processing grounds.From time to time we may also need to process some elements of the Contact Information, the Customer Content and/or the Account Data to comply with a legal obligation, if it is necessary to protect the vital interests of you or other data subjects, or if it is necessary for a task carried out in the public interest. When this the case will depend on the specific circumstances at the time. "
              }
            />
          </ListItem>
        </OrderedList>
        <VerySmallHeading text={"Data retention"} />
        <Content
          text={
            "We only retain your Personal Data for as long as necessary for the purpose for which we collect it. "
          }
        />
        <VerySmallHeading text={"Cookies"} />
        <Content
          text={
            "Where applicable law in the EU, United Kingdom, Lichtenstein, Norway, or Iceland requires, you can decide not to accept certain cookies, or manage which cookies are used, via the functionality that we make available to you when you use our Services."
          }
        />
        <VerySmallHeading text={"Sharing personal data"} />
        <Content
          text={
            "The “How we share your personal data” section above details how we share your Personal Data with third parties."
          }
        />
        <VerySmallHeading text={"EU data subject rights"} />
        <Content
          text={
            "You have certain rights with respect to your Personal Data, including those set forth below. For more information about these rights, or to submit a request, please email us at info@bleakers.pro. Please note that in some circumstances, we may not be able to fully comply with your request, such as if it is frivolous or extremely impractical, if it jeopardizes the rights of others, or if it is not required by law, but in those circumstances, we will still respond to notify you of such a decision. In some cases, we may also need to you to provide us with additional information, which may include Personal Data, if necessary to verify your identity and the nature of your request."
          }
        />
        <OrderedList fontSize={"18px"} fontWeight={"400"} lineHeight={"24px"}>
          <ListItem mb={"5px"} ms={"30px"}>
            <Content
              text={
                "Access. You can request more information about the Personal Data we hold about you and request a copy of such Personal Data."
              }
            />
          </ListItem>
          <ListItem mb={"5px"} ms={"30px"}>
            <Content
              text={
                "Rectification. If you believe that any Personal Data we are holding about you is incorrect or incomplete, you can request that we correct or supplement such data."
              }
            />
          </ListItem>
          <ListItem mb={"5px"} ms={"30px"}>
            <Content
              text={
                "Erasure. You can request that we erase some or all of your Personal Data from our systems."
              }
            />
          </ListItem>
          <ListItem mb={"5px"} ms={"30px"}>
            <Content
              text={
                "Withdrawal of consent. If we are processing your Personal Data based on your consent (as indicated at the time of collection of such data), you have the right to withdraw your consent at any time. Please note, however, that if you exercise this right, you may have to then provide express consent on a case-by-case basis for the use or disclosure of certain of your Personal Data, if such use or disclosure is necessary to enable you to utilize some or all of our Services."
              }
            />
          </ListItem>
          <ListItem mb={"5px"} ms={"30px"}>
            <Content
              text={
                "Portability. You can ask for a copy of your Personal Data in a machine-readable format. You can also request that we transmit the data to another controller where technically feasible."
              }
            />
          </ListItem>
          <ListItem mb={"5px"} ms={"30px"}>
            <Content
              text={
                "Objection. You can contact us to let us know that you object to the further use or disclosure of your Personal Data for certain purposes, such as for direct marketing purposes."
              }
            />
          </ListItem>
          <ListItem mb={"5px"} ms={"30px"}>
            <Content
              text={
                "Restriction of processing. You can ask us to restrict further processing of your Personal Data."
              }
            />
          </ListItem>

          <ListItem mb={"5px"} ms={"30px"}>
            <Text
              fontSize={"18px"}
              fontWeight={"400"}
              lineHeight={"24px"}
              mt={"20px"}
            >
              Right to file complaint. You have the right to lodge a complaint
              about Bleakers’s practices with respect to your Personal Data with
              the supervisory authority of your country or EU Member State. A
              list of Supervisory Authorities is available here:{" "}
              <Link
                href=" https://edpb.europa.eu/about-edpb/board/members_en"
                color="#664EFD"
              >
                https://edpb.europa.eu/about-edpb/board/members_en
              </Link>
              .
            </Text>
          </ListItem>
        </OrderedList>
        <VerySmallHeading text={"Transfers of personal data"} />
        <OrderedList fontSize={"18px"} fontWeight={"400"} lineHeight={"24px"}>
          <ListItem mb={"5px"} ms={"30px"}>
            <Content
              text={
                "The Services are hosted and operated in either the United States (“U.S.”), the European Union (“EU”) or Australia through Bleakers and its service providers. Which one of these jurisdictions your Services are hosted and operated from will depend on where the customer party for the purposes of the relevant Services is based. "
              }
            />
          </ListItem>
          <ListItem mb={"5px"} ms={"30px"}>
            <Content
              text={
                "If you are an EU or UK based customer (or the end user of such a customer) then we may, in limited circumstances, transfer your personal to the US (for example, for the purposes of support). Where we transfer your information to outside the EU, we do so in accordance with EU data protection law. These transfers are necessary for the management of Bleakers’s operations. Bleakers relies on Standard Contractual Clauses which have been approved by the European Commission. In certain limited circumstances, we may use derogations, such as the contractual necessity derogation, where appropriate to process personal information, when there are no other data transfer mechanisms applicable."
              }
            />
          </ListItem>
          <ListItem mb={"5px"} ms={"30px"}>
            <Text
              fontSize={"18px"}
              fontWeight={"400"}
              lineHeight={"24px"}
              mt={"20px"}
            >
              You can request a copy of our Standard Contractual Clauses by
              emailing{" "}
              <Link href=" mailto:support@bleakers.pro" color="#664EFD">
                support@bleakers.pro
              </Link>
              .
            </Text>
          </ListItem>
        </OrderedList>
        <VerySmallHeading text={"Mobile terms of service (Shortcodes)"} />
        <OrderedList fontSize={"18px"} fontWeight={"400"} lineHeight={"24px"}>
          <ListItem mb={"5px"} ms={"30px"}>
            <Content
              text={
                "When you opt-in to the service, we will send you an SMS message to confirm your signup."
              }
            />
          </ListItem>
          <ListItem mb={"5px"} ms={"30px"}>
            <Content
              text={
                "You can cancel the SMS service at any time. Just text “STOP” to the short code. After you send the SMS message “STOP” to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us. If you want to join again, just sign up as you did the first time and we will start sending SMS messages to you again."
              }
            />
          </ListItem>
          <ListItem mb={"5px"} ms={"30px"}>
            <Content
              text={
                "If at any time you forget what keywords are supported, just text “HELP” to the short code. After you send the SMS message “HELP” to us, we will respond with instructions on how to use our service as well as how to unsubscribe."
              }
            />
          </ListItem>
          <ListItem mb={"5px"} ms={"30px"}>
            <Content
              text={
                "We are able to deliver messages to the following mobile phone carriers: Major carriers: AT&T, Verizon Wireless, Sprint, T-Mobile, MetroPCS, U.S. Cellular, Alltel, Boost Mobile, Nextel, and Virgin Mobile. Minor carriers: Alaska Communications Systems (ACS), Appalachian Wireless (EKN), Bluegrass Cellular, Cellular One of East Central IL (ECIT), Cellular One of Northeast Pennsylvania, Cincinnati Bell Wireless, Cricket, Coral Wireless (Mobi PCS), COX, Cross, Element Mobile (Flat Wireless), Epic Touch (Elkhart Telephone), GCI, Golden State, Hawkeye (Chat Mobility), Hawkeye (NW Missouri), Illinois Valley Cellular, Inland Cellular, iWireless (Iowa Wireless), Keystone Wireless (Immix Wireless/PC Man), Mosaic (Consolidated or CTC Telecom), Nex-Tech Wireless, NTelos, Panhandle Communications, Pioneer, Plateau (Texas RSA 3 Ltd), Revol, RINA, Simmetry (TMP Corporation), Thumb Cellular, Union Wireless, United Wireless, Viaero Wireless, and West Central (WCC or 5 Star Wireless). ***Carriers are not liable for delayed or undelivered messages***"
              }
            />
          </ListItem>
          <ListItem mb={"5px"} ms={"30px"}>
            <Text
              fontSize={"18px"}
              fontWeight={"400"}
              lineHeight={"24px"}
              mt={"20px"}
            >
              5. As always, message and data rates may apply for any messages
              sent to you from us and to us from you. The frequency with which
              you receive messages will vary depending on how you interact with
              our demo. If you have any questions about your text plan or data
              plan, it is best to contact your wireless provider. For all
              questions about the services provided by this short code, you can
              send an email to{" "}
              <Link href=" mailto:support@Bleakers.pro" color="#664EFD">
                support@Bleakers.pro
              </Link>
              .
            </Text>
          </ListItem>
          <ListItem mb={"5px"} ms={"30px"}>
            <Text
              fontSize={"18px"}
              fontWeight={"400"}
              lineHeight={"24px"}
              mt={"20px"}
            >
              6. If you have any questions regarding privacy, please read the
              rest of our privacy policy, or send a message to{" "}
              <Link href=" mailto:info@Bleakers.pro" color="#664EFD">
                info@Bleakers.pro
              </Link>
              .
            </Text>
          </ListItem>
        </OrderedList>
        <Box id={"change_policy"}></Box>
        <CustomHeading
          title={"Will Bleakers ever change this privacy policy?"}
        />
        <Content
          text={
            "We’re constantly trying to improve our Services, so we may need to change this Privacy Policy from time to time as well, but we will alert you to changes by placing a notice on our website, by sending you an email, and/or by some other means. Please note that if you’ve opted not to receive legal notice emails from us (or you haven’t provided us with your email address), those legal notices will still govern your use of the Services, and you are still responsible for reading and understanding them. If you use the Services after any changes to the Privacy Policy have been posted, that means you agree to all of the changes. Use of information we collect is subject to the Privacy Policy in effect at the time such information is collected."
          }
        />
        <Box id={"questions"}></Box>
        <CustomHeading title={"What if I have questions about this policy?"} />
        <BoldContent
          text={
            "If you have any questions or concerns regarding this Privacy Policy, the ways in which we collect and use your Personal Data, or your choices and rights regarding such use, please do not hesitate to contact us at:"
          }
          mb={"40px"}
        />
        <List fontSize={"18px"} fontWeight={"400"} lineHeight={"24px"}>
          <ListItem mb={"20px"} ms={"30px"}>
            <Link href=" tel:16282684589" color="#664EFD">
              +1 (628) 268-4589
            </Link>
          </ListItem>
          <ListItem mb={"20px"} ms={"30px"}>
            <Link href="www.Bleakers.pro" color="#664EFD">
              info@Bleakers.pro
            </Link>
          </ListItem>
          <ListItem mb={"20px"} ms={"30px"}>
            <Link href=" mailto:support@bleakers.pro" color="#664EFD">
              support@bleakers.pro
            </Link>
          </ListItem>
        </List>
        <Content text={"20-22 Wenlock Road, London, N1 7GU, UK"} mt={"40px"} />
      </Flex>
    </Flex>
  );
};

export default PrivacyPolicy;
