import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import { Box, Image } from "@chakra-ui/react";

function FeedPost({ img, userName, avatar }) {
  return (
    <>
      <PostHeader userName={userName} avatar={avatar} />
      <Box my={2}>
        <Image src={img} borderRadius={"md"} alt={userName} />
      </Box>
      <PostFooter userName={userName} />
    </>
  );
}

export default FeedPost;
