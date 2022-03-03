import { Image } from '@chakra-ui/react'

export function Logo() {
  return (
    <Image
      margin="0 auto"
      height={{ base: "20px" , md: "46px" }}
      src="./logo.svg"
      alt='Logo Worldtrip'
    />
  )
}