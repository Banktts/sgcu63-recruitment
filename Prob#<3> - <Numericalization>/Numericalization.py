def zero(m1,m2,i):
    m1, m2 = m1*5,m2*5
    for j in range(1, m2+1):
        if(i <= m1*0.2  or 0.8*m1<i):
            print("8", end="")
        elif(j > m2*0.8 or j<=m2*0.2):
            print("8", end="")
        else:
            print(" ", end="")
def one(m1, m2, i):
    m1, m2 = m1*5, m2*5
    for j in range(1, m2+1):
        if(j > m2*0.8):
            print("1", end="")
        else:
            print(" ", end="")
    
def two(m1, m2, i):
    m1, m2 = m1*5,m2*5
    for j in range(1, m2+1):
        if(i <= m1*0.2 or 0.4*m1<i<=0.6*m1 or 0.8*m1<i):
            print("2", end="")
        elif(j > m2*0.8 and i<0.5*m1):
            print("2", end="")
        elif(j <= m2*0.2 and i>0.5*m1):
            print("2", end="")
        else:
            print(" ", end="")
    
def three(m1, m2, i):
    m1, m2 = m1*5,m2*5
    for j in range(1, m2+1):
        if(i <= m1*0.2 or 0.4*m1<i<=0.6*m1 or 0.8*m1<i):
            print("3", end="")
        elif(j > m2*0.8):
            print("3", end="")
        else:
            print(" ", end="")
    
def four(m1, m2, i):
    m1, m2 = m1*5,m2*5
    for j in range(1, m2+1):
        if(0.4*m1 < i<=0.6*m1):
            print("4", end="")
        elif((j <= m2*0.2 or j>m2*0.8) and i<0.5*m1 ):
            print("4", end="")
        elif(j > m2*0.8 and i>0.5*m1 ):
            print("4", end="")
        else:
            print(" ", end="")
    
def five(m1, m2, i):
    m1, m2 = m1*5,m2*5
    for j in range(1, m2+1):
        if(i <= m1*0.2 or 0.4*m1<i<=0.6*m1 or 0.8*m1<i):
            print("5", end="")
        elif(j <= m2*0.2 and i<0.5*m1):
            print("5", end="")
        elif(j > m2*0.8 and i>0.5*m1):
            print("5", end="")
        else:
            print(" ", end="")
    
def six(m1, m2, i):
    m1, m2 = m1*5,m2*5
    for j in range(1, m2+1):
        if(i <= m1*0.2 or 0.4*m1<i<=0.6*m1 or 0.8*m1<i):
            print("6", end="")
        elif(j <= m2*0.2 and i<0.5*m1):
            print("6", end="")
        elif((j > m2*0.8 or j<=m2*0.2) and i>0.5*m1):
            print("6", end="")
        else:
            print(" ", end="")
    
def seven(m1, m2, i):
    m1, m2 = m1*5,m2*5
    for j in range(1, m2+1):
        if(j > m2*0.8 or i<=m1*0.2):
            print("7", end="")
        else:
            print(" ", end="")
    
def eight(m1, m2, i):
    m1, m2 = m1*5,m2*5
    for j in range(1, m2+1):
        if(i <= m1*0.2 or 0.4*m1<i<=0.6*m1 or 0.8*m1<i):
            print("8", end="")
        elif(j > m2*0.8 or j<=m2*0.2):
            print("8", end="")
        else:
            print(" ", end="")
    
def nine(m1, m2, i):
    m1, m2 = m1*5,m2*5
    for j in range(1, m2+1):
        if(i <= m1*0.2 or 0.4*m1<i<=0.6*m1 or 0.8*m1<i):
            print("9", end="")
        elif(j > m2*0.8 and i>0.5*m1):
            print("9", end="")
        elif((j > m2*0.8 or j<=m2*0.2) and i<0.5*m1):
            print("9", end="")
        else:
            print(" ", end="")
def space(m2):
    for j in range(0,m2):
        print(" ", end="")
def main(m1,m2,tmp):
    for i in range(1,(m1*5)+1):
        for x in range(0,len(tmp)):
            space(m2)
            if tmp[x]=="0":
                zero(m1,m2,i)
            elif tmp[x]=="1":
                one(m1,m2,i)
            elif tmp[x]=="2":
                two(m1,m2,i)
            elif tmp[x]=="3":
                three(m1,m2,i)
            elif tmp[x]=="4":
                four(m1,m2,i)
            elif tmp[x]=="5":
                five(m1,m2,i)
            elif tmp[x]=="6":
                six(m1,m2,i)
            elif tmp[x]=="7":
                seven(m1,m2,i)
            elif tmp[x]=="8":
                eight(m1,m2,i)
            elif tmp[x]=="9":
                nine(m1,m2,i)
        print()
scan=str(input()).split(" ")
main(int(scan[1]),int(scan[2]),scan[0])


    