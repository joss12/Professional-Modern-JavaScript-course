```Javascript

/**
 * The let variable is an updatable variable.
 * you can assign an value to it
 */
{
    let withLet;
    withLet = 0;
}
let example = 'Hello world';
console.log(example); //Hello world

# Assigning a new value

example = 'Goodbye world';

console.log(example); //Goodbye world



let name;
console.log(name); //undefined

name = 'John Doe';
console.log(name); //John Doe

# The difference between let and const




/**
 * The const variable is not updatable, 
 * once the value has been assigned it can't be changed.
 */
{
    const withConst; // Error: Must be initialized
}

{
    const withConst = 0;
    withConst = 1; //Error: Cannot reassign a constant
}

{
    let message = 'Is anyone out there ?'
    console.log(message); // Is anyone out there
}
{
    let message = 'Are you sure you want to move?'
    console.log(message); //Are you sure you want to move
}

message; //Error;


  # Improve JavaScript with typescript
  # Install typescript
  `npx tsc --init --checkJs --noEmit --rootDir src`
# Run this code with typescript
# Add this command to the script in the package.json file
# Then run `npm run build`
` "build":"tsc" ` 
const valid = parseFloat('3.141');
console.log(valid); //3.141


const useless = parseFloat(3.141);
console.log(useless); //3.141

console.log([24, 48]); // [24, 48]

const dangerous = [24] + [48];
console.log(dangerous); // [24, 48]
