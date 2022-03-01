var isValid = function(s) {
    
    if(s == ""){
       return true
   }
   
   
   if(s.length < 2){
       return false
   }
   
   const pairs = {
   "{": "}",
   "[": "]",
   "(": ")"
   }
   
   let stk = []
   let arr = s.toString().split("")
   
   for(let i = 0; i < arr.length; i++){
       let br = arr[i]
       if(pairs[br]){
           stk.push(br)
       } else {
           let chkBr = stk.pop()
           if(pairs[chkBr] != br){
               return false
           }
       }
   }
   
   
   if(stk.length >0){
       return false
   }
   return true
}

isValid(("()[]{}"))