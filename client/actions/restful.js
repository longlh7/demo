import { getUrl } from './utils'
import { update } from './actions'

export const getCount = () => dispatch => {
  getUrl('/').then((response) => {
      console.log('GET /: ', response);
      dispatch(update(response.num))
  })
}
