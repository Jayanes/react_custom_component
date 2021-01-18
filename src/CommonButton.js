const CommonButton = (props) => {
    return (
        <button type={props.type} onClick={props.onClick} className={props.buttonClass}>
            {props.buttonName}
        </button>
    )
}
export default CommonButton