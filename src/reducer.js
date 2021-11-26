export const initialState = {
  user: null,
  cart: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.LOGIN:
      return {
        ...state,
        user: action.payload,
      };

    case ACTION_TYPE.LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      break;
  }
};

export const ACTION_TYPE = {
  LOGIN: 1,
  LOGOUT: 2,
};
