import * as React from "react"
import { ChakraProvider, theme } from '@chakra-ui/react'

import { Calculator } from "./components/Calculator"


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Calculator />
    </ChakraProvider>
  );
}

export default App;
