/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javapractice.PracticeClasses;

/**
 *
 * @author mvillatoro
 */

interface ReadPhrase {
    String sType(String phrase);
}

interface SingleVal{
    boolean execute();
}

interface DualVal {
    int execute(int a, int b);
}
        
public class LambdaTest {
 
   public String lambaPhrase(String text, String symbol){
       ReadPhrase myPhrase = (s) -> {return s + symbol ;};
       return myPhrase.sType(text);
   }
   
   public int lambdaArith(int a, int b){
       DualVal dv = (m,n) -> a + b;
       return dv.execute(a, b);
   }

   public boolean lambdaOdd(int a){
        SingleVal odd = () ->  a % 2 == 0 ? false : true;
         return odd.execute();
   }

   public boolean lambdaPrime(int a){
       SingleVal prime = () -> {
           IsPrime ip = new IsPrime();
           return ip.isPrimeNumber(a) != -1 ? true : false;
       };

       return prime.execute();
   }

    public boolean lambdaPalindrome(String text){
        SingleVal palindrome = () -> {
            for(int i = 0; i < text.length(); i ++){
                if(text.charAt(i) != text.charAt(text.length()-(i + 1))){
                    return false;
                }
            }
            return true;
        };

        return palindrome.execute();
    }

}