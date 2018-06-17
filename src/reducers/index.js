import { combineReducers } from 'redux'
import {
  SELECT_SUBREDDIT,
  INVALIDATE_TODO,
  REQUEST_TODOS,
  RECEIVE_TODOS
} from '../actions'

// function selectedSubreddit(state = 'reactjs', action) {
//   switch (action.type) {
//     case SELECT_SUBREDDIT:
//       return action.subreddit
//     default:
//       return state
//   }
// }

function todos(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case INVALIDATE_TODO:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_TODOS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_TODOS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.todos,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function todosBySubreddit(state = {}, action) {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
    case RECEIVE_TODOS:
    case REQUEST_TODOS:
      return Object.assign({}, state, {
        [action.subreddit]: todos(state[action.subreddit], action)
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  todos,
  // selectedSubreddit
})

export default rootReducer