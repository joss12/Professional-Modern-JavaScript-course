```javascript
//1
const today = new Date();
console.log(today.toString());// Mon Aug 07 2023 16:49:27 GMT-0700 (Pacific Daylight Time)

 console.log(today); //2023-08-07T23:50:05.720Z

 console.log(today.toISOString()); //2023-08-07T23:50:59.173Z

 console.log(typeof today);

 //2
 const date = new Date(2025, 0, 1, 0, 0, 0);

function padZero(num){
    return num < 10 ? `0${num}` : num.toString();
}

function format(date){
    const YYYY = date.getFullYear().toString();
    const MM = padZero(date.getMonth() + 1);
    const DD = padZero(date.getDate());
    const hh = padZero(date.getHours());
    const mm = padZero(date.getMinutes());
    const ss = padZero(date.getSeconds());
    return `${YYYY}-${MM}-${DD} ${hh}:${mm}:${ss}`;
}

console.log(format(date));

//const date = new Date(2030, 0, 1, 11);
console.log(date);

const timestamp = date.getTime();
console.log(timestamp);

const copy = new Date(timestamp);

const yesterdayTimestamp = timestamp - 24 * 60 * 60 * 1000;
const yesterday = new Date(yesterdayTimestamp);
console.log(yesterday);

//3
//We are +11 hours => 11*60 = 660 minutes ahead of UTC
console.log(minuteOffsetLocalTimeZone); //-660

/**(+/-)hh:m*/

function formattedTimeZone(){
    const offset = new Date().getTimezoneOffset();
    const sing = offset > 0 ? "-" : "+";
    const minutes = Math.abs(offset % 60);
    const hours = Math.floor(Math.abs(offset / 60));
    return `${sing}${hours}:${minutes}`;
}

console.log(formattedTimeZone())

//4
function measure(approach, cb) {
    const start = Date.now();
    for(let i = 0; i < 100_00; i++)cb()
        const end = Date.now();
        console.log(approach, 'took', end - start, 'ms');

}

const size = 10_000;
console.log('car');
measure('fill', ()=>{
    Array(size).fill();
});
measure('spread', ()=>{
    [...Array(size)];
})
console.log('stop');

//5
const bladeRunner = {
    year: new Date(2049, 0, 1, 11)
};

const json = JSON.stringify(bladeRunner);
console.log(json); //{"year":"2049-01-01T19:00:00.000Z"}

//6
const bladeRunner = {
    year: new Date(2049, 0, 1, 11)
};

const json = JSON.stringify(bladeRunner);
console.log(json);

const movie = JSON.parse(json);
console.log(movie.year);
movie.year = new Date(movie.year);
console.log(movie.year.toString());