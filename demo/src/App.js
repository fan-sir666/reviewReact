import { BrowserRouter } from "react-router-dom";
import AppRoute from "./router";
function App() {
  return (
    <div style={{ height: '100%'}}>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;
