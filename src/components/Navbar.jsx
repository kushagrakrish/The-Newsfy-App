import {
  Box,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = [
  "General",
  "Bussiness",
  "Teach",
  "Entertainment",
  "Health",
  "Science",
  "Crypto",
];

const NavLink = ({ children }) => (
  <Link
    className='text-lg'
    // px={16}
    py={2}
    _hover={{
      fontWeight: "600",
      textDecoration: "underline",
      textDecorationColor: "orange.400",
      textDecorationThickness: "1.5px",
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box>
        <div>
          <div className='flex items-center justify-start ml-4'>
            <IconButton
              size={"lg"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
          </div>
          <div className='py-2 flex items-center justify-around  '>
            <HStack display={{ base: "none", md: "flex", lg: "flex" }}>
              <div className='flex items-center justify-around gap-20 md:gap-10 md:text-base'>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </div>
            </HStack>
          </div>
          {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
              <Stack paddingLeft={"6"} as={"nav"} spacing={4}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </div>
      </Box>
    </>
  );
}
