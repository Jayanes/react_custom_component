import SubTitle from "./SubTitle";

const Header = (props) => {

    return (
        <div className={props.className}>
            <h1>{props.title}</h1>
            <SubTitle child1Method_ref={props.child1Method_ref} subTitle={props.subTitle} subTitleTwo={props.subTitleTwo} />
        </div>
    ) ;
}

export default Header;

