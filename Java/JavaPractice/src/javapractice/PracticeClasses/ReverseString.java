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
public class ReverseString {
    
    private String text = "1234567890";
    
    public void reverseString(){
        
        System.out.println(text);        
        int i = text.length();
        
        while(i != 0){
            System.out.print(text.charAt(i-1));
            i--;
        }
        
        System.out.println("\n");
    }
    
}
