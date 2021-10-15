/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javapractice.PracticeClasses;

/**
 *
 * @author Mario
 */
public class IsPrime {
    
    private int[] numberList;
    
    public IsPrime(int[] numberList){
        this.numberList = numberList;
    }
    
    public void getPrimeList(){
        
        int[] primeList = new int[0];

        for(int i : numberList){
            if(isPrimeNumber(i) != -1){
                primeList = insertToArray(primeList, i);
            }
        }
        
        printArray(numberList);
        printArray(primeList);
        
    }
    
    private void printArray(int array[]){
        int i = 0;
        while(i < array.length){
            if(i == array.length-1){
                System.out.print(array[i]);
            }else{
                System.out.print(array[i] + " ,");
            }
            i++;
        }
        System.out.println("");
    }
 
    private int isPrimeNumber(int n){
        
        int i = 1;
        int multCount = 0;
        
        while(i <= n){
            double x  = n % i;
            if( x == 0 ){
                multCount++;
            }
            i++;
        }
        
        if(multCount == 2)
            return n;
        else
            return -1;
    }
    
    private int[] insertToArray(int[] array, int number){
        int[] newArray = new int[array.length+1];
        
        int i = 0;
        while(i < array.length){
            newArray[i] = array[i];
            i++;
        }
        
        newArray[i] = number;
        return newArray;
    }
    
}
