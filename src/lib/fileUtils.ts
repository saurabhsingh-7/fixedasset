// lib/fileUtils.ts
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'formData.json');

export const readFormDataFromFile = (): Promise<any[]> => {
  if (!fs.existsSync(dataFilePath)) {
    return Promise.resolve([]);
  }
  const data = fs.readFileSync(dataFilePath, 'utf-8');
  return Promise.resolve(JSON.parse(data));
};

export const writeFormDataToFile = (data: any[]): Promise<void> => {
  return new Promise((resolve, reject) => {
    fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
};
