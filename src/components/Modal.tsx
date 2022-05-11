import React, { useState, ReactNode } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { styled } from "@mui/material";
import { margin } from "@mui/system";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface propsInterface {
  children: ReactNode;
  onSave: Function;
  onCancel: Function;
}

function Modal(props: propsInterface) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    props.onCancel();
    setOpen(false);
  };

  const save = () => {
    handleClose();
    props.onSave();
  };

  const BottomMarginContainer = styled("div")(({ theme }) => {
    return { marginBottom: "30px" };
  });

  return (
    <div>
      <BottomMarginContainer>
        <Button variant="contained" onClick={handleClickOpen}>
          Show Addresses
        </Button>
      </BottomMarginContainer>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth={false}
      >
        <DialogTitle>{"Select Address"}</DialogTitle>
        <DialogContent>{props.children}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={save}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Modal;
