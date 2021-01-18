import ItemOne from "./ItemOne";

const BodyElements = (props) => {
    return (
        <div>
            <ItemOne buttonName={props.buttonName}/>
        </div>
    );
}

export default BodyElements;