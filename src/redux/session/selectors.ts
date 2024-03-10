import { RootState } from "../rootReducer";

export const getSessionId = (state: RootState) => state.session.id;
