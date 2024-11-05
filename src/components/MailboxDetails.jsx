import { useParams } from "react-router-dom"

const MailboxDetails = (props) => {
  const { mailboxId } = useParams()
  const singleMailbox = props.mailboxes.find(
    (box) => box._id === Number(mailboxId)
  )

  if (!singleMailbox) {
    return <h4>Mailbox Not Found</h4>
  }
  console.log("Single Mailbox Object: ", singleMailbox)
  return (
    <>
      <h2>Mailbox No. {singleMailbox._id}</h2>
      <dl>
        <dt>Size:</dt>
        <dd>{singleMailbox.boxSize}</dd>
        <dt>Box Holder:</dt>
        <dd>{singleMailbox.boxHolder}</dd>
      </dl>
    </>
  )
}

export default MailboxDetails
