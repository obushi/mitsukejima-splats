import { Script, Vec3, Quat, MOUSEBUTTON_LEFT } from 'playcanvas';

export class LeaderSync extends Script {
  static scriptName = 'leaderSync';

  initialize() {
    this._p = new Vec3();
    this._q = new Quat();
    this.camera = this.entity.camera;
  }

  update(dt) {
    this.app.once('prerender', () => {
      this._p.copy(this.entity.getPosition());
      this._q.copy(this.entity.getRotation());

        const detail = {
        p: [this._p.x, this._p.y, this._p.z],
        q: [this._q.x, this._q.y, this._q.z, this._q.w],
        fov: this.camera.fov
        };
        window.dispatchEvent(new CustomEvent('shared-camera-pose', { detail }));
    });
}
}