import {
  Avatar,
  AvatarGroup,
  Button,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";

function ProfileHeader() {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}>
      <AvatarGroup
        size={{ base: "xl", md: "2xl" }}
        justifySelf={"center"}
        alignSelf={"flex-start"}
        mx={"auto"}>
        <Avatar name="umesh" src="profile-pic.png" alt="profile pic" />
      </AvatarGroup>
      <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
        <Flex
          gap={4}
          direction={{ base: "column", sm: "row" }}
          justify={"start"}
          w={"full"}>
          <Text fontSize={{ base: "sm", md: "lg" }}>Umesh</Text>
          <Flex gap={4} align={"center"} justify={"center"}>
            <Button
              bg={"white"}
              color={"black"}
              _hover={{ bg: "whiteAlpha.800" }}
              size={{ base: "xs", md: "sm" }}>
              Edit Profile
            </Button>
          </Flex>
        </Flex>
        <Flex align={"center"} gap={{ base: 2, sm: "4" }}>
          <Text>
            <Text
              fontSize={{ base: "xs", md: "sm" }}
              as={"span"}
              fontWeight={"bold"}
              mr={1}>
              100
            </Text>
            Posts
          </Text>
          <Text>
            <Text
              fontSize={{ base: "xs", md: "sm" }}
              as={"span"}
              fontWeight={"bold"}
              mr={1}>
              765
            </Text>
            Followers
          </Text>
          <Text>
            <Text
              fontSize={{ base: "xs", md: "sm" }}
              as={"span"}
              fontWeight={"bold"}
              mr={1}>
              876
            </Text>
            Following
          </Text>
        </Flex>
        <Flex align={"center"} gap={4}>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            Umesh Singadi
          </Text>
        </Flex>
        <Text fontSize={"sm"}> Instagram Clone</Text>
      </VStack>
    </Flex>
  );
}

export default ProfileHeader;
