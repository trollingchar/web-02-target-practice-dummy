fetch('https://trollingchar.github.io/web-02-target-practice-dummy/images/cat.png').then(response => {
    ok = true;
    console.log(response);
}).catch(error => console.error(error));


// validate
// ok = false;
let el = document.getElementById("result");
el.innerText = ok ? "Validation successful" : "Validation failed";
el.classList.add(ok ? 'text-lime-400' : 'text-red-500');