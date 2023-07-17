import { Box, Button, HStack, Heading, Input, Stack, VStack } from '@chakra-ui/react'
import { AiOutlineSend } from 'react-icons/ai'
import { Text } from '@chakra-ui/layout'
import {AiFillGithub} from "react-icons/ai"
import React from 'react'

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} minH={"40"} p="16" color={"white"}>
        <Stack direction={["column","row"]} >
            
            <VStack alignItems={"stretch"} w={"full"} px={"4"}>
                <Heading size={"md"} textTransform={"uppercase"} textAlign={"center"}>Follow us</Heading>
                <HStack
                borderBottom={"2px solid white"} p={"2"}>
                    <Input placeholder={"Enter Email"} border={"none"} borderRadius={"none"} focusBorderColor='none'/>
                    <Button p={"0"} colorScheme={"purple"} borderRadius={"0 20px 20px 0"} variant={"ghost"}>
                        <AiOutlineSend size={"22"}/>
                    </Button>
                </HStack>
            </VStack>

            <VStack w={"full"} borderLeft={["none","1px solid white"]} borderRight={["none","1px solid white"]}>
                <Heading textAlign={"center"} textTransform={"uppercase"}>Techlight</Heading>
                <Text>All rights reserved</Text>
            </VStack>

            <VStack w={"full"} >
                <Heading size={"md"} textTransform={"uppercase"}>Follow us</Heading>
                <Button variant={"link"} colorScheme='whiteAlpha'>
                    <a href="https://github.com/The13bit"><AiFillGithub size={"50"} /></a>
                </Button>
                <Text textTransform={"uppercase"}>Created by anas fodkar</Text>
                


            </VStack>



            
            </Stack>

    </Box>
  )
}

export default Footer