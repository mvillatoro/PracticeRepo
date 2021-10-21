package javapractice.Challenges.BinaryTree;

public class BinaryTree {
    
    public Node root;
    
    public void printTree(){
        if(root != null){
            root.printNode();
            System.out.println();
        }
        else
            System.out.println("Tree is empty");
    }

    public void insertValue(int i){
        if(root != null)
            root.insertValue(i);
        else
            root = new Node(i);
    }

    public void hasNumber(int i){

        if(root.getNumber(i))
            System.out.println("Value " + i + " exists: Yes");
        else
            System.out.println("Value " + i + " exists: No");
    }

    public void deleteNumber(int i){
        if(root != null){
            root.deleteNode(i);
        }
    }
}
