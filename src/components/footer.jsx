import styles from "./footer.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <section className={styles.container}>
            <div className={styles.left}>
                <div>
                    <h1>REMINISCE</h1>
                    <span></span>
                    <h1>VISUALS</h1>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedLorem <br/>ipsum dolor sit amet, consectetur adipiscing elit, sedLorem <br/>ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                <h3>2023 Reminisce Visuals. All rights reserved.</h3>
            </div>
            <div className={styles.right}>
                <div className={styles.row}>
                    <a>Home</a>
                    <a>About</a>
                    <a>Services</a>
                    <a>Book Us</a>
                </div>
                <div className={styles.row}>
                    <span>Fb</span>
                    <span>Ig</span>
                </div>
                <div className={styles.row}>
                    <div>
                        <FontAwesomeIcon icon={faPhone} className={styles.icon}/>
                        <span>+639 948-623-9661</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faEnvelope} className={styles.icon}/>
                        <span>reminiscevisuals@gmail.com</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;