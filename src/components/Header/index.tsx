import { Flex } from '@chakra-ui/react'
import { Logo } from './Logo'

export function Header() {
  return (
    <Flex as="header" w="100%" maxWidth={1240} mx="auto" my={{ base: "3" , md: "4" }} align="center" >
      <Logo />
    </Flex>
  )
}