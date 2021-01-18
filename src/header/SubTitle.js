import { useSelector } from 'react-redux';

const SubTitle = (props) => {
    const color = useSelector(state => state.common.titleColor);

    return (
        <div>
            <h2 style={{ color: color }}>{props.subTitle}</h2>
        </div>
    );
}
export default SubTitle