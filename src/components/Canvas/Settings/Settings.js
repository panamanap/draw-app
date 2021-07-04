import s from './Settings.module.css';

const Settings = (props) => {
    
    const {setLineSize, clearRect, setShow, show, lineSize} = props;

    return (
        <div className={s.rightbar}>
            <div className={s.wrapperSettings}>
                <button 
                    className={s.clearBtn} 
                    onClick={ () => clearRect()}
                >
                    ✖
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
                className={s.newSettings} 
                onClick={() => setShow(!show)}
            >
                Cкрыть настройки 
            </button>
        </div>
    );
}

export default Settings;