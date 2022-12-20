import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  fonts: { body: "Jost" },

  styles: {
    global: (props) => ({
      body: {
        bg: mode("#F3F1FE")(props),
        color: mode("#0E0E10")(props),
      },
    }),
  },
});

export default theme;
