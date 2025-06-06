import { Outlet,Link } from "react-router-dom"; /*헤더랑 바디 분리*/

const Header = () => {
    return(
        <>
        <nav className="navbar navbar-expand-sm bg-light">
            <div className="container-fluid">

            <a className="navbar-brand" href="/">React-reperence</a>

            {/*햄버거 메뉴 */}
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#target">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="target">
            <ul className="navbar-nav me-auto">  {/*me-auto->margin end-auto :오른쪽 여백을 자동으로 조절한다는것 */}
                <li className="nav-item"> 
                    <Link to="/" className="nav-link text-danger">Home</Link> {/*버튼을 감싸서 url을 연결*/}
                </li>
                <li className="nav-item">
                    <Link to="/container" className="nav-link text-secondary">Bootstarp_Container</Link>
                </li>
                <li className="nav-item">
                    <Link to="/typo" className="nav-link text-secondary">Typography</Link>
                </li>
                <li className="nav-item">
                    <Link to="/color" className="nav-link text-secondary">Bootstrap_basic_color</Link>
                </li>

                <li className="nav-item">
                    <Link to="/flex" className="nav-link text-secondary">Flex 유연하게</Link>
                </li>

                <li className="nav-item">
                    <Link to="/flex2" className="nav-link text-secondary">Flex2 유연하게2</Link>
                </li>



                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-secondary" href="#" data-bs-toggle="dropdown">
                        React-Bootstrap
                    </a>
                    <ul className="dropdown-menu mb-5">
                        <li className="nav-item">
                            <Link to="/hooks" className="nav-link text-secondary">Hooks</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/effect" className="nav-link text-secondary">useEffect</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/tabss" className="nav-link text-secondary">Tabs</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/buttons" className="nav-link text-secondary">Buttons</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/ref" className="nav-link text-secondary">Ref</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/fig" className="nav-link text-secondary">Figures</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/tb" className="nav-link text-secondary">Table</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/modals" className="nav-link text-secondary">Modals</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/pagen" className="nav-link text-secondary">스크립트가 들어간 페이지네이션</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/ts" className="nav-link text-secondary">Toast</Link>
                        </li>
                    </ul>
                </li>

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-secondary" href="#" data-bs-toggle="dropdown">
                        bootstrap component
                    </a>
                    <ul className="dropdown-menu mb-5">
                        <li className="nav-item">
                            <Link to="/table" className="nav-link mb-1 mt-1 text-secondary">Table</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/img" className="nav-link mb-1 mt-1 text-secondary">Image</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/jumbo" className="nav-link mb-1 mt-1 text-secondary">Jumbotron점보트론</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/alerts" className="nav-link mb-1 mt-1 text-secondary">Alerts경고창</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/btn" className="nav-link mb-1 mt-1 text-secondary">Button</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/badges" className="nav-link mb-1 mt-1 text-secondary">Badges</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/progress" className="nav-link mb-1 mt-1 text-secondary">Progress bar프로그레스 바</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cards" className="nav-link mb-1 mt-1 text-secondary">Cards</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/layer" className="nav-link mb-1 mt-1 text-secondary">Layer</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/toastm" className="nav-link mb-1 mt-1 text-secondary">Toastm토스트메세지</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/pagination" className="nav-link mb-1 mt-1 text-secondary">Pagination리스트그룹</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/list" className="nav-link mb-1 mt-1 text-secondary">List</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/collapse" className="nav-link mb-1 mt-1 text-secondary">Collapse콜랍스</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/form" className="nav-link mb-1 mt-1 text-secondary">Form양식</Link>
                        </li>

                    </ul>
                </li>    
            </ul>
            </div>
            </div>
        </nav>
        <Outlet/> {/*선언하지 않으면 제대로 작동하지 않음*/}
        </>
    )
}
export default Header;