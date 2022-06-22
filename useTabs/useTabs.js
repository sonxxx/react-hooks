export const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);

  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};

const App = () => {
  const { currentIten, changeItem } = useTabs(0, content)

  return (
    <div className="App">
      {content.map((section, index) => {
        <button onClick={() => changeItem(index)}>{section.content}</button>
      })}
      <div>{currentIten.content}</div>
    </div>
  );
};