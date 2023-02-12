import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ShareLayoutOfBackSide, ProtectPage,Register } from "./pages/backSide";
import { ShareLayoutOfFront } from "./pages/frontSide";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        < Route element={<ShareLayoutOfFront />} path='/' >

        </Route>
        <Route element={
          <ProtectPage>
            <ShareLayoutOfBackSide />
          </ProtectPage>
        } path='/app'>

        </Route>
        < Route element={<Register/>} path='/register' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
