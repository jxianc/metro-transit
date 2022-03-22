import { CalendarIcon } from "@chakra-ui/icons";
import { Box, Text, Divider, Link, Icon } from "@chakra-ui/react";
import { NextPage } from "next";

interface FooterProps {}

export const Footer: NextPage<FooterProps> = ({}) => {
  return (
    <Box>
      <Divider />
      <Divider mb="2vh" />
      <Box textAlign="center" fontSize="sm">
        <Text textAlign="center" mb={2} alignItems="center">
          Page built by Jingxian Chai.{" "}
          <Link href="https://jingxiancodes.xyz" target="_blank" color="blue.400">
            website
          </Link>
        </Text>
        <Text textAlign="center">
          This page is built using TypeScript NextJS with Chakra-UI and deployed at Vercel with
          the help of NexTrip API.{" "}
          <Link
            href="https://github.com/jingxian01/metro-transit"
            target="_blank"
            color="blue.400"
          >
            source
          </Link>
        </Text>
      </Box>
    </Box>
  );
};
