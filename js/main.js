function todoList () {
	var item = document.getElementById("todoInput").value
	var item2 = document.getElementById("name").value
	var text = document.createTextNode(item)
	var text2 = document.createTextNode(item2)
	var newItem = document.createElement("li")
	var newItem2 = document.createElement("li" && "h2")
	newItem.appendChild(text)
	newItem2.appendChild(text2)
	document.getElementById("todoList").appendChild(newItem2)
	document.getElementById("todoList").appendChild(newItem)


}

