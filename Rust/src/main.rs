// Hello //

fn main(){ // this is the entry point or start point of the program
    let x=32;
    println!("The value is {}", x);
    print!("value is {}",add(5,6));

}

// Variable initialization in rust

// to initialize variable use let and the name of the variable also you can declare the datatype lile float,int or string

// A function declaration in rust

fn add(a:i32,b:i32)->i32{  
    return a+b;
}