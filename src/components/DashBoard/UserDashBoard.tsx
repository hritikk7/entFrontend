import { Button } from "@mui/material";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import Popup from "../Common/Popup";
import Banner from "../Common/Banner";
// import makeStyles from "tss-react/mui";
import { bannerProps } from "../../_mocks/BannerDataMock";

const UserDashBoard = () => {

  const usePopup = () =>
    toast(
      <Popup
        headerText="Test"
        bodyMessage="This is dummy text"
        color="orange"
      />
    );
  return (
    <div>
      <Banner {...bannerProps} />
      <ToastContainer closeOnClick />
    </div>
  );
};

export default UserDashBoard;
