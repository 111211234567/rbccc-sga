import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ShareLayoutOfBackSide, ProtectPage } from "./pages/backSide";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
