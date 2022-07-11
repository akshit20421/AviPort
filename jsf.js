function nameUser(){
  var ele=document.querySelector(".heuu");
  var pro=prompt("Enter your Name");
  ele.textContent="Hii!! "+pro;
  if(pro==""){
    alert("ERROR");
  }
if(pro==null){
  alert("oh shit");
  ele.textContent="Hii!!";
}

  const onConfirmRefresh = function (event) {
    event.preventDefault();
    return event.returnValue = "Are you sure you want to leave the page?";
  }

  window.addEventListener("beforeunload", onConfirmRefresh);

}


setTimeout(nameUser,3000);
