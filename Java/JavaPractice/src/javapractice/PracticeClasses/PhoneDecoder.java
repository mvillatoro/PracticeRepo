package javapractice.PracticeClasses;
import java.util.Map; import java.util.HashMap;

public class PhoneDecoder {
    
    Map<String, String> tDial = new HashMap<String, String>(){
        {
            put("a", "2");
            put("b", "2");
            put("c", "2");
            put("d", "3");
            put("e", "3");
            put("f", "3");
            put("g", "4");
            put("h", "4");
            put("i", "4");
            put("j", "5");
            put("k", "5");
            put("l", "5");
            put("m", "6");
            put("n", "6");
            put("o", "6");
            put("p", "7");
            put("q", "7");
            put("r", "7");
            put("s", "7");
            put("t", "8");
            put("u", "8");
            put("v", "8");
            put("w", "9");
            put("x", "9");
            put("y", "9");
            put("z", "9");
        }
    };

    public PhoneDecoder(){}



    public void FormatNumber(String phoneNumber){

        
        String tlpn = phoneNumber.toLowerCase();
        String strBldr = "(";

        int i = 0;
        while(i < tlpn.length()){
            if(i == 3)
                strBldr += ")";

            if(i == 6)
                strBldr += "-";
            String chars = String.valueOf(tlpn.charAt(i));
            strBldr += Character.isDigit(chars.charAt(0)) ? chars : tDial.get(chars);
            i++;
        }

        System.out.println(strBldr);

    }

}
