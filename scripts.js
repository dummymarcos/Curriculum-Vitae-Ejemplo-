$(document).ready(function() {  
    
    $(".show-more button").on("click", function() {
        var $this = $(this); 
        var $content = $("#hidden");
        var linkText = $this.text();    

        
        if(linkText === "Show more"){
            linkText = "Show less";
            $content.toggleClass("hideContent showContent");
        } else {
            linkText = "Show more";
            $content.toggleClass("showContent hideContent");
        };
    
        $this.text(linkText);
    });
});
