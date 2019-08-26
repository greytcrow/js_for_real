//Function 1
var footerTag = document.getElementsByTagName ("footer");
var nb = 1;
footerTag[0].addEventListener("click",function()
{
	console.log(`click numero ${nb++}`);
});
//Function 2
var navSelector = document.querySelector('.navbar-toggler')
var navId = document.getElementById('navbarHeader')
var unCollapseStatus = false;

	function unCollapse (){
		if (unCollapseStatus === false){
			navId.classList.remove("collapse");
		unCollapseStatus = true;
	} else {
		navId.classList.add("collapse")
		unCollapseStatus = false;
	}
};
navSelector.addEventListener("click", unCollapse);
//Function 3
var editButton = document.getElementsByClassName('btn-outline-secondary')[0];
var clickEdit = function()
{
  let text = document.getElementsByClassName('card-text')[0];
  text.style.color = 'red';
}
editButton.addEventListener("click", clickEdit);
//Function 4
var editButton2 = document.getElementsByClassName('btn-outline-secondary')[1];
var isClicked = false
var clickEdit2 = function()
{
  let text = document.getElementsByClassName('card-text')[1];
	if (isClicked)
	{
    text.style.color = '';
    isClicked = false;
  }
	else
	{
    text.style.color = 'green';
    isClicked = true;
  }
}
editButton2.addEventListener("click", clickEdit2);
//Function 5
var selectNavaBar = document.querySelector('header')
var polo = document.styleSheets[0]
polo.disabled = false

selectNavaBar.addEventListener('dblclick',function(){
	polo.disabled = !polo.disabled;

});