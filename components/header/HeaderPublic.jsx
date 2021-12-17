import { Center, Flex, Square, Text } from "@chakra-ui/react";
import React from "react";

const HeaderPublic = () => {
  return (
    <Flex h="50px">
      <Square bg="blue.500" size="50px">
        <Text>logo</Text>
      </Square>
      <Center w="100%" bg="green.500">
        <Text>menu</Text>
      </Center>
      <Center w="100%" bg="red.500">
        <Text>toolbar</Text>
      </Center>
      <Square bg="blue.500" size="50px">
        <Text>account</Text>
      </Square>
    </Flex>
  );
};

export default HeaderPublic;
