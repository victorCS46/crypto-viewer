"use client";

import { convertToInternationalCurrencySystem } from "@/app/helpers/format";
import { Coin } from "@/app/interfaces/coins.interface";
import Link from "next/link";

interface Props {
  coin: Coin;
}

export function Card(props: Props) {
  const {coin} = props;
  const circulating = convertToInternationalCurrencySystem(coin.circulating_supply);
  const max = convertToInternationalCurrencySystem(coin.max_supply);
  return (    
    <>
      <div className="w-full sm:w-3/4 lg:w-2/4 border rounded-md my-2 p-2">
        <div className="flex flex-row items-center">
          <img
            src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
            alt=""
            className="rounded-full mr-2 w-12"
          />
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col">
              <span>{coin.symbol}</span>
              <span>{coin.name}</span>
            </div>
            <div>
              <span>USD$ {coin.quote.USD.price.toFixed(2)}</span>
            </div>
            <div>
              <span>{circulating} {coin.max_supply > 0 && `/ ${max}`}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
