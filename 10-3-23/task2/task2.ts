// there are thre access specifier in type script 
// public (accesseble any where )
//private(with in the classs)
//protected(with in the class and subclass)

class nitin{

public name="nitin";
protected salary=15000;
private bankbalance=4444444;


}
// protected element is extende here 
class nitincolege extends nitin{

     named() {
        console.log(this.salary);
      }
    
    
    } 
    const ob=new nitin();
    //public value 
    console.log(ob.name);
    // console.log(ob.bankbalance);
    //show error because its privte

    const nt = new nitincolege();
    nt.named();