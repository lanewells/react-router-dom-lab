import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import "./App.css"
import NavBar from "./components/NavBar"
import MailboxList from "./components/MailboxList"
import MailboxForm from "./components/MailboxForm"
import MailboxDetails from "./components/MailboxDetails"

console.log({ NavBar, MailboxList, MailboxForm, MailboxDetails })

const initialState = [
  {
    _id: 1,
    boxSize: "Large",
    boxHolder: "Aline"
  },
  {
    _id: 2,
    boxSize: "Small",
    boxHolder: "Molly"
  },
  {
    _id: 3,
    boxSize: "Medium",
    boxHolder: "Jason"
  },
  {
    _id: 4,
    boxSize: "Small",
    boxHolder: "Ashley"
  }
]

const App = () => {
  const [mailboxes, setMailboxes] = useState(initialState)

  const addMailbox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length + 1
    setMailboxes([...mailboxes, newMailboxData])
  }
  return (
    <>
      <NavBar />
      <h1>Mailbox</h1>

      <Routes>
        <Route path="/" element={<h2>Post Office</h2>} />
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route
          path="/new-mailbox"
          element={<MailboxForm addMailbox={addMailbox} />}
        />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
        <Route path="*" element={<h4>Mailbox Not Found</h4>} />
      </Routes>
    </>
  )
}

export default App
