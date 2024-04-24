import { Flex, Link, Text, VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";
import useGetSuggestedUsers from "../../hooks/useGetSuggestedUsers";
function SuggestedUsers() {
  const { suggestedUsers } = useGetSuggestedUsers();
  console.log(suggestedUsers);
  return (
    <VStack p={8} gap={4} px={6}>
      <SuggestedHeader />
      {suggestedUsers.length !== 0 && (
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
      )}
      {suggestedUsers.map((user) => (
        <SuggestedUser key={user.id} user={user} />
      ))}
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
