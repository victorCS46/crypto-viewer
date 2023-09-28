import Datatable from "./components/Datatable/Datatable";
import { Coin } from "./interfaces/coins.interface";

const getCoins = async () => {
  try {
    const response = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
      method: 'GET',
      headers: {
        "X-CMC_PRO_API_KEY": "5e65aece-33dc-4362-8911-a5b4c80f18fe",
      }
    });
    const json = await response.json();
    return [...json.data];
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function Home() {
  const data: Coin[] = await getCoins();

  return (
    <main>
      <Datatable coins={data}/>
    </main>
  )
}
