import ItemOne from "./ItemOne";

const BodyElements = (props) => {
    return (
        <div>
            <ItemOne child1Method_ref={props.child1Method_ref} buttonName={props.buttonName} buttonNameTwo={props.buttonNameTwo} />
        </div>
    );
}

export default BodyElements;