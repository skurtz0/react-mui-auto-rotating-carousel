import React, { useState } from "react";
import ReactDOM from "react-dom";
// import Slide from "react-swipeable-views";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { red, blue, green } from "@material-ui/core/colors";
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";
import Image from "./skurtz-logo.png";

const AutoRotatingCarouselModal = ({ handleOpen, setHandleOpen, isMobile }) => {
  return (
    <div>
      {/* <Button onClick={() => setHandleOpen({ open: true })}>Open carousel</Button> */}
      <AutoRotatingCarousel
        label="Get started"
        open={handleOpen.open}
        onClose={() => setHandleOpen({ open: false })}
        onStart={() => setHandleOpen({ open: false })}
        autoplay={false}
        mobile={isMobile}
        style={{ position: "absolute" }}
      >
        <Slide
          media={<img src={Image} />}
          mediaBackgroundStyle={{ backgroundColor: red[400] }}
          style={{ backgroundColor: red[600] }}
          title="SKURT GANG"
          subtitle="Hi Im SKURTZ."
        />
        <Slide
          media={<img src={Image} />}
          mediaBackgroundStyle={{ backgroundColor: red[400] }}
          style={{ backgroundColor: red[600] }}
          title="SKURT GANG"
          subtitle="Hi Im SKURTZ."
        />
        <Slide
          media={<img src={Image} />}
          mediaBackgroundStyle={{ backgroundColor: red[400] }}
          style={{ backgroundColor: red[600] }}
          title="SKURT GANG"
          subtitle="Hi Im SKURTZ."
        />
      </AutoRotatingCarousel>
    </div>
  );
};

function App() {
  const [handleOpen, setHandleOpen] = useState({ open: false });
  const handleClick = () => {
    setHandleOpen({ open: true });
  };
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <>
      <Button onClick={handleClick}>Learn much more things about SKURTZ</Button>
      <AutoRotatingCarouselModal
        isMobile={matches}
        handleOpen={handleOpen}
        setHandleOpen={setHandleOpen}
      />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
