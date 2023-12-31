import { Switch, Redirect, Route } from 'wouter'
import HomePage from './pages/home'
import DashboardPage from './pages/dashboard'
import RegisterPage from './pages/register'

import { AuthProvider } from './context/authContext'
import { DescriptionTramitProvider } from './context/descriptionTramitContext'
import { TramitProvider } from './context/tramitContext'
import LoginPage from './pages/login'
import Layout from './components/layout'

function App() {
  return (
    <AuthProvider>
      <DescriptionTramitProvider>
        <TramitProvider>
          <Layout>
            <Switch>
              <Route path='/' component={HomePage} />
              <Route path='/tramite/:id' component={HomePage} />
              <Route path='/dashboard' component={DashboardPage} />
              <Route path='/register' component={RegisterPage} />
              <Route path='/login' component={LoginPage} />
              <Route path='/:rest*'>
                <Redirect to='/' />
              </Route>
            </Switch>
          </Layout>
        </TramitProvider>
      </DescriptionTramitProvider>
    </AuthProvider>
  )
}

export default App
