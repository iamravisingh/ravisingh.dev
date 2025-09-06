import { Profile, BaseMap } from "./component"
import "./style.css";

export const Home = () => {
    return (
        <div className="container">
            {/* <BaseMap/> */}
            <section>
                <Profile/>
            </section>
        </div>
    )
}