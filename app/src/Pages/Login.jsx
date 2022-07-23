import { Box, Input, Text,FormControl } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import React,{useState} from "react";
import { Link } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import { login } from "../Redux/AuthReducer/action";
import { LOGIN_SUCCESS } from "../Redux/AuthReducer/actionTypes";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const isLoading = useSelector((state) => state.AuthReducer.isLoading);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = () => {
    if (username && password) {
      const params = {
        username,
        password,
      };
      dispatch(login(params)).then((res) => {
        if (res === LOGIN_SUCCESS) {
          navigate("/", { replace: true });
        }else{
          //errorhandle
        }
      });
    }
  };
  return (
    <Box width={"50%"} margin={"auto"}>
      <Box fontSize={"35px"}>LOGIN</Box>
      <Box
        fontFamily={"Montserrat Light,sans-serif"}
        letterSpacing="0.2px"
        color={"#64728A"}
        fontSize="17px"
        width={"75%"}
        margin="auto"
        marginTop={"1.5rem"}
        marginBottom={'1.5rem'}
      >
        Please enter your e-mail and password:
      </Box>
      <FormControl id="username" isRequired>
        <Input
         type="text"
         value={username}
         onChange={(e) => setUsername(e.target.value)}
          padding={"12px 14px"}
          borderRadius="0"
          border={"1px solid #12284c"}
          width="100%"
          lineHeight={"normal"}
          resize="none"
          transition={"border-color .1s ease-in-out"}
          background="transparent"
          placeholder="UserName*"
          height={"45px"}
        />
        </FormControl>
        <br />
        <FormControl id="password">
          <Input
           type="password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
            borderRadius="0"
            border={"1px solid #12284c"}
            width="100%"
            lineHeight={"normal"}
            resize="none"
            transition={"border-color .1s ease-in-out"}
            background="transparent"
            placeholder="Password*"
            height={"45px"}
            outline={"black"}
          />
    </FormControl>
        <Button
        onClick={loginHandler}
        isLoading={isLoading}
          marginTop={"2rem"}
          width="100%"
          background={"#12284C"}
          color="white"
          borderRadius={"0"}
        >
          LOGIN
        </Button>
        <Text marginTop={"1.5rem"} fontSize="14px" color={"#64728A"}>
          Don't have an account? <Link to="/register">Create one</Link>
        </Text>
      
    </Box>
  );
};

export default Login;
