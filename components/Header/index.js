import Item from "../Navitem";

const Header = () => {
    return (
        <header className="absolute z-10 w-full p-8">
            <div className="w-full lg:max-w-screen-lg md:max-w-screen-md mx-auto flex flex-row">
                <div>
                    <img src="https://saasland2.droitthemes.com/wp-content/themes/saasland/assets/img/logo.png" />
                </div>

                <div className="lg:flex flex-1 justify-end items-center hidden">
                    <div className="flex flex-row space-x-12">
                        <Item>Home</Item>
                        <Item>Pages</Item>
                        <Item>Blog</Item>
                        <Item>Shop</Item>
                        <Item>Elements</Item>
                        <Item>Portfolio</Item>
                    </div>
                </div>

                <div className="flex flex-1 lg:flex-none justify-end items-center ml-16">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
            </div>
        </header>
    )
}

export default Header;