import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../Redux/AuthReducer/action";
import { REGISTER_SUCCESS } from "../Redux/AuthReducer/actionTypes";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const[lastN,setLastN]= useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = {
      name: name,
      email: email,
      password: password,
      lastN:lastN
    };
    dispatch(register(payload)).then((r) => {
      console.log(r);
      if (r.type === REGISTER_SUCCESS) {
        navigate("/login", { replace: true });
      } else {
        alert("invalid");
      }
    });
  };

  return (
    <Box width={"35%"} margin={"auto"}>
      <Box fontSize={"35px"}>CREATE ACCOUNT</Box>
      <Box
        fontFamily={"Montserrat Light,sans-serif"}
        letterSpacing="0.2px"
        color={"#64728A"}
        fontSize="17px"
        width={"75%"}
        margin="auto"
        marginTop={"1.5rem"}
      >
        Complete the form below to create a bluemercury.com account.
      </Box>

      <form onSubmit={handleSubmit}>
        <Stack spacing={5}>
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Box>
          <Input
            placeholder="Name"
            isRequired
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Box>

        <Box>
          <Input
            placeholder="Last Name"
            isRequired
            type="text"
            value={lastN}
            onChange={(e) => {
              setLastN(e.target.value);
            }}
          />
        </Box>

        <InputGroup>
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <InputRightElement h={"full"}></InputRightElement>
        </InputGroup>
        </Stack>
        <Stack spacing={10} pt={6}>
          <Button
            loadingText="Submitting"
            size="lg"
            bg={"blue.700"}
            color={"white"}
            _hover={{
              bg: "blue.400",
            }}
            type="submit"
            w="50%"
            margin="auto"
          >
            Create Account
          </Button>
        </Stack>
      </form>

      <Text color={"#797979"} pt={6}>
        By continuing, you agree to Bluemercury's
        <span style={{ textDecoration: "underline" }}>
          <a href="https://bluemercury.com/pages/privacy-policy#privacyHowCollect">
            Privacy Practics
          </a>
        </span>
      </Text>

      <Text color={"#797979"} marginTop="1.5rem" fontSize="14px">
        Already have a bluemercury.com account?
        <span style={{ textDecoration: "underline" }}>
          <Link to="/login"> Sign In</Link>
        </span>
      </Text>
    </Box>
  );
};

export default Register;
