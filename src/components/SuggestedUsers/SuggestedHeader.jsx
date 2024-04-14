import { Avatar, Flex, Text, Button } from "@chakra-ui/react";
import useLogout from "../../hooks/useLogout";
import useAuthStore from "../../store/authStore";
import { Link } from "react-router-dom";

function SuggestedHeader() {
  const { handleLogout, isLoggingOut } = useLogout();
  const authUser = useAuthStore((state) => state.user);

  return (
    <Flex justify={"space-between"} w={"full"} alignItems={"center"}>
      <Flex gap={2} alignItems={"center"}>
        <Link to={`/${authUser.userName}`}>
          <Avatar src={authUser.profilePicURL} size={"md"} />
        </Link>
        <Link to={`/${authUser.userName}`}>
          <Text>{authUser.userName}</Text>
        </Link>
      </Flex>
      <Button
        isLoading={isLoggingOut}
        onClick={() => handleLogout()}
        size={"xs"}
        bg={"transparent"}
        _hover={{ bg: "transparent" }}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.500"}
        cursor={"pointer"}>
        Log Out
      </Button>
    </Flex>
  );
}

export default SuggestedHeader;
