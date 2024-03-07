// Form Captcha Generator
function generateCaptcha() {
    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var captcha = '';
    for (var i = 0; i < 5; i++) {
        captcha += chars[Math.floor(Math.random() * chars.length)];
    }
    document.getElementById('captcha').innerText = captcha;
}
window.onload = generateCaptcha;

// Form Validation Name
function validateName() {
    var name = document.getElementById('name').value;
    var error = document.getElementById('nameError');
    if(name.length < 3) {
        error.innerText = 'Name must be at least 3 characters long.';
        return false;
    }
    error.innerText = '';
    return true;
}

// Allow only letters in Name
document.getElementById('name').addEventListener('input', function (e) {
    var originalValue = e.target.value;
    var cleanedValue = originalValue.replace(/[^a-zA-Z ]/g,'');
    if (originalValue !== cleanedValue) {
        document.getElementById('nameError').innerText = 'Please enter only letters.';
    }
    e.target.value = cleanedValue;
});

// Form Validation Email
function validateEmail() {
    var email = document.getElementById('email').value;
    var error = document.getElementById('emailError');
    var re = /\S+@\S+\.\S+/;
    if(!re.test(email)) {
        error.innerText = 'Please enter a valid email address.';
        return false;
    }
    error.innerText = '';
    return true;
}

// Form Validation Mobile
function validateMobile() {
    var mobile = document.getElementById('mob').value;
    var error = document.getElementById('mobError');
    if(mobile.length != 10) {
        error.innerText = 'Mobile number must be 10 digits.';
        return false;
    }
    error.innerText = '';
    return true;
}

// Allow only numbers in Mobile
document.getElementById('mob').addEventListener('input', function (e) {
    var originalValue = e.target.value;
    var cleanedValue = originalValue.replace(/\D/g,'');
    if (originalValue !== cleanedValue) {
        document.getElementById('mobError').innerText = 'Please enter only numbers.';
    }
    e.target.value = cleanedValue;
});

// Form Validation Address
function validateAddress() {
    var address = document.getElementById('address').value;
    var error = document.getElementById('addressError');
    if(address.length < 10) {
        error.innerText = 'Address must be at least 10 characters long.';
        return false;
    }
    error.innerText = '';
    return true;
}

// Form Validation Captcha
function validateCaptcha() {
    var userCaptcha = document.getElementById('userCaptcha').value;
    var captcha = document.getElementById('captcha').innerText;
    var error = document.getElementById('captchaError');
    if(userCaptcha != captcha) {
        error.innerText = 'Captcha does not match.';
        return false;
    }
    error.innerText = '';
    return true;
}

// Form Validation
function validateForm() {
    return validateName() && validateEmail() && validateMobile() && validateAddress() && validateCaptcha();
}

// Add Item to Table
document.getElementById('addItem').addEventListener('click', function() {
    var foodItem = document.getElementById('foodItem').value;
    var table = document.getElementById('itemTable');
    var errorElement = document.getElementById('error');
    foodItem = foodItem.charAt(0).toUpperCase() + foodItem.slice(1).toLowerCase();

    for (var i = 0, row; row = table.rows[i]; i++) {
        if (row.cells[0].textContent === foodItem) {
            errorElement.textContent = 'This item is already in the table.';
            return;
        }
    }

    if (foodItem != '') {
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.textContent = foodItem;
        cell2.innerHTML = '<button class="table-button" onclick="decreaseQuantity(this)">-</button><span>1</span><button class="table-button" onclick="increaseQuantity(this)">+</button>';
        cell3.innerHTML = '<button class="delete-button" onclick="deleteRow(this)">Delete</button>';
        document.getElementById('foodItem').value = '';
        errorElement.textContent = '';
    }
});

// Decrease Quantity
function decreaseQuantity(btn) {
    var quantity = btn.nextSibling.textContent;
    if (quantity > 1) {
        btn.nextSibling.textContent = --quantity;
    }
}

// Increase Quantity
function increaseQuantity(btn) {
    var quantity = btn.previousSibling.textContent;
    btn.previousSibling.textContent = ++quantity;
}

// Delete Row
function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}