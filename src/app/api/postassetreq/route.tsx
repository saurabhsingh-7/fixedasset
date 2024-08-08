// pages/api/fetch-form-data.ts
import { NextResponse , NextRequest } from 'next/server';
import axios from 'axios';

import fs from 'fs';
import path from 'path';

export async function POST(request : NextRequest) {
    try {
      const fs = require('fs');
      const filePath = path.resolve('./assetData.json');
      const body = await request.json();
        const { 
          from,
          contact,
          requestor,
          date,
          vendorName,
          vendorTaxId,
          streetAddress,
          city,
          stateZip,
          phone,
          fax,
          email,
          assetDescription,
          quantity,
          unitOfMeasure,
          unitPrice,
          shipping,
          deliveryDate,
          deliverTo,
          totalPrice,
          bidContractNo,
          costCenter,
          fund,
          commitmentItem,
          investmentOrder}  = body;

          const obj = {
            ...body,
            id : Date.now() ,
            status : "submitted"
          }
        // console.log(body);
          const previousData =JSON.parse( fs.readFileSync(filePath, 'utf-8'));

          console.log("previos data", previousData);

          previousData.push(obj);



          fs.writeFileSync(filePath, JSON.stringify(previousData));

         
          return NextResponse.json({});

       

    } catch (error) {
      console.log(error);
      return NextResponse.json({ error }, { status: 500 });
    }
  }
  
