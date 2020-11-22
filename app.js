
/*============= Creating a canvas ======================*/
var canvas = document.getElementById('my_Canvas');
gl = canvas.getContext('experimental-webgl');

/*========== Defining and storing the geometry ==========*/

var vertices = [];
var colors = [];
var indices = [];

//Adding the board
vertices = [
   -1,-0.2,-1, 1,-0.2,-1, 1, 0.2,-1, -1, 0.2,-1,
   -1,-0.2, 1, 1,-0.2, 1, 1, 0.2, 1, -1, 0.2, 1,
   -1,-0.2,-1, -1, 0.2,-1, -1, 0.2, 1, -1,-0.2, 1,
   1,-0.2,-1, 1, 0.2,-1, 1, 0.2, 1, 1,-0.2, 1,
   -1,-0.2,-1, -1,-0.2, 1, 1,-0.2, 1, 1,-0.2,-1,
   -1, 0.2,-1, -1, 0.2, 1, 1, 0.2, 1, 1, 0.2,-1, 
];

indices = [
   0,1,2, 0,2,3, 4,5,6, 4,6,7,
   8,9,10, 8,10,11, 12,13,14, 12,14,15,
   16,17,18, 16,18,19, 20,21,22, 20,22,23, 
];

var texCoor = [
	0.0,  0.0,
    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
    // Back
    0.9,  0.9,
    0.9,  0.9,
    0.9,  0.9,
    0.9,  0.9,
    // Top
    0.0,  0.0,
    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
    // Bottom
    0.0,  0.0,
    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
    // Right
    0.0,  0.0,
    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
    // Left
    0.0,  0.0,
    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
]

