import makeTicketEntryComponent from "./ticketComponent.js"


let ticketsEL = document.querySelector("#ticketLog")


const renderDom = {
    renderTicketEntries(tickets) {
        //set to empty strings so objects disappear when reload
        let HtmlForAllEntries = ""
        //for each loop to loop through the ticket objects
        tickets.forEach(ticket => {
        //create a variable with the value = factory function with a single ticket as argument
            HtmlForAllEntries += makeTicketEntryComponent(ticket)
            //give the ticketsEL element the value of the variable
            ticketsEL.innerHTML = HtmlForAllEntries

        })
        
    }
}



export default renderDom