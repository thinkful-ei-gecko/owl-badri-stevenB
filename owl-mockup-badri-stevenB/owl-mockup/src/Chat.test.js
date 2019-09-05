import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './Chat';
import renderer from 'react-test-renderer';


describe ("ChatLog componenet", () => {
    it ("renders without crashing", () => {
        const div = document.createElement('div');
        ReactDOM.render(<Chat log={[1,2,3,4]}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })
    it ("renders the UI as expected", () => {
        const tree = renderer
        .create(<Chat log={[1,2,3,4]} />)
        .toJSON();
        expect(tree).toMatchSnapshot();
    })
})