$(document).ready(function() 
{ // do this when the document is loaded
    $("#content_dialer").show(); // show the element with ID "element"
    $("#content_contactList").hide(); // hide the element with ID "otherElement"
    $("#content_addContact").hide(); // hide the element with ID "otherElement"


    var contacts = ["Robert Drake","Emma Frost", "Doreen Green", "Jean Grey",
    "James Howlett","Ororo Munroe", "Katherine Pryde","Piotr Rasputin",
    "Scott Summers","Kurt Wagner","Warren Washington","Charles Xavier"];
    var listOfContacts = document.getElementById("listOfContacts");
    var listItems = listOfContacts.map( (element) => {
    `<li id='${element} 'class='listItem'>${element}</li>` });
    listOfContacts.innerHTML = listItems.join('');	

    for( var i=0;i<contacts.length; i++)
    {
      var name = contacts[i];
      var contact_name = document.createElement("li");
      listItem.textContent = name;
      ul.appendChild(contact_name);
    }
});

$("#dialer").click(function() 
{ // when "button_id" is clicked
    $("#content_dialer").show(); // show the element with ID "element"
    $("#content_contactList").hide(); // hide the element with ID "otherElement"
    $("#content_addContact").hide(); // hide the element with ID "otherElement"
});

$("#contactList").click(function() 
{ // when "button_id" is clicked
    $("#content_contactList").show(); // show the element with ID "element"
    $("#content_dialer").hide(); // hide the element with ID "otherElement"
    $("#content_addContact").hide(); // hide the element with ID "otherElement"
});

$("#addContact").click(function() 
{ // when "button_id" is clicked
    $("#content_addContact").show(); // show the element with ID "element"
    $("#content_contactList").hide(); // hide the element with ID "otherElement"
    $("#content_dialer").hide(); // hide the element with ID "otherElement"
});
