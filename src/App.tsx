import { Provider } from 'react-redux'

import { Router } from '@/common/routes/router'
import { PersonalInformation } from '@/features/profile/ui/personalInformation'
import { store } from '@/services/store'

export function App() {
  return (
    <Provider store={store}>
      <Router />
      <PersonalInformation />
    </Provider>
  )
}
