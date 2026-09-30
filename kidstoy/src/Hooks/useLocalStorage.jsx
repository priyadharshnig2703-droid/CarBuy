function useLocalStorage(student){
    function saveData()
    {
    

 localStorage.setItem("student",JSON.stringify(student)); 

 
}
 return(saveData)
}
export default useLocalStorage;
