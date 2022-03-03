import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading, HStack,
  Text,
} from '@chakra-ui/react'
import { Header } from '../../components/Header'
import { ShelfCities } from '../../components/ShelfCities'

export default function Home() {
  return (
    <Box>
      <Header/>

      {/* Hero Image */}
      <Flex
        w="100%"
        background="url('/images/europa/bg-europa.jpg') no-repeat center"
        backgroundSize="cover"
        height={{ base: "150px" , md: "500px" }}
      >
        <Container height="100%" maxWidth={1160}>
          <Box height="100%">
            <Flex
              w="100%"
              h="100%"
              display="flex"
              justifyContent={{ base: "center" , md: "left" }}
              alignItems={{ base: "center" , md: "end" }}
            >
              <Heading
                as='h3'
                fontSize={{ base: "28px" , md: "48px" }}
                lineHeight={{ base: "42px" , md: "72px" }}
                fontWeight="500"
                color={'gray.100'}
                mb={{ base: "0" , md: "60px" }}
              >
                Europa
              </Heading>
            </Flex>
          </Box>
        </Container>
      </Flex>

      {/* Categorias */}

      <Container maxWidth={1160} mx="auto" >
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)" , md: "repeat(2, 1fr)" }}
          gap={{ base: "0" , md: "20" }}
          w="100%"
          my={{ base: "24px" , md: "80px" }}
          alignContent="center"
          alignItems="center"
        >
          <GridItem>
            <Text
              fontSize={{ base: "14px" , md: "24px" }}
              lineHeight={{ base: "21px" , md: "36px" }}
              fontWeight="400"
              color={'gray.500'}
              textAlign="justify"
            >
              A Europa é, por convenção, um dos seis continentes do mundo.
              Compreendendo a península ocidental da Eurásia, a Europa geralmente
              divide-se da Ásia a leste pela divisória de águas dos montes Urais,
              o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
            </Text>

          </GridItem>
          <GridItem>
            <HStack justifyContent={{ base: "space-between" , md: "space-around" }} mt={{ base: "20px" , md: "0" }}>
              <Box>
                <Text
                  textAlign={{ base: "left" , md: "center" }}
                  fontSize={{ base: "24px" , md: "48px" }}
                  lineHeight={{ base: "32px" , md: "60px" }}
                  fontWeight="600"
                  color={'yellow.500'}
                >
                  50
                  <Text
                    as="span"
                    display="block"
                    fontSize={{ base: "18px" , md: "24px" }}
                    lineHeight={{ base: "27px" , md: "36px" }}
                    fontWeight={{ base: "400" , md: "600" }}
                    color={'gray.500'}
                  >
                    países
                  </Text>
                </Text>
              </Box>
              <Box>
                <Text
                  textAlign={{ base: "left" , md: "center" }}
                  fontSize={{ base: "24px" , md: "48px" }}
                  lineHeight={{ base: "32px" , md: "60px" }}
                  fontWeight="600"
                  color={'yellow.500'}
                >
                  60
                  <Text
                    as="span"
                    display="block"
                    fontSize={{ base: "18px" , md: "24px" }}
                    lineHeight={{ base: "27px" , md: "36px" }}
                    fontWeight={{ base: "400" , md: "600" }}
                    color={'gray.500'}
                  >
                    línguas
                  </Text>
                </Text>
              </Box>
              <Box>
                <Text
                  textAlign={{ base: "left" , md: "center" }}
                  fontSize={{ base: "24px" , md: "48px" }}
                  lineHeight={{ base: "32px" , md: "60px" }}
                  fontWeight="600"
                  color={'yellow.500'}
                >
                  27
                  <Text
                    as="span"
                    display="block"
                    fontSize={{ base: "18px" , md: "24px" }}
                    lineHeight={{ base: "27px" , md: "36px" }}
                    fontWeight={{ base: "400" , md: "600" }}
                    color={'gray.500'}
                  >
                    cidades +100
                  </Text>
                </Text>
              </Box>

            </HStack>
          </GridItem>
        </Grid>

        <Box as="section">
          <Heading
            as='h4'
            fontSize={{ base: "24px" , md: "36px" }}
            lineHeight={{ base: "36px" , md: "54px" }}
            fontWeight="500"
            color={'gray.500'}
            mb={{ base: "20px" , md: "40px" }}
          >
            Cidades + 100
          </Heading>
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)" , md: "repeat(4, 1fr)" }}
            templateRows="repeat(2, 1fr)"
            rowGap="40px"
            columnGap={{ base: "0" , md: "10" }}
            w="100%"
            mb={{ base: "15px" , md: "35px" }}
          >
            <ShelfCities photo="./images/europa/londres.jpg" city="Londres" country="Reino Unido" flag="./images/flags/england.svg" />
            <ShelfCities photo="./images/europa/paris.jpg" city="Paris" country="França" flag="./images/flags/france.svg" />
            <ShelfCities photo="./images/europa/roma.jpg" city="Roma" country="Itália" flag="./images/flags/italy.svg" />
            <ShelfCities photo="./images/europa/praga.jpg" city="Praga" country="República Tcheca" flag="./images/flags/czech.svg" />
            <ShelfCities photo="./images/europa/amsterda.jpg" city="Amsterdã" country="Holanda" flag="./images/flags/holland.svg" />
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}
