import BackButton from "./components/BackButton";
import DarkButton from "./components/DarkButton";
import Input from "./components/Input";
import LightButton from "./components/LightButton";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Input id="name" placeholder="Nombre" />
      <DarkButton>Comenzar</DarkButton>
      <LightButton size="lg" startContent="A">
      Aumentar conversión de leads a clientes
      </LightButton>
      <BackButton/>
    </>
  );
}

export default App;
