import { Box, Heading, Text, Stack, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { dataArray } from "../assests/data";

export default function NewsCard() {
  const navigate = useNavigate();
  const MAX_LENGTH = 250;
  return (
    <div className='flex gap-6 py-5 my-0 mx-auto items-center justify-evenly flex-wrap w-[70%]'>
      {dataArray?.map((data, i) => (
        <Box
          _hover={{
            boxShadow: "3xl",
          }}
          maxW={"400px"}
          w={"full"}
          boxShadow={"2xl"}
          rounded={"md"}
          p={6}
          marginBottom={6}
          overflow={"hidden"}
        >
          <Box h={"210px"} mt={-2} mx={-6} mb={2} pos={"relative"}>
            <img className='px-6' src={data.imageLink} alt='' />
          </Box>
          <Stack>
            <Text
              color={"green.500"}
              textTransform={"uppercase"}
              fontWeight={800}
              fontSize={"sm"}
              letterSpacing={1.1}
            >
              {data.blogType}
            </Text>
            <Heading fontSize={"2xl"} fontFamily={"body"}>
              {data.heading}
            </Heading>
            <Text color={"gray.500"}>
              {data.paragraph.length > MAX_LENGTH ? (
                <div>
                  {`${data.paragraph.substring(0, MAX_LENGTH)}......`}
                  <div className='text-center mt-4'>
                    <Button
                      onClick={() => navigate(`/newsDetails/${data.newsId}`)}
                      width={"full"}
                      colorScheme='blue'
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              ) : (
                <p>{data.paragraph}</p>
              )}
            </Text>
          </Stack>
        </Box>
      ))}
    </div>
  );
}
