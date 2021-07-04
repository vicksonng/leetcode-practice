/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let result = 0;
    var romanNumConvertion = {
        "basic": [
            {"key": "I", "value": 1},
            {"key": 'V', "value": 5},
            {"key": 'X', "value": 10},
            {"key": 'L', "value": 50},
            {"key": 'C', "value": 100},
            {"key": 'D', "value": 500},
            {"key": 'M', "value": 1000},
        ],
        "special": [
            {"key": "IV", "value": 4},
            {"key": "IX", "value": 9},
            {"key": "XL", "value": 40},
            {"key": "XC", "value": 90},
            {"key": "CD", "value": 400},
            {"key": "CM", "value": 900}
        ]
    }
    for (let i = romanNumConvertion.special.length - 1 ; i >= 0 ; i--) {
        let tmpKey = romanNumConvertion.special[i].key;
        if (s.includes(tmpKey)) {
            result += romanNumConvertion.special[i].value * (s.match(new RegExp(tmpKey, "g")) || []).length;
            s = s.replace(romanNumConvertion.special[i].key, "");
            if (s.length == 0) break;
        }
    }
    for (let i = romanNumConvertion.basic.length -1 ; i >= 0 ; i--) {
        let tmpKey = romanNumConvertion.basic[i].key;
        if(s.includes(romanNumConvertion.basic[i].key)) {
            result += romanNumConvertion.basic[i].value * (s.match(new RegExp(tmpKey, "g")) || []).length;
            s = s.replace(romanNumConvertion.basic[i].key, "");
            if (s.length == 0) break;
        }
    }
    return result; 
};