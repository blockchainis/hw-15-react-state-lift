import Input from "./components/Input";
import { useState } from "react";
function App() {
  const BTC_TO_BTC = 1;
  const BTC_TO_ETH = 14.68;
  return (
    <>
      <h1>BTC TO ETH</h1>
      <div>
        <Input name={"BTC"} />
        <Input name={"ETH"} />
      </div>
    </>
  );
}

export default App;
