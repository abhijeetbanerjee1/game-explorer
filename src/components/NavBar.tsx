import { HStack, Image, Box, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <HStack>
      <Box p={2}>
        <Image src={logo} boxSize="60px" />
      </Box>
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
