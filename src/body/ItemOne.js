import CommonButton from "../CommonButton";
import SubTitleColor from "../header/SubTitleColor";

const ItemOne = (props) => {
    const { changeColor } = SubTitleColor();
   return (
       <div>
           <p>Body items</p>
           <br/>
           <CommonButton buttonName={props.buttonName} onClick={changeColor} />
       </div>
   )
}

export default ItemOne;