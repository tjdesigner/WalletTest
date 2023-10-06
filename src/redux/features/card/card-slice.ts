import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Card } from "../../../@types/card"
import axios from "axios"
import { baseURL } from "../../../service/api"

const initialState: Array<Card> = []

export const fetchCards = createAsyncThunk("cards/fetchCards", async () => {
  const response = await fetch(`${baseURL}/cards`)
  return response.json()
})

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addNewCard: (state, action: PayloadAction<Card>) => {
      state.push(...state, action.payload)
    },
    allCards: (state, action: PayloadAction<Card>) => {
      state.push(...state)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCards.fulfilled, (state, action) => {
      state += action.payload
    })
  },
})

export const { addNewCard } = cardSlice.actions
export const cardReducer = cardSlice.reducer
