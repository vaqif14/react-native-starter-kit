import type from 'types/auth';

const INITIAL_STATE = {
  user: false,
  token: false,
  authenticating: false,
  authenticated: false,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case type.SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };

    case type.AUTH_REQUEST:
      return {
        ...state,
        authenticating: true,
      };

    case type.SET_USER:
      return {
        ...state,
        user: action.payload,
        authenticating: false,
        authenticated: true,
      };

    case type.SIGN_OUT:
    case 'RESET':
      return INITIAL_STATE;

    default:
      return state;
  }
}
