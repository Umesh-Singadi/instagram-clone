import { Container, Flex } from "@chakra-ui/react";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileTabs from "../../components/Profile/ProfileTabs";
import ProfilePosts from "../../components/Profile/ProfilePosts";

function ProfilePage() {
  return (
    <Container maxW={"container.lg"}>
      <Flex
        py={10}
        px={8}
        pl={{ base: 4, md: 10 }}
        maxW={"full"}
        flexDirection={"column"}>
        <ProfileHeader />
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
