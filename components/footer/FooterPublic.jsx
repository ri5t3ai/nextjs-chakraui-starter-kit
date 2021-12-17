import { Center, Divider, Flex, Square, Stack, Text } from "@chakra-ui/react";
import React from "react";

const FooterPublic = () => {
  return (
    <Stack gap={5}>
      <Flex></Flex>
      <Divider />
      <Flex h="350px" align={"end"}>
        <Square bg="blue.500" size="50px">
          <Text>logo</Text>
        </Square>
        <Center w="100%" h="100%" bg="green.500">
          <Text>col 1</Text>
        </Center>
        <Center w="100%" h="100%" bg="yellow.500">
          <Text>col 2</Text>
        </Center>
        <Center w="100%" h="100%" bg="purple.500">
          <Text>col 3</Text>
        </Center>
        <Center w="100%" h="100%" bg="orange.500">
          <Text>col 4</Text>
        </Center>
        <Square bg="blue.500" size="50px">
          <Text>chat</Text>
        </Square>
      </Flex>
    </Stack>
  );
};

export default FooterPublic;
