/**
 *
 * @param {string} firstString
 * @param {string} secondString
 */
const areAnagrams = (firstString, secondString) => {
    if (typeof firstString !== "string" || typeof secondString !== "string")
        throw new Error("arguments must be strings");

    if (firstString.length !== secondString.length) return false;

    const lookUpStr1 = {};
    const lookUpStr2 = {}
    //O(N)
    // You can simplify this if-else further more. But for now I will keep it as it is
    for(let key of firstString){
        if(!lookUpStr1[key]){
            lookUpStr1[key] = 1;
        }else{
            lookUpStr1[key] += 1
        }
    }
    
    //O(M)
    for(let key of secondString){
        if(!lookUpStr2[key]){
            lookUpStr2[key] = 1;
        }else{
            lookUpStr2[key] += 1
        }
    }
    
   
    // I am not using inbuilt sort() function for this example only ;) 
    //firstString = firstString.split("").sort();
    //secondString = secondString.split("").sort();

    // O(P)
    for (const key in firstString) {
        if (firstString[key] !== secondString[key]) return false;
    }

    //final complexity O(N)+O(M)+O(P) ~ O(L) => Linear
    // But if you are using sort() it might be N(Nlog(N)) for some browsers. different browsers have different implementations of sort()
    
    return true;
};

export default areAnagrams;
