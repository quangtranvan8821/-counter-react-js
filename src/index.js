import React ,{useState} from 'react';
import ReactDOM from 'react-dom';
import './style.css';



function App() {
    const [count, setCount] = useState(0);

    const countColor = (count) => {
        if(count == 0) {
            return 'reset';
        } else if(count > 0) {
            return 'positive';
        } else {
            return 'negative';
        }
    }

    return (
        <div className='App'>
            <h1 className={countColor(count)}>{count}</h1>
            <div>
                <button className='positive-btn' onClick={() => {setCount(count + 1)}}>Increase</button>
                <button className='reset-btn' onClick={() => {setCount(0)}}>Reset</button>
                <button className='negative-btn' onClick={() => {setCount(count - 1)}}>Decrease</button>
            </div>
        </div>
    )
}
const app = (<App />)
ReactDOM.render(app, document.getElementById('root'));