import { SessionAction } from "./actions";

type SessionState = {
  id: string | null;
};

const initialState: SessionState = {
  id: null,
};

export const sessionReducer = (state = initialState, action: SessionAction ): SessionState => {
  switch (action.type) {
    case 'SET_SESSION_ID':
      return { id: action.payload };
    default:
      return state;
  }
};
