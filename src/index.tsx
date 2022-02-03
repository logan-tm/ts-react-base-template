import React from 'react';
import reactDOM from 'react-dom';
import ExampleButton from './components/exampleButton';

interface AppProps {
  // intentionally blank, we don't have any props expected for App
}

class App extends React.Component {
  constructor(props: AppProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>I'm rendered from React!</h1>
        <p>
          Below we have two counter components. Both have the required buttonText prop, and only one has the optional
          header prop.
        </p>
        <ExampleButton key={2} buttonText="Count" />
        <ExampleButton key={1} buttonText="Count2" header="Let's count!" />
      </div>
    );
  }
}

reactDOM.render(<App />, document.getElementById('root'));
