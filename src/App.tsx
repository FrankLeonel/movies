import { BrowserRouter } from "react-router-dom";
import RouteApp from "./routes";
import Header from "@root/components/Header";
import Footer from "@root/components/Footer";
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
      <Footer />
    </BrowserRouter>
  );
};

export default App;
