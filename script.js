

/*let listItem = document.getElementById('list-icon');
let menu = document.getElementsByTagName('ul');

listItem.addEventListener('click', dropdownmenu);

function dropdownmenu(){
	
	menu.classList.toggle(".smith");
};*/


let listItem = document.getElementById('list-icon');
let menus = document.getElementsByTagName('ul'); // Get all ul elements

listItem.addEventListener('click', dropdownmenu);

function dropdownmenu() {
    for (let menu of menus) {
        menu.classList.toggle('activeMenu'); // Toggle the class without the dot
    }
};


