let isGuestOneVegan = false;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log("Show Vegan Menu");
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log("Make sure to show some vegan options");
} else {
  console.log("Offer up anything on the menu");
}
