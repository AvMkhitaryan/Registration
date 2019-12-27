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
            tdSevenButtonTwo.appendChild(deleteIcon);

        }
        $('.row-remove').click(function () {
            var result = confirm("Want to delete?");
            if (result === true) {
                $(this).closest('tr').remove();
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
        "dateOfBirth": "1990-01-10",
        "gender": "male"
    },
    {
        "id": 1,
        "name": "Poghos",
        "surname": "Poghosyan",
        "country": "Armenia",
        "city": "Gyumri",
        "dateOfBirth": "1999-11-12",
        "gender": "male"
    },
    {
        "id": 2,
        "name": "John",
        "surname": "Doe",
        "country": "England",
        "city": "London",
        "dateOfBirth": "1995-01-10",
        "gender": "male"
    }

];
function edit(arg) {
    var varibl=arg;
    arr.push(varibl);
    document.getElementById("firstName").value = dbInfoObj[arg].name;
    document.getElementById("lastName").value = dbInfoObj[arg].surname;
    document.getElementById("country").value = dbInfoObj[arg].country;
    document.getElementById("city").value = dbInfoObj[arg].city;
    document.getElementById("datepicker").value = dbInfoObj[arg].dateOfBirth;
    $("input[name='optradio']:checked").val(dbInfoObj[arg].gender) ;

    $(".change-div").css("display", "block");
    $(".Registration").css("display", "none");
}

var arr=[];
function changeInfor(){
    var objVariele=arr.slice(-1)[0];
    dbInfoObj[objVariele].name =document.getElementById("firstName").value;
    dbInfoObj[objVariele].surname = document.getElementById("lastName").value;
    dbInfoObj[objVariele].country =document.getElementById("country").value;
    dbInfoObj[objVariele].city =document.getElementById("city").value ;
    dbInfoObj[objVariele].dateOfBirth =document.getElementById("datepicker").value ;
    dbInfoObj[objVariele].gender =$("input[name='optradio']:checked").val();
    console.log(dbInfoObj);
    console.log(objVariele);
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
            "gender": $("input[name='optradio']:checked").val(),
        };

        document.getElementById("nav-item-table").click();
        dbInfoObj.push(newObj);

        let tbody = document.getElementById("tables-tbody");
        var lengthElem=0;
        for (let i = 0; i < dbInfoObj.length; i++) {
            var obj = dbInfoObj[i];
            var lengthElem=dbInfoObj.length;

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
        tdSev.setAttribute("class","td-last-td");

        let tdSevDiv=document.createElement("div");
        tdSevDiv.setAttribute("class","d-flex");
        tdSev.appendChild(tdSevDiv);

        let tdSevDivButtonOne=document.createElement("button");
        tdSevDivButtonOne.setAttribute("class","btn btn-success btn-edit");
        tdSevDivButtonOne.setAttribute("onclick","edit("+(+lengthElem-1)+")");
        tdSevDiv.appendChild(tdSevDivButtonOne);

        let tdSevDivButtonOneIcon=document.createElement("i");
        tdSevDivButtonOneIcon.setAttribute("class","fa fa-pencil");
        tdSevDivButtonOneIcon.setAttribute("aria-hidden","true");
        tdSevDivButtonOne.appendChild(tdSevDivButtonOneIcon);

        let tdSevDivButtonTwo=document.createElement("button");
        tdSevDivButtonTwo.setAttribute("class","btn btn-danger btn-edit row-remove");
        tdSevDiv.appendChild(tdSevDivButtonTwo);

        let tdSevDivButtonTwoIcon=document.createElement("i");
        tdSevDivButtonTwoIcon.setAttribute("class","fa fa-trash");
        tdSevDivButtonTwoIcon.setAttribute("aria-hidden","true");
        tdSevDivButtonTwo.appendChild(tdSevDivButtonTwoIcon);

        $('.row-remove').click(function () {
            var result = confirm("Want to delete?");
            if (result === true) {
                $(this).closest('tr').remove();
            }
        });
    }
});