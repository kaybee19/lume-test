import React from "react";
import "./styles.scss";
import { useApp } from "../../../context/AppContext";

// Components
import Bundle from "./Bundle";
import ToggleButton from "./ToggleButton";

export default function BundleContainer() {
  const { width, selectedBundles } = useApp();
  const [showBundle, setShow] = React.useState(true);

  const toggleShow = () => {
    setShow(!showBundle);
    if (showBundle) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  React.useMemo(() => {
    if (width < 1300) {
      setShow(false);
    } else {
      setShow(true);
      document.body.style.overflow = "auto";
    }
  }, [width]);

  return (
    <React.Fragment>
      {width < 1300 && !showBundle && (
        <ToggleButton
          toggleShow={toggleShow}
          showBundle={showBundle}
          count={selectedBundles.length}
        />
      )}
      <div
        className={`bundle-container ${width < 1300 ? "mobile-bundle" : ""} ${
          !showBundle ? "hidden" : ""
        }`}
      >
        {
          <div className="container">
            <h3>My Bundle</h3>
            {width < 1300 && (
              <ToggleButton toggleShow={toggleShow} showBundle={showBundle} />
            )}
            {selectedBundles?.map((bundle, i) => (
              <Bundle key={i} bundle={bundle} />
            ))}
            {selectedBundles && (
              <div className="button-class">
                <small>Add To Cart</small>
              </div>
            )}
          </div>
        }
      </div>
    </React.Fragment>
  );
}
