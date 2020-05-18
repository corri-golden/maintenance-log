


const makeTicketEntryComponent = (ticketEntry) => {
        return `
        <h5>${ticketEntry.date}</h5>
        <h2>${ticketEntry.maintenanceIssue}</h2>
        <h3>${ticketEntry.price}</h3>
        <h3>${ticketEntry.type}</h3>
        <button id="deleteTicket--${ticketEntry.id}">
            Delete Ticket
        </button>
        <button id="editTicket--${ticketEntry.id}">
            Edit Ticket
        </button>
        `
    }


export default makeTicketEntryComponent