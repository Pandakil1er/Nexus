import { Box, Center, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <Flex
      textAlign={"center"}
      margin={["3rem 0 3rem 0", null, "3rem 0 0 0"]}
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Heading>About us</Heading>
      <Center p={"3rem 0 3rem 0"}>
        <Box
          width={"10rem"}
          height={"0.1rem"}
          bgColor={"foreground"}
          borderRadius={"1rem"}
        ></Box>
      </Center>
      <Heading
        size={"md"}
        color={"#BEB7A4"}
        width={["80%", null, "60%"]}
        marginBottom={"5%"}
      >
        An exclusive connection to Italian artisans for more meaningful buying.
        Menswear and accessories crafted for you in numerous colours and refined
        materials.
      </Heading>
      <Heading size={"md"}>Who we are</Heading>
      <br />
      <Text width={"70%"}>
        collection of timeless designs that we truly love. Our core collection
        is rarely available immediately and always available on demand. Anything
        not in stock, you garment or accessory exactly as you want, to your
        perfection, with no compromise on style or fit! Visit us in our
        Bloomsbury store to enj
      </Text>
      <br />
      <Text width={"70%"} marginBottom={"5%"}>
        Starting in 2014 out of our family workshop in Como, Italy; we have
        teamed up with 8 fellow Italian artigiani or craftsmen, all very eager
        to showcase their artisanal heritage and quintessential designs. (read
        more on Our Artisans) From hand-hemmed tips to hand-stitched shoulders,
        our artisans craft all 40 Colori garments and accessories according to
        the highest quality standards to create hard-wearing everyday pieces for
        a timeless casual elegance. To make this happen, we provide them with
        the canvas to turn into their next creation. We travel around Italy,
        visiting mills and merchants to find the best fabrics and yarns, making
        sure they are natural, colourful and responsibly sourced. (read more on
        Our Materials)
      </Text>

      <Heading size={"md"}>What we do</Heading>
      <br />
      <Text width={"70%"}>
        We opted for a direct-to-artisan distribution model focused on
        made-to-order and custom services to ensure that we produce as much as
        possible what is needed exactly as needed by the final customer with
        less compromises and wasteful use of resources. All with honest pricing,
        because more meaningful buying should not be a
      </Text>
      <br />
      <Text width={"70%"}>
        collection of timeless designs that we truly love. Our core collection
        is rarely available immediately and always available on demand. Anything
        not in stock, you can have it Made to Order and our artisans will craft
        any sold out size or style exclusively for you in 3-6 weeks. (read more
        on Made to Order) If you are feeling creative or if you can&apost find
        the With our Custom Made and Made to Measure services, you can customize
        our designs and have our artisans craft each garment or accessory
        exactly as you want, to your perfection, with no compromise on style or
        fit! Visit us in our Bloomsbury store to enj
      </Text>

      <br />
      <Text width={"70%"} marginBottom={"5%"}>
        style or fit that you are looking for, our custom offer is the answer.
        oy the full 40 Colori experience! Alternatively, book an online
        consultation to get started with your custom project. (read more on
        Custom Made) (read more on Made to Measure)
      </Text>

      <SimpleGrid columns={2} h={["40vh", null, "80vh"]} spacing={"0.5rem"}>
        <Box h={["20vh", null, "40vh"]} width={"100%"}>
          <img
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
            alt="k"
          />
        </Box>
        <Box h={["20vh", null, "40vh"]} width={"100%"}>
          <img
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
            alt="p"
          />
        </Box>
        <Box h={["20vh", null, "40vh"]} width={"100%"}>
          <img
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
            alt="p"
          />
        </Box>
        <Box h={["20vh", null, "40vh"]} width={"100%"}>
          <img
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="
            alt="p"
          />
        </Box>
      </SimpleGrid>
    </Flex>
  );
}
