import { Avatar, Flex, Skeleton, SkeletonCircle, Text } from "@chakra-ui/react";
import useGetUserProfileById from "../../hooks/useGetUserProfileById";
import { Link } from "react-router-dom";
import { timeAgo } from "../../utils/timeAgo";

function Comment({ comment }) {
  const { isLoading, userProfile } = useGetUserProfileById(comment.createdBy);

  if (isLoading) return <CommentSkeleton />;
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
            </Text>{" "}
          </Link>
          <Text fontSize={14}>{comment.comment}</Text>
        </Flex>
        <Text color={"gray"} fontSize={12}>
          {timeAgo(comment.createdAt)}
        </Text>
      </Flex>
    </Flex>
  );
}

export default Comment;

const CommentSkeleton = () => {
  return (
    <Flex gap={4} w={"full"} align={"center"}>
      <SkeletonCircle h={10} w={10} />
      <Flex gap={1} flexDir={"column"}>
        <Skeleton h={2} w={100} />
        <Skeleton h={2} w={50} />
      </Flex>
    </Flex>
  );
};
