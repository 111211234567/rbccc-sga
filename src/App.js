import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ShareLayoutOfBackSide, ProtectPage, Register, MainAdminPage,CalendarShow } from "./pages/backSide";
import { ShareLayoutOfFront } from "./pages/frontSide";
import Modal from 'react-modal'
Modal.setAppElement('#root')

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
          <Route element={<CalendarShow />} path="/app/calender" />
        </Route>
        < Route element={<Register />} path='/register' />
      </Routes>
    </BrowserRouter>
    

  );
}

export default App;
