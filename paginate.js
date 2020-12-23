// Paginate results array
function paginateRes(res, amn, pag) {
    pag = pag || 0;
    var tmp = [];
    var n = 0;
    var p = 0;
    res.forEach(function(r, i){
        if (n == amn) {
        n = 0; p++;}
        if (p == pag) {
        tmp.push(r);}
        n++;
    }); return tmp;
}
