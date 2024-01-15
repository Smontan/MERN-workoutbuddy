import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"

export const useAuthContext = () => {
  const context = useContext(AuthContext)

  if (!context) throw Error("useAuthContext is not inside of the AuthContextProvider")

  return context
}