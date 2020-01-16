function unique(str) {

    const data = str.split("");
    console.log(data)
    const result = data.filter(word => word.length > data);
    console.log(result);
}

unique("teste");