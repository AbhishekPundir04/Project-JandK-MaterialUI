import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "../auth/signIn/signin";
import SignUp from "../auth/signUp/signup";
import Forgetpassword from "../auth/forgetpassword/forgetpassword";
import ChangePassword from "../auth/changepassword/changepassword";
import Publicrouter from "./publicrouter/publicRouter";
import Privaterouter from "./privaterouter/privaterouter";
import DashboardScreen from "../screens/dashboardscreen/DashboardScreen";
import ProfileScreen from "../screens/dashboardscreen/ProfileScreen/profilescreen";
import ChangeProfilePassword from "../screens/dashboardscreen/ProfileScreen/changepassword";
import ManagePanchayat from "../screens/managepanchayat/Managepanchayat";
import FormNine from "../form9/Form9";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Publicrouter />}>
          <Route path="/" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/forgotpassword" element={<Forgetpassword />}></Route>
          <Route path="/changepassword" element={<ChangePassword />}></Route>
          <Route path="form9" element={<FormNine/>}></Route>

        </Route>
        <Route element={<Privaterouter />}>
          {/* <Route path="/" element={<AppDrawer />}></Route> */}
          <Route path="/dashboard" element={<DashboardScreen/>}></Route>
          <Route path="/myprofile" element={<ProfileScreen/>}></Route>
          <Route path="/changeprofilepassword" element={<ChangeProfilePassword/>}></Route>
          <Route path="/managepanchayat" element={<ManagePanchayat/>}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
