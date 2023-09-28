import { Coin } from '@/app/interfaces/coins.interface';
import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';

interface Params {
  params: {
    coin: number;
  }
}

const getCoin = async (id: number) => {
  try {
    const response = await fetch(`https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?id=${id}`, {
      method: 'GET',
      headers: {
        "X-CMC_PRO_API_KEY": "5e65aece-33dc-4362-8911-a5b4c80f18fe",
      }
    });
    const json = await response.json();
    return json.data[id];
  } catch (error) {
    console.log(error);
    return;
  }
}

export default async function Crypto({ params }: Params) {

  const coin: Coin = await getCoin(params.coin);

  // const coin = {"1":{"id":1,"name":"Bitcoin","symbol":"BTC","slug":"bitcoin","num_market_pairs":10483,"date_added":"2010-07-13T00:00:00.000Z","max_supply":21000000,"circulating_supply":19498556,"total_supply":19498556,"is_active":1,"infinite_supply":false,"platform":null,"cmc_rank":1,"is_fiat":0,"self_reported_circulating_supply":null,"self_reported_market_cap":null,"tvl_ratio":null,"last_updated":"2023-09-28T20:04:00.000Z","quote":{"USD":{"price":27112.495375104896,"volume_24h":13842197008.406986,"volume_change_24h":18.9572,"percent_change_1h":0.57908058,"percent_change_24h":3.32546051,"percent_change_7d":1.92167908,"percent_change_30d":-2.72166049,"percent_change_60d":-6.83845517,"percent_change_90d":-10.80167166,"market_cap":528654509371.2238,"market_cap_dominance":49.1329,"fully_diluted_market_cap":569362402877.2,"tvl":null,"last_updated":"2023-09-28T20:04:00.000Z"}}}};


  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align='center' colSpan={2}>
              <img
                src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                width={25}
                height={25}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: '600'
                }}
              >
                {coin.name}'s Specs
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography sx={{fontWeight: '600'}}>
                Name
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>{coin.name}</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography sx={{fontWeight: '600'}}>
                Symbol
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>{coin.symbol}</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography sx={{fontWeight: '600'}}>
                Price (USD)
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>${coin.quote['USD'].price.toFixed(2)}</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography sx={{fontWeight: '600'}}>
                24 Hour Changes
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>{coin.quote['USD'].percent_change_24h.toFixed(2)}%</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography sx={{fontWeight: '600'}}>
                Max Supply
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>{coin.max_supply > 0 ? coin.max_supply.toFixed(2) : 'No Cap'}</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography sx={{fontWeight: '600'}}>
                Circulating Supply
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>{coin.circulating_supply.toFixed(2)}</Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
