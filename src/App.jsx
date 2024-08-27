import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import DashboardLayout from "./layout/DashboardLayout";
import Communities from "./pages/Communities";
import Home from "./pages/Home";
import EachCommunity from "./pages/EachCommunity";
import Liscence from "./pages/Liscence";
import TotalResidents from "./pages/TotalResidents";
import DuesCreated from "./pages/DuesCreated";
import Groups from "./pages/Groups";
import Finance from "./pages/Finance";
import Integrations from "./pages/Integrations";
import Setting from "./pages/Setting";
import Liscences from "./pages/Liscences";
import { SearchProvider } from "./context/SearchContext";
import { ToastContainer } from "react-toastify";
import ForgotPassword from "./pages/ForgotPassword";
import EstateLiscenceDashboard from "./pages/EstateLiscence";
import Userliscence from "./pages/Userliscence";

function App() {
  return (
    <div className="">
       <SearchProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />

        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <Home />
            </DashboardLayout>
          }
        />

        <Route
          path="/communities"
          element={
            <DashboardLayout>
              <Communities />
            </DashboardLayout>
          }
        />

        <Route
          path="/communities/:id"
          element={
            <DashboardLayout>
              <EachCommunity />
            </DashboardLayout>
          }
        />
        <Route
          path="/communities/:id/total_residents"
          element={
            <DashboardLayout>
              <TotalResidents />
            </DashboardLayout>
          }
        />
        <Route
          path="/communities/:id/dues_created"
          element={
            <DashboardLayout>
              <DuesCreated />
            </DashboardLayout>
          }
        />
        <Route
          path="/communities/:id/groups"
          element={
            <DashboardLayout>
              <Groups />
            </DashboardLayout>
          }
        />
           <Route
          path="/licenses/communities_liscence/:id"
          element={
            <DashboardLayout>
              <EstateLiscenceDashboard />
            </DashboardLayout>
          }
        />
           <Route
          path="/licenses/user_liscence/:id"
          element={
            <DashboardLayout>
              <Userliscence />
            </DashboardLayout>
          }
        />
        <Route
          path="/communities/:id/liscence_purchased"
          element={
            <DashboardLayout>
              <Liscence />
            </DashboardLayout>
          }
        />

        <Route
          path="/financials"
          element={
            <DashboardLayout>
              <Finance />
            </DashboardLayout>
          }
        />

        <Route
          path="/integrations"
          element={
            <DashboardLayout>
              <Integrations />
            </DashboardLayout>
          }
        />

        <Route
          path="/licenses"
          element={
            <DashboardLayout>
              <Liscences />
            </DashboardLayout>
          }
        />

        <Route
          path="/settings"
          element={
            <DashboardLayout>
              <Setting />
            </DashboardLayout>
          }
        />
      
      </Routes>
      </SearchProvider>
    </div>
  );
}

export default App;