/*
//x and z of the center of the first cell
var xi = -1 + 1/8;
var zi = -1 + 1/8;
//distance between cells
var dc = 1/4;
//last vertex added
var lv = 23;

//animation movements
var pieces = [[6,1], [1,3], [6,2], [0,4]];
var dxa = [-2 * dc, 2*dc, -dc, 4*dc];
var dza = [0,0,0,-4*dc];
var vi = [0,0,0,0];
var vf = [0,0,0,0];

//Adding chess clock 

vertices = vertices.concat([0.5,0.2,-2, 0.5,0.2,-2.3, -0.5,0.2,-2, -0.5,0.2,-2.3,
	0.5,0.8,-2, 0.5,0.8,-2.3, -0.5,0.8,-2, -0.5,0.8,-2.3]);

colors = colors.concat( [0.39,0.26,0.12, 0.39,0.26,0.12, 0.39,0.26,0.12, 0.39,0.26,0.12,
	0.39,0.26,0.12, 0.39,0.26,0.12, 0.39,0.26,0.12, 0.39,0.26,0.12]);

indices = indices.concat( [lv + 1, lv + 2, lv + 3, lv + 2, lv + 3, lv + 4,
	lv + 1, lv + 2, lv + 5, lv + 2, lv + 5, lv + 6,
	lv + 2, lv + 4, lv + 6, lv + 4, lv + 6, lv + 8,
	lv + 3, lv + 4, lv + 7, lv + 4, lv + 7, lv + 8,
	lv + 1, lv + 3, lv + 5, lv + 3, lv + 5, lv + 7,
	lv + 5, lv + 6, lv + 7, lv + 6, lv + 7, lv + 8]);

	lv += 8;
//Adding rooks

var towerCells = [0,0, 0,7, 7,0, 7,7]
for(var i = 0; i < towerCells.length; i += 2){
	vertices = vertices.concat([xi + towerCells[i] * dc - 0.1, 0.2, zi + towerCells[i+1] * dc  - 0.1,
		xi + towerCells[i] * dc + 0.1, 0.2, zi + towerCells[i+1] * dc - 0.1,
		xi + towerCells[i] * dc - 0.1, 0.2, zi + towerCells[i+1] * dc + 0.1,
		xi + towerCells[i] * dc + 0.1, 0.2, zi + towerCells[i+1] * dc + 0.1,
		xi + towerCells[i] * dc - 0.1, 0.5, zi + towerCells[i+1] * dc - 0.1,
		xi + towerCells[i] * dc + 0.1, 0.5, zi + towerCells[i+1] * dc - 0.1,
		xi + towerCells[i] * dc - 0.1, 0.5, zi + towerCells[i+1] * dc + 0.1,
		xi + towerCells[i] * dc + 0.1, 0.5, zi + towerCells[i+1] * dc + 0.1,]);

	if(i<4){
		colors = colors.concat( [0.30,0.26,0.12, 0.30,0.26,0.12, 0.30,0.26,0.12, 0.30,0.26,0.12, 
			0.30,0.26,0.12, 0.30,0.26,0.12, 0.30,0.26,0.12, 0.30,0.26,0.12]);
	}
	else{
		colors = colors.concat( [1,0.992,0.74, 1,0.992,0.74, 1,0.992,0.74, 1,0.992,0.74, 
			1,0.992,0.74, 1,0.992,0.74, 1,0.992,0.74, 1,0.992,0.74]);
	}
	indices = indices.concat( [lv + 1, lv + 2, lv + 3, lv + 2, lv + 3, lv + 4,
		lv + 1, lv + 2, lv + 5, lv + 2, lv + 5, lv + 6,
		lv + 2, lv + 4, lv + 6, lv + 4, lv + 6, lv + 8,
		lv + 3, lv + 4, lv + 7, lv + 4, lv + 7, lv + 8,
		lv + 1, lv + 3, lv + 5, lv + 3, lv + 5, lv + 7,
		lv + 5, lv + 6, lv + 7, lv + 6, lv + 7, lv + 8]);
	lv += 8;
}

//Adding kings

var kingCells = [0,3, 7,3]
for(var i = 0; i < kingCells.length; i += 2){
	vertices = vertices.concat([xi + kingCells[i] * dc - 0.07, 0.2, zi + kingCells[i+1] * dc  - 0.07,
		xi + kingCells[i] * dc + 0.07, 0.2, zi + kingCells[i+1] * dc - 0.07,
		xi + kingCells[i] * dc - 0.07, 0.2, zi + kingCells[i+1] * dc + 0.07,
		xi + kingCells[i] * dc + 0.07, 0.2, zi + kingCells[i+1] * dc + 0.07,
		xi + kingCells[i] * dc - 0.07, 0.6, zi + kingCells[i+1] * dc - 0.07,
		xi + kingCells[i] * dc + 0.07, 0.6, zi + kingCells[i+1] * dc - 0.07,
		xi + kingCells[i] * dc - 0.07, 0.6, zi + kingCells[i+1] * dc + 0.07,
		xi + kingCells[i] * dc + 0.07, 0.6, zi + kingCells[i+1] * dc + 0.07,
	
		xi + kingCells[i] * dc - 0.07, 0.35, zi + kingCells[i+1] * dc  - 0.1,
		xi + kingCells[i] * dc + 0.07, 0.35, zi + kingCells[i+1] * dc - 0.1,
		xi + kingCells[i] * dc - 0.07, 0.35, zi + kingCells[i+1] * dc + 0.1,
		xi + kingCells[i] * dc + 0.07, 0.35, zi + kingCells[i+1] * dc + 0.1,
		xi + kingCells[i] * dc - 0.07, 0.45, zi + kingCells[i+1] * dc - 0.1,
		xi + kingCells[i] * dc + 0.07, 0.45, zi + kingCells[i+1] * dc - 0.1,
		xi + kingCells[i] * dc - 0.07, 0.45, zi + kingCells[i+1] * dc + 0.1,
		xi + kingCells[i] * dc + 0.07, 0.45, zi + kingCells[i+1] * dc + 0.1,]);

	if(i<2){
		colors = colors.concat( [0.30,0.26,0.12, 0.30,0.26,0.12, 0.30,0.26,0.12, 0.30,0.26,0.12, 
			0.30,0.26,0.12, 0.30,0.26,0.12, 0.30,0.26,0.12, 0.30,0.26,0.12,
			0.30,0.26,0.12, 0.30,0.26,0.12, 0.30,0.26,0.12, 0.30,0.26,0.12, 
			0.30,0.26,0.12, 0.30,0.26,0.12, 0.30,0.26,0.12, 0.30,0.26,0.12]);
	}
	else{
		colors = colors.concat( [1,0.992,0.74, 1,0.992,0.74, 1,0.992,0.74, 1,0.992,0.74, 
			1,0.992,0.74, 1,0.992,0.74, 1,0.992,0.74, 1,0.992,0.74,
			1,0.992,0.74, 1,0.992,0.74, 1,0.992,0.74, 1,0.992,0.74, 
			1,0.992,0.74, 1,0.992,0.74, 1,0.992,0.74, 1,0.992,0.74]);
	}
	indices = indices.concat( [lv + 1, lv + 2, lv + 3, lv + 2, lv + 3, lv + 4,
		lv + 1, lv + 2, lv + 5, lv + 2, lv + 5, lv + 6,
		lv + 2, lv + 4, lv + 6, lv + 4, lv + 6, lv + 8,
		lv + 3, lv + 4, lv + 7, lv + 4, lv + 7, lv + 8,
		lv + 1, lv + 3, lv + 5, lv + 3, lv + 5, lv + 7,
		lv + 5, lv + 6, lv + 7, lv + 6, lv + 7, lv + 8]);
	lv += 8;
	indices = indices.concat( [lv + 1, lv + 2, lv + 3, lv + 2, lv + 3, lv + 4,
		lv + 1, lv + 2, lv + 5, lv + 2, lv + 5, lv + 6,
		lv + 2, lv + 4, lv + 6, lv + 4, lv + 6, lv + 8,
		lv + 3, lv + 4, lv + 7, lv + 4, lv + 7, lv + 8,
		lv + 1, lv + 3, lv + 5, lv + 3, lv + 5, lv + 7,
		lv + 5, lv + 6, lv + 7, lv + 6, lv + 7, lv + 8]);
	lv += 8;
}

//Adding queens

var queenCells = [0,4, 7,4]
for(var i = 0; i < queenCells.length; i += 2){
	vertices = vertices.concat([xi + queenCells[i] * dc - 0.1, 0.2, zi + queenCells[i+1] * dc  - 0.1,
		xi + queenCells[i] * dc + 0.1, 0.2, zi + queenCells[i+1] * dc - 0.1,
		xi + queenCells[i] * dc - 0.1, 0.2, zi + queenCells[i+1] * dc + 0.1,
		xi + queenCells[i] * dc + 0.1, 0.2, zi + queenCells[i+1] * dc + 0.1,
		xi + queenCells[i] * dc - 0.1, 0.5, zi + queenCells[i+1] * dc - 0.1,
		xi + queenCells[i] * dc + 0.1, 0.5, zi + queenCells[i+1] * dc - 0.1,
		xi + queenCells[i] * dc - 0.1, 0.5, zi + queenCells[i+1] * dc + 0.1,
		xi + queenCells[i] * dc + 0.1, 0.5, zi + queenCells[i+1] * dc + 0.1,
		xi + queenCells[i] * dc - 0.1, 0.6, zi + queenCells[i+1] * dc,
		xi + queenCells[i] * dc + 0.1, 0.6, zi + queenCells[i+1] * dc,
		xi + queenCells[i] * dc, 0.6, zi + queenCells[i+1] * dc + 0.1,
		xi + queenCells[i] * dc, 0.6, zi + queenCells[i+1] * dc - 0.1]);

	if(i<2){
		colors = colors.concat( [0.30,0.26,0.12, 0.30,0.26,0.12, 0.30,0.26,0.12, 0.30,0.26,0.12, 
			0.30,0.26,0.12, 0.30,0.26,0.12, 0.30,0.26,0.12, 0.30,0.26,0.12,
			0.30,0.26,0.12, 0.30,0.26,0.12, 0.30,0.26,0.12, 0.30,0.26,0.12]);
	}
	else{
		colors = colors.concat( [1,0.992,0.74, 1,0.992,0.74, 1,0.992,0.74, 1,0.992,0.74, 
			1,0.992,0.74, 1,0.992,0.74, 1,0.992,0.74, 1,0.992,0.74,
			1,0.992,0.74, 1,0.992,0.74, 1,0.992,0.74, 1,0.992,0.74]);
	}
	
	if(i<0.5){
		vi[3] = lv+1;
		vf[3] = lv+12
	}
	indices = indices.concat( [lv + 1, lv + 2, lv + 3, lv + 2, lv + 3, lv + 4,
		lv + 1, lv + 2, lv + 5, lv + 2, lv + 5, lv + 6,
		lv + 2, lv + 4, lv + 6, lv + 4, lv + 6, lv + 8,
		lv + 3, lv + 4, lv + 7, lv + 4, lv + 7, lv + 8,
		lv + 1, lv + 3, lv + 5, lv + 3, lv + 5, lv + 7,
		lv + 5, lv + 6, lv + 7, lv + 6, lv + 7, lv + 8,
		lv + 5, lv + 7, lv + 9, lv + 6, lv + 8, lv + 10,
		lv + 5, lv + 6, lv + 12, lv + 11, lv + 7, lv + 8]);
	lv += 12;
}

//Adding bishops

var bishopCells = [0,2, 0,5, 7,2, 7,5];
for(var i = 0; i < bishopCells.length; i += 2){
	vertices = vertices.concat([xi + bishopCells[i] * dc - 0.1, 0.2, zi + bishopCells[i+1] * dc  - 0.1,
		xi + bishopCells[i] * dc + 0.1, 0.2, zi + bishopCells[i+1] * dc - 0.1,
		xi + bishopCells[i] * dc - 0.1, 0.2, zi + bishopCells[i+1] * dc + 0.1,
		xi + bishopCells[i] * dc + 0.1, 0.2, zi + bishopCells[i+1] * dc + 0.1,
		xi + bishopCells[i] * dc, 0.5, zi + bishopCells[i+1] * dc]);

	if(i<4){
		colors = colors.concat( [0.30,0.26,0.12, 0.30,0.26,0.12, 0.30,0.26,0.12, 0.30,0.26,0.12, 
			0.30,0.26,0.12]);
	}
	else{
		colors = colors.concat( [1,0.992,0.74, 1,0.992,0.74, 1,0.992,0.74, 1,0.992,0.74, 
			1,0.992,0.74]);
	}
	indices = indices.concat( [lv + 1, lv + 2, lv + 3, lv + 2, lv + 3, lv + 4,
		lv + 1, lv + 2, lv + 5, lv + 2, lv + 4, lv + 5,
		lv + 3, lv + 4, lv + 5, lv + 1, lv + 3, lv + 5]);
	lv += 5;
}

//Adding knights

var knightCells = [0,1, 0,6, 7,1, 7,6]
for(var i = 0; i < knightCells.length; i += 2){
	vertices = vertices.concat([xi + knightCells[i] * dc - 0.1, 0.43, zi + knightCells[i+1] * dc  - 0.1,
		xi + knightCells[i] * dc + 0.1, 0.43, zi + knightCells[i+1] * dc - 0.1,
		xi + knightCells[i] * dc - 0.1, 0.43, zi + knightCells[i+1] * dc + 0.1,
		xi + knightCells[i] * dc + 0.1, 0.43, zi + knightCells[i+1] * dc + 0.1,
		xi + knightCells[i] * dc - 0.1, 0.5, zi + knightCells[i+1] * dc - 0.1,
		xi + knightCells[i] * dc + 0.1, 0.5, zi + knightCells[i+1] * dc - 0.1,
		xi + knightCells[i] * dc - 0.1, 0.5, zi + knightCells[i+1] * dc + 0.1,
		xi + knightCells[i] * dc + 0.1, 0.5, zi + knightCells[i+1] * dc + 0.1,
	
		xi + knightCells[i] * dc - 0.1, 0.2, zi + knightCells[i+1] * dc  - 0.1,
		xi + knightCells[i] * dc + 0.1, 0.2, zi + knightCells[i+1] * dc - 0.1,
		xi + knightCells[i] * dc - 0.1, 0.2, zi + knightCells[i+1] * dc + 0.1,
		xi + knightCells[i] * dc + 0.1, 0.2, zi + knightCells[i+1] * dc + 0.1,
		xi + knightCells[i] * dc, 0.5, zi + knightCells[i+1] * dc]);

	if(i<4){
		colors = colors.concat( [0.30,0.26,0.12, 0.30,0.26,0.12, 0.30,0.26,0.12, 0.30,0.26,0.12, 
			0.30,0.26,0.12, 0.30,0.26,0.12, 0.30,0.26,0.12, 0.30,0.26,0.12,
			0.30,0.26,0.12, 0.30,0.26,0.12, 0.30,0.26,0.12, 0.30,0.26,0.12, 
			0.30,0.26,0.12]);
	}
	else{
		colors = colors.concat( [1,0.992,0.74, 1,0.992,0.74, 1,0.992,0.74, 1,0.992,0.74, 
			1,0.992,0.74, 1,0.992,0.74, 1,0.992,0.74, 1,0.992,0.74,
			1,0.992,0.74, 1,0.992,0.74, 1,0.992,0.74, 1,0.992,0.74, 
			1,0.992,0.74]);
	}
	indices = indices.concat( [lv + 1, lv + 2, lv + 3, lv + 2, lv + 3, lv + 4,
		lv + 1, lv + 2, lv + 5, lv + 2, lv + 5, lv + 6,
		lv + 2, lv + 4, lv + 6, lv + 4, lv + 6, lv + 8,
		lv + 3, lv + 4, lv + 7, lv + 4, lv + 7, lv + 8,
		lv + 1, lv + 3, lv + 5, lv + 3, lv + 5, lv + 7,
		lv + 5, lv + 6, lv + 7, lv + 6, lv + 7, lv + 8]);
	lv += 8;

	indices = indices.concat( [lv + 1, lv + 2, lv + 3, lv + 2, lv + 3, lv + 4,
		lv + 1, lv + 2, lv + 5, lv + 2, lv + 4, lv + 5,
		lv + 3, lv + 4, lv + 5, lv + 1, lv + 3, lv + 5]);
	lv += 5;
}

//Adding pawns

var pawnCells = [1,0, 1,1, 1,2, 1,3, 1,4, 1,5, 1,6, 1,7, 6,0, 6,1, 6,2, 6,3, 6,4, 6,5, 6,6, 6,7];

for(var i = 0; i < pawnCells.length; i += 2){
	vertices = vertices.concat([xi + pawnCells[i] * dc - 0.1, 0.2, zi + pawnCells[i+1] * dc  - 0.1,
		xi + pawnCells[i] * dc + 0.1, 0.2, zi + pawnCells[i+1] * dc - 0.1,
		xi + pawnCells[i] * dc - 0.1, 0.2, zi + pawnCells[i+1] * dc + 0.1,
		xi + pawnCells[i] * dc + 0.1, 0.2, zi + pawnCells[i+1] * dc + 0.1,
		xi + pawnCells[i] * dc, 0.35, zi + pawnCells[i+1] * dc]);

	if(i<16){
		colors = colors.concat( [0.30,0.26,0.12, 0.30,0.26,0.12, 0.30,0.26,0.12, 0.30,0.26,0.12, 
			0.30,0.26,0.12]);
	}
	else{
		colors = colors.concat( [1,0.992,0.74, 1,0.992,0.74, 1,0.992,0.74, 1,0.992,0.74, 
			1,0.992,0.74]);
	}

	for(var j = 0; j<3; j++){
		if(pawnCells[i] > pieces[j][0]-0.5 && pawnCells[i] < pieces[j][0]+0.5 && 
			pawnCells[i+1] > pieces[j][1]-0.5 && pawnCells[i+1] < pieces[j][1]+0.5){
				vi[j] = lv+1;
				vf[j] = lv+5;
			}
	}
	indices = indices.concat( [lv + 1, lv + 2, lv + 3, lv + 2, lv + 3, lv + 4,
		lv + 1, lv + 2, lv + 5, lv + 2, lv + 4, lv + 5,
		lv + 3, lv + 4, lv + 5, lv + 1, lv + 3, lv + 5]);
	lv += 5;
}

var cicle = [0, 0,
        0, 1,
        1, 0,
        0, 1,
        1, 1,
        1, 0,
 
        // top rung front
        0, 0,
        0, 1,
        1, 0,
        0, 1,
        1, 1,
        1, 0,]*/

