import { useDispatch, useSelector } from "react-redux";
import { getSessionId } from "../redux/session/selectors";
import { AppDispatch } from "../redux/store";
import { useEffect } from "react";
import { sessionService } from "../services/session/session";
import { SessionAction, setSessionId } from "../redux/session/actions";

export const useSession = () => {
  const sessionId = useSelector(getSessionId);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const fetchSessionId = async (): Promise<string> => {
      try {
        const newSessionId = await sessionService.createGuestSession();
        localStorage.setItem('sessionId', newSessionId);
        return newSessionId;
      } catch (error) {
        console.error(error);
        throw error;
      }
    };

    const initializeSession = async () => {
      let id = localStorage.getItem('sessionId');
      if (!id) {
        id = await fetchSessionId();
      }
      dispatch<SessionAction>(setSessionId(id));
    };

    if (!sessionId) {
      initializeSession();
    }
  }, [dispatch, sessionId]);

  return { sessionId };
};
