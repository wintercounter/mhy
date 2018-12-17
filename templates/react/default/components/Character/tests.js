import React from 'react'
import { Character } from '@components'

test('render a Character', () => {
    const wrapper = shallow(
        <Character>Hello Jest!</Character>
    )
    expect(wrapper).toMatchSnapshot()
})