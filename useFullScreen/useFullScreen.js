export const useFullscreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };
  return { element, triggerFull, exitFull };
};

const App = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We ard small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);

  return (
    <div className="App">
      <div ref={element}>
        <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" width="250" />
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
};