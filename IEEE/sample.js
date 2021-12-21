var str="password=gAAAAABhuZIX0YF3Jeg_0DG5F&key=VRc20zzPnaY"
s=str.slice("password=",str.indexOf("&key="))
data=s.replace("password=","");
s=str.slice(str.indexOf("&key="));
key=s.replace("&key=","");
console.log(data);
