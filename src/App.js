import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ShareLayoutOfBackSide, ProtectPage, Register, MainAdminPage,Infor } from "./pages/backSide";
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
          <Route path="/app/mainpage" element={<MainAdminPage />} />
          <Route path="/app/infor" element={<Infor/>} />
        </Route>
        < Route element={<Register />} path='/register' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
