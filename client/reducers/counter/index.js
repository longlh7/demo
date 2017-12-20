const counter = (state = {
    num: undefined
}, action) => {
    switch (action.type) {
      case 'client/UPDATE':
          console.log('action', action);
          return {
              ...state,
              num: action.num
          }
      default:
        return state
    }
}

export default counter
