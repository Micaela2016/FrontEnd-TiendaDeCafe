function openModal1() {
  const modal = document.getElementById("modal1");
  modal.classList.add("active");
}

function closeModal1() {
  const modal = document.getElementById("modal1");
  modal.classList.remove("active");
}

function openModal2() {
  const modal = document.getElementById("modal2");
  modal.classList.add("active");
}

function closeModal2() {
  const modal = document.getElementById("modal2");
  modal.classList.remove("active");
}

function openModal3() {
  const modal = document.getElementById("modal3");
  modal.classList.add("active");
}

function closeModal3() {
  const modal = document.getElementById("modal3");
  modal.classList.remove("active");
}

function siguiente1() {
  closeModal1();
  openModal2();
}

function siguiente2() {
  closeModal2();
  openModal3();
}

function siguiente3() {
  closeModal3();
  openModal1();
}

function atras1() {
  closeModal1();
  openModal3();
}

function atras2() {
  closeModal2();
  openModal1();
}

function atras3() {
  closeModal3();
  openModal2();
}
