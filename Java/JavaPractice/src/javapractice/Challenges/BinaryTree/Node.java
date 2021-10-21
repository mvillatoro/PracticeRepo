package javapractice.Challenges.BinaryTree;

public class Node {

    public Node(int i){
        value = i;
    }

    private Node leftNode;
    private Node rightNode;
    private int value;
    private boolean active = true;

    public boolean getNumber(int i){

        if(value == i && active)
            return true;

        if(leftNode != null && i < value)
            return leftNode.getNumber(i);
        
        if(rightNode != null && i > value)
            return rightNode.getNumber(i);

        return false;
    }

    public void insertValue(int i){

        if(value == i){
            System.out.println("Value already Exists");
            return;
        }

        if(i < value){
            if(leftNode != null)
                leftNode.insertValue(i);
            else
                leftNode = new Node(i);
        }else{
            if(rightNode != null)
                rightNode.insertValue(i);
            else
                rightNode = new Node(i);
        }

    }

    public void printNode(){
        
        if(leftNode != null)
            leftNode.printNode();

        System.out.print(value + ", ");

        if(rightNode != null)
            rightNode.printNode();
    }

    public void deleteNode(int i){
        if(value == i && !active){
            System.out.println("The node does not exists");
            return;
        }
        
        if(value == i && active ){
            active = false;
            System.out.println("Removed");
            return;
        }

        if(leftNode != null && i < value)
            leftNode.deleteNode(i);
        
        if(rightNode != null && i > value)
            rightNode.deleteNode(i);;

        System.out.println("The node does not exists");
    }

}
