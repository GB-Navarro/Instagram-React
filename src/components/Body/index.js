import Stories from "./Stories";
import Posts from "./Posts";
import Sidebar from "./Sidebar";

export default function Body() {
    return (
        <>
            <div className="corpo">
                <div>
                    <Stories />
                    <Posts />
                </div>
                <div className="esquerda">
                    <Sidebar />
                </div>
            </div>
        </>
    )
}