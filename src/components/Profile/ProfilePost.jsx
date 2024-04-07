import { Flex, GridItem, Image, Text } from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";

function ProfilePost({ img }) {
  return (
    <>
      <GridItem
        cursor={"pinter"}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"whiteAlpha.300"}
        borderRadius={4}
        position={"relative"}
        aspectRatio={1 / 1}>
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
    </>
  );
}

export default ProfilePost;
