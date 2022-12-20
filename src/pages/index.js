import { Layout } from "modules/common/components";
import {
  Intro,
  Services,
  SubmitForm,
  SuccessfullProducts,
  Team,
  Tech,
  Way,
  WhyChoose,
} from "modules/home/components";

export default function Home() {
  return (
    <Layout>
      <Intro />
      <Way />
      <WhyChoose />
      <Services />
      <Tech />
      <SuccessfullProducts />
      <Team />
      <SubmitForm />
    </Layout>
  );
}
