import React, { useEffect, useState } from "react";

import { styled } from "@mui/material";

import AddressCard from "./ItemCard";
import Modal from "./Modal";

interface propsInterface {
  data: any;
  defaultSelectedItem: any;
  setItem: any;
  name: string;
  buttonVariant?: "text" | "contained" | "outlined" | undefined;
  buttonSize?: "small" | "medium" | "large" | undefined;
}

const ItemGrid = ({
  data,
  defaultSelectedItem,
  setItem,
  name,
  buttonVariant,
  buttonSize,
}: propsInterface) => {
  const [selectedItem, setSelectedItem] = useState("");
  const [itemToShow, setItemToShow]: any = useState([defaultSelectedItem]);

  const select = (event: any) => {
    setSelectedItem(event.target.value);
  };

  const save = (id: string) => {
    if (!id) return;
    console.log(id);
    setSelectedItem(id);
  };

  useEffect(() => {
    let show = data.filter((item: any) => item.id === selectedItem);
    setItemToShow(show);
    setItem(show[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItem]);

  const Container = styled("div")(({ theme }) => {
    return {
      height: "30%",
      width: "30%",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    };
  });

  return (
    <>
      <Modal
        selectedItem={selectedItem}
        data={data}
        onSave={(id: string) => save(id)}
        onSelect={select}
        name={name}
        buttonVariant={buttonVariant}
        buttonSize={buttonSize}
      ></Modal>

      {itemToShow.length ? (
        <Container>
          <AddressCard
            id={itemToShow[0].id}
            companyName={itemToShow[0].companyName}
            sellerName={itemToShow[0].sellerName}
            contact={itemToShow[0].contact}
            email={itemToShow[0].email}
            address={itemToShow[0].address}
            selectedItem={null}
          />
        </Container>
      ) : (
        <div>Please select {name}.</div>
      )}
    </>
  );
};

export default ItemGrid;
