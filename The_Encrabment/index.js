var choose_character = Math.floor(Math.random() * 3);
var characters = ["daughter", "parents", "son"];
var chosen_character = characters[choose_character];
var multi = multinode_texts[chosen_character];
var from_emo1 = multi.part_1_1.tag;
var from_emo2 = multi.part_2_1.tag;
var from_emo3 = multi.part_3_1.tag;

// function to find texts that come from a certain emotion
//https://stackoverflow.com/questions/23720988/how-to-filter-json-data-in-javascript-or-jquery
function find_in_object(my_object, my_criteria){

    return my_object.filter(function(obj) {
      return Object.keys(my_criteria).every(function(c) {
        return obj[c] == my_criteria[c];
      });
    });
  
  }
//populate arrays of mono-node texts that could come after the each section of multi-node text according to emotion tags
var arr_mono1 = find_in_object(mononode_texts, {from: from_emo1});
var arr_mono2 = find_in_object(mononode_texts, {from: from_emo2});
var arr_mono3 = find_in_object(mononode_texts, {from: from_emo3});

//function to choose random mono text from previous arrays
function choose_mono_text(arr_m){
    var ran = Math.floor(Math.random() * arr_m.length);
    return arr_m[ran].text;
}

var mono1 = choose_mono_text(arr_mono1);
var mono2 = choose_mono_text(arr_mono2);
var mono3 = choose_mono_text(arr_mono3);

//insert text in document

//1st part
var el_m_1_1 = document.getElementById("multi1_1");
let p1 = document.createElement("p");
p1.textContent = multi.part_1_1.text;
el_m_1_1.append(p1);

var el_mo_1 = document.getElementById("mono1");
if(el_mo_1 !== 0){
    
    for(i=0; i< mono1.length; i++){
        let p = document.createElement("p");
        p.textContent = mono1[i];
        el_mo_1.append(p);
    }
}

var el_m_1_2 = document.getElementById("multi1_2");
let p2 = document.createElement("p");
p2.textContent = multi.part_1_2.text;
el_m_1_2.append(p2);

//2nd part
var el_m_2_1 = document.getElementById("multi1_2");
let p3 = document.createElement("p");
p3.textContent = multi.part_2_1.text;
el_m_2_1.append(p3);

var el_mo_2 = document.getElementById("mono2");
if(el_mo_2 !== 0){
    
    for(i=0; i< mono2.length; i++){
        let p = document.createElement("p");
        p.textContent = mono2[i];
        el_mo_2.append(p);
    }
}

var el_m_2_2 = document.getElementById("multi2_2");
let p4 = document.createElement("p");
p4.textContent = multi.part_2_2.text;
el_m_2_2.append(p4);

//3rd part

var el_m_3_1 = document.getElementById("multi3_1");
let p5 = document.createElement("p");
p5.textContent = multi.part_3_1.text;
el_m_3_1.append(p5);

var el_mo_3 = document.getElementById("mono3");
if(el_mo_3 !== 0){
    
    for(i=0; i< mono3.length; i++){
        let p = document.createElement("p");
        p.textContent = mono3[i];
        el_mo_3.append(p);
    }
}

var el_m_3_2 = document.getElementById("multi3_2");
let p6 = document.createElement("p");
p6.textContent = multi.part_3_2.text;
el_m_3_2.append(p6);

