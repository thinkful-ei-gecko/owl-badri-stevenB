import React from 'react';
import ReactDOM from 'react-dom';
import Participants from './Participants';
import renderer from 'react-test-renderer';

describe ("Participants componenet", () => {
    it ("renders without crashing", () => {
        const div = document.createElement('div');
        ReactDOM.render(<Participants xyz={[1,2,3,4]}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })
    it ("renders the UI as expected", () => {
        const tree = renderer
        .create(<Participants xyz={[1,2,3,4]} />)
        .toJSON();
        expect(tree).toMatchSnapshot();
    })
})