import React from 'react';
import "./Footer.css"

class Footer extends React.Component {
    render() {
      const { placeholder, description,type, id, name} = this.props;
  
      return (
        <div className='footer'>
            <hr/>
        </div>
      );
    }
  }
  
  export default Footer;