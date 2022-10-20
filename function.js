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

function box2() {
    document.getElementById("dressing").innerHTML=/*html*/`
    <div class="boks"> 
    <Div>Velg dressing/saus:</Div>
   <ul> 
        <li>Salsa</li>
        <li>Rømmedressing</li>
        <li>BBQ</li>
        <li>Bernais</li>
        <li>Aioli</li>
        <li>Ketchup</li>
    </ul>
    <div class="textbox">
    <input type="text"/>
</div>
</div> 
    `;
}

function box3() {
    document.getElementById("link").innerHTML=/*html*/`
    <div class="boks">
    <button><a href="https://www.peppes.no/" target="_new">Peppes Pizza</a></button>
    <button><a href="https://www.pizzabakeren.no/" target="_new">Pizzabakeren</a></button>
    <button><a href="https://www.dominos.no" target="_new">Dominos Pizza</a></button>
    </div>
    `;
}

function box4() {
    document.getElementById("bilder").innerHTML=/*html*/`
    <div class="img">
    <img src="img/pizza3.jpg" width="300" height="200"/>
    </div>
    <div class="img">
    <img src="img/pizza2.png" width="300" height="200"/>
    </div>
    `; 
}