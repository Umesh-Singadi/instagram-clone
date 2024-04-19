import { Box, Flex, Link, Tooltip, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { InstagramMobileLogo, InstagramLogo } from "../../assets/constants";

import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
import SidebarItems from "./SidebarItems";

function Sidebar() {
  const { handleLogout, isLoggingOut } = useLogout();

  return (
    <Box
      h="100vh"
      borderRight="1px solid"
      borderColor={"whiteAlpha.300"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}>
      <Flex direction={"column"} gap={10} w={"full"} h={"full"}>
        <Link
          top={"/"}
          as={RouterLink}
          pl={2}
          display={{ base: "none", md: "block" }}
          cursor={"pointer"}>
          <InstagramLogo />
        </Link>
        <Link
          top={"/"}
          as={RouterLink}
          pl={2}
          display={{ base: "block", md: "none" }}
          cursor={"pointer"}
          borderRadius={6}
          w={10}
          _hover={{
            bg: "whiteAlpha.200",
          }}>
          <InstagramMobileLogo />
        </Link>
        <Flex direction={"column"} gap={5} h={"100%"} cursor={"pointer"}>
          <SidebarItems />
          <Tooltip
            label={"Logout"}
            hasArrow
            placement="right"
            ml={1}
            openDelay={500}
            display={{ base: "block", md: "none" }}>
            <Flex
              onClick={handleLogout}
              gap={4}
              alignItems={"center"}
              _hover={{ bg: "whiteAlpha.400" }}
              borderRadius={6}
              p={2}
              w={{ base: 10, md: "full" }}
              justifyContent={{ base: "center", md: "flex-start" }}
              mt={"auto"}>
              <BiLogOut size={25} />
              <Button
                variant={"ghost"}
                _hover={{ bg: "transparent" }}
                isLoading={isLoggingOut}
                display={{ base: "none", md: "block" }}>
                Logout
              </Button>
            </Flex>
          </Tooltip>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Sidebar;
