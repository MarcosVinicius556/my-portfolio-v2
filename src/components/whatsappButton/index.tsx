import styles from "./whatsappButton.module.css";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5549998266688&text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20voc%C3%AA!"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappButton}
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
