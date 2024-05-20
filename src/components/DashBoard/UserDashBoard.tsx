import { Button } from "@mui/material";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import Popup from "../Common/Popup";

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
      <Button onClick={usePopup}>Test</Button>
      <ToastContainer closeOnClick/>
    </div>
  );
};

export default UserDashBoard;
