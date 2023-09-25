import Link from "next/link";
import { Datatable } from "./components/Datatable/Datatable";
import { Coin } from "./interfaces/coins.interface";
import { Card } from "./components/Card/Card";

const getCoins = async () => {
  try {
    const response = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
      method: 'GET',
      headers: {
        "X-CMC_PRO_API_KEY": "",
      }
    });
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
  }
}

export default async function Home() {
  const data: Coin[] = await getCoins();

  return (
    <main className="flex min-h-screen flex-col items-center p-6">
      <div className="my-4 mb-8">
        <h1 className="text-3xl">Crypto Viewer</h1>
      </div>
      {/* <Link href={"/cryptocurrencies"}>test</Link> */}
      <Datatable coins={data}/>
      {/* {
        data.length > 0 ? (
          data.map((coin, index) => (<Card key={index} coin={coin} />))
        ) : null
      } */}
    </main>
  )
}
