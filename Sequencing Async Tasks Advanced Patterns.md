```javascript


//1
export const pass = (value) => new Promise(
    (res) => setTimeout(() =>res(value), 1000)
);

export const fail = (errorMessage) => new Promise(
    (_, rej) => setTimeout(() => rej(new Error(errorMessage)), 1000)
);

main();

async function main(){
    try{
        const alpha = await pass('alpha');
        console.log(alpha);

        const beta = await pass('beta');
        console.log(beta);

        const charlie = await pass('charlie');
        console.log(charlie);

        const delta = await pass('delta');
        console.log(delta);

    }catch(err){
        console.log('Rejected:', err.message);
    }
}


//1.2
export const pass = (/** @type {string} */ value) => new Promise(
    (res) => setTimeout(() =>res(value), 1000)
);

export const fail = (/** @type {string} */ errorMessage) => new Promise(
    (_, rej) => setTimeout(() => rej(new Error(errorMessage)), 1000)
);

main();

async function main(){
    try{
        const alpha = await pass('alpha');
        console.log(alpha);

        const beta = await pass('beta');
        console.log(beta);

        const charlie = await fail('charlie');
        console.log(charlie);

        const delta = await pass('delta');
        console.log(delta);

    }catch(err){
        console.log('Rejected:', err.message);
    }
}

//1.3
export const pass = (/** @type {string} */ value) => new Promise(
    (res) => setTimeout(() =>res(value), 1000)
);

export const fail = (/** @type {string} */ errorMessage) => new Promise(
    (_, rej) => setTimeout(() => rej(new Error(errorMessage)), 1000)
);

main();

async function main(){
    try{
       const alphaPh = pass('alpha');
       const betaPm = pass('beta');
    //    const betaPm = fail('beta');
       const eddyPm = pass('eddy');
       const [alpha, beta, eddy] = await Promise.all([alphaPh, betaPm, eddyPm]);
       console.log(alpha, beta, eddy);
    }catch(err){
        console.log('Rejected:', err.message);
    }
}


//1.4
export const pass = (/** @type {string} */ value) => new Promise(
    (res) => setTimeout(() =>res(value), 1000)
);

export const fail = (/** @type {string} */ errorMessage) => new Promise(
    (_, rej) => setTimeout(() => rej(new Error(errorMessage)), 1000)
);

main();

async function main(){
   const alphaPm = pass('alpha');
   const betaPm = fail('beta');
   const eddyPm = pass('eddy');
   // @ts-ignore
   const result = await Promise.allSettled([alphaPm, betaPm, eddyPm]);
   console.log(result);
}


//1.5
export const pass = (/** @type {string} */ value) => new Promise(
    (res) => setTimeout(() =>res(value), 1000)
);

export const fail = (/** @type {string} */ errorMessage) => new Promise(
    (_, rej) => setTimeout(() => rej(new Error(errorMessage)), 1000)
);

main();

async function main(){
   const alphaPm = pass('alpha');
   const betaPm = fail('beta');
   const eddyPm = pass('eddy');
   // @ts-ignore
   const result = await Promise.allSettled([alphaPm, betaPm, eddyPm]);
   console.log(result);

   const [alphaResult, betaResult, eddyResult] = result;
   if(alphaResult.status === 'fulfilled'){
    console.log(alphaResult.value); // alpha
   }

   if(betaResult.status === 'rejected'){
    console.log(betaResult.reason); // Error: beta
   }
}

//1.6
export const pass = (/** @type {string} */ value) => new Promise(
    (res) => setTimeout(() =>res(value), 1000)
);

export const fail = (/** @type {string} */ errorMessage) => new Promise(
    (_, rej) => setTimeout(() => rej(new Error(errorMessage)), 1000)
);

main();

async function main(){
   try {
    const alphaOnePm = fail('alpha one');
    // const alphaOnePm = pass('alpha one');
    const alphaTowPm = fail('alpha two');
    // const alphaTowPm = pass('alpha two');
    // @ts-ignore
    const firstFullfilled = await Promise.any([
        alphaOnePm,
        alphaTowPm
    ]);
    console.log(firstFullfilled);
   } catch (error) {
    // @ts-ignore
    console.log('AggregateError: ', error instanceof AggregateError); //true
    console.log('message', error.errors);
   }
}


//1.7
export const pass = (/** @type {string} */ value) => new Promise(
    (res) => setTimeout(() =>res(value), 1000)
);

export const fail = (/** @type {string} */ errorMessage) => new Promise(
    (_, rej) => setTimeout(() => rej(new Error(errorMessage)), 1000)
);

main();

async function main(){
  try {
    const alphaOnePm = pass('alpha one');
    const alphaTwoPm = pass('alpha two');

    const fulfilled = await Promise.race([
        alphaOnePm, alphaTwoPm
    ]);
    console.log('Fastest Fulfilled:', fulfilled);

  } catch (error) {
    console.log('Fastest Rejected:', error.message);
  }
}

//1.8
export const pass = (/** @type {string} */ value) => new Promise(
    (res) => setTimeout(() =>res(value), 1000)
);

export const fail = (/** @type {string} */ errorMessage) => new Promise(
    (_, rej) => setTimeout(() => rej(new Error(errorMessage)), 1000)
);

main();

async function main(){
  try {
      const alphaTwoPm = fail('alpha two');
    //   const alphaOnePm = pass('alpha one');
      const alphaOnePm = pass('alpha one');

    const fulfilled = await Promise.race([
        alphaOnePm, alphaTwoPm
    ]);
    console.log('Fastest Fulfilled:', fulfilled);

  } catch (error) {
    console.log('Fastest Rejected:', error.message);
  }
}


//1.9

export const pass = (/** @type {string} */ value) => new Promise(
    (res) => setTimeout(() =>res(value), 1000)
);

export const fail = (/** @type {string} */ errorMessage) => new Promise(
    (_, rej) => setTimeout(() => rej(new Error(errorMessage)), 1000)
);

main();

async function main(){
    //sequence
    try {
        // @ts-ignore
        const alpha = await demo('alpha');
        // @ts-ignore
        const beta = await demo('beta');
    } catch (error) {
        
    }
    //parallel
    {

        // @ts-ignore
        const alphaPm = demo('alpha');

        // @ts-ignore
        const betaPm = demo('beta');
    }

    //all - fulfilled
    try {
 
        // @ts-ignore
        const [alpha, beta] = await Promise.all([alphaPm, betaPm]);
        console.log('All Fulfilled', alpha, beta);
    } catch (error) {
        console.log('Any Rejected', error);
    }

    // all - settled - fine analysis
    const [
       
        alphaStatusValueReason,
        
        betaStatusValueReason
   
    // @ts-ignore
    ] = await Promise.allSettled([alphaPm, betaPm]);
    console.log('All Settled', alphaStatusValueReason, betaStatusValueReason);

    //first - fulfilled
    try {
        // @ts-ignore
        const fulfilled = await Promise.any([alphaPm, betaPm]);
        console.log('Any Fulfilled', fulfilled);
    } catch (error) {
        // @ts-ignore
        console.log('All Rejected', error instanceof AggregateError, error.errors)
    }

    //fastest - settled

    try {
        // @ts-ignore
        const fulfilled = await Promise.race([alphaPm, betaPm]);
        console.log('Fastest Fulfilled', fulfilled)
    } catch (error) {
        console.log('Faster Rejected', error.message)
    }
}

