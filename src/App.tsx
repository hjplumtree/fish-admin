import { Box } from "@chakra-ui/react";
import OverviewScene from "./scenes/OverviewScene";
import Header from "@components/Header";

function App() {
  return (
    <Box>
      <Header
        logoUrl="logo-light.png"
        companyName="J&D 실내바다낚시터"
        owner="조영현"
      />
      <OverviewScene />
    </Box>
  );
}

export default App;
