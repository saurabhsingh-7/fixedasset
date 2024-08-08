"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import { Box, TextField, Button, Grid, Typography } from '@mui/material';

const AssetTransfer: React.FC = () => {
  const [assetCategory, setAssetCategory] = useState('');
  const [assetSubCategory, setAssetSubCategory] = useState('');
  const [assetStatus, setAssetStatus] = useState('');
  const [assetCode, setAssetCode] = useState('');
  const [assetSerialNo, setAssetSerialNo] = useState('');
  const [location, setLocation] = useState('');
  const [assetName, setAssetName] = useState('');
  const [custodian, setCustodian] = useState('');
  const [netBookValue, setNetBookValue] = useState('');
  const [barcode, setBarcode] = useState('');
  const [geolocation, setGeolocation] = useState('');
  const [newlocation, setnewlocation] = useState('');
  const [newcustodian, setnewCustodian] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your submit logic here
    console.log({
      assetCategory,
      assetSubCategory,
      assetStatus,
      assetCode,
      assetSerialNo,
      location,
      assetName,
      custodian,
      netBookValue,
      barcode,
      geolocation,
      image,
    });
  };

  const handleCancel = () => {
    setAssetCategory('');
    setAssetSubCategory('');
    setAssetStatus('');
    setAssetCode('');
    setAssetSerialNo('');
    setLocation('');
    setAssetName('');
    setCustodian('');
    setNetBookValue('');
    setBarcode('');
    setGeolocation('');
    setImage(null);
    setnewlocation('');
    setnewCustodian('');
  };

  const fetchAssetDetails = async (serialNo: string) => {
    try {
      const response = await fetch('http://localhost:3000/api/fixedassets');
      const data = await response.json();
      const asset = data.find((item: any) => item.cf_asset_serial_no === serialNo);

      if (asset) {
        setAssetCategory(asset.cf_assest_category);
        setAssetSubCategory(asset.cf_assest_sub_category);
        setAssetStatus(asset.cf_assest_status);
        setAssetCode(asset.cf_asset_code);
        setAssetName(asset.cf_assest_name);
        setLocation(asset.cf_location);
        setCustodian(asset.cf_employees_name);
        setNetBookValue(asset.cf_net_book_value);
      }
    } catch (error) {
      console.error('Error fetching asset details:', error);
    }
  };

  const handleSerialNoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const serialNo = e.target.value;
    setAssetSerialNo(serialNo);
    if (serialNo) {
      fetchAssetDetails(serialNo);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Typography variant="h4" gutterBottom style={{ marginBottom: '40px' }}>
        Asset Transfer
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Asset Serial No"
              variant="outlined"
              fullWidth
              value={assetSerialNo}
              onChange={handleSerialNoChange}
            />
          </Grid>
      
         
          <Grid item xs={12} sm={6}>
            <TextField
              label="Geolocation"
              variant="outlined"
              fullWidth
              value={geolocation}
              onChange={(e) => setGeolocation(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Asset Code"
              variant="outlined"
              fullWidth
              value={assetCode}
              onChange={(e) => setAssetCode(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Asset Category"
              variant="outlined"
              fullWidth
              value={assetCategory}
              onChange={(e) => setAssetCategory(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Asset Name"
              variant="outlined"
              fullWidth
              value={assetName}
              onChange={(e) => setAssetName(e.target.value)}
            />
          </Grid>
        
          <Grid item xs={12} sm={6}>
            <TextField
              label="Asset Sub-category"
              variant="outlined"
              fullWidth
              value={assetSubCategory}
              onChange={(e) => setAssetSubCategory(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Custodian"
              variant="outlined"
              fullWidth
              value={custodian}
              onChange={(e) => setCustodian(e.target.value)}
            />
          </Grid>
          
      
          <Grid item xs={12} sm={6}>
            <TextField
              label="New Custodian"
              variant="outlined"
              fullWidth
              value={newcustodian}
              onChange={(e) => setnewCustodian(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Net Book Value"
              variant="outlined"
              fullWidth
              value={netBookValue}
              onChange={(e) => setNetBookValue(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Barcode"
              variant="outlined"
              fullWidth
              value={barcode}
              onChange={(e) => setBarcode(e.target.value)}
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              label="New Location"
              variant="outlined"
              fullWidth
              value={newlocation}
              onChange={(e) => setnewlocation(e.target.value)}
            />
          </Grid>
         
          <Grid item xs={12} sm={6}>
            <TextField
              label="Existing Location"
              variant="outlined"
              fullWidth
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box>
              {/* <Typography variant="body1" gutterBottom>
                Image Attachment
              </Typography> */}
              <Button variant="contained" component="label">
                Choose Image
                <input type="file" hidden onChange={handleImageChange} />
              </Button>
              {image && (
                <Typography variant="body2" gutterBottom>
                  {image.name}
                </Typography>
              )}
            </Box>
          </Grid>
        </Grid>
        <Box mt={4} display="flex" justifyContent="space-around">
          <Button variant="contained" color="primary" size="large" type="submit">
            Submit
          </Button>
          <Button variant="contained" color="secondary" size="large" onClick={handleCancel}>
            Cancel
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default AssetTransfer;
