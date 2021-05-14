
export const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "Add-Article":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 1000),
          title: action.article.title,
          body: action.article.body,
        },
      ];
    case "Delete-Article":
      /* variant 1(see in the reducer too):
      const update = [...state];
      update.splice(update.indexOf(action.id), 1);
      return update;*/
      return state.filter(article=>article.id!==action.article.id)
    default:
      return state;
  }
};
