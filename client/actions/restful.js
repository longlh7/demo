import { getUrl } from './utils'
import { update } from './actions'

export const increase = () => dispatch => {
  getUrl('/increase').then((response) => {
      console.log('GET /increase: ', response);
      dispatch(update(response.num))
  })
}

export const decrease = () => dispatch => {
  getUrl('/decrease').then((response) => {
      console.log('GET /decrease: ', response);
      dispatch(update(response.num))
  })
}

export const getCount = () => dispatch => {
  getUrl('/').then((response) => {
      console.log('GET /: ', response);
      dispatch(update(response.num))
  })
}
