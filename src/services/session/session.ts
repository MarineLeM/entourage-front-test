import { AxiosResponse } from 'axios';

import { api } from "../../utils/api";

type SessionService = {
  getRequestToken: () => Promise<string>;
  createGuestSession: () => Promise<string>;
}

export const sessionService: SessionService = {

  getRequestToken: async (): Promise<string> => {
    try {
      const response: AxiosResponse = await api.get('/authentication/token/new');
      return response.data.request_token;
    } catch (error) {
      throw new Error('Error fetching movies');
    }
  },

  createGuestSession: async (): Promise<string> => {
    try {
      const response: AxiosResponse = await api.post('/authentication/guest_session/new');
      return response.data.guest_session_id;
    } catch (error) {
      throw new Error('Error creating guest session');
    }
  }
};
