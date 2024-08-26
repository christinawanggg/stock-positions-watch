import { NextUIProvider } from "@nextui-org/react";
import Body from "./components/Body";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="flex min-h-screen flex-col justify-between p-24">
        <h1 className="text-2xl pb-2"><b>STONKS</b></h1>
        <p className="text-large"><i>Click on the symbol to expand to see more information about each symbol's positions such as ask, cost basis, profit loss, etc.</i></p>
        <p className="text-large pb-4"><i>Click on "Expand All" to view all positions for all symbols</i></p>
        <Body />
      </main>
    </NextUIProvider>
  );
}
