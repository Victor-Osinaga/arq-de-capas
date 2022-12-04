import fs from 'fs'

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const mongoUrl = JSON.parse(await fs.promises.readFile(__dirname + '/mongodb.json', 'utf-8'))

const config = {
    mongoUrl,
}

export default config