function reverse (sentence) {
    return sentence.split(' ').map(function(word) {

      return word.split('').reverse().join('');

    }).join(' ');
  }
  
  console.log(reverse("abd fhe kdj"));