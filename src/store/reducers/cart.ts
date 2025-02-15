import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: Cardapio[]
  isOpen: boolean
  step: number
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  step: 1
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Cardapio>) => {
      const itemInCart = state.items.find(
        (item) => item.id === action.payload.id
      )

      if (!itemInCart) {
        state.items.push(action.payload)
      } else {
        alert(`O prato "${itemInCart.nome}" já está no carrinho!`)
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    nextStep: (state) => {
      if (state.step < 4) state.step += 1
    },
    prevStep: (state) => {
      if (state.step > 1) state.step -= 1
    },
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { add, open, close, remove, nextStep, prevStep, setStep, clear } =
  cartSlice.actions
export default cartSlice.reducer
