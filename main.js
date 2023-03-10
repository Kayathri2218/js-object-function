//

document.write('<br>');
document.write('<br>');

document.write("7.2. Object array used");

document.write('<br>');


const isObject = (val) => {
    if (val === null) {
        return false;
    }
    return typeof val === 'object';
};
const person1 = {
    first_name: 'Monica',
    last_name: 'Geller',
    phone: '915-996-9739',
    email: 'monica37@gmail.com',
    address: {
        street: {
            street_num: '495',
            street_name: 'Grove Street',
        },
        city: 'New York',
        country: 'USA',
    },
};
const nestedObject = (obj) => {
    for (const key in obj) {
        if (isObject(obj[key])) {
            nestedObject(obj[key]);
        } else {
            console.log(`${key} ==> ${obj[key]}`);
			document.write(`${key} ==> ${obj[key]}`);
			document.write('<br>');
        }
    }
};

nestedObject(person);
