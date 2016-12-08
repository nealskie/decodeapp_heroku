  "use strict";

  class App{
    constructor(){
      this.book = [
        {
          "id": 1,
          "name": "",
          "description": "",
          "image": "img/sample1.jpg",
          "author": "yuson",

        
        },
        {
          "id": 2,
          "name": "",
          "description": "",
          "image": "img/es6.jpg",
         
        },
        {
          "id": 3,
          "name": "",
          "description": "",
          "image": "img/internet.jpg",
        },
        {
          "id": 4,
          "name": "",
          "description": "",
          "image": "img/rich.jpg",
         
        },
        {
          "id": 5,
          "name": "",
          "description": "",
          "image": "img/john.jpg",
        },
        {

          "id": 6,
          "name": "",
          "description": "",
          "image": "img/sample2.jpg",
        },
        {

          "id": 7,
          "name": "",
          "description": "",
          "image": "img/sample3.jpg",
        },
         {

          "id": 8,
          "name": "",
          "description": "",
          "image": "img/mac.jpg",
        },
         {

          "id": 9,
          "name": "",
          "description": "",
          "image": "img/mob.jpg",
          "Author": "yuson",
        },
         
      ];
        


    
    }



    render(html, component){

      component.innerHTML += html;
    }

    reRender(html, component){

      component.innerHTML = html;
    }

    bookDesign(){
      let id = document.getElementById('kill');
      let name = document.getElementById('kill2');
      let description = document.getElementById('kill3');
      let image = document.getElementById('kill4');
    

      let book = {      
        "id": id.value,
        "name": name.value,
        "description": description.value,
        "image": image.value,
       
      };


      this.book.push(car);

      
      id.value = name.value = description.value = image.value = ''; 
    } 

    bookDelete(key){
      let r = this.book;
      for(let i=0;i<r.length;i++){
        if(r[i].id == key){
          this.book.splice(i,1);
          break;
        }
      }   
      this.bookList();
    }

    SearchBookById(id){
      let r = this.book;
      for(let i=0;i<r.length;i++){
        if(id==r[i].id){
          return r[i];
        }
      }
    } 

    SearchBook(name){
      let objects = [];
      let r = this.book;
      for(let i=0;i<r.length;i++){
        let expr = (r[i].name.toUpperCase().indexOf(name.toUpperCase()) > -1);
        if(expr){
          objects.push(r[i]);
        }
      }
      return objects;
    }
  }   


class Component extends App{
    constructor(){
      
      super();
    }


bookDesignLayout(){
      let html = `
       
  
          
           
           

     <nav>
      <div class="nav-wrapper  grey darken-4">
        <a href="#" onclick="component.bookList()" class="brand-logo"> &nbsp&nbsp&nbsp&nbsp Nealskie Library App </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
        <li><a href="#" onclick="component.Homepage()">HomePage</a></li>
      <li><a href="#" onclick="component.bookList()">List of Books</a></li>  
    <li><a href="#" onclick="component.latestBook()">Create Books</a></li>
    
        </ul>

       
      </div>
      </nav>


      <div class="slider">
    <ul class="slides">
      <li>
        <img src="img/collections.jpeg"> <!-- random image -->
        <div class="caption center-align">
          <h3>Welcome to Nealskie Library App</h3>
          <h5 class="light grey-text text-lighten-3">version (1.0)</h5>
         
        </div>
      </li>
      <li>
        <img src="img/cover.jpg"> <!-- random image -->
        <div class="caption center-align">
          <h3>Welcome to Nealskie Library App</h3>
          <h5 class="light grey-text text-lighten-3">version (1.0)</h5>
          
        </div>
      </li>
      <li>
        <img src="img/books.jpg"> <!-- random image -->
        <div class="caption center-align">
          <h3>Welcome to Nealskie Library App</h3>
          <h5 class="light grey-text text-lighten-3">version (1.0)</h5>
          
        </div>
      </li>
      <li>
        <img src="img/data.jpeg"> <!-- random image -->
        <div class="caption center-align">
          <h3>Welcome to Nealskie Library App</h3>
          <h5 class="light grey-text text-lighten-3">version (1.0)</h5>
          
        </div>
      </li>
    </ul>
  </div>

      

    
        


  </div>


          <div id="Homepage"></div>
          <div id="bookRecent"></div>
          <div id="viewBook"></div>
          <div id="bookList"></div>
          <div id="latestBook"></div>
          
          
                    <footer class="page-footer  grey darken-4">
            <div class="container">
              <div class="row">
     
                  
                           

                </div>
                
                <div class="col l4 offset-l2 s12 ">
                  <h5 class="white-text ">Nealskie Library  App</h5>
                 
                  <ul>
                    <li><a href="#" onclick="component.Homepage()">HomePage</a></li>
                    <li><a href="#" onclick="component.bookList()">List of Books</a></li>  
                    <li><a href="#" onclick="component.latestBook()">Create Books</a></li>
                   
                    </center>
                  
                      
                  </ul>
                  </div>
                 
             
              
              </div>
            </div>
      <center>
     <div clas
               <ul>@Nealskie Library App</ul>
               <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
        <li><a href="#" onclick="component.Homepage()">HomePage</a></li>
      <li><a href="#" onclick="component.bookList()">List of Books</a></li>  
    <li><a href="#" onclick="component.latestBook()">Create Books</a></li>
    
        </ul>
              </center>  
              </div>
            </div>
            
          </footer>

      `;

      this.reRender(`
        ${html}

        `,document.getElementById("app"));
      this.bookRecent();    
    }

   

