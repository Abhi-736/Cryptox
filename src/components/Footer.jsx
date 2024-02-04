import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import abhi from '../assets/abhishek.png';
import React from "react";

/* const avatarSrc = "https://i.ibb.co/68M6Xnh/final.png" */

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            The best crypto app that updates you about the status of various crypto currencies.
          </Text>
        </VStack>

        <VStack><a href="https://abhi736.000webhostapp.com/#Home">
          <Avatar boxSize={"28"} mt={["4", "0"]} src={abhi} />
          </a>
          <Text >Designed by</Text>
        
          </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
