//   API:
//   https://api.restful-api.dev/objects


//   Request JSON Example:
//   {
//   "name": "Apple MacBook Pro 16",
//   "data": {
//   "year": 2019,
//   "price": 1849.99,
//   "CPU model": "Intel Core i9",
//   "Hard disk size": "1 TB"
//   }
//   }

// გააკეთეთ ფორმა და POST მეთოდით გააგზავნეთ ფორმაში შეყვანილი ინფორმაცია ზემოთ აღნიშნულ მისამართზე,
// რესპონსში დაბრუნებული დატა შეინახეთ მასივში და გამოიტანეთ ლისტის სახით ფორმის გვერძე.

const nameInput = document.getElementById('name');
const yearInput = document.getElementById('year');
const priceInput = document.getElementById('price');
const cpuModelInput = document.getElementById('cpu_model');
const hardDiskInput = document.getElementById('hard_disk');
const ul = document.getElementById('ul');
const api = 'https://api.restful-api.dev/objects';

// fetch GET request
function getData() {
fetch(api)
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            console.log(item);
            ul.innerHTML += `
           <li>
                    <p><span>Id: </span> ${item.id}</p>
                    <p><span>Name: </span> ${item.name || "არ არის მითითებული"}</p>
                    <p><span>Year: </span> ${item.data && item.data.year ? item.data.year : "არ არის მითითებული"}</p>
                    <p><span>Price: </span> ${item.data && item.data.price ? item.data.price : "არ არის მითითებული"}</p>
                    <p><span>CPU Model: </span> ${item.data && item.data.generation ? item.data.generation : "არ არის მითითებული"}</p>
                    <p><span>Hard Disk Size: </span> ${item.data && item.data.capacity ? item.data.capacity : "არ არის მითითებული"}</p>
                </li>
        `
        }
    })
    .catch(error => console.error('Error:', error));
}
getData();


// fetch POST request
function onSubmit(event) {
    fetch(api, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            name: nameInput.value,
            data: {
                year: yearInput.value,
                price: priceInput.value,
                "CPU model": cpuModelInput.value,
                "Hard disk size": hardDiskInput.value,
            },
        })
    })

        .then(response => response.json())
        .then(data => {
            getData();
        })
        .catch(error => console.error('Error:', error));
}