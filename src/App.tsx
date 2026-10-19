import { Box, Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./component/NavBar";
//import { Button, ButtonGroup  } from "@chakra-ui/react"

function App() {
  //return <Button colorPalette='blue'>Button</Button>
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Box display={{base:"none", md:"block"}}>
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Box>
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
