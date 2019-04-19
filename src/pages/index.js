import React from "react"
import Helmet from "react-helmet"

const handleFormSubmit = event => {
  event.preventDefault()
  console.log("boop")
}

export default () => (
  <main style={{ color: "#222" }}>
    <Helmet>
      <html lang="en" />
    </Helmet>
    <h1>Hello accessible world!</h1>

    <img
      style={{ width: 100 }}
      src="https://lengstorf.com/images/jason-lengstorf.jpg"
      alt="Jason Lengstorf"
    />

    {/* DON’T DO ANY OF THIS. THIS IS ALL BAD. */}
    <form onClick={handleFormSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />
      <button>Submit</button>
    </form>

    <p>
      <span role="img" title="tears of joy">
        😂
      </span>
    </p>

    <button data-testid="hello-btn" onClick={() => alert("hello world")}>
      click me
    </button>
  </main>
)
