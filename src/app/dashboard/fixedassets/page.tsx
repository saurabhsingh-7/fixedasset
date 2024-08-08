"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
} from '@mui/material';
// import { useRouter } from 'next/router';

// Define the types for form data
interface FormData {
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
}

const Page: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    from: '',
    contact: '',
    requestor: '',
    date: '',
    vendorName: '',
    vendorTaxId: '',
    streetAddress: '',
    city: '',
    stateZip: '',
    phone: '',
    fax: '',
    email: '',
    assetDescription: '',
    quantity: '',
    unitOfMeasure: '',
    unitPrice: '',
    shipping: '',
    deliveryDate: '',
    deliverTo: '',
    totalPrice: '',
    bidContractNo: '',
    costCenter: '',
    fund: '',
    commitmentItem: '',
    investmentOrder: '',
  });

  // const router = useRouter();

  // Handle text field changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle select field changes
  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3000/api/postassetreq', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    // if (response.ok) {
    //   router.push('/submission-success');
    // } else {
    //   console.error('Form submission failed');
    // }
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom style={{ padding: '40px' }}>
        Asset Requisition Form
      </Typography>

      <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Typography variant="h6" gutterBottom style={{ padding: '20px' }}>
          Contact / Requestor Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="From"
              name="from"
              value={formData.from}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Requestor"
              name="requestor"
              value={formData.requestor}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              variant="outlined"
            />
          </Grid>
        </Grid>

        <Typography variant="h6" gutterBottom style={{ padding: '20px' }}>
          Vendor Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Name of Desired Vendor"
              name="vendorName"
              value={formData.vendorName}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Vendor Tax ID Number"
              name="vendorTaxId"
              value={formData.vendorTaxId}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              label="Street Address"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="State & ZIP"
              name="stateZip"
              value={formData.stateZip}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Fax"
              name="fax"
              value={formData.fax}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
        </Grid>

        <Typography variant="h6" gutterBottom style={{ padding: '20px' }}>
          Asset Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              label="Asset Description"
              name="assetDescription"
              value={formData.assetDescription}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              label="Quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              label="Unit of Measure"
              name="unitOfMeasure"
              value={formData.unitOfMeasure}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              label="Unit Price"
              name="unitPrice"
              value={formData.unitPrice}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              label="S&H"
              name="shipping"
              value={formData.shipping}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Desired Del. Date"
              name="deliveryDate"
              type="date"
              value={formData.deliveryDate}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Deliver To"
              name="deliverTo"
              value={formData.deliverTo}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Total Price"
              name="totalPrice"
              value={formData.totalPrice}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Bid Contract No"
              name="bidContractNo"
              value={formData.bidContractNo}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
        </Grid>

        <Typography variant="h6" gutterBottom style={{ padding: '20px' }}>
          Budget & Asset Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Cost Center</InputLabel>
              <Select
                name="costCenter"
                value={formData.costCenter}
                onChange={handleSelectChange}
                label="Cost Center"
              >
                <MenuItem value="cost-center-1">Cost Center 1</MenuItem>
                <MenuItem value="cost-center-2">Cost Center 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Fund"
              name="fund"
              value={formData.fund}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              label="Commitment Item"
              name="commitmentItem"
              value={formData.commitmentItem}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Investment Order</InputLabel>
              <Select
                name="investmentOrder"
                value={formData.investmentOrder}
                onChange={handleSelectChange}
                label="Investment Order"
              >
                <MenuItem value="investment-order-1">Investment Order 1</MenuItem>
                <MenuItem value="investment-order-2">Investment Order 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Box mt={4} display="flex" justifyContent="space-around">
          <Button type="submit" variant="contained" color="primary" size="large">
            Submit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            // onClick={() => router.push('/')}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Page;
