import saveObject from "./saveEntry.js"


const form = document.getElementById("formContainer")
console.log(form, "form")


const htmlElements = {
    buildAndAppendForm(entry) {
        let searchForm = 
        `
    <form>
        <h1>Maintenance Log</h1>
        <input type="hidden" id="entryID" value="" />
        <fieldset>
            <label for="date">Date:</label>
            <input id="date" type="date" name="date">
        </fieldset>
        <fieldset>
            <label for="maintenanceIssue">Maintenance Issue:</label>
            <input id="maintenanceIssue" type="text" name="maintenanceIssue">
        </fieldset>
        <fieldset>
            <label for="price">Price:</label>
            <input id="price" type="text" name="price">
        </fieldset>
        <fieldset>
        <label for="maintenance-input">Type of Maintenance:</label>
            <select id="type" name="maintenance-input">
                <option value="Routine">Routine</option>
                <option value="Recommended">Recommended</option>
                <option value="Emergency">Emergency</option>
            </select>
        </select>
        </fieldset>
    </form>
        `
        if (entry === "edit") {
            form.innerHTML = ""
            form.innerHTML = searchForm += `<button id="saveChanges">Save Changes</button>`
        } else {
            form.innerHTML = ""
            form.innerHTML = searchForm += `<button id="recordBtn">Record Maintenance Ticket</button>`
            const saveBtnEl = document.querySelector("#recordBtn")
            saveBtnEl.addEventListener("click", saveObject.postEntry)
        }
        
    }
}

export default htmlElements