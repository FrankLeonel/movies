import { BrowserRouter } from "react-router-dom";
import RouteApp from "./routes";
import Header from "@root/components/Header";
import Content from "@root/components/Content";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="flex flex-col h-full">
        <Content>
          <RouteApp />
        </Content>
      </main>
    </BrowserRouter>
  );
};

export default App;
