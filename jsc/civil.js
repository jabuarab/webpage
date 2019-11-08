
let materiasind = [
    {
        "id": "analisis2",
        "hijo": ["analisis1"],
        "cat": "G",
        "nombre":"Analisis II",
        "profesor":"José Díaz Milesi",
        "creditos":"9",
        "semestre":"II",
        "exonerable":"Se exonerea parcialmente,el practico,con nota 10",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "analisis1",
        "hijo": [],
        "cat": "G",
        "nombre":"Analisis I",
        "profesor":"José Díaz Milesi",
        "creditos":"9",
        "semestre":"I",
        "exonerable":"Se exonerea parcialmente,el practico,con nota 10",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "gal1",//falta datos exoneracion
        "hijo": [],
        "cat": "G",
        "nombre":"Geometría y Álgebra Lineal I",
        "profesor":"Alfredo Piria",
        "creditos":"9",
        "semestre":"I",
        "exonerable":"Se exonerea parcialmente,el practico,con nota 10",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "fisica1",//falta datos exoneracion
        "hijo": [],
        "cat": "G",
        "nombre":"Física I",
        "profesor":"Juan Pablo Fossati",
        "creditos":"7,5",
        "semestre":"I",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "intRob",
        "hijo": [],
        "cat": "G",
        "nombre":"Introducción a la Robótica",
        "profesor":"Gustavo Compagnone",
        "creditos":"6",
        "semestre":"I",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "intIng",
        "hijo": [],
        "cat": "G",
        "nombre":"Introducción a la Ingeniería",
        "profesor":"Adrián Santilli",
        "creditos":"6",
        "semestre":"I",
        "exonerable":"Se exonera totalmente con nota 6",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "gal2",
        "hijo": ["gal1"],
        "cat": "G",
        "nombre":"Geometría y algebra lineal II",
        "profesor":"Alfredo Piria",
        "creditos":"9",
        "semestre":"II",
        "exonerable":"se exonerea parcialmente,el practico,con nota 10",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "fisica2",
        "hijo": [],
        "cat": "C",
        "nombre":"Física II",
        "profesor":"Juan Pablo Fossati",
        "creditos":"7,5",
        "semestre":"II",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "matlab",//falta
        "hijo": [],
        "cat": "C",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "funQui",//nose si esta bien lo de exonerable
        "hijo": [],
        "cat": "C",
        "nombre":"Fundamentos Químicos de la Ingeniería",
        "profesor":"Laura Luzuriaga",
        "creditos":"6",
        "semestre":"II",
        "exonerable":"no es exonerable",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "caluclo",//calculo?
        "hijo": ["analisis2", "gal2"],
        "cat": "G",
        "nombre":"Cálculo Numérico",
        "profesor":"",//falta
        "creditos":"6",
        "semestre":"III",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "analisis3",
        "hijo": ["analisis2", "gal2"],
        "cat": "C",
        "nombre":"Análisis Matemático III ",
        "profesor":"José Díaz Milesi ",
        "creditos":"9",
        "semestre":"III",
        "exonerable":"se exonerea parcialmente,el practico,con nota 10",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "mecanica1",//error en doc
        "hijo": ["fisica1", "analisis1"],
        "cat": "C",
        "nombre":"Mecánica I",
        "profesor":"",
        "creditos":"7,5",
        "semestre":"III",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "cad",
        "hijo": [],
        "cat": "C",
        "nombre":"Laboratorio CAD",
        "profesor":"Daniel Larnaudie",
        "creditos":"6",
        "semestre":"III",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "itnrotermo",//falta
        "hijo": [],
        "cat": "E",
        "nombre":"Laboratorio I Industrial", //skere
        "profesor":"",
        "creditos":"6",
        "semestre":"III",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "ch1",
        "hijo": [],
        "cat": "G",
        "nombre":"Ciencias Humanas I",
        "profesor":"",
        "creditos":"4,5",
        "semestre":"III",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "prob",
        "hijo": ["analisis2"],
        "cat": "G",
        "nombre":"Probabilidad y estadística",
        "profesor":"José Díaz Milesi",
        "creditos":"7,5",
        "semestre":"IV",
        "exonerable":"Se exonerea parcialmente,el practico,con nota 10",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "mecanica2",
        "hijo": ["mecanica1"],
        "cat": "C",
        "nombre":"Mecánica II",
        "profesor":"Carlos Brun",
        "creditos":"7,5",
        "semestre":"IV",
        "exonerable":"No es exonerable",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "procontru1",
        "hijo": [],
        "cat": "E",
        "nombre":"",
        "profesor":" ",
        "creditos":"6",
        "semestre":"IV",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "resMat",
        "hijo": ["mecanica1"],
        "cat": "C",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "lbcivil1",
        "hijo": [],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "eco",
        "hijo": [],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "comProf",
        "hijo": [],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "ivestOper",
        "hijo": ["prob"],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "hidro",
        "hijo": ["itnrotermo", "analisis3"],
        "cat": "C",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "pasantia1",
        "hijo": [],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "resMat2",
        "hijo": ["resMat"],
        "cat": "C",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "ceinIngMat",
        "hijo": ["funQui"],
        "cat": "C",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "lbcivil2",
        "hijo": ["lbcivil1"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "contYcost",
        "hijo": [],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "topocart",
        "hijo": [""],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "hidrolog",
        "hijo": ["hidro"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "mecsuelo",
        "hijo": ["resMat"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "resMat3",
        "hijo": ["resMat2","mecanica2"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""

    },
    {
        "id": "horm",
        "hijo": ["pasantia1","resMat2","ceinIngMat"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "teologia",
        "hijo": [],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },

    {
        "id": "gestCal",
        "hijo": [],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "mecsuelo2",
        "hijo": ["mecsuelo"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "resMat4",
        "hijo": ["resMat3"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "pasantia2",
        "hijo": [],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "horm2",
        "hijo": ["horm","resmat3"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "ingAmbiental",
        "hijo": [],
        "cat": "C",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },


    {
        "id": "plomeria1",
        "hijo": ["hidro",],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "elcamino",
        "hijo": ["mecsuelo2","topocart"],
        "cat": "C",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "trans",
        "hijo": ["funQui"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "lbcivil3",
        "hijo": ["lbcivil2"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "ch2",
        "hijo": [],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "plomeria2",
        "hijo": ["plomeria1","hidrolog","pasantia2"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "estrucmetalywood",
        "hijo": ["resMat4"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "pasantia3",
        "hijo": [],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "ingtranspor",
        "hijo": ["trans","elcamino","resMat4","horm2"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "proyInven",
        "hijo": ["contYcost"],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },

    {
        "id": "proyCiv",
        "hijo": ["plomeria2", "maq3"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "elemGestion",
        "hijo": ["eco"],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""

    },
    {
        "id": "gestiProy",
        "hijo": ["proyInven"],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "etica",
        "hijo": ["ch1"],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    }

];