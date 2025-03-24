const redux = require('redux')
const createStore = redux.createStore

const bindActionCreators = redux.bindActionCreators

const CAKE_ORDERED = 'CAKE_ORDERED'

function orderCake() {
  return {
    type: CAKE_ORDERED,
  }
}

const initialState = {
  numOfCakes: 10,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      }
    default:
      return state
  }
}

const store = createStore(reducer)
console.log('Initial State ', store.getState())

const unsubscribe = store.subscribe(() => {
  console.log('Updated State ', store.getState())
})

const actions = bindActionCreators(
  { orderCake },
  store.dispatch
)

actions.orderCake()
actions.orderCake()
actions.orderCake()

unsubscribe()