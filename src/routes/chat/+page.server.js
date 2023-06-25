// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-nocheck
// import { GoogleSpreadsheet } from 'google-spreadsheet'
// import creds from '../config/adroit-chemist-311314-cb1506a6a993.json'
// import { createRequire } from 'module'
// const require = createRequire(import.meta.url)
// const _ = require('lodash/fp')
//
// const mapRawData = (data) => _.flow(_.map('_rawData'))(data)
//
// export async function load() {
//   // Initialize the sheet - doc ID is the long id in the sheets URL
//   const doc = new GoogleSpreadsheet('1-fRQjYHA1CMglowuomQks7GpETuSDI2P8QXrn33TQBY')
//   await doc.useServiceAccountAuth(creds)
//
//   await doc.loadInfo() // loads document properties and worksheets
//
//   const themesSheet = doc.sheetsByIndex[0]
//   const itemSheet = doc.sheetsByIndex[1]
//   const themesRows = await themesSheet.getRows()
//   const itemRows = await itemSheet.getRows()
//
//   const themes = mapRawData(themesRows)
//   const items = mapRawData(itemRows)
//
//   return {
//     themes,
//     items,
//   }
// }
//
// export const ssr = false
