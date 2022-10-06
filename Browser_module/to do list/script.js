let addBtn = document.querySelector(".add-btn");
let modalContainer = document.querySelector(".modal-cont");
let mainCont = document.querySelector(".main-cont");

let colors = ["lightpink", "lightgreen", "lightblue", "black"];
let modalPriorityColor = colors[colors.length - 1]; // black
let allPriorityColors = document.querySelectorAll(".priority-color");
let textAreaCont = document.querySelector(".textarea-cont");

let removeBtn = document.querySelector(".remove-btn");
let removeFlag = false;

let addFlag = false;

let ticketsArr = [];
let toolBoxColors = document.querySelectorAll(".color");
// //Filter tickets with respect to colors
for (let i = 0; i < toolBoxColors.length; i++) {
  toolBoxColors[i].addEventListener("click", function (e) {
    let currentToolBoxColor = toolBoxColors[i].classList[0];
    // console.log(currentToolBoxColor)

    let filteredTickets = ticketsArr.filter(function (ticketObj) {
      return currentToolBoxColor === ticketObj.ticketColor;
    });

    // remove previous Tickets
    let allTickets = document.querySelectorAll(".ticket-cont");

    for (let i = 0; i < allTickets.length; i++) {
      allTickets[i].remove();
    }

    // filtered tickets Di
    filteredTickets.forEach(function (filteredObj) {
      createTicket(
        filteredObj.ticketColor,
        filteredObj.textAreaValue,
        filteredObj.ticketi
      );
    });
  });
}

addBtn.addEventListener("click", function (e) {
  //Display Modal
  addFlag = !addFlag;
  if (addFlag == true) {
    modalContainer.style.display = "flex";
  } else {
    modalContainer.style.display = "none";
  }
});

// Changing Priority Color
allPriorityColors.forEach(function (colorEle) {
  colorEle.addEventListener("click", function (e) {
    allPriorityColors.forEach(function (priorityColorElem) {
      priorityColorElem.classList.remove("active");
    });
    colorEle.classList.add("active");
    modalPriorityColor = colorEle.classList[0];
  });
});

// Generating a ticket
modalContainer.addEventListener("keydown", function (e) {
  let key = e.key;
  if (key == "Enter") {
    createTicket(modalPriorityColor, textAreaCont.value);
    modalContainer.style.display = "none";
    addFlag = false;
    textAreaCont.value = "";
  }
});
function createTicket(ticketColor, textAreaValue, ticketid) {
  let id = ticketid || shortid();
  let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");
  ticketCont.innerHTML = `<div class="ticket-color ${ticketColor}"></div>
    <div class="ticket-id">#${ticketid}</div>
    <div class="task-area">${textAreaValue}</div>
    <div class="ticket-lock">
        <i class="fa-solid fa-lock"></i>
      </div>`;

  mainCont.appendChild(ticketCont);
  handleRemoval(ticketCont);
  handleLock(ticketCont);
  handleColor(ticketCont);

  if (!ticketid) {
    ticketsArr.push({ ticketColor, textAreaValue, ticketid: id });
  }
}

// Remove Button Work
removeBtn.addEventListener("click", function () {
  removeFlag = !removeFlag;
  if (removeFlag == true) {
    removeBtn.style = "font-size: 3rem";
  } else {
    removeBtn.style = "font-size: 2rem";
  }
});

function handleRemoval(ticket) {
  ticket.addEventListener("click", function () {
    if (removeFlag == true) {
      ticket.remove();
    }
  });
}

//Lock and Unlock Ticket

let lockClass = "fa-lock";
let unlockClass = "fa-lock-open";
function handleLock(ticket) {
  let ticketLockElem = ticket.querySelector(".ticket-lock");
  let ticketLock = ticketLockElem.children[0];

  let ticketTaskArea = ticket.querySelector(".task-area");

  ticketLock.addEventListener("click", function (e) {
    if (ticketLock.classList.contains(lockClass)) {
      ticketLock.classList.remove(lockClass);
      ticketLock.classList.add(unlockClass);
      ticketTaskArea.setAttribute("contenteditable", "true");
    } else {
      ticketLock.classList.remove(unlockClass);
      ticketLock.classList.add(lockClass);
      ticketTaskArea.setAttribute("contenteditable", "false");
    }
  });
}

// Handling color

function handleColor(ticket) {
  let ticketColorBand = ticket.querySelector(".ticket-color");

  ticketColorBand.addEventListener("click", function (e) {
    let currentTicketColor = ticketColorBand.classList[1];
    let currentTicketColoridx = colors.findIndex(function (color) {
      return currentTicketColor === color;
    });
    currentTicketColoridx++;
    let newTicketColoridx = currentTicketColoridx % colors.length;
    let newTicketColor = colors[newTicketColoridx];
    ticketColorBand.classList.remove(currentTicketColor);
    ticketColorBand.classList.add(newTicketColor);
  });
}
