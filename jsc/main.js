//E = ESPECIFICA; C = COMPARTIDA; G = GENERAL

let materiasind = [
    {
        "id": "analisis2",
        "hijo": ["analisis1"],
        "cat": "G"
    },
    {
        "id": "analisis1",
        "hijo": [],
        "cat": "G"
    },
    {
        "id": "gal1",
        "hijo": [],
        "cat": "G"
    },
    {
        "id": "fisica1",
        "hijo": [],
        "cat": "G"
    },
    {
        "id": "intRob",
        "hijo": [],
        "cat": "G"
    },
    {
        "id": "intIng",
        "hijo": [],
        "cat": "G"
    },
    {
        "id": "gal2",
        "hijo": ["gal1"],
        "cat": "G"
    },
    {
        "id": "fisica2",
        "hijo": [],
        "cat": "C"
    },
    {
        "id": "matlab",
        "hijo": [],
        "cat": "C"
    },
    {
        "id": "funQui",
        "hijo": [],
        "cat": "C"
    },
    {
        "id": "caluclo",
        "hijo": ["analisis2", "gal2"],
        "cat": "G"
    },
    {
        "id": "analisis3",
        "hijo": ["analisis2", "gal2"],
        "cat": "C"
    },
    {
        "id": "mecanica1",
        "hijo": ["fisica1", "analisis1"],
        "cat": "C"
    },
    {
        "id": "cad",
        "hijo": [],
        "cat": "C"
    },
    {
        "id": "labInd",
        "hijo": [],
        "cat": "E"
    },
    {
        "id": "ch1",
        "hijo": [],
        "cat": "G"
    },
    {
        "id": "prob",
        "hijo": ["analisis2"],
        "cat": "G"
    },
    {
        "id": "mecanica2",
        "hijo": ["mecanica1"],
        "cat": "C"
    },
    {
        "id": "termodinamica",
        "hijo": ["analisis1"],
        "cat": "E"
    },
    {
        "id": "resMat",
        "hijo": ["mecanica1"],
        "cat": "C"
    },
    {
        "id": "ayudaTecnica",
        "hijo": ["cad"],
        "cat": "E"
    },
    {
        "id": "eco",
        "hijo": [],
        "cat": "G"
    },
    {
        "id": "comProf",
        "hijo": [],
        "cat": "G"
    },
    {
        "id": "ivestOper",
        "hijo": ["prob"],
        "cat": "G"
    },
    {
        "id": "electroMag",
        "hijo": ["fisica2", "analisis3"],
        "cat": "C"
    },
    {
        "id": "pasantia1",
        "hijo": [],
        "cat": "G"
    },
    {
        "id": "resMat2",
        "hijo": ["resMat"],
        "cat": "C"
    },
    {
        "id": "ceinIngMat",
        "hijo": ["funQui"],
        "cat": "C"
    },
    {
        "id": "labInd2",
        "hijo": ["labInd"],
        "cat": "E"
    },
    {
        "id": "contYcost",
        "hijo": [],
        "cat": "G"
    },
    {
        "id": "ivestOper2",
        "hijo": ["ivestOper"],
        "cat": "C"
    },
    {
        "id": "Electrotecnia1",
        "hijo": ["electroMag"],
        "cat": "C"
    },
    {
        "id": "mecFludis",
        "hijo": ["analisis3", "pasantia1", "termodinamica"],
        "cat": "E"
    },
    {
        "id": "Metalurgia",
        "hijo": ["ceinIngMat"],
        "cat": "E"

    },
    {
        "id": "teologia",
        "hijo": [],
        "cat": "G"
    },

    {
        "id": "gestCal",
        "hijo": [],
        "cat": "G"
    },
    {
        "id": "operProd1",
        "hijo": ["ivestOper"],
        "cat": "E"
    },
    {
        "id": "Electrotecnia2",
        "hijo": ["Electrotecnia1"],
        "cat": "E"
    },
    {
        "id": "pasantia2",
        "hijo": [],
        "cat": "G"
    },
    {
        "id": "transfCalor",
        "hijo": ["termodinamica"],
        "cat": "E"
    },
    {
        "id": "ingAmbiental",
        "hijo": [],
        "cat": "C"
    },
    {
        "id": "maq1",
        "hijo": ["mecFludis", "mecanica2"],
        "cat": "E"

    },

    {
        "id": "maq2",
        "hijo": ["pasantia2", "transfCalor"],
        "cat": "E"
    },
    {
        "id": "Electronica",
        "hijo": ["electroMag"],
        "cat": "C"
    },
    {
        "id": "prosUnitarios",
        "hijo": ["funQui"],
        "cat": "E"
    },
    {
        "id": "labInd3",
        "hijo": ["labInd2"],
        "cat": "E"
    },
    {
        "id": "ch2",
        "hijo": [],
        "cat": "G"
    },
    {
        "id": "autoControlIndustrial",
        "hijo": ["Electronica"],
        "cat": "E"
    },
    {
        "id": "diseElementMaquinas",
        "hijo": ["resMat2"],
        "cat": "E"
    },
    {
        "id": "pasantia3",
        "hijo": [],
        "cat": "G"
    },
    {
        "id": "maq3",
        "hijo": ["maq2"],
        "cat": "E"
    },
    {
        "id": "proyInven",
        "hijo": ["contYcost"],
        "cat": "G"
    },

    {
        "id": "proyInd",
        "hijo": ["Electrotecnia2", "maq3"],
        "cat": "E"
    },
    {
        "id": "elemGestion",
        "hijo": ["eco"],
        "cat": "G"

    },
    {
        "id": "gestiProy",
        "hijo": ["proyInven"],
        "cat": "G"
    },
    {
        "id": "etica",
        "hijo": ["ch1"],
        "cat": "G"
    }
    
];

