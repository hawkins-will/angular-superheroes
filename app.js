let superSeeds = [
  { name: "Superman", phone: "1-800-587-8423", affiliation: "DC", image_url: "https://upload.wikimedia.org/wikipedia/en/e/eb/SupermanRoss.png" },
  { name: "Wolverine", phone: "1-800-469-5388", affiliation: "Marvel", image_url: "http://www.sigtutorials.com/renders/albums/comic/normal_wolverine_28329.png" },
  { name: "Batman", phone: "1-800-356-4448", affiliation: "DC", image_url: "http://bottleopenerstore.com/wp-content/uploads/2016/10/batmat_300x300.png" },
  { name: "Spider-Man", phone: "1-800-774-3377", affiliation: "Marvel", image_url: "http://i.annihil.us/u/prod/marvel/i/mg/2/00/53710b14a320b.png" },
  { name: "Wonder Woman", phone: "1-800-336-2537", affiliation: "DC", image_url: "http://www.idzif.com/upload/image/stickers-wonder-woman-silhouette-p-image-78056-grande.png" },
  { name: "Storm", phone: "1-800-932-8437", affiliation: "Marvel", image_url: "http://vignette3.wikia.nocookie.net/avengersalliance/images/0/02/Classic_Storm_Portrait_Art.png/revision/latest?cb=20130804050516" }
]

angular
  .module("superApp", [])
  .controller("superCtrl", [ superController ])

    function superController () {
      this.heroes = superSeeds;
      this.addHero = function() {
        let hero = { }
        this.heroes.push(hero);
      }
    }
