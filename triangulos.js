let a,b,c,equilatero=0,isosceles=0,escaleno=0,trianguloinvalido=0,minimo,txtMin,maximo,txtMax;
for(let i=1;i<=3;i++)
{
    a=parseFloat(prompt('Introduzca a:'));
    b=parseFloat(prompt('Introduzca b:'));
    c=parseFloat(prompt('Introduzca c:'));
    document.write('<br>'+i+' : '+a+' , '+b+' , '+c);
    if(a==b && b==c) 
    {
        document.write(' El triangulo es equilatero ');
        equilatero=equilatero+1;
    } else if(a==b || b==c || a==c) {
        document.write(' El triangulo es isosceles ');
        isosceles=isosceles+1;
    } else { 
        document.write(' El triangulo es escaleno ');
        escaleno=escaleno+1;
    }            
    
}

minimo=equilatero;
txtMin='equilatero';
if (isosceles<minimo) {
    minimo=isosceles;
    txtMin='isosceles';
}
if (escaleno<minimo) {
    txtMin='escaleno';
}

maximo=equilatero;
txtMax='equilatero';
if (isosceles>maximo) {
    maximo=isosceles;
    txtMax='isosceles';
}
if (escaleno>maximo) {
    txtMax='escaleno';
}
//aun no comprendo bien el como imprimir ciertos algoritmos pero este lo intenté