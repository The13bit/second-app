import { Box, Container, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Image } from '@chakra-ui/image'
import { Text } from '@chakra-ui/layout'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'
import { transform } from 'framer-motion';

const headingobject =  {
    pos:'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    textTransform: 'uppercase',
    p:"4",
    size:"4xl"
};


const Home = () => {
  return (
    <Box>
        <MyCarousel />

        <Container maxWidth={'container.xl'} minH={"100vh"}  p={"16"}>
            <Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={"2px solid"} margin={"auto"}>Services</Heading>

            <Stack h={"full"} p={"4"} alignItems={"center"} direction={["column","row"]}>

            <Image src={img5} h={["40","400"]} filter={"hue-rotate(-130deg)"} />
            <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={"center"}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, maiores!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic impedit, velit voluptatibus magnam voluptates minima eos veniam amet laborum neque, quis dolorem ullam earum tenetur expedita iusto nobis. Cum, voluptas.

            </Text>
        </Stack>
        </Container>

        


    </Box>
  )
}
const MyCarousel =() => (
    <Carousel autoPlay infiniteLoop interval={1000} showArrows={false} showStatus={false}>
        <Box w={"full"} h={"100vh"}>
            <Image src={img1} />
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingobject}>Lorem</Heading>
        </Box>

        <Box w={"full"} h={"100vh"}>
            <Image src={img2} />
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingobject}>Gaming</Heading>
        </Box>

        <Box w={"full"} h={"100vh"}>
            <Image src={img3} />
            <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingobject}>COnsole Gaming</Heading>
        </Box>

        <Box w={"full"} h={"100vh"}>
            <Image src={img4} />
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingobject}>Lorem</Heading>
        </Box>

    </Carousel>
) 
   

export default Home