import { Avatar, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { timeAgo } from "../../utils/timeAgo";
import useUserProfileStore from "../../store/userProfileStore";

function Caption({ post }) {
  const userProfile = useUserProfileStore((state) => state.userProfile);
  return (
    <Flex align={"center"} h={"full"} gap={4}>
      <Link to={`/${userProfile.userName}`}>
        <Avatar src={userProfile.profilePicURL} size={"sm"} />
      </Link>
      <Flex direction="column">
        <Flex gap={2} align={"center"}>
          <Link to={`/${userProfile.userName}`}>
            <Text fontWeight={"bold"} fontSize={12}>
              {userProfile.userName}
            </Text>
          </Link>
          <Text fontSize={14}>{post.caption}</Text>
        </Flex>
        <Text color={"gray"} fontSize={12}>
          {timeAgo(post.createdAt)}
        </Text>
      </Flex>
    </Flex>
  );
}

export default Caption;
