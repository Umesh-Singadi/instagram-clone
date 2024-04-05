import { Flex, Avatar, Box, Text } from "@chakra-ui/react";

function PostHeader({ userName, avatar }) {
  return (
    <Flex alignItems={"center"} justify={"space-between"} w={"full"} my={2}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar src={avatar} alt="user profile pic" size={"sm"}></Avatar>
        <Flex fontSize={12} fontWeight={"bold"} gap={2}>
          {userName} <Box color={"gray.500"}>• 1w</Box>
        </Flex>
      </Flex>
      <Box cursor={"pointer"}>
        <Text
          fontSize={12}
          color={"blue.500"}
          fontWeight={"bold"}
          _hover={{ color: "white", transition: "0.2s ease-in-out" }}>
          UnFollow
        </Text>
      </Box>
    </Flex>
  );
}

export default PostHeader;
