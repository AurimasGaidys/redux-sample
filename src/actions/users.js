export const addUser = item => {
  console.log("reaload items: ", item);

  return {
    type: "reload",
    item
  };
};

export const updateUser = item => {
  console.log("update item: ", item);

  return {
    type: "update",
    item
  };
};