let materiasinf=[
    {
        "id": "analisis2",
        "hijo": ["analisis1"],
        "cat": "G"
    },
    {
        "id": "analisis1",
        "hijo": [],
        "cat": "G"
    },
    {
        "id": "gal1",
        "hijo": [],
        "cat": "G"
    },
    {
        "id": "fisica1",
        "hijo": [],
        "cat": "G"
    },
    {
        "id": "intRob",
        "hijo": [],
        "cat": "G"
    },
    {
        "id": "intIng",
        "hijo": [],
        "cat": "G"
    },
    {
        "id": "gal2",
        "hijo": ["gal1"],
        "cat": "G"
    },
    {
        "id": "logica",
        "hijo": [],
        "cat": "E"
    },
    {
        "id": "sisdig1",
        "hijo": [],
        "cat": "C"
    },
    {
        "id": "prog1",
        "hijo": [],
        "cat": "C"
    },
    {
        "id": "caluclo",
        "hijo": ["analisis2", "gal2"],
        "cat": "G"
    },
    {
        "id": "matdis",
        "hijo": ["analisis1", "gal1"],
        "cat": "E"
    },
    {
        "id": "prog2",
        "hijo": ["prog1"],
        "cat": "C"
    },
    {
        "id": "bbdd",
        "hijo": ["prog1"],
        "cat": "C"
    },
    {
        "id": "sisdig2",
        "hijo": ["sisdig1"],
        "cat": "C"
    },
    {
        "id": "ch1",
        "hijo": [],
        "cat": "G"
    },
    {
        "id": "prob",
        "hijo": ["analisis2"],
        "cat": "G"
    },
    {
        "id": "analgo",
        "hijo": ["prog2"],
        "cat": "E"
    },
    {
        "id": "bbdd2",
        "hijo": ["bbdd1"],
        "cat": "C"
    },
    {
        "id": "tic1",
        "hijo": ["prog2"],
        "cat": "C"
    },
    {
        "id": "eco",
        "hijo": [],
        "cat": "G"
    },
    {
        "id": "comProf",
        "hijo": [],
        "cat": "G"
    },
    {
        "id": "ivestOper",
        "hijo": ["prob"],
        "cat": "G"
    },
    {
        "id": "arqapp",
        "hijo": [],
        "cat": "E"
    },
    {
        "id": "pasantia1",
        "hijo": [],
        "cat": "G"
    },
    {
        "id": "sisop",
        "hijo": ["sisdig2"],
        "cat": "C"
    },
    {
        "id": "tic2",
        "hijo": [""],
        "cat": "C"
    },
    {
        "id": "contYcost",
        "hijo": [],
        "cat": "G"
    },
    {
        "id": "teoComp",
        "hijo": ["matdis"],
        "cat": "E"
    },
    {
        "id": "ivestOper2",
        "hijo": ["ivestOper"],
        "cat": "C"
    },
    {
        "id": "ingsoft",
        "hijo": ["tic1"],
        "cat": "C"
    },
    {
        "id": "redes1",
        "hijo": ["sisdig2", "pasantia1"],
        "cat": "E"
    },
    {
        "id": "tic3",
        "hijo": [""],
        "cat": "E"
    },
    {
        "id": "teologia",
        "hijo": [],
        "cat": "G"
    },
    {
        "id": "gestCal",
        "hijo": [],
        "cat": "G"
    },
    {
        "id": "ingsoft2",
        "hijo": ["ingsoft"],
        "cat": "E"
    },
    {
        "id": "infrainfo",
        "hijo": ["redes1"],
        "cat": "E"
    },
    {
        "id": "sisdis",
        "hijo": ["redes1"],
        "cat": "C"
    },
    {
        "id": "pasantia2",
        "hijo": [],
        "cat": "G"
    },

    {
        "id": "tic4",
        "hijo": [],
        "cat": "C"
    },
    {
        "id": "derechotel",
        "hijo": [],
        "cat": "E"

    },

    {
        "id": "metoinv",
        "hijo": [],
        "cat": "E"
    },
    {
        "id": "tic5",
        "hijo": [],
        "cat": "C"
    },
    {
        "id": "ch2",
        "hijo": [],
        "cat": "G"
    },
    {
        "id": "audicontrol",
        "hijo": ["ingsoft"],
        "cat": "E"
    },
    {
        "id": "intelnegocios",
        "hijo": ["bbdd2"],
        "cat": "E"
    },
    {
        "id": "pasantia3",
        "hijo": [],
        "cat": "G"
    },
    {
        "id": "tic6",
        "hijo": [],
        "cat": "C"
    },
    {
        "id": "proyInven",
        "hijo": ["contYcost"],
        "cat": "G"
    },

    {
        "id": "proyInf",
        "hijo": ["analgo", "redes1","ingsoft"],
        "cat": "E"
    },
    {
        "id": "elemGestion",
        "hijo": ["eco"],
        "cat": "G"

    },
    {
        "id": "gestiProy",
        "hijo": ["proyInven"],
        "cat": "G"
    },
    {
        "id": "etica",
        "hijo": ["ch1"],
        "cat": "G"
    }
];

