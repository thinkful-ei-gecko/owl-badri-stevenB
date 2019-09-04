import React from 'react';
import ReactDOM from 'react-dom';
import Stage from './Stage';
import renderer from 'react-test-renderer';

describe('Stage component', () => {
  it('will render', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Stage abc={[1, 2, 3, 4]}/>,div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders the UI as expcted', () => {
    const tree = renderer
      .create(<Stage abc={[1, 2, 3, 4]}/>)
      .toJSON();
      expect(tree).toMatchSnapshot();
  });
})