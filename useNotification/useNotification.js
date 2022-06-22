export const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      //requestPermission()은 promise를 준다
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          //notification 보여 줄 수 있다!
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };

  return fireNotif;
};

const App = () => {
  const triggerNotif = useNotification("Can I steal your kimchi?", {
    body: "I love kimchi dont you"
  });
  return (
    <div className="App">
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
};