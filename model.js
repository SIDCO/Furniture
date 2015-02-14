/**
 ** FileName : 	Algo.js
 ** Author	:	Siddharth Bagai
 ** Description	:	Implementa all algorithms like Stress Major, Label repulsion
 **					Also provides symmetrix matrix implementation
 ** Date		:	06/12/2014
 **/
function create_geometry_0(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -612.000, -248.000, -459.000,
            612.000, -248.000, -459.000,
            -612.000, -229.000, -459.000,
            612.000, -229.000, -459.000,
            -612.000, -229.000, -459.000,
               612.000, -248.000, -459.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
               0.000, -0.000, 1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            612.000, -248.000, -459.000,
            612.000, -248.000, -500.000,
            612.000, -229.000, -459.000,
            612.000, -229.000, -500.000,
            612.000, -229.000, -459.000,
               612.000, -248.000, -500.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            1.000, -0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, 0.000,
               1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -612.000, -248.000, -500.000,
            -612.000, -248.000, -459.000,
            -612.000, -229.000, -500.000,
            -612.000, -229.000, -459.000,
            -612.000, -229.000, -500.000,
               -612.000, -248.000, -459.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, -0.000,
            -1.000, 0.000, 0.000,
               -1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            612.000, -248.000, -500.000,
            -612.000, -248.000, -500.000,
            612.000, -229.000, -500.000,
            -612.000, -229.000, -500.000,
            612.000, -229.000, -500.000,
               -612.000, -248.000, -500.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
               0.000, 0.000, -1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -612.000, -229.000, -459.000,
            612.000, -229.000, -459.000,
            -612.000, -229.000, -500.000,
            612.000, -229.000, -500.000,
            -612.000, -229.000, -500.000,
               612.000, -229.000, -459.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
               0.000, 1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -612.000, -248.000, -500.000,
            612.000, -248.000, -500.000,
            -612.000, -248.000, -459.000,
            612.000, -248.000, -459.000,
            -612.000, -248.000, -459.000,
               612.000, -248.000, -500.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
               0.000, -1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
function create_geometry_1(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -612.000, -250.000, -440.000,
            612.000, -250.000, -440.000,
            -612.000, 250.000, -440.000,
            612.000, 250.000, -440.000,
            -612.000, 250.000, -440.000,
               612.000, -250.000, -440.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
               0.000, -0.000, 1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            612.000, -250.000, -440.000,
            612.000, -250.000, -459.000,
            612.000, 250.000, -440.000,
            612.000, 250.000, -459.000,
            612.000, 250.000, -440.000,
               612.000, -250.000, -459.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            1.000, -0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, 0.000,
               1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -612.000, -250.000, -459.000,
            -612.000, -250.000, -440.000,
            -612.000, 250.000, -459.000,
            -612.000, 250.000, -440.000,
            -612.000, 250.000, -459.000,
               -612.000, -250.000, -440.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, -0.000,
            -1.000, 0.000, 0.000,
               -1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            612.000, -250.000, -459.000,
            -612.000, -250.000, -459.000,
            612.000, 250.000, -459.000,
            -612.000, 250.000, -459.000,
            612.000, 250.000, -459.000,
               -612.000, -250.000, -459.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
               0.000, 0.000, -1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -612.000, 250.000, -440.000,
            612.000, 250.000, -440.000,
            -612.000, 250.000, -459.000,
            612.000, 250.000, -459.000,
            -612.000, 250.000, -459.000,
               612.000, 250.000, -440.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
               0.000, 1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -612.000, -250.000, -459.000,
            612.000, -250.000, -459.000,
            -612.000, -250.000, -440.000,
            612.000, -250.000, -440.000,
            -612.000, -250.000, -440.000,
               612.000, -250.000, -459.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
               0.000, -1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
function create_geometry_2(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -650.000, -250.000, 500.000,
            650.000, -250.000, 500.000,
            -650.000, 250.000, 500.000,
            650.000, 250.000, 500.000,
            -650.000, 250.000, 500.000,
               650.000, -250.000, 500.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
               0.000, -0.000, 1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('wood.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            650.000, -250.000, 500.000,
            650.000, -250.000, 462.000,
            650.000, 250.000, 500.000,
            650.000, 250.000, 462.000,
            650.000, 250.000, 500.000,
               650.000, -250.000, 462.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            1.000, -0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, 0.000,
               1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('wood.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -650.000, -250.000, 462.000,
            -650.000, -250.000, 500.000,
            -650.000, 250.000, 462.000,
            -650.000, 250.000, 500.000,
            -650.000, 250.000, 462.000,
               -650.000, -250.000, 500.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, -0.000,
            -1.000, 0.000, 0.000,
               -1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('wood.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            650.000, -250.000, 462.000,
            -650.000, -250.000, 462.000,
            650.000, 250.000, 462.000,
            -650.000, 250.000, 462.000,
            650.000, 250.000, 462.000,
               -650.000, -250.000, 462.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
               0.000, 0.000, -1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('wood.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -650.000, 250.000, 500.000,
            650.000, 250.000, 500.000,
            -650.000, 250.000, 462.000,
            650.000, 250.000, 462.000,
            -650.000, 250.000, 462.000,
               650.000, 250.000, 500.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
               0.000, 1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('wood.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -650.000, -250.000, 462.000,
            650.000, -250.000, 462.000,
            -650.000, -250.000, 500.000,
            650.000, -250.000, 500.000,
            -650.000, -250.000, 500.000,
               650.000, -250.000, 462.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
               0.000, -1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('wood.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
function create_geometry_3(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -612.000, -150.000, -133.000,
            -9.500, -150.000, -133.000,
            -612.000, 230.000, -133.000,
            -9.500, 230.000, -133.000,
            -612.000, 230.000, -133.000,
               -9.500, -150.000, -133.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
               0.000, -0.000, 1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -9.500, -150.000, -133.000,
            -9.500, -150.000, -152.000,
            -9.500, 230.000, -133.000,
            -9.500, 230.000, -152.000,
            -9.500, 230.000, -133.000,
               -9.500, -150.000, -152.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            1.000, -0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, 0.000,
               1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -612.000, -150.000, -152.000,
            -612.000, -150.000, -133.000,
            -612.000, 230.000, -152.000,
            -612.000, 230.000, -133.000,
            -612.000, 230.000, -152.000,
               -612.000, -150.000, -133.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, -0.000,
            -1.000, 0.000, 0.000,
               -1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -9.500, -150.000, -152.000,
            -612.000, -150.000, -152.000,
            -9.500, 230.000, -152.000,
            -612.000, 230.000, -152.000,
            -9.500, 230.000, -152.000,
               -612.000, -150.000, -152.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
               0.000, 0.000, -1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -612.000, 230.000, -133.000,
            -9.500, 230.000, -133.000,
            -612.000, 230.000, -152.000,
            -9.500, 230.000, -152.000,
            -612.000, 230.000, -152.000,
               -9.500, 230.000, -133.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
               0.000, 1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -612.000, -150.000, -152.000,
            -9.500, -150.000, -152.000,
            -612.000, -150.000, -133.000,
            -9.500, -150.000, -133.000,
            -612.000, -150.000, -133.000,
               -9.500, -150.000, -152.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
               0.000, -1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
function create_geometry_4(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -612.000, -150.000, 174.000,
            -9.500, -150.000, 174.000,
            -612.000, 230.000, 174.000,
            -9.500, 230.000, 174.000,
            -612.000, 230.000, 174.000,
               -9.500, -150.000, 174.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
               0.000, -0.000, 1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -9.500, -150.000, 174.000,
            -9.500, -150.000, 155.000,
            -9.500, 230.000, 174.000,
            -9.500, 230.000, 155.000,
            -9.500, 230.000, 174.000,
               -9.500, -150.000, 155.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            1.000, -0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, 0.000,
               1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -612.000, -150.000, 155.000,
            -612.000, -150.000, 174.000,
            -612.000, 230.000, 155.000,
            -612.000, 230.000, 174.000,
            -612.000, 230.000, 155.000,
               -612.000, -150.000, 174.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, -0.000,
            -1.000, 0.000, 0.000,
               -1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -9.500, -150.000, 155.000,
            -612.000, -150.000, 155.000,
            -9.500, 230.000, 155.000,
            -612.000, 230.000, 155.000,
            -9.500, 230.000, 155.000,
               -612.000, -150.000, 155.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
               0.000, 0.000, -1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -612.000, 230.000, 174.000,
            -9.500, 230.000, 174.000,
            -612.000, 230.000, 155.000,
            -9.500, 230.000, 155.000,
            -612.000, 230.000, 155.000,
               -9.500, 230.000, 174.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
               0.000, 1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -612.000, -150.000, 155.000,
            -9.500, -150.000, 155.000,
            -612.000, -150.000, 174.000,
            -9.500, -150.000, 174.000,
            -612.000, -150.000, 174.000,
               -9.500, -150.000, 155.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
               0.000, -1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
function create_geometry_5(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -9.500, -250.000, 462.000,
            9.500, -250.000, 462.000,
            -9.500, 230.000, 462.000,
            9.500, 230.000, 462.000,
            -9.500, 230.000, 462.000,
               9.500, -250.000, 462.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
               0.000, -0.000, 1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            9.500, -250.000, 462.000,
            9.500, -250.000, -440.000,
            9.500, 230.000, 462.000,
            9.500, 230.000, -440.000,
            9.500, 230.000, 462.000,
               9.500, -250.000, -440.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            1.000, -0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, 0.000,
               1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -9.500, -250.000, -440.000,
            -9.500, -250.000, 462.000,
            -9.500, 230.000, -440.000,
            -9.500, 230.000, 462.000,
            -9.500, 230.000, -440.000,
               -9.500, -250.000, 462.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, -0.000,
            -1.000, 0.000, 0.000,
               -1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            9.500, -250.000, -440.000,
            -9.500, -250.000, -440.000,
            9.500, 230.000, -440.000,
            -9.500, 230.000, -440.000,
            9.500, 230.000, -440.000,
               -9.500, -250.000, -440.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
               0.000, 0.000, -1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -9.500, 230.000, 462.000,
            9.500, 230.000, 462.000,
            -9.500, 230.000, -440.000,
            9.500, 230.000, -440.000,
            -9.500, 230.000, -440.000,
               9.500, 230.000, 462.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
               0.000, 1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -9.500, -250.000, -440.000,
            9.500, -250.000, -440.000,
            -9.500, -250.000, 462.000,
            9.500, -250.000, 462.000,
            -9.500, -250.000, 462.000,
               9.500, -250.000, -440.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
               0.000, -1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
function create_geometry_6(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            38.500, -231.000, -422.000,
            583.000, -231.000, -422.000,
            38.500, 201.000, -422.000,
            583.000, 201.000, -422.000,
            38.500, 201.000, -422.000,
               583.000, -231.000, -422.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
               0.000, -0.000, 1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            583.000, -231.000, -422.000,
            583.000, -231.000, -430.000,
            583.000, 201.000, -422.000,
            583.000, 201.000, -430.000,
            583.000, 201.000, -422.000,
               583.000, -231.000, -430.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            1.000, -0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, 0.000,
               1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            38.500, -231.000, -430.000,
            38.500, -231.000, -422.000,
            38.500, 201.000, -430.000,
            38.500, 201.000, -422.000,
            38.500, 201.000, -430.000,
               38.500, -231.000, -422.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, -0.000,
            -1.000, 0.000, 0.000,
               -1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            583.000, -231.000, -430.000,
            38.500, -231.000, -430.000,
            583.000, 201.000, -430.000,
            38.500, 201.000, -430.000,
            583.000, 201.000, -430.000,
               38.500, -231.000, -430.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
               0.000, 0.000, -1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            38.500, 201.000, -422.000,
            583.000, 201.000, -422.000,
            38.500, 201.000, -430.000,
            583.000, 201.000, -430.000,
            38.500, 201.000, -430.000,
               583.000, 201.000, -422.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
               0.000, 1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            38.500, -231.000, -430.000,
            583.000, -231.000, -430.000,
            38.500, -231.000, -422.000,
            583.000, -231.000, -422.000,
            38.500, -231.000, -422.000,
               583.000, -231.000, -430.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
               0.000, -1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
function create_geometry_7(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            583.000, -231.000, -169.333,
            602.000, -231.000, -169.333,
            583.000, 201.000, -169.333,
            602.000, 201.000, -169.333,
            583.000, 201.000, -169.333,
               602.000, -231.000, -169.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
               0.000, -0.000, 1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            602.000, -231.000, -169.333,
            602.000, -231.000, -430.000,
            602.000, 201.000, -169.333,
            602.000, 201.000, -430.000,
            602.000, 201.000, -169.333,
               602.000, -231.000, -430.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            1.000, -0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, 0.000,
               1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            583.000, -231.000, -430.000,
            583.000, -231.000, -169.333,
            583.000, 201.000, -430.000,
            583.000, 201.000, -169.333,
            583.000, 201.000, -430.000,
               583.000, -231.000, -169.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, -0.000,
            -1.000, 0.000, 0.000,
               -1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            602.000, -231.000, -430.000,
            583.000, -231.000, -430.000,
            602.000, 201.000, -430.000,
            583.000, 201.000, -430.000,
            602.000, 201.000, -430.000,
               583.000, -231.000, -430.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
               0.000, 0.000, -1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            583.000, 201.000, -169.333,
            602.000, 201.000, -169.333,
            583.000, 201.000, -430.000,
            602.000, 201.000, -430.000,
            583.000, 201.000, -430.000,
               602.000, 201.000, -169.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
               0.000, 1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            583.000, -231.000, -430.000,
            602.000, -231.000, -430.000,
            583.000, -231.000, -169.333,
            602.000, -231.000, -169.333,
            583.000, -231.000, -169.333,
               602.000, -231.000, -430.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
               0.000, -1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
function create_geometry_8(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            19.500, -231.000, -169.333,
            38.500, -231.000, -169.333,
            19.500, 201.000, -169.333,
            38.500, 201.000, -169.333,
            19.500, 201.000, -169.333,
               38.500, -231.000, -169.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
               0.000, -0.000, 1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            38.500, -231.000, -169.333,
            38.500, -231.000, -430.000,
            38.500, 201.000, -169.333,
            38.500, 201.000, -430.000,
            38.500, 201.000, -169.333,
               38.500, -231.000, -430.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            1.000, -0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, 0.000,
               1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            19.500, -231.000, -430.000,
            19.500, -231.000, -169.333,
            19.500, 201.000, -430.000,
            19.500, 201.000, -169.333,
            19.500, 201.000, -430.000,
               19.500, -231.000, -169.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, -0.000,
            -1.000, 0.000, 0.000,
               -1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            38.500, -231.000, -430.000,
            19.500, -231.000, -430.000,
            38.500, 201.000, -430.000,
            19.500, 201.000, -430.000,
            38.500, 201.000, -430.000,
               19.500, -231.000, -430.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
               0.000, 0.000, -1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            19.500, 201.000, -169.333,
            38.500, 201.000, -169.333,
            19.500, 201.000, -430.000,
            38.500, 201.000, -430.000,
            19.500, 201.000, -430.000,
               38.500, 201.000, -169.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
               0.000, 1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            19.500, -231.000, -430.000,
            38.500, -231.000, -430.000,
            19.500, -231.000, -169.333,
            38.500, -231.000, -169.333,
            19.500, -231.000, -169.333,
               38.500, -231.000, -430.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
               0.000, -1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
function create_geometry_9(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            19.500, 201.000, -169.333,
            602.000, 201.000, -169.333,
            19.500, 220.000, -169.333,
            602.000, 220.000, -169.333,
            19.500, 220.000, -169.333,
               602.000, 201.000, -169.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
               0.000, -0.000, 1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            602.000, 201.000, -169.333,
            602.000, 201.000, -430.000,
            602.000, 220.000, -169.333,
            602.000, 220.000, -430.000,
            602.000, 220.000, -169.333,
               602.000, 201.000, -430.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            1.000, -0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, 0.000,
               1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            19.500, 201.000, -430.000,
            19.500, 201.000, -169.333,
            19.500, 220.000, -430.000,
            19.500, 220.000, -169.333,
            19.500, 220.000, -430.000,
               19.500, 201.000, -169.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, -0.000,
            -1.000, 0.000, 0.000,
               -1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            602.000, 201.000, -430.000,
            19.500, 201.000, -430.000,
            602.000, 220.000, -430.000,
            19.500, 220.000, -430.000,
            602.000, 220.000, -430.000,
               19.500, 201.000, -430.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
               0.000, 0.000, -1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            19.500, 220.000, -169.333,
            602.000, 220.000, -169.333,
            19.500, 220.000, -430.000,
            602.000, 220.000, -430.000,
            19.500, 220.000, -430.000,
               602.000, 220.000, -169.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
               0.000, 1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            19.500, 201.000, -430.000,
            602.000, 201.000, -430.000,
            19.500, 201.000, -169.333,
            602.000, 201.000, -169.333,
            19.500, 201.000, -169.333,
               602.000, 201.000, -430.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
               0.000, -1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
function create_geometry_10(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            12.500, -250.000, -140.833,
            609.000, -250.000, -140.833,
            12.500, -231.000, -140.833,
            609.000, -231.000, -140.833,
            12.500, -231.000, -140.833,
               609.000, -250.000, -140.833
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
               0.000, -0.000, 1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            609.000, -250.000, -140.833,
            609.000, -250.000, -437.000,
            609.000, -231.000, -140.833,
            609.000, -231.000, -437.000,
            609.000, -231.000, -140.833,
               609.000, -250.000, -437.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            1.000, -0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, 0.000,
               1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            12.500, -250.000, -437.000,
            12.500, -250.000, -140.833,
            12.500, -231.000, -437.000,
            12.500, -231.000, -140.833,
            12.500, -231.000, -437.000,
               12.500, -250.000, -140.833
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, -0.000,
            -1.000, 0.000, 0.000,
               -1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            609.000, -250.000, -437.000,
            12.500, -250.000, -437.000,
            609.000, -231.000, -437.000,
            12.500, -231.000, -437.000,
            609.000, -231.000, -437.000,
               12.500, -250.000, -437.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
               0.000, 0.000, -1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            12.500, -231.000, -140.833,
            609.000, -231.000, -140.833,
            12.500, -231.000, -437.000,
            609.000, -231.000, -437.000,
            12.500, -231.000, -437.000,
               609.000, -231.000, -140.833
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
               0.000, 1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            12.500, -250.000, -437.000,
            609.000, -250.000, -437.000,
            12.500, -250.000, -140.833,
            609.000, -250.000, -140.833,
            12.500, -250.000, -140.833,
               609.000, -250.000, -437.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
               0.000, -1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
function create_geometry_11(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            38.500, -231.000, -121.333,
            583.000, -231.000, -121.333,
            38.500, 201.000, -121.333,
            583.000, 201.000, -121.333,
            38.500, 201.000, -121.333,
               583.000, -231.000, -121.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
               0.000, -0.000, 1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            583.000, -231.000, -121.333,
            583.000, -231.000, -129.333,
            583.000, 201.000, -121.333,
            583.000, 201.000, -129.333,
            583.000, 201.000, -121.333,
               583.000, -231.000, -129.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            1.000, -0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, 0.000,
               1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            38.500, -231.000, -129.333,
            38.500, -231.000, -121.333,
            38.500, 201.000, -129.333,
            38.500, 201.000, -121.333,
            38.500, 201.000, -129.333,
               38.500, -231.000, -121.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, -0.000,
            -1.000, 0.000, 0.000,
               -1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            583.000, -231.000, -129.333,
            38.500, -231.000, -129.333,
            583.000, 201.000, -129.333,
            38.500, 201.000, -129.333,
            583.000, 201.000, -129.333,
               38.500, -231.000, -129.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
               0.000, 0.000, -1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            38.500, 201.000, -121.333,
            583.000, 201.000, -121.333,
            38.500, 201.000, -129.333,
            583.000, 201.000, -129.333,
            38.500, 201.000, -129.333,
               583.000, 201.000, -121.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
               0.000, 1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            38.500, -231.000, -129.333,
            583.000, -231.000, -129.333,
            38.500, -231.000, -121.333,
            583.000, -231.000, -121.333,
            38.500, -231.000, -121.333,
               583.000, -231.000, -129.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
               0.000, -1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
function create_geometry_12(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            583.000, -231.000, 131.333,
            602.000, -231.000, 131.333,
            583.000, 201.000, 131.333,
            602.000, 201.000, 131.333,
            583.000, 201.000, 131.333,
               602.000, -231.000, 131.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
               0.000, -0.000, 1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            602.000, -231.000, 131.333,
            602.000, -231.000, -129.333,
            602.000, 201.000, 131.333,
            602.000, 201.000, -129.333,
            602.000, 201.000, 131.333,
               602.000, -231.000, -129.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            1.000, -0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, 0.000,
               1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            583.000, -231.000, -129.333,
            583.000, -231.000, 131.333,
            583.000, 201.000, -129.333,
            583.000, 201.000, 131.333,
            583.000, 201.000, -129.333,
               583.000, -231.000, 131.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, -0.000,
            -1.000, 0.000, 0.000,
               -1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            602.000, -231.000, -129.333,
            583.000, -231.000, -129.333,
            602.000, 201.000, -129.333,
            583.000, 201.000, -129.333,
            602.000, 201.000, -129.333,
               583.000, -231.000, -129.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
               0.000, 0.000, -1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            583.000, 201.000, 131.333,
            602.000, 201.000, 131.333,
            583.000, 201.000, -129.333,
            602.000, 201.000, -129.333,
            583.000, 201.000, -129.333,
               602.000, 201.000, 131.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
               0.000, 1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            583.000, -231.000, -129.333,
            602.000, -231.000, -129.333,
            583.000, -231.000, 131.333,
            602.000, -231.000, 131.333,
            583.000, -231.000, 131.333,
               602.000, -231.000, -129.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
               0.000, -1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
function create_geometry_13(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            19.500, -231.000, 131.333,
            38.500, -231.000, 131.333,
            19.500, 201.000, 131.333,
            38.500, 201.000, 131.333,
            19.500, 201.000, 131.333,
               38.500, -231.000, 131.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
               0.000, -0.000, 1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            38.500, -231.000, 131.333,
            38.500, -231.000, -129.333,
            38.500, 201.000, 131.333,
            38.500, 201.000, -129.333,
            38.500, 201.000, 131.333,
               38.500, -231.000, -129.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            1.000, -0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, 0.000,
               1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            19.500, -231.000, -129.333,
            19.500, -231.000, 131.333,
            19.500, 201.000, -129.333,
            19.500, 201.000, 131.333,
            19.500, 201.000, -129.333,
               19.500, -231.000, 131.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, -0.000,
            -1.000, 0.000, 0.000,
               -1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            38.500, -231.000, -129.333,
            19.500, -231.000, -129.333,
            38.500, 201.000, -129.333,
            19.500, 201.000, -129.333,
            38.500, 201.000, -129.333,
               19.500, -231.000, -129.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
               0.000, 0.000, -1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            19.500, 201.000, 131.333,
            38.500, 201.000, 131.333,
            19.500, 201.000, -129.333,
            38.500, 201.000, -129.333,
            19.500, 201.000, -129.333,
               38.500, 201.000, 131.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
               0.000, 1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            19.500, -231.000, -129.333,
            38.500, -231.000, -129.333,
            19.500, -231.000, 131.333,
            38.500, -231.000, 131.333,
            19.500, -231.000, 131.333,
               38.500, -231.000, -129.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
               0.000, -1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
function create_geometry_14(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            19.500, 201.000, 131.333,
            602.000, 201.000, 131.333,
            19.500, 220.000, 131.333,
            602.000, 220.000, 131.333,
            19.500, 220.000, 131.333,
               602.000, 201.000, 131.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
               0.000, -0.000, 1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            602.000, 201.000, 131.333,
            602.000, 201.000, -129.333,
            602.000, 220.000, 131.333,
            602.000, 220.000, -129.333,
            602.000, 220.000, 131.333,
               602.000, 201.000, -129.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            1.000, -0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, 0.000,
               1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            19.500, 201.000, -129.333,
            19.500, 201.000, 131.333,
            19.500, 220.000, -129.333,
            19.500, 220.000, 131.333,
            19.500, 220.000, -129.333,
               19.500, 201.000, 131.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, -0.000,
            -1.000, 0.000, 0.000,
               -1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            602.000, 201.000, -129.333,
            19.500, 201.000, -129.333,
            602.000, 220.000, -129.333,
            19.500, 220.000, -129.333,
            602.000, 220.000, -129.333,
               19.500, 201.000, -129.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
               0.000, 0.000, -1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            19.500, 220.000, 131.333,
            602.000, 220.000, 131.333,
            19.500, 220.000, -129.333,
            602.000, 220.000, -129.333,
            19.500, 220.000, -129.333,
               602.000, 220.000, 131.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
               0.000, 1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            19.500, 201.000, -129.333,
            602.000, 201.000, -129.333,
            19.500, 201.000, 131.333,
            602.000, 201.000, 131.333,
            19.500, 201.000, 131.333,
               602.000, 201.000, -129.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
               0.000, -1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
function create_geometry_15(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            12.500, -250.000, 159.833,
            609.000, -250.000, 159.833,
            12.500, -231.000, 159.833,
            609.000, -231.000, 159.833,
            12.500, -231.000, 159.833,
               609.000, -250.000, 159.833
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
               0.000, -0.000, 1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            609.000, -250.000, 159.833,
            609.000, -250.000, -137.833,
            609.000, -231.000, 159.833,
            609.000, -231.000, -137.833,
            609.000, -231.000, 159.833,
               609.000, -250.000, -137.833
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            1.000, -0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, 0.000,
               1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            12.500, -250.000, -137.833,
            12.500, -250.000, 159.833,
            12.500, -231.000, -137.833,
            12.500, -231.000, 159.833,
            12.500, -231.000, -137.833,
               12.500, -250.000, 159.833
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, -0.000,
            -1.000, 0.000, 0.000,
               -1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            609.000, -250.000, -137.833,
            12.500, -250.000, -137.833,
            609.000, -231.000, -137.833,
            12.500, -231.000, -137.833,
            609.000, -231.000, -137.833,
               12.500, -250.000, -137.833
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
               0.000, 0.000, -1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            12.500, -231.000, 159.833,
            609.000, -231.000, 159.833,
            12.500, -231.000, -137.833,
            609.000, -231.000, -137.833,
            12.500, -231.000, -137.833,
               609.000, -231.000, 159.833
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
               0.000, 1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            12.500, -250.000, -137.833,
            609.000, -250.000, -137.833,
            12.500, -250.000, 159.833,
            609.000, -250.000, 159.833,
            12.500, -250.000, 159.833,
               609.000, -250.000, -137.833
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
               0.000, -1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
function create_geometry_16(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            38.500, -231.000, 179.333,
            583.000, -231.000, 179.333,
            38.500, 201.000, 179.333,
            583.000, 201.000, 179.333,
            38.500, 201.000, 179.333,
               583.000, -231.000, 179.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
               0.000, -0.000, 1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            583.000, -231.000, 179.333,
            583.000, -231.000, 171.333,
            583.000, 201.000, 179.333,
            583.000, 201.000, 171.333,
            583.000, 201.000, 179.333,
               583.000, -231.000, 171.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            1.000, -0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, 0.000,
               1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            38.500, -231.000, 171.333,
            38.500, -231.000, 179.333,
            38.500, 201.000, 171.333,
            38.500, 201.000, 179.333,
            38.500, 201.000, 171.333,
               38.500, -231.000, 179.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, -0.000,
            -1.000, 0.000, 0.000,
               -1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            583.000, -231.000, 171.333,
            38.500, -231.000, 171.333,
            583.000, 201.000, 171.333,
            38.500, 201.000, 171.333,
            583.000, 201.000, 171.333,
               38.500, -231.000, 171.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
               0.000, 0.000, -1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            38.500, 201.000, 179.333,
            583.000, 201.000, 179.333,
            38.500, 201.000, 171.333,
            583.000, 201.000, 171.333,
            38.500, 201.000, 171.333,
               583.000, 201.000, 179.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
               0.000, 1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            38.500, -231.000, 171.333,
            583.000, -231.000, 171.333,
            38.500, -231.000, 179.333,
            583.000, -231.000, 179.333,
            38.500, -231.000, 179.333,
               583.000, -231.000, 171.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
               0.000, -1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
function create_geometry_17(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            583.000, -231.000, 432.000,
            602.000, -231.000, 432.000,
            583.000, 201.000, 432.000,
            602.000, 201.000, 432.000,
            583.000, 201.000, 432.000,
               602.000, -231.000, 432.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
               0.000, -0.000, 1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            602.000, -231.000, 432.000,
            602.000, -231.000, 171.333,
            602.000, 201.000, 432.000,
            602.000, 201.000, 171.333,
            602.000, 201.000, 432.000,
               602.000, -231.000, 171.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            1.000, -0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, 0.000,
               1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            583.000, -231.000, 171.333,
            583.000, -231.000, 432.000,
            583.000, 201.000, 171.333,
            583.000, 201.000, 432.000,
            583.000, 201.000, 171.333,
               583.000, -231.000, 432.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, -0.000,
            -1.000, 0.000, 0.000,
               -1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            602.000, -231.000, 171.333,
            583.000, -231.000, 171.333,
            602.000, 201.000, 171.333,
            583.000, 201.000, 171.333,
            602.000, 201.000, 171.333,
               583.000, -231.000, 171.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
               0.000, 0.000, -1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            583.000, 201.000, 432.000,
            602.000, 201.000, 432.000,
            583.000, 201.000, 171.333,
            602.000, 201.000, 171.333,
            583.000, 201.000, 171.333,
               602.000, 201.000, 432.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
               0.000, 1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            583.000, -231.000, 171.333,
            602.000, -231.000, 171.333,
            583.000, -231.000, 432.000,
            602.000, -231.000, 432.000,
            583.000, -231.000, 432.000,
               602.000, -231.000, 171.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
               0.000, -1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
function create_geometry_18(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            19.500, -231.000, 432.000,
            38.500, -231.000, 432.000,
            19.500, 201.000, 432.000,
            38.500, 201.000, 432.000,
            19.500, 201.000, 432.000,
               38.500, -231.000, 432.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
               0.000, -0.000, 1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            38.500, -231.000, 432.000,
            38.500, -231.000, 171.333,
            38.500, 201.000, 432.000,
            38.500, 201.000, 171.333,
            38.500, 201.000, 432.000,
               38.500, -231.000, 171.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            1.000, -0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, 0.000,
               1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            19.500, -231.000, 171.333,
            19.500, -231.000, 432.000,
            19.500, 201.000, 171.333,
            19.500, 201.000, 432.000,
            19.500, 201.000, 171.333,
               19.500, -231.000, 432.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, -0.000,
            -1.000, 0.000, 0.000,
               -1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            38.500, -231.000, 171.333,
            19.500, -231.000, 171.333,
            38.500, 201.000, 171.333,
            19.500, 201.000, 171.333,
            38.500, 201.000, 171.333,
               19.500, -231.000, 171.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
               0.000, 0.000, -1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            19.500, 201.000, 432.000,
            38.500, 201.000, 432.000,
            19.500, 201.000, 171.333,
            38.500, 201.000, 171.333,
            19.500, 201.000, 171.333,
               38.500, 201.000, 432.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
               0.000, 1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            19.500, -231.000, 171.333,
            38.500, -231.000, 171.333,
            19.500, -231.000, 432.000,
            38.500, -231.000, 432.000,
            19.500, -231.000, 432.000,
               38.500, -231.000, 171.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
               0.000, -1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
function create_geometry_19(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            19.500, 201.000, 432.000,
            602.000, 201.000, 432.000,
            19.500, 220.000, 432.000,
            602.000, 220.000, 432.000,
            19.500, 220.000, 432.000,
               602.000, 201.000, 432.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
               0.000, -0.000, 1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            602.000, 201.000, 432.000,
            602.000, 201.000, 171.333,
            602.000, 220.000, 432.000,
            602.000, 220.000, 171.333,
            602.000, 220.000, 432.000,
               602.000, 201.000, 171.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            1.000, -0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, 0.000,
               1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            19.500, 201.000, 171.333,
            19.500, 201.000, 432.000,
            19.500, 220.000, 171.333,
            19.500, 220.000, 432.000,
            19.500, 220.000, 171.333,
               19.500, 201.000, 432.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, -0.000,
            -1.000, 0.000, 0.000,
               -1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            602.000, 201.000, 171.333,
            19.500, 201.000, 171.333,
            602.000, 220.000, 171.333,
            19.500, 220.000, 171.333,
            602.000, 220.000, 171.333,
               19.500, 201.000, 171.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
               0.000, 0.000, -1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            19.500, 220.000, 432.000,
            602.000, 220.000, 432.000,
            19.500, 220.000, 171.333,
            602.000, 220.000, 171.333,
            19.500, 220.000, 171.333,
               602.000, 220.000, 432.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
               0.000, 1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            19.500, 201.000, 171.333,
            602.000, 201.000, 171.333,
            19.500, 201.000, 432.000,
            602.000, 201.000, 432.000,
            19.500, 201.000, 432.000,
               602.000, 201.000, 171.333
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
               0.000, -1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
function create_geometry_20(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            12.500, -250.000, 459.000,
            609.000, -250.000, 459.000,
            12.500, -231.000, 459.000,
            609.000, -231.000, 459.000,
            12.500, -231.000, 459.000,
               609.000, -250.000, 459.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
               0.000, -0.000, 1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            609.000, -250.000, 459.000,
            609.000, -250.000, 162.833,
            609.000, -231.000, 459.000,
            609.000, -231.000, 162.833,
            609.000, -231.000, 459.000,
               609.000, -250.000, 162.833
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            1.000, -0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, 0.000,
               1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            12.500, -250.000, 162.833,
            12.500, -250.000, 459.000,
            12.500, -231.000, 162.833,
            12.500, -231.000, 459.000,
            12.500, -231.000, 162.833,
               12.500, -250.000, 459.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, -0.000,
            -1.000, 0.000, 0.000,
               -1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            609.000, -250.000, 162.833,
            12.500, -250.000, 162.833,
            609.000, -231.000, 162.833,
            12.500, -231.000, 162.833,
            609.000, -231.000, 162.833,
               12.500, -250.000, 162.833
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
               0.000, 0.000, -1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            12.500, -231.000, 459.000,
            609.000, -231.000, 459.000,
            12.500, -231.000, 162.833,
            609.000, -231.000, 162.833,
            12.500, -231.000, 162.833,
               609.000, -231.000, 459.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
               0.000, 1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            12.500, -250.000, 162.833,
            609.000, -250.000, 162.833,
            12.500, -250.000, 459.000,
            609.000, -250.000, 459.000,
            12.500, -250.000, 459.000,
               609.000, -250.000, 162.833
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
               0.000, -1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
function create_geometry_21(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -617.000, 230.000, 486.000,
            617.000, 230.000, 486.000,
            -617.000, 238.000, 486.000,
            617.000, 238.000, 486.000,
            -617.000, 238.000, 486.000,
               617.000, 230.000, 486.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
               0.000, -0.000, 1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            617.000, 230.000, 486.000,
            617.000, 230.000, -445.000,
            617.000, 238.000, 486.000,
            617.000, 238.000, -445.000,
            617.000, 238.000, 486.000,
               617.000, 230.000, -445.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            1.000, -0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, 0.000,
               1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -617.000, 230.000, -445.000,
            -617.000, 230.000, 486.000,
            -617.000, 238.000, -445.000,
            -617.000, 238.000, 486.000,
            -617.000, 238.000, -445.000,
               -617.000, 230.000, 486.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, -0.000,
            -1.000, 0.000, 0.000,
               -1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            617.000, 230.000, -445.000,
            -617.000, 230.000, -445.000,
            617.000, 238.000, -445.000,
            -617.000, 238.000, -445.000,
            617.000, 238.000, -445.000,
               -617.000, 230.000, -445.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
               0.000, 0.000, -1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -617.000, 238.000, 486.000,
            617.000, 238.000, 486.000,
            -617.000, 238.000, -445.000,
            617.000, 238.000, -445.000,
            -617.000, 238.000, -445.000,
               617.000, 238.000, 486.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
               0.000, 1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -617.000, 230.000, -445.000,
            617.000, 230.000, -445.000,
            -617.000, 230.000, 486.000,
            617.000, 230.000, 486.000,
            -617.000, 230.000, 486.000,
               617.000, 230.000, -445.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
               0.000, -1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('white.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
function create_geometry_22(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -650.000, -250.000, 462.000,
            -612.000, -250.000, 462.000,
            -650.000, 250.000, 462.000,
            -612.000, 250.000, 462.000,
            -650.000, 250.000, 462.000,
               -612.000, -250.000, 462.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
               0.000, -0.000, 1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('wood.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -612.000, -250.000, 462.000,
            -612.000, -250.000, -500.000,
            -612.000, 250.000, 462.000,
            -612.000, 250.000, -500.000,
            -612.000, 250.000, 462.000,
               -612.000, -250.000, -500.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            1.000, -0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, 0.000,
               1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('wood.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -650.000, -250.000, -500.000,
            -650.000, -250.000, 462.000,
            -650.000, 250.000, -500.000,
            -650.000, 250.000, 462.000,
            -650.000, 250.000, -500.000,
               -650.000, -250.000, 462.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, -0.000,
            -1.000, 0.000, 0.000,
               -1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('wood.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -612.000, -250.000, -500.000,
            -650.000, -250.000, -500.000,
            -612.000, 250.000, -500.000,
            -650.000, 250.000, -500.000,
            -612.000, 250.000, -500.000,
               -650.000, -250.000, -500.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
               0.000, 0.000, -1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('wood.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -650.000, 250.000, 462.000,
            -612.000, 250.000, 462.000,
            -650.000, 250.000, -500.000,
            -612.000, 250.000, -500.000,
            -650.000, 250.000, -500.000,
               -612.000, 250.000, 462.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
               0.000, 1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('wood.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -650.000, -250.000, -500.000,
            -612.000, -250.000, -500.000,
            -650.000, -250.000, 462.000,
            -612.000, -250.000, 462.000,
            -650.000, -250.000, 462.000,
               -612.000, -250.000, -500.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
               0.000, -1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('wood.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
function create_geometry_23(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            612.000, -250.000, 462.000,
            650.000, -250.000, 462.000,
            612.000, 250.000, 462.000,
            650.000, 250.000, 462.000,
            612.000, 250.000, 462.000,
               650.000, -250.000, 462.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
               0.000, -0.000, 1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('wood.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            650.000, -250.000, 462.000,
            650.000, -250.000, -500.000,
            650.000, 250.000, 462.000,
            650.000, 250.000, -500.000,
            650.000, 250.000, 462.000,
               650.000, -250.000, -500.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            1.000, -0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, 0.000,
               1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('wood.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            612.000, -250.000, -500.000,
            612.000, -250.000, 462.000,
            612.000, 250.000, -500.000,
            612.000, 250.000, 462.000,
            612.000, 250.000, -500.000,
               612.000, -250.000, 462.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, -0.000,
            -1.000, 0.000, 0.000,
               -1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               0.000, 1.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('wood.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            650.000, -250.000, -500.000,
            612.000, -250.000, -500.000,
            650.000, 250.000, -500.000,
            612.000, 250.000, -500.000,
            650.000, 250.000, -500.000,
               612.000, -250.000, -500.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
               0.000, 0.000, -1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('wood.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            612.000, 250.000, 462.000,
            650.000, 250.000, 462.000,
            612.000, 250.000, -500.000,
            650.000, 250.000, -500.000,
            612.000, 250.000, -500.000,
               650.000, 250.000, 462.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
               0.000, 1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('wood.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            612.000, -250.000, -500.000,
            650.000, -250.000, -500.000,
            612.000, -250.000, 462.000,
            650.000, -250.000, 462.000,
            612.000, -250.000, 462.000,
               650.000, -250.000, -500.000
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
               0.000, -1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.000,
               1.000, 0.000,
               0.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('wood.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
