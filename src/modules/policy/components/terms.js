import {
  Flex,
  Heading,
  Link,
  List,
  ListItem,
  OrderedList,
  Text,
} from "@chakra-ui/react";
import BoldContent from "./ui/bold_content";
import Content from "./ui/content";
import CustomUnorderedList from "./ui/unordered_list";
import VerySmallHeading from "./ui/VerySmallHeading";

const Terms = () => {
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
          Terms and conditions
        </Heading>
        <OrderedList fontSize={"18px"} fontWeight={"400"} lineHeight={"24px"}>
          <ListItem mb={"40px"} ms={"30px"}>
            <VerySmallHeading text={"Acceptance of Terms"} />
            <Content
              text={
                "1.1 These Terms of Service (this “Agreement”) between BLEAKERS, LTD (“we”, “us”, “Company” or “Bleakers”) and you govern your access and use of our platform made available through bleakers.pro (this “Site”) and services we provide through this Site (the “Services”). By using this Site and accessing our Services in any manner, you acknowledge that you have read, understood, and agree to be bound by this Agreement."
              }
            />
            <Content
              text={
                "This Site is controlled and operated by us from our offices within the United States. We make no representation that materials on the Site are appropriate, they are available for use in other locations, or access to them from territories where its contents are illegal is prohibited is provided. Those who choose to access this Site from locations outside the United States are responsible for compliance with all applicable laws."
              }
            />
            <Content
              text={
                "We may update this Agreement from time to time. By continuing to use this Site and the Services after the update, you accept the update in its entirety. All updates are effective upon posting. We encourage you to check the “Terms of Service” link on the home page each time you visit this Site, so you are aware of any updates."
              }
            />
          </ListItem>
          <ListItem mb={"40px"} ms={"30px"}>
            <VerySmallHeading text={"Privacy Policy"} />
            <Content
              text={
                "2.1 Our privacy policy, which can be found at https://bleakers.pro/privacy-policy (the “Privacy Policy”), describes how we may use your personal information. By continuing to use this Site, you accept the Privacy Policy, which is incorporated herein by reference. If you object to your personal information being used as described in the Privacy Policy, please leave this Site immediately. You must be at least eighteen (18) years old to access this Site."
              }
            />
          </ListItem>
          <ListItem mb={"40px"} ms={"30px"}>
            <VerySmallHeading text={"Communications"} />
            <Text
              fontSize={"18px"}
              fontWeight={"400"}
              lineHeight={"24px"}
              mt={"20px"}
            >
              3.1 By creating an Account on Bleakers, you agree to subscribe to
              newsletters, marketing or promotional materials and other
              information we may send. However, you may opt out of receiving
              any, or all, of these communications from us by following the
              unsubscribe link or by emailing at{" "}
              <Link href=" mailto:support@bleakers.pro" color="#664EFD">
                support@bleakers.pro
              </Link>
              .
            </Text>
          </ListItem>
          <ListItem mb={"40px"} ms={"30px"}>
            <VerySmallHeading text={"The Services"} />
            <Content
              text={
                "4.1 Subject to your compliance with this Agreement, as well as your payment for an applicable service and our timely receipt of your associated payment(s) will make the applicable Services available to you during the term to which you have paid. We will use commercially reasonable efforts to make the Services available subject to planned downtime and any unscheduled emergency maintenance."
              }
            />
            <Content
              text={
                "4.2. You may only access and use the Services in accordance with the terms of the Agreement. You agree to (i) provide accurate, current, and complete information about you as may be prompted by any form on this Site (“Registration Data”); (ii) maintain and promptly update the Registration Data to keep it accurate, current and complete; (iii) maintain the security of any password and identification information; (iv) notify us immediately of any unauthorized use of your account; (v) accept sole responsibility for any and all activities that occur on your account. Each person who uses any Services must have a separate username and password. You must provide a valid email address for each person that you authorize to use your account. You agree to provide any other information that we reasonably request."
              }
            />
            <Content
              text={
                "4.3. You are responsible for obtaining and maintaining all telecommunications, broadband and computer equipment and services needed to access and use the Services and for paying all charges related thereto."
              }
            />
            <Content
              text={
                "4.4. We may terminate your account without prior notice or liability to you, if we find, in our sole and exclusive discretion, that you: (i) have violated this Agreement; (ii) are not in alignment with our model; (iii) are sharing usernames or passwords; (iv) violate our core values; or (v) are abusing our services or team members in any way, including using our services for illegal purpose."
              }
            />
            <Content
              text={
                "4.5. In case a user violates our company’s policies or guidelines, we reserve the right to block the user’s account without any prior notification and are under no financial obligations to the user as a company. In case the violations continue, we reserve the right to take appropriate legal recourse."
              }
            />
            <Content
              text={
                "4.6. “Licensed Content” means content that we own or license, including artwork, stock photographs, audio, typeface, video, designs, and writings. While you are, and will be, the sole and exclusive owner of all right, title, and interest in and to your results, the Licensed Content incorporated in your results is subject to the license described in Sections 4 and 5 below. No rights are granted to you other than as expressly set forth herein. You grant us a perpetual, irrevocable, worldwide, nonexclusive, transferable, sublicensable right and license to commercially exploit in any manner any feedback, suggestions or recommendations that you provide to us."
              }
            />
            <Content
              text={
                "4.7. Subject to your continued compliance with this Agreement, including timely payment of associated amounts due, we grant you a limited, revocable, non-exclusive, non-sublicensable, non-transferable license to access and use the Services for your internal business purposes. You may not access or use the Services in order to monitor its availability, performance, or functionality for competitive purposes. You may not, and may not permit any third party to: (a) reverse engineer (except to the extent specifically permitted by law), decompile, disassemble or otherwise attempt to discover source code, object code or underlying structures, ideas or algorithms of the Services, (b) modify, translate or create derivative works based on the Services, (c) use the Services for any purpose other than your own internal business purposes; or (d) use the Services other than in accordance with the Agreement and in compliance with all applicable laws and regulations (including but not limited to any applicable privacy and intellectual property laws)."
              }
            />
          </ListItem>
          <ListItem mb={"40px"} ms={"30px"}>
            <VerySmallHeading text={" Purchases"} />
            <Content
              text={
                "5.1 If you wish to purchase any product or service made available through Service (“Purchase”), you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, your billing address, and your shipping information."
              }
            />
            <Content
              text={
                "You represent and warrant that: (i) you have the legal right to use any credit card(s) or other payment method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct and complete."
              }
            />
            <Content
              text={
                "We may employ the use of third-party services for the purpose of facilitating payment and the completion of Purchases. By submitting your information, you grant us the right to provide the information to these third parties subject to our Privacy Policy."
              }
            />
            <Content
              text={
                "We reserve the right to refuse or cancel your order at any time for reasons including but not limited to: product or service availability, errors in the description or price of the product or service, error in your order or other reasons."
              }
            />
            <Content
              text={
                "We reserve the right to refuse or cancel your order if fraud or an unauthorized or illegal transaction is suspected."
              }
            />
          </ListItem>
          <ListItem mb={"40px"} ms={"30px"}>
            <VerySmallHeading text={"Contests, Challenges and Promotions"} />
            <Content
              text={
                "6.1 Any contests, challenge or other promotions (collectively, “Promotions”) made available through Service may be governed by rules that are separate from these Terms of Service. If you participate in any Promotions, please review the applicable rules as well as our Privacy Policy. If the rules for a Promotion conflict with these Terms of Service, Promotion rules will apply."
              }
            />
          </ListItem>
          <ListItem mb={"40px"} ms={"30px"}>
            <VerySmallHeading text={"Subscriptions"} />
            <Content
              text={
                "7.1 Some parts of Service are billed on a subscription basis (“Subscription(s)”). You will be billed in advance on a recurring and periodic basis (“Billing Cycle”). Billing cycles are set either on a monthly or annual basis, depending on the type of subscription plan you select when purchasing a Subscription."
              }
            />
            <Content
              text={
                "At the end of each Billing Cycle, your Subscription will automatically renew under the exact same conditions unless you cancel it or the Company cancels it. You may cancel your Subscription renewal either through your online account management page (Billing – Plans – Cancel the chosen plan) or by contacting our customer support team. If you cancel your Subscription, it will be active within your Billing Cycle, after the end of which it will be automatically deactivated."
              }
            />
            <Content
              text={
                "A valid payment method, including credit card, is required to process the payment for your subscription. You shall provide Bleakers with accurate and complete billing information including full name, address, state, zip code, telephone number, and a valid payment method information. By submitting such payment information, you automatically authorize Bleakers to charge all Subscription fees incurred through your account to any such payment instruments."
              }
            />
            <Content
              text={
                "Should automatic billing fail to occur for any reason, Bleakers will issue an electronic invoice indicating that you must proceed manually, within a certain deadline date, with the full payment corresponding to the billing period as indicated on the invoice."
              }
            />
          </ListItem>
          <ListItem mb={"40px"} ms={"30px"}>
            <VerySmallHeading text={"Use of the Services"} />
            <Content
              text={
                "8.1. You are the owner and/or controller of all of your information, data or materials that you provide to us to use the Services (“Customer Content”). By submitting Customer Content to us, you are representing that you are the owner of such Customer Content and/or have the necessary rights, licenses, and authorization to distribute it. You grant us a worldwide, royalty free, non-exclusive license to access and use Customer Content to provide the Services to you."
              }
            />
            <Content
              text={
                "8.2. You are, and will be, the sole and exclusive owner of all right, title, and interest in and to the deliverables, including all intellectual property rights therein. Notwithstanding the foregoing, the terms of this Section 8.2 are subject to your compliance with this Agreement, your full payment of applicable amounts due and the terms of Sections 8.3 and 9 below."
              }
            />
            <Content
              text={
                "8.3. In the course of providing the Services, we may use certain pre-existing materials. We and our licensors are, and will remain, the sole and exclusive owners of all right, title, and interest in and to any pre-existing materials. We grant you a perpetual, limited, royalty-free, non-transferable, non-sublicensable, worldwide license to use, display, and distribute any pre-existing materials to the extent incorporated in, combined with, or otherwise necessary for the use of the Services or deliverables. Notwithstanding the foregoing, the terms of this Section 6.3 are subject to your compliance with this Agreement, your full payment of applicable amounts due and the terms of Sections 7 below. We expressly reserve all other rights in and to such pre-existing materials."
              }
            />
            <Content
              text={
                "8.4. Bleakers does not support and will not tolerate its Service being used to discriminate against others, especially when based on race, religion, sex, sexual orientation, age, disability, ancestry, or national origin. You are not permitted to use the Service in a manner which would or would likely incite, promote or support such discrimination and you must not use the Service to incite or promote hostility or violence. If we believe in our sole determination that your use of the Service is being used to discriminate, we may permanently or temporarily terminate or suspend your access to the Service, without notice and liability."
              }
            />
          </ListItem>
          <ListItem mb={"40px"} ms={"30px"}>
            <VerySmallHeading text={"Use of Stock Services"} />
            <Content
              text={
                "9.1. Subject to compliance with this Agreement and full payment of applicable amounts due, we grant you a revocable, non-exclusive, non-transferrable, royalty-free, worldwide right and license to the Licensed Content for your personal or professional use, including but not limited to use in your own project."
              }
            />
            <Content
              text={
                "9.2. To the extent that we license the Licensed Content from any third party, you agree to comply with the relevant third-party license. Except with our written permission, you may not: (i) sell, resell, rent, lease, sublicense, assign, grant a security interest in, or otherwise transfer any part of your rights to use Licensed Content apart from a deliverable prepared by us or as part of a product for your own personal use; (ii) change, alter, adapt, translate, convert, modify, or make any derivative works of any Licensed Content; (iii) falsely represent that you are the original creator of any Licensed Content; (iv) use Licensed Content in a pornographic, defamatory, or other unlawful manner; (vi) use Licensed Content in any way that allows others to download, extract, or redistribute Licensed Content as a standalone file or work.(vii) use Licensed Content that features models or property in connection with a subject that would be unflattering or unduly controversial to a reasonable person (for example, sexually transmitted diseases), must indicate: (1) that the content is being used for illustrative purposes only, and (2) any person depicted in the content is a model."
              }
            />
          </ListItem>
          <ListItem mb={"40px"} ms={"30px"}>
            <VerySmallHeading text={"Prohibited Uses"} />
            <BoldContent
              text={
                "10.1 You may use Service only for lawful purposes and in accordance with Terms. You agree not to use Service:"
              }
              mb={"10px"}
            />
            <CustomUnorderedList
              data={[
                "In any way that violates any applicable national or international law or regulation.",
                "For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.",
                "To transmit, or procure the sending of, any advertising or promotional material, including any “junk mail”, “chain letter,” “spam,” or any other similar solicitation.",
                "To impersonate or attempt to impersonate Company, a Company employee, another user, or any other person or entity.",
                "In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity.",
                "To engage in any other conduct that restricts or inhibits anyone’s use or enjoyment of Service, or which, as determined by us, may harm or offend Company or users of Service or expose them to liability.",
              ]}
            />
            <BoldContent text={"Additionally, you agree not to:"} mb={"10px"} />
            <CustomUnorderedList
              data={[
                "Use Service in any manner that could disable, overburden, damage, or impair Service or interfere with any other party’s use of Service, including their ability to engage in real time activities through Service.",
                "Use any robot, spider, or other automatic device, process, or means to access Service for any purpose, including monitoring or copying any of the material on Service.",
                "Use any manual process to monitor or copy any of the material on Service or for any other unauthorized purpose without our prior written consent.",
                "Use any device, software, or routine that interferes with the proper working of Service.",
                "Introduce any viruses, trojan horses, worms, logic bombs, or other material which is malicious or technologically harmful.",
                "Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of Service, the server on which Service is stored, or any server, computer, or database connected to Service.",
                "Attack Service via a denial-of-service attack or a distributed denial-of-service attack.",
                "Take any action that may damage or falsify Company rating.",
                "Otherwise attempt to interfere with the proper working of Service.",
              ]}
            />
          </ListItem>
          <ListItem mb={"40px"} ms={"30px"}>
            <VerySmallHeading text={"Third Party Suppliers"} />
            <BoldContent
              text={
                "11.1. Bleakers products may include data and/or software from third parties. In addition to the rights and restrictions set forth in the agreement(s) that you have entered into with member(s) of the Company, your use of Bleakers services is subject to the following terms:"
              }
              mb={"10px"}
            />
            <List>
              <ListItem mb={"10px"} ms={"30px"}>
                - The client shall pay the associated third party costs directly
                to such third party suppliers and Client shall be solely
                responsible for the consequences of any failure to comply with
                the applicable third party supplier’s booking terms (including,
                without limitation, any applicable cancellation terms and
                associated fees).
              </ListItem>
              <ListItem mb={"10px"} ms={"30px"}>
                - Third-party providers are third-party beneficiaries of Company
                rights and remedies under the agreement(s) between you and
                Company. You agree to comply with all applicable third-party
                provider terms. Those terms may be supplied to you within the
                service or directly by the third-party provider. We are from
                time to time required to provide our client contact details to
                our third-party providers to the extent that they need such
                details in order to enable them to execute their contractual
                responsibilities.
              </ListItem>
            </List>
            <Content
              text={
                "11.2. You must obtain all prior approval for control and redistribution of third-party provider data, software, or services. You are responsible for any and all costs and fees associated with agreements entered into with any such third-party provider. If a third-party provider ceases to make its service available to Company or requires Company to suspend or terminate the provision of all or any part of its services to you, or if Company terminates its arrangements with the third-party provider, then Refinitiv may suspend or terminate that part of its data or services immediately without notice or further obligation to you."
              }
            />
            <Content
              text={
                "11.3. Third-party providers do not warrant that the provision of their data, software or services will be uninterrupted, error-free, timely, complete, or accurate, nor do any of them make any warranties as to the results to be obtained from the use of the same. You acknowledge that third-party data, software, or services do not constitute a recommendation of any kind and is provided for informational purposes only. You expressly agree that your use of third-party data, software, or services is at your own risk. Accordingly, the third-party providers will not in any way be liable to you or any other entity for any inaccuracies, errors, omissions, delays, damages, claims, liabilities, or losses, regardless of cause, in or arising from the use of the third-party data contained in Company services."
              }
            />
          </ListItem>
          <ListItem mb={"40px"} ms={"30px"}>
            <VerySmallHeading text={"Billing and Cancellation"} />
            <Content
              text={
                "12.1. Billing Cycle. The membership fee for the Service and any other charges you may incur in connection with your use of the Service, such as taxes and possible transaction fees, will be charged to your Payment Method on the specific payment date. The length of your billing cycle will depend on the type of commitment you choose. In some cases, your payment date may change. We may authorize your Payment Method in anticipation of membership or service-related charges through various methods, including authorizing it for up to one year of service as soon as you register."
              }
            />
            <Text
              fontSize={"18px"}
              fontWeight={"400"}
              lineHeight={"24px"}
              mt={"20px"}
            >
              12.2. Cancellation. You can cancel your membership and you will
              continue to have access to the service through the end of your
              billing period. To the extent permitted by the applicable law,
              payments are non-refundable and we do not provide refunds or
              credits for any partial membership periods. To cancel please
              contact us via{" "}
              <Link href=" mailto:support@bleakers.pro" color="#664EFD">
                support@bleakers.pro
              </Link>{" "}
              till the end of current billing period. Your account will be
              canceled after 14 days of your notice via email. Till that moment
              you will be charged for any Account related expenses.
            </Text>
            <Text
              fontSize={"18px"}
              fontWeight={"400"}
              lineHeight={"24px"}
              mt={"20px"}
            >
              12.3. We hope you are pleased with our Cancellation Policy. If,
              for whatever reason, you are not, please, contact the Support Team
              via this email:{" "}
              <Link href=" mailto:support@bleakers.pro" color="#664EFD">
                support@bleakers.pro
              </Link>
              . Our team will deal with the complaint as soon as possible. The
              response will be given within ten (10) business days.
            </Text>
          </ListItem>
          <ListItem mb={"40px"} ms={"30px"}>
            <VerySmallHeading text={"Confidential Information"} />
            <Content
              text={
                "13.1. For purposes of this Agreement, the term “Confidential Information” means non-public or proprietary information, including, without limitation, information relating to current or future business, products and services, research, images, development, design details and specifications, and marketing plans."
              }
            />
            <Content
              text={
                "13.2. During the course of our relationship, you disclose to Bleakers your Confidential Information. We agree to hold in confidence and not disclose to any third party any of your Confidential Information, except as approved or directed in writing by you, and will use your Confidential Information for no purpose other than for providing you with the Services. We will provide access to your Confidential Information to employees, officers, directors, contractors, representatives and agents on a need-to-know basis."
              }
            />
            <Content
              text={
                "13.3. During the course of our relationship, we may similarly disclose to you our Confidential Information. You agree to hold in confidence and not disclose to any third party any of our Confidential Information, except as approved or directed in writing by us, and will use our Confidential Information for no purpose, except as permitted by this Agreement. You will limit access to our Confidential Information to only those employees, officers, directors, contractors, representatives and agents to whom it is necessary to disclose our Confidential Information. You will be responsible to you for any breach of this provision by your employees, officers, directors, contractors, representatives and agents."
              }
            />
            <Content
              text={
                "13.4. Notwithstanding anything to the contrary in this Agreement, the following is not Confidential Information: (a) information that was in the public domain at the time of its disclosure or has entered the public domain without breach of this Agreement; (b) information that was already in the rightful possession of a party at the time of disclosure; (c) information that is independently developed by a party without breaching this Agreement; or (d) information that becomes known to a party, without restriction, from a third party source not directly or indirectly involving a breach of this Agreement."
              }
            />
            <Content
              text={
                "13.5. The confidentiality obligations under this Agreement will survive for five (5) years after the termination of this Agreement."
              }
            />
          </ListItem>
          <ListItem mb={"40px"} ms={"30px"}>
            <VerySmallHeading text={"Portfolio Rights"} />
            <Text
              fontSize={"18px"}
              fontWeight={"400"}
              lineHeight={"24px"}
              mt={"20px"}
            >
              14.1. You hereby grant us a limited, nonexclusive,
              non-sublicensable, royalty-free worldwide license to use, publish,
              and display any deliverables that we develop in connection with
              the Services for the purpose of marketing and advertising (the
              “Portfolio Rights License”). You may revoke the Portfolio Rights
              License at any time by sending written notice to{" "}
              <Link href=" mailto:support@bleakers.pro" color="#664EFD">
                support@bleakers.pro
              </Link>
              . If you revoke the Portfolio Rights License, we will stop using
              your deliverables for marketing and advertising purposes, however
              your deliverables may continue to exist elsewhere online such as
              where the deliverables have been used by others in accordance with
              the Portfolio Rights License.
            </Text>
          </ListItem>
          <ListItem mb={"40px"} ms={"30px"}>
            <VerySmallHeading text={"Term and Termination"} />
            <Content
              text={
                "15.1. This Agreement will expire and terminate upon the expiration or termination of your account or service period. All sections of this Agreement which by their nature should survive termination will survive termination, including but not limited to, accrued rights to payment, confidentiality obligations, warranty disclaimers, and limitations of liability."
              }
            />
            <Content
              text={
                "15.2. We may terminate this Agreement at any time if you default or breach this Agreement, or as described in Sections 4, 8 and 11. Upon expiration or termination of your account or service period, all rights under this Agreement relating to such Service will immediately terminate, you will lose all access to the applicable Service, including access to your account and Customer Content or other files. If we terminate the Agreement for your breach, any licenses to Licensed Content will terminate."
              }
            />
          </ListItem>
          <ListItem mb={"40px"} ms={"30px"}>
            <VerySmallHeading text={"Disclaimer of Warranties"} />
            <Content
              text={
                "16.1. We represent and warrant that you will receive good and valid title license to all deliverables, free and clear of all encumbrances and liens of any kind, except for Licensed Content and other pre-existing materials, which may be subject to additional terms and restrictions. EXCEPT AS SPECIFICALLY SET FORTH IN THIS SECTION 9.1, THE SITE AND THE SERVICES ARE PROVIDED “AS IS, AS AVAILABLE”. WE MAKE NO PROMISES ABOUT OUR SERVICES AND, TO THE EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY, FITNESS, NON-INFRINGEMENT OF INTELLECTUAL PROPERTY, AND OTHER VIOLATION OF RIGHTS, EITHER ORAL OR WRITTEN, WHETHER ARISING BY LAW, COURSE OF DEALING, COURSE OF PERFORMANCE, USAGE, TRADE, OR OTHERWISE."
              }
            />
          </ListItem>
          <ListItem mb={"40px"} ms={"30px"}>
            <VerySmallHeading text={"Liability Waiver"} />
            <Content
              text={
                "17.1. WE WILL NOT BE RESPONSIBLE FOR ANY LOST PROFITS, REVENUES, DATA, FINANCIAL LOSSES OR INDIRECT, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES ARISING OUT OF THE USE OR INABILITY TO USE THIS SITE. TO THE EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY, FOR ANY CLAIMS UNDER THESE TERMS, INCLUDING FOR ANY IMPLIED OR EXPRESSED WARRANTIES, SHALL NOT EXCEED THE TOTAL SERVICE FEE YOU PAID US, REGARDLESS OF THE CAUSE OF ACTION, IN TORT, CONTRACT, OR OTHERWISE. THIS PARAGRAPH DOES NOT AFFECT ANY LIABILITY THAT CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW."
              }
            />
          </ListItem>
          <ListItem mb={"40px"} ms={"30px"}>
            <VerySmallHeading text={"Indemnification"} />
            <Content
              text={
                "18.1. YOU AGREE TO DEFEND, INDEMNIFY, AND HOLD US HARMLESS FROM AND AGAINST ANY CLAIMS, LIABILITIES, DAMAGES, LOSSES, AND EXPENSES, INCLUDING WITHOUT LIMITATION, REASONABLE ATTORNEY’S FEES AND COSTS, ARISING OUT OF OR IN ANY WAY CONNECTED TO CUSTOMER CONTENT OR USE OF THE SERVICES OR ANY DELIVERABLES. YOU SHALL COOPERATE AS REQUIRED BY US IN THE DEFENSE OF ANY CLAIM. WE RESERVE THE RIGHT TO ASSUME THE EXCLUSIVE DEFENSE AND CONTROL OF ANY MATTER SUBJECT TO INDEMNIFICATION BY YOU, AND YOU WILL NOT, IN ANY EVENT, SETTLE ANY CLAIM WITHOUT OUR PRIOR WRITTEN CONSENT."
              }
            />
          </ListItem>
          <ListItem mb={"40px"} ms={"30px"}>
            <VerySmallHeading text={"Links to Third-Party Platforms"} />
            <Content
              text={
                "19.1. If this Site is available through any third-party platform, or if we provide links from this Site to any third-party platform, we do not accept responsibility for any content or practices of such third parties."
              }
            />
          </ListItem>
          <ListItem mb={"40px"} ms={"30px"}>
            <VerySmallHeading text={"Digital Millennium Copyright Act"} />
            <Content
              text={
                "20.1. We take claims of copyright infringement seriously. We will respond to notices of alleged copyright infringement that comply with applicable law. If you believe any materials accessible on or from this Site infringe your copyright, you may request removal of those materials from this Site by submitting written notification to our agent designated below."
              }
            />
            <Content
              text={
                "20.2 In accordance with the Online Copyright Infringement Liability Limitation Act of the Digital Millennium Copyright Act (17 U.S.C. § 512) (“DMCA”), the written notice (the ”DMCA Notice”) must include substantially the following: (1) your physical or electronic signature; (2) Identification of the copyrighted work you believe to have been infringed or, if the claim involves multiple works on this Site, a representative list of such works; (iii) Identification of the material you believe to be infringing in a sufficiently precise manner to allow us to locate that material; (iv) Adequate information by which we can contact you (including your name, postal address, telephone number, and, if available, email address); (v) A statement that you have a good faith belief that use of the copyrighted material is not authorized by the copyright owner, its agent, or the law; (vi) A statement that the information in the written notice is accurate; (vii) A statement, under penalty of perjury, that you are authorized to act on behalf of the copyright owner."
              }
            />
            <Text
              fontSize={"18px"}
              fontWeight={"400"}
              lineHeight={"24px"}
              mt={"20px"}
            >
              20.3 Any notification under this Section 20 shall be submitted to{" "}
              <Link href=" mailto:support@bleakers.pro" color="#664EFD">
                support@bleakers.pro
              </Link>
              .
            </Text>
          </ListItem>
          <ListItem mb={"40px"} ms={"30px"}>
            <VerySmallHeading text={"Dispute Resolution and Choice of Forum"} />
            <Content
              text={
                "21.1. This Agreement is governed by, and construed in accordance with, the laws of the United Kingdom, without regard to any choice of law, conflicts of law or other principles that would result in the application of the laws or regulations of any other jurisdiction. Any legal action, claim, or proceeding relating to or arising out of this Agreement shall be instituted in a state or federal court of competent jurisdiction in London, UK. The Parties agree to submit to the exclusive jurisdiction of, and agree that venue is proper in, these courts in any such legal action or proceeding."
              }
            />
            <Content
              text={
                "21.2. If no court in London is found to have jurisdiction, then the parties shall adjudicate any dispute arising out of or relating to this Agreement by binding arbitration administered by the International Centre for Dispute Resolution in London in accordance with its International Arbitration Rules. All aspects of the arbitration proceeding, and any ruling, decision, or award by the arbitrator, will be strictly confidential for the benefit of all parties."
              }
            />
            <Content
              text={
                "21.3. THE PARTIES AGREE THAT EACH OF US MAY BRING CLAIMS AGAINST THE OTHER ONLY ON AN INDIVIDUAL BASIS AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE ACTION OR PROCEEDING."
              }
            />
            <Content
              text={
                "21.4. THE PARTIES AGREE THAT ANY CAUSE OF ACTION OR CLAIM ARISING OUT OF OR RELATING TO THESE TERMS OF USE MUST BE COMMENCED WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES; OTHERWISE, SUCH CAUSE OF ACTION OR CLAIM IS PERMANENTLY BARRED."
              }
            />
          </ListItem>
          <ListItem mb={"40px"} ms={"30px"}>
            <VerySmallHeading text={"Assignment"} />
            <Content
              text={
                "22.1. This Agreement and the rights and obligations herein are personal to you, and you may not assign or otherwise transfer this Agreement or any of your rights or obligations hereunder, without our prior written consent. We may freely assign this Agreement, including, without limitation, in connection with a merger, acquisition, bankruptcy, reorganization, or sale of some or all of our assets or stock."
              }
            />
          </ListItem>
          <ListItem mb={"40px"} ms={"30px"}>
            <VerySmallHeading text={"Severability"} />
            <Content
              text={
                "23.1. If any one or more of the provisions of this Agreement are for any reason held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, the remaining provisions of this Agreement will be unimpaired and will remain in full force and effect, and the invalid, illegal or unenforceable provision(s) will be replaced by a valid, legal and enforceable provision or provisions that comes closest to the intent of the parties underlying the invalid, illegal or unenforceable provision(s)."
              }
            />
          </ListItem>
          <ListItem mb={"40px"} ms={"30px"}>
            <VerySmallHeading text={"Non-Waiver"} />
            <Content
              text={
                "24.1. The failure of either party to exercise in any respect any right provided for herein shall not be deemed a waiver of any further rights hereunder. A waiver by either party of any term or condition of this Agreement or any breach, in any one instance, will not waive such term or condition or any subsequent breach."
              }
            />
          </ListItem>
          <ListItem mb={"40px"} ms={"30px"}>
            <VerySmallHeading text={"Force Majeure"} />
            <Content
              text={
                "25.1. If we are unable to perform any obligation under this Agreement because of any matter beyond our reasonable control, including but not limited to pandemic or wide spread out break of infectious diseases, government shutdown, lightning, flood, exceptionally severe weather, fire, explosion, war, civil disorder, industrial/labor disputes (whether or not involving our employees), acts of government, loss of or problems with telecommunications, utility services or other third party services, and hostile network attacks (each, a “Force Majeure Event”), we will have no liability to you for such failure to perform; provided, however, that we will resume performance promptly upon removal of the circumstances constituting the Force Majeure Event."
              }
            />
          </ListItem>
          <ListItem mb={"40px"} ms={"30px"}>
            <VerySmallHeading text={"Changes to Service"} />
            <Content
              text={
                "26.1 We reserve the right to withdraw or amend our Service, and any service or material we provide via Service, in our sole discretion without notice. We will not be liable if for any reason all or any part of Service is unavailable at any time or for any period. From time to time, we may restrict access to some parts of Service, or the entire Service, to users, including registered users."
              }
            />
          </ListItem>
          <ListItem mb={"40px"} ms={"30px"}>
            <VerySmallHeading text={"Amendments to the Terms"} />
            <Content
              text={
                "27.1 We may amend Terms at any time by posting the amended terms on this site. It is your responsibility to review these Terms periodically."
              }
            />
            <Content
              text={
                "Your continued use of the Platform following the posting of revised Terms means that you accept and agree to the changes. You are expected to check this page frequently so you are aware of any changes, as they are binding on you."
              }
            />
            <Content
              text={
                "By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use Service."
              }
            />
          </ListItem>
        </OrderedList>
      </Flex>
    </Flex>
  );
};

export default Terms;
