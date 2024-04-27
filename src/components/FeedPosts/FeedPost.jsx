import useGetUserProfileById from "../../hooks/useGetUserProfileById";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import { Box, Image } from "@chakra-ui/react";

function FeedPost({ post }) {
  const { userProfile } = useGetUserProfileById(post.createdBy);

  return (
    <>
      <PostHeader post={post} creatorProfile={userProfile} />
      <Box my={2} overflow={"hidden"} borderRadius={4}>
        <Image src={post.imageURL} alt={"feed post image"} />
      </Box>
      <PostFooter post={post} creatorProfile={userProfile} />
    </>
  );
}

export default FeedPost;
