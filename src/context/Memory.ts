import React from "react";
import { AppState } from "../types/AppState";

export type MemoryState = {
  appstate: AppState
  stopcode: string|null
}

const MemoryContext = React.createContext<MemoryState>({
  appstate: AppState.BOOTING,
  stopcode: null
});

const MemoryProvider = MemoryContext.Provider;

const MemoryUpdate = {
  setAppState: (appstate: AppState) => {}
}

export default MemoryContext.Consumer;
export { MemoryProvider, MemoryUpdate }