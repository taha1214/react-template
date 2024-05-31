import Profile from "./profile";
import PopularPosts from "./popularPost"
import Tags from "./tags";

const RightPanel = () =>{
    return( 
      <div className="right-panel">
        <Profile />
        <PopularPosts />
        <Tags />

    </div>
    );
}
export default RightPanel;