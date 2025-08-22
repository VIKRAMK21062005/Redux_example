import CustomerAdd from './CustomerAdd'
import './App.css'
import CustomerView from './CustomerView';
import { Provider } from 'react-redux';
import { store } from './store';


export default function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <h1>React Redux Customer Example</h1>
        <CustomerAdd />
        <CustomerView />
      </div>
    </Provider>
  )
}
