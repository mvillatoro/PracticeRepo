package javapractice.Challenges;

public class FizzBuzz {
    
    public void RunFizzBuzz(){
        
        int i = 1;
        while(i <= 100){
            if(i % 3 == 0 && i % 5 == 0){
                System.out.println(i + " FIZZBUZZ ");
            }else if(i % 3 == 0){
                System.out.println(i + " FIZZ ");
            }else if(i % 5 == 0){
                System.out.println(i + " BUZZ ");
            }else{
                System.out.println(i);
            }
            i++;
        }
    }

}
