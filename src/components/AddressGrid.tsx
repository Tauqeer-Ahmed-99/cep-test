import { useEffect, useState } from "react";

import {
  Grid,
  FormControl,
  RadioGroup,
  Autocomplete,
  TextField,
  styled,
  InputAdornment,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import AddressCard from "./AddressCard";
import Modal from "./Modal";

interface propsInterface {
  data: any;
}

const AddressGrid = ({ data }: propsInterface) => {
  const [selectedAddress, setSelectedAddress] = useState("");
  const [addressToShow, setAddressToShow]: any = useState([]);
  const [filteredAddresses, setFilteredAddressData]: any = useState(data);
  const [prevAddressId, setPrevAddressId] = useState("");

  let selectedAddressId = "";

  const select = (event: any) => {
    if (selectedAddressId === event.target.value) return;
    selectedAddressId = event.target.value;
    setSelectedAddress(selectedAddressId);
  };

  const save = () => {
    setPrevAddressId(selectedAddress);
    if (!selectedAddressId) return;
    setSelectedAddress(selectedAddressId);
    setFilteredAddressData(data);
  };

  const setPrevAddressIdOnCancel = () => {
    if (!prevAddressId) return;
    setSelectedAddress(prevAddressId);
  };

  useEffect(() => {
    let show = data.filter((address: any) => address.id === selectedAddress);
    setAddressToShow(show);
  }, [selectedAddress]);

  const filterAddress = (event: any) => {
    const userInputvalue = event.target.value.toLowerCase().trim();
    if (!userInputvalue) {
      setFilteredAddressData(data);
    } else {
      const filteredAddresses = data.filter((address: any) => {
        const value = Object.values(address);
        const v = value.map((item: any) => item.toLowerCase().trim());
        if (v.findIndex((element) => element.includes(userInputvalue)) >= 0) {
          return true;
        } else {
          return false;
        }
      });
      setFilteredAddressData(filteredAddresses);
    }
  };

  const Container = styled("div")(({ theme }) => {
    return {
      height: "100vh",
      width: "100vw",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    };
  });

  return (
    <Container>
      <Modal onSave={save} onCancel={setPrevAddressIdOnCancel}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={data}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search Address"
              onChange={filterAddress}
              inputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {" "}
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}
          getOptionLabel={(options: any) => options.companyName}
        />
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="address"
            onChange={select}
            defaultValue={selectedAddress}
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
                      selectedAddress={selectedAddress}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </RadioGroup>
        </FormControl>
      </Modal>

      {addressToShow.length ? (
        <div>
          <AddressCard
            id={addressToShow[0].id}
            companyName={addressToShow[0].companyName}
            sellerName={addressToShow[0].sellerName}
            contact={addressToShow[0].contact}
            email={addressToShow[0].email}
            address={addressToShow[0].address}
            selectedAddress={null}
          />
        </div>
      ) : (
        <div>Please select an address.</div>
      )}
    </Container>
  );
};

export default AddressGrid;
