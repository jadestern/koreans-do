import type { LoadEvent } from '@sveltejs/kit'
import { json } from '@sveltejs/kit';
import { createRequire } from 'module'
import { GOOGLE_API_KEY } from '$env/static/private'

const require = createRequire(import.meta.url)
const _ = require('lodash/fp')

const CONTENTS_URL = `https://sheets.googleapis.com/v4/spreadsheets/1-fRQjYHA1CMglowuomQks7GpETuSDI2P8QXrn33TQBY/values/%EC%BD%98%ED%85%90%EC%B8%A0%28%EC%A0%95%EB%A6%AC%29?alt=json&key=${process.env.GOOGLE_API_KEY || GOOGLE_API_KEY}`

export async function GET(event: LoadEvent) {
	const {url} = event
	const category = url.searchParams.get('category');

	const res = await fetch(CONTENTS_URL)
	const jsonData = await res.json()
	return _.flow(
		_.get('values'),
		_.drop(1),
		_.map((value: string[]) => {
			return {
				category: value[0],
				title: value[1],
				description: value[2],
				imageUrl: value[3],
				searchLink: value[4],
			}
		}),
		_.filter({category: decodeURIComponent(category || '')}),
		json
	)(jsonData)
}
