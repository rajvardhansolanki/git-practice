
import Blog from "./blog"
import { shallow } from "enzyme"


describe("blog", () => {
    it("Class check", () => {
        const blog = shallow(<Blog />)
        expect(blog.exists(".container")).toEqual(true)
    })

})