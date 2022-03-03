import { Box, GridItem, Image, Text } from '@chakra-ui/react'

interface IconsCategoryProps {
  image_icon?: string; //? opcional
  title?: string; //? opcional
  rowSpan?: number //? opcional
  colSpan?: number
}

export function IconsCategory ({ image_icon, title, rowSpan, colSpan }: IconsCategoryProps)  {
  return (
    <GridItem
      w="100%"
      h={{ base: "auto" , md: "145px" }}
      rowSpan={{ base: rowSpan , md: 1 }}
      colSpan={{ base: colSpan , md: 1 }}
    >
      <Box>
        <Image
          margin="0 auto"
          src={image_icon}
          display={{ base: "none" , md: "block" }}
        />

        <Text
          mt={{ base: "14px" , md: "24px" }}
          fontSize={{ base: "18px" , md: "24px" }}
          lineHeight={{ base: "27px" , md: "36px" }}
          fontWeight="600"
          color={'gray.500'}
          align={{ base: "left" , md: "center" }}
          className="dotFeature"
        >
          {title}
        </Text>

      </Box>
    </GridItem>
  )
}