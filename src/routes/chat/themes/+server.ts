import { json } from '@sveltejs/kit';
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const _ = require('lodash/fp')

const THEMES_URL = `https://sheets.googleapis.com/v4/spreadsheets/1-fRQjYHA1CMglowuomQks7GpETuSDI2P8QXrn33TQBY/values/%ED%85%8C%EB%A7%88?alt=json&key=${process.env.GOOGLE_API_KEY}`

export async function GET() {
	const res = await fetch(THEMES_URL)
	const jsonData = await res.json()

	return _.flow(
		_.get('values'),
		_.drop(1),
		_.map((value: string[]) => {
			return {
				title: value[1],
				description: value[2],
			}
		})
		,json
	)(jsonData)
}
