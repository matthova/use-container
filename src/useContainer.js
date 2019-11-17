import React from 'react';
import TestRenderer from 'react-test-renderer';

export const useContainer = (Container, props) => {
  const [testRender] = React.useState(
    TestRenderer.create(
      <Container {...props}>{val => null}</Container>)
  );

  const [containerState, setContainerState] = React.useState(new Container({ ...props, children: val => val}).render());

  React.useEffect(() => {
    testRender.update(
      <Container {...props}>
        {renderProps => {
          setContainerState(renderProps);
          return null;
        }}
      </Container>
    )
  }, [testRender, props]);

  return containerState;
};

