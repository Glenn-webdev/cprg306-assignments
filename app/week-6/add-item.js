import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const newItem = req.body;

    const filePath = path.join(process.cwd(), 'data', 'item.json');
    const jsonData = fs.readFileSync(filePath);
    const items = JSON.parse(jsonData);

    items.push(newItem);

    fs.writeFileSync(filePath, JSON.stringify(items, null, 2));

    res.status(200).json({ message: 'Item added successfully!' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}