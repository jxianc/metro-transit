import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";

interface NameProps {}

export const Name: NextPage<NameProps> = ({}) => {
  const blue = useColorModeValue("blue.500", "blue.800");
  const router = useRouter();

  const clickHandler = () => {
    router.push("/");
  };

  return (
    <Flex direction={{ base: "column", md: "row" }} alignItems="baseline">
      <Text
        as="h1"
        bgGradient={`linear(to-r, ${blue}, red.600)`}
        bgClip="text"
        fontSize={{ base: "xl", md: "2xl" }}
        fontWeight="bold"
        _hover={{ cursor: "pointer" }}
        onClick={clickHandler}
        mr={2}
      >
        Metro Transit
      </Text>
      <Text
        as="h3"
        fontSize={{ base: "sm", md: "lg" }}
        fontWeight="semibold"
        _hover={{ cursor: "pointer" }}
        onClick={clickHandler}
      >
        Real Time Schedule
      </Text>
    </Flex>
  );
};
