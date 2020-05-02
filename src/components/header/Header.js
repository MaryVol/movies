import React from 'react';
import styles from './Header.modules.css';

class Header extends React.Component {
    render() { 
        return ( 
            <div>
                <div className={styles.container}>
                    <h1>find your movie</h1>
                </div>
            </div>
         );
    }
}
 
export default Header;
