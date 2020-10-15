// Question 1 
const cat = {
    complain: function () {
        console.log("Meow!");
    }
};

// Question 2 
const heading = document.querySelector("h3");

heading.innerHTML = "Updated Heading";

// Question 3 
heading.style.fontSize ="2em";

// Question 4 
heading.innerHTML = `<div class="subheading">` + heading.innerHTML + `</div>`

// Question 5 
const paragraphs = document.querySelectorAll("p");

    for(let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = "red";
    }

// Question 6 

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";

// Question 7 

function list (list) {
    const cats = [
        {
            name: "Blob",
            age: 10
        },
        {
            name: "Harold",
        },
        {
            name: "Blurt",
            age: 21
        }
    ];
    var catLenght = this.cats.lenght;
    for(const i = 0; i < this.catLenght; i++) {
        const Name = cats[i].name;
        console.log(Name);
    }
}

// Question 8


let listCats = "";

function createCats (cats) {
    for (const i = 0; i < cats.lenght; i++);

    listCats = "" + listCats + "";
}
