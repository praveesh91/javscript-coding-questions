import { useCallback, useState } from "react";
import Notification from "../components/notification/Notification";

const useNotification = (position = "top-right") => {
  const [notification, setNotification] = useState(null);
  let timer;

  const triggerNotification = useCallback((notificationProps) => {
    setNotification(notificationProps);
    clearTimeout(timer);
    timer = setTimeout(() => {
      setNotification(null);
    }, notificationProps?.duration);
  }, []);

  const NotificationComponent = notification ? (
    <div className={`${position}`}>
      <Notification {...notification} />
    </div>
  ) : null;

  return { NotificationComponent, triggerNotification };
};
export default useNotification;
