// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Agenda
          </Heading>
          <Text>Async JS</Text>
          <Text>Web Performance Optimizations</Text>
          <Text>React Views with Windowing</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Async JS
          </Heading>
          <Text>Callbacks</Text>
          <Text>Thunks</Text>
          <Text>Promises</Text>
          <Text>Generators/Coroutines</Text>
          <Text>Event Reactive (observables)</Text>
          <Text>CSP (channel-oriented concurrency)</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>Callbacks</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/callbacks.example")}
            style={{fontSize:"2.8rem"}}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>Callback Hell</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/callbacksHell.example")}
            style={{fontSize:"1.2rem"}}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>Still Hell</Heading>
          <Heading size={5} textColor="secondary" caps>Inversion of Control</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/stillCallbackHell.example")}
            style={{fontSize:"1.2rem"}}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>Thunks</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/thunk.example")}
            style={{fontSize:"1.8rem"}}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>Async Thunks</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/thunkAsync.example")}
            style={{fontSize:"1.2rem"}}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>Make Thunk</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/makeThunk.example")}
            style={{fontSize:"1.2rem"}}
          />
        </Slide>
         <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>Promises</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/promises.example")}
            style={{fontSize:"0.8rem"}}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>Promise Patterns</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/promisePatterns.example")}
            style={{fontSize:"1.2rem"}}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>Generators</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/generators.example")}
            style={{fontSize:"1.5rem"}}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>Generator Coroutine</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/generatorCoroutine.example")}
            style={{fontSize:"1.0rem"}}
          />
        </Slide>
         <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>Generator Async</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/generatorAsync.example")}
            style={{fontSize:"1.0rem"}}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>Generator+Promises</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/generatorsPromises.example")}
            style={{fontSize:"1.0rem"}}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>RXJS Observables</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/rxObservable.example")}
            style={{fontSize:"1.0rem"}}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>CSP</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/csp.example")}
            style={{fontSize:"1.0rem"}}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>MobileWeb Performance Optimizations</Heading>
          <List>
            <ListItem>Avoid Redirects</ListItem>
            <ListItem>Deliver ATF (above-the-fold) in 14KB</ListItem>
            <ListItem>Avoid HTTP to HTTPS redirects (use HSTS, Header, hstspreload.org/)</ListItem>
            <ListItem>Use Brotli or Zopfli to save from 8-14% on data transfer</ListItem>
            <ListItem>Create low res images for initial load and replace them incementally</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>React Views with Windowing</Heading>
          <a href="https://bvaughn.github.io/forward-js-2017/#/4/2">React Views with Windowing Slides</a>
          <a href="https://forwardjs.com/#">Forward JS Videos</a>
        </Slide>
      </Deck>
    );
  }
}
