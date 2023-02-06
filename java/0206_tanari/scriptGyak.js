const megoldasok = [`
public class Gyak01 {
    public static void main(String[] args) {
        int a;
        int b;
        int c;
        a=6;
        b=4;
        c=2;
        System.out.println(a+b+c); //12
        System.out.println("Összegük: "+a+b+c); //:642
        int z=a+b+c;
        System.out.println("Összegük:" + z);  //:12
    }
}`, `
import java.util.Scanner;
public class Gyak02 {
    public static void main(String[] args) {
        Scanner be=new Scanner(System.in);
        System.out.println("kérem a téglalap oldalát: ");
        int a = be.nextInt();
        int ker = a*4;
        int ter = a*a;
        be.close();
        System.out.println("kerület: " + ker);
        System.out.println("terület: " + ter);

    }
}`, `
public class Gyak03 {
    public static void main(String[] args) {
        int a= 10;
        int b= 3;
        int z = a/b; // 10/2=5  10/3=3 !!! Ez így nem jó
        double oszt= a/b; // 10/3=3.0
        //double oszto = (a+0.0)/b; //ez már jó 3.3333335
        double oszto = (double)a/b;
        //inkább alapból double legyen a típusuk, és akkor nincs gond
        double szam1= 10;
        double szam2=3;
        double szam3 = szam1/szam2;
        System.out.println("hányadosuk: " + z);
        System.out.println("hányadosuk: " + oszt);
        System.out.println("hányadosuk: " + oszto);
        System.out.println(szam3);

    }
}`, `
import java.util.Scanner;

public class Gyak04 {
     public static void main(String[] args) {
         Scanner be = new Scanner(System.in);
         int osszeg=0;
         for (int i = 1; i <= 8; i++) {
             System.out.print(i+". jegy: ");
             int jegy = be.nextInt();
             osszeg+=jegy;
         }
         double atlag= (double)osszeg/8;
         System.out.println("Átlaga: " + atlag);
 
     }
}`, `
public class Gyak05 {
    public static void main(String[] args) {
        String nev = "Kata";
        String ige = "van";
        String dolog = "egy pepsid?";
        System.out.println(nev + ige + dolog);
        System.out.println(nev +" "+ ige +" "+ dolog);
    }
}`, `
import java.util.Scanner;
public class Gyak06 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Kérem a neved: ");
        String nev = sc.nextLine();

        System.out.println("Hello "+ nev + "!");
    }
}`];

const megoldas = (num) =>{
    return`
    <code><pre>
        ${megoldasok[num]}
    </pre></code>`
}


window.addEventListener("click",(e)=>{
    switch (e.target.id){
        case 'btn1':
            document.getElementById("ki").innerHTML=megoldas(0);
            break;
        case "btn2":
            document.getElementById("ki").innerHTML=megoldas(1);
            break;
        case "btn3":
            document.getElementById("ki").innerHTML=megoldas(2);
            break;
        case "btn4":
            document.getElementById("ki").innerHTML=megoldas(3);
            break;
        case "btn5":
            document.getElementById("ki").innerHTML=megoldas(4);
            break;
        case "btn6":
            document.getElementById("ki").innerHTML=megoldas(5);
            break;
        
    }
})