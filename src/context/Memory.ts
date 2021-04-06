import React from "react";
import { AppState } from "../types/AppState";
import { ShortcutConfig } from "../types/ShortcutConfig";

export type MemoryState = {
  appstate: AppState
  stopcode: string|null,
  shortcuts: ShortcutConfig[]
}

const MemoryContext = React.createContext<MemoryState>({
  appstate: AppState.BOOTING,
  stopcode: null,
  shortcuts: []
});

const MemoryProvider = MemoryContext.Provider;

const MemoryUpdate = {
  setAppState: (appstate: AppState) => {}
}

export default MemoryContext.Consumer;
export { MemoryProvider, MemoryUpdate }