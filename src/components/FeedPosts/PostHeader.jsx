import {
  Flex,
  Avatar,
  Box,
  SkeletonCircle,
  Skeleton,
  Button,
} from "@chakra-ui/react";
import { timeAgo } from "../../utils/timeAgo";
import { Link } from "react-router-dom";
import useFollowUser from "../../hooks/useFollowUser";

function PostHeader({ post, creatorProfile }) {
  const { handleFollowUser, isFollowing, isUpdating } = useFollowUser(
    post.createdBy
  );
  return (
    <Flex alignItems={"center"} justify={"space-between"} w={"full"} my={2}>
      <Flex alignItems={"center"} gap={2}>
        {creatorProfile ? (
          <Link to={`/${creatorProfile.userName}`}>
            <Avatar
              src={creatorProfile?.profilePicURL}
              alt="user profile pic"
              size={"sm"}></Avatar>
          </Link>
        ) : (
          <SkeletonCircle size={10} />
        )}
        <Flex fontSize={12} fontWeight={"bold"} gap={2}>
          {creatorProfile ? (
            <>
              <Link to={`/${creatorProfile.userName}`}>
                {creatorProfile?.userName}
              </Link>
              <Box color={"gray.500"}>• {timeAgo(post.createdAt)}</Box>
            </>
          ) : (
            <Skeleton w={"150px"} h={"10px"} />
          )}
        </Flex>
      </Flex>
      <Box cursor={"pointer"}>
        <Button
          fontSize={12}
          color={"blue.500"}
          fontWeight={"bold"}
          _hover={{ color: "white", transition: "0.2s ease-in-out" }}
          onClick={handleFollowUser}
          bg={"transparent"}
          isLoading={isUpdating}
          size={"xs"}>
          {isFollowing ? "UnFollow" : "Follow"}
        </Button>
      </Box>
    </Flex>
  );
}

export default PostHeader;
