import { useEffect, useRef, useState } from 'react';
import s from './Canvas.module.css';
import Settings from './Settings/Settings';

const Canvas = (props) => {

    const { color, 
            isDrawing, 
            setIsDrawing, 
            lineSize, 
            setLineSize,
            show,
            setShow
          } = props;

    const canvasRef = useRef(null);
    const contextRef = useRef(null);

    useEffect( () => {
        const canvas = canvasRef.current;
                    
        const context = canvas.getContext('2d');
        context.lineCap = 'round';
        context.strokeStyle = color;
        context.lineWidth = lineSize; 
        contextRef.current = context;
    },[color, lineSize])
                
    const startDrawing = (e) => {
        const x = e.pageX - e.target.offsetLeft;
        const y = e.pageY - e .target.offsetTop;
        contextRef.current.beginPath();
        contextRef.current.moveTo(x, y);
        setIsDrawing(true);
    } 
                
    const finishDrawing = () => {
        contextRef.current.closePath();
        setIsDrawing(false);
    } 
                
    const draw = (e) => {
        if(!isDrawing) {
            return
        }
        const x = e.pageX - e.target.offsetLeft;
        const y = e.pageY - e .target.offsetTop;
        contextRef.current.lineTo(x, y);
        contextRef.current.stroke();
    } 

    const clearRect = () => {
        contextRef.current.clearRect(0, 0, 1400, 600); 
        console.log(show);  
    }

    return (
        <div className = {s.wrapper}>
            <canvas
                width ={1350} 
                height={600}
                className={s.wrapperCanvas}
                onMouseDown={startDrawing}
                onMouseUp={finishDrawing}
                onMouseMove={draw}
                ref={canvasRef}
            />
            
            {show ?
                // <Settings 
                //     setLineSize={setLineSize()}
                //     lineSize={lineSize}
                //     clearRect={clearRect()}
                //     setShow={setShow()}
                //     show={show}
                // />
                <div className={s.rightbar}>
                    <div className={s.wrapperSettings}>
                        <button 
                            className={s.newSettings} 
                            onClick={() => setShow(!show)}
                        >
                            Cкрыть настройки 
                        </button>
                    <div className={s.wrapperLineSize}>
                        <span>Размер линии:</span>
                        <input 
                            className={s.lineSize} 
                            type='text' 
                            onChange={(e) => setLineSize(e.target.value)} 
                            value= {lineSize}
                        />
                    </div>
                </div>
                <button 
                        className={s.clearBtn} 
                        onClick={ () => clearRect()}
                    >
                        ✖
                    </button>
            </div>
                :
                <button 
                    className= {s.settings}
                    onClick={() => setShow(!show)}
                >
                Настройки
            </button>
            }  
        </div>
    );
}

export default Canvas;