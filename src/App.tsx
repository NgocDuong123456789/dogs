import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { PublicDog } from "./Component/Routes/index";
import { SumBody } from "./Component/Layout/index";
import { InterRoute } from "./Component/Interface"
const App = () => { 

  return (
    
    <BrowserRouter>
      <div className="App">
        <Routes>
          {PublicDog.map((item: InterRoute, index: number) => {
            const Component = item.component;
            return (
              <Route
                key={index}
                path={item.path}
                element={
                  <SumBody>
                    <Component />
                  </SumBody>
                }
              />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
  
};

export default App;
