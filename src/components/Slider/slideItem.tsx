import { Box, Text } from '@chakra-ui/react'
import Link from 'next/link'

interface SlideItemProps {
  image_bg: string;
  title: string;
  subtitle: string;
}

export function SlideItem ({ image_bg, title, subtitle }: SlideItemProps)  {

  return (
    <Box
      position="relative"
      className="bg-overlay"
      backgroundImage={image_bg}
      backgroundSize="cover"
      height={{ base: "250px" , md: "450px" }}
    >
      <Box
        zIndex="2"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <Link href="/travel" passHref>
          <Text
            as="a"
            fontSize={{ base: "18px" , md: "48px" }}
            lineHeight={{ base: "27px" , md: "72px" }}
            fontWeight="700"
            color={'gray.200'}
            align="center"
            cursor="pointer"
            display="block"
          >
            {title} <br/>
            <Text fontSize={{ base: "18px" , md: "24px" }} lineHeight={{ base: "27px" , md: "36px" }} >
              {subtitle}
            </Text>
          </Text>
        </Link>
      </Box>
    </Box>
  )
}
