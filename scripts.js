$(document).ready(function() {
    $(".show-more").on("click", function() {
        var $this = $(this); 
        var target = $this.data("target");
        var $content = $(target);
        var originalText = $this.data("text");    

        if($this.text() === originalText){
            $this.text("Mostrar menos");
            $content.toggleClass("hideContent showContent");
        } else {
            $this.text(originalText);
            $content.toggleClass("showContent hideContent");
        };
    });
});
