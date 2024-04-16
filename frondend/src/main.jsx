import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import { Provider } from 'react-redux'
import appStore from './utils/appStore.js'
import HomeScreen from './screens/HomeScreen.jsx'
import ResgisterScreen from './screens/ResgisterScreen.jsx'
import PrivetRoute from './components/PrivetRoute.jsx';
import LoaginScreen from './screens/LoaginScreen.jsx'
import ProfileScreen from './screens/ProfileScreen.jsx'

export const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route index={true} path='/' element={<HomeScreen/>}/>
    <Route path='/login' element={<LoaginScreen/>}/>
    <Route path='/register' element={<ResgisterScreen/>}/>
    <Route path='' element={<PrivetRoute/>}>
      <Route path='/profile' element={<ProfileScreen/>}/>
    </Route>
  </Route>
));

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={appStore}>
    <React.StrictMode>
      <RouterProvider router={appRouter}/>
    </React.StrictMode>
  </Provider>
)
