package javagyak18;

public class Haromszog {
    int ax, ay, bx, by, cx, cy;

    public Haromszog(int a, int b, int c, int d, int e, int f){
        ax = a;
        ay = b;
        bx = c;
        by = d;
        cx = e;
        cy = f;
    }

    public double tavolsag(int  x1, int y1, int x2, int y2){
        return Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2));
    }

    public double oldalA(){
        return tavolsag(ax,ay,bx,by);
    }
    public double oldalB(){
        return tavolsag(cx,cy,bx,by);
    }
    public double oldalC(){
        return tavolsag(ax,ay,cx,cy);
    }

    public double csucsTav(int x1, int x2){
        return tavolsag(0,0, x1, x2);
    }
    public double csucsA(int ax, int ay){
        return csucsTav(ax,ay);
    }
    public double csucsB(int bx, int by){
        return csucsTav(bx, by);
    }
    public double csucsC(int cx, int cy){
        return csucsTav(cx, cy);
    }

    public double kerulet(){
        return oldalA()+oldalB()+oldalC();
    }
    public double terulet(){
        double s = kerulet()/2;
        return Math.sqrt(s*(s-oldalA())*(s-oldalB())*(s-oldalC()));
    }
}
