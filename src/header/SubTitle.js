import { useSelector } from 'react-redux';
import { useEffect, useCallback, useState } from 'react';

const SubTitle = (props) => {
    const [newColor, setNewColor] = useState('#808000')
    const color = useSelector(state => state.common.titleColor);

    const child1Method = useCallback(()=>{
        let colors = ["#B0E0E6", "#00FF00", "#008000", "#40E0D0", "#00FFFF", "#051937", "#CCCCFF","#FF00FF","#00FF7F","#33D7FF","#33FFA5","#DC143C","#FA8072"];

        let random = colors[Math.floor(Math.random() * colors.length)];
        setNewColor(random);
    },[]);

    useEffect(() => {
        props.child1Method_ref.current  = child1Method
    }, [])


    return (
        <div>
            <h2 style={{ color: color }}>{props.subTitle}</h2>
            <h2 style={{ color: newColor }}>{props.subTitleTwo}</h2>
        </div>
    );
}
export default SubTitle