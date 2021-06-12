import React from "react";
import { toast } from "react-toastify";
const Msg = ({ message, subtitle, icon }) => (
  <div className="d-flex">
    <div className="d-flex flex-column heading">
      <div className="font-size-lg font-weight-bold">{subtitle}</div>
      <div className="message">{message}</div>
    </div>
  </div>
);
export function ToastSuccess(message) {
  toast.success(
    <Msg message={message} subtitle="Success!" icon={["fas", "check-circle"]} />
  );
}

export function ToastError(message) {
  toast.error(
    <Msg message={message} subtitle="Error!" icon={["fas", "times-circle"]} />
  );
}

export function ToastWarning(message) {
  toast.warning(
    <Msg
      message={message}
      subtitle="Warning"
      icon={["fas", "exclamation-triangle"]}
    />
  );
}
export function ToastInfo(message) {
  toast.info(
    <Msg
      message={message}
      subtitle="Information."
      icon={["fas", "info-circle"]}
    />
  );
}
