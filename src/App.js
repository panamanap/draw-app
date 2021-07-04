import Button from './components/Button/Button';
import Canvas from './components/Canvas/Canvas';
import s from './App.module.css';
import { useState } from 'react';

const App = () => {

    const [color, setColor] = useState('black');
    const [isDrawing, setIsDrawing] = useState(false);
    const [lineSize, setLineSize] = useState(5);
    const [show, setShow] = useState(false);

    return (
        <div className={s.wrapperApp}>
            <Canvas 
                color={color} 
                isDrawing={isDrawing} 
                setIsDrawing={setIsDrawing}
                lineSize={lineSize}
                setLineSize={setLineSize}
                show={show}
                setShow={setShow}
            />
            <Button setColor={setColor} />        
        </div>
    );
}

export default App;
