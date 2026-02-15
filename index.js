const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEL = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn")
const tabBtn  = document.getElementById("tab-btn")

let myLeads = []

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads){
    listItems = ""
    for (let i = 0; i< leads.length; i++){
        //listItems += "<li>" + "<a target = '_blank' href = '" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItems += `<li>
                        <a target = '_blank' href = '${leads[i]}'>
                            ${leads[i]}
                        </a>
                    </li>`
    }
    ulEL.innerHTML = listItems
}


tabBtn.addEventListener("click", () => {
    chrome.tabs.query({active : true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)

    })
    //console.log(tabs[0].url)
})

inputBtn.addEventListener("click", function (){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

//localStorage.setItem("myLeads", "www.google.com")
//localStorage.getItem("myLeads")
//localstorage.clear()
//console.log(leadsFromLocalStorage)