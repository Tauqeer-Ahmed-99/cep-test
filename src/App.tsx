import AddressGrid from "./components/AddressGrid";
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

function App() {
  return (
    <>
      <StyledStepper activePage={1} />
      <AddressGrid data={dummyData} />
    </>
  );
}

export default App;
