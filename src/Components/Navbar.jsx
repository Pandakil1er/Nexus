import { Flex, HStack, Heading, Link, Spacer, Text } from "@chakra-ui/react";
// import { useEffect, useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <Flex
        hideBelow={"md"}
        as={"nav"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        backgroundColor={"background"}
        w={"100%"}
        color={"foreground"}
        h={"10vh"}
        gap={"1rem"}
        p={"0 4rem 0 3rem"}
        minWidth={"800px"}
      >
        <Link as={ReactRouterLink} to="/">
          <Heading>logo</Heading>
        </Link>
        <Spacer />
        <HStack fontSize={"md"} spacing={"1.5rem"}>
          <Link as={ReactRouterLink} to="/">
            <Text>Home</Text>
          </Link>
          <Link as={ReactRouterLink} to="/about">
            <Text>About</Text>
          </Link>
          <Link as={ReactRouterLink} to="/products">
            <Text>Products</Text>
          </Link>

          <Link as={ReactRouterLink} to="/investors">
            <Text>Investors</Text>
          </Link>
          <Link as={ReactRouterLink} to="/foundation">
            <Text>Foundation</Text>
          </Link>
          <Link as={ReactRouterLink} to="/media">
            <Text>Media</Text>
          </Link>
          <Link as={ReactRouterLink} to="/careers">
            <Text>Careers</Text>
          </Link>
          <Link as={ReactRouterLink} to="/contactus">
            <Text>Contact us</Text>
          </Link>
        </HStack>
      </Flex>
    </>
  );
}
