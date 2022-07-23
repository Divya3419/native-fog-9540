import {
    Box,
    Checkbox,
    FormControl,
    Input,
    Text,
  } from "@chakra-ui/react";
  import React, { useReducer } from "react";
  import { Button } from "@chakra-ui/react";
  import { Link, useNavigate } from "react-router-dom";
  import { useDispatch } from "react-redux";
  import { register } from "../Redux/AuthReducer/action";
  import { REGISTER_SUCCESS } from "../Redux/AuthReducer/actionTypes";
  
  function reducer(state, action) {
    switch (action.type) {
      case "name":
        return {
          ...state,
          name: action.payload,
        };
      case "email":
        return {
          ...state,
          email: action.payload,
        };
      case "password":
        return {
          ...state,
          password: action.payload,
        };
      case "username":
        return {
          ...state,
          username: action.payload,
        };
        case "mobile":
        return {
          ...state,
          mobile: action.payload,
        };
      case "description":
        return {
          ...state,
          description: action.payload,
        };
      default:
        return state;
    }
  }
  
  const initState = {
    name: "",
    email: "",
    password: "",
    username: "",
    mobile:0,
    description: "",
  };
  
  const Register = () => {
    const [state, setter] = useReducer(reducer, initState);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //console.log(state)
  
    const SignUpHandler = () => {
      dispatch(register(state)).then((r) => {
        if (r === REGISTER_SUCCESS) {
          navigate("/login", { replace: true });
        }
      });
    };
  
   
  
    return (
      <Box width={"50%"} margin={"auto"}>
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
        <FormControl id={"name"} isRequired>
          <Input
            type={"text"}
            value={state.name}
            onChange={(e) => setter({ type: "name", payload: e.target.value })}
            padding={"12px 14px"}
            borderRadius="0"
            border={"1px solid #12284c"}
            width="100%"
            lineHeight={"normal"}
            resize="none"
            transition={"border-color .1s ease-in-out"}
            background="transparent"
            placeholder="Name*"
            height={"45px"}
          />
        </FormControl>
        <br />
        <FormControl id="username" isRequired>
          <Input
            type="text"
            value={state.username}
            onChange={(e) =>
              setter({ type: "username", payload: e.target.value })
            }
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
        <FormControl id="email" isRequired>
          <Input
            type="email"
            value={state.email}
            onChange={(e) => setter({ type: "email", payload: e.target.value })}
            padding={"12px 14px"}
            borderRadius="0"
            border={"1px solid #12284c"}
            width="100%"
            lineHeight={"normal"}
            resize="none"
            transition={"border-color .1s ease-in-out"}
            background="transparent"
            placeholder="Email*"
            height={"45px"}
          />
        </FormControl>
        <br />
        <FormControl id="password" isRequired>
          <Input
            type={'password'}
            value={state.password}
            onChange={(e) =>
              setter({ type: "password", payload: e.target.value })
            }
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
        <br/>
  
        <FormControl id="mobile" isRequired>
          <Input
             type="number"
             value={state.mobile}
             onChange={(e) =>
               setter({ type: "mobile", payload: e.target.value })
             }
            borderRadius="0"
            border={"1px solid #12284c"}
            width="100%"
            lineHeight={"normal"}
            resize="none"
            placeholder="Mobile*"
            transition={"border-color .1s ease-in-out"}
            background="transparent"
            height={"45px"}
            outline={"black"}
          />
        </FormControl>
        <br/>
  
        <FormControl id="description" isRequired>
          <Input
             type="text"
             value={state.description}
             onChange={(e) =>
               setter({ type: "description", payload: e.target.value })
             }
            borderRadius="0"
            border={"1px solid #12284c"}
            width="100%"
            lineHeight={"normal"}
            resize="none"
            transition={"border-color .1s ease-in-out"}
            background="transparent"
            placeholder="Description*"
            height={"45px"}
            outline={"black"}
          />
        </FormControl>
  
        <Text
          fontSize={"12px"}
          textAlign={"right"}
          paddingTop="10px"
          color={"#64728A"}
        >
          *Indicates Required Field
        </Text>
  
        <Box
          width={"100%"}
          height={"60px"}
          border="1px solid black"
          background={"#D1E8EE"}
        >
          <input type={'checkbox'} style={{float:"left",marginTop:"5px",width:"30px"}}/>
          <Box display={'flex'} color='#314766'>
            <Box>BLUEWARDS</Box>
            <Box>Earn $10 for every $250 you spend, plus FREE birthday gifts & treatments!</Box>
  
          </Box>
        </Box>
        <Text color={"#797979"}>
          By continuing, you agree to Bluemercury's
          <span style={{ textDecoration: "underline" }}> Privacy Practices</span>
        </Text>
        <Button
          background={"#12284C"}
          color="white"
          borderRadius={"none"}
          width={"40%"}
          marginTop={"1.5rem"}
          onClick={SignUpHandler}
        >
          CREATE ACCOUNT
        </Button>
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
  