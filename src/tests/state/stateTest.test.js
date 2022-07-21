import { shallow } from "enzyme";
import React from "react";
import StateTest from "./stateTest";


// describe("state", () => {
//     it("check data", () => {
//         const wrapper = shallow(<StateTest />)
//         console.log(wrapper.debug())
//         expect(wrapper.find("ul").children().length).toEqual(34)
//     })
// })

describe("state", () => {
    it("snapshot", () => {
        const wrapper = shallow(<StateTest />)
        expect(wrapper).toMatchSnapshot()
    })
})