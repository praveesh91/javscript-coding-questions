import "./Notification.css";
import {
  AiOutlineCheckCircle,
  AiOutlineClose,
  AiOutlineCloseCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
} from "react-icons/ai";

const iconStyles = { marginRight: "10px" };
const icons = {
  success: <AiOutlineCheckCircle style={iconStyles} />,
  info: <AiOutlineInfoCircle style={iconStyles} />,
  warning: <AiOutlineWarning style={iconStyles} />,
  error: <AiOutlineCloseCircle style={iconStyles} />,
};

const Notification = ({ type = "info", message, onClose }) => {
  return (
    <div className={`notification ${type}`}>
      {icons[type]}
      {message}
      {<AiOutlineClose className="closeBtn" onClick={() => onClose()} />}
    </div>
  );
};

export default Notification;
