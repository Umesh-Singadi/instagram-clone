import { Box, Flex, Tooltip } from "@chakra-ui/react";
import { NotificationsLogo } from "../../assets/constants";

function Notifications() {
  return (
    <Tooltip
      label={"Notifications"}
      hasArrow
      placement="right"
      ml={1}
      openDelay={500}
      display={{ base: "block", md: "none" }}>
      <Flex
        display={"flex"}
        alignItems={"center"}
        gap={4}
        _hover={{ bg: "whiteAlpha.400" }}
        borderRadius={5}
        p={2}
        w={{ base: 10, md: "full" }}
        justifyContent={{ base: "center", md: "flex-start" }}>
        <NotificationsLogo />
        <Box display={{ base: "none", md: "block" }}>Notifications</Box>
      </Flex>
    </Tooltip>
  );
}

export default Notifications;
