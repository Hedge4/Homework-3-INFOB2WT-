// remove these test resuls when fetchOrders is able to fill the array
const loadedOrders = [
    { movie: 'To Eat or Assassin\'s Creed', tickets: 2, date: '12-04-2023', cost: '€20,00', id: '#3530' },
    { movie: 'The Incredible Mister Pig', tickets: 13, date: '04-11-2022', cost: '€30,00', id: '#3209' },
    { movie: 'The Spectacular Travels of Boyant Tom', tickets: 1, date: '29-02-1988', cost: '€10,00', id: '#4' },
];

function loadOrders() {
    // get user's ID from cookie/query/etc.
    const userId = 0;

    const promises = [
        // force loading to take at least 3 seconds
        new Promise(resolve => setTimeout(resolve, 3000)),
        fetchOrders(userId),
    ];

    // when both timeout and the database request are done and our orders are fetched, replace table entries
    Promise.all(promises).then(populateTable);
}

// gets the user's orders from the database
async function fetchOrders(userId) {
    // send request to database and await it, don't return until database was searched and loadedOrders was filled with the users's orders.
    return true;
}

// replace our "Loading..." text with actual orders
function populateTable() {
    const table = document.getElementById('order-table');

    // delete placeholder entries
    // this also removes the loading animation since only these rows had the 'loading' class
    const rows = table.getElementsByTagName('tr');
    for (let i = rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }

    // fill with fetched orders
    for (let i = 0; i < loadedOrders.length; i++) {
        const order = loadedOrders[i];
        const row = table.insertRow(-1);
        const movieCell = row.insertCell(0);
        const ticketsCell = row.insertCell(1);
        const costCell = row.insertCell(2);
        const dateCell = row.insertCell(3);
        const idCell = row.insertCell(4);
        movieCell.innerHTML = order.movie;
        ticketsCell.innerHTML = order.tickets;
        dateCell.innerHTML = order.date;
        costCell.innerHTML = order.cost;
        idCell.innerHTML = order.id;
    }

    if (!loadedOrders.length) {
        const noResultsPara = document.createElement('p');
        noResultsPara.innerText = 'No previous orders could be found.';

        table.parentNode.replaceChild(noResultsPara, table);
    }
}

// executes when page loads
loadOrders();
