import { useContext } from "react";
import PageContext from "../../context/page";

const NavbarItem = ({ item, handleGoto, actualPage }) => {
    const selected = " w-3 h-3";

    return <div className={`cursor-pointer rounded-full z-30 w-2 h-2 bg-white transition-all duration-700 ease-in-out ${actualPage === item ? selected : ''}`} onClick={handleGoto} />
}

const Navbar = () => {
    const { actualPage, goto } = useContext(PageContext);

    const handleGoto = page => () => {
        goto(page)
    }

    return (
        <div className="absolute z-20 h-full right-12 t-0 b-0 flex flex-1 items-center">
            <div className="flex flex-1 flex-col justify-center items-center space-y-4 w-4">
                <NavbarItem item={0} handleGoto={handleGoto(0)} actualPage={actualPage} />
                <NavbarItem item={1} handleGoto={handleGoto(1)} actualPage={actualPage} />
                <NavbarItem item={2} handleGoto={handleGoto(2)} actualPage={actualPage} />
                <NavbarItem item={3} handleGoto={handleGoto(3)} actualPage={actualPage} />
                <NavbarItem item={4} handleGoto={handleGoto(4)} actualPage={actualPage} />
            </div>
        </div>
    )
}

export default Navbar;