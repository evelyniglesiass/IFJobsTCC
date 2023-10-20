import createGlobalState from "react-create-global-state";

const USER_KEY = "user";

const stateInStorage = localStorage.getItem(USER_KEY);

const initialState = stateInStorage ? JSON.parse(stateInStorage) : null;

const [_useGlobalUser, Provider] = createGlobalState(initialState);


function useGlobalUser() {
  const [_user, _setUser] = _useGlobalUser();

  function setUser(user, postAction) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    _setUser(user);
  }

  return [_user, setUser];
}

export const GlobalUserProvider = Provider;

export default useGlobalUser;