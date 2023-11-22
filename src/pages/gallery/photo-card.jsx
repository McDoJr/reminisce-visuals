import styles from "./photo-card.module.css";
import {useNavigate} from "react-router-dom";

const PhotoCard = ({title, backgroundImage, index}) => {

    const navigate = useNavigate();

    return (
        <section className={styles.container} style={{backgroundImage: `url(${backgroundImage})`}}>
            <div onClick={() => navigate("/services", {state:{index: index}})}>{title}</div>
        </section>
    )
}

export default PhotoCard;