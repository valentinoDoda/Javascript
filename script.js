'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order : function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
const ages = [19,29,23];
const [a,b,c] = ages; //Καταστροφή Πίνακα εισχωρόντας το σε νεες μεταβλητές αντίστοιχα (το αρχικό ages δεν επιρεάζεται)
console.log(ages, a,b,c); 

const [first, second] = ages; // Σε περίπτωση που δηλωνουλες λιγότερες μεταβλητές απο το πλήθος απο του ages λειτουργεί κανονικά με την σειρά.
console.log(first,second);

const [one , ,three] = ages; // Σε περίπτωση που δεν θελουμε καποιο που ανοίκει ανάμεσα μπορούμε να το προσθεράσουμε με κόμμα 
console.log(one,three);

let [main , ,secondary] = restaurant.categories;
console.log(main, secondary);

[secondary, main] = [main, secondary]; // Αντιστροφή τιμών
console.log(main, secondary, restaurant.categories);

let  [starter, mainFood ] = restaurant.order(2, 2); // Αντιστοίχιση σε επιστροφή λίστα απο συνάρτηση
console.log(starter, mainFood);


const nested = [1,2,[4,5]];
const [i, ,[j,k]] = nested; // Αντιστοίχιση σε εμφωλευμένες περιπτώσεις
console.log(i, j, k);

const [q=1,w=1,e=1,r=1] = nested; // Μπορούμε να βάλουμε default τιμές στις μεταβλητές ετσι ώστε να απογύγουμε το ενδεχόμενο μνματός undefined λόγο μη επαρκών τιμών στον πίνακα
console.log(q,w,e,r);