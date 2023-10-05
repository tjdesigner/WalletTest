import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Card } from "../../../@types/card"
import axios from "axios"
import { baseURL } from "../../../service/api"

const initialState: Array<Card> = []

export const fetchCards = createAsyncThunk("cards/fetchCards", async () => {
  const response = await axios.get(`${baseURL}/cards`)
  return response.data
})

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addNewCard: (state, action: PayloadAction<Card>) => {
      state.push(...state, action.payload)
    },
  },
})

export const { addNewCard } = cardSlice.actions
export const cardReducer = cardSlice.reducer
