$(document).ready(function()
{

    var isMenuVisible = false;

    var $MenuBtn = $(".top-bar__menuToggle");
    var $Menu = $(".top-bar__list");

    var body = $("body");
    

    body.click(function (ev) {

        if(isMenuVisible)
        {

            $Menu.removeClass("top-bar__list--visible");
            $MenuBtn.removeClass("top-bar__menuToggle--toggled");

            setTimeout(function() {
                $Menu.css("display", "none");
            }, 500)

            isMenuVisible = false;

        }

    });

    $Menu.on("click", function(ev){

        ev.stopPropagation();

    });

    $MenuBtn.on("click", function(ev){

        $Menu.css("display", "block");

        setTimeout(function(){
            ev.stopPropagation();
            $Menu.addClass("top-bar__list--visible");
            $MenuBtn.addClass("top-bar__menuToggle--toggled");
            isMenuVisible = true;
            
        }, 100);

        ev.stopPropagation();


    });
    

});