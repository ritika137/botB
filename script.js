// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    console.log("CLICKED");
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;

    setTimeout(function(){
    modal.style.display = "none";
}, 10000);
}

/**** HERE ****/

function isImagePresent(var text)
{
	var subString = "Displaying";
	

	//text = text.toLowerCase();

	if (text.indexOf(subString) !== -1) {
    
    	findImageURL(text);
    }


}

function findImageURL(var text)
{

	var imageValue="";
	var captionValue="";

	var arr = text.split(" ");

	imageValue = arr[1]+arr[2];
	captionValue = arr[1]+" "+arr[2];

	console.log(imageValue);
	console.log(captionValue);

	displayImage(imageValue, captionValue);
}

/*** FUNCTION TO DISPLAY APPROPRIATE IMAGE ON THE MODAL ***/
function displayImage(var imageUrl, var caption)
{
	var modal = document.getElementById('myModal');
	var modalImg = document.getElementById("img01"); /** getting id of the modal Image **/
	var captionText = document.getElementById("caption"); /** to display the caption inside the modal **/

	modal.style.display = "block";
    console.log("CLICKED");
    imageUrl+=".jpg";
    modalImg.src = imageUrl;
    captionText.innerHTML = caption;

    setTimeout(function(){
    modal.style.display = "none";
	}, 10000); /** WILL GET CLOSED AUTOMATICALLY AFTER 10 Sec **/
}

// Get the <span> element that closes the modal
var spanClose = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
spanClose.onclick = function() { 
  modal.style.display = "none";
}


ID- bhavya.mehta0497@gmail.com
Password- bhavya0497