var vertexNormals = [...vertices]

for(var i = 0;i< vertices.length; i+=3){
	vertices[i+1]-=1;
}

var originalVertices = [...vertices]

/*=================== SHADERS =================== */

var vertCode = 'attribute vec3 position;'+
   'uniform mat4 Pmatrix;'+
   'uniform mat4 Vmatrix;'+
   'uniform mat4 Mmatrix;'+
   'attribute vec2 a_texcoord;'+
   'varying vec2 v_texcoord;'+
   'attribute vec3 aVertexNormal;'+
   'varying highp vec3 vLighting;'+
   'void main(void) { '+//pre-built function
	  'gl_Position = Pmatrix*Vmatrix*Mmatrix*vec4(position, 1.);'+

	  'highp vec3 ambientLight = vec3(0.3, 0.3, 0.3);'+
	  'highp vec3 directionalLightColor = vec3(1, 1, 1);'+
	  'highp vec3 directionalVector = normalize(vec3(0.85, 0.8, 0.75));'+

	  'highp vec4 transformedNormal = Mmatrix * vec4(aVertexNormal, 1.0);'+
	  'highp float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);'+
	  'vLighting = ambientLight + (directionalLightColor * directional);'+
	  'v_texcoord = a_texcoord;'+
   '}';

var fragCode = 'precision mediump float;'+
   'varying vec2 v_texcoord;'+
   'uniform sampler2D u_texture;'+
   'varying highp vec3 vLighting;'+
   'void main(void) {'+
	  'highp vec4 texelColor = texture2D(u_texture, v_texcoord);'+
	  'gl_FragColor = vec4(texelColor.rgb * vLighting, texelColor.a);'+
   '}';

var vertShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertShader, vertCode);
gl.compileShader(vertShader);

var fragShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragShader, fragCode);
gl.compileShader(fragShader);

/*==================== MATRIX ====================== */

function get_projection(angle, a, zMin, zMax) {
   var ang = Math.tan((angle*.5)*Math.PI/180);//angle*.5
   return [
	  0.5/ang, 0 , 0, 0,
	  0, 0.5*a/ang, 0, 0,
	  0, 0, -(zMax+zMin)/(zMax-zMin), -1,
	  0, 0, (-2*zMax*zMin)/(zMax-zMin), 0 
	  ];
}

var proj_matrix = get_projection(40, canvas.width/canvas.height, 1, 100);
var mo_matrix = [ 1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1 ];
var view_matrix = [ 1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1 ];

view_matrix[14] = view_matrix[14]-6;

/*================= Mouse events ======================*/

var AMORTIZATION = 0.95;
var drag = false;
var old_x, old_y;
var dX = 0, dY = 0;

var mouseDown = function(e) {
   drag = true;
   old_x = e.pageX, old_y = e.pageY;
   e.preventDefault();
   return false;
};

var mouseUp = function(e){
   drag = false;
};

var mouseMove = function(e) {
   if (!drag) return false;
   dX = (e.pageX-old_x)*2*Math.PI/canvas.width,
   dY = (e.pageY-old_y)*2*Math.PI/canvas.height;
   THETA+= dX;
   PHI+=dY;
   old_x = e.pageX, old_y = e.pageY;
   e.preventDefault();
};

