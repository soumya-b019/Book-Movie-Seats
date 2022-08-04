
const container = document.querySelector('.container');
const item = document.querySelectorAll('div.item');

const count = document.getElementById("count");
const total = document.getElementById("total");

function updateCount(){
    const seatsSelected = document.querySelectorAll(".itemClicked");
    // console.log(seatsSelected);
    
    // const total = document.querySelectorAll(".item");
    // const totalseats = total.length;
    // console.log(totalseats);

    const totalSeatsCount = seatsSelected.length;
    // console.log(totalSeatsCount);

    count.innerText = totalSeatsCount;
    total.innerText = 36 - totalSeatsCount;
}

container.addEventListener("click", (e) => {
    // console.log(e.target);

    if(e.target.classList.contains('itemClicked')){
        e.target.classList.remove('itemClicked');
    }
    else{
        e.target.classList.add('itemClicked');
    }

    updateCount();
})

