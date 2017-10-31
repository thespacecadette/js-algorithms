function replaceStringsWith(string, replaceWith) {
    var result = string.split(' ');

    return result.join(replaceWith);
}

var answer = replaceStringsWith('wubba lubba dub dub', '%20');

console.log('replaceStringsWith() ---> ', answer);