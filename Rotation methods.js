    function rotateZ3D(theta,nodes){
        var sinTheta=Math.sin(theta);
        var cosTheta=Math.cos(theta);
        for(var n=0;n<nodes.length;n++){
            var node=nodes[n];
            var x=node[0];
            var y=node[1];
            node[0]=x*cosTheta-y*sinTheta;
            node[1]=y*cosTheta+x*sinTheta;
        }
    }
    function rotateY3D(theta,nodes){
        var sinTheta=Math.sin(theta);
        var cosTheta=Math.cos(theta);
        for(var n=0;n<nodes.length;n++){
            var node=nodes[n];
            var x=node[0];
            var z=node[2];
            node[0]=x*cosTheta-z*sinTheta;
            node[2]=z*cosTheta+x*sinTheta;
        }
    }
    function rotateX3D(theta,nodes){
        var sinTheta=Math.sin(theta);
        var cosTheta=Math.cos(theta);
        for(var n=0;n<nodes.length;n++){
            var node=nodes[n];
            var z=node[2];
            var y=node[1];
            node[2]=z*cosTheta-y*sinTheta;
            node[1]=y*cosTheta+z*sinTheta;
        }
    }