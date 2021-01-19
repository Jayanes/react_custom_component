import CommonButton from "../CommonButton";
import SubTitleColor from "../header/SubTitleColor";

const ItemOne = (props) => {
    const { changeColor } = SubTitleColor();

   return (
       <div>
           <p>Body items</p>
           <br/>
           <CommonButton buttonName={props.buttonName} onClick={changeColor} /><br/>
           <CommonButton buttonName={props.buttonNameTwo}  onClick={()=> props.child1Method_ref.current() } />
       </div>
   )
}

export default ItemOne;