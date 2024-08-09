import { NextResponse, NextRequest } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { id, status } = body;

        const filePath = path.resolve('./assetData.json');
        const previousData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

        const updatedData = previousData.map((item: any) => {
            if (item.id === id) {
                return { ...item, status };
            }
            return item;
        });

        fs.writeFileSync(filePath, JSON.stringify(updatedData));

        return NextResponse.json({ message: 'Status updated successfully' });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to update status' }, { status: 500 });
    }
}
