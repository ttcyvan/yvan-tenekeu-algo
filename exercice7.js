tab = [];

function push(data) {
    return tab.push(data);
}

function pop() {
    return tab.pop();
}

push("teste1");
push("teste2");
pop();

console.log(tab);