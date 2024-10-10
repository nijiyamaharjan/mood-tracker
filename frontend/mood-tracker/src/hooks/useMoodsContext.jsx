import { MoodsContext } from "../context/MoodsContext"
import { useContext } from "react"

export const useMoodsContext = () => {
  const context = useContext(MoodsContext)

  if(!context) {
    throw Error('useMoodsContext must be used inside an WorkoutsContextProvider')
  }

  return context
}