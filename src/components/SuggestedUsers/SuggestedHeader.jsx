import { Avatar, Flex, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function SuggestedHeader() {
  return (
    <Flex justify={"space-between"} w={"full"} alignItems={"center"}>
      <Flex gap={2} alignItems={"center"}>
        <Avatar src="/profile-pic.png" size={"md"} name="Umesh" />
        <Text>Umesh Singadi</Text>
      </Flex>
      <Link
        as={RouterLink}
        to={"/auth"}
        style={{ textDecoration: "none" }}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.500"}
        cursor={"pointer"}>
        Log Out
      </Link>
    </Flex>
  );
}

export default SuggestedHeader;
