import React from "react";
import {
  Box,
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Stack,
} from "@chakra-ui/react";
const Home = () => {
  return (
    <>
      <Stack>
        <Flex w="97vw" h="97vh" justify={"center"} align={"center"}>
          <Stack gap={5}>
            <Heading as="h1" size="4xl">
              hello world!
            </Heading>
            <Heading as="h2" size="lg">
              this is my initial Next.js project settup with Recoil, Firebase,
              Cypress, and last but not least Chakra UI
            </Heading>
            <Divider />
          </Stack>
        </Flex>
        <Flex w="97vw" h="97vh" justify={"center"} align={"center"}>
          <Heading>this is just a single page showcase</Heading>
        </Flex>
      </Stack>
    </>
  );
};

export default Home;
