import { NextPage } from "next";
import { Box, Flex, Stack, Text, useColorModeValue } from "@chakra-ui/react";

interface NameProps {}

export const Name: NextPage<NameProps> = ({}) => {
  const blue = useColorModeValue("blue.500", "blue.800");

  return (
    <Flex direction={{ base: "column", md: "row" }} alignItems="baseline">
      <Text
        as="h1"
        bgGradient={`linear(to-r, ${blue}, red.600)`}
        bgClip="text"
        fontSize={{ base: "xl", md: "2xl" }}
        fontWeight="bold"
        _hover={{ cursor: "pointer" }}
        mr={1}
      >
        Metro Transit
      </Text>
      <Text
        as="h3"
        fontSize={{ base: "sm", md: "lg" }}
        fontWeight="semibold"
        _hover={{ cursor: "pointer" }}
      >
        Real Time Schedule
      </Text>
    </Flex>
  );
};
