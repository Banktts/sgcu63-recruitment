import json
ans=None

def fileSearch(fileToSeacrh,filesObj):
    global ans
    f = open(filesObj, 'r')
    data = json.load(f)
    ans=[]
    search(data,fileToSeacrh,"")
    return ans
    
def search(data,fileToSeacrh,tmp): 
    global ans
    if isinstance(data,list):
        for i in data:
            if i ==  fileToSeacrh:
                ans.append(tmp+"/"+i)
        
    else:
        for i in data.keys():
            if(i[0]!="_"):
                search(data[i],fileToSeacrh,tmp+"/"+i)
            else:
                search(data[i],fileToSeacrh,tmp)
#run test

finalAns=fileSearch("file1","test.json")

for i in finalAns:
    print(i)