


export default function ContactRow({ setSelectedId, contact }) {
    return (
        <tr
            onClick={() => {
                setSelectedContactId(contact.id);
            }}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
        </tr>
    );
}


// create a fetch request and console.log results.  fetch to get?
// demonstrate the use of fetch to do CRUD.  How is crud used to create engaging web applications.