import styles from "./navbar.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const Navbar = ({currentPage}) => {

    const getClassName = (name) => {
        return name === currentPage ? styles.active : '';
    }

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
                    <li><Link to="/home" className={getClassName("home")}>Home</Link></li>
                    <li><Link to="/about" className={getClassName("about")}>About</Link></li>
                    <li><Link to="/services" className={getClassName("services")}>Services</Link></li>
                    <li><Link to="/gallery" className={getClassName("gallery")}>Gallery</Link></li>
                    <li><Link to="/book" className={getClassName("book")}>Book Us</Link></li>
                    <li><Link to="/pricing" className={getClassName("pricing")}>Picing</Link></li>
                </ul>
            </div>
        </section>
    )
}

export default Navbar;