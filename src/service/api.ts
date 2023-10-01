import { Card } from "../@types/navigation"
import { v4 as uuidv4 } from "uuid"

const baseURL = "http://localhost:3000"

export const saveApiData = async ({ ...props }: Card) => {
  const newData: Card = {
    id: uuidv4(),
    cardName: props.cardName,
    cardNumber: props.cardNumber,
    name: props.name,
    expirationDate: props.expirationDate,
    cvv: props.cvv,
  }

  let result = await fetch(`${baseURL}/cards`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  })

  const res = result.json()
  console.log("2222", JSON.stringify(await res))

  return res
}

export const getApiData = async () => {
  let result = await fetch(`${baseURL}/cards`)
  const dataResult = await result.json()
  return dataResult
}
