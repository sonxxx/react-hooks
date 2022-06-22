export const useHover = (onHover) => {
  const element = useRef();

  useEffect(() => {
    if (typeof onHover !== "function") {
      return;
    }

    if (element.current) {
      element.current.addEventListener("mouseenter", onHover);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("mouseenter", onHover);
      }
    };
  }, []);
  return element;
};


const App = () => {
  const sayHello = () => console.log("say hello~");

  const title = useClick(sayHello);

  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};