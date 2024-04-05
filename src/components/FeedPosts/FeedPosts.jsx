import {
  Container,
  VStack,
  SkeletonCircle,
  Flex,
  Skeleton,
} from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import { useEffect, useState } from "react";

function FeedPosts() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Container maxW={"container.small"} py={10} px={2}>
      {isLoading &&
        Array.from({ length: 4 }, () => 1).map((_, index) => {
          return (
            <VStack key={index} gap={4} alignItems={"flex-start"} mb={10}>
              <Flex gap={2}>
                <SkeletonCircle size={10} />
                <VStack gap={2} alignItems={"flex-start"}>
                  <Skeleton h={"10px"} w={"200px"}></Skeleton>
                  <Skeleton h={"10px"} w={"200px"}></Skeleton>
                </VStack>
              </Flex>
              <Skeleton w={"full"}>
                <Skeleton h={"500px"}>Content Wrapped</Skeleton>
              </Skeleton>
            </VStack>
          );
        })}
      {!isLoading && (
        <>
          <FeedPost img="/img1.png" userName="Natasha" avatar="img1.png" />
          <FeedPost img="/img2.png" userName="Josh" avatar="img2.png" />
          <FeedPost img="/img3.png" userName="Nikki" avatar="img3.png" />
          <FeedPost img="/img4.png" userName="Wanda" avatar="img4.png" />
        </>
      )}
    </Container>
  );
}

export default FeedPosts;
