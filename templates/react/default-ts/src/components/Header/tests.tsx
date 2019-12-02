import React from 'react'
import { Header } from '@/components'

test('render a header', () => {
    const wrapper = shallow(<Header>Hello Jest!</Header>)
    expect(wrapper).toMatchSnapshot()
})
