export const save = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error.message);
  }
};

export const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.log(error.message);
  }
};

export const remove = key => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log(error.message);
  }
};