htmlid= document.getElementsByTagName("html")[0].id;
var materias
if(htmlid=="Informatica"){
 materias= materiasinf;
}
else if(htmlid =="Industrial"){
materias = materiasind;
}
//let materias = [{"id": "analisis2", "hijo": ["analisis1"]}];
const mouseTarget = document.getElementsByClassName("btn");

var staticbool=true;

console.log(mouseTarget.length);

function filtro(id){
    var a;
    if (id=="filtroE") {
        a="E";
    }
    else if(id=="filtroG"){
        a="G"
    }
    else if(id=="filtroC"){
        a="C"
    }
    for (i=0; i<materias.length; i++){
        console.log(i);
        console.log(materias[i].id);

        if(staticbool){
        if (materias[i].cat=="E" && materias[i].cat==a){
            document.getElementById(materias[i].id).style.backgroundColor="rgba(0,200,0,0.5)";
            document.getElementById(materias[i].id).style.boxShadow = "0px 0px 0px 0.2rem rgba(033,231,0,0.5)";
            console.log("verde");
        }
        else if (materias[i].cat=="G" && materias[i].cat==a){
            document.getElementById(materias[i].id).style.backgroundColor="rgba(23,162,184,0.5)";
            document.getElementById(materias[i].id).style.boxShadow = "0px 0px 0px 0.2rem rgba(58,176,195,0.5)";
        console.log("azul");
        }
        else if (materias[i].cat=="C" && materias[i].cat==a){
            document.getElementById(materias[i].id).style.backgroundColor="rgba(255,190,7,0.5)";
            document.getElementById(materias[i].id).style.boxShadow = "0px 0px 0px 0.2rem rgba(255,231,130,0.5)";
            console.log("amarillo");
        }
        console.log("estoyaca")
        }
        else if (!staticbool) {
            document.getElementById(materias[i].id).style.backgroundColor = "#f8f9fa";
            document.getElementById(materias[i].id).style.boxShadow = "0px 0px 0px 0.0rem rgba(216,217,219,0.5)";
            
        }
      
    } 
      staticbool=!staticbool;
  
}

