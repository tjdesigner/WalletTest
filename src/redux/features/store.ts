import { configureStore, createSelector } from "@reduxjs/toolkit"
import { cardReducer } from "./card/card-slice"
import { Card } from "../../@types/card"

export const store = configureStore({
  reducer: {
    card: cardReducer,
  },
})

export const getCardState = createSelector(
  (state: Card) => state,
  (cardState) => cardState
)
