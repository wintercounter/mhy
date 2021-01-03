import Enzyme, { shallow, render, mount } from 'enzyme'
import 'jest-enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import 'jest-canvas-mock'
import 'jest-date-mock'
import 'jest-styled-components'
import fetch from 'jest-fetch-mock'

Enzyme.configure({ adapter: new Adapter() })

global.shallow = shallow
global.render = render
global.mount = mount
global.fetch = fetch
