import { Button } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dataArray } from "../assests/data";

const CardDetails = () => {
  const params = useParams();
  console.log(params.newsId);
  const navigate = useNavigate();
  useEffect(() => {}, [params]);
  return (
    <>
      {dataArray?.map((data, i) =>
        data.newsId == params.newsId ? (
          <div className='flex items-start justify-between w-2/3 my-12 mx-auto gap-10 md:flex-col md:w-[100%] md:items-center xs:flex-col xs:w-[100%] xs:items-center '>
            <img className='w-[40%] rounded-md ' src={data.imageLink} alt='' />
            <div className='md:px-8 md:py-4 xs:px-8 xs:py-4'>
              <h1 className='text-2xl font-semibold mb-4 text-orange-600'>
                {data.heading}
              </h1>
              <h3 className='font-lg font-semibold my-2 mr-2 ml-2'>
                By:Crypto Group | <span className='mr-2 ml-2'>Source |</span>
              </h3>
              <p className='text-lg font-normal text-justify text-gray-600 '>
                {data.paragraph}
              </p>
              <Button
                className='my-4 w-32'
                onClick={() => navigate("/")}
                colorScheme='blue'
              >
                Go Back
              </Button>
            </div>
          </div>
        ) : (
          ""
        )
      )}
    </>
  );
};

export default CardDetails;
