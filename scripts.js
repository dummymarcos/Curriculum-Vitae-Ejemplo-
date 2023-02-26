$(document).ready(function() {
    $(".show-more").on("click", function() {
        var $this = $(this); 
        var target = $this.data("target");
        var $content = $(target);
        var originalText = $this.data("text");    

        // Close other content sections
        $(".show-more").not($this).each(function() {
            var $otherContent = $($(this).data("target"));
            var otherOriginalText = $(this).data("text");
            if ($otherContent.hasClass("showContent")) {
                $otherContent.toggleClass("showContent hideContent");
                $(this).text(otherOriginalText);
            }
        });

        if($this.text() === originalText){
            $this.text(originalText);
            $content.toggleClass("hideContent showContent");
        } else {
            $this.text(originalText);
            $content.toggleClass("showContent hideContent");
        };
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.animate-button');
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        console.log('mouseenter event triggered');
        button.classList.add('animate__animated', 'animate__pulse');
      });
      button.addEventListener('mouseleave', () => {
        console.log('mouseleave event triggered');
        button.classList.remove('animate__animated', 'animate__pulse');
      });
    });
  });