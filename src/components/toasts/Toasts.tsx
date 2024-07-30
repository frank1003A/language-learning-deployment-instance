import React from "react";

import CustomButton from "../common/common-button/common-button";
import {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastTitle,
  ToastViewport,
} from "../ui/toast";

// Example component that triggers a toast
function Toasts() {
  const [open, setOpen] = React.useState(false);

  const showToast = () => {
    setOpen(true);
    setTimeout(() => setOpen(false), 5000); // Auto-close after 5 seconds
  };

  return (
    <div>
      <CustomButton onClick={showToast} variant="primary">
        Show Toast
      </CustomButton>
      <ToastViewport />

      {open && (
        <Toast open={open} onOpenChange={setOpen}>
          <div className="flex">
            <ToastTitle></ToastTitle>
            <ToastDescription>An alert goes here</ToastDescription>
            <ToastAction asChild altText={""}>
              <button className="action-btn">Undo</button>
            </ToastAction>
            <ToastClose />
          </div>
        </Toast>
      )}
    </div>
  );
}

export default Toasts;
