import ShortcutIcon from "./ShortcutIcon";

export type ShortcutConfig = { 
  position: [number, number], 
  title: string, 
  icon: ShortcutIcon, 
  action: () => void
}