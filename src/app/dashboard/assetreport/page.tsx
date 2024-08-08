"use client";
import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import axios from 'axios';

interface Asset {
  module_record_id: string;
  cf_assest_category: string;
  cf_assest_sub_category: string;
  cf_assest_name: string;
  cf_asset_serial_no: string;
  cf_asset_code: string;
  cf_location: string;
  cf_employees_name: string;
}

const columns = [
  { field: 'cf_assest_category', headerName: 'Asset Category', width: 150 },
  { field: 'cf_assest_sub_category', headerName: 'Asset Sub Category', width: 150 },
  { field: 'cf_assest_name', headerName: 'Asset Name', width: 150 },
  { field: 'cf_asset_serial_no', headerName: 'Asset Serial No', width: 150 },
  { field: 'cf_asset_code', headerName: 'Asset Code', width: 150 },
  { field: 'cf_location', headerName: 'Asset Location', width: 150 },
  { field: 'cf_employees_name', headerName: 'Asset Owner', width: 150 },
];

const AssetDataGrid: React.FC = () => {
  const [data, setData] = useState<Asset[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get<Asset[]>('http://localhost:3000/api/fixedassets');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

 
  return (
    <div style={{ width: '100%' }}>
      <h1>Fixed Asset Report</h1>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns}
          getRowId={(row) => row.module_record_id}
          slots={{
            toolbar: GridToolbar,
          }}
          initialState={{
            filter: {
              filterModel: {
                items: [
                  {
                    field: 'cf_assest_category',
                    operator: 'contains',
                    value: '',
                  },
                ],
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default AssetDataGrid;
