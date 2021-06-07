import React from "react"
import MainLayout from "../layouts/MainLayout/MainLayout"

const Contact = () => {
  return (
    <MainLayout title="Contact" description="Contact">
      <div className="columns is-centered is-vcentered is-mobile mt-3">
        <div className="column is-11-mobile is-6-tablet is-6-desktop is-6-widescreen is-6-fullhd">
          <form
            action="https://formspree.io/f/mwkaogkq"
            method="POST"
            className="contact-form box"
          >
            <h2 className="title is-3 has-text-centered">Get In Touch</h2>
            <div className="field">
              <label htmlFor="name" className="label">
                Name
              </label>
              <div className="control">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input"
                  placeholder="NAME"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="email" className="label">
                Email
              </label>
              <div className="control">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input"
                  placeholder="EMAIL"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="message" className="label">
                Message
              </label>
              <div className="control">
                <textarea
                  id="message"
                  name="message"
                  className="textarea"
                  placeholder="MESSAGE"
                  required
                />
              </div>
            </div>
            <div className="field is-grouped contact-buttons">
              <div className="control">
                <button className="button is-info is-fullwidth">SUBMIT</button>
              </div>
              <div className="control">
                <button className="button is-danger is-light is-fullwidth">
                  RESET
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  )
}

export default Contact