canvas.addEventListener("mousedown", mouseDown, false);
canvas.addEventListener("mouseup", mouseUp, false);
canvas.addEventListener("mouseout", mouseUp, false);
canvas.addEventListener("mousemove", mouseMove, false);

/*=========================rotation================*/

function rotateX(m, angle) {
   var c = Math.cos(angle);
   var s = Math.sin(angle);
   var mv1 = m[1], mv5 = m[5], mv9 = m[9];

   m[1] = m[1]*c-m[2]*s;
   m[5] = m[5]*c-m[6]*s;
   m[9] = m[9]*c-m[10]*s;

   m[2] = m[2]*c+mv1*s;
   m[6] = m[6]*c+mv5*s;
   m[10] = m[10]*c+mv9*s;
}

function rotateY(m, angle) {
   var c = Math.cos(angle);
   var s = Math.sin(angle);
   var mv0 = m[0], mv4 = m[4], mv8 = m[8];

   m[0] = c*m[0]+s*m[2];
   m[4] = c*m[4]+s*m[6];
   m[8] = c*m[8]+s*m[10];

   m[2] = c*m[2]-s*mv0;
   m[6] = c*m[6]-s*mv4;
   m[10] = c*m[10]-s*mv8;
}

var shaderprogram = gl.createProgram();
console.log(shaderprogram)
gl.attachShader(shaderprogram, vertShader);
gl.attachShader(shaderprogram, fragShader);
gl.linkProgram(shaderprogram);