    viewBook(id){
      let r = this.SearchBookById(id);

      let html = `


   



        <h5 class="center-align">${r.name}</h5>
        <div class="row">       
          <div class="col s12 m12">
            <div class="card horizontal small">
              <div class="card-image">
                <img src="${r.image}">
              </div>
              <div class="card-stacked">
                <div class="card-content">
                  <p>${r.description}</p>
                </div>
              <div class="card-action small">               
                  <span onclick="component.bookDelete(${r.id})" class="new badge small red" data-badge-caption="">Delete Base</span>
                 <span onclick="component.bookList()" class="new badge small" data-badge-caption="">Back to List</span>
                </div>            
              </div>     
            </div>   
            
          </div>      
        </div>
      `;

      this.reRender(`   
        ${html}     
        `,document.getElementById("viewBook"));
      $('#viewBook').show();
      $('#bookRecent').hide();
      $('#bookList').hide();
      $('#latestBook').hide();

        $('#Homepage').hide();
    }

    bookList(){
      let html = `




        <br/>
          <nav>
            <div class="nav-wrapper white">
            <form>
              <div class="input-field">       
                <input onkeyup="component.bookItems(this.value)" id="search" type="search" placeholder="Search" required>
                <label for="search"><i class="material-icons">search</i></label>
                <i class="material-icons">close</i>
              </div>
            </form>
          </div>
        </nav>
        <br/>

      `;

      html += `
        <div class="row" id="bookItems">
      `;
      let r = this.book;
      for(let i=0;i<r.length;i++){
        html+= `
          <div class="col s12 m4">
            <div class="card small hoverable">
              <div class="card-image">
                <img src="${r[i].image}">
                <span class="card-title">${r[i].name}</span>
              </div>
              <div class="card-content">
                <p>${r[i].description}</p>
              </div>
              <div class="card-action">
                <a href="#" onclick="component.viewBook(${r[i].id})">More Details</a>
              </div>
            </div>
          </div>
        `;
      }

      html += `</div>`;

      this.reRender(`
        ${html}
        `,document.getElementById("bookList"));
      $('#bookList').show();
      $('#viewBook').hide();
      $('#bookRecent').hide();
      $('#latestBook').hide();    
           $('#Homepage').hide();
    }

    bookItems(name){
      let html = ``;
      let r = this.SearchBook(name);
      for(let i=0;i<r.length;i++){
        html+= `
          <div class="col s12 m4">
            <div class="card small hoverable">
              <div class="card-image">
                <img src="${r[i].image}">
                <span class="card-title">${r[i].name}</span>
              </div>
              <div class="card-content">
                <p>${r[i].description}</p>
              </div>
              <div class="card-action">
                <a href="#" onclick="component.viewBook(${r[i].id})">More</a>
              </div>
            </div>
          </div>
        `;
      }   
      this.reRender(`
        ${html}
        `,document.getElementById("bookItems"));
      $('#bookList').show();
      $('#viewBook').hide();
      $('#bookRecent').hide();  
      $('#latestBook').hide();
          $('#Homepage').hide();    
    }


    bookRecent(){
      
      let html = `

      
        
    
         
       

          

           

       

      
               <div class="row">
      `;

      let r = this.book;
      let count = 0;
      for(let i=(r.length-1);i>=0;i--){
        if(count++ === 6)break;
        html+= `
          <div class="col s12 m4">
            <div class="card small hoverable">
              <div class="card-image">
                <img src="${r[i].image}">
                <span class="card-title">${r[i].name}</span>
              </div>
              <div class="card-content">
                <p>${r[i].description}</p>
              </div>
              <div class="card-action">
                <a href="#" onclick="component.viewBook(${r[i].id})">More Details</a>
              </div>
            </div>
          </div>
        `;
      }

      html += `</div>`;

      this.render(`   
        ${html}
        `,document.getElementById("bookRecent"));
    }

    latestBook(){
      let html = `

     
       
            
         <div class="row">
              <div class="input-field col s6 ">
                <input disabled value="${this.book.length+1}" id="kill" type="text"class=" vintage" >
              </div>
                <div class="row">
            <div class="input-field col s6 ">
                <input id="kill2" type="text" class=" vintage">
                <label for="kill2">Enter Book Name</label>
              </div>
            </div>
            
            <div class="row">
              <div class="input-field col s6 ">
                <input id="kill3" type="text" class="deep-white lighten-1">
               <label for="kill3">Enter Book Details</label>
              </div>

            <div class="row">
              <div class="input-field col s6 ">
                <input id="kill4" type="text" class="deep-white lighten-1">
                <label for="kill4"> Enter Link Address Pictures</label>
              </div>
          <div align="center">
         <button onclick="component.bookList()" class="btn waves-effect waves-light">Back</button>
        
               <button onclick="component.bookDesign()" class="btn waves-effect waves-light">Save</button>
           </div>
       
           
          
        

      `;

      this.reRender(`
        ${html}
        `,document.getElementById("latestBook"));
      $('#latestBook').show();
      $('#bookList').hide();
      $('#viewBook').hide();
      $('#bookRecent').hide(); 
      $('#Homepage').hide();    
    }




  Homepage(){
    let html=`



    `;
     this.reRender(`
        ${html}
        `,document.getElementById("latestBook"));
      $('#latestBook').hide();
      $('#bookList').hide();
      $('#viewCar').hide();
      $('#bookRecent').show();  
      $('#Homepage').hide();  

  }


  } 
  let component = new Component();
  component.bookDesignLayout();