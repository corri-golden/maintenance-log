const baseURL = "http://localhost:3000/tickets"


const API = {
getAllTickets () {
    return fetch("http://localhost:3000/tickets")
    .then(response => response.json())
    },
saveTicketEntry: (newTicketObject) => {
    return fetch(baseURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTicketObject)
        })
        
    },
deleteTicket (ticketId) {
     return fetch(`http://localhost:3000/tickets/${ticketId}`, {
         method: "DELETE"
     })
        .then(response => response.json())
    },
getSingleTicketEntry(ticketId) {
        // GET the ticket entry with the specified ID number
        return fetch(`http://localhost:3000/tickets/${ticketId}` )
            .then(response => response.json())
    },
editSingleJournalEntry(ticketId, entry){
        return fetch(`http://localhost:3000/tickets/${ticketId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
            })
        },
}






export default API