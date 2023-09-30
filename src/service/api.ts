import { Card } from "../@types/navigation"
import { v4 as uuidv4 } from "uuid"

const baseURL = "http://localhost:3000"

export const saveApiData = async ({ ...props }: Card) => {
  const newData: Card = {
    id: uuidv4(),
    cardNumber: props.name,
    cvv: props.cvv,
    name: props.name,
    expirationDate: props.expirationDate,
  }

  let result = await fetch(`${baseURL}/cards`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  })

  console.log(result)
}

export const getApiData = async () => {
  let result = await fetch(`${baseURL}/cards`)
  const dataResult = await result.json()
  return dataResult
}
