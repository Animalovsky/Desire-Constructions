$(document).ready(function() {
	//when the button is clicked
	$("#showMenu").click(function() {
		//apply toggleable classes
		$("#nav").toggleClass("show");
		$("#showMenu").toggleClass("moveButton");
	});

	$("#wrapper").click(function() {
		$("#nav").removeClass("show");
		$("#showMenu").removeClass("moveButton");
	});
});

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .not('[href="#nav"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
        });
      }
    }
  });
  
var status = "less";

function toggleText()
{
    var text="Finishes include satin, clear, metallic, paint, staining, two pack painting and polishing. They also provide anti bacterial spray finishes, fire retardant finishes and splash glass. They use traditional and modern lacquers with airless top of the range spray equipment that reduces over spray. Typical clients are joinery manufacturers, interior designers, shop fitters, sign providers and furniture manufacturers. If you understand the technical specifications this is helpful, but a basic understanding of the process is fine."
    
    if (status == "less") {
        document.getElementById("textArea").innerHTML=text;
        document.getElementById("toggleButton").innerText = "See Less";
        status = "more";
    } else if (status == "more") {
        document.getElementById("textArea").innerHTML = "";
        document.getElementById("toggleButton").innerText = "See More";
        status = "less"
    }
} 
	$("#additional").css("display", "none");
function myFunction() {
    var x = document.getElementById("additional");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}