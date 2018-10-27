import type from 'types/auth';

export function authRequest(form) {
  return {
    type: type.AUTH_REQUEST,
    payload: {
      ...form,
    },
  };
}

export function signOut() {
  return {
    type: type.SIGN_OUT,
    payload: false,
  };
}
