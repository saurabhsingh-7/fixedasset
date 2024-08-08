// app/api/fetchSalesOrders/route.ts
import { NextResponse } from 'next/server';
import axios from 'axios';

const zohoClientId = '1000.0E8JFCYFB6BFDJY7MWJCWA3IV1FG9E';
const zohoClientSecret = '5a381f55babe14fce6e557008381ae59f2e69fa280';
const zohoRefreshToken = '1000.4cd9dc153945d68a49e7efa50dd39149.32c63a946c3691af6ea9cb09b43bbd70';

async function getZohoAccessToken(): Promise<string> {
  const url = 'https://accounts.zoho.com/oauth/v2/token';
  const data = {
    grant_type: 'refresh_token',
    client_id: zohoClientId,
    client_secret: zohoClientSecret,
    refresh_token: zohoRefreshToken,
  };
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
  try {
    const response = await axios.post(url, new URLSearchParams(data).toString(), { headers });
    return response.data.access_token;
  } catch (error) {
    console.error('Error fetching Zoho access token:', error);
    throw error;
  }
}

async function fetchSalesOrders(accessToken: string): Promise<any> {
  const config = {
    method: 'get',
    url: 'https://www.zohoapis.com/books/v3/cm_assest_register?organization_id=776972990',
    headers: {
      'Authorization': `Zoho-oauthtoken ${accessToken}`,
      'Content-Type': 'application/json',
    }
  };

  try {
    const response = await axios.request(config);
    return response.data.module_records;
  } catch (error) {
    console.error('Error fetching sales orders:', error);
    throw error;
  }
}

export async function GET() {
  try {
    const accessToken = await getZohoAccessToken();
    const salesOrders = await fetchSalesOrders(accessToken);
    return NextResponse.json(salesOrders);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching sales orders' }, { status: 500 });
  }
}