function pintar(idpadre) {
if(staticbool){
    for (i = 0; i < materias.length; i++) {

        if (materias[i].id === idpadre) {

            for (j = 0; j < materias[i].hijo.length; j++) {
                document.getElementById(idpadre).style.backgroundColor ="#e2e6ea"
                if (materias[i].hijo[j] !== null) {
                    console.log("pinta");
                    document.getElementById(materias[i].hijo[j]).style.backgroundColor = "rgba(255,99,71,0.5)";
                    document.getElementById(materias[i].hijo[j]).style.boxShadow = "0px 0px 0px 0.2rem rgba(220,20,60,0.5)";
                }
            }
        }
    }
}
}
function despintar(idpadre) {
if (staticbool) {
    for (i = 0; i < materias.length; i++) {
        if (materias[i].id === idpadre)
            for (j = 0; j < materias[i].hijo.length; j++) {
                document.getElementById(idpadre).style.backgroundColor ="#f8f9fa"
                if (materias[i].hijo[j] !== null){
                    console.log("despinta");
                    document.getElementById(materias[i].id).style.backgroundColor = "#f8f9fa";
                    document.getElementById(materias[i].id).style.boxShadow = "0px 0px 0px 0.0rem rgba(216,217,219,0.5)";
                    document.getElementById(materias[i].hijo[j]).style.backgroundColor = "#f8f9fa";
                    document.getElementById(materias[i].hijo[j]).style.boxShadow = "0px 0px 0px 0.0rem rgba(216,217,219,0.5)";
                }
            }
    }
}
}

function setValue(value) {
    document.getElementById('value').value = value;
}

/*function informar(idtemp) {
    var i, l, options = [{
            value: 'first',
            text: 'First'
        }, {
            value: 'second',
            text: 'Second'
        }],
        newWindow = window.open("", null, "height=200,width=400,status=yes,toolbar=no,menubar=no,location=no");

    newWindow.document.write("<select onchange='window.opener.setValue(this.value);'>");
    for(i=0,l=options.length; i<l; i++) {
        newWindow.document.write("<option value='"+options[i].value+"'>");
        newWindow.document.write(options[i].text);
        newWindow.document.write("</option>");
    }
    newWindow.document.write("</select>");
}*/
function informar(idpadre) {
if (idpadre != "cets"){
		
    for (i = 0; i < materias.length; i++) {

        if (materias[i].id === idpadre) {
        	var btnAbrirPopup = document.getElementById('idpadre'),
        	overlay = document.getElementById('overlay'),
        	popup = document.getElementById('popup'),
        	btnCerrarPopup = document.getElementById('btn-cerrar-popup');
        	overlay.classList.add('active');
        	popup.classList.add('active');

        }	

    }
}
if (idpadre == "cets") {
			var btnAbrirPopup = document.getElementById('idpadre'),
        	overlay = document.getElementById('overlay'),
        	popup = document.getElementById('popup'),
        	btnCerrarPopup = document.getElementById('btn-cerrar-popup');
        	overlay.classList.add('active');

}
}
function cerrar(){

	overlay.classList.remove("active");
	popup.classList.remove("active")	

}

function cets(){
      
            overlay2 = document.getElementById('overlay2'),
            popup2 = document.getElementById('popup2'),
            btnCerrarPopup = document.getElementById('btn-cerrar-popup');
            overlay2.classList.add('active');
            popup2.classList.add('active');


}
function cerrar2(){

    overlay2.classList.remove("active"); 
    popup2.classList.remove("active")

}
/*btnCerrarPopup.addEventListener('click',function()){
	overlay.classList.remove('active');
}*/



/*
function loop(){
  addEventListener("mousenter",function (event) {
    pintar( event.getSource().id)},false);


  addEventListener("mouseleave",function (event) {

    despintar( document.event.getcSource().id)},false);
  for (i = 0; i < materias.length; i++) {
    console.log("sale")
    if (materias[i].id === idpadre) {
      document.getElementById(materias[i].hijo).style.backgroundColor = "rgba(248,249,250,1)";
      document.getElementById(materias[i].hijo).style.boxShadow = "0px 0px 0px 0.0rem rgba(216,217,219,0.5)";
    }
  }
}
loop()

*/

idPadre = null;

