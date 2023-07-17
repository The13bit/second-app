import { Container, Heading, Input, Button, VStack, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Container maxH={"container.xl"} h={"100vh"} p={"16"}>

        <form>
            <VStack alignItems={"stretch"} spacing={"8"} w={["full","96"]} m={"auto"} my={"16"}>
                <Heading>Welcome back</Heading>
                <Input placeholder={"Email"} type={"email"} required focusBorderColor='purple.500' />
                <Input placeholder={"Password"} type={"password"} required focusBorderColor='purple.500' />
                <Button variant={"link"} alignSelf={"Flex-end"}>
                    <Link to="/forgot-password" >Forgot Password?</Link>
                </Button>
                <Button colorScheme='purple'>
                    <Link to="/">Login</Link>
                </Button>
                
                
                <Button variant={"link"} colorScheme='purple' >
                    <Link to="/signup"  >Signup</Link>
                </Button>
                
                

            </VStack>
        </form>
    </Container>
  )
}

export default Login