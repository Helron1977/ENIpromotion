const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top:" + (e.pageY - 20) + "px; left:" + (e.pageX - 20) + "px;"
  );
});

document.addEventListener("click", () => {
  cursor.classList.add("expand");

  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});

StarWars = (function() {
  
    /* 
     * Constructor
     */
    class StarWars {
        constructor(args) {
            // wrapper de contexte
            this.el = $(args.el);

            // Audio a lancer
            //this.audio = this.el.find('audio').get(0);

            function JouerSon() {
                var sound = document.getElementById("theme");
                sound.play();
            }

            // Lance l'animation
            this.start = this.el.find('.start');

            // le wrapper de l'animation
            this.animation = this.el.find('.animation');

            // supprime l'animation et montre l'ecran de départ
            this.reset();

            // Lance l'animation sur un clic
            this.start.bind('click', $.proxy(function () {
                this.start.hide();
                this.audio.play();
                this.el.append(this.animation);
            }, this));

            // Reset l'animation et montre l'ecran de départ
//             $(this.audio).bind('ended', $.proxy(function () {
//                 this.audio.currentTime = 0;
//                 this.reset();
//             }, this));
        }
             
        // Relance l'animation et montre l'ecran de départ
        
        reset() {
            this.start.show();
            this.cloned = this.animation.clone(true);
            this.animation.remove();
            this.animation = this.cloned;
        }
    }
    
  
    return StarWars;
  })();
  
  new StarWars({
    el : '.starwars'
  });
