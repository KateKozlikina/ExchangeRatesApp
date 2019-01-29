export function createList(quotes){
    let list = [];
    for(let i in quotes){
        list.push(createData(i, quotes[i]));
        
    }

    return list;   

}
let id =0;
function createData(code, course) {
    id += 1;
    return { id, code, course };
  }