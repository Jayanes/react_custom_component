import SubTitle from "./SubTitle";

const Header = (props) => {
    return (
        <div className={props.className}>
            <h1>{props.title}</h1>
            <SubTitle subTitle={props.subTitle} />
        </div>
    ) ;
}

export default Header;