/*=================== texture =================== */

    //
// Initialize a texture and load an image.
// When the image finished loading copy it into the texture.
//
function loadTexture(gl, url) {
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);

  // Because images have to be downloaded over the internet
  // they might take a moment until they are ready.
  // Until then put a single pixel in the texture so we can
  // use it immediately. When the image has finished downloading
  // we'll update the texture with the contents of the image.
  const level = 0;
  const internalFormat = gl.RGBA;
  const width = 1;
  const height = 1;
  const border = 0;
  const srcFormat = gl.RGBA;
  const srcType = gl.UNSIGNED_BYTE;
  const pixel = new Uint8Array([0, 0, 255, 255]);  // opaque blue
  gl.texImage2D(gl.TEXTURE_2D, level, internalFormat,
                width, height, border, srcFormat, srcType,
                pixel);

  const image = new Image();
  image.onload = function() {
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, level, internalFormat,
                  srcFormat, srcType, image);

    // WebGL1 has different requirements for power of 2 images
    // vs non power of 2 images so check if the image is a
    // power of 2 in both dimensions.
    if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
       // Yes, it's a power of 2. Generate mips.
       gl.generateMipmap(gl.TEXTURE_2D);
    } else {
       // No, it's not a power of 2. Turn off mips and set
       // wrapping to clamp to edge
       gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
       gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
       gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    }
  };
  image.src = url;

  return texture;
}

