"use client";

import { useRouter } from "next/navigation";

import { Typography } from "@mui/material";
import { DataGrid, GridColDef, GridEventListener, GridToolbar } from '@mui/x-data-grid';

import { convertToInternationalCurrencySystem } from "@/app/helpers/format";
import { Coin } from "@/app/interfaces/coins.interface";

interface Props {
  coins: Coin[];
}

export default function Datatable(props: Props) {
  const { coins } = props;
  
  const router = useRouter();

  const handleRowClick: GridEventListener<'rowClick'> = (params) => {
    router.push(`/cryptocurrencies/${params.id}`);
  };

  const rows = coins.map((coin) => ({
    id: coin.id,
    icon: `https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`,
    symbol: coin.symbol,
    price: coin.quote['USD'].price,
    changes: coin.quote['USD'].percent_change_24h,
    volume: coin.circulating_supply,
  }));

  const columns: GridColDef[] = [
    {
      field: 'icon',
      headerName: '',
      width: 25,
      sortable: false,
      renderCell: (params) => <img src={params.value} width={25} height={25} />,
    },
    {
      field: 'symbol',
      description: 'Cryptocoin Symbol',
      flex: 1,
      renderHeader: () => (
        <strong>Symbol</strong>
      )
    },
    {
      field: 'price',
      flex: 1,
      renderHeader: () => (
        <strong>Price (USD)</strong>
      ),
      renderCell: (params) => (
        <Typography
          component="span"
          sx={{fontSize: 14,}}
        >
          ${params.value > 0.01 ? params.value.toFixed(2) : params.value.toFixed(8)}
        </Typography>
      ),
    },
    {
      field: 'changes',
      flex: 1,
      renderHeader: () => (
        <strong>24h Changes</strong>
      ),
      renderCell: (params) => (
        <Typography
          component="span"
          sx={{
            color: params.value > 0 ? '#03A66D' : '#CF304A',
            fontSize: 14,
          }}
        >
          {params.value.toFixed(2)}%
        </Typography>
      ),
    },
    {
      field: 'volume',
      flex: 1,
      renderHeader: () => (
        <strong>Volume</strong>
      ),
      renderCell: (params) => (
        <Typography
          component="span"
          sx={{ fontSize: 14 }}
        >
          {convertToInternationalCurrencySystem(params.value)}
        </Typography>
      )
    },
  ];

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      onRowClick={handleRowClick}
      disableColumnMenu
      disableColumnFilter
      disableColumnSelector
      disableDensitySelector
      pageSizeOptions={[10, 25, 50, 100]}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 10 },
        },
      }}
      slots={{
        toolbar: GridToolbar,
      }}
      slotProps={{
        toolbar: {
          showQuickFilter: true,
          printOptions: { disableToolbarButton: true },
          csvOptions: { disableToolbarButton: true },
          style: {
            alignSelf: 'center',
            margin: 20,
          }
        },
      }}
    />
  );
}