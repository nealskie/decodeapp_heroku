  "use strict";

  class App{
    constructor(){
      this.car = [
        {
          "id": 1,
          "name": "",
          "description": "Name: FORD RANGER 4x4,Body Type:Pick-Up, Tranamission Type:Manual, Model Year: 2017, Fuel: Diesel, Price: ₱ 1,199,000",
          "image": "img/rich.jpg",
        
        },
        {
          "id": 2,
          "name": "",
          "description": "Name: TOYOTA HILUX 4x4, Body Type:Pick-Up, Tranamission Type: Manual, Model Year: 2015,Fuel: Diesel, Price:₱ 1,555,000",
          "image": "img/mob.jpg",
         
        },
        {
          "id": 3,
          "name": "",
          "description": "Name: Mitsubishi Strada 4x4, Body Type:Pick-Up, Tranamission Type: Manual, Model Year: 2017, Fuel: Diesel, Price:₱ 1,500,000",
          "image": "img/john.jpg",
        },
        {
          "id": 4,
          "name": "",
          "description": "Name; Ford Everest AmbienteT, Body Type:SUV, Tranamission Type: Manual, Model Year: 2015, Fuel: Diesel, Price: ₱ 1,339,000",
          "image": "img/sample1.jpg",
         
        },
        {
          "id": 5,
          "name": "",
          "description": "Name: Toyota Fortuner, Body Type:SUV, Tranamission Type: Manual, Model Year: 2016, Fuel: Diesel, Price: ₱ 1,386,000",
          "image": "img/sample2.jpg",
        },
        {

          "id": 6,
          "name": "",
          "description": "Name: Nissan Navara, Body Type:Pick-Up, Tranamission Type: Manual, Model Year: 2015, Fuel: Diesel, Price: ₱ 941,000",
          "image": "img/internet.jpg",
        },
        {

          "id": 7,
          "name": "",
          "description": "Name: FOTON Thunder 4x4 2016, Body Type:Pick-Up, Tranamission Type: Manual, Model Year: 2014, Fuel: Diesel, Price: ₱ 1,118,000",
          "image": "img/es6.jpg",
        },
         {

          "id": 8,
          "name": "",
          "description": "Name: Honda Civic 1.5 RS Turbo Modulo Sport 2016, Body Type:Sedan, Tranamission Type: CVT, Model Year: 2014, Fuel: Gasoline, Price: ₱ 1,515,000",
          "image": "img/sample3.jpg",
        },
         {

          "id": 9,
          "name": "",
          "description": "Name: Chevrolet Cruze 1.8 LT AT Body Type:Sedan, Tranamission Type: Automatic, Model Year: 2014, Fuel: Gasoline, Price: ₱ 1,103,888",
          "image": "img/rich.jpg",
        },
         {

          "id": 10,
          "name": "",
          "description": "Name: Hyundai Elantra 2.0 GLS AT, Body Type:Sedan, Tranamission Type: Automatic, Model Year: 2016, Fuel: Gasoline, Price: ₱ 1,158,000",
          "image": "img/es6.jpg",
        },
        {

          "id": 11,
          "name": "",
          "description": "Name: Subaru Forester 2.0i-Premium, Body Type:SUV, Tranamission Type: CVT, Model Year: 2016, Fuel: Gasoline, Price:   ₱ 1,648,000",
          "image": "img/john.jpg",
        },
        {

          "id": 12,
          "name": "",
          "description": "Name: Ford Ranger Wildtrak 3.2L 4X4 AT, Body Type:Pick-Up, Tranamission Type: Automatic, Model Year: 2015, Fuel: Gasoline, Price: ₱ 1,709,000",
          "image": "img/rich.jpg",
        },
      ];
        


    
    }



    render(html, component){

      component.innerHTML += html;
    }

    reRender(html, component){

      component.innerHTML = html;
    }

    carDesign(){
      let id = document.getElementById('kill');
      let name = document.getElementById('kill2');
      let description = document.getElementById('kill3');
      let image = document.getElementById('kill4');
    

      let car = {      
        "id": id.value,
        "name": name.value,
        "description": description.value,
        "image": image.value,
       
      };


      this.car.push(car);

      
      id.value = name.value = description.value = image.value = ''; 
    } 

    carDelete(key){
      let r = this.car;
      for(let i=0;i<r.length;i++){
        if(r[i].id == key){
          this.car.splice(i,1);
          break;
        }
      }   
      this.carList();
    }

    SearchCarById(id){
      let r = this.car;
      for(let i=0;i<r.length;i++){
        if(id==r[i].id){
          return r[i];
        }
      }
    } 

    SearchCar(name){
      let objects = [];
      let r = this.car;
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

    carDesignLayout(){
      let html = `
       
 
          
           
           

     <nav>
      <div class="nav-wrapper grey darken-4">
        <a href="#" onclick="component.carList()" class="brand-logo"> &nbsp&nbsp&nbsp&nbsp Nealskie Library App </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
        <li><a href="#" onclick="component.Homepage()">HomePage</a></li>
      <li><a href="#" onclick="component.carList()">BookList</a></li>  
    <li><a href="#" onclick="component.latestCar()">SaleCar</a></li>
    
        </ul>


       
      </div>
      </nav>
               <div class="carousel carousel-slider">
      <a class="carousel-item" href="#one!"><img src="img/cover.jpg"></a>
      <a class="carousel-item" href="#two!"><img src="img/cover.jpg"></a>
      <a class="carousel-item" href="#three!"><img src="img/data.jpg"></a>
      <a class="carousel-item" href="#four!"><img src="img/4.jpg"></a>
    </div>
    <br>


  </div>


           <div id="Homepage"></div>
          <div id="carRecent"></div>
          <div id="viewCar"></div>
          <div id="carList"></div>
          <div id="latestCar"></div>
          
         
                    <footer class="page-footer  grey darken-4">
            <div class="container">
              <div class="row">
     
                  
                           

                </div>
                <center>
                <div class="col l4 offset-l2 s12 ">
                  <h5 class="white-text ">Car App</h5>
                 
                  <ul>
                    <li><a class="grey-text text-lighten-3" href="https://www.ford.com.ph"onclick="component.Homepage()">Ford</li>
                    <li><a class="grey-text text-lighten-3" href="http://toyotadavao.com.ph"onclick="component.latestCar()">Toyota</li>
                    <li><a class="grey-text text-lighten-3" href="http://www.isuzu.com/"onclick="component.carList()"">Isuzu</li>
                    <li><a class="grey-text text-lighten-3" href="http://mmpc.ph/"onclick="component.carList()"">Mitsubishi</li>
                     <li><a class="grey-text text-lighten-3" href="https://www.autodeal.com.ph"onclick="component.carList()"">More</li>
                    </center>
                  
                      
                  </ul>
                  </div>
                 
             
              
              </div>
            </div>
    
     <div class="footer-copyright">
              <center>
               <ul>@Binobo Man Power And Tracking Services</ul>
              </center>  
              </div>
            </div>
            
          </footer>

      `;

      this.reRender(`
        ${html}

        `,document.getElementById("app"));
      this.carRecent();    
    }

   

    viewCar(id){
      let r = this.SearchCarById(id);

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
                  <span onclick="component.carDelete(${r.id})" class="new badge small red" data-badge-caption="">Delete Base</span>
                 <span onclick="component.carList()" class="new badge small" data-badge-caption="">Back to List</span>
                </div>            
              </div>     
            </div>   
            
          </div>      
        </div>
      `;

      this.reRender(`   
        ${html}     
        `,document.getElementById("viewCar"));
      $('#viewCar').show();
      $('#carRecent').hide();
      $('#carList').hide();
      $('#latestCar').hide();

        $('#Homepage').hide();
    }

    carList(){
      let html = `




        <br/>
          <nav>
            <div class="nav-wrapper white">
            <form>
              <div class="input-field">       
                <input onkeyup="component.carItems(this.value)" id="search" type="search" placeholder="Search" required>
                <label for="search"><i class="material-icons">search</i></label>
                <i class="material-icons">close</i>
              </div>
            </form>
          </div>
        </nav>
        <br/>

      `;

      html += `
        <div class="row" id="carItems">
      `;
      let r = this.car;
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
                <a href="#" onclick="component.viewCar(${r[i].id})">More Details</a>
              </div>
            </div>
          </div>
        `;
      }

      html += `</div>`;

      this.reRender(`
        ${html}
        `,document.getElementById("carList"));
      $('#carList').show();
      $('#viewCar').hide();
      $('#carRecent').hide();
      $('#latestCar').hide();    
           $('#Homepage').hide();
    }

    carItems(name){
      let html = ``;
      let r = this.SearchCar(name);
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
                <a href="#" onclick="component.viewCar(${r[i].id})">More</a>
              </div>
            </div>
          </div>
        `;
      }   
      this.reRender(`
        ${html}
        `,document.getElementById("carItems"));
      $('#carList').show();
      $('#viewCar').hide();
      $('#carRecent').hide();  
      $('#latestCar').hide();
          $('#Homepage').hide();    
    }


    carRecent(){
      
      let html = `

      
        
    
         
       

          

           

       

      
               <div class="row">
      `;

      let r = this.car;
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
                <a href="#" onclick="component.viewCar(${r[i].id})">More Details</a>
              </div>
            </div>
          </div>
        `;
      }

      html += `</div>`;

      this.render(`   
        ${html}
        `,document.getElementById("carRecent"));
    }

    latestCar(){
      let html = `

     
       
            
         <div class="row">
              <div class="input-field col s6 ">
                <input disabled value="${this.car.length+1}" id="kill" type="text"class=" vintage" >
              </div>
                <div class="row">
            <div class="input-field col s6 ">
                <input id="kill2" type="text" class=" vintage">
                <label for="kill2">Enter Brand Name</label>
              </div>
            </div>
            
            <div class="row">
              <div class="input-field col s6 ">
                <input id="kill3" type="text" class="deep-white lighten-1">
               <label for="kill3">Enter Car Details</label>
              </div>

            <div class="row">
              <div class="input-field col s6 ">
                <input id="kill4" type="text" class="deep-white lighten-1">
                <label for="kill4"> Enter Link Address Pictures</label>
              </div>
          <div align="center">
         <button onclick="component.carList()" class="btn waves-effect waves-light">Back</button>
        
               <button onclick="component.carDesign()" class="btn waves-effect waves-light">Save</button>
           </div>
       
           
          
        

      `;

      this.reRender(`
        ${html}
        `,document.getElementById("latestCar"));
      $('#latestCar').show();
      $('#carList').hide();
      $('#viewCar').hide();
      $('#carRecent').hide(); 
      $('#Homepage').hide();    
    }




  Homepage(){
    let html=`



    `;
     this.reRender(`
        ${html}
        `,document.getElementById("latestCar"));
      $('#latestCar').hide();
      $('#carList').hide();
      $('#viewCar').hide();
      $('#carRecent').show();  
      $('#Homepage').hide();  

  }


  } 
  let component = new Component();
  component.carDesignLayout();