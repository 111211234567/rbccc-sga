import { Route, Routes, BrowserRouter } from "react-router-dom";
import {
  ShareLayoutOfBackSide, Admin,
  ProtectPage, Register, MainAdminPage, Setting, CalendarShow,
  Infor, AnouncementDetail, AdminMainpage, SgaAdmin, NameSearchAdmin,
  PublicEvnetDetail
} from "./pages/backSide";
import { ShareLayoutOfFront } from "./pages/frontSide";
import { MainPage } from "./pages/frontSide";
import { AboutUs, General,ExecutiveBoard,FrontAgenda,FrontCalendar,FrontAnouncement,FrontNews,FrontPublicEvent,FrontAnouncementDetail,FrontPublicEventDetail } from "./pages/frontSide/pages";
import { AboutUsShareLayout,UpdateShareLayout } from "./pages/frontSide/ShareLayout";
import Modal from 'react-modal'
Modal.setAppElement('#root')

function App() {
  return (
    <BrowserRouter>
      <Routes>
        < Route element={<ShareLayoutOfFront />} path='/' >
          < Route element={<MainPage />} path='/' />
          <Route element={<AboutUsShareLayout />} path='/about-us' >
            <Route element={<AboutUs />} path='/about-us' />
            <Route element={<General/>} path='/about-us/general'/>
            <Route element={<ExecutiveBoard/>} path='/about-us/executiveBoard' />
          </Route>
          <Route element={<UpdateShareLayout/>} path='/update' >
            <Route element={<FrontAgenda/>} path='/update/agenda' />
            <Route element={<FrontAnouncement/>} path='/update/anouncement' />
            <Route element={<FrontNews/>} path='/update/news' />
            <Route element={<FrontPublicEvent/>} path='/update/public-event' />
            <Route element={<FrontAnouncementDetail/>} path='/update/anouncement/:id' />
            <Route element={<FrontPublicEventDetail/>} path='/update/public-event/:id' />
            <Route element={<FrontCalendar/>} path='/update/calendar' />
          </Route>
        </Route>
        <Route element={
          <ProtectPage>
            <ShareLayoutOfBackSide />
          </ProtectPage>
        } path='/app'>
          <Route path="/app/mainpage" element={<MainAdminPage />} />
          <Route element={<Infor />} path="/app/infor" />
          <Route element={<CalendarShow />} path="/app/calender" />
          <Route element={<Setting />} path="/app/setting" />
          <Route element={<PublicEvnetDetail />} path="/app/infor/publicEvent/:id" />
          <Route element={<AnouncementDetail />} path="/app/infor/anouncement/:id" />
          <Route element={<Admin />} path='/app/admin' >
            <Route element={<AdminMainpage />} path='/app/admin' />
            <Route element={<SgaAdmin />} path='/app/admin/sga' />
            <Route element={<NameSearchAdmin />} path='/app/admin/name' />
          </Route>
        </Route>
        < Route element={<Register />} path='/register' />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
