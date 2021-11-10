import { Container, Box, SimpleGrid, Badge, Image } from "@chakra-ui/react"
import { MoonIcon } from '@chakra-ui/icons'
import { motion } from "framer-motion"

export default function Card(props) {
  return (
    <Container maxW="container.xl">
      <SimpleGrid columns={4} spacing={10}>
        {
          props.data.characters.results.map(character =>
            <motion.div
              key={character.id}
              drag
              dragConstraints={{
                top: -1000,
                left: -1000,
                right: 1000,
                bottom: 1000,
              }}
            >
              <Box 
                shadow="md" 
                borderWidth="1px"
                backgroundColor="white"
                p="6"
              >
                <Image src={character.image} alt={character.name} />
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  {character.name}
                </Box>
                <Box ml="2">
                  <Badge borderRadius="solid" colorScheme={character.status === 'Alive' ? `green` : `red`}>
                    {character.status}
                  </Badge>
                </Box>

                <Box
                  color="gray.500"
                  fontWeight="bold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  <MoonIcon />
                  {character.location.name}
                </Box>
              </Box>
            </motion.div>
          )
        }
      </SimpleGrid>
    </Container>
  )
}