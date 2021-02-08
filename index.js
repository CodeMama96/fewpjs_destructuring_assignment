

const muppet = {
  name: 'Kermit',
  color: 'green',
  song: 'The Rainbow Connection',
  job: 'Host of The Muppet Show',
  partner: 'Miss Piggy'
};

const {name, color, song, job, partner} = muppet;

const k_muppet = {
  k_name: 'Kermit',
  k_color: 'green',
  k_album: {
    the_muppet_movie: {
      song_1: 'Rainbow Connection',
      song_2: 'Moving Right Along',
      song_3: 'Never Before, Never Again',
      song_4: 'I Hope That Something Better Comes Along',
    },
  },
  k_job: 'Host of The Muppet Show',
  k_partner: 'Miss Piggy'
};

const {song_2, song_4} = k_muppet.k_album.the_muppet_movie
const { k_color, k_job, k_partner } = k_muppet
// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
const farmAnimals = 'cow horse sheep pig chicken'
const [moo, neigh, baa, oink, cluck] = 'cow horse sheep pig chicken'.split(' ')
console.log(moo, neigh, baa, oink, cluck)

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them Bessie, Dolly, Babe, and Little.
const [Bessie, ,Dolly, Babe, Little] = 'cow horse sheep pig chicken'.split(' ')

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of black_and_white, black, and pink.
const [black_and_white, ,black, pink,] = 'cow horse sheep pig chicken'.split(' ')

// Arrays

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

const [red, orange, yellow, green, blue, indigo, violet] = colors
const [r, o, y, g, b, , v] = colors
// 4. Use destructuring to assign appropriate variables using the color names.

//const [r, o, y, g, b,v] = colors
// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 
const [indg] = colors[5]
// Objects


// 7. Use destructuring to assign all appropriate variables using the keys as the variable names


// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
