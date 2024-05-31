import React from 'react';
import wood from '../../assets/woods.jpg';
import bridge from '../../assets/bridge.jpg'; // Import the image

const LeftPanel = () => {
    return( 
        <div className="left-panel">
            <div className="card1">
                <img src={wood} alt="wood" /> {/* Self-closing tag with alt attribute */}
                <div className='des'>
                    <h2>title heading</h2>
                    <p>Title description, April 7, 2014</p><br/>
                    <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl.
                         Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim,
                          ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. 
                          Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum,
                         porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                         <button><b>read more</b></button>
                         
            </div>
            </div>

            <div className="card1">
            <img src={bridge} alt="bridge" />
            <div className='des'>
                    <h2>title heading</h2>
                    <p>Title description, April 7, 2014</p><br/>
                    <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl.
                         Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim,
                          ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. 
                          Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum,
                         porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                         <button><b>read more</b></button>
            </div>
            </div>
        </div>
    );
}

export default LeftPanel;
