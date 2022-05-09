import Stories from "./Stories";
import Posts from "./Posts";
import Sidebar from "./Sidebar";
import FundoMobile from "./Mobile";

export default function Body() {
    return (
        <>
            <div className="corpo">
                <div>
                    <Stories />
                    <Posts />
                    <FundoMobile />
                </div>
                <div className="esquerda">
                    <Sidebar />
                </div>
            </div>
        </>
    )
}