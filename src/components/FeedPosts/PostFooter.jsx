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
import { useState } from "react";

function PostFooter({ userName, isProfilePage }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(1000);

  function handleLikes() {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  }
  return (
    <Box mb={10} mt={"auto"}>
      <Flex align={"center"} gap={2} w={"full"} mb={2} mt={4} pt={0}>
        <Box onClick={handleLikes} cursor={"pointer"} fontSize={18}>
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box cursor={"pointer"} fontSize={18}>
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontWeight={600}>{likes} likes</Text>
      {!isProfilePage && (
        <>
          <Text fontWeight={700} fontSize="sm">
            {userName}{" "}
            <Text as="span" fontWeight={400}>
              Feeling Good
            </Text>
          </Text>
          <Text fontSize={"sm"} color={"gray"}>
            View all 1000 comments
          </Text>
        </>
      )}
      <Flex align={"center"} gap={2} justify={"space-between"} w={"full"}>
        <InputGroup>
          <Input
            variant={"flushed"}
            placeholder={"Add a comment..."}
            fontSize={14}
          />
          <InputRightElement>
            <Button
              fontSize={14}
              color={"blue.500"}
              fontWeight={600}
              cursor={"pointer"}
              _hover={{ color: "white" }}
              bg={"transparent"}>
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
}

export default PostFooter;
