import API from "./data.js"
import renderDom from "./ticketsDOM.js"
import defaultElements from "./createForm.js"


const ticketLogEl = document.querySelector("#ticketLog")


export default {
    registerDeleteListener() {
        ticketLogEl.addEventListener("click", event => {
            if(event.target.id.startsWith("deleteTicket--")) {
                const ticketToDelete = event.target.id.split("--")[1]

            API.deleteTicket(ticketToDelete)
            .then(API.getAllTickets)
            .then(response => {renderDom.renderTicketEntries(response)})
            }
        })
    },
    registerEditListener() {
        ticketLogEl.addEventListener("click", event => {
            if(event.target.id.startsWith("editTicket--")){
                const EntryToEdit = event.target.id.split("--")[1]

                const updateFormFields = entryId => {
                    API.getSingleTicketEntry(EntryToEdit)
                    .then(response => {
                        console.log(response)
                        defaultElements.buildAndAppendForm("edit")

                        document.querySelector("#entryID").value = response.id;
                        document.querySelector("#date").value = response.date;
                        document.querySelector("#maintenanceIssue").value = response.maintenanceIssue;
                        document.querySelector("#price").value = response.price;
                        document.querySelector("#type").value = response.type;
                        console.log(response)
                    })
                
                const saveChanges = document.querySelector("#saveChanges")
                saveChanges.addEventListener("click", function () {
                    let entryID = document.querySelector("#entryId").value
                    const date = document.querySelector("#date").value
                    const mainIssue = document.querySelector("#maintenanceIssue").value
                    const price = document.querySelector("#price").value
                    const type = document.querySelector("#type").value

                    const updatedObject = {
                        date: date,
                        maintenanceIssue: mainIssue,
                        price: price,
                        mood: type,
                    }

                API.editSingleJournalEntry(entryID, updatedObject)
                .then(() => {
                    defaultElements.buildAndAppendForm()
                    API.getAllTickets()
                    .then(response => renderDom.renderTicketEntries(response))
                })
                })
                    

                }
                updateFormFields(EntryToEdit)
            }
        })

    }


}