import "./index.css";
import "./App.css";
import { LoadingProvider } from "./context/LoadingProvider";
import "./components/Character/utils/character"; // kicks off model download immediately
import CharacterModel from "./components/Character";
import MainContainer from "./components/MainContainer";

export default function HomeApp() {
  return (
    <LoadingProvider>
      <MainContainer>
        <CharacterModel />
      </MainContainer>
    </LoadingProvider>
  );
}
