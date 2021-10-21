package javapractice.PracticeClasses;

public class ConsecutiveNumber {
    

    public void ShowConsecutive(int numberList[]){
        for(int i = 0; i < numberList.length; i++){
            for(int j = i; j < numberList.length; j++){
                if(numberList[i] > numberList[j]){
                    int g = numberList[i];
                    int l = numberList[j];
                    numberList[i] = l;
                    numberList[j] = g;
                }
            }
        }

        int i = 0;
        while(i < numberList.length){
            if(i == numberList.length-1)
                break;
            if(numberList[i] + 1 != numberList[i+1]){
                System.out.println("Not secuential");
                return;
            }
            i++;
        }
        System.out.println("Is secuential");
        printArray(numberList);

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

}
