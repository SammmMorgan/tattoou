import { reactive } from 'vue'
import { Tattoo } from './models/Tattoo.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  // @ts-ignore
  account: {},

  /** @type {Tattoo[]} */
  tattoos: [],

  collections: [],

  currentPage: 1,

  total: 0,
  /** @type {Tattoo[]} */
  likedImage: null
})
