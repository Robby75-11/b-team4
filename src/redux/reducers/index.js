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
    _id: "", // inizializza _id come stringa vuota
  },
  esperienze: [
    {
      role: "F",
      company: "",
      startDate: "",
      endDate: null, // può essere null
      description: "",
      area: "",
      username: "", // SERVER GENERATED
      image: "", // SERVER GENERATED, modificabile
      createdAt: "", // SERVER GENERATED
      updatedAt: "", // SERVER GENERATED
      __v: 0, // SERVER GENERATED
      _id: "", // SERVER GENERATED
    },
  ],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROFILE":
      console.log(action.payload, state.profile, state);
      return {
        ...state,
        profile: action.payload ? action.payload : state.profile,
      };
    case "SET_ESPERIENZE":
      console.log("SET_ESPERIENZE payload:", action.payload);
      return {
        ...state,
        esperienze: action.payload ? action.payload : state.esperienze,
      };
    case "ADD_ESPERIENZA":
      console.log("ADD_ESPERIENZA payload:", action.payload);
      return {
        ...state,
        esperienze: [...state.esperienze, action.payload],
      };
    default:
      return state;
  }
};

export default profileReducer;
