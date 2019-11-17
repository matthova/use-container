import React from 'react';

import { MyContainer } from './MyContainer';
import { useContainer } from './useContainer';

function App() {
  const [containerProps, setContainerProps] = React.useState({ foo: 'bar' });

  React.useEffect(() => {
    setTimeout(() => {
      setContainerProps({ foo: 'foo' });
    }, 5000);
  }, [])

  const renderProps = useContainer(MyContainer, containerProps);

  return (
    <div className="App">
      <h1>{JSON.stringify(renderProps)}</h1>
    </div>
  );
}

export default App;
