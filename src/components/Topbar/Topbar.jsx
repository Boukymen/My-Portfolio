import './topbar.scss';

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="into">
                        <img className="logo" src="assets/logo.png" alt="BoukyTech"/>
                    </a>
                    {/*<div className="left itemContainer">*/}
                    {/*    <Person className="icon"/>*/}
                    {/*    <span> +212 6 999 06 595</span>*/}
                    {/*</div>*/}
                    {/*<div className=" left   itemContainer">*/}
                    {/*    <Mail className="icon"/>*/}
                    {/*    <span> boukymen@gmail.com</span>*/}
                    {/*</div>*/}
                </div>
                <div className="right">

                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
