import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { theme } from "../../styles/theme";
import NavPublic from "../../components/header/HeaderPublic";
import FooterPublic from "../../components/footer/FooterPublic";

const LayoutPublic = ({ children }) => {
  const layoutTheme = extendTheme({ theme });
  return (
    <ChakraProvider theme={layoutTheme}>
      <NavPublic />
      <Box w="100%" minH="100vh" p={5}>
        {children}
      </Box>
      <FooterPublic />
    </ChakraProvider>
  );
};

export default LayoutPublic;
