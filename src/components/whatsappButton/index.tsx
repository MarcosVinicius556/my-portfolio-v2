import styles from "./whatsappButton.module.css";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5599999999999" // coloque aqui seu número
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappButton}
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
