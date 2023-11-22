import styles from "./navbar.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <section className={styles.container}>
            <div className={styles.top}>
                <h1>REMINISCE</h1>
                <i className={styles.logo}></i>
                <h1>VISUALS</h1>
                <div className={styles.details}>
                    <div className={styles.group}>
                        <FontAwesomeIcon icon={faPhone} className={styles.icon}/>
                        <span>+639 948-623-9661</span>
                    </div>
                    <div className={styles.group}>
                        <FontAwesomeIcon icon={faEnvelope} className={styles.icon}/>
                        <span>reminiscevisuals@gmail.com </span>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/book">Book Us</Link></li>
                </ul>
            </div>
        </section>
    )
}

export default Navbar;