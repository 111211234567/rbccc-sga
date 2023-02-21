import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ShareLayoutOfBackSide, ProtectPage, Register, MainAdminPage,Setting,CalendarShow,Infor,AnouncementDetail } from "./pages/backSide";
import { ShareLayoutOfFront } from "./pages/frontSide";
import { MainPage } from "./pages/frontSide";
import Modal from 'react-modal'
Modal.setAppElement('#root')

function App() {
  return (
    <BrowserRouter>
      <Routes>
        < Route element={<MainPage />} path='/' >

        </Route>
        <Route element={
          <ProtectPage>
            <ShareLayoutOfBackSide />
          </ProtectPage>
        } path='/app'>
          <Route path="/app/mainpage" element={<MainAdminPage />} />
          <Route element={<Infor/>} path="/app/infor" />
          <Route element={<CalendarShow />} path="/app/calender" />
          <Route element={<Setting/>} path="/app/setting" />
          <Route element={<AnouncementDetail/>} path="/app/infor/anouncement/:id"/>
        </Route>
        < Route element={<Register />} path='/register' />
      </Routes>
    </BrowserRouter>
    

  );
}

export default App;
