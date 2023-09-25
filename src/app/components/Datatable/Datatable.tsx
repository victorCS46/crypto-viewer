"use client";

import { convertToInternationalCurrencySystem } from "@/app/helpers/format";
import { Coin } from "@/app/interfaces/coins.interface";

interface Props {
  coins: Coin[];
}

export function Datatable(props: Props) {
  const { coins } = props;

  // return (
  //   <table className="border-collapse table-auto w-full text-sm">
  //     <thead>
  //       <tr className="border-b dark:border-slate-600">
  //         <th className="font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Name</th>
  //         <th className="font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Price/24h Changes</th>
  //         <th className="font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Vol/Cap</th>
  //       </tr>
  //     </thead>
  //     <tbody className="bg-white dark:bg-slate-800">
  //       {
  //         coins.map((coin, index) => {
  //           const circulating = convertToInternationalCurrencySystem(coin.circulating_supply);
  //           const max = convertToInternationalCurrencySystem(coin.max_supply);

  //           return (
  //             <tr key={index} className="border-b border-slate-100 dark:border-slate-700">
  //               <td className="p-4 text-slate-500 dark:text-slate-400 flex flex-row items-center">
  //                 <img
  //                   src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
  //                   alt=""
  //                   width={20}
  //                   height={20}
  //                   className="rounded-full mr-2"
  //                 />
  //                 <span>{coin.symbol}</span>
  //               </td>
  //               <td className="p-4 text-slate-500 dark:text-slate-400 whitespace-nowrap">USD$ {coin.quote.USD.price.toFixed(2)}</td>
  //               <td className="p-4 text-slate-500 dark:text-slate-400 whitespace-nowrap">{circulating} {coin.max_supply > 0 && `/ ${max}`}</td>
  //             </tr>
  //           );
  //         })
  //       }
  //     </tbody>
  //   </table>
  // );
  return (
    <table className="w-full md:w-3/4 text-sm m-2">
      <thead>
        <tr className="border rounded-md dark:border-slate-600">
          <th className="font-medium p-2 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Name</th>
          <th className="font-medium p-2 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Price/24h Changes</th>
          <th className="font-medium p-2 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Vol/Cap</th>
        </tr>
      </thead>
      <tbody className="bg-white dark:bg-slate-800">
        {
          coins.map((coin, index) => {
            const circulating = convertToInternationalCurrencySystem(coin.circulating_supply);
            const max = convertToInternationalCurrencySystem(coin.max_supply);

            return (
              <tr key={index} className="border-b border-slate-100 dark:border-slate-700">
                <td className="p-4 text-slate-500 dark:text-slate-400 flex flex-row items-center">
                  <img
                    src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                    alt=""
                    width={20}
                    height={20}
                    className="rounded-full mr-2"
                  />
                  <span>{coin.symbol}</span>
                </td>
                <td className="p-4 text-slate-500 dark:text-slate-400 whitespace-nowrap">USD$ {coin.quote.USD.price.toFixed(2)}</td>
                <td className="p-4 text-slate-500 dark:text-slate-400 whitespace-nowrap">{circulating} {coin.max_supply > 0 && `/ ${max}`}</td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
}