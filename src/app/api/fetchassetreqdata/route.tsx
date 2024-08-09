// pages/api/fetch-form-data.ts
import { NextResponse } from 'next/server';
import axios from 'axios';
import data from '../../../../assetData.json'
export async function GET() {
    try {
    
    return NextResponse.json(data);
    } catch (error) {
      return NextResponse.json({ error: 'Error fetching Asset Data' }, { status: 500 });
    }
  }
  
