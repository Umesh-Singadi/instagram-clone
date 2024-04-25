import { Box, Flex, Grid, Skeleton, Text, VStack } from "@chakra-ui/react";
import ProfilePost from "./ProfilePost";
import useGetUserPosts from "../../hooks/useGetUsesPosts";
function ProfilePosts() {
  const { isLoading, posts } = useGetUserPosts();
  let noPostsFound = !isLoading && posts.length === 0;
  if (noPostsFound) return <NoPostsFound />;
  return (
    <Grid
      gap={1}
      templateColumns={{
        base: "repeat(1 ,1fr)",
        md: "repeat(3 ,1fr)",
      }}
      columnGap={1}>
      {isLoading &&
        Array.from({ length: posts.length }, () => 1).map((item, index) => (
          <VStack key={index} align={"start"} gap={3}>
            <Skeleton w={"full"}>
              <Box h="300px">Content Wraps</Box>
            </Skeleton>
          </VStack>
        ))}
      {!isLoading &&
        posts.map((post) => <ProfilePost post={post} key={post.key} />)}
    </Grid>
  );
}

export default ProfilePosts;

function NoPostsFound() {
  return (
    <Flex flexDir={"column"} alignItems={"center"} mx={"auto"} mt={10}>
      <Text size={"2xl"}>No posts found 🙅‍♂️</Text>
    </Flex>
  );
}
