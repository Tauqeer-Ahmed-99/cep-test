import { useState } from "react";
import ItemGrid from "./components/ItemGrid";
import StyledStepper from "./components/StyledStepper";

const dummyData = [
  {
    id: Math.random().toString(),
    companyName: "Ingram Micro",
    sellerName: "Tauqeer Khan",
    contact: "00000000",
    email: "ingrammicro@ingrammicro.com",
    address:
      "G-2A, Akruti Corporate Park, L B S marg, Kanjurmarg (West), Mumbai - 400078",
  },
  {
    id: Math.random().toString(),
    companyName: "MicroSoft",
    sellerName: "Tauqeer Khan",
    contact: "00000000",
    email: "ingrammicro@ingrammicro.com",
    address:
      "G-2A, Akruti Corporate Park, L B S marg, Kanjurmarg (West), Mumbai - 400078",
  },
  {
    id: Math.random().toString(),
    companyName: "Google",
    sellerName: "Tauqeer Khan",
    contact: "00000000",
    email: "ingrammicro@ingrammicro.com",
    address:
      "G-2A, Akruti Corporate Park, L B S marg, Kanjurmarg (West), Mumbai - 400078",
  },
  {
    id: Math.random().toString(),
    companyName: "Yahoo",
    sellerName: "Tauqeer Khan",
    contact: "00000000",
    email: "ingrammicro@ingrammicro.com",
    address:
      "G-2A, Akruti Corporate Park, L B S marg, Kanjurmarg (West), Mumbai - 400078",
  },
  {
    id: Math.random().toString(),
    companyName: "Facebook",
    sellerName: "Tauqeer Khan",
    contact: "00000000",
    email: "ingrammicro@ingrammicro.com",
    address:
      "G-2A, Akruti Corporate Park, L B S marg, Kanjurmarg (West), Mumbai - 400078",
  },
  {
    id: Math.random().toString(),
    companyName: "Lenovo",
    sellerName: "Tauqeer Khan",
    contact: "00000000",
    email: "ingrammicro@ingrammicro.com",
    address:
      "G-2A, Akruti Corporate Park, L B S marg, Kanjurmarg (West), Mumbai - 400078",
  },
];

type ItemType = {
  id: string;
  companyName: string;
  sellerName: string;
  contact: string;
  email: string;
  address: string;
};

function App() {
  const [selectedAddress, setAddress] = useState({} as ItemType);

  return (
    <>
      <StyledStepper activePage={1} />
      <ItemGrid
        data={dummyData}
        name={"End User"}
        defaultSelectedItem={selectedAddress}
        setItem={setAddress}
        buttonVariant="text"
        buttonSize="small"
      />
    </>
  );
}

export default App;
