let numero = (n) => {
    if (n == 0)
        return 0;
    if (n == 1 || n == 2)
        return 1;
    let prev1 = 1;
    let prev2 = 1;
    let courant;
    // O(n)
    for (let i = 3; i <= n; i++) {
        current = prev1 + prev2;
        prev1 = prev2;
        prev2 = courant;
    }
    return courant;
}
console.log(numero(1000))