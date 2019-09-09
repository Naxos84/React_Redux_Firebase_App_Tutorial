export interface AuthState {}

interface AuthAction {}
const initState: AuthState = {};
const authReducer = (state: AuthState = initState, action: AuthAction) => {
  return state;
};

export default authReducer;
