import * as pc from 'playcanvas';

const canvas1 = document.getElementById('application1');
const app1 = new pc.Application(canvas1);
app1.setCanvasResolution(pc.RESOLUTION_AUTO);
app1.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
window.addEventListener("resize", function () {
        app1.resizeCanvas(canvas1.width, canvas1.height);
      });
app1.start();

const assets1 = [
    new pc.Asset('follower-sync', 'script', {
        url: '../scripts/follower-sync.mjs'
    }),
    // new pc.Asset('mitsukejima01', 'gsplat', {
    //     url: '../splats/202305.sog'
    // }),
    new pc.Asset('mitsukejima02', 'gsplat', {
        url: '../splats/202507.sog'
    })
    // new pc.Asset('mitsukejima03', 'gsplat', {
    //     url: '../splats/202508.sog'
    // }),
    // new pc.Asset('mitsukejima04', 'gsplat', {
    //     url: '../splats/20220620.sog'
    // })
];
const loader1 = new pc.AssetListLoader(assets1, app1.assets);
await new Promise(resolve => loader1.load(resolve));

const camera1 = new pc.Entity();
camera1.addComponent('camera', {
    fov: 30,
    toneMapping: pc.TONEMAP_ACES, 
    clearColor: new pc.Color(0.2, 0.2, 0.2)
});
camera1.setPosition(0, 1, 12);
camera1.addComponent('script');
camera1.script.create('followerSync');
app1.root.addChild(camera1);

const splat1 = new pc.Entity();
splat1.addComponent('gsplat', {asset: assets1[1]});
splat1.setEulerAngles(0, 0, 180);
app1.root.addChild(splat1);

app1.on('update', (dt) => {});

const canvas2 = document.getElementById('application2');
const app2 = new pc.Application(canvas2);
app2.setCanvasResolution(pc.RESOLUTION_AUTO);
app2.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
window.addEventListener("resize", function () {
        app2.resizeCanvas(canvas2.width, canvas2.height);
      });
app2.start();

const assets2 = [
    new pc.Asset('camera-controls', 'script', {
        url: '../scripts/camera-controls.mjs'
    }),
    new pc.Asset('leader-sync', 'script', {
        url: '../scripts/leader-sync.mjs'
    }),
    // new pc.Asset('mitsukejima01', 'gsplat', {
    //     url: '../splats/202305.sog'
    // }),
    // new pc.Asset('mitsukejima02', 'gsplat', {
    //     url: '../splats/202507.sog'
    // }),
    // new pc.Asset('mitsukejima03', 'gsplat', {
    //     url: '../splats/202508.sog'
    // }),
    new pc.Asset('mitsukejima04', 'gsplat', {
        url: '../splats/20220620.sog'
    })
];

const loader2 = new pc.AssetListLoader(assets2, app2.assets);
await new Promise(resolve => loader2.load(resolve));

const camera2 = new pc.Entity();
camera2.addComponent('camera', {
    fov: 30,
    toneMapping: pc.TONEMAP_ACES,
    clearColor: new pc.Color(0.2, 0.2, 0.2)
});
camera2.setPosition(0, 1, 12);
camera2.addComponent('script');
camera2.script.create('cameraControls', {
    properties: {
        enableFly: false,
        enablePan: false,
        focusPoint: pc.Vec3.ZERO,
        pitchRange: new pc.Vec2(-90, -5),
        sceneSize: 3,
        zoomRange: new pc.Vec2(0.5, 20)
    }
});
camera2.script.create('leaderSync');
app2.root.addChild(camera2);

const splat2 = new pc.Entity();
splat2.addComponent('gsplat', {asset: assets2[2]});
splat2.setEulerAngles(-1, -0.5, 180);
app2.root.addChild(splat2);

app2.on('update', (dt) => {});

    // enableFly: false,
    // enablePan: false,
    // focusPoint: [0, 0, 0],
    // pitchRange: [-90, 0],
    // sceneSize: 3,
    // zoomRange: [0.5, 10]