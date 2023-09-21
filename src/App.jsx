import React, { useState } from "react";
import SpongDex from "./Components/SpongDex";
import "./App.css";
function App() {
  const SpongBobCharacters = [
    {
      index: 0,
      image: "../public/Images/spongbob.png",
      name: "SpongBob SquarePants",
      info: "SpongeBob SquarePants is a lovable, yellow sea sponge who lives in a pineapple under the sea in the fictional town of Bikini Bottom. He's known for his infectious enthusiasm, optimism, and his job as a fry cook at the Krusty Krab restaurant. SpongeBob's best friend is a dim-witted starfish named Patrick, and together, they embark on quirky adventures in their underwater world. SpongeBob's iconic square shape, iconic laugh, and signature attire make him one of the most recognizable and beloved animated characters of all time.",
    },
    {
      index: 1,
      image: "../public/Images/patrick.png",
      name: "Patrick Star",
      info: "Patrick Star is a pink, chubby, and amiable starfish who resides in Bikini Bottom alongside his best friend, SpongeBob SquarePants. He's characterized by his endearing cluelessness, childlike innocence, and an insatiable appetite for junk food, especially Krabby Patties. Despite his lack of intelligence, Patrick's unwavering loyalty and cheerful nature make him an essential part of SpongeBob's life. His distinctive appearance includes five arms and a perpetual grin, embodying the whimsical charm of the SpongeBob SquarePants universe. Patrick's simple and carefree personality often leads to hilarious misadventures with his pals in the underwater world.",
    },
    {
      index: 2,
      image: "../public/Images/M.Krabs.png",
      name: "Eugene H.Krabs",
      info: "Eugene H. Krabs, commonly known as Mr. Krabs, is a prominent character in the SpongeBob SquarePants series. He's the money-loving owner of the Krusty Krab restaurant, where the beloved Krabby Patty is served. Mr. Krabs is characterized by his obsession with money, often going to extreme lengths to save or earn a few extra dollars. Despite his penny-pinching nature, he cares deeply for his daughter, Pearl, and occasionally displays a softer side. His iconic traits include his red shell, a thick Scottish accent, and an uncanny ability to come up with clever money-making schemes, making him a central figure in the show s humor and storyline",
    },
    {
      index: 3,
      image: "../public/Images/sheldon.jpg",
      name: "Sheldon J.Plankton",
      info: "Sheldon J. Plankton, often referred to as simply Plankton, is the small but brilliant antagonist of SpongeBob SquarePants. He's the owner of the rival fast-food restaurant, the Chum Bucket, and is perpetually scheming to steal the secret recipe for Krabby Patties from the Krusty Krab. Plankton is known for his high intelligence, diabolical plans, and his constant failures in achieving his goals due to his tiny size and ineptitude. His appearance includes a green computer-like body and a single, large eye. Despite his villainous tendencies, Plankton adds a humorous and entertaining element to the show's cast of characters.",
    },
    {
      index: 4,
      image: "../public/Images/Sandypng.png",
      name: "Sandy Cheeks",
      info: "Sandy Cheeks is a spirited and adventurous character in SpongeBob SquarePants. She's a Texan squirrel who lives in Bikini Bottom, residing in an air-filled treedome to accommodate her terrestrial needs. Sandy is known for her love of science, karate, and extreme sports. With her iconic diving suit and helmet, she's always ready for action. Sandy's friendly demeanor and intelligence make her a valued friend to SpongeBob and the gang, often participating in their underwater escapades. Her can-do attitude and enthusiasm for exploration add a unique dynamic to the show's diverse set of characters.",
    },
    {
      index: 5,
      image: "../public/Images/MadamePuff.png",
      name: "Mrs.Puff",
      info: "Mrs. Puff, whose full name is Mrs. Poppy Puff, is a character in SpongeBob SquarePants known for her role as a boating school teacher in Bikini Bottom. She is often stressed and anxious, thanks to her most challenging student, SpongeBob, who has a knack for creating chaos during driving lessons. Mrs. Puff's appearance includes a pufferfish-like body with a sailor's hat. Despite her good intentions, she frequently finds herself in comical and unfortunate situations due to SpongeBob's ineptitude behind the wheel. Her character represents the patience and resilience required in teaching, making her a memorable addition to the show's ensemble.",
    },
    {
      index: 6,
      image: "../public/Images/gary.png",
      name: "Gary the Snail",
      info: "Gary the Snail is SpongeBob SquarePants' loyal pet snail and one of the most endearing characters in the series. He is known for his distinctive meow-like speech and expressive eye stalks. Gary is SpongeBob's companion and often serves as a source of comfort and comic relief. Despite his slow-moving nature, Gary is surprisingly intelligent and has even saved the day on occasion. He resides in a pineapple-shaped house within SpongeBob's home, and their close bond exemplifies the heartwarming friendships that are a hallmark of the show. Gary's adorable antics and unmistakable purrs make him an integral part of the SpongeBob universe.",
    },
    {
      index: 7,
      image: "../public/Images/Carlo_Tentacule.jpg",
      name: "Squidward Tentacles",
      info: "Squidward Tentacles is a character in SpongeBob SquarePants known for his sarcastic, cynical, and often grumpy demeanor. He works as the cashier at the Krusty Krab alongside SpongeBob and Mr. Krabs but is generally dissatisfied with his life in Bikini Bottom. Squidward is an octopus with a distinctive large nose and a passion for the arts, particularly playing the clarinet, although his musical skills are questionable. Despite his constant frustration with SpongeBob's enthusiasm and naivety, Squidward occasionally reveals a more compassionate side. He adds a unique blend of humor and realism to the show, often finding himself in absurd and amusing situations due to his interactions with the zany characters of Bikini Bottom.",
    },
    {
      index: 8,
      image: "../public/Images/dutchman.png",
      name: "The Flying Dutchman",
      info: "The Flying Dutchman is a legendary and eerie character in SpongeBob SquarePants, known as the ghostly captain of a haunted pirate ship. He's characterized by his glowing green, ghostly appearance, complete with a pirate hat and a ghostly beard. The Dutchman is infamous for his terrifying reputation and ghostly powers, including the ability to turn his victims into ghosts. While he initially comes across as a menacing figure, he occasionally exhibits a more mischievous and comical side. He serves as a source of spooky humor and adventure in the show, with his appearances often leading to entertaining and supernatural encounters for the residents of Bikini Bottom.",
    },
    {
      index: 9,
      image: "../public/Images/karen.png",
      name: "Karen",
      info: "Karen Plankton is a character in SpongeBob SquarePants, known as the sentient computer wife and sidekick of Sheldon J. Plankton. She takes the form of a computer monitor and keyboard, but her character is far from ordinary. Karen is intelligent, witty, and often serves as the brains behind Plankton's schemes to steal the Krabby Patty formula. Despite her support for Plankton's villainous endeavors, she occasionally displays moments of independence and morality. Karen's sharp wit and humorous interactions with Plankton add depth and humor to the show's dynamic, making her an essential character in the series.",
    },
    {
      index: 10,
      image: "../public/Images/Fancysont.png",
      name: "Squilliam Fancyson",
      info: " Squilliam Fancyson is a recurring character in SpongeBob SquarePants, known for being Squidward Tentacles high-achieving and wealthy arch-nemesis. Squilliam exudes an air of sophistication and success, often flaunting his extravagant lifestyle and accomplishments to make Squidward feel inadequate. He has a handsome appearance, a monocle, and an aristocratic demeanor. Squilliam's appearances typically revolve around him attempting to outdo Squidward or prove his own superiority, but his over-the-top nature and occasional misfortunes add a layer of humor to the rivalry. Squilliam's character highlights themes of envy and self-esteem in the series while providing comedic moments through his interactions with Squidward.",
    },
    {
      index: 11,
      image: "../public/Images/larryt.png",
      name: "Man Ray",
      info: "Man Ray is a recurring supervillain character in SpongeBob SquarePants, known for his comically exaggerated persona as a villain. He's a tall and muscular character who parodies classic comic book villains. Man Ray often attempts to carry out various evil deeds but is consistently thwarted by the bumbling antics of SpongeBob and Patrick, who inadvertently foil his plans.Despite his menacing appearance, Man Ray's character is portrayed with a humorous twist, often getting caught up in the absurdity of Bikini Bottom rather than achieving his evil objectives. His appearances serve as a source of humor and satire in the show, emphasizing the whimsical and unconventional nature of SpongeBob's underwater world.",
    },
    {
      index: 12,
      image: "../public/Images/larry.png",
      name: "Larry the Lobster",
      info: "Larry the Lobster is a recurring character in SpongeBob SquarePants known for his strong physique, beach-loving personality, and friendly demeanor. He's typically seen as a lifeguard at Goo Lagoon, Bikini Bottom's popular beach destination. Larry is characterized by his muscular build, surfer attitude, and a pair of red swimming trunks.Larry is well-liked by the Bikini Bottom community and is often portrayed as a fitness enthusiast who enjoys working out and promoting a healthy lifestyle. Despite his tough exterior, he is a friendly and approachable character, always willing to offer advice or lend a helping hand. Larry's presence in the show highlights themes of athleticism, camaraderie, and enjoying the outdoors in Bikini Bottom's unique and humorous way.",
    },
    {
      index: 13,
      image: "../public/Images/pearl.png",
      name: "Pearl Krabs",
      info: "Pearl Krabs is a character in SpongeBob SquarePants, known for being the teenage daughter of Mr. Krabs, the owner of the Krusty Krab. Pearl is a young, pink whale who stands out in Bikini Bottom due to her size and species. She is portrayed as a typical teenager, often interested in fashion, music, and socializing with her friends.Despite her contrasting personality with her father, Pearl shares a loving relationship with Mr. Krabs. She's characterized by her youthful exuberance and occasional rebellion, which adds a dynamic element to the show. Pearl's appearances often explore themes of parent-child relationships and the challenges of growing up, offering a relatable dimension to the SpongeBob SquarePants universe.",
    },
  ];
  const [spongBobCharacters, setSpongBobCharacters] =
    useState(SpongBobCharacters);

  return (
    <div>
      <h1>Welcome to SpongBob SquarePants's world</h1>
      <SpongDex
        SpongBobCharacters={spongBobCharacters}
        setSpongBobCharacters={setSpongBobCharacters}
      />
    </div>
  );
}

export default App;
