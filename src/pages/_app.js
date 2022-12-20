import "../../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Jost } from "@next/font/google";
import theme from "../../styles/theme";
import { Provider } from "react-redux";
import store from "../store/index";
import ErrorsProvider from "hoc/error_provider";

const jost = Jost({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        body {
          font-family: ${jost.style.fontFamily};
        }
      `}</style>
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <ErrorsProvider>
            <Component {...pageProps} />
          </ErrorsProvider>
        </Provider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
