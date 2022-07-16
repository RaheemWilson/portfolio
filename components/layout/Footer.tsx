import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { ReactNode } from "react";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("#11111", "transparent")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("white", "transparent")}
      color={useColorModeValue("#111111", "white")}
      position="fixed"
      bottom={0}
      px={[4, 8]}
      width="100%"
    >
      <Stack
        maxW={"8xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        {/* <Text>© 2022 Raheem Wilson. All rights reserved</Text> */}
        <Link href="mailto:raheemzwilson@gmail.com">raheemzwilson@gmail.com</Link>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Twitter"} href={"https://twitter.com/zackiechan_dev"}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={"Github"} href={"https://github.com/RaheemWilson"}>
            <FaGithub />
          </SocialButton>
          <SocialButton label={"LinkedIn"} href={"https://www.linkedin.com/in/raheemwilson/"}>
            <FaLinkedin />
          </SocialButton>
        </Stack>
      </Stack>
    </Box>
  );
}
