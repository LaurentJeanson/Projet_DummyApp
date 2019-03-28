var app = new Vue({
    el: '#appAjout',
    data: {
          nbSection: [
       
          ],
          nbNav: [
       
          ],
          nbPied: [
       
          ],
          seenNavCou: false,
          seenSecCou: false,
          seenPiedCou:false,
          
          seenNavSupp: false,
          seenPiedSupp:false,

          seenNavTaille: false,
          seenSecTaille: false,
          seenPiedTaille:false,

          seenNavDiv: false,
          seenSecDiv: false,
          seenPiedDiv:false,

          TitrePro : 'Mon Projet',
          seenTitrePro: false,
          seenLi : true
    },
    methods: {

     //ICI SE TROUVE LES AJOUTS
     ajoutNav : function(){
          //Suppréssion du tutoriel
          var elemTuto = document.getElementById("sectionTuto");
          var elemaucunElem = document.getElementById("aucunElem");
          if(elemTuto != null){
               elemTuto. parentNode.removeChild(elemTuto);
               elemaucunElem.parentNode.removeChild(aucunElem);
          }
          
          //Création de la section
          i = this.nbNav.length;
          var Nav = document.createElement("NAV");
          Nav.setAttribute("id", "navigateur" + i);
          Nav.setAttribute("data-numero", "nav" + i);
          var t = document.createTextNode("Navigateur " + i);
          Nav.appendChild(t);

          document.body.appendChild(Nav);
          this.seenNavDiv = true;
          this.seenNavCou = true;
          this.seenNavSupp = true;
          this.seenNavTaille = true;
          this.nbNav.push({
                id:Nav.id,
                titre: Nav.id,
                "data-numero": Nav.id
           });
     },
     ajoutSec : function(){
          //Suppréssion du tutoriel
          var elemTuto = document.getElementById("sectionTuto");
          var elemaucunElem = document.getElementById("aucunElem");
          if(elemTuto != null){
               elemaucunElem.parentNode.removeChild(aucunElem);
               elemTuto. parentNode.removeChild(elemTuto);
          }

          //Création de la section
          i = this.nbSection.length;
          var Section = document.createElement("SECTION");
          Section.setAttribute("id", "lesSections" + i);
          var t = document.createTextNode("Section " + i);
          Section.appendChild(t);
          
          document.body.appendChild(Section);
          this.seenSecDiv = true;
          this.seenSecCou = true;
          this.seenSecSupp = true;
          this.seenSecTaille = true;
          this.nbSection.push({
              id:Section.id,
              titre: Section.id,
              "data-numero": Section.id
          });
          

     },
     ajoutPied : function(){
          //Suppréssion du tutoriel
          var elemTuto = document.getElementById("sectionTuto");
          var elemaucunElem = document.getElementById("aucunElem");
          if(elemTuto != null){
               elemaucunElem.parentNode.removeChild(aucunElem);
               elemTuto. parentNode.removeChild(elemTuto);
          }

         //Création de la section
         i = this.nbPied.length;
         var Foot = document.createElement("FOOTER");
         Foot.setAttribute("id", "lesfooters" + i);
         var t = document.createTextNode("Pied de page " + i);
         Foot.appendChild(t);

          document.body.appendChild(Foot);
          this.seenPiedDiv = true;
          this.seenPiedCou = true;
          this.seenPiedSupp = true;
          this.seenPiedTaille = true;
          this.nbPied.push({
            id:Foot.id,
            titre: Foot.id,
            "data-numero": Foot.id
        });
     },

     //ICI SE TROUVE LES FONCTIONS QUI SUPPRIMENT
     suppNav : function(e){
          var elemNav = document.querySelectorAll('nav');
          console.log(elemNav);
          for(var i = 0; i < this.nbNav.length; i++){
            console.log(this.nbNav[i].titre);      
            if(this.nbNav[i].titre == e.target.innerHTML){
                this.nbNav.splice(i,1);
                elemNav[i].parentNode.removeChild(elemNav[i]);
            }
          }
     },
     suppSec : function(e){
          var elemSec = document.querySelectorAll("section");
          console.log(elemSec);
          for(var i = 0; i < this.nbSection.length; i++){
            console.log(this.nbSection[i].titre);      
            if(this.nbSection[i].titre == e.target.innerHTML){
                this.nbSection.splice(i,1);
                elemSec[i].parentNode.removeChild(elemSec[i]);
            }
          }
  
     },
     suppFoot : function(e){
          var elemFoot = document.querySelectorAll('footer');
          console.log(elemFoot);
          for(var i = 0; i < this.nbPied.length; i++){
            console.log(this.nbPied[i].titre);      
            if(this.nbPied[i].titre == e.target.innerHTML){
                this.nbPied.splice(i,1);
                elemFoot[i].parentNode.removeChild(elemFoot[i]);
            }
          }
     },

     //ICI SE TROUVE LES TAILLES
     TailleNav : function(e){
          var elemNav = document.querySelectorAll('nav');
          for(var i = 0; i < this.nbNav.length; i++){   
            if(this.nbNav[i].titre == e.target.getAttribute('data-numero')){
                elemNav[i].style.height = e.target.value + "px";
            }
          }  
        },
     TailleSec : function(e){
          var elemSec = document.querySelectorAll('section');
          for(var i = 0; i < this.nbSection.length; i++){   
            if(this.nbSection[i].titre == e.target.getAttribute('data-numero')){
                elemSec[i].style.height = e.target.value + "px";
            }
          }  
        },
     TaillePied : function(e){
          var elemPied = document.querySelectorAll('footer');
          for(var i = 0; i < this.nbPied.length; i++){   
            if(this.nbPied[i].titre == e.target.getAttribute('data-numero')){
               elemPied[i].style.height = e.target.value + "px";
            }
          } 
     },

     //ICI SE TROUVE LES COULEURS
     coulNav : function(e){ 
          var elemNav = document.querySelectorAll('nav');
          for(var i = 0; i < this.nbNav.length; i++){   
            if(this.nbNav[i].titre == e.target.getAttribute('data-numero')){   
                elemNav[i].style.backgroundColor = e.target.value;
            }
          } 
     },
     coulSec : function(e){
          var elemSec = document.querySelectorAll('section');
          for(var i = 0; i < this.nbSection.length; i++){   
            if(this.nbSection[i].titre == e.target.getAttribute('data-numero')){   
               elemSec[i].style.backgroundColor = e.target.value;
            }
          } 
     },
     coulPied : function(e){
          var elemFoot = document.querySelectorAll('footer');
          for(var i = 0; i < this.nbPied.length; i++){   
            if(this.nbPied[i].titre == e.target.getAttribute('data-numero')){   
               elemFoot[i].style.backgroundColor = e.target.value;
            }
          } 
     },
     coulFond : function(){
          document.style.backgroundColor = document.getElementById("coulFondBout").value;
     },
     DivNav : function(e){
          var elemNav = document.querySelectorAll('nav');
          var nbDivNav = [];  

          for(var i = 0; i < this.nbNav.length; i++){   
            if(this.nbNav[i].titre == e.target.getAttribute('data-numero')){   
                
                var divRow = document.createElement("DIV");
                divRow.setAttribute("class", "row");
                for(var event = 0; event < e.target.value; event++){
                    i = this.nbNav.length;
                    var divCol = document.createElement("DIV");
                    divCol.setAttribute("class", "col-sm");
                    var Nav = document.createElement("NAV");
                    Nav.setAttribute("id", "navigateur" + i);
                    Nav.setAttribute("data-numero", "nav" + i);
                    var t = document.createTextNode("Navigateur " + i);
                    Nav.appendChild(t);
                    divCol.appendChild(Nav);
                    //divRow.appendChild(divCol);
                    this.nbNav.push({
                         id:Nav.id,
                         titre: Nav.id,
                         "data-numero": Nav.id
                    });
                    nbDivNav.push(divCol);
                    divRow.appendChild(divCol);
                    document.body.appendChild(divRow);
                    
                }
                this.seenNavDiv = true;
                this.seenNavCou = true;
                this.seenNavSupp = true;
                this.seenNavTaille = true;
            }
          } 
     },
     DivSec : function(e){
          var elemSec = document.querySelectorAll('section');
          var nbDivSec = [];
          for(var i = 0; i < this.nbSection.length; i++){   
            if(this.nbSection[i].titre == e.target.getAttribute('data-numero')){   
                //this.nbNav.splice(i,1);
                //elemNav[i].parentNode.removeChild(elemNav[i]);
                //elemNav[i].style.backgroundColor = e.target.value;
                //Création de la section
                var divRow = document.createElement("DIV");
                divRow.setAttribute("class", "row");
                for(var event = 0; event < e.target.value; event++){
                    i = this.nbSection.length;
                    var divCol = document.createElement("DIV");
                    divCol.setAttribute("class", "col-sm");
                    var Sec = document.createElement("SECTION");
                    Sec.setAttribute("id", "section" + i);
                    Sec.setAttribute("data-numero", "section" + i);
                    var t = document.createTextNode("Section " + i);
                    Sec.appendChild(t);
                    divCol.appendChild(Sec);
                    //divRow.appendChild(divCol);
                    this.nbSection.push({
                         id:Sec.id,
                         titre: Sec.id,
                         "data-numero": Sec.id
                    });
                    nbDivSec.push(divCol);
                    divRow.appendChild(divCol);
                    document.body.appendChild(divRow);
                    
                }
            }
          } 
     },
     DivPied : function(e){
          var elemPied = document.querySelectorAll('footer');
          var nbDivPied = [];
          for(var i = 0; i < this.nbPied.length; i++){   
            if(this.nbPied[i].titre == e.target.getAttribute('data-numero')){   
                //this.nbNav.splice(i,1);
                //elemNav[i].parentNode.removeChild(elemNav[i]);
                //elemNav[i].style.backgroundColor = e.target.value;
                //Création de la section
                var divRow = document.createElement("DIV");
                divRow.setAttribute("class", "row");
                for(var event = 0; event < e.target.value; event++){
                    i = this.nbPied.length;
                    var divCol = document.createElement("DIV");
                    divCol.setAttribute("class", "col-sm");
                    var Foot = document.createElement("FOOTER");
                    Foot.setAttribute("id", "footer" + i);
                    Foot.setAttribute("data-numero", "footer" + i);
                    var t = document.createTextNode("Pied de page " + i);
                    Foot.appendChild(t);
                    divCol.appendChild(Foot);
                    //divRow.appendChild(divCol);
                    this.nbPied.push({
                         id:Foot.id,
                         titre: Foot.id,
                         "data-numero": Foot.id
                    });
                    nbDivPied.push(divCol);
                    divRow.appendChild(divCol);
                    document.body.appendChild(divRow);
                    
                }
            }
          } 
     },
     inputNomF : function(){
           this.seenTitrePro = true;
           this.seenLi = false;
     },
     buttonValider : function(){
           this.seenTitrePro = false;
           this.seenLi = true;
     }
    },
  })