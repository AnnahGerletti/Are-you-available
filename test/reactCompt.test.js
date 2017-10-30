import RangeCalendar from 'rc-calendar/lib/RangeCalendar'
import Header from '../client/components/header'

// Link.react-test.js
import React from 'react';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <RangeCalendar/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Header name= "test event" />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});