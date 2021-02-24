const people = ['Erik', 'lito', 'Amber'];

const addUser = (person, fn) => {
    setTimeout(() => {
        people.push(person)
        fn() // this is our callback 😅
    }, 2000)

};

const getUser = () => { setTimeout(() => console.log(people), 1000) };

addUser('Wika', getUser)



function well(number, number2, cb) {
    // their function does something to the input that we pass in 

    cb({ data: number + number2 * 2 }) // this is our callback 😅
}

// since it is a callBack then we get a chance to do something to it!
well(10, 12, function (data) {
    console.log(data, 'this is the data we get back');
});

/**
 * 
 * A call back is a function we pass in 
 * to be called by the initial function AFTER the function has been RUNNED or COMPLETED
 * 
 */

