import React, { useState, useEffect } from "react";
import { useAppSelector } from "../store/hooks";
import {
  alertMessage,
  alertSeverity,
  alertState,
} from "../store/alert/selectors";
import { Toaster, toast } from "react-hot-toast";

const AlertComponent = () => {
  const msg = useAppSelector(alertMessage);
  const severity = useAppSelector(alertSeverity);
  const state = useAppSelector(alertState);

  useEffect(() => {
    if (msg) {
      if (severity === "success") {
        toast.success(msg);
      } else if (severity === "error") {
        toast.error(msg);
      }
    }
  }, [msg, severity, state]);

  return <Toaster />;
};

export default AlertComponent;
