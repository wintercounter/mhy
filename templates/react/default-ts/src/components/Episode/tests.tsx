import React from 'react'
import { Episode } from '@/components'

test('render an Episode', () => {
    const wrapper = shallow(<Episode name="Title" airDate={12} episode={1}/>)
    expect(wrapper).toMatchSnapshot()
})
