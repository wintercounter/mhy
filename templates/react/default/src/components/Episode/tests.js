import React from 'react'
import { Episode } from '@/components'

test('render an Episode', () => {
    const wrapper = shallow(<Episode>Hello Jest!</Episode>)
    expect(wrapper).toMatchSnapshot()
})
