import { useSelector } from "react-redux";

const Num = () => {
    const count = useSelector(s => s.slice.count);
    const text = useSelector(s => s.slice.text);
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{text}</h1>
            <h1 style={{textAlign: 'center'}}>{count}</h1>
        </div>
    );
}

export default Num;
