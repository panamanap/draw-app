import s from './ButtonItem.module.css';

const ButtonItem = ({color, setColor}) => {

    const styles = {
        backgroundColor: color,
    }

    return (
        <div>
            <button 
                style={styles} 
                className={s.btn} 
                onClick={() => setColor(color)}
            >
            </button>
        </div>
    );
}

export default ButtonItem;