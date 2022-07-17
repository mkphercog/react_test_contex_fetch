export const createRandomURL = (baseURL) => {
  const min = 1;
  const max = 100;
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return `${baseURL}${randomNumber}`;
};

export const initialState = {
  name: "",
  id: 0,
  sprites: { front_default: "" },
  base_experience: 0,
};
