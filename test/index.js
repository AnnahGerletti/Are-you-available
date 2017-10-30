import test from 'tape'
import React from 'react'
import { shallow } from 'enzyme'

import App from '../client/components/App'
import User from '../client/components/User'

test('<App />', t => {
  const expected = 'React/Api development has begun!'
  const wrapper = shallow(<App />)
  t.true(wrapper.text(), expected)
  t.end()
})

// test('<User />', t => {
//   const expected = 'React/Api development has begun!'
//   const wrapper = shallow(<App />)
//   t.true(wrapper.text(), expected)
//   t.end()
// })
