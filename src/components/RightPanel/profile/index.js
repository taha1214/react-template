 import avatar from '../../../assets/avatar_g.jpg';
const Profile = () =>{
    return( 
      
        <div className="sec">
            <img src={avatar} alt="avatar" />
            <div className='pad'>
                <h2>my name</h2>
                <p>
                Just me, myself and I, exploring the universe of uknownment. I have a heart of 
                love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.
                </p>
            </div>
        </div>

    );
}
export default Profile;