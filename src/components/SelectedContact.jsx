import React from "react"

export default function SelectedContact({ contact }) {
    return (
        <div>
            <h2>Details</h2>
        <tr>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
            <td>{contact.website}</td>
            <td>{contact.city}</td>
            <td>{contact.zipcode}</td>
            <td>{contact.username}</td>
        </tr>
        </div>
        );
}