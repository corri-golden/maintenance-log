import API from "./data.js"
import renderDom from "./ticketsDOM.js"





const saveObject = {
    postEntry () {
        const dateInput = document.querySelector("#date").value
        const mainInput = document.querySelector("#maintenanceIssue").value
        const priceInput = document.querySelector("#price").value
        const typeInput = document.querySelector("#type").value
    
        if(mainInput === ""){
            alert("Please fill out the entire Form")
        }


        const newTicketEntry = {
            "date": dateInput,
            "maintenanceIssue": mainInput,
            "price": priceInput,
            "type": typeInput

        }
        console.log(newTicketEntry)
        API.saveTicketEntry(newTicketEntry)
        .then(API.getAllTickets)
        .then(response => {renderDom.renderTicketEntries(response)
            document.querySelector("#date").value = ""
            document.querySelector("#maintenanceIssue").value = ""
            document.querySelector("#price").value = ""
            document.querySelector("#type").value = ""
        
     } )
    }


}



export default saveObject