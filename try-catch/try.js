function foo(){
    try {
        return 0
    } catch (error) {
        
    } finally {
        console.log(121)
    }
}
console.log(foo())// 121 0