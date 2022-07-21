
import { shallow } from "enzyme"
import Home from "./home"

describe("Home", () => {
    it("home component testing ", () => {
        const wrapper = shallow(<Home />)
        // console.log('wrapper', wrapper.debug())
        expect(wrapper.exists(".home")).toEqual(true)
    })
})