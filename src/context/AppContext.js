import * as React from "react";

const AppContext = React.createContext();

export function useApp() {
  return React.useContext(AppContext);
}

const AppProvider = ({ children }) => {
  // Handle width
  const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    window.addEventListener("resize", (x) => setWidth(x.target.innerWidth));
  }, [width]);

  // Handle Bundles
  const [selectedBundles, setBundles] = React.useState([]);

  const addBundle = (item) => {
    setBundles((prevState) => [...selectedBundles, item]);
  };

  const getIndex = (key) => {
    for (var i = selectedBundles.length - 1; i >= 0; i--) {
      if (selectedBundles[i].productId === key) {
        return i;
      }
    }
    return null;
  };
  const removeBundle = (item) => {
    let bundleIndex = getIndex(item?.productId);
    let newBundle = selectedBundles;
    newBundle.splice(bundleIndex, 1);
    setBundles((prevState) => [...newBundle]);
  };

  return (
    <AppContext.Provider
      value={{
        width,
        addBundle,
        removeBundle,
        selectedBundles,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
