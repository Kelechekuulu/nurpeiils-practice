import { Provider } from 'react-redux/es/exports'
import './App.css'
import Checkout from './JS/Checkout'
import { store } from './store'

export function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Checkout />
            </Provider>
        </div>
    )
}
