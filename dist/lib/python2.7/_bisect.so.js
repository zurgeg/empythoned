(function(g){function e(a,b,c,e){var f;for(f=-1;;)switch(f){case -1:var g,h,j,k,l,m,n,o;g=a;h=b;j=c;k=e;f=j<0?1:2;break;case 1:_PyErr_SetString(HEAP[_PyExc_ValueError],d);l=-1;f=16;break;case 2:f=k==-1?3:14;break;case 3:k=_PySequence_Size(g);f=k<0?4:14;break;case 4:l=-1;f=16;break;case 5:n=(k+q)/2|0;m=_PySequence_GetItem(g,n);f=m==0?6:7;break;case 6:l=-1;f=16;break;case 7:o=_PyObject_RichCompareBool(h,m,0);HEAP[m]-=1;f=HEAP[m]==0?8:9;break;
case 8:FUNCTION_TABLE[HEAP[HEAP[m+4]+24]](m);f=9;break;case 9:f=o<0?10:11;break;case 10:l=-1;f=16;break;case 11:var p=n;f=o!=0?12:13;break;case 12:k=p;f=14;break;case 13:j=p+1;f=14;break;case 14:var q=j;f=j<k?5:15;break;case 15:l=q;f=16;break;case 16:return a=l;default:assert(0,"bad label: "+f)}}function b(a,b,c,e){var f;for(f=-1;;)switch(f){case -1:var g,h,j,k,l,m,n,o;g=a;h=b;j=c;k=e;f=j<0?1:2;break;case 1:_PyErr_SetString(HEAP[_PyExc_ValueError],d);l=-1;f=16;break;case 2:f=k==-1?3:14;break;case 3:k=
_PySequence_Size(g);f=k<0?4:14;break;case 4:l=-1;f=16;break;case 5:n=(k+q)/2|0;m=_PySequence_GetItem(g,n);f=m==0?6:7;break;case 6:l=-1;f=16;break;case 7:o=_PyObject_RichCompareBool(m,h,0);HEAP[m]-=1;f=HEAP[m]==0?8:9;break;case 8:FUNCTION_TABLE[HEAP[HEAP[m+4]+24]](m);f=9;break;case 9:f=o<0?10:11;break;case 10:l=-1;f=16;break;case 11:var p=n;f=o!=0?12:13;break;case 12:j=p+1;f=14;break;case 13:k=p;f=14;break;case 14:var q=j;f=j<k?5:15;break;case 15:l=q;f=16;break;case 16:return a=l;default:assert(0,
"bad label: "+f)}}function a(){d=allocate([108,111,32,109,117,115,116,32,98,101,32,110,111,110,45,110,101,103,97,116,105,118,101,0],"i8",ALLOC_NORMAL);f=allocate([79,79,124,110,110,58,98,105,115,101,99,116,95,114,105,103,104,116,0],"i8",ALLOC_NORMAL);h=allocate(20,"i8*",ALLOC_NORMAL);j=allocate([97,0],"i8",ALLOC_NORMAL);k=allocate([120,0],"i8",ALLOC_NORMAL);l=allocate([108,111,0],"i8",ALLOC_NORMAL);m=allocate([104,105,0],"i8",ALLOC_NORMAL);n=allocate([98,105,115,101,99,116,95,114,105,103,104,116,
40,97,44,32,120,91,44,32,108,111,91,44,32,104,105,93,93,41,32,45,62,32,105,110,100,101,120,10,10,82,101,116,117,114,110,32,116,104,101,32,105,110,100,101,120,32,119,104,101,114,101,32,116,111,32,105,110,115,101,114,116,32,105,116,101,109,32,120,32,105,110,32,108,105,115,116,32,97,44,32,97,115,115,117,109,105,110,103,32,97,32,105,115,32,115,111,114,116,101,100,46,10,10,84,104,101,32,114,101,116,117,114,110,32,118,97,108,117,101,32,105,32,105,115,32,115,117,99,104,32,116,104,97,116,32,97,108,108,32,
101,32,105,110,32,97,91,58,105,93,32,104,97,118,101,32,101,32,60,61,32,120,44,32,97,110,100,32,97,108,108,32,101,32,105,110,10,97,91,105,58,93,32,104,97,118,101,32,101,32,62,32,120,46,32,32,83,111,32,105,102,32,120,32,97,108,114,101,97,100,121,32,97,112,112,101,97,114,115,32,105,110,32,116,104,101,32,108,105,115,116,44,32,105,32,112,111,105,110,116,115,32,106,117,115,116,10,98,101,121,111,110,100,32,116,104,101,32,114,105,103,104,116,109,111,115,116,32,120,32,97,108,114,101,97,100,121,32,116,104,
101,114,101,10,10,79,112,116,105,111,110,97,108,32,97,114,103,115,32,108,111,32,40,100,101,102,97,117,108,116,32,48,41,32,97,110,100,32,104,105,32,40,100,101,102,97,117,108,116,32,108,101,110,40,97,41,41,32,98,111,117,110,100,32,116,104,101,10,115,108,105,99,101,32,111,102,32,97,32,116,111,32,98,101,32,115,101,97,114,99,104,101,100,46,10,0],"i8",ALLOC_NORMAL);o=allocate([79,79,124,110,110,58,105,110,115,111,114,116,95,114,105,103,104,116,0],"i8",ALLOC_NORMAL);p=allocate(20,"i8*",ALLOC_NORMAL);q=allocate([105,
110,115,101,114,116,0],"i8",ALLOC_NORMAL);r=allocate([110,79,0],"i8",ALLOC_NORMAL);u=allocate([105,110,115,111,114,116,95,114,105,103,104,116,40,97,44,32,120,91,44,32,108,111,91,44,32,104,105,93,93,41,10,10,73,110,115,101,114,116,32,105,116,101,109,32,120,32,105,110,32,108,105,115,116,32,97,44,32,97,110,100,32,107,101,101,112,32,105,116,32,115,111,114,116,101,100,32,97,115,115,117,109,105,110,103,32,97,32,105,115,32,115,111,114,116,101,100,46,10,10,73,102,32,120,32,105,115,32,97,108,114,101,97,100,
121,32,105,110,32,97,44,32,105,110,115,101,114,116,32,105,116,32,116,111,32,116,104,101,32,114,105,103,104,116,32,111,102,32,116,104,101,32,114,105,103,104,116,109,111,115,116,32,120,46,10,10,79,112,116,105,111,110,97,108,32,97,114,103,115,32,108,111,32,40,100,101,102,97,117,108,116,32,48,41,32,97,110,100,32,104,105,32,40,100,101,102,97,117,108,116,32,108,101,110,40,97,41,41,32,98,111,117,110,100,32,116,104,101,10,115,108,105,99,101,32,111,102,32,97,32,116,111,32,98,101,32,115,101,97,114,99,104,101,
100,46,10,0],"i8",ALLOC_NORMAL);s=allocate([79,79,124,110,110,58,98,105,115,101,99,116,95,108,101,102,116,0],"i8",ALLOC_NORMAL);t=allocate(20,"i8*",ALLOC_NORMAL);v=allocate([98,105,115,101,99,116,95,108,101,102,116,40,97,44,32,120,91,44,32,108,111,91,44,32,104,105,93,93,41,32,45,62,32,105,110,100,101,120,10,10,82,101,116,117,114,110,32,116,104,101,32,105,110,100,101,120,32,119,104,101,114,101,32,116,111,32,105,110,115,101,114,116,32,105,116,101,109,32,120,32,105,110,32,108,105,115,116,32,97,44,32,
97,115,115,117,109,105,110,103,32,97,32,105,115,32,115,111,114,116,101,100,46,10,10,84,104,101,32,114,101,116,117,114,110,32,118,97,108,117,101,32,105,32,105,115,32,115,117,99,104,32,116,104,97,116,32,97,108,108,32,101,32,105,110,32,97,91,58,105,93,32,104,97,118,101,32,101,32,60,32,120,44,32,97,110,100,32,97,108,108,32,101,32,105,110,10,97,91,105,58,93,32,104,97,118,101,32,101,32,62,61,32,120,46,32,32,83,111,32,105,102,32,120,32,97,108,114,101,97,100,121,32,97,112,112,101,97,114,115,32,105,110,32,
116,104,101,32,108,105,115,116,44,32,105,32,112,111,105,110,116,115,32,106,117,115,116,10,98,101,102,111,114,101,32,116,104,101,32,108,101,102,116,109,111,115,116,32,120,32,97,108,114,101,97,100,121,32,116,104,101,114,101,46,10,10,79,112,116,105,111,110,97,108,32,97,114,103,115,32,108,111,32,40,100,101,102,97,117,108,116,32,48,41,32,97,110,100,32,104,105,32,40,100,101,102,97,117,108,116,32,108,101,110,40,97,41,41,32,98,111,117,110,100,32,116,104,101,10,115,108,105,99,101,32,111,102,32,97,32,116,111,
32,98,101,32,115,101,97,114,99,104,101,100,46,10,0],"i8",ALLOC_NORMAL);w=allocate([79,79,124,110,110,58,105,110,115,111,114,116,95,108,101,102,116,0],"i8",ALLOC_NORMAL);x=allocate(20,"i8*",ALLOC_NORMAL);y=allocate([105,79,0],"i8",ALLOC_NORMAL);z=allocate([105,110,115,111,114,116,95,108,101,102,116,40,97,44,32,120,91,44,32,108,111,91,44,32,104,105,93,93,41,10,10,73,110,115,101,114,116,32,105,116,101,109,32,120,32,105,110,32,108,105,115,116,32,97,44,32,97,110,100,32,107,101,101,112,32,105,116,32,115,
111,114,116,101,100,32,97,115,115,117,109,105,110,103,32,97,32,105,115,32,115,111,114,116,101,100,46,10,10,73,102,32,120,32,105,115,32,97,108,114,101,97,100,121,32,105,110,32,97,44,32,105,110,115,101,114,116,32,105,116,32,116,111,32,116,104,101,32,108,101,102,116,32,111,102,32,116,104,101,32,108,101,102,116,109,111,115,116,32,120,46,10,10,79,112,116,105,111,110,97,108,32,97,114,103,115,32,108,111,32,40,100,101,102,97,117,108,116,32,48,41,32,97,110,100,32,104,105,32,40,100,101,102,97,117,108,116,32,
108,101,110,40,97,41,41,32,98,111,117,110,100,32,116,104,101,10,115,108,105,99,101,32,111,102,32,97,32,116,111,32,98,101,32,115,101,97,114,99,104,101,100,46,10,0],"i8",ALLOC_NORMAL);C=allocate([65,108,105,97,115,32,102,111,114,32,98,105,115,101,99,116,95,114,105,103,104,116,40,41,46,10,0],"i8",ALLOC_NORMAL);A=allocate([65,108,105,97,115,32,102,111,114,32,105,110,115,111,114,116,95,114,105,103,104,116,40,41,46,10,0],"i8",ALLOC_NORMAL);G=allocate([98,105,115,101,99,116,95,114,105,103,104,116,0],"i8",
ALLOC_NORMAL);E=allocate([98,105,115,101,99,116,0],"i8",ALLOC_NORMAL);D=allocate([105,110,115,111,114,116,95,114,105,103,104,116,0],"i8",ALLOC_NORMAL);R=allocate([105,110,115,111,114,116,0],"i8",ALLOC_NORMAL);M=allocate([98,105,115,101,99,116,95,108,101,102,116,0],"i8",ALLOC_NORMAL);L=allocate([105,110,115,111,114,116,95,108,101,102,116,0],"i8",ALLOC_NORMAL);I=allocate([0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,
0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"],ALLOC_NORMAL);J=allocate([66,105,115,101,99,116,105,111,110,32,97,108,103,111,114,105,116,104,109,115,46,10,10,84,104,105,115,32,109,111,100,117,108,101,32,112,114,111,118,105,
100,101,115,32,115,117,112,112,111,114,116,32,102,111,114,32,109,97,105,110,116,97,105,110,105,110,103,32,97,32,108,105,115,116,32,105,110,32,115,111,114,116,101,100,32,111,114,100,101,114,32,119,105,116,104,111,117,116,10,104,97,118,105,110,103,32,116,111,32,115,111,114,116,32,116,104,101,32,108,105,115,116,32,97,102,116,101,114,32,101,97,99,104,32,105,110,115,101,114,116,105,111,110,46,32,70,111,114,32,108,111,110,103,32,108,105,115,116,115,32,111,102,32,105,116,101,109,115,32,119,105,116,104,10,
101,120,112,101,110,115,105,118,101,32,99,111,109,112,97,114,105,115,111,110,32,111,112,101,114,97,116,105,111,110,115,44,32,116,104,105,115,32,99,97,110,32,98,101,32,97,110,32,105,109,112,114,111,118,101,109,101,110,116,32,111,118,101,114,32,116,104,101,32,109,111,114,101,10,99,111,109,109,111,110,32,97,112,112,114,111,97,99,104,46,10,0],"i8",ALLOC_NORMAL);F=allocate([95,98,105,115,101,99,116,0],"i8",ALLOC_NORMAL);HEAP[h]=j;HEAP[h+4]=k;HEAP[h+8]=l;HEAP[h+12]=m;HEAP[p]=j;HEAP[p+4]=k;HEAP[p+8]=l;HEAP[p+
12]=m;HEAP[t]=j;HEAP[t+4]=k;HEAP[t+8]=l;HEAP[t+12]=m;HEAP[x]=j;HEAP[x+4]=k;HEAP[x+8]=l;HEAP[x+12]=m;HEAP[I]=G;HEAP[I+4]=g+2;HEAP[I+12]=n;HEAP[I+16]=E;HEAP[I+20]=g+2;HEAP[I+28]=C;HEAP[I+32]=D;HEAP[I+36]=g+4;HEAP[I+44]=u;HEAP[I+48]=R;HEAP[I+52]=g+4;HEAP[I+60]=A;HEAP[I+64]=M;HEAP[I+68]=g+6;HEAP[I+76]=v;HEAP[I+80]=L;HEAP[I+84]=g+8;HEAP[I+92]=z}var c={arguments:[]},d,f,h,j,k,l,m,n,o,p,q,r,u,s,t,v,w,x,y,z,C,A,G,E,D,R,M,L,I,J,F;c._init_bisect=function(){_Py_InitModule4(F,I,J,0,1013)};FUNCTION_TABLE=FUNCTION_TABLE.concat([0,
0,function(a,b,c){a=STACKTOP;STACKTOP+=16;_memset(a,0,16);var d;for(d=-1;;)switch(d){case -1:var g,j,k=a,l=a+4,m=a+8,n=a+12,o;d=b;g=c;HEAP[m]=0;HEAP[n]=-1;d=_PyArg_ParseTupleAndKeywords(d,g,f,h,allocate([k,0,0,0,l,0,0,0,m,0,0,0,n,0,0,0],["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0,"i32*",0,0,0,"i32*",0,0,0],ALLOC_STACK))==0?1:2;break;case 1:j=0;d=5;break;case 2:o=e(HEAP[k],HEAP[l],HEAP[m],HEAP[n]);d=o<0?3:4;break;case 3:j=0;d=5;break;case 4:j=_PyInt_FromSsize_t(o);d=5;break;case 5:return b=
j,STACKTOP=a,b;default:assert(0,"bad label: "+d)}},0,function(a,b,c){a=STACKTOP;STACKTOP+=16;_memset(a,0,16);var d;for(d=-1;;)switch(d){case -1:var f,g,h=a,j=a+4,k,l=a+8,m=a+12,n;d=b;f=c;HEAP[l]=0;HEAP[m]=-1;d=_PyArg_ParseTupleAndKeywords(d,f,o,p,allocate([h,0,0,0,j,0,0,0,l,0,0,0,m,0,0,0],["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0,"i32*",0,0,0,"i32*",0,0,0],ALLOC_STACK))==0?1:2;break;case 1:g=0;d=12;break;case 2:n=e(HEAP[h],HEAP[j],HEAP[l],HEAP[m]);d=n<0?3:4;break;case 3:g=0;d=12;break;
case 4:var s=HEAP[j],t=HEAP[h],u=n;d=HEAP[HEAP[h]+4]==_PyList_Type?5:7;break;case 5:d=_PyList_Insert(t,u,s)<0?6:11;break;case 6:g=0;d=12;break;case 7:k=_PyObject_CallMethod(t,q,r,allocate([u,0,0,0,s,0,0,0],["i32",0,0,0,"%struct.PyObject*",0,0,0],ALLOC_STACK));d=k==0?8:9;break;case 8:g=0;d=12;break;case 9:HEAP[k]-=1;d=HEAP[k]==0?10:11;break;case 10:FUNCTION_TABLE[HEAP[HEAP[k+4]+24]](k);d=11;break;case 11:HEAP[__Py_NoneStruct]+=1;g=__Py_NoneStruct;d=12;break;case 12:return b=g,STACKTOP=a,b;default:assert(0,
"bad label: "+d)}},0,function(a,c,d){a=STACKTOP;STACKTOP+=16;_memset(a,0,16);var e;for(e=-1;;)switch(e){case -1:var f,g,h=a,j=a+4,k=a+8,l=a+12,m;e=c;f=d;HEAP[k]=0;HEAP[l]=-1;e=_PyArg_ParseTupleAndKeywords(e,f,s,t,allocate([h,0,0,0,j,0,0,0,k,0,0,0,l,0,0,0],["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0,"i32*",0,0,0,"i32*",0,0,0],ALLOC_STACK))==0?1:2;break;case 1:g=0;e=5;break;case 2:m=b(HEAP[h],HEAP[j],HEAP[k],HEAP[l]);e=m<0?3:4;break;case 3:g=0;e=5;break;case 4:g=_PyInt_FromSsize_t(m);e=5;
break;case 5:return c=g,STACKTOP=a,c;default:assert(0,"bad label: "+e)}},0,function(a,c,d){a=STACKTOP;STACKTOP+=16;_memset(a,0,16);var e;for(e=-1;;)switch(e){case -1:var f,g,h=a,j=a+4,k,l=a+8,m=a+12,n;e=c;f=d;HEAP[l]=0;HEAP[m]=-1;e=_PyArg_ParseTupleAndKeywords(e,f,w,x,allocate([h,0,0,0,j,0,0,0,l,0,0,0,m,0,0,0],["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0,"i32*",0,0,0,"i32*",0,0,0],ALLOC_STACK))==0?1:2;break;case 1:g=0;e=12;break;case 2:n=b(HEAP[h],HEAP[j],HEAP[l],HEAP[m]);e=n<0?3:4;break;
case 3:g=0;e=12;break;case 4:var o=HEAP[j],p=HEAP[h],r=n;e=HEAP[HEAP[h]+4]==_PyList_Type?5:7;break;case 5:e=_PyList_Insert(p,r,o)<0?6:11;break;case 6:g=0;e=12;break;case 7:k=_PyObject_CallMethod(p,q,y,allocate([r,0,0,0,o,0,0,0],["i32",0,0,0,"%struct.PyObject*",0,0,0],ALLOC_STACK));e=k==0?8:9;break;case 8:g=0;e=12;break;case 9:HEAP[k]-=1;e=HEAP[k]==0?10:11;break;case 10:FUNCTION_TABLE[HEAP[HEAP[k+4]+24]](k);e=11;break;case 11:HEAP[__Py_NoneStruct]+=1;g=__Py_NoneStruct;e=12;break;case 12:return c=g,
STACKTOP=a,c;default:assert(0,"bad label: "+e)}},0]);c.run=a;a();return c});