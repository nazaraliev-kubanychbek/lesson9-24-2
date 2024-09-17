import {incrementCount, decrementCount, resetCount, setText} from './redux/slice';
import { useDispatch } from 'react-redux';

const Buttons = () => {
    const dispatch = useDispatch();
    return (
        <div style={{textAlign: 'center'}}>
            <button onClick={()=>{
                dispatch(incrementCount())
            }}>+</button>
              <button onClick={()=>{
                dispatch(decrementCount())
            }}>-</button>
              <button onClick={()=>{
                dispatch(resetCount())
            }}>reset</button>
              <button onClick={()=>{
                dispatch(setText('Hello Geeks!'))
            }}>change</button>
        </div>
    );
}

export default Buttons;
