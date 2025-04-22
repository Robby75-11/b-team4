const initialState = {
  profile: {}, // Stato iniziale del profilo
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROFILE":
      return {
        ...state,
        profile: action.payload, // Salva direttamente i dati del profilo
      };
    default:
      return state;
  }
};

export default profileReducer;
