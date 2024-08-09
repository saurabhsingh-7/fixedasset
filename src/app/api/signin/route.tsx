import { NextResponse, NextRequest } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // Get the root directory of the project
    
    const rootDir = process.cwd();
    
    // Construct the path to the users.json file relative to the root directory
    const filePath = path.join(rootDir, '/src/users.json');
    
    // Read the JSON file
    const usersData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    

    console.log("User data:", usersData);
    return NextResponse.json(usersData);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
