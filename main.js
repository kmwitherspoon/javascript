confirm("I am ready to play!");

console.log(play === true);
var play = confirm("This game will test your limits. Are you sure you want to play?");
if(play === true) {
  console.log("Let's do this!");
  console.log("You have gone on a vacation with your family, your in-laws, and your sister's in-laws to Jurassic World. Everyone is having a grand time until an alarm goes off and everyone is told to evacuate. Unfortunately, there isn't enough time. You are now forced to make decisions that will mean life or death for your loved ones.");
console.log("Your entire group is together and are trying to keep up with each other. You look back and your sister's in-laws are separated from the group.");
console.log(inlaws === true);
var inlaws = confirm("Do you go back and help them?");
if(inlaws) {
  console.log("You run back to help them and catch up with the rest of the group. They are safe. Your spouse's father is being chased by a raptor.");
  var spousefather = confirm("Do you try to save him?");
  if(spousefather) {
    console.log("You find a gun and shoot the raptor down. Your father-in-law is safe. Your parents are cornered by a t-rex.");
    var parents = confirm("Do you try to save them?");
    if(parents === true) {
      console.log("You realize you have the ability to control the raptors. The raptors attack the t-rex and the t-rex runs away. Your parents are safe but you're at the ocean.");
      var everyone = confirm("Do you jump in the water?");
      if(everyone) {
        console.log("Everyone gets eaten by a Sarosuchus. Everyone is dead. The end.");
      } else {
        console.log("Everyone gets pushed in the water. Everyone gets eaten by a Sarosuchus. Everyone is dead. The end.");
      }
    } else {
        if(parents === false) {
          console.log("Your parents are mauled by the t-rex. You jump into the ocean in hopes to swim away. You are attacked by a Sarosuchus and are mauled to death. The end.");
        } else {
          console.log("You get eaten by a t-rex. The end.");
        }
      }
  } else {
  if(spousefather === false) {
    console.log("Your father-in-law is mauled by the raptor and your spouse is hysterical. Your spouse runs straight into the Allosaurus exhibit.");
    var spouse = confirm("Do you go after your spouse?");
    if(spouse === true) {
      console.log("You are able to distract the Allosaurus long enough for your spouse to get away. Unfortunately there isn't enough time for you and you are ripped apart by the Allosaurus. The end.");
    } else{
      console.log("You get eaten by a t-rex. The end.");
    }
  }
}
} else {
  if(inlaws === false) {
    console.log("As you continue to run away, you look back and both in-laws are trampled by the crowd.They are dead. Your sister trips and falls to the ground.");
    var sister = confirm("Do you stop and help her?");
    if(sister === true) {
      console.log("You are able to help your spouse and catch up with the rest of the group. Your spouse is safe.");
      var everyone = confirm("Do you jump in the water?");
      if(everyone) {
        console.log("Everyone gets eaten by a Sarosuchus. Everyone is dead. The end.");
      } else {
        console.log("Everyone gets pushed in the water. Everyone gets eaten by a Sarosuchus. Everyone is dead. The end.");
      }
    } else {
      if(sister === false) {
        console.log("Your sister gets taken away in the air by a pterodactyl. Your sister is dead. Your family keeps running. You hear a low rumble behind you. It's a t-rex. You see a helicopter that can fit one more person.");
        var helicopter = confirm("Do you get on the helicopter?");
        if(helicopter === true) {
          console.log("Your family gets mauled by the t-rex. As you go up in the air, a pterodactyl runs into the helicopter. The helicopter gets blown up. You are dead. The end.");
        } else {
          console.log("You get eaten by a t-rex.");
        }
      }
    }
  }
}
} else {
  console.log("Well, you died anyway.");
}
