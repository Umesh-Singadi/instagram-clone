import { Flex, Image, Text } from "@chakra-ui/react";

function GoogleAuth() {
  return (
    <>
      <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>
        <Image src="/google.png" w={5} alt="Google image" />
        <Text color={"blue.200"} mx={4}>
          Log in with Google
        </Text>
      </Flex>
    </>
  );
}

export default GoogleAuth;
