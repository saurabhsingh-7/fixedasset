"use client";
import * as React from 'react';
import { DataGrid, GridToolbar, GridColDef } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import data from '../../../../assetData.json';

// Define the type for the data rows
interface AssetData {
  from: string;
  contact: string;
  requestor: string;
  date: string;
  vendorName: string;
  vendorTaxId: string;
  streetAddress: string;
  city: string;
  stateZip: string;
  phone: string;
  fax: string;
  email: string;
  assetDescription: string;
  quantity: string;
  unitOfMeasure: string;
  unitPrice: string;
  shipping: string;
  deliveryDate: string;
  deliverTo: string;
  totalPrice: string;
  bidContractNo: string;
  costCenter: string;
  fund: string;
  commitmentItem: string;
  investmentOrder: string;
  id: number;
  status: string;
}

// Define the type for user information
interface UserInfo {
  role: string;
}

const VISIBLE_FIELDS: string[] = ['from', 'vendorName', 'investmentOrder', 'status'];

export default function InitialFilters() {
  const userInfoString = localStorage.getItem('userinfo');
  const userInfo: UserInfo | null = userInfoString ? JSON.parse(userInfoString) : null;

  const columns: GridColDef[] = [
    { field: 'from', headerName: 'From', width: 150 },
    { field: 'vendorName', headerName: 'Vendor Name', width: 200 },
    { field: 'investmentOrder', headerName: 'Investment Order', width: 200 },
    { field: 'status', headerName: 'Status', width: 150 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => (
        <>
          {userInfo?.role === 'admin' && (
            <Box display="flex" justifyContent="space-between" alignItems="center"  style={{ marginTop: 8 }}>
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={() => handleApprove(params.row.id)}
               
              >
                Approve
              </Button>
              <Button
                variant="contained"
                color="secondary"
                size="small"
                onClick={() => handleReject(params.row.id)}
              >
                Reject
              </Button>
            </Box>
          )}
        </>
      ),
    },
  ];

  const handleApprove = async (id: number) => {
    try {
        const response = await fetch('http://localhost:3000/api/approveasset', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, status: 'approved' }),
        });

        if (response.ok) {
            console.log(`Approved item with id: ${id}`);
            // Optionally, refresh the data grid or update the state to reflect the changes
        } else {
            console.error('Failed to approve the item');
        }
    } catch (error) {
        console.error('Error approving the item:', error);
    }
};

const handleReject = async (id: number) => {
    try {
        const response = await fetch('http://localhost:3000/api/approveasset', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, status: 'rejected' }),
        });

        if (response.ok) {
            console.log(`Rejected item with id: ${id}`);
            // Optionally, refresh the data grid or update the state to reflect the changes
        } else {
            console.error('Failed to reject the item');
        }
    } catch (error) {
        console.error('Error rejecting the item:', error);
    }
};


  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data as AssetData[]}
        columns={columns}
        slots={{
          toolbar: GridToolbar,
        }}
        initialState={{
          filter: {
            filterModel: {
              items: [
                {
                  field: 'status',
                  operator: 'equals',
                  value: 'submitted',
                },
              ],
            },
          },
        }}
      />
    </div>
  );
}
