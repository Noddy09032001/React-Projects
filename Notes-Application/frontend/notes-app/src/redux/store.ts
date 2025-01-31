import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/counter/counterSlice";
import translateSlice from "./slice/translate/translateSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    translate: translateSlice,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
