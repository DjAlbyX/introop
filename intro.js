function darkMode() {
    body.classList = [];
    body.classList.add('darkMode');
    document.getElementById('darkmode').innerHTML =/*html*/`
    <button id="darkmodeButton" onclick="lightMode()">light mode</button><br>
    `;
}

function lightMode() {
    body.classList = [];
    body.classList.add('lightMode');
    document.getElementById('darkmode').innerHTML = /*html*/`
    <button id = "darkmodeButton" onclick="darkMode()">night mode</button> <br>
    `;

}

function showinfo() {
    doc1.innerHTML = /*html*/`
    <div class="incard">
    <h1>Info om meg:<h1>
        <ul>
            <li>Navn:<br>Albert Filip</li>
            <br>
            <li>Alder: 19 år gammel</li>
            <br>
            <li>Hjemmeland: Romania</li>
            <br>
            <li>Bosted: Bergen/Norge</li>
    </ul>
    <div class="head blue" onclick="blank1()">close</div>
    </div>  
    `;
}

function showhobby() {
    doc2.innerHTML = /*html*/`
    <div class="incard">
    <h2>Mine hobbies</h2>
    <ul>
        <li>DJing</li>
        <li>Muay Thai</li>
        <li>Gaming</li>
        <li>Trening</li>
    </ul>
    <div class="head red" onclick="blank2()">close</div>
</div>
    `;
}

function blank1(){
    document.getElementById('cardinfo').innerHTML=''
}

function blank2(){
    document.getElementById('cardhobby').innerHTML=''
}