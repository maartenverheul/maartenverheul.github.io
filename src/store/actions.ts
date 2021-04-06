import { AppDispatch } from ".";
import { AppState } from "../types/AppState"

export const addShortcut = (name: string) => ({
  type: "ADD_SHORTCUT",
  payload: {
    name
  }
})
export const setBootstate = (value: AppState) => ({
  type: "SET_BOOTSTATE",
  payload: value
})

export const openURL = (url: string) => {
  return () => {
    window.open(url, "_blank");
  };
}