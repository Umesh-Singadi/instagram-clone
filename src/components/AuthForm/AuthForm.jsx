import {
  Box,
  VStack,
  Image,
  Input,
  Button,
  Flex,
  Text,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleAuth() {
    if (!inputs.email || !inputs.password) {
      alert("Please fill all the fields");
      return;
    }
    navigate("/");
    setInputs({
      email: "",
      password: "",
      confirmPassword: "",
    });
  }

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={8} p={5}>
        <VStack spacing={4}>
          <Image src="/logo.png" h={24} cursor={"pointer"} alt="Instagram" />
          <Input
            placeholder="Email"
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            type="email"
            fontSize={14}
          />
          <InputGroup>
            <Input
              placeholder="Password"
              type={show1 ? "text" : "password"}
              fontSize={14}
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
            <InputRightElement>
              <Button
                size={"sm"}
                h={8}
                m={4}
                fontSize={10}
                onClick={() => setShow1(!show1)}>
                {show1 ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          {!isLogin ? (
            <InputGroup>
              <Input
                placeholder="Confirm Password"
                type={show2 ? "text" : "password"}
                fontSize={14}
                value={inputs.confirmPassword}
                onChange={(e) =>
                  setInputs({ ...inputs, confirmPassword: e.target.value })
                }
              />
              <InputRightElement>
                <Button
                  size={"sm"}
                  h={8}
                  m={4}
                  fontSize={10}
                  onClick={() => setShow2(!show2)}>
                  {show2 ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          ) : null}
          <Button
            w={"full"}
            colorScheme="blue"
            size={"sm"}
            fontSize={14}
            onClick={handleAuth}>
            {isLogin ? "Log in" : "Sign up"}
          </Button>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            gap={1}
            w={"full"}
            my={4}>
            <Box flex={2} h={"1px"} bg={"gray.400"} p={0} />
            <Text mx={1} color={"white"}>
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            cursor={"pointer"}>
            <Image src="/google.png" w={5} alt="Google image" />
            <Text color={"blue.200"} mx={4}>
              Log in with Google
            </Text>
          </Flex>
        </VStack>
      </Box>
      <Box border={"1px solid gray"} borderRadius={4} p={5}>
        <Flex alignItems="center" justifyContent="center">
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have an account" : "Already have an account"}
          </Box>
          <Box
            color={"blue.500"}
            cursor={"pointer"}
            onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign up" : "Log in"}
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default AuthForm;
