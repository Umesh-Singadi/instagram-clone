import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { SearchLogo } from "../../assets/constants";
import { useRef } from "react";
import useSearchUser from "../../hooks/useSearchUser";
import SuggestedUser from "../SuggestedUsers/SuggestedUser";

function Search() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUserProfile, isLoading, setUser, user } = useSearchUser();
  const searchRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    getUserProfile(searchRef.current.value);
  };
  return (
    <>
      <Tooltip
        label={"Search"}
        hasArrow
        placement="right"
        ml={1}
        openDelay={500}
        display={{ base: "block", md: "none" }}>
        <Flex
          alignItems={"center"}
          gap={4}
          _hover={{ bg: "whiteAlpha.400" }}
          borderRadius={6}
          p={2}
          w={{ base: 10, md: "full" }}
          justifyContent={{ base: "center", md: "flex-start" }}
          onClick={onOpen}>
          <SearchLogo />
          <Box display={{ base: "none", md: "block" }}>Search</Box>
        </Flex>
      </Tooltip>
      <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInLeft">
        <ModalOverlay />
        <ModalContent bg={"black"} w={"full"} p={4} border={"1px solid gray"}>
          <ModalHeader>Search user</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel>User name</FormLabel>
                <Input placeholder="Search user..." ref={searchRef} />
              </FormControl>
              <Flex w={"full"} justify={"flex-end"}>
                <Button
                  type="submit"
                  size={"sm"}
                  my={4}
                  ml={"auto"}
                  isLoading={isLoading}>
                  Search
                </Button>
              </Flex>
            </form>
            {user && <SuggestedUser user={user} setUser={setUser} />}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Search;
