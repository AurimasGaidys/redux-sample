export default (state = [], payload) => {
  switch (payload.type) {
    case "reload":
      return payload.item;

    case "update":
      let newState = [...state];
      // Id in data starts from 1, in array from 0.
      newState[payload.item.id - 1] = payload.item;
      return newState;

    default:
      return state;
  }
};
