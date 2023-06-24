// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { GoogleSpreadsheet } from 'google-spreadsheet';
import creds from './config/adroit-chemist-311314-cb1506a6a993.json'
import {map, flow} from 'lodash/fp'

export async function load() {
  // Initialize the sheet - doc ID is the long id in the sheets URL
  const doc = new GoogleSpreadsheet('1-fRQjYHA1CMglowuomQks7GpETuSDI2P8QXrn33TQBY')
  await doc.useServiceAccountAuth(creds);

  await doc.loadInfo(); // loads document properties and worksheets
  const itemSheet = doc.sheetsByIndex[1]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
  const itemRows = await itemSheet.getRows()

  const items = flow(map('_rawData'))(itemRows)

  return {
    items: items,
  }

}
