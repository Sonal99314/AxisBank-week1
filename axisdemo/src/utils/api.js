const studentsData=[
    {
        name:"sonal",
        age:"25",
        gender:"Female"
    },
    {
        name:"vsr",
        age:"27",
        gender:"male"

    },
];
    const getStudentsData=()=>{
        return new Promise((resolve,reject)=>{
        resolve(studentsData)
        //reject()
        });

    };
    const savesStudentData=(srudentData)=>{
     return   fetch("https://axis-react-learn-3fe62-default-rtdb.firebaseio.com/",{
  
method:"POST",
body:JSON.stringify(studentsData) ,}
     );
};
    export {getStudentsData,savesStudentData};
