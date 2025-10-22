import {
  Script, Vec3, Quat,
  PROJECTION_PERSPECTIVE, PROJECTION_ORTHOGRAPHIC
} from 'playcanvas';

export class FollowerSync extends Script {
  static scriptName = 'followerSync';

  initialize() {
    this._p = new Vec3();
    this._q = new Quat();
    this.camera = this.entity.camera;

    window.addEventListener('shared-camera-pose', (e) => {
      const { p, q, fov, orthoHeight } = e.detail;

      this._p.set(p[0], p[1], p[2]);
      this._q.set(q[0], q[1], q[2], q[3]);

      this.app.on('prerender', () => {
        this.entity.setPosition(this._p);
        this.entity.setRotation(this._q);
      });
    }, { passive: true });
  }
}