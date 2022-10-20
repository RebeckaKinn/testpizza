function open1() {
    document.getElementById("img3").innerHTML=``;
    document.getElementById("img2").innerHTML=``;
    document.getElementById("img1").innerHTML=/*html*/`
    <div class="img2" id="img1">
    <img src="img/pizza1.webp" width="200" height="150"/>
    </div>
`; 
}; 

function open2() {
    document.getElementById("img1").innerHTML=``;
    document.getElementById("img3").innerHTML=``;
    document.getElementById("img2").innerHTML=/*html*/`
    <div class="img2" id="img2">
    <img src="img/pizza1.webp" width="150" height="100"/>
    </div>
`;
}

function open3() {
    document.getElementById("img1").innerHTML=``;
    document.getElementById("img2").innerHTML=``;
    document.getElementById("img3").innerHTML=/*html*/`
    <div class="img2" id="img3">
    <img src="img/pizza1.webp" width="100" height="50"/>
    </div>

    `;
}

function box1() {
    
    document.getElementById("topping").innerHTML=/*html*/`
    
    <div class="boks" id="valg1"> 
    <div>
    <div>Velg opp til 4 alternativer:</div>
    <div><ul>   
        <li>Peperoni</li>
        <li>Skinke</li>
        <li>Løk</li>
        <li>Kjøttboller</li>
        <li>Bacon</li>
        <li>Ananas</li>
        <li>Sopp</li>
        <li>Solmodne tomater</li>
        <li>Ekstra ost</li>
    </ul>
    <div>
    <input type="text"/>
    <input type="text"/>
    <input type="text"/>
    <input type="text"/></div>
    </div>
    `;

} 