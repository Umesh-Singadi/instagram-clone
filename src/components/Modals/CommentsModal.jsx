import {
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import Comment from "../Comment/Comment";
import { useEffect, useRef } from "react";
import usePostComment from "../../hooks/usePostComment";

function CommentsModal({ isOpen, onClose, post }) {
  const { handlePostComment, isCommenting } = usePostComment();
  const commentRef = useRef(null);
  const commentsContainerRef = useRef(null);

  useEffect(() => {
    const scrollToBottom = () => {
      commentsContainerRef.current.scrollTop =
        commentsContainerRef.current.scrollHeight;
    };
    setTimeout(() => {
      if (isOpen) scrollToBottom();
    }, 100);
  }, [isOpen, post.comments.length]);

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    await handlePostComment(post.id, commentRef.current.value);
    commentRef.current.value = "";
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInLeft">
      <ModalOverlay />
      <ModalContent bg={"black"} border={"1px solid gray"} w={"400px"}>
        <ModalHeader>Comments</ModalHeader>
        <ModalCloseButton />
        <ModalBody p={6}>
          <Flex
            flexDir={"column"}
            gap={4}
            mb={4}
            overflowY={"auto"}
            maxH={"250px"}
            ref={commentsContainerRef}>
            {post.comments.map((comment, idx) => (
              <Comment key={idx} comment={comment} />
            ))}
          </Flex>
          <form onSubmit={handleSubmitComment}>
            <Input placeholder="Add comment..." size={"sm"} ref={commentRef} />
            <Flex w={"full"} justify={"flex-end"}>
              <Button
                type="submit"
                size={"sm"}
                ml={"auto"}
                my={4}
                isLoading={isCommenting}>
                Post
              </Button>
            </Flex>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default CommentsModal;
