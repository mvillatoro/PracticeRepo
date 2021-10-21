package javapractice.Challenges;

import java.util.HashMap;
import java.util.Map;

public class UniqueChars {
    
    Map<Character, Integer> letterMap = new HashMap<Character, Integer>();

    public UniqueChars(){
        
    }

    public void run(String text){
        String lText = text.toLowerCase();
        for (char letter : lText.toCharArray()) {
            if(letterMap.get(letter) != null){
                System.out.println("Duplicates found");
                return;
            }
            letterMap.put(letter, 1);
        }
        System.out.println("All unique");
    }

}
