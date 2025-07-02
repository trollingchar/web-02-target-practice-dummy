fetch('https://trollingchar.github.io/web-02-target-practice-dummy/images/cat.png').then(response => {
    ok = response.ok;
    console.log(response);
}).catch(error => console.error(error));


// validate
// ok = false;
setTimeout(() => {
    let el = document.getElementById("result");
    el.innerText = ok ? "Validation successful" : "Validation failed";
    el.classList.add(ok ? 'text-lime-400' : 'text-red-500');
}, 1000);