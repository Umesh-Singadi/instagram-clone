import { Box, Grid, Skeleton, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ProfilePost from "./ProfilePost";

function ProfilePosts() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <Grid
      gap={1}
      templateColumns={{
        base: "repeat(1 ,1fr)",
        md: "repeat(3 ,1fr)",
      }}
      columnGap={1}>
      {isLoading &&
        Array.from({ length: 6 }, () => 1).map((item, index) => (
          <VStack key={index} align={"start"} gap={3}>
            <Skeleton w={"full"}>
              <Box h="300px">Content Wraps</Box>
            </Skeleton>
          </VStack>
        ))}
      {!isLoading && (
        <>
          <ProfilePost img="/img1.png" />
          <ProfilePost img="/img2.png" />
          <ProfilePost img="/img3.png" />
          <ProfilePost img="/img4.png" />
        </>
      )}
    </Grid>
  );
}

export default ProfilePosts;
