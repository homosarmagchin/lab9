function cardnumber(inputtxt) {
    var cardno = /^(?:5[1-5][0-9]{14})$/;
    if (inputtxt.value.match(cardno)) {
        return
        true;
    } else {
        var str = "\nIsa th \niset it?";
        var patt1 = /^is(\w+)/gmi;
        var result = str.match(patt1);
        document.write(result);
        alert("Not a valid Mastercard number!");
        return false;
    }
}
function validateForm() {
    var nameInput = document.getElementById("name");
    var userIdInput = document.getElementById("userID");
    var passwordInput = document.getElementById("password");
    var zipCodeInput = document.getElementById("zipCode");

    var checkboxes = document.querySelectorAll('input[type="checkbox"][name="language"]:checked');
    var name = nameInput.value;
    var userId = userIdInput.value;
    var password = passwordInput.value;
    var zipCode = zipCodeInput.value;

    var nameRegex = /^[A-Za-z]+$/;
    var userIdRegex = /^.{5,12}$/; 
    var passwordRegex = /^.{7,12}$/; 
    var zipCodeRegex = /^\d{3}$/;

    if (checkboxes.length === 0) {
        alert("Please select at least one language.");
        return false; // Prevent form submission
    }
    if (!nameRegex.test(name)) {
        alert("Name should contain only alphabetic characters!");
        nameInput.focus(); 
        return false;
    }

    if (!userIdRegex.test(userId)) {
        alert("User ID length must be between 5 and 12 characters!");
        userIdInput.focus(); 
        return false; 
    }

    if (!passwordRegex.test(password)) {
        alert("Password length must be between 7 and 12 characters!");
        passwordInput.focus(); 
        return false; 
    }

    if (!zipCodeRegex.test(zipCode)) {
        alert("Zip Code should contain exactly 3 digits!");
        zipCodeInput.focus(); 
        return false;
    }
    return true;
    
}
