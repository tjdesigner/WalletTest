import { Card } from "../@types/navigation"

const baseURL = "http://localhost:3000"

export const saveApiData = async ({ ...props }: Card) => {
  const newData = {
    id: props.id,
    number: props.name,
    cvv: props.cvv,
    name: props.name,
  }

  let result = await fetch(`${baseURL}/cards`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  })

  const dataResult = await result.json()
  return dataResult
}

export const getApiData = async () => {
  let result = await fetch(`${baseURL}/cards`)
  const dataResult = await result.json()
  return dataResult
}
