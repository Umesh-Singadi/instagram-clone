import { Button, Container, Flex, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Container maxW={"container.lg"} m={4} mx={"auto"}>
      <Flex
        alignItems={"center"}
        w={"full"}
        justify={{ base: "center", sm: "space-between" }}>
        <Image
          src="/logo.png"
          h={20}
          display={{ base: "none", sm: "block" }}
          cursor={"pointer"}
        />
        <Flex gap={4}>
          <Link to={"/auth"}>
            <Button colorScheme="'blue" size={"sm"}>
              Login
            </Button>
          </Link>
          <Link to={"/auth"}>
            <Button variant="outline" size={"sm"}>
              Signup
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
}

export default Navbar;
