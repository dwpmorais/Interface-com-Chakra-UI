import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading, Image,
  Text,
} from '@chakra-ui/react'
import { Header } from '../components/Header'
import { IconsCategory } from '../components/IconsCategory'
import { Slider } from '../components/Slider'

export default function Home() {
  return (
    <Box>
      <Header/>

      {/* Hero Image */}
      <Flex
        w="100%"
        background="url('/images/bg-hero.jpg') no-repeat center"
        backgroundSize="cover"
        height={{ base: "170px" , md: "335px" }}
        direction="column"
      >
        <Container maxW="container.xl"  height="100%">
          <Grid templateColumns={{ base: "repeat(1, 1fr)" , md: "repeat(2, 1fr)" }} gap={10} height="100%">
            <GridItem
              w="100%"
              h="100%"
              display="flex"
              justifyContent="center"
              flexDirection="column"
            >
              <Heading
                as='h3'
                fontSize={{ base: "20px" , md: "36px" }}
                lineHeight={{ base: "30px" , md: "54px" }}
                fontWeight="500"
                color={'gray.100'}
              >
                5 Continentes, <br/>
                infinitas possibilidades.
              </Heading>

              <Text
                fontSize={{ base: "14px" , md: "20px" }}
                lineHeight={{ base: "21px" , md: "30px" }}
                fontWeight="normal"
                color={'gray.200'}
                mt={{ base: "8px" , md: "0" }}
              >
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.
              </Text>
            </GridItem>

            <GridItem
              w="100%"
              h="100%"
              display={{ base: "none" , md: "flex" }}
              justifyContent="center"
              flexDirection="column"
            >
              <Image
                margin="0 auto"
                height="270px"
                src="./images/airplane.png"
                position="relative"
                top="60px"
              />
            </GridItem>
          </Grid>
        </Container>
      </Flex>

      {/* Categorias */}

      <Container maxWidth={1160} mx="auto" >
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)" , md: "repeat(5, 1fr)" }}
          gap={{ base: "0" , md: "20" }}
          w="100%"
          className="features"
          my={{ base: "36px" , md: "115px" }}
        >
          <IconsCategory image_icon="./icons/cocktail.svg" title="vida noturna" />
          <IconsCategory image_icon="./icons/surf.svg" title="praia" />
          <IconsCategory image_icon="./icons/building.svg" title="moderno" />
          <IconsCategory image_icon="./icons/museum.svg" title="clássico"  />
          <IconsCategory image_icon="./icons/earth.svg" title="e mais..." rowSpan={2} colSpan={2} />
        </Grid>
        <Heading
          as='h3'
          fontSize={{ base: "20px" , md: "36px" }}
          lineHeight={{ base: "30px" , md: "54px" }}
          fontWeight="500"
          color={'gray.500'}
          textAlign="center"
          mt={{ base: "60px" , md: "52px" }}
          mb={{ base: "24px" , md: "52px" }}
        >
          Vamos nessa? <br/>
          Então escolha seu continente.
        </Heading>

        <Box mx="-16px" mb="30px">
          <Slider />
        </Box>

      </Container>
    </Box>
  )
}
