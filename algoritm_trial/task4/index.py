n=int(input())          #если центры фигур лежат на одной прямой, то прямая из условия задачи существует
if n in [1,2]:
    print('Yes')
else:
    Centers=set()                                          
    for i in range(n):
        line=input().strip().split()
        line = [int(j) for j in line]
        if line[0]==0:
            Centers.add((line[2],line[3]));
        else:
            Centers.add(((line[1]+line[3]+line[5]+line[7])/4,(line[2]+line[4]+line[6]+line[8])/4))
    if len(Centers)<=2:
          print('Yes')
    else:
          
        res='Yes'
        p1 = Centers.pop();
        p2 = Centers.pop();
        for dot in Centers:
          if (((dot[1] - p1[1])*(p2[0] - p1[0])) != ((dot[0] - p1[0]) * (p2[1] - p1[1]))): 
             res='No'
             break
        print(res)