//0
mouseTarget[0].addEventListener("mouseenter", e => {
    pintar(mouseTarget[0].id);
});
mouseTarget[0].addEventListener("mouseleave", e => {
    despintar(mouseTarget[0].id);
});
mouseTarget[0].addEventListener("click", event => {
    informar(mouseTarget[0].id);
});
//1
mouseTarget[1].addEventListener("mouseenter", e => {
    pintar(mouseTarget[1].id);
});
mouseTarget[1].addEventListener("mouseleave", e => {
    despintar(mouseTarget[1].id);
});
mouseTarget[1].addEventListener("click", event => {
    informar(mouseTarget[1].id);
});
//6
mouseTarget[6].addEventListener("mouseenter", e => {
    pintar(mouseTarget[6].id);
});
mouseTarget[6].addEventListener("mouseleave", e => {
    despintar(mouseTarget[6].id);
});
mouseTarget[6].addEventListener("click", event => {
    informar(mouseTarget[6].id);
});
//5
mouseTarget[5].addEventListener("mouseenter", e => {
    pintar(mouseTarget[5].id);
});
mouseTarget[5].addEventListener("mouseleave", e => {
    despintar(mouseTarget[5].id);
});
mouseTarget[5].addEventListener("click", event => {
    informar(mouseTarget[5].id);
});
//4
mouseTarget[4].addEventListener("mouseenter", e => {
    pintar(mouseTarget[4].id);
});
mouseTarget[4].addEventListener("mouseleave", e => {
    despintar(mouseTarget[4].id);
});
mouseTarget[4].addEventListener("click", event => {
    informar(mouseTarget[4].id);
});
//2
    mouseTarget[2].addEventListener("mouseenter", e => {
        pintar(mouseTarget[2].id);
    });
    mouseTarget[2].addEventListener("mouseleave", e => {
        despintar(mouseTarget[2].id);
    });
    mouseTarget[2].addEventListener("click", event => {
        informar(mouseTarget[2].id);
    });
//3
    mouseTarget[3].addEventListener("mouseenter", e => {
        pintar(mouseTarget[3].id);
    });
    mouseTarget[3].addEventListener("mouseleave", e => {
        despintar(mouseTarget[3].id);
    });
    mouseTarget[3].addEventListener("click", event => {
        informar(mouseTarget[3].id);
    });
