const counter = (state = {
    num: undefined
}, action) => {
    switch (action.type) {
      case 'UPDATE':
          console.log('REDUCER ', action);
          return {
              ...state,
              num: action.value
          }
      default:
        return state
    }
}

export default counter