function isPowerOf2(value) {
  return (value & (value - 1)) == 0;
}

// gl.NEAREST is also allowed, instead of gl.LINEAR, as neither mipmap.
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
// Prevents s-coordinate wrapping (repeating).
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
// Prevents t-coordinate wrapping (repeating).
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

const texture = loadTexture(gl, 'board.jpg');

/*=================== Drawing =================== */

var THETA = 0,
PHI = 0;
var time_old = 0;
//animation state
var state = 0;

function modifyVertices(state, dt){
	var idx = -1;
	switch(state){
		case 1:
			idx = 0;
			break;

		case 3:
			idx = 1;
			break;
		
		case 5:
			idx = 2;
			break;

		case 7:
			idx = 3;
			break;
	}
	if(idx >= 0){
		for(var i = vi[idx]; i <= vf[idx]; i++){
			vertices[i*3] = originalVertices[i*3] + dt*dxa[idx];
			vertices[i*3+2] = originalVertices[i*3+2] + dt*dza[idx];
		}
	}
}

var animate = function(time) {

	var dt = time-time_old;

	if(dt>1000){
		time_old = time;
		state ++;
		if(state>=9){
			state = 0;
			vertices = [...originalVertices];
		}
	}

	if(dt<=1000){
		//modifyVertices(state, dt/1000);
	}
	
	gl.clearColor(0.5, 0.5, 0.5, 0.9);
	gl.clearDepth(1.0);
	gl.viewport(0.0, 0.0, canvas.width, canvas.height);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

	if (!drag) {
		dX *= AMORTIZATION, dY*=AMORTIZATION;
		THETA+=dX, PHI+=dY;
	 }
  
	 //set model matrix to I4
  
	 mo_matrix[0] = 1, mo_matrix[1] = 0, mo_matrix[2] = 0,
	 mo_matrix[3] = 0,
  
	 mo_matrix[4] = 0, mo_matrix[5] = 1, mo_matrix[6] = 0,
	 mo_matrix[7] = 0,
  
	 mo_matrix[8] = 0, mo_matrix[9] = 0, mo_matrix[10] = 1,
	 mo_matrix[11] = 0,
  
	 mo_matrix[12] = 0, mo_matrix[13] = 0, mo_matrix[14] = 0,
	 mo_matrix[15] = 1;
  
	 rotateY(mo_matrix, THETA);
	 rotateX(mo_matrix, PHI);

	// Create and store data into vertex buffer
	var vertex_buffer = gl.createBuffer ();
	gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

	// Create and store data into normal buffer
	var normal_buffer = gl.createBuffer ();
	gl.bindBuffer(gl.ARRAY_BUFFER, normal_buffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexNormals), gl.STATIC_DRAW);

	//texture
	var tex_buffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, tex_buffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texCoor), gl.STATIC_DRAW);

	// Create and store data into index buffer
	var index_buffer = gl.createBuffer ();
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, index_buffer);
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

	

	/*======== Associating attributes to vertex shader =====*/
	var _Pmatrix = gl.getUniformLocation(shaderprogram, "Pmatrix");
	var _Vmatrix = gl.getUniformLocation(shaderprogram, "Vmatrix");
	var _Mmatrix = gl.getUniformLocation(shaderprogram, "Mmatrix");

	gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
	var _position = gl.getAttribLocation(shaderprogram, "position");
	gl.vertexAttribPointer(_position, 3, gl.FLOAT, false,0,0);
	gl.enableVertexAttribArray(_position);

	//texture
	gl.bindBuffer(gl.ARRAY_BUFFER, tex_buffer);
	var texcoordLocation = gl.getAttribLocation(shaderprogram, "a_texcoord");
	// Create a buffer for texcoords.
	gl.enableVertexAttribArray(texcoordLocation);
	 
	// We'll supply texcoords as floats.
	gl.vertexAttribPointer(texcoordLocation, 2, gl.FLOAT, false, 0, 0);
	gl.useProgram(shaderprogram);

	gl.bindBuffer(gl.ARRAY_BUFFER, normal_buffer);
	var _normal = gl.getAttribLocation(shaderprogram, "aVertexNormal");
	gl.vertexAttribPointer(_normal, 3, gl.FLOAT, false,0,0) ;
	gl.enableVertexAttribArray(_normal);
	gl.useProgram(shaderprogram);

   gl.enable(gl.DEPTH_TEST);

   gl.uniformMatrix4fv(_Pmatrix, false, proj_matrix);
   gl.uniformMatrix4fv(_Vmatrix, false, view_matrix);
   gl.uniformMatrix4fv(_Mmatrix, false, mo_matrix);

   gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, index_buffer);
   gl.activeTexture(gl.TEXTURE0);
   gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);



   window.requestAnimationFrame(animate);
}
animate(0);