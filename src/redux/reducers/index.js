const initialState = {
  profile: { 
    area: "", // inizializza area come stringa vuota
    bio: "", // inizializza bio come stringa vuota
    createdAt: "", // inizializza createdAt come stringa vuota
    email: "", // inizializza email come stringa vuota
    image: "", // inizializza image come stringa vuota
    name: "", // inizializza name come stringa vuota
    surname: "", // inizializza surname come stringa vuota
    title: "", // inizializza title come stringa vuota
    updatedAt: "", // inizializza updatedAt come stringa vuota
    username: "", // inizializza username come stringa vuota
    __v: 0, // inizializza __v come 0
    _id: "" // inizializza _id come stringa vuota
   }
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROFILE":
      console.log(action.payload, state.profile,state);
      return {
        ...state,
        profile: action.payload ? action.payload : state.profile
      };
    default:
      return state;
  }
};

export default profileReducer;
