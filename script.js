//your JS code here. If required.
/* 
			<tr>
				<td>${title}</td>
				<td>${author}</td>
				<td>${isbn}</td>
				<td><button type="button" class="delete">x</button></td>
			</tr>
*/
const form = document.getElementById("form");
const bookList = document.getElementById("book-list");

function deleteButton(e){
	e.target.parentNode.parentNode.remove();
}

form.addEventListener("submit" , (e) => {
	e.preventDefault();
	let title = form.title.value;
	let author = form.author.value;
	let isbn = form.isbn.value;

	const tr = document.createElement("tr");
	tr.innerHTML = `
		<td>${title}</td>
		<td>${author}</td>
		<td>${isbn}</td>
		<td><button type="button" class="delete">x</button></td>
	`;

	// const deleteButton = document.createElement("button");
    // deleteButton.innerText = "x";
    // deleteButton.className = "delete";
    // deleteButton.addEventListener("click", deleteRecord);
	

	// tr.children[3].appendChild(deleteButton);
	 tr.children[3].addEventListener("click" , deleteButton)
	form.reset();
	bookList.appendChild(tr);
});