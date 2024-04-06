import { Avatar, Flex, VStack, Button, Box } from "@chakra-ui/react";
import { useState } from "react";

export default function SuggestedUser({ img, name, followers }) {
  const [isFollowed, setIsFollow] = useState(false);
  return (
    <Flex w={"full"} alignItems={"center"} justifyContent={"space-between"}>
      <Flex>
        <Avatar src={img} size={"md"} mr={2} name={name} />
        <VStack gap={0} alignItems={"flex-start"}>
          <Box fontSize={20} fontWeight={"bold"}>
            {name}
          </Box>
          <Box fontSize={"12"} color={"gray.500"}>
            {followers} followers
          </Box>
        </VStack>
      </Flex>
      <Button
        color={"blue.400"}
        fontWeight={"medium"}
        fontSize={14}
        bg={"transparent"}
        p={0}
        _hover={{ color: "white" }}
        cursor={"pointer"}
        onClick={() => setIsFollow(!isFollowed)}>
        {isFollowed ? "UnFollow" : "Follow"}
      </Button>
    </Flex>
  );
}
