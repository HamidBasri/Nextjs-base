import Home from "../index"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

describe("Index Page", () => {
  it("renders a heading", () => {
    render(<Home />)
    const heading = screen.getByRole("heading", { name: /Hello Fellow/i })

    expect(heading).toBeInTheDocument()
  })
})
