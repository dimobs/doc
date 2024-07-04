let lastDate = document.getElementById('lastUpdated');

// lastDate.textContent = "test1"

function lastUpdated() {
    var currentDate = new Date();

    // Получаване на деня, месеца и годината от текущата дата
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1; // Месеците в JavaScript започват от 0, затова добавяме 1
    var year = currentDate.getFullYear();
    
    // Форматиране на деня и месеца, за да добавим водеща нула, ако са по-малки от 10
    day = (day < 10) ? '0' + day : day;
    month = (month < 10) ? '0' + month : month;
    
    // Създаване на низ, представляващ българския формат за дата
    var formattedDate = day + '.' + month + '.' + year;
    lastDate.textContent = `${formattedDate}`
}

    lastUpdated();