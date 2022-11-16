/* if(document.getElementById("name").value.length == 0){
    alert("empty");
}
 */

(function validateForm() {
  var name = document.getElementById("name");

  if (name.value == "" || name.value == null) {
    name.classList.add("animate__animated animate__shakeX");
  }

  validateForm();
});
