import workshop from "../../../assets/workshop.jpg";
import skies from "../../../assets/skies.jpg";
import rock from "../../../assets/rock.jpg";
import gondol from "../../../assets/gondol.jpg"
const PopularPosts = () => {
    return(
        <div className="sec">
            <h3 className="line1">Popular Posts</h3><hr/>
            <ul>
                <li className="li">
                   <img src={workshop} className="work" alt="workshop"/> 
                   <p className="bold">Lorem
                    <br/><span className="light">sed mattis nunc</span></p> 
                </li><hr className="line"/>
                <li className="li">
                   <img src={skies} className="work" alt="skies"/> 
                   <p className="bold">Lorem
                    <br/><span className="light">sed mattis nunc</span></p> 
                </li><hr className="line"/>
                <li className="li">
                   <img src={rock} className="work" alt="rock"/> 
                   <p className="bold">Lorem
                    <br/><span className="light">sed mattis nunc</span></p> 
                </li><hr className="line"/>
                <li className="li">
                   <img src={gondol} className="work" alt="gondol"/> 
                   <p className="bold">Lorem
                    <br/><span className="light">sed mattis nunc</span></p> 
                </li>
            </ul>

            </div>

    )
}
export default PopularPosts;