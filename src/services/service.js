import { API } from "../constants/constants"

async function feacher(cep = "08220050") {
  const res = await fetch(API(cep))
  const data = await res.json()
  return data
}

export { feacher }
