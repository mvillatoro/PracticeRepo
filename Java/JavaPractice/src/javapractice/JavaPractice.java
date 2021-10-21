/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javapractice;

import javapractice.Challenges.BinaryTree.BinaryTree;
import java.util.Scanner;

/**
 *
 * @author Mario
 */
public class JavaPractice {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        BinaryTree bt = new BinaryTree();
        
        while(true){
            System.out.print("Option: ");
            int i = sc.nextInt();
            switch (i) {
                case 1://Insert Value
                    System.out.print("Insert: ");
                    int a = sc.nextInt();
                    bt.insertValue(a);
                    break;
                case 2://Search Value
                    System.out.print("Search: ");
                    int b = sc.nextInt();
                    bt.hasNumber(b);
                    break;
                case 3: //Print
                    System.out.println("Printing: ");
                    bt.printTree();
                    break;
                case 4: //Delete
                    System.out.print("Delete: ");
                    int c = sc.nextInt();
                    bt.deleteNumber(c);
                    break;
                case 0://End Execution
                    System.out.println("Bye...");
                    return;
                default:
                    System.out.println("Nani?");
                    break;
            }
        }
    }
    
}
