let butt = document.getElementById("b1")
let name = document.getElementById("Nom")
let prenom = document.getElementById("Prenom")
let age = document.getElementById("Age")
let mail = document.getElementById("Email")
let adresse = document.getElementById("Adresse")
let titre = document.getElementById("titre")
let description = document.getElementById("textarea")
let titre_sec1=document.getElementById("titre_sec1")
let titre_sec2=document.getElementById("titre_sec2")
let titre_sec3=document.getElementById("titre_sec3")
let contenu1=document.getElementById("contenu1")
let contenu2=document.getElementById("contenu2")
let contenu3=document.getElementById("contenu3")
let isupper = (str)=>{
    lp=str.toUpperCase()
    if (lp==str) {
        return true
    } else {
        return false
    }
}

let char=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let charv3=[' ','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let charv2=[' ','0','1','2','3','4','5','6','7','8','9','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

let isHereList = (str)=>{
	for (let i = 0; i < str.length; i++) {
		if(char.includes(str[i])==false){
			return false
		}
	}
	return true
}
let isHereListv2 = (str)=>{
	for (let i = 0; i < str.length; i++) {
		if(charv2.includes(str[i])==false){
			return false
		}
	}
	return true
}
let isHereListv3 = (str)=>{
	for (let i = 0; i < str.length; i++) {
		if(charv3.includes(str[i])==false){
			return false
		}
	}
	return true
}

let emailcheck =(email)=>{
	if(email.includes('@')==false){
		return false
	}
	let y=email.split('@')
	let z=y[1].split('.')
	let arr=[y[0],z[0],z[1]]
	if(isHereListv2(arr[0])==false){
		return false
	}
	if(isHereListv2(arr[1])==false){
		return false
	}
	if((['com','fr'].includes(arr[2]))==false){
		return false
	}
	return true
}
butt.addEventListener('click',()=>{
	/*Q1 prenom & nom*/
	if(isupper(name.value)==false){
		alert("nom n'est pas en majuscule")
	}
	if(isupper(prenom.value[0])==false){
		alert("prénom ne commance pas par majuscule")
	}
	if(isHereList(name.value)==false || isHereList(prenom.value)==false){
		alert("nom ou prenom non validé")
	}
	/*age*/
	if(age.value<18){
		alert("age mineur")
	}
	/*adresse*/
	if(adresse.value.lenght > 300 || isHereListv2(adresse.value)==false){
		alert("adresse non validé")
	}
	/*titre*/
	if(isHereListv2(titre.value)==false){
		alert("titre non validé")
	}
	/*description*/
	if(isHereListv3(description.value)==false){
		alert("description non valide")
	}
	/*email*/ 
	if(emailcheck(mail.value)==false){
		alert("email non valide")
	}
	/*section*/
	if(isHereListv2(titre_sec1.value)==false ||isHereListv2(titre_sec2.value)==false || isHereListv2(titre_sec3.value)==false){
		alert("un titre de section non valide")
	}
})
