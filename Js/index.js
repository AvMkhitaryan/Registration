$.ajax({
    url: "json/index.json",
    data: "infoRegistObject",
    dataType: "json",
    success: function (data) {
        let tBody = document.getElementById("tables-tbody");

        for (let i in data.infoRegistObject) {

            let tr = document.createElement("tr");
            tBody.appendChild(tr);

            let tdOne = document.createElement("td");
            tdOne.innerHTML = data.infoRegistObject[i].name;
            tr.appendChild(tdOne);

            let tdTwo = document.createElement("td");
            tdTwo.innerHTML = data.infoRegistObject[i].surname;
            tr.appendChild(tdTwo);

            let tdThree = document.createElement("td");
            tdThree.innerHTML = data.infoRegistObject[i].country;
            tr.appendChild(tdThree);

            let tdFore = document.createElement("td");
            tdFore.innerHTML = data.infoRegistObject[i].city;
            tr.appendChild(tdFore);

            let tdFive = document.createElement("td");
            tdFive.innerHTML = data.infoRegistObject[i].dateOfBirth;
            tr.appendChild(tdFive);

            let tdSix = document.createElement("td");
            tdSix.innerHTML = data.infoRegistObject[i].gender;
            tr.appendChild(tdSix);

            let tdSeven = document.createElement("td");
            tdSeven.setAttribute("class", "tbody-last-td");
            tr.appendChild(tdSeven);

            let tdSevenDiv = document.createElement("div");
            tdSevenDiv.setAttribute("class", "d-flex");
            tdSeven.appendChild(tdSevenDiv);

            let tdSevenButtonOne = document.createElement("button");
            tdSevenButtonOne.setAttribute("class", "btn btn-success btn-edit");
            tdSevenDiv.appendChild(tdSevenButtonOne);

            let editIcon = document.createElement("i");
            editIcon.setAttribute("class", "fa fa-pencil");
            editIcon.setAttribute("aria-hidden", "true");
            tdSevenButtonOne.appendChild(editIcon);

            let tdSevenButtonTwo = document.createElement("button");
            tdSevenButtonTwo.setAttribute("class", "btn btn-danger btn-delete");
            tdSevenDiv.appendChild(tdSevenButtonTwo);

            let deleteIcon = document.createElement("i");
            deleteIcon.setAttribute("class", "fa fa-trash");
            deleteIcon.setAttribute("aria-hidden", "true");
            tdSevenButtonTwo.appendChild(deleteIcon);

        }
    }, error: function (error) {
        console.log(error)
    }
});

let dbInfoObj = [
    {
        "id": 0,
        "name": "John",
        "surname": "Smith",
        "country": "USA",
        "city": "New York",
        "dateOfBirth": "01/10/1990",
        "gender": "male"
    },
    {
        "id": 1,
        "name": "Poghos",
        "surname": "Poghosyan",
        "country": "Armenia",
        "city": "Gyumri",
        "dateOfBirth": "12/11/1999",
        "gender": "male"
    },
    {
        "id": 2,
        "name": "John",
        "surname": "Doe",
        "country": "England",
        "city": "London",
        "dateOfBirth": "01/10/1995",
        "gender": "male"
    }

];

$(document).on('click', '#registButtonId', function () {
    let newObj = {
        "name": document.getElementById("firstName").value,
        "surname": document.getElementById("lastName").value,
        "country": document.getElementById("country").value,
        "city": document.getElementById("city").value,
        "dateOfBirth": document.getElementById("datepicker").value,
        "gender": document.getElementsByClassName("form-check-input-style").value,

    };

    dbInfoObj.push(newObj);
    console.log(dbInfoObj);

    let tbody = document.getElementById("tables-tbody");

    for (let i = 0; i < dbInfoObj.length; i++) {
        var obj = dbInfoObj[i];
    }

    console.log(dbInfoObj.length);
    let th = tbody.insertRow(3);

    let tdOne = th.insertCell(0);
    tdOne.innerHTML = obj.name;

    let tdTwo = th.insertCell(1);
    tdTwo.innerHTML = obj.surname;

    let tdThree = th.insertCell(2);
    tdThree.innerHTML = obj.country;

    let tdFore = th.insertCell(3);
    tdFore.innerHTML = obj.city;

    let tdFive = th.insertCell(4);
    tdFive.innerHTML = obj.dateOfBirth;

    let tdSix = th.insertCell(5);
    tdSix.innerHTML = obj.gender;

    let tdSev = th.insertCell(6);
    tdSev.innerHTML = `
            <div class="d-flex">
                               <button class="btn btn-success"><i class="fa fa-pencil" aria-hidden="true"></i> </button>
                                  <button class="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i></button>
                               </div>
    `
});

$(document).on('click', '.btn-edit', function () {

    let name = $("#firstName").val();
    let surname = $("#lastName").val();
    let country = $("#country").val();
    let city = $("#city").val();
    let dateOfBirth = $("#datepicker").val();
    let gender = $(".form-check-input-style").val();
});



