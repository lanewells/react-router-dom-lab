import { useState } from "react"
import { useNavigate } from "react-router-dom"

const initialState = {
  _id: 0,
  boxSize: "",
  boxHolder: ""
}

const MailboxForm = (props) => {
  const [formData, setFormData] = useState(initialState)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addMailbox(formData)
    setFormData(initialState)
    navigate("/mailboxes")
  }

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value })
  }

  return (
    <main>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxHolder">Name: </label>
        <input
          type="text"
          id="boxHolder"
          name="boxHolder"
          value={formData.boxHolder}
          onChange={handleChange}
        />
        <label htmlFor="boxSize">Size: </label>
        <select
          id="boxSize"
          name="boxSize"
          value={formData.boxSize}
          onChange={handleChange}
          required
          size="3"
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}

export default MailboxForm
