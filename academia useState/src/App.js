
import { BrowserRouter } from "react-router-dom";
import "./app.css";
import OrganizandoDia from "./componentes/OrganizandoDia/OrganizandoDia";


function App() {




  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <OrganizandoDia />
        </header>
      </div>

    </BrowserRouter>
  );
}

export default App;
