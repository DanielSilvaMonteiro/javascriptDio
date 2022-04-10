function mapSemThis(arr){
    arr.map(function(item){
        return item *2;
    });
}

const nums =[2, 4, 6, 8, 10];

//console para array modificado pelo map
console.log(mapSemThis(nums));

//console mostrando array original
console.log(nums);