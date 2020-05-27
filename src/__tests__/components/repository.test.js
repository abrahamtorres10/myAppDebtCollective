import React from "react"
import renderer from "react-test-renderer"
import Repository from "../../components/repository"

describe("Repository test suite", () => {
  it("renders correctly", () => {
    const baseProps = {
      name: "Test repository name",
      description: "Test repository description",
      forkCount: 3,
      createdAt: new Date(2019, 2, 2),
      url: "www.google.com",
    }
    const tree = renderer.create(<Repository {...baseProps} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders 'Description not available' if description is empty", () => {
    const baseProps = {
      name: "Test repository name",
      description: "",
      forkCount: 3,
      createdAt: new Date(2019, 2, 2),
      url: "www.google.com",
    }
    const tree = renderer.create(<Repository {...baseProps} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
