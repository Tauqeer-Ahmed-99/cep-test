import React, { useEffect, useState } from "react";

import { styled } from "@mui/material";

import AddressCard from "./AddressCard";
import Modal from "./Modal";

interface propsInterface {
  data: any;
}

const AddressGrid = ({ data }: propsInterface) => {
  const [selectedAddress, setSelectedAddress] = useState("");
  const [addressToShow, setAddressToShow]: any = useState([]);

  const select = (event: any) => {
    setSelectedAddress(event.target.value);
  };

  const save = (addressId: string) => {
    if (!addressId) return;
    console.log(addressId);
    setSelectedAddress(addressId);
  };

  useEffect(() => {
    let show = data.filter((address: any) => address.id === selectedAddress);
    setAddressToShow(show);
  }, [selectedAddress]);

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
      <Modal
        selectedAddress={selectedAddress}
        data={data}
        onSave={(addressId: string) => save(addressId)}
        onSelect={select}
      ></Modal>

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
