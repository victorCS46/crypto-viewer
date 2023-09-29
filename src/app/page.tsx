import Coinmarketcap from "./api/coinmarketcap";
import Datatable from "./components/Datatable/Datatable";
import { Coin } from "./interfaces/coins.interface";

const getCoins = async () => {
  try{
    const response = await Coinmarketcap.get('/v1/cryptocurrency/listings/latest');
    return response.data;
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
