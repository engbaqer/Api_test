// let get_div_name_section=document.getElementsByClassName("name_section")[0]
// let get_div_info_section=document.getElementsByClassName("info_section")[0]
var p2 = document.createElement("p");
// get name from json apis_placeholder && put id for any elemnt to easy make eny functinalte in this
function getName_from_json() {
  let request = new XMLHttpRequest();
  request.open("get", "https://jsonplaceholder.typicode.com/users");
  request.responseType = "json";
  request.onload = function () {
    let post = request.response;
    post.map((e)=> {
      let contant = `
       <p onclick="usercklic(${e.id})" >
       ${e.name}
       </p>
        `;
      document.getElementsByClassName("name_section")[0].innerHTML += contant;

      // console.log(e.name)
      // var p=document.createElement("p")
      // p.textContent=`${e.name}`
      // p.id = e.id;
      // get_div_name_section.appendChild(p);

      // p.addEventListener("click",
      // function(){
      //     console.log(p.id);
      //     p2.textContent=`${e.body}`;
      //     get_div_info_section.appendChild(p2);
      // }  )
    })
  };
  request.send();
}
getName_from_json();
function get_post(id) {
  let request = new XMLHttpRequest();
  request.open(
    "get",
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  console.log(id);
  request.responseType = "json";
  request.onload = function () {
    document.getElementsByClassName("info_section")[0].innerHTML = "";
    let post = request.response;
   post.map((e) => {
    
    
      let contant = `
           <div class="posts">
           <h3>
           ${e.title}
           </h3>
           <p>${e.body}</p>
           </div>
            `
            ;
      document.getElementsByClassName("info_section")[0].innerHTML += contant;
    
  });}
  request.send();
}
get_post(1);
function usercklic(id) {
  get_post(id);
}

// function show_info_in_page(indix){
//
// }