//7
mouseTarget[7].addEventListener("mouseenter", e => {
    pintar(mouseTarget[7].id);
});
mouseTarget[7].addEventListener("mouseleave", e => {
    despintar(mouseTarget[7].id);
});
mouseTarget[7].addEventListener("click", event => {
    informar(mouseTarget[7].id);
});
//8
mouseTarget[8].addEventListener("mouseenter", e => {
    pintar(mouseTarget[8].id);
});
mouseTarget[8].addEventListener("mouseleave", e => {
    despintar(mouseTarget[8].id);
});
mouseTarget[8].addEventListener("click", event => {
    informar(mouseTarget[8].id);
});
//9
mouseTarget[9].addEventListener("mouseenter", e => {
    pintar(mouseTarget[9].id);
});
mouseTarget[9].addEventListener("mouseleave", e => {
    despintar(mouseTarget[9].id);
});
mouseTarget[9].addEventListener("click", event => {
    informar(mouseTarget[9].id);
});
//10
mouseTarget[10].addEventListener("mouseenter", e => {
    pintar(mouseTarget[10].id);
});
mouseTarget[10].addEventListener("mouseleave", e => {
    despintar(mouseTarget[10].id);
});
mouseTarget[10].addEventListener("click", event => {
    informar(mouseTarget[10].id);
});
//11
mouseTarget[11].addEventListener("mouseenter", e => {
    pintar(mouseTarget[11].id);
});
mouseTarget[11].addEventListener("mouseleave", e => {
    despintar(mouseTarget[11].id);
});
mouseTarget[11].addEventListener("click", event => {
    informar(mouseTarget[11].id);
});
//12
mouseTarget[12].addEventListener("mouseenter", e => {
    pintar(mouseTarget[12].id);
});
mouseTarget[12].addEventListener("mouseleave", e => {
    despintar(mouseTarget[12].id);
});
mouseTarget[12].addEventListener("click", event => {
    informar(mouseTarget[12].id);
});
//13
mouseTarget[13].addEventListener("mouseenter", e => {
    pintar(mouseTarget[13].id);
});
mouseTarget[13].addEventListener("mouseleave", e => {
    despintar(mouseTarget[13].id);
});
mouseTarget[13].addEventListener("click", event => {
    informar(mouseTarget[13].id);
});
//14
mouseTarget[14].addEventListener("mouseenter", e => {
    pintar(mouseTarget[14].id);
});
mouseTarget[14].addEventListener("mouseleave", e => {
    despintar(mouseTarget[14].id);
});
mouseTarget[14].addEventListener("click", event => {
    informar(mouseTarget[14].id);
});
//15
mouseTarget[15].addEventListener("mouseenter", e => {
    pintar(mouseTarget[15].id);
});
mouseTarget[15].addEventListener("mouseleave", e => {
    despintar(mouseTarget[15].id);
});
mouseTarget[15].addEventListener("click", event => {
    informar(mouseTarget[15].id);
});
//16
mouseTarget[16].addEventListener("mouseenter", e => {
    pintar(mouseTarget[16].id);
});
mouseTarget[16].addEventListener("mouseleave", e => {
    despintar(mouseTarget[16].id);
});
mouseTarget[16].addEventListener("click", event => {
    informar(mouseTarget[16].id);
});
//17
mouseTarget[17].addEventListener("mouseenter", e => {
    pintar(mouseTarget[17].id);
});
mouseTarget[17].addEventListener("mouseleave", e => {
    despintar(mouseTarget[17].id);
});
mouseTarget[17].addEventListener("click", event => {
    informar(mouseTarget[17].id);
});
//18
mouseTarget[18].addEventListener("mouseenter", e => {
    pintar(mouseTarget[18].id);
});
mouseTarget[18].addEventListener("mouseleave", e => {
    despintar(mouseTarget[18].id);
});
mouseTarget[18].addEventListener("click", event => {
    informar(mouseTarget[18].id);
});
//19
mouseTarget[19].addEventListener("mouseenter", e => {
    pintar(mouseTarget[19].id);
});
mouseTarget[19].addEventListener("mouseleave", e => {
    despintar(mouseTarget[19].id);
});
mouseTarget[19].addEventListener("click", event => {
    informar(mouseTarget[19].id);
});
//20
mouseTarget[20].addEventListener("mouseenter", e => {
    pintar(mouseTarget[20].id);
});
mouseTarget[20].addEventListener("mouseleave", e => {
    despintar(mouseTarget[20].id);
});
mouseTarget[20].addEventListener("click", event => {
    informar(mouseTarget[20].id);
});
//21
mouseTarget[21].addEventListener("mouseenter", e => {
    pintar(mouseTarget[21].id);
});
mouseTarget[21].addEventListener("mouseleave", e => {
    despintar(mouseTarget[21].id);
});
mouseTarget[21].addEventListener("click", event => {
    informar(mouseTarget[21].id);
});
//22
mouseTarget[22].addEventListener("mouseenter", e => {
    pintar(mouseTarget[22].id);
});
mouseTarget[22].addEventListener("mouseleave", e => {
    despintar(mouseTarget[22].id);
});
mouseTarget[22].addEventListener("click", event => {
    informar(mouseTarget[22].id);
});
//23
mouseTarget[23].addEventListener("mouseenter", e => {
    pintar(mouseTarget[23].id);
});
mouseTarget[23].addEventListener("mouseleave", e => {
    despintar(mouseTarget[23].id);
});
mouseTarget[23].addEventListener("click", event => {
    informar(mouseTarget[23].id);
});
//24
mouseTarget[24].addEventListener("mouseenter", e => {
    pintar(mouseTarget[24].id);
});
mouseTarget[24].addEventListener("mouseleave", e => {
    despintar(mouseTarget[24].id);
});
mouseTarget[24].addEventListener("click", event => {
    informar(mouseTarget[24].id);
});
//25
mouseTarget[25].addEventListener("mouseenter", e => {
    pintar(mouseTarget[25].id);
});
mouseTarget[25].addEventListener("mouseleave", e => {
    despintar(mouseTarget[25].id);
});
mouseTarget[25].addEventListener("click", event => {
    informar(mouseTarget[25].id);
});
//26
mouseTarget[26].addEventListener("mouseenter", e => {
    pintar(mouseTarget[26].id);
});
mouseTarget[26].addEventListener("mouseleave", e => {
    despintar(mouseTarget[26].id);
});
mouseTarget[26].addEventListener("click", event => {
    informar(mouseTarget[26].id);
});
//27
mouseTarget[27].addEventListener("mouseenter", e => {
    pintar(mouseTarget[27].id);
});
mouseTarget[27].addEventListener("mouseleave", e => {
    despintar(mouseTarget[27].id);
});
mouseTarget[27].addEventListener("click", event => {
    informar(mouseTarget[27].id);
});
//28
mouseTarget[28].addEventListener("mouseenter", e => {
    pintar(mouseTarget[28].id);
});
mouseTarget[28].addEventListener("mouseleave", e => {
    despintar(mouseTarget[28].id);
});
mouseTarget[28].addEventListener("click", event => {
    informar(mouseTarget[28].id);
});
//29
mouseTarget[29].addEventListener("mouseenter", e => {
    pintar(mouseTarget[29].id);
});
mouseTarget[29].addEventListener("mouseleave", e => {
    despintar(mouseTarget[29].id);
});
mouseTarget[29].addEventListener("click", event => {
    informar(mouseTarget[29].id);
});
//30
mouseTarget[30].addEventListener("mouseenter", e => {
    pintar(mouseTarget[30].id);
});
mouseTarget[30].addEventListener("mouseleave", e => {
    despintar(mouseTarget[30].id);
});
mouseTarget[30].addEventListener("click", event => {
    informar(mouseTarget[30].id);
});
//31
mouseTarget[31].addEventListener("mouseenter", e => {
    pintar(mouseTarget[31].id);
});
mouseTarget[31].addEventListener("mouseleave", e => {
    despintar(mouseTarget[31].id);
});
mouseTarget[31].addEventListener("click", event => {
    informar(mouseTarget[31].id);
});
//32
mouseTarget[32].addEventListener("mouseenter", e => {
    pintar(mouseTarget[32].id);
});
mouseTarget[32].addEventListener("mouseleave", e => {
    despintar(mouseTarget[32].id);
});
mouseTarget[32].addEventListener("click", event => {
    informar(mouseTarget[32].id);
});
//33
mouseTarget[33].addEventListener("mouseenter", e => {
    pintar(mouseTarget[33].id);
});
mouseTarget[33].addEventListener("mouseleave", e => {
    despintar(mouseTarget[33].id);
});
mouseTarget[33].addEventListener("click", event => {
    informar(mouseTarget[33].id);
});
//34
mouseTarget[34].addEventListener("mouseenter", e => {
    pintar(mouseTarget[34].id);
});
mouseTarget[34].addEventListener("mouseleave", e => {
    despintar(mouseTarget[34].id);
});
mouseTarget[34].addEventListener("click", event => {
    informar(mouseTarget[34].id);
});
//35
mouseTarget[35].addEventListener("mouseenter", e => {
    pintar(mouseTarget[35].id);
});
mouseTarget[35].addEventListener("mouseleave", e => {
    despintar(mouseTarget[35].id);
});
mouseTarget[35].addEventListener("click", event => {
    informar(mouseTarget[35].id);
});
//36
mouseTarget[36].addEventListener("mouseenter", e => {
    pintar(mouseTarget[36].id);
});
mouseTarget[36].addEventListener("mouseleave", e => {
    despintar(mouseTarget[36].id);
});
mouseTarget[36].addEventListener("click", event => {
    informar(mouseTarget[36].id);
});
//37
mouseTarget[37].addEventListener("mouseenter", e => {
    pintar(mouseTarget[37].id);
});
mouseTarget[37].addEventListener("mouseleave", e => {
    despintar(mouseTarget[37].id);
});
mouseTarget[37].addEventListener("click", event => {
    informar(mouseTarget[37].id);
});
//38
mouseTarget[38].addEventListener("mouseenter", e => {
    pintar(mouseTarget[38].id);
});
mouseTarget[38].addEventListener("mouseleave", e => {
    despintar(mouseTarget[38].id);
});
mouseTarget[38].addEventListener("click", event => {
    informar(mouseTarget[38].id);
});
//39
mouseTarget[39].addEventListener("mouseenter", e => {
    pintar(mouseTarget[39].id);
});
mouseTarget[39].addEventListener("mouseleave", e => {
    despintar(mouseTarget[39].id);
});
mouseTarget[39].addEventListener("click", event => {
    informar(mouseTarget[39].id);
});
//40
mouseTarget[40].addEventListener("mouseenter", e => {
    pintar(mouseTarget[40].id);
});
mouseTarget[40].addEventListener("mouseleave", e => {
    despintar(mouseTarget[40].id);
});
mouseTarget[40].addEventListener("click", event => {
    informar(mouseTarget[40].id);
});
//41
mouseTarget[41].addEventListener("mouseenter", e => {
    pintar(mouseTarget[41].id);
});
mouseTarget[41].addEventListener("mouseleave", e => {
    despintar(mouseTarget[41].id);
});
mouseTarget[41].addEventListener("click", event => {
    informar(mouseTarget[41].id);
});
//42
mouseTarget[42].addEventListener("mouseenter", e => {
    pintar(mouseTarget[42].id);
});
mouseTarget[42].addEventListener("mouseleave", e => {
    despintar(mouseTarget[42].id);
});
mouseTarget[42].addEventListener("click", event => {
    informar(mouseTarget[42].id);
});
//43
mouseTarget[43].addEventListener("mouseenter", e => {
    pintar(mouseTarget[43].id);
});
mouseTarget[43].addEventListener("mouseleave", e => {
    despintar(mouseTarget[43].id);
});
mouseTarget[43].addEventListener("click", event => {
    informar(mouseTarget[43].id);
});
//44
mouseTarget[44].addEventListener("mouseenter", e => {
    pintar(mouseTarget[44].id);
});
mouseTarget[44].addEventListener("mouseleave", e => {
    despintar(mouseTarget[44].id);
});
mouseTarget[44].addEventListener("click", event => {
    informar(mouseTarget[44].id);
});
//45
mouseTarget[45].addEventListener("mouseenter", e => {
    pintar(mouseTarget[45].id);
});
mouseTarget[45].addEventListener("mouseleave", e => {
    despintar(mouseTarget[45].id);
});
mouseTarget[45].addEventListener("click", event => {
    informar(mouseTarget[45].id);
});
//46
mouseTarget[46].addEventListener("mouseenter", e => {
    pintar(mouseTarget[46].id);
});
mouseTarget[46].addEventListener("mouseleave", e => {
    despintar(mouseTarget[46].id);
});
mouseTarget[46].addEventListener("click", event => {
    informar(mouseTarget[46].id);
});
//47
mouseTarget[47].addEventListener("mouseenter", e => {
    pintar(mouseTarget[47].id);
});
mouseTarget[47].addEventListener("mouseleave", e => {
    despintar(mouseTarget[47].id);
});
mouseTarget[47].addEventListener("click", event => {
    informar(mouseTarget[47].id);
});
//48
mouseTarget[48].addEventListener("mouseenter", e => {
    pintar(mouseTarget[48].id);
});
mouseTarget[48].addEventListener("mouseleave", e => {
    despintar(mouseTarget[48].id);
});
mouseTarget[48].addEventListener("click", event => {
    informar(mouseTarget[48].id);
});
//49
mouseTarget[49].addEventListener("mouseenter", e => {
    pintar(mouseTarget[49].id);
});
mouseTarget[49].addEventListener("mouseleave", e => {
    despintar(mouseTarget[49].id);
});
mouseTarget[49].addEventListener("click", event => {
    informar(mouseTarget[49].id);
});
//50
mouseTarget[50].addEventListener("mouseenter", e => {
    pintar(mouseTarget[50].id);
});
mouseTarget[50].addEventListener("mouseleave", e => {
    despintar(mouseTarget[50].id);
});
mouseTarget[50].addEventListener("click", event => {
    informar(mouseTarget[50].id);
});
//51
mouseTarget[51].addEventListener("mouseenter", e => {
    pintar(mouseTarget[51].id);
});
mouseTarget[51].addEventListener("mouseleave", e => {
    despintar(mouseTarget[51].id);
});
mouseTarget[51].addEventListener("click", event => {
    informar(mouseTarget[51].id);
});
//52
mouseTarget[52].addEventListener("mouseenter", e => {
    pintar(mouseTarget[52].id);
});
mouseTarget[52].addEventListener("mouseleave", e => {
    despintar(mouseTarget[52].id);
});
mouseTarget[52].addEventListener("click", event => {
    informar(mouseTarget[52].id);
});
//53
mouseTarget[53].addEventListener("mouseenter", e => {
    pintar(mouseTarget[53].id);
});
mouseTarget[53].addEventListener("mouseleave", e => {
    despintar(mouseTarget[53].id);
});
mouseTarget[53].addEventListener("click", event => {
    informar(mouseTarget[53].id);
});
//54
mouseTarget[54].addEventListener("mouseenter", e => {
    pintar(mouseTarget[54].id);
});
mouseTarget[54].addEventListener("mouseleave", e => {
    despintar(mouseTarget[54].id);
});
mouseTarget[54].addEventListener("click", event => {
    informar(mouseTarget[54].id);
});
//55
mouseTarget[55].addEventListener("mouseenter", e => {
    pintar(mouseTarget[55].id);
});
mouseTarget[55].addEventListener("mouseleave", e => {
    despintar(mouseTarget[55].id);
});
mouseTarget[55].addEventListener("click", event => {
    informar(mouseTarget[55].id);
});

document.getElementById("filtroE").addEventListener("click",e=>{filtro("filtroE")})

document.getElementById("filtroG").addEventListener("click",e=>{filtro("filtroG")})

document.getElementById("filtroC").addEventListener("click",e=>{filtro("filtroC")})

