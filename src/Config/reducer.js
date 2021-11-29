export const initialState = {
  user: null,
  cart: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      break;
  }
};

export const ACTION_TYPE = {
  SET_USER: 0,
};
