$(document).on('click', '.reset', function () {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("country").value = "";
    document.getElementById("city").value = "";
    document.getElementById("datepicker").value = "";
    document.getElementsByClassName("form-check-input-style").value = "";
});

$.ajax({
    url: "json/index.json",
    data: "infoRegistObject",
    dataType: "json",
    success: function (data) {
        let tBody = document.getElementById("tables-tbody");

        for (let i in data.infoRegistObject) {


            let tr = document.createElement("tr");
            // tr.setAttribute("id",i);
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
            tdSevenButtonOne.setAttribute("data-toggle", "tab");
            tdSevenButtonOne.setAttribute("href", "#home");
            tdSevenButtonOne.setAttribute("onclick", "edit(" + (+i) + ")");
            tdSevenDiv.appendChild(tdSevenButtonOne);

            let editIcon = document.createElement("i");
            editIcon.setAttribute("class", "fa fa-pencil");
            editIcon.setAttribute("aria-hidden", "true");
            tdSevenButtonOne.appendChild(editIcon);

            let tdSevenButtonTwo = document.createElement("button");
            tdSevenButtonTwo.setAttribute("class", "btn btn-danger btn-delete row-remove");
            tdSevenDiv.appendChild(tdSevenButtonTwo);

            let deleteIcon = document.createElement("i");
            deleteIcon.setAttribute("class", "fa fa-trash");
            // deleteIcon.setAttribute("onclick","remove("+i+")");
            tdSevenButtonTwo.appendChild(deleteIcon);

        }
        $('.row-remove').click(function () {
            var result = confirm("Want to delete?");
            if (result === true) {
                $(this).closest('tr').remove();
            } else {
                alert("right choice")
            }
        });
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

var arr=[];

function edit(arg) {
    arr.push(dbInfoObj[arg].id);

    document.getElementById("firstName").value = dbInfoObj[arg].name;
    document.getElementById("lastName").value = dbInfoObj[arg].surname;
    document.getElementById("country").value = dbInfoObj[arg].country;
    document.getElementById("city").value = dbInfoObj[arg].city;
    document.getElementById("datepicker").value = dbInfoObj[arg].dateOfBirth;
    document.getElementsByClassName("form-check-input-style").value = dbInfoObj[arg].gender;

    $(".change-div").css("display", "block");
    // console.log(argumnets);
    // console.log(arr);
    // console.log(dbInfoObj);
}


function changeInfor(){

    dbInfoObj.arr[0].name =document.getElementById("firstName").value;
    dbInfoObj.arr[0].surname = document.getElementById("lastName").value;
    dbInfoObj.arr[0].country =document.getElementById("country").value;
    dbInfoObj.arr[0].city =document.getElementById("city").value ;
    dbInfoObj.arr[0].dateOfBirth =document.getElementById("datepicker").value ;
    dbInfoObj.arr[0].gender =document.getElementsByClassName("form-check-input-style").value ;
    console.log(arr[0]);
    $(".change-div").css("display", "none");
}


$(document).on('click', '.Registration', function () {

    $(".form-control").each(function () {

        if ($(this).val().trim() == '') {
            $(this).css('border-color', 'red');
        } else {
            $(this).css('border-color', '');
        }
    });

    if (document.getElementById("firstName").value === "" ||
        document.getElementById("lastName").value === "" ||
        document.getElementById("country").value === "" ||
        document.getElementById("city").value === "" ||
        document.getElementById("datepicker").value === "") {

    } else {
        let newObj = {
            "name": document.getElementById("firstName").value,
            "surname": document.getElementById("lastName").value,
            "country": document.getElementById("country").value,
            "city": document.getElementById("city").value,
            "dateOfBirth": document.getElementById("datepicker").value,
            "gender": document.getElementsByClassName("form-check-input-style").value,

        };

        dbInfoObj.push(newObj);

        let tbody = document.getElementById("tables-tbody");

        for (let i = 0; i < dbInfoObj.length; i++) {
            var obj = dbInfoObj[i];
        }

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
                   <button class="btn btn-danger btn-delete row-remove"><i class="fa fa-trash" aria-hidden="true"></i></button>
            </div>
    `;
        $('.row-remove').click(function () {
            var result = confirm("Want to delete?");
            if (result === true) {
                $(this).closest('tr').remove();
            } else {
                alert("right choice")
            }
        });
    }

});

$(".btn-edit").click(function(){
    // $("#nav-item-first-a").removeClass("nav-item");
    $("#nav-item-first-a").addClass("nav-item active");
});







