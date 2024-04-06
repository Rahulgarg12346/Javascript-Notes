// *************** Dates *********************************************

//--------------- Dates method ---------------------------------------
// Creating a Date object
const now = new Date(); // Current date and time
const specificDate = new Date('2022-01-01'); // Specific date and time
const millisecondsSinceEpoch = new Date(1641091200000); // Date from milliseconds since January 1, 1970

// Getting various components of a date
console.log(now.getFullYear()); // Get the year (4 digits)
console.log(now.getMonth()); // Get the month (0-11)
console.log(now.getDate()); // Get the day of the month (1-31)
console.log(now.getDay()); // Get the day of the week (0-6, where 0 is Sunday)
console.log(now.getHours()); // Get the hours (0-23)
console.log(now.getMinutes()); // Get the minutes (0-59)
console.log(now.getSeconds()); // Get the seconds (0-59)
console.log(now.getMilliseconds()); // Get the milliseconds (0-999)
console.log(now.getTime()); // Get the milliseconds since January 1, 1970 (Epoch time)

// Setting various components of a date
now.setFullYear(2023);
now.setMonth(2); // Note: Month is zero-based (0-11)
now.setDate(15);
now.setHours(12);
now.setMinutes(30);
now.setSeconds(45);
now.setMilliseconds(500);

// Formatting date to string
console.log(now.toDateString()); // Convert date to a human-readable string (e.g., "Sat Mar 15 2023")
console.log(now.toTimeString()); // Convert time to a human-readable string (e.g., "12:30:45 GMT+0530 (IST)")
console.log(now.toLocaleDateString()); // Convert to localized date string
console.log(now.toLocaleTimeString()); // Convert to localized time string
console.log(now.toISOString()); // Convert to ISO 8601 string (e.g., "2023-03-15T07:00:45.500Z")

// UTC methods
console.log(now.toUTCString()); // Convert to a UTC string
console.log(now.getUTCFullYear()); // Get the year in UTC
// Similar UTC methods are available for other date components

// Date comparison
const futureDate = new Date('2023-12-31');
if (now < futureDate) {
  console.log('Future date');
} else if (now > futureDate) {
  console.log('Past date');
} else {
  console.log('Same date');
}
//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------

let myDate =  new Date()
console.log(myDate);
console.log(myDate.toString())


let myCreatedDate = new Date(2023, 0,23)
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()

console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()

console.log(newDate.getMonth());
newDate.toLocaleString('default',{
    weekday: "long",
})
// console.log(newDate)