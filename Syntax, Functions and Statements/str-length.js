function strLength(first, second, third){
    let totalLength = first.length + second.length + third.length;
    let averageLength = Math.floor(totalLength / 3);

    console.log(totalLength);
    console.log(averageLength);
}

strLength('chocolate', 'ice cream', 'cake');