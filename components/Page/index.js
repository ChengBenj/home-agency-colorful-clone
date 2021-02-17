import { useContext } from "react";
import PageContext from "../../context/page";


const Page = ({ color, index }) => {
    const { actualPage } = useContext(PageContext);

    const defaultClass = " h-full w-full absolute inset-0 transition-all duration-700 ease-in-out transform translate-y-0 ";
    const hideClass = "translate-y-full delay-700";

    return (
        <div className={color + defaultClass + (actualPage !== index ? hideClass : '')}>
        </div>
    )
}

export default Page;