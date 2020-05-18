import htmlElements from "./createForm.js"
import renderDom from "./ticketsDOM.js"
import API from "./data.js"
import events from "./event.js"






htmlElements.buildAndAppendForm()



//calling fetch for all tickets
API.getAllTickets()
    .then(tickets => renderDom.renderTicketEntries(tickets))

events.registerDeleteListener()
events.registerEditListener()




