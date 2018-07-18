function getfile(file,callback) {
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
    callback(xhr.responseText);
  }
};
xhr.send(null);
}
getfile("data.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  details(data.basics);
  career(data.careerobjective);
})
var child=document.querySelector(".child1");
function details(det) {
  var img = document.createElement("img");
  img.src = det.Image;
  child.appendChild(img);
  var name = document.createElement("h3");
  name.textContent = det.Name;
  child.appendChild(name);
  var number = document.createElement("h3");
  number.textContent = det.Phonenumber;
  child.appendChild(number);
  var mail = document.createElement("a");
  mail.href= "mailto:dronavajjhalayamini@gmail.com";
  mail.textContent = det.email;
  child.appendChild(mail);
  var heading = document.createElement("h3");
  heading.textContent = det.Text;
  child.appendChild(heading);
  var line = document.createElement("hr");
  child.appendChild(line);
  var address = document.createElement("h3");
  address.textContent = det.Adress;
  child.appendChild(address);
}
var childtwo=document.querySelector(".child2");
function career(car){
  var care = document.createElement("h2");
  care.textContent=car.head;
  childtwo.appendChild(care);
  var linec = document.createElement("hr");
  childtwo.appendChild(linec);
  var career = document.createElement("h3");
  career.textContent=car.info;
  childtwo.appendChild(career);

}
