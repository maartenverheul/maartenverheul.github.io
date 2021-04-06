import { configureStore } from '@reduxjs/toolkit';
import LocalstorageService from '../services/LocalstorageService';
import update from 'immutability-helper';
import { AppState } from '../types/AppState';
import { ShortcutConfig } from '../types/ShortcutConfig';

type INITIAL_STATE_TYPE = {
  appstate: AppState,
  stopcode: string,
  shortcuts: ShortcutConfig[]
}

export const INITIAL_STATE: INITIAL_STATE_TYPE = {
  appstate: AppState.BOOTING,
  stopcode: "CRITICAL_PROCESS_DIED",
  shortcuts: [
    { position: [1, 1], title: "LinkedIn", icon: 'EdgeIcon', target:  `open https://www.linkedin.com/in/maarten-verheul/` },
    { position: [2, 1], title: "Instagram", icon: 'EdgeIcon', target: `open https://www.instagram.com/meerofmindermaarten/` },
    { position: [2, 3], title: "CV.txt", icon: 'NotepadIcon', target: `notepad CV.txt` },
    { position: [3, 4], title: "Maarten Verheul.txt", icon: 'NotepadIcon', target: `notepad "Maarten Verheul.txt"` }
  ]
};
const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
      case 'SET_BOOTSTATE':
        return update(state, { appstate: {$set: action.payload} })
      case 'ADD_SHORTCUT':
        return update(state, { shortcuts: {$push: action.payload} })
      default:
        return state;
  }
}

const existingStorage = LocalstorageService.loadState();
export const store = configureStore({
  reducer: reducer,
  preloadedState: existingStorage
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
