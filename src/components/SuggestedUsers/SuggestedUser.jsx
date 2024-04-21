import { Avatar, Flex, VStack, Button, Box } from "@chakra-ui/react";
import useAuthStore from "../../store/authStore";
import useFollowUser from "../../hooks/useFollowUser";

function SuggestedUser({ user, setUser }) {
  const authUser = useAuthStore((state) => state.user);
  const { handleFollowUser, isFollowing, isUpdating } = useFollowUser(user.uid);
  const onFollowUser = () => {
    handleFollowUser();
    setUser({
      ...user,
      followers: isFollowing
        ? user.followers.filter((uid) => uid !== authUser.uid)
        : [...user.followers, authUser.uid],
    });
  };
  return (
    <Flex w={"full"} alignItems={"center"} justifyContent={"space-between"}>
      <Flex>
        <Avatar src={user.profilePicURL} size={"md"} mr={2} name={name} />
        <VStack gap={0} alignItems={"flex-start"}>
          <Box fontSize={20} fontWeight={"bold"}>
            {user.userName}
          </Box>
          <Box fontSize={"12"} color={"gray.500"}>
            {user.followers.length} followers
          </Box>
        </VStack>
      </Flex>
      {authUser.uid !== user.uid && (
        <Button
          color={"blue.400"}
          fontWeight={"medium"}
          fontSize={14}
          bg={"transparent"}
          p={0}
          _hover={{ color: "white" }}
          cursor={"pointer"}
          onClick={onFollowUser}
          isLoading={isUpdating}>
          {isFollowing ? "UnFollow" : "Follow"}
        </Button>
      )}
    </Flex>
  );
}
export default SuggestedUser;
