import React, { useState, ReactNode } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import {
  Box,
  Divider,
  FormControl,
  Grid,
  InputAdornment,
  makeStyles,
  MenuItem,
  RadioGroup,
  Select,
  SelectChangeEvent,
  styled,
  TextField,
} from "@mui/material";
import { margin } from "@mui/system";
import AddressCard from "./AddressCard";
import { Add, Close, PlusOneSharp, Search } from "@material-ui/icons";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface propsInterface {
  onSave: any;
  onSelect: any;
  selectedAddress: string;
  data: any;
}

function Modal(props: propsInterface) {
  const [open, setOpen] = useState(false);
  // const [searchTerm, setSearchTerm] = useState("company");
  const [userInput, setUserInput] = useState("");
  const [selectedId, setId] = useState(props.selectedAddress);
  const [filteredAddresses, setFilteredAddressData]: any = useState(props.data);

  const handleSearch = (event: any) => {
    const userInput = event.target.value.trim().toLowerCase();
    if (userInput) {
      setUserInput(userInput);
      filterAddress(userInput);
    }
    if (!userInput) {
      setUserInput(userInput);
      setFilteredAddressData(props.data);
    }
  };

  const filterAddress = (userInput: string) => {
    const filteredAddresses = props.data.filter((address: any) => {
      const value = Object.values(address);
      const v = value.map((item: any) => item.toLowerCase().trim());
      if (v.findIndex((element) => element.includes(userInput)) >= 0) {
        return true;
      } else {
        return false;
      }
    });
    setFilteredAddressData(filteredAddresses);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOnChange = (event: any) => {
    setId(event.target.value);
  };

  const save = () => {
    handleClose();
    props.onSave(selectedId);
    console.log(selectedId);
    setFilteredAddressData(props.data);
  };

  const close = () => {
    console.log("" + props.selectedAddress);
    setId(props.selectedAddress);
    handleClose();
  };

  // const handleMenuChange = (event: SelectChangeEvent<string>) => {
  //   setSearchTerm(event.target.value);
  // };

  const onCrossClick = () => {
    setUserInput("");
    setFilteredAddressData(props.data);
  };
  const BottomMarginContainer = styled("div")(({ theme }) => {
    return { marginBottom: "30px", marginTop: "10px" };
  });

  return (
    <div>
      <BottomMarginContainer>
        <Button variant="contained" onClick={handleClickOpen}>
          Show End User
        </Button>
      </BottomMarginContainer>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth={"xl"}
        sx={{
          minHeight: "90vh",
          minWidth: "90vw",
        }}
      >
        <DialogTitle>{"Select End User"}</DialogTitle>
        <DialogContent>
          <BottomMarginContainer>
            <Box display={"flex"}>
              <TextField
                onChange={handleSearch}
                value={userInput}
                autoFocus
                size={"small"}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {/* <Box display={"flex"}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={searchTerm}
          onChange={handleMenuChange}
          size={"small"}
          sx={{ width: "150px" }}
        >
          <MenuItem value={"company"}>Company</MenuItem>
          <MenuItem value={"contact"}>Contact</MenuItem>
        </Select>
        <Divider
          flexItem
          orientation="vertical"
          sx={{
            marginLeft: "8px",
            color: "darkgray",
          }}
        />
      </Box> */}
                      <Search />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <Box
                        onClick={onCrossClick}
                        sx={{ cursor: "pointer", paddingTop: "8px" }}
                      >
                        <Close />
                      </Box>
                    </InputAdornment>
                  ),
                }}
                sx={{ minWidth: "40%" }}
              />{" "}
              <Button
                onClick={() => {
                  filterAddress(userInput);
                }}
                variant="outlined"
                sx={{ marginLeft: "15px" }}
              >
                Search
              </Button>
              <Divider
                flexItem
                orientation="vertical"
                sx={{
                  marginLeft: "25px",
                  width: "2px",
                  color: "darkgray",
                }}
              />
              <Button sx={{ marginLeft: "8px" }}>
                <Add />{" "}
                <span style={{ marginTop: "3px", marginLeft: "4px" }}>
                  Add end user
                </span>
              </Button>
            </Box>
          </BottomMarginContainer>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="address"
              onChange={handleOnChange}
            >
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                {filteredAddresses.map((address: any) => {
                  return (
                    <Grid item xs={2} sm={4} md={4} key={address.id}>
                      <AddressCard
                        id={address.id}
                        companyName={address.companyName}
                        sellerName={address.sellerName}
                        contact={address.contact}
                        email={address.email}
                        address={address.address}
                        selectedAddress={selectedId}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>Cancel</Button>
          <Button onClick={save}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Modal;
