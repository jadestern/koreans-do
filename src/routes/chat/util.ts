import type { CustomWindow } from "./types";

export const pause = (ms: number) => new Promise((fulfil) => setTimeout(fulfil, ms));

export const emailValidate = (value: string) => {
  return (value && !!value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
}

export const customWindow = window as CustomWindow

export const getFetchJson = async (url: string) => {
  const res = await fetch(url)
  return res.json()
}