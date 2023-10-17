// import createGlobalState from "react-create-global-state";

// const USUARIO_KEY = "usuario";

// const stateInStorage = localStorage.getItem(USUARIO_KEY);

// const initialState = stateInStorage ? JSON.parse(stateInStorage) : null;

// const [_useGlobalUsuario, Provider] = createGlobalState(initialState);

// function useGlobalUsuario(){
//     const [_Usuario, _setUsuario] = _useGlobalUsuario();

//     function setUsuario(usuario){
//         _setUsuario(usuario);
//         localStorage.setItem(USUARIO_KEY, JSON.stringify(usuario));
//     }

//     return [_Usuario, setUsuario];
// }

// export const GlobalUsuarioProvider = Provider;
// export default useGlobalUsuario;