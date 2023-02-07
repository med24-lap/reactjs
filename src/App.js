import logo from './logo.svg';
import './App.css';
import Nvsite from './Nvsite';
import Anime from './Anime';
import Watch from './Watch';

function App() {

  let Movie = [
    {

        nom : "Dragon Ball z :",
        image : "Dragon Ball z.jpg",
        dst : "Dragon Ball Z (ドラゴンボールZ(ゼット), Doragon Bōru Zetto, abréviation commune DBZ) est une série télévisée d'animation japonaise adaptée de la franchise Dragon Ball d'Akira Toriyama et produite par Toei Animation. Cette série fait suite à l'anime Dragon Ball et adapte les vingt-six derniers volumes du manga."
    },
    {
        nom : "Conan :",
        image : "conan.jpg",
        dst : "Detective Conan is about a teenage detective named Shinichi Kudo, who is poisoned by an evil group called The Black Organization. The poison was supposed to kill him. However, the poison instead turned him into a small child."
    },
    {
        nom : "OnePiece :",
        image : "one piece.avif",
        dst : "L'histoire de One Piece se déroule dans un monde fictif dominé par les océans, où certains pirates aspirent à une ère de liberté et d'aventure connue comme « l'âge d'or de la piraterie ». Cette époque fut inaugurée à la suite des derniers mots prononcés par le roi des pirates, Gol D."
    },
    {
        nom : "thegodfather :",
        image : "thegodfather.jpg",
        dst : "The Godfather is set in the 1940s and takes place entirely within the world of the Corleones, a fictional New York Mafia family. It opens inside the dark office of the family patriarch, Don Vito Corleone (also known as the Godfather and played by Brando), on the wedding day of his daughter, Connie (Talia Shire)."
    },
    {
        nom : "thegodfather II :",
        image : "thegodfather2.jpg",
        dst : "The continuing saga of the Corleone crime family tells the story of a young Vito Corleone growing up in Sicily and in 1910s New York; and follows Michael Corleone in the 1950s as he attempts to expand the family business into Las Vegas, Hollywood and Cuba."
    },
    {
        nom : "thegodfather III :",
        image : "p12911_p_v8_at.jpg",
        dst : "In the final installment of the Godfather Trilogy, an aging Don Michael Corleone seeks to legitimize his crime family's interests and remove himself from the violent underworld but is kept back by the ambitions of the young."
    },
    {
        nom : "Tom Cruise :",
        image : "tom cruise.jpg",
        dst : "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it."
    },
    {
        nom : "John Wick :",
        image : "john wicl 33.jpg",
        dst : "Jonathan « John » Wick est un personnage de fiction créé par Derek Kolstad. Il est interprété au cinéma par Keanu Reeves. John Wick apparait comme un assassin qui a longtemps pris sa retraite, jusqu'à ce qu'un gang envahisse sa maison, vole sa voiture et tue son chien, dernier souvenir de son épouse décédée."
    },
    


    
   ] 
  return (
    <div>
    <Nvsite/>
    <Anime list = {Movie}/>
    

    </div>
    
    
  
  );
}
export default App;



