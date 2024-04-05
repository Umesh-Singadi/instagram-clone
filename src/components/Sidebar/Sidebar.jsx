import { Box, Flex, Link, Avatar, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {
  InstagramMobileLogo,
  CreatePostLogo,
  SearchLogo,
  NotificationsLogo,
  InstagramLogo,
} from "../../assets/constants";
import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";

function Sidebar() {
  const sidebarItems = [
    { icon: <AiFillHome size={25} />, text: "Home", link: "/" },
    { icon: <SearchLogo />, text: "Search" },
    { icon: <NotificationsLogo />, text: "Notifications" },
    { icon: <CreatePostLogo />, text: "Create" },
    {
      icon: <Avatar size={"sm"} name="Umesh Singadi" src="/profile-pic.png" />,
      text: "Profile",
      link: "/umeshsingadi",
    },
  ];

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
          {sidebarItems.map((item, index) => (
            <Tooltip
              key={index}
              label={item.text}
              hasArrow
              placement="right"
              ml={1}
              openDelay={500}
              display={{ base: "block", md: "none" }}>
              <Link
                display={"flex"}
                to={item.link || null}
                as={RouterLink}
                alignItems={"center"}
                gap={4}
                _hover={{ bg: "whiteAlpha.400" }}
                borderRadius={5}
                p={2}
                w={{ base: 10, md: "full" }}
                justifyContent={{ base: "center", md: "flex-start" }}>
                {item.icon}
                <Box display={{ base: "none", md: "block" }}>{item.text}</Box>
              </Link>
            </Tooltip>
          ))}
          <Tooltip
            label={"Logout"}
            hasArrow
            placement="right"
            ml={1}
            openDelay={500}
            display={{ base: "block", md: "none" }}>
            <Link
              display={"flex"}
              to={"/auth"}
              as={RouterLink}
              gap={4}
              alignItems={"center"}
              _hover={{ bg: "whiteAlpha.400" }}
              borderRadius={6}
              p={2}
              w={{ base: 10, md: "full" }}
              justifyContent={{ base: "center", md: "flex-start" }}
              mt={"auto"}>
              <BiLogOut size={25} />
              <Box display={{ base: "none", md: "block" }}> Logout</Box>
            </Link>
          </Tooltip>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Sidebar;
