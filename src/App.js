import { useQuery } from "@apollo/client";
import Card from "./components/card.jsx";
import getAllCharacters from './graphql/getAllCharacters.js'
import { Box, Image, Center } from "@chakra-ui/react"

function App() {
  const { loading, error, data } = useQuery(getAllCharacters);

  if (loading) return(
    <Center>
      <Box height="100vh">
        <Image src="loading.svg"></Image>
      </Box>
    </Center>
  )

  if (error) return (
    <Box height="100vh">
      <p>Algo deu errado!</p>
    </Box>
  )

  return (
    <Box
      pt="4"
    >
      <Card
        data={data}
      >
      </Card>
    </Box>
  );
}

export default App;
