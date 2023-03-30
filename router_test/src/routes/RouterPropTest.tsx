import { Link } from "react-router-dom";

export default function RouterPropTest() {
    const menu = ({
        name: "간짜장",
        price: "5000원",
    })
    return (
        <>
            <h1>Roouterproptest</h1>
            <Link to={{
                pathname: "/routerproptestresult",
            }}>데이터 날리기</Link>
        </>
    );
        }
        
