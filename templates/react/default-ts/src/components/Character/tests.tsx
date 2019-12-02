import React from 'react'
import { Character } from '@/components'

test('render a Character', () => {
    const wrapper = shallow(<Character name="name" image="img" />)
    expect(wrapper).toMatchSnapshot()
})
