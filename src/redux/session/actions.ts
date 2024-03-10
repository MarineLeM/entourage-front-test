interface SetSessionId {
  type: 'SET_SESSION_ID';
  payload: string;
}

export const setSessionId = (id: string): SetSessionId  => ({
  type: 'SET_SESSION_ID',
  payload: id,
});

//  ACTION TYPE
export type SessionAction = SetSessionId;