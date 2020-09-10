function foo(){
    try {
        return 0
    } catch (error) {
        
    } finally {
       return 1
    }
}
console.log(foo()) // 1