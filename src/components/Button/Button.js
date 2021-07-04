import { colors } from '../utils/colors';
import ButtonItem from './ButtonItem/ButtonItem';
import s from './Button.module.css';

const Button = ({setColor}) => {
    
    return (
        <div className = {s.wrapperBtn}>
           {colors.map( item => 
                <ButtonItem 
                    key={item.id} 
                    color={item.color} 
                    setColor = {setColor}
                />
            )}
        </div>
        
    );
}

export default Button;