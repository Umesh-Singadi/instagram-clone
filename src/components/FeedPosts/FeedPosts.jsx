import {
  Container,
  VStack,
  SkeletonCircle,
  Flex,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import useGetFeedPosts from "../../hooks/useGetFeedPosts";

function FeedPosts() {
  const { isLoading, posts } = useGetFeedPosts();
  return (
    <Container maxW={"container.small"} py={10} px={2}>
      {isLoading &&
        Array.from({ length: posts.length }, () => 1).map((_, index) => {
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
      {!isLoading &&
        posts.length > 0 &&
        posts.map((post) => <FeedPost post={post} key={post.id} />)}
      {!isLoading && posts.length === 0 && (
        <>
          <Text fontSize={"md"} color={"red.400"} textAlign={"center"}>
            Looks like you din&apos;t have any friends.
          </Text>
        </>
      )}
    </Container>
  );
}

export default FeedPosts;
