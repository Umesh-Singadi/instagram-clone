import {
  Avatar,
  Button,
  Divider,
  Flex,
  GridItem,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Comment from "../Comment/Comment";
import PostFooter from "../FeedPosts/PostFooter";
import useUserProfileStore from "../../store/userProfileStore";
import useAuthStore from "../../store/authStore";
import useShowToast from "../../hooks/useShowToast";
import { useState } from "react";
import { deleteObject, ref } from "firebase/storage";
import { firestore, storage } from "../../firebase/firebase";
import { arrayRemove, deleteDoc, doc, updateDoc } from "firebase/firestore";
import usePostStore from "../../store/postStore";

function ProfilePost({ post }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const userProfile = useUserProfileStore((state) => state.userProfile);
  const authUser = useAuthStore((state) => state.user);
  const showToast = useShowToast();
  const [isDeleting, setIsDeleting] = useState(false);
  const deletePost = usePostStore((state) => state.deletePost);
  const decrementPostsCount = useUserProfileStore((state) => state.removePost);

  const handleDeletePost = async () => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;
    if (isDeleting) return;
    setIsDeleting(true);
    try {
      // const imageRef = ref(storage, `posts/${post.id}`);
      // await deleteObject(imageRef);
      // await deleteDoc(doc(firestore, "posts", post.id));
      // const userRef = doc(firestore, "users", authUser.uid);
      // await updateDoc(userRef, { posts: arrayRemove(post.id) });
      await deleteObject(ref(storage, `posts/${post.id}`));
      await deleteDoc(doc(firestore, "posts", post.id));
      await updateDoc(doc(firestore, "users", authUser.uid), {
        posts: arrayRemove(post.id),
      });
      deletePost(post.id);
      decrementPostsCount(post.id);
      showToast("Success", "Post deleted successfully", "success");
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <GridItem
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"whiteAlpha.300"}
        borderRadius={4}
        position={"relative"}
        aspectRatio={1 / 1}
        onClick={onOpen}
        cursor={"pinter"}>
        <Flex
          opacity={0}
          _hover={{ opacity: 1 }}
          position={"absolute"}
          top={0}
          bottom={0}
          left={0}
          right={0}
          bg={"blackAlpha.700"}
          transition={"all 0.3s ease"}
          zIndex={1}
          justifyContent={"center"}>
          <Flex align={"center"} justify={"center"} gap={50}>
            <Flex>
              <AiFillHeart size={20} />
              <Text ml={2} fontWeight={"bold"}>
                {post.likes.length}
              </Text>
            </Flex>
            <Flex>
              <FaComment size={20} />
              <Text ml={2} fontWeight={"bold"}>
                {post.comments.length}
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Image
          src={post.imageURL}
          w={"100%"}
          h={"100%"}
          objectFit={"cover"}></Image>
      </GridItem>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size={{ base: "3xl", md: "5xl" }}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bg={"black"} pb={4}>
            <Flex
              gap={4}
              w={{ base: "90%", sm: "70%", md: "full" }}
              mx={"auto"}
              maxH={"90vh"}
              minH={"50vh"}>
              <Flex
                overflow={"hidden"}
                borderRadius={4}
                border={"1px solid"}
                borderColor={"whiteAlpha.300"}
                flex={1.5}
                align={"center"}
                justify={"center"}>
                <Image
                  src={post.imageURL}
                  alt="profile post"
                  h={600}
                  w={"full"}></Image>
              </Flex>
              <Flex
                flex={1}
                flexDirection={"column"}
                px={10}
                display={{ base: "none", md: "flex" }}>
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                  <Flex gap={4} alignItems={"center"}>
                    <Avatar
                      src={userProfile.profilePicURL}
                      size={"sm"}
                      name="umesh"
                    />
                    <Text fontWeight={"bold"} fontSize={12}>
                      {userProfile.userName}
                    </Text>
                  </Flex>
                  {authUser?.uid === userProfile.uid && (
                    <Button
                      size={"sm"}
                      bg={"transparent"}
                      _hover={{ bg: "whiteAlpha.300", color: "red.600" }}
                      borderRadius={4}
                      p={1}
                      onClick={handleDeletePost}
                      isLoading={isDeleting}>
                      <MdDelete size={20} cursor={"pinter"} />
                    </Button>
                  )}
                </Flex>
                <Divider my={4} bg={"gray.500"} />
                <VStack
                  w={"full"}
                  alignItems={"start"}
                  maxH={"350px"}
                  overflowY={"auto"}>
                  <Comment
                    createdAt="1 day ago"
                    username="Umesh"
                    profilePic="/img1.png"
                    text="Nice pic"
                  />
                  <Comment
                    createdAt="6 days ago"
                    username="kentdodds"
                    profilePic="https://bit.ly/kent-c-dodds"
                    text="Nice"
                  />
                </VStack>
                <Divider my={4} bg={"gray.800"} />
                <PostFooter isProfilePage />
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ProfilePost;
