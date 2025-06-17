import { AComponent } from "./components/a-component";

function App() {
  const sample = {
    username: "taro",
    password: "hogehoge",
  };
  return <AComponent {...sample} />;
}

export default App;
