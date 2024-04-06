import { Flex, Link, Text, VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

function SuggestedUsers() {
  return (
    <VStack p={8} gap={4} px={6}>
      <SuggestedHeader />
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}>
          See all
        </Text>
      </Flex>
      <SuggestedUser img="/img1.png" name="Natash" followers={1022} />
      <SuggestedUser img="/img2.png" name="Joe" followers={399} />
      <SuggestedUser img="/img3.png" name="Nikki" followers={233} />
      <Text fontSize={12} color={"gray.400"} mr={"auto"}>
        &copy; @2024 Build By{" "}
        <Link
          href="https://www.linkedin.com/in/umesh-singadi/"
          color={"blue.400"}
          cursor={"pointer"}
          target="_blank">
          Umesh
        </Link>
      </Text>
    </VStack>
  );
}

export default SuggestedUsers;
