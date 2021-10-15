/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javapractice;

import javapractice.PracticeClasses.IsPrime;
import javapractice.PracticeClasses.ReverseString;

/**
 *
 * @author Mario
 */
public class JavaPractice {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        ReverseString rs = new ReverseString();
        rs.reverseString();
        System.out.println("------------------------");
        
        IsPrime ip = new IsPrime( new int[]{1,2,5,8,7,11,22} ); 
        ip.getPrimeList();
        System.out.println("------------------------");
    }
    
}
