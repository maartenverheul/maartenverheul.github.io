import ShortcutIcon from "./ShortcutIcon";

export type Shortcut = { 
  position: [number, number], 
  title: string, 
  icon: ShortcutIcon, 
  action: () => void
}