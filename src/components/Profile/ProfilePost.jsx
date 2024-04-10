import {
  Avatar,
  Box,
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
function ProfilePost({ img }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
                10
              </Text>
            </Flex>
            <Flex>
              <FaComment size={20} />
              <Text ml={2} fontWeight={"bold"}>
                10
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Image src={img} w={"100%"} h={"100%"} objectFit={"cover"}></Image>
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
              mx={"auto"}>
              <Box
                overflow={"hidden"}
                borderRadius={4}
                border={"1px solid"}
                borderColor={"whiteAlpha.300"}
                flex={1.5}>
                <Image src={img} alt="profile post" h={600} w={"full"}></Image>
              </Box>
              <Flex
                flex={1}
                flexDirection={"column"}
                px={10}
                display={{ base: "none", md: "flex" }}>
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                  <Flex gap={4} alignItems={"center"}>
                    <Avatar src="profile-pic.png" size={"sm"} name="umesh" />
                    <Text fontWeight={"bold"} fontSize={12}>
                      Umesh
                    </Text>
                  </Flex>
                  <Box
                    _hover={{ bg: "whiteAlpha.300", color: "red.600" }}
                    borderRadius={4}
                    p={1}>
                    <MdDelete size={20} cursor={"pinter"} />
                  </Box>
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
                  <Comment
                    createdAt="10 days ago"
                    username="abramov"
                    profilePic="https://bit.ly/dan-abramov"
                    text="Wonderful"
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
