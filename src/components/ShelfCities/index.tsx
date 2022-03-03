import {
  Box,
  Flex,
  GridItem, Heading,
  Image,
  Text,
} from '@chakra-ui/react'

interface ShelfCitiesProps {
  photo: string;
  city: string;
  country: string;
  flag: string;
}

export function ShelfCities ({ photo, city, country, flag }: ShelfCitiesProps)  {
  return (
    <GridItem>
      <Box>
        <Image
          margin="0 auto"
          src={photo}
          alt={city}
        />

        <Flex background={'white.0'} border="1px solid rgba(255, 186, 8, 0.5)" alignItems="center" maxWidth="256px" margin="0 auto">
          <Box
            display="flex"
            flexDirection="column"
            padding="18px 24px"
            w="80%"
          >
            <Heading
              as="h5"
              fontSize={{ base: "24px" , md: "20px" }}
              lineHeight={{ base: "36px" , md: "25px" }}
              fontWeight="600"
              fontFamily={'Barlow, sans-serif'}
              color={'gray.500'}
              mb="12px"
            >
              {city}
            </Heading>

            <Text
              fontSize={{ base: "18px" , md: "16px" }}
              lineHeight={{ base: "27px" , md: "26px" }}
              fontWeight="500"
              fontFamily={'Barlow, sans-serif'}
              color={'gray.500'}
            >
              {country}
            </Text>
          </Box>
          <Box w="20%">
            <Image m="0" src={flag} alt={country}/>
          </Box>
        </Flex>
      </Box>
    </GridItem>
  )
}
