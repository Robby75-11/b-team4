export const setProfile = (data) => ({
  type: "SET_PROFILE",
  payload: data, // Passa direttamente i dati del profilo
});

export const setEsperienze = (data) => ({
  type: "SET_ESPERIENZE",
  payload: data,
});

export const addEsperienza = (data) => ({
  type: "ADD_ESPERIENZA",
  payload: data,
});
