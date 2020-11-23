const getStorage = () => {
  const storage = localStorage.getItem('@todo-list:items') as string;

  return JSON.parse(storage) || [];
}

const setStorage = (data: unknown) => {
  localStorage.setItem('@todo-list:items', JSON.stringify(data));
}

export { getStorage, setStorage };