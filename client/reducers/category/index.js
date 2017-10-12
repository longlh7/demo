const category = (state = {
      keyy: [
          'prs',
          'gibson'
      ],
      mapp: {
          prs: {
            id: 'prs',
            text: 'Paul Reed Smith',
            status: true
          },
          gibson: {
            id: 'gibson',
            text: 'Gibson',
            status: false
          }
      }
}, action) => {
    switch (action.type) {
      case 'CHANGE':
          console.log('STATE', state.mapp[action.id]);
          return {
              ...state,
              mapp: {
                  ...state.mapp,
                  [action.id]: brand(state.mapp[action.id], action)
              }
          }
      default:
        return state
    }
}

const brand = (state = {
    id,
    text,
    status
}, action) => {
    switch (action.type) {
      case 'CHANGE':
          return {
              ...state,
              status: !state.status
          }
      default:
          return state
    }
}

export default category
