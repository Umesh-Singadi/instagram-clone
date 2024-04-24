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
  const { getUSerProfile, isLoading, user, setUser } = useSearchUser();
  const searchRef = useRef(null);

  const handleSearchUser = (e) => {
    e.preventDefault();
    getUSerProfile(searchRef.current.value);
    setUser(null);
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
        <ModalContent bg={"black"} border={"1px solid gray"} maxW={"400px"}>
          <ModalHeader>Search user</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSearchUser}>
              <FormControl>
                <FormLabel>Search user</FormLabel>
                <Input placeholder="Search for user.." ref={searchRef} />
              </FormControl>
              <Flex w={"full"} justify={"end"}>
                <Button
                  type="submit"
                  size={"sm"}
                  ml={"auto"}
                  my={4}
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
