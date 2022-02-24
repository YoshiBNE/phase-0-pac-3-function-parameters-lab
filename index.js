function introduction(name) {
    return `Hi, my name is ${name}.`;
}

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

function introductionWithLanguageOptional(name, language) {
    let reply = "JavaScript";
    if (Boolean(language) == true) {
        reply = language;
    }
    return `Hi, my name is ${name} and I am learning to program in ${reply}.`;
}