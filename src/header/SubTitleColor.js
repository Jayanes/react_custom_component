import { useDispatch } from 'react-redux';
import { changeTitleColor } from '../actions';

const SubTitleColor = () => {
    const dispatch = useDispatch();

    const changeColor = () => {
        let colors = ["#B0E0E6", "red", "yellow", "#40E0D0", "blue", "green", "purple", "pink","#008B8B","#00FF7F","#FF00FF","#FFA500","#DC143C","#FA8072"];

        let random = colors[Math.floor(Math.random() * colors.length)];
        dispatch(changeTitleColor(random))
    }

    return { changeColor }
}
export default SubTitleColor;