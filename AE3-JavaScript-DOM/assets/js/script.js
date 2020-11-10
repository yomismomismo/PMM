// const { create } = require("lodash");

document.addEventListener('DOMContentLoaded', () => {

    let div = document.createElement("div");
    let backButton = document.getElementById("backButton");
    let nextButton = document.getElementById("nextButton");
    document.body.appendChild(div);
    let paginas = ["bienvenida", "Formulario", "ErrorCheck"]
    let contadorPagina = 0;
    let name = "";
    let surname = "";
    let date = "";
    let address = "";
    let postalCode = "";
    let province = "";
    let town = "";
    let callBack = "";
    backButton.addEventListener("click", function () {
        if (contadorPagina > 0) {
            contadorPagina -= 1;
            paginador(contadorPagina);
        }
    });
    nextButton.addEventListener("click", function () {
        if (contadorPagina == 0) {
            let urlInput = document.getElementById("url")
            callBack = urlInput.value;  
        }
    if ( callBack != "") {
        if (contadorPagina < paginas.length - 1) {
            contadorPagina += 1;
        }
        paginador(contadorPagina)
    }

    });

    bienvenida = () => {
        backButton.style.display ="none"
        nextButton.setAttribute("disabled", null);
        if (div.childElementCount > 0) {
            for (let index = 0; index <= div.childElementCount; index++) {
                div.removeChild(div.children[0]);
            }
        }

        let titleText = document.createElement("h1");
        let contentText = document.createElement("p");
        titleText.textContent = "Bienvenido a este formulario";
        titleText.style.textAlign = "center";
        contentText.textContent = "Para poder registrarte en esta página deberás rellenar este formulario.";
        contentText.style.textAlign = "center";
        let urlLabel= document.createElement("p");
        urlLabel.textContent = "URL (Para continuar debes introducir una URL)";
        let urlInput = document.createElement("input");
        urlInput.id = "url";

        div.appendChild(titleText);
        div.appendChild(contentText);
        div.appendChild(urlLabel);
        div.appendChild(urlInput);
        let input = document.getElementById("url")
        input.addEventListener("keyup", function () {
            if (input.value !="") {
                nextButton.removeAttribute("disabled")
            }
            else{
                nextButton.setAttribute("disabled", null);
            }

          });
    }
    if (contadorPagina == 0) {
        bienvenida()
    }
    Formulario = () => {
        nextButton.removeAttribute("disabled")
        backButton.style.display =""
        let contadorElementos = div.childElementCount
        
        for (let index = 0; index < contadorElementos; index++) {
            div.removeChild(div.children[0]);

        }


        let form = document.createElement("Form");
        form.id = "form"

        let labelName = document.createElement("p");
        labelName.textContent = "Nombre *";
        let inputName = document.createElement("input");
        inputName.id = "inputName";
        inputName.setAttribute("required", "");
        let divErrorName = document.createElement("div");
        divErrorName.id = "divErrorName";
        divErrorName.className = "error";
        divErrorName.style.display = "none";

        let labelSurname = document.createElement("p");
        labelSurname.textContent = "Apellidos *";
        let inputSurname = document.createElement("input");
        inputSurname.setAttribute("required", "")
        inputSurname.id = "inputSurname";
        let divErrorSurname = document.createElement("div");
        divErrorSurname.id = "divErrorSurname"
        divErrorSurname.className = "error";
        divErrorSurname.style.display = "none";

        let labelDate = document.createElement("p");
        labelDate.textContent = "Date *";
        let inputDate = document.createElement("input");
        inputDate.id = "inputDate";
        inputDate.type = "date"
        let divErrorDate = document.createElement("div");
        divErrorDate.id = "divErrorDate"
        divErrorDate.className = "error";
        divErrorDate.style.display = "none";

        let labelAddress = document.createElement("p");
        labelAddress.textContent = "Dirección";
        let inputAddress = document.createElement("input");
        inputAddress.id = "inputAddress"
        let divErrorAddress = document.createElement("div");
        divErrorAddress.id = "divErrorAddress"
        divErrorAddress.className = "error";
        divErrorAddress.style.display = "none";

        let labelPostalCode = document.createElement("p");
        labelPostalCode.textContent = "Código Postal *";
        let inputPostalCode = document.createElement("input");
        inputPostalCode.id = "inputPostalCode"
        inputPostalCode.setAttribute("required", "")
        inputPostalCode.maxLength = 5;
        inputPostalCode.minLength = 5;
        inputPostalCode.type = "tel";
        inputPostalCode.setAttribute("pattern", "[0-9]{5}")

        let divErrorPostalCode = document.createElement("div");
        divErrorPostalCode.id = "divErrorPostalCode";
        divErrorPostalCode.className = "error";
        divErrorPostalCode.style.display = "none";

        let labelProvince = document.createElement("p");
        labelProvince.textContent = "Provincia *";
        let inputProvince = document.createElement("select");
        inputProvince.id = "inputProvince"
        inputProvince.setAttribute("required", "")
        let option = document.createElement("option");
        option.value = "";
        option.text = "-Selecciona-";
        let option1 = document.createElement("option");
        option1.value = "Castellon";
        option1.text = "Castellon";
        let option2 = document.createElement("option");
        option2.value = "Valencia";
        option2.text = "Valencia";
        let option3 = document.createElement("option");
        option3.value = "Alicante";
        option3.text = "Alicante";

        inputProvince.add(option, null);
        inputProvince.add(option1, null);
        inputProvince.add(option2, null);
        inputProvince.add(option3, null);
        let divErrorProvince = document.createElement("div");
        divErrorProvince.id = "divErrorProvince";
        divErrorProvince.style.display = "none";
        divErrorProvince.className = "error"

        let labelTown = document.createElement("p");
        labelTown.textContent = "Municipio *";
        let inputTown = document.createElement("input");
        inputTown.id = "inputTown";
        inputTown.setAttribute("required", "")
        inputTown.style.textTransform = "uppercase"
        let divErrorTown = document.createElement("div");
        divErrorTown.id = "divErrorTown";
        divErrorTown.className = "error";
        divErrorTown.style.display = "none";
        let br = document.createElement("br");




        div.appendChild(form);

        form.appendChild(labelName);
        form.appendChild(inputName);
        form.appendChild(divErrorName)

        form.appendChild(labelSurname);
        form.appendChild(inputSurname);
        form.appendChild(divErrorSurname)

        form.appendChild(labelDate);
        form.appendChild(inputDate);
        form.appendChild(divErrorDate)

        form.appendChild(labelAddress);
        form.appendChild(inputAddress);
        form.appendChild(divErrorAddress)

        form.appendChild(labelPostalCode);
        form.appendChild(inputPostalCode);
        form.appendChild(divErrorPostalCode)

        form.appendChild(labelProvince);
        form.appendChild(inputProvince);
        form.appendChild(divErrorProvince);

        form.appendChild(labelTown);
        form.appendChild(inputTown);
        form.appendChild(divErrorTown);
        form.appendChild(br);


    }


    let errorName = false;
    let errorSurname = false;
    let errorDate = false;
    let errorPostalCode = false;
    let errorProvince = false;
    let errorTown = false;
    let allTrue = false;
    ErrorCheck = () => {
        let errorDiv = document.createElement("div");
        errorDiv.style.display = "none";
        errorDiv.id = "errorBox";
        errorDiv.className = "error";
        div.before(errorDiv);
        let inputCheckName = document.getElementById("inputName");
        let inputCheckSurname = document.getElementById("inputSurname");
        let inputCheckDate = document.getElementById("inputDate");
        let inputCheckAddress = document.getElementById("inputAddress");
        let inputCheckPostalCode = document.getElementById("inputPostalCode");
        let inputCheckProvince = document.getElementById("inputProvince");
        let inputCheckTown = document.getElementById("inputTown");


        let divErrorName = document.getElementById("divErrorName");
        let divErrorSurname = document.getElementById("divErrorSurname");
        let divErrorDate = document.getElementById("divErrorDate");
        let divErrorPostalCode = document.getElementById("divErrorPostalCode");
        let divErrorProvince = document.getElementById("divErrorProvince");
        let divErrorTown = document.getElementById("divErrorTown");

        let errorBox = document.getElementById("errorBox");

        if (inputCheckName.value == "" && errorName != true) {
            errorBox.style.display = "block";
            let errorMessageName = document.createElement("p");
            errorMessageName.textContent = "Debes Introducir un nombre";
            errorMessageName.id = "errorName";
            errorMessageName.className = "error";
            let errorMessageName1 = document.createElement("p");
            errorMessageName1.textContent = "Debes Introducir un nombre";
            errorMessageName1.id = "errorName1";
            errorMessageName1.className = "error";
            divErrorName.style.display = "block"
            errorBox.appendChild(errorMessageName)
            divErrorName.appendChild(errorMessageName1)
            errorName = true
        }

        else if (inputCheckName.value != "") {

            let ErrorBoxName = document.getElementById("errorName");
            let errorMessageName1 = document.getElementById("errorName1");
            if (ErrorBoxName != null) {
                ErrorBoxName.remove()
                divErrorName.removeChild(errorMessageName1)
            }


            divErrorName.style.display = "none"
            name = inputCheckName.value;
            errorName = false;

        }



        if (inputCheckSurname.value == "" && errorSurname != true) {
            errorBox.style.display = "block";
            let errorMessageSurname = document.createElement("p");
            errorMessageSurname.textContent = "Debes Introducir un apellido";
            errorMessageSurname.id = "errorSurname"
            errorMessageSurname.className = "error";
            let errorMessageSurname1 = document.createElement("p");
            errorMessageSurname1.textContent = "Debes Introducir un apellido";
            errorMessageSurname1.id = "errorSurname1";
            errorMessageSurname1.className = "error";
            divErrorSurname.style.display = "block";
            errorBox.appendChild(errorMessageSurname);
            divErrorSurname.appendChild(errorMessageSurname1);

            errorSurname = true
        }

        else if (inputCheckSurname.value != "") {

            let ErrorBoxSurname = document.getElementById("errorSurname");
            let errorMessageSurname1 = document.getElementById("errorSurname1");
            if (ErrorBoxSurname != null) {
                ErrorBoxSurname.remove();
                divErrorSurname.removeChild(errorMessageSurname1);
            }

            divErrorSurname.style.display = "none";
            surname = inputCheckSurname.value;
            errorSurname = false;

        }

        if (inputCheckAddress.value != "") {
            address = inputCheckAddress.value;
        }



        if (inputCheckDate.value == "" && errorDate != true) {
            errorBox.style.display = "block";
            let errorMessageDate = document.createElement("p");
            errorMessageDate.textContent = "Debes introducir una Fecha";
            errorMessageDate.id = "errorDate";
            errorMessageDate.className = "error";
            let errorMessageDate1 = document.createElement("p");
            errorMessageDate1.textContent = "Debes introducir una Fecha";
            errorMessageDate1.id = "errorDate1";
            errorMessageDate1.className = "error";
            divErrorDate.style.display = "block";
            errorBox.appendChild(errorMessageDate);
            divErrorDate.appendChild(errorMessageDate1);
            errorDate = true;
        }

        else if (inputCheckDate.value != "") {

            let ErrorBoxDate = document.getElementById("errorDate");
            let errorMessageDate1 = document.getElementById("errorDate1");
            if (ErrorBoxDate != null) {
                ErrorBoxDate.remove();
                divErrorDate.removeChild(errorMessageDate1);
            }

            date = inputCheckDate.value;
            divErrorDate.style.display = "none";
            errorDate = false;

        }

        if (inputCheckPostalCode.value == "" && errorPostalCode != true || isNaN(inputCheckPostalCode.value) && errorPostalCode != true) {
            errorBox.style.display = "block";
            let errorMessagePostalCode = document.createElement("p");
            errorMessagePostalCode.textContent = "Debes Introducir un Código Postal Correcto";
            errorMessagePostalCode.id = "errorPostalCode";
            errorMessagePostalCode.className = "error";
            let errorMessagePostalCode1 = document.createElement("p");
            errorMessagePostalCode1.textContent = "Debes Introducir un Código Postal Correcto (ej. 12345)";
            errorMessagePostalCode1.id = "errorPostalCode1";
            errorMessagePostalCode1.className = "error";
            divErrorPostalCode.style.display = "block";
            errorBox.appendChild(errorMessagePostalCode);
            divErrorPostalCode.appendChild(errorMessagePostalCode1);
            errorPostalCode = true;
        }

        if (inputCheckPostalCode.value != "" && inputCheckPostalCode.value.length == 5 && !isNaN(inputCheckPostalCode.value)) {

            let ErrorBoxPostalCode = document.getElementById("errorPostalCode");
            let errorMessagePostalCode1 = document.getElementById("errorPostalCode1");
            if (ErrorBoxPostalCode != null) {
                ErrorBoxPostalCode.remove();
                divErrorPostalCode.removeChild(errorMessagePostalCode1);
            }

            divErrorPostalCode.style.display = "none";
            postalCode = inputCheckPostalCode.value;
            errorPostalCode = false;

        }

        if (inputCheckProvince.value == "" && errorProvince != true) {
            errorBox.style.display = "block";
            let errorMessageProvince = document.createElement("p");
            errorMessageProvince.textContent = "Debes seleccionar una provincia";
            errorMessageProvince.id = "errorProvince";
            errorMessageProvince.className = "error";
            let errorMessageProvince1 = document.createElement("p");
            errorMessageProvince1.textContent = "Debes seleccionar una provincia";
            errorMessageProvince1.id = "errorProvince1";
            errorMessageProvince1.className = "error";
            divErrorProvince.style.display = "block";
            errorBox.appendChild(errorMessageProvince);
            divErrorProvince.appendChild(errorMessageProvince1);
            errorProvince = true;
        }
        if (inputCheckProvince.value != "") {

            let ErrorBoxProvince = document.getElementById("errorProvince");
            let errorMessageProvince1 = document.getElementById("errorProvince1");
            if (ErrorBoxProvince != null) {
                ErrorBoxProvince.remove();
                divErrorProvince.removeChild(errorMessageProvince1);
            }

            province = inputCheckProvince.value;
            divErrorProvince.style.display = "none";
            errorProvince = false;

        }

        if (inputCheckTown.value == "" && errorTown != true) {
            errorBox.style.display = "block";
            let errorMessageTown = document.createElement("p");
            errorMessageTown.textContent = "Debes introducir un municipio";
            errorMessageTown.id = "errorTown";
            errorMessageTown.className = "error";
            let errorMessageTown1 = document.createElement("p");
            errorMessageTown1.textContent = "Debes introducir un municipio";
            errorMessageTown1.id = "errorTown1";
            errorMessageTown1.className = "error";
            divErrorTown.style.display = "block";
            errorBox.appendChild(errorMessageTown);
            divErrorTown.appendChild(errorMessageTown1);
            errorTown = true;
        }
        if (inputCheckTown.value != "") {

            let ErrorBoxTown = document.getElementById("errorTown");
            let errorMessageTown1 = document.getElementById("errorTown1");
            if (ErrorBoxTown != null) {
                ErrorBoxTown.remove();
                divErrorTown.removeChild(errorMessageTown1);
            }
            town = inputCheckTown.value;
            divErrorTown.style.display = "none";
            errorTown = false;

        }

        if (errorName != true && errorSurname != true && errorDate != true && errorPostalCode != true && errorProvince != true && errorTown != true) {
            allTrue = true;
            return allTrue;
        }
    }

    showUserData = () => {
        nextButton.setAttribute("disabled", null);
        let contadorElementos = div.childElementCount;
        for (let index = 0; index < contadorElementos; index++) {
            div.removeChild(div.children[0]);
        }

        let UserObject = {

            userName: name,
            userSurname: surname,
            userDate: date,
            userAddress: address,
            userPostalCode: postalCode,
            userProvince: province,
            userTown: town
        }
        console.log(Object.values(UserObject));
        let nameLabel = document.createElement("h4");
        nameLabel.textContent = "Nombre";
        let completeName = document.createElement("p");
        completeName.textContent = Object.values(UserObject)[0];

        let surnameLabel = document.createElement("h4");
        surnameLabel.textContent = "Apellidos";
        let completeSurname = document.createElement("p");
        completeSurname.textContent = Object.values(UserObject)[1];

        let dateLabel = document.createElement("h4");
        dateLabel.textContent = "Fecha";
        let completeDate = document.createElement("p");
        completeDate.textContent = Object.values(UserObject)[2];

        let addressLabel = document.createElement("h4");
        addressLabel.textContent = "Dirección";
        let completeAddress = document.createElement("p");

        if (Object.values(UserObject)[3] == "") {
            completeAddress.textContent = "-";
        }
        else {
            completeAddress.textContent = Object.values(UserObject)[3];
        }

        let postalCodeLabel = document.createElement("h4");
        postalCodeLabel.textContent = "Código Postal";
        let completePostalCode = document.createElement("p");
        completePostalCode.textContent = Object.values(UserObject)[4];

        let provinceLabel = document.createElement("h4");
        provinceLabel.textContent = "Provincia";
        let completeProvince = document.createElement("p");
        completeProvince.textContent = Object.values(UserObject)[5];

        let townLabel = document.createElement("h4");
        townLabel.textContent = "Municipio";
        let completeTown = document.createElement("p");
        completeTown.textContent = Object.values(UserObject)[6];

        div.appendChild(nameLabel);
        div.appendChild(completeName);
        div.appendChild(surnameLabel);
        div.appendChild(completeSurname);
        div.appendChild(dateLabel);
        div.appendChild(completeDate);
        div.appendChild(addressLabel);
        div.appendChild(completeAddress);
        div.appendChild(postalCodeLabel);
        div.appendChild(completePostalCode);
        div.appendChild(provinceLabel);
        div.appendChild(completeProvince);
        div.appendChild(townLabel);
        div.appendChild(completeTown);

        let cancelButton = document.createElement("button");

        cancelButton.id = "desagree";
        cancelButton.textContent = "Cancelar";
        div.appendChild(cancelButton);

        let acceptButton = document.createElement("button");
        acceptButton.id = "agree";
        acceptButton.textContent = "Aceptar";
        div.appendChild(acceptButton);


        let disagreeButton = document.getElementById("desagree")
        disagreeButton.addEventListener("click", function () {
            if (contadorPagina > 0) {
                contadorPagina -= 1;
                paginador(contadorPagina);
            }
        });

        let agreeButton = document.getElementById("agree")
        agreeButton.addEventListener("click", function () {
            paginas.push("finalPage")

                contadorPagina = 4;
            
            paginador(contadorPagina)
        });

    }

    finalPage = () =>{
        nextButton.removeAttribute("disabled");
        let contadorElementos = div.childElementCount;
        for (let index = 0; index < contadorElementos; index++) {
            div.removeChild(div.children[0]);
        }

        let titleText = document.createElement("h1");
        let contentText = document.createElement("p");
        titleText.textContent = "Felicidades!!!!";
        titleText.style.textAlign = "center";
        contentText.textContent = "Acabas de registrarte en nuestra web. gracias.";
        contentText.style.textAlign = "center";
        div.appendChild(titleText);
        div.appendChild(contentText);



        document.getElementById("back").style.display="none";
        let finish = document.getElementById("nextButton")
        finish.textContent="Terminar"
        finish.addEventListener("click", function () {
            location.href= callBack
        });

    }

    let showUserDataPage = false;
    paginador = (pagina) => {

        if (pagina == 0) {
            bienvenida();
        }

        else if (pagina == 1) {
            Formulario();
            errorName = false;
            errorSurname = false;
            errorDate = false;
            errorPostalCode = false;
            errorProvince = false;
            errorTown = false;
            allTrue = false;
            showUserDataPage = false
        }

        else if (pagina == 2 || pagina == 3) {
            if (!allTrue) {
                allTrue = ErrorCheck();
            }

            if (allTrue && !showUserDataPage) {
                showUserDataPage = true;
                paginas.push("showUserData");
                showUserData();
            }

        }

        else if (pagina == 4) {
            finalPage()


        }


    }


})
