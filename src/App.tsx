import IndexRouter from "./router/IndexRouter";
import { ConfigProvider } from "antd";
import "./styles/main.scss";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#e2c8e0",
        },
      }}
    >
      <IndexRouter />
    </ConfigProvider>
  );
}

export default App;
