import {
  Box,
  Flex,
  Input,
  InputGroup,
  Text,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import {
  NotificationsLogo,
  CommentLogo,
  UnlikeLogo,
} from "../../assets/constants";
import { useRef, useState } from "react";
import usePostComment from "../../hooks/usePostComment";
import useAuthStore from "../../store/authStore";
import useLikePost from "../../hooks/useLikePost";
import { timeAgo } from "../../utils/timeAgo";

function PostFooter({ isProfilePage, post, creatorProfile }) {
  const { handlePostComment, isCommenting } = usePostComment();
  const authUser = useAuthStore((state) => state.user);
  const [comment, setComment] = useState("");
  const { handleLikePost, isLiked, likes } = useLikePost(post);

  const commentRef = useRef(null);
  const handleSubmitComment = async () => {
    await handlePostComment(post.id, comment);
    setComment("");
  };

  return (
    <Box mb={10} mt={"auto"}>
      <Flex align={"center"} gap={2} w={"full"} mb={2} mt={4} pt={0}>
        <Box onClick={handleLikePost} cursor={"pointer"} fontSize={18}>
          {!isLiked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box
          cursor={"pointer"}
          fontSize={18}
          onClick={() => commentRef.current.focus()}>
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontWeight={600}>{likes} likes</Text>
      {isProfilePage && (
        <Text fontSize={12} color={"gray"}>
          Posted {timeAgo(post.createdAt)}
        </Text>
      )}
      {!isProfilePage && (
        <>
          <Text fontWeight={700} fontSize="sm">
            {creatorProfile?.userName}{" "}
            <Text as="span" fontWeight={400}>
              {post.caption}
            </Text>
          </Text>
          {post.comments.length > 0 && (
            <Text fontSize={"sm"} color={"gray"} cursor={"pointer"}>
              View all {post.comments.length} comments
            </Text>
          )}
        </>
      )}
      {authUser && (
        <Flex align={"center"} gap={2} justify={"space-between"} w={"full"}>
          <InputGroup>
            <Input
              variant={"flushed"}
              placeholder={"Add a comment..."}
              fontSize={14}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              ref={commentRef}
            />
            <InputRightElement>
              <Button
                fontSize={14}
                color={"blue.500"}
                fontWeight={600}
                cursor={"pointer"}
                _hover={{ color: "white" }}
                isLoading={isCommenting}
                bg={"transparent"}
                onClick={handleSubmitComment}>
                Post
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      )}
    </Box>
  );
}

export default PostFooter;
