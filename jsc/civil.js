
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