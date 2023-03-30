import {Link} from "react-router-dom";
import RouterPropTest from '../routes/RouterPropTest';
import RouterPropTestResult from "../routes/RouterPropTestResult";

export default function Nav(){
    return(
    <>
    <h1>Nav</h1>
    <ul className="navList">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/routerproptest'>RouterPropTest</Link></li>
        <li><Link to='/routerproptestresult'>About</Link></li>
        <li><Link to='/routerproptestresult'>About</Link></li>
    </ul>
    </>
    )
}