export default class ShortcutIcon {

  public readonly path: string;

  constructor(path: string){
    this.path = path;
  }

}

export const NotepadIcon = new ShortcutIcon("notepad");
export const EdgeIcon = new ShortcutIcon("edge");