function reverse(value) {
    let array = value.split("")
        .reverse()
        .join("");

    console.log(array)
}

reverse("data");