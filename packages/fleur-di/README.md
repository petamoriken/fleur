# 🌼 fleur-di 💉 [![npm version](https://badge.fury.io/js/%40ragg%2Ffleur-di.svg)](https://www.npmjs.com/package/@ragg/fleur-di) [![travis](https://travis-ci.org/ra-gg/fleur.svg?branch=master)](https://travis-ci.org/ra-gg/fleur)

Simply DI container without any dependency for TypeScript

## Example

```typescript
import { inject } from '@ragg/fleur-di'
import { getUser } from './api'

const fetchUser = inject({ getUser })(
  (injects) => async (userId: string) => {
    await injects.fetchUser(userId)
  },
)

// Fetch user data
await fetchUser('1')

// Inject mock
const fetchUserMock = (userId: string) => ({ id: userId })
await fetchUser.inject({ getUser: fetchUserMock }).exec('1')

// with redux-thunk
export const fetchUserAction = inject({ fetchUser })(
  (injects) => (userId: string) => async (dispatch, getState) => {
    const user = await injects.fetchUser(userId)
    dispatch({ type: 'FETCH_USER_SUCCESS', payload: user })
  },
)

// in tests
dispatch(fetchUserAction.inject({ getUser: fetchUserMock }).exec('1'))
```