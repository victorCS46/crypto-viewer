import React from 'react';
import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

import Coinmarketcap from '@/app/api/coinmarketcap';
import { Coin } from '@/app/interfaces/coins.interface';
import { convertToInternationalCurrencySystem } from '@/app/helpers/format';

interface Params {
  params: {
    coin: number;
  }
}

const getCoin = async (id: number) => {
  try {
    const response = await Coinmarketcap.get(`/v2/cryptocurrency/quotes/latest?id=${id}`);
    return response.data[id];
  } catch (error) {
    return false;
  }
}

export default async function Crypto({ params }: Params) {
  const coin: Coin = await getCoin(params.coin);

  return (
    <>
      <Table className="animate__animated animate__fadeIn">
        <TableHead>
          <TableRow>
            <TableCell align='center' colSpan={2}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 2,
                }}
              >
                <img
                  src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                  width={35}
                  height={35}
                />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: '600' }}
                >
                  {coin.name}
                </Typography>
              </Box>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography sx={{ fontWeight: '600' }}>
                Name
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>{coin.name}</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography sx={{ fontWeight: '600' }}>
                Symbol
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>
                {coin.symbol}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography sx={{ fontWeight: '600' }}>
                Price (USD)
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>
                ${coin.quote['USD'].price > 0.01 ? coin.quote['USD'].price.toFixed(2) : coin.quote['USD'].price.toFixed(8)}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography sx={{ fontWeight: '600' }}>
                24 Hour Changes
              </Typography>
            </TableCell>
            <TableCell>
              <Typography sx={{ color: coin.quote['USD'].percent_change_24h > 0 ? '#03A66D' : '#CF304A', }}>
                {coin.quote['USD'].percent_change_24h.toFixed(2)}%
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography sx={{ fontWeight: '600' }}>
                Max Supply
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>
                {coin.max_supply > 0 ? convertToInternationalCurrencySystem(coin.max_supply) : 'No Cap'}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography sx={{ fontWeight: '600' }}>
                Circulating Supply
              </Typography>
            </TableCell>
            <TableCell>
              <Typography>
                {convertToInternationalCurrencySystem(coin.circulating_supply)}
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
