import RangeCalendar from 'rc-calendar/lib/RangeCalendar'
import Header from '../client/components/Header'
// import Events from '../client/components/Events'
// import Event from '../client/components/Event'

// Link.react-test.js
import React from 'react';
import renderer from 'react-test-renderer';

test('Does the calander render', () => {
  const component = renderer.create(
    <RangeCalendar/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('does the name get passed to the <Header', () => {
  const component = renderer.create(
    <Header name= "test event" />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

// test('Does Events render', () => {
//   const component = renderer.create(
//     <Events />
//   )
//   let tree = component.toJSON()
//   expect(tree).toMatchSnapshot()
// })

// test('Does Event render', () => {
//   const component = renderer.create(
//     <Event />
//   )
//   let tree = component.toJSON()
//   expect(tree).toMatchSnapshot()
// })