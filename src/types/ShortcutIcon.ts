export default class ShortcutIcon {

  public readonly path: string;

  constructor(path: string){
    this.path = path;
  }

  static from(name: string){
    switch(name) {
      case 'NotepadIcon': return NotepadIcon;
      case 'EdgeIcon': return EdgeIcon;
      default: return null;
    }
  }

}

export const NotepadIcon = new ShortcutIcon("notepad");
export const EdgeIcon = new ShortcutIcon("edge");