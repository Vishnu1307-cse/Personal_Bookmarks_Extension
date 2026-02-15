🚀 Lead Tracker (Chrome Extension)

A simple and lightweight Chrome extension that allows users to save URLs as leads — either manually or directly from the currently active browser tab.

Built using:

HTML

CSS

JavaScript

Chrome Extension APIs

LocalStorage

✨ Features

📌 Save a URL manually

🌐 Save the currently active tab’s URL

💾 Persistent storage using localStorage

🗑 Double-click to clear all saved leads

🔗 Clickable links that open in a new tab

🛠 How It Works
1️⃣ Manual Input

Users can enter a URL into the input field and click the save button.
The URL gets:

Added to the myLeads array

Stored in localStorage

Rendered dynamically in the list

2️⃣ Save Current Tab

When the "Save Tab" button is clicked:

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    myLeads.push(tabs[0].url)
})


The extension:

Fetches the active tab

Extracts its URL

Saves it to localStorage

Updates the UI

3️⃣ Data Persistence

Leads are stored using:

localStorage.setItem("myLeads", JSON.stringify(myLeads))


When the extension loads:

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))


If stored data exists, it is rendered automatically.

4️⃣ Delete All Leads

Double-clicking the delete button:

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
})


Clears all stored leads and resets the UI.

📂 Project Structure
/lead-tracker
│── index.html
│── style.css
│── script.js
│── manifest.json

🧠 Key Concepts Used

DOM Manipulation

Event Listeners

Template Literals

Arrays

Chrome Extension API

JSON stringify/parse

Local Storage

⚙ Installation (Chrome)

Open Chrome

Go to chrome://extensions

Enable Developer Mode

Click Load unpacked

Select your project folder

Boom. Extension is live.

🚧 Future Improvements

Add delete button per lead

Add duplicate prevention

Add copy-to-clipboard feature

Add export as CSV

Improve UI styling
