/**
 * Încarcă .env înainte de orice alt modul (obligatoriu când folosești Webpack).
 * Trebuie importat primul în main.ts.
 */
import * as dotenv from 'dotenv';
import { existsSync } from 'fs';
import { join, resolve } from 'path';

const envPaths = [
  join(__dirname, '..', '.env'),
  join(__dirname, '..', '..', '..', 'apps', 'logging-service', '.env'),
  resolve(process.cwd(), 'apps', 'logging-service', '.env'),
];

for (const p of envPaths) {
  if (existsSync(p)) {
    dotenv.config({ path: p });
    break;
  }
}
dotenv.config();
