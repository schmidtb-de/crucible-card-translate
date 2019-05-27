cards = document.querySelectorAll(
  ".card-type-action, .card-type-creature, .card-type-upgrade, .card-type-artifact"
);

for (let card of cards) {
  card.addEventListener("mouseover", function(event) {
    setTimeout(function() {
      try {
        let cardText = document
          .querySelector(".card-zoomed")
          .querySelector(".card-name").innerHTML;
        let card = cardList.filter(card => cardText === card.card_title);
        let cardImage = card[0].front_image;
        let cardImageReplaced = (language = "de") => {
          return cardImage
            .replace("/en", `/${language}`)
            .replace("_en", `_${language}`);
        };
        document.querySelector(".image-large").src = cardImageReplaced();
        console.log(cardText);
      } catch (e) {
        console.log(e);
      }
    }, 1);
  });
}
