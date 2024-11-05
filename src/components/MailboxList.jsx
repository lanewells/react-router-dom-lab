import { Link } from "react-router-dom"

const MailboxList = (props) => {
  return (
    <>
      <h2>Mailboxes</h2>
      <ul>
        {props.mailboxes.map((currentMailbox) => (
          <li key={currentMailbox._id}>
            <Link to={`/mailboxes/${currentMailbox._id}`}>
              <h3>Mailbox No. {currentMailbox._id}</h3>
              <p>Size: {currentMailbox.boxSize}</p>
              <p>Box Holder: {currentMailbox.boxHolder}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default MailboxList
