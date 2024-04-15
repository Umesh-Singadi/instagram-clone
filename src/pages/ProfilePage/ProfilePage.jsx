import {
  Container,
  Flex,
  Link,
  Skeleton,
  SkeletonCircle,
  Text,
  VStack,
} from "@chakra-ui/react";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileTabs from "../../components/Profile/ProfileTabs";
import ProfilePosts from "../../components/Profile/ProfilePosts";
import { useParams } from "react-router-dom";
import useGetUserProfileByName from "../../hooks/useGetUserProfileByName";
import { Link as RouterLink } from "react-router-dom";

function ProfilePage() {
  const { username } = useParams();
  const { isLoading, userProfile } = useGetUserProfileByName(username);
  const userNotFount = !isLoading && !userProfile;
  if (userNotFount) {
    return <UserNotFound />;
  }
  return (
    <Container maxW={"container.lg"}>
      <Flex
        py={10}
        px={8}
        pl={{ base: 4, md: 10 }}
        maxW={"full"}
        flexDirection={"column"}>
        {!isLoading && userProfile && <ProfileHeader />}
        {isLoading && <ProfileHeaderSkeleton />}
      </Flex>
      <Flex
        maxW={"full"}
        mx={"auto"}
        borderTop={"1px solid"}
        borderColor={"whiteAlpha.300"}
        flexDirection={"column"}>
        <ProfileTabs />
        <ProfilePosts />
      </Flex>
    </Container>
  );
}

export default ProfilePage;

function ProfileHeaderSkeleton() {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      flexDir={{ base: "column", sm: "row" }}
      justify={"center"}
      align={"center"}
      py={12}>
      <SkeletonCircle size={32} />
      <VStack
        align={{ base: "center", sm: "flex-start" }}
        gap={2}
        mx={"auto"}
        flex={1}>
        <Skeleton h={"6"} w={"300px"} />
        <Skeleton h={"6"} w={"150px"} />
      </VStack>
    </Flex>
  );
}

function UserNotFound() {
  return (
    <Flex flexDir={"column"} alignItems={"center"} mx={"auto"}>
      <Text fontSize={"2xl"}>User not Found</Text>
      <Link
        as={RouterLink}
        top={"/"}
        mx={"auto"}
        w={"max-content"}
        color={"blue.500"}>
        Go home
      </Link>
    </Flex>
  );
}
