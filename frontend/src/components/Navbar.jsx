import { Button, Container, Flex, HStack, Text, useColorMode, useColorModeValue} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlusCircle } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar = () => {
  const { colorMode, toggleColorMode} = useColorMode();
  return (
    <Container maxW={"1140px"} px={4} >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base:"column",
          sm:"row"
      }}
      >
        <Text
          fontSize={{ base: "22", sm: "28"}}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
        >
          <Link to={"/"}>Ay product store</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
          <Button bg={useColorModeValue("gray.400", "gray.700")}>
          <FaPlusCircle />
          </Button>
          </Link>
          <Button onClick={toggleColorMode} bg={useColorModeValue("gray.400", "gray.700")}>
             {colorMode === "light" ? <MdLightMode/> : <MdDarkMode/>}
          </Button>

        </HStack>



      </Flex>
    </Container>
  )
}

export default Navbar