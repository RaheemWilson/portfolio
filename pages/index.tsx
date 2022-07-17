import {
  Stack,
  Heading,
  Box,
  Image,
  Center,
} from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Stack
      as={Box}
      textAlign={"center"}
      minHeight="100%"
    >
      <Center>
        <Image
          src={"/images/portfolio.png"}
          alt="I am Raheem Wilson"
          height={[300, 400]}
          width={[300, 400]}
        />
      </Center>
      <Heading
        fontWeight={600}
        fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
        lineHeight={"110%"}
      >
        I am a software developer from Jamaica.
      </Heading>
    </Stack>
  );
};

export default Home;
