function anagram(texte1, texte2) {
    if (texte1.length !== texte2.length) {
        console.log(texte1 + " et " + texte2 + " ne sont pas des anagramme");
    } else {
        let verif1 = texte1.split('').sort().join('');
        let verif2 = texte2.split('').sort().join('');

        if (verif1 === verif2) {
            console.log(texte1 + " = " + verif1 + " et " + texte1 + " = " + verif2 + " sont des anagrammes");
        }
    }

}

anagram("marie", "aimer");