import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
public class MainFrame  extends JFrame{
    final private Font mainFont = new Font("Segoe print",Font.BOLD,18);
    JTextField tfFirstName,tfLastName;
    JLabel lbWelcme;
    
    public void initialize(){

        // Form Panel
        JLabel lbFirstName = new JLabel("First Name");
        lbFirstName.setFont(mainFont);

        tfFirstName = new JTextField();
        tfFirstName.setFont(mainFont);

        JLabel lbLasrName = new JLabel("Last Name");
        lbLasrName.setFont(mainFont);

        tfLastName = new  JTextField();
        tfLastName.setFont(mainFont);

        JPanel formPanel = new JPanel();
        formPanel.setLayout(new GridLayout(4,1,5,5));
        formPanel.setOpaque(false);
        formPanel.add(lbFirstName);
        formPanel.add(tfFirstName);
        formPanel.add(lbLasrName);
        formPanel.add(tfLastName);

        //Welcome Label
        lbWelcme = new JLabel();
        lbWelcme.setFont(mainFont);

        // Button Panel/
        JButton btnOK = new JButton("OK");
        btnOK.setFont(mainFont);

      
        btnOK.addActionListener(new ActionListener(){

            @Override
            public void actionPerformed(ActionEvent e){
                // TODO Auto-generated method stub
                String firstName = tfFirstName.getText();
                String lastName = tfLastName.getText();
                lbWelcme.setText("Hello "+firstName+" "+lastName);
            }
        });

        JButton btnClear = new JButton("Clear");
        btnClear.setFont(mainFont);
        btnClear.addActionListener(new ActionListener(){
            @Override
            public  void actionPerformed(ActionEvent e) {
                tfFirstName.setText("");
                tfLastName.setText("");
                lbWelcme.setText("");
            }
        });
        JPanel buttonsPanel = new JPanel();
        buttonsPanel.setLayout(new GridLayout(1,2,5,5));
        buttonsPanel.setOpaque(false);
        buttonsPanel.add(btnOK);
        buttonsPanel.add(btnClear);

        JPanel mainPanel = new JPanel();
        mainPanel.setLayout(new BorderLayout());
        mainPanel.setBackground(new Color(128,128,255));
        mainPanel.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));
        mainPanel.add(formPanel,BorderLayout.NORTH);
        mainPanel.add(lbWelcme,BorderLayout.CENTER);
        mainPanel.add(buttonsPanel,BorderLayout.SOUTH);

        add(mainPanel);

        setTitle("Welcome");
        setSize(500,600);
        setMinimumSize(new Dimension(300,400));
        setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
        setVisible(true);
    }
    public static void main(String[] args) {
        MainFrame myFrame = new MainFrame();
        myFrame.initialize();
    }
}