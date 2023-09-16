const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  const arr1=[1,2,3,4];
  const arr2=["a","b","c","d"];
  // 1. Print Developers
  function printDeveloper() {
    for(let i of data){
        if(typeof i =='object' && i.profession=="developer")
        console.log(i.name);
        
    }
  }
  
  // 2. Add Data
  function addData() {
    let newName= prompt("Enter your name");
    let newData={name: newName};
    newData.age=parseInt(prompt("Enter your age"));
    newData.proffesion=prompt("Enter your proffesion");
    data.push(newData);
    console.log(data);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    
    for(let i in data){
        if(typeof data[i]=='object' && data[i].profession=="admin"){
       data.splice(i,1);
        }
    }
    console.log(data);
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    const con = arr1.concat(arr2);
    console.log(con);
  }
  
  // 5. Average Age
  function averageAge() {
    let c=0;
    let s=0;
    let avg=0;
    for(let i of data){
       for(let j in i){
    if(typeof(i[j])=='number'){
        c++;
       s=s+i[j];
    }
       }
    }
    avg=s/c;
    console.log(avg);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    let c=0;
    for(let i of data){
        if(typeof i =='object' && i.age>25)
        c++;
    }
    if(c>0)
    console.log("Yes there is at least one person in the array who's older than 25.");
    else
    console.log("No there is at least one person in the array who's older than 25.");
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    let p=[];
    let pr=[];
    for(let i of data){
    if(typeof i=='object')
    p.push(i.profession);
    }

    for(let j=0;j<p.length;j++){
       let  f=false;
        for(let k=j+1;k<pr.length;k++){
        if(p[j]==pr[k])
        f=true;
        }
        if(f==false){
            pr.push(p[j]);
        }
    }
    for(l of pr){
        console.log(l);
    }
  }
  
  // 8. Sort by Age
  function sortByAge() {
    let t=data[0];
    for(let i of data){
        if(typeof i=='object'){
           if(i.age<t.age) {
            let x=data.pop(i)
            data.unshift(x);
           }

        }
    }
    console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    for(let i of data){
        if(typeof i=='object' && i.name=="john")
        i.profession="managaer";
    }
    console.log(data);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let d=0;
    let a=0;
    for(let i of data){
        if(typeof i=='object'&& i.profession=="developer")
        d++;
        else if(typeof i=='object'&& i.profession=="admin")
        a++;
    }
    console.log("Total number of developer "+ d);
    console.log("Total number of admin "+ a);
  }