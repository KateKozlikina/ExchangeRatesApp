export function createList(valutes){
    let list = [];
    for(let i in valutes){
        list.push(createData(i, valutes[i]));
        
    }

    return list;   

}

function createData(code, course) {
    let id = course.ID;
    let nominal = course.Nominal;
    let name = course.Name;
    let value = course.Value;
    let prev = course.Previous; 

    return { id, code, nominal, name, value, prev   };
